import '@fortawesome/fontawesome-free/js/all.js';
import {ModalWindow} from "./ModalWindow";

class ButtonAdd {
    /**
     * Constructor
     */
    constructor() {
        this.button = document.createElement("div");
        this.div = document.createElement("div");
        this.img = document.createElement("i");
        this.modalWindow = new ModalWindow();
        this.checkClick = true;
    }

    /**
     * Init the button add
     */
    init() {
        this.button.style.cssText = "width: 100%; text-align: center; position: fixed; top: 40vh;";
        this.img.style.cursor = "pointer";
        this.img.className = "far fa-plus-square";
        this.img.style.fontSize = "6rem";
        this.div.style.display = "inline";
        this.div.appendChild(this.img)
        this.button.appendChild(this.div);
        document.body.appendChild(this.button);
    }

    /**
     * Add a modal window by a click
     */
    click(containerImg) {
        this.div.addEventListener("click", () => {
            if(this.checkClick === true) {
                this.modalWindow.init("40%", "Ajouter une icone.", "orangered");
                this.checkClick = false;

                this.modalWindow.add().then(() => {
                    this.modalWindow.back().then(() => {
                        document.getElementById("back").addEventListener("click", ()=> this.checkClick = true);
                    });
                    this.modalWindow.addButton(containerImg).then(() => {
                        document.getElementById("add").addEventListener("click", ()=> this.checkClick = true);
                    })
                });
            }
        });
    }
}
export {ButtonAdd};