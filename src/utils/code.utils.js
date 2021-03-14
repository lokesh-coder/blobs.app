/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
export const formatCode = (string) => {
  function format(node, level) {
    const indentBefore = new Array(level++ + 1).join('  ');
    const indentAfter = new Array(level - 1).join('  ');
    let textNode;

    for (let i = 0; i < node.children.length; i++) {
      textNode = document.createTextNode(`\n${indentBefore}`);
      node.insertBefore(textNode, node.children[i]);

      format(node.children[i], level);

      if (node.lastElementChild === node.children[i]) {
        textNode = document.createTextNode(`\n${indentAfter}`);
        node.appendChild(textNode);
      }
    }

    return node;
  }

  const div = document.createElement('div');
  div.innerHTML = string.trim();
  const formattedStr = format(div, 0).innerHTML;
  return formattedStr.replace(/^\s+|\s+$/g, '');
};

export const validateHex = (input) => {
  let check;
  if (typeof input != 'string' || input[0] !== '#') return false;
  const len = input.length;
  if (len === 4 || len === 7) {
    input = input.toLowerCase(); // convert to lower case
    check = `#${`00000000${parseInt(input.substr(1), 16).toString(16)}`.substr(
      1 - len,
    )}`;
    return check === input;
  }
  return false;
};
