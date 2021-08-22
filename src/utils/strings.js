const escapeRegExp = (pattern) =>
  pattern.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");

export const getSubstringEntriesIndices = (str, substr) => {
  const result = [];

  if (str === "" || substr === "") return result;

  const regex = new RegExp(escapeRegExp(substr), "gim");
  let offset = 0;
  let index = str.search(regex);

  while (index >= 0) {
    result.push(index + offset);
    const deltaOffset = index + substr.length;

    str = str.slice(deltaOffset);
    offset += deltaOffset;

    index = str.search(regex);
  }

  return result;
};
