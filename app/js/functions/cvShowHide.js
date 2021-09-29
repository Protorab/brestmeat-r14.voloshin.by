const cvShowHide = () => {
  let triggers = document.querySelectorAll("*[data-visible-state]");
  if (triggers.length > 0) {
    triggers.forEach((item) => {
      item.addEventListener("click", (e) => {
        let _this = e.currentTarget;
        let state = _this.dataset.visibleState;
        let blocId = _this.dataset.id;
        let needBlock = document.getElementById(`${blocId}`);
        let isRequired = _this.dataset.required;
        let textarea = needBlock.querySelector("textarea");
        let inputs = needBlock.querySelectorAll("input");
        needBlock.style.display = state;
        textarea ? textarea.setAttribute("required", isRequired) : "";
        if (inputs.length > 0) {
          for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i];
            input.setAttribute("required", isRequired);
          }
        }
      });
    });
  }
};
export default cvShowHide;
