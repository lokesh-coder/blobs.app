import generator from "blobshape"
import { boundActions, store } from "./state"
import * as dynamics from "dynamics.js"
import generateName from "project-name-generator"

const BLOBS_KEY = "blobs"
const paramsMap = {
  c: {
    name: "color",
    encode: v => v.replace("#", ""),
    decode: v => `#${v}`,
  },
  g: {
    name: "colors",
    encode: c => c.map(d => d.replace("#", "")).join("|"),
    decode: c => c.split("|").map(d => `#${d}`),
  },
  o: {
    name: "isOutline",
    encode: v => (v ? "1" : "0"),
    decode: v => Boolean(Number(v)),
  },
  e: {
    name: "edges",
    encode: v => v,
    decode: v => Number(v),
  },
  img: {
    name: "image",
    encode: v => v,
    decode: v => v,
  },
  pat: {
    name: "pattern",
    encode: v => v,
    decode: v => v,
  },
  gw: {
    name: "growth",
    encode: v => v,
    decode: v => Number(v),
  },
  se: {
    name: "seed",
    encode: v => v,
    decode: v => Number(v),
  },
}

/* ANIAMTE */
const animate = (path, id = "blob") => {
  const element = document.getElementById(id)
  if (!element) return
  const config = {
    type: dynamics.spring,
    frequency: 200,
    friction: 100,
    duration: 1200,
  }
  dynamics.animate(element, { d: path }, config)
}

export const formatCode = string => {
  function format(node, level) {
    let indentBefore = new Array(level++ + 1).join("  "),
      indentAfter = new Array(level - 1).join("  "),
      textNode

    for (let i = 0; i < node.children.length; i++) {
      textNode = document.createTextNode("\n" + indentBefore)
      node.insertBefore(textNode, node.children[i])

      format(node.children[i], level)

      if (node.lastElementChild == node.children[i]) {
        textNode = document.createTextNode("\n" + indentAfter)
        node.appendChild(textNode)
      }
    }

    return node
  }

  const div = document.createElement("div")
  div.innerHTML = string.trim()

  return format(div, 0).innerHTML
}

export const validateHex = input => {
  let check, len
  if (typeof input != "string" || input[0] !== "#") return false
  len = input.length
  if (len === 4 || len === 7) {
    input = input.toLowerCase() // convert to lower case
    check =
      "#" +
      ("00000000" + parseInt(input.substr(1), 16).toString(16)).substr(1 - len)
    return check === input
  }
  return false
}

export const getLocallySavedBlobs = () => {
  const blobs = localStorage.getItem(BLOBS_KEY)
  return JSON.parse(blobs)
}

export const saveBlobDataLocally = data => {
  const newData = {
    ...data,
    name: generateName({ words: 2 }).spaced,
    url: `/${location.search}`,
  }
  const allBlobs = getLocallySavedBlobs()
  localStorage.setItem(
    BLOBS_KEY,
    JSON.stringify([...(allBlobs || []), newData])
  )
}

export const deleteLocallySavedBlob = id => {
  const allBlobs = getLocallySavedBlobs()
  const newBlobsData = allBlobs.filter(blob => blob.id !== id)
  localStorage.setItem(BLOBS_KEY, JSON.stringify(newBlobsData))
}

/* URL UTILS */

const parseURLParams = () => {
  const knownParams = Object.keys(paramsMap)
  const url = new URL(document.URL)
  let params = {}
  for (const [key, value] of url.searchParams.entries()) {
    if (knownParams.includes(key))
      params[paramsMap[key].name] = paramsMap[key].decode(value)
  }
  if (params.colors) params.type = "gradient"
  if (params.image) params.type = "image"
  if (params.pattern) params.type = "pattern"
  return params
}

const stringifyURLParams = urlParams => {
  const props = { ...urlParams }
  if (props.type === "solid") {
    delete props.colors
    delete props.image
    delete props.pattern
  } else if (props.type == "gradient") {
    delete props.color
    delete props.image
    delete props.pattern
  } else if (props.type == "pattern") {
    delete props.color
    delete props.colors
    delete props.image
  } else if (props.type == "image") {
    delete props.colors
    delete props.color
    delete props.pattern
  }
  delete props.type
  const params = {}
  const paramsKeyMap = Object.entries(paramsMap).reduce((acc, arr) => {
    acc[arr[1].name] = { ...arr[1], name: arr[0] }
    return acc
  }, {})
  Object.keys(props).forEach(p => {
    if (paramsKeyMap[p])
      params[paramsKeyMap[p].name] = paramsKeyMap[p].encode(props[p])
  })

  return Object.entries(params)
    .reduce((acc, arr) => {
      acc.push(`${arr[0]}=${arr[1]}`)
      return acc
    }, [])
    .join("&")
}

const updateUrl = props => {
  const url = stringifyURLParams(props)
  window.history.pushState({}, null, `?${url}`)
}
/* BLOB UTILS */

const generateBlob = props => {
  return generator({ ...props, size: 500 })
}

const updateStore = state => {
  boundActions.setStaticBlobData(state)
}

const createRandomBlobFromDefault = storeProps => {
  const { path: svgPath, seedValue: seed } = generateBlob(storeProps)
  return { svgPath, seed }
}

const createFixedBlobFromURLParams = params => {
  const { path: svgPath } = generateBlob(params)
  return { svgPath }
}

const createFixedBlobFromProps = props => {
  const { path: svgPath } = generateBlob(props)
  return { svgPath }
}

const createRandomBlobFromProps = props => {
  const { path: svgPath, seedValue: seed } = generateBlob({
    ...props,
    seed: null,
  })
  return { svgPath, seed }
}

export const createInitialBlob = defaultProps => {
  let state = {}
  const params = parseURLParams()
  if (Object.keys(params).length) {
    state = createFixedBlobFromURLParams(params)
  } else {
    state = createRandomBlobFromDefault(defaultProps)
    updateUrl({ ...defaultProps, ...state })
  }
  updateStore({ ...params, ...state })
  animate(state.svgPath)
}

export const createFixedBlob = props => {
  const state = createFixedBlobFromProps(props)
  updateStore(state)
  animate(state.svgPath)
  updateUrl({ ...props, ...state })
}

export const createRandomBlob = () => {
  const currentState = store.getState()
  const state = createRandomBlobFromProps(currentState)
  updateStore(state)
  animate(state.svgPath)
  updateUrl({ ...currentState, ...state })
}

export const setBlobTheme = props => {
  const currentState = store.getState()
  updateStore(props)
  updateUrl({ ...currentState, ...props })
}
