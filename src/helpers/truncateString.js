export const truncateString = (str, countSymbol) => {
  if (str.length > countSymbol) {
    return `${str.slice(0, countSymbol - 1)}...`;
  }
  return str;
};
