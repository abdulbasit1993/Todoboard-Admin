export const truncate = (str, max = 100) => {
  if (str?.length > max) {
    return `${str.slice(0, max)}...`;
  } else {
    return str;
  }
};
