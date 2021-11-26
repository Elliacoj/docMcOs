class ModalWindow {
    /**
     * Constructor
     */
    constructor() {
        this.divContainer = document.createElement("div");
        this.title = document.createElement("h2");
    }

    /**
     * Init the modal window
     * @param width
     * @param title
     * @param color
     */
    init(width, title, color) {
        this.divContainer.style.cssText = "width:" + width + "; margin: 6rem auto; border: 1px solid black; box-shadow: 5px 5px 5px darkgrey;" +
            " background-image:url('./build/images/fond.png'); z-index: 10; position: relative;";
        this.title.innerHTML = title;
        this.title.style.cssText = "text-align: center; padding: 2rem 0";

        this.divContainer.appendChild(this.title);
        document.body.appendChild(this.divContainer);
    }

    async add() {
        let divImg = document.createElement("div");
        let divName = document.createElement("div");
        let divButton = document.createElement("div");
        let img = document.createElement("input");
        let label = document.createElement("label");
        let name = document.createElement("input");
        let buttonAdd = document.createElement("button");
        let buttonBack = document.createElement("button");

        img.type = "file";
        label.innerHTML = "Nom:";
        buttonAdd.innerHTML = "Ajouter";
        buttonBack.innerHTML = "Annuler";

        divName.style.cssText = "display: flex; justify-content: center; margin: 2rem 0";
        divImg.style.cssText = "display: flex; justify-content: center; margin: 1rem 0";
        divButton.style.cssText = "margin: 2rem 0; display: flex; flex-wrap: nowrap; justify-content: space-around;";
        buttonAdd.style.cssText = "padding: 1rem; font-weight: bold;";
        buttonBack.style.cssText = "padding: 1rem; font-weight: bold;";
        label.style.marginRight = "1rem";

        buttonBack.id = "back";
        buttonAdd.id = "add";
        img.id = "imgAdd";
        name.id = "nameAdd";

        divName.appendChild(label);
        divName.appendChild(name);
        divImg.appendChild(img);
        divButton.appendChild(buttonAdd);
        divButton.appendChild(buttonBack);

        this.divContainer.appendChild(divName);
        this.divContainer.appendChild(divImg);
        this.divContainer.appendChild(divButton);
    }

    async back() {
        document.getElementById("back").addEventListener("click", ()=> {
            this.divContainer.innerHTML = "";
            this.divContainer.remove();
        })
    }

    async addButton() {
        document.getElementById("add").addEventListener("click", () => {
           let imgAdd = document.getElementById("imgAdd");
           let name = document.getElementById("nameAdd");

           if(imgAdd.value !== null && name.value !== "") {
               let xml = new XMLHttpRequest();
               xml.responseType = "json";
               xml.open("PUT", "./api/index.php");
               xml.send(JSON.stringify({"name": name.value, "img": imgAdd.value}));
           }
        });
    }
}

export {ModalWindow};