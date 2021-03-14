const paramsMap = {
  c: {
    name: 'color',
    encode: (v) => v.replace('#', ''),
    decode: (v) => `#${v}`,
  },
  g: {
    name: 'colors',
    encode: (c) => c.map((d) => d.replace('#', '')).join('|'),
    decode: (c) => c.split('|').map((d) => `#${d}`),
  },
  o: {
    name: 'isOutline',
    encode: (v) => (v ? '1' : '0'),
    decode: (v) => Boolean(Number(v)),
  },
  e: {
    name: 'edges',
    encode: (v) => v,
    decode: (v) => Number(v),
  },
  img: {
    name: 'image',
    encode: (v) => v,
    decode: (v) => v,
  },
  pat: {
    name: 'pattern',
    encode: (v) => v,
    decode: (v) => v,
  },
  gw: {
    name: 'growth',
    encode: (v) => v,
    decode: (v) => Number(v),
  },
  se: {
    name: 'seed',
    encode: (v) => v,
    decode: (v) => Number(v),
  },
};

const parseURLParams = () => {
  const knownParams = Object.keys(paramsMap);
  const url = new URL(document.URL);
  const params = {};
  for (const [key, value] of url.searchParams.entries()) {
    if (knownParams.includes(key)) {
      params[paramsMap[key].name] = paramsMap[key].decode(value);
    }
  }
  if (params.colors) params.type = 'gradient';
  if (params.image) params.type = 'image';
  if (params.pattern) params.type = 'pattern';
  return params;
};

const stringifyURLParams = (urlParams) => {
  const props = { ...urlParams };
  if (props.type === 'solid') {
    delete props.colors;
    delete props.image;
    delete props.pattern;
  } else if (props.type === 'gradient') {
    delete props.color;
    delete props.image;
    delete props.pattern;
  } else if (props.type === 'pattern') {
    delete props.color;
    delete props.colors;
    delete props.image;
  } else if (props.type === 'image') {
    delete props.colors;
    delete props.color;
    delete props.pattern;
  }
  delete props.type;
  const params = {};
  const paramsKeyMap = Object.entries(paramsMap).reduce((acc, arr) => {
    acc[arr[1].name] = { ...arr[1], name: arr[0] };
    return acc;
  }, {});
  Object.keys(props).forEach((p) => {
    if (paramsKeyMap[p]) {
      params[paramsKeyMap[p].name] = paramsKeyMap[p].encode(props[p]);
    }
  });

  return Object.entries(params)
    .reduce((acc, arr) => {
      acc.push(`${arr[0]}=${arr[1]}`);
      return acc;
    }, [])
    .join('&');
};

const updateUrl = (props) => {
  const url = stringifyURLParams(props);
  window.history.pushState({}, null, `?${url}`);
};

export { parseURLParams, updateUrl, stringifyURLParams };
