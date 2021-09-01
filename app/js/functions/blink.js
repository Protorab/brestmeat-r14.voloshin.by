const blink = (e, time) => {
  const _this = e.currentTarget;
  const span = document.createElement("span");
  span.classList.add("blink");
  let targetCoords = e.currentTarget.getBoundingClientRect();
  _this.appendChild(span);
  let yCoord = e.clientY - targetCoords.top;
  let xCoord = e.clientX - targetCoords.left;
  span.style.top = `${yCoord}px`;
  span.style.left = `${xCoord}px`;
  setTimeout(() => {
    try {
      _this.removeChild(span);
    } catch (error) {}
  }, time);
};
export default blink;
