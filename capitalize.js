function capitalize(string) {
  const re = /[a-zA-Z]/gm;
  const firstChar = string.charAt(0);
  if (firstChar.match(re)) return firstChar.toUpperCase();
  else return "Please input a-zA-z as first character only";
}

module.exports = capitalize;
