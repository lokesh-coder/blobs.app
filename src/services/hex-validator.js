const hexValidator = (input) => {
  let check, len;
  if (typeof input != "string" || input[0] !== "#") return false;
  len = input.length;
  if (len === 4 || len === 7) {
    input = input.toLowerCase(); // convert to lower case
    check =
      "#" +
      ("00000000" + parseInt(input.substr(1), 16).toString(16)).substr(1 - len);
    return check === input;
  }
  return false;
};

export default hexValidator;
