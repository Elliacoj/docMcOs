import "@fortawesome/fontawesome-free/js/all.js"

class MoveList {
    constructor() {
        this.container = document.createElement("div");
        this.top = document.createElement("div");
        this.bottom = document.createElement("div");
        this.left = document.createElement("div");
        this.right = document.createElement("div");
        this.topI = document.createElement("i");
        this.bottomI = document.createElement("i");
        this.leftI = document.createElement("i");
        this.rightI = document.createElement("i");
    }

    init() {
        this.topI.className = "fas fa-chevron-up button";
        this.bottomI.className = "fas fa-chevron-down button";
        this.leftI.className = "fas fa-chevron-left button";
        this.rightI.className = "fas fa-chevron-right button";
        this.top.className = "button";
        this.bottom.className = "button";
        this.left.className = "button";
        this.right.className = "button";

        this.top.id = "top";
        this.bottom.id = "bottom";
        this.left.id = "left";
        this.right.id = "right";

        this.container.style.cssText = "display: flex; flex-wrap: nowrap; position: fixed; top: 50vh; justify-content: center; width: 100%";
        this.top.style.cssText = "margin: 0 0.5rem; cursor: pointer;";
        this.bottom.style.cssText = "margin: 0 0.5rem; cursor: pointer;";
        this.left.style.cssText = "margin: 0 0.5rem; cursor: pointer;";
        this.right.style.cssText = "margin: 0 0.5rem; cursor: pointer;";

        this.top.appendChild(this.topI);
        this.bottom.appendChild(this.bottomI);
        this.left.appendChild(this.leftI);
        this.right.appendChild(this.rightI);
        this.container.appendChild(this.top);
        this.container.appendChild(this.bottom);
        this.container.appendChild(this.left);
        this.container.appendChild(this.right);
        document.body.appendChild(this.container);
    }

    change(containerImg) {
        document.querySelectorAll(".button").forEach((e) => {
            e.addEventListener("click", () => {

                document.getElementById("containerImg").innerHTML = "";
                document.getElementById("containerImg").remove()
                containerImg.init(e.id);
            })
        })
    }
}

export {MoveList};