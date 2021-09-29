import customSelectFunc from "./customSelect";
const cvFormAdd = () => {
  let buttons = document.querySelectorAll(".cv-form__add");
  let idCount = 0;
  if (buttons.length > 0) {
    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        let _this = e.currentTarget;
        idCount++;
        _this.parentNode.parentNode.insertAdjacentHTML(
          "beforebegin",
          `<div class="cv-form__row __students">
            <div class="cv-form__coll __students">
              <label class="cv-form__label __students " for="cv-language-${idCount}">
                Иностранный язык
                <sup class="red-color">*</sup>
              </label>
              <input class="cv-form__input __students  " id="cv-language-${idCount}" type="text" name="language" placeholder="Написать..." required="">
            </div>
          </div>`
        );
      });
    });
  }
};
export default cvFormAdd;
