import "@fortawesome/fontawesome-free/js/all.js";
class ButtonAdd {
    constructor() {
        this.button = document.createElement("div");
        this.img = document.createElement("i");
    }

    init() {
        this.button.style.cssText = "position: fixed; top: 40vh; right:49%";
        this.img.className = "far fa-plus-square";
        this.img.style.fontSize = "6rem";

        this.button.appendChild(this.img);
        document.body.appendChild(this.button);
    }
}
export {ButtonAdd};