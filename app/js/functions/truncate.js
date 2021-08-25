const truncate = (item, n) => {
  let str = item.textContent;
  let strLength = str.length;
  let sliced = str.slice(0, n);
  if (sliced.length < strLength) {
    sliced += "...";
    item.textContent = sliced;
  }
};
export default truncate;
