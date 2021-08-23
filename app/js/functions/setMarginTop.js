const setMarginTop = (object, padObject) => {
  let topElement = document.querySelector(object);
  let bottomElement = document.querySelector(padObject);
  if (topElement) {
    let headerHeight = topElement.offsetHeight - 10 + "px";
    bottomElement.style.marginTop = headerHeight;
  }
};
export default setMarginTop;
