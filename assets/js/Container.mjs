import {Elements} from "./Elements.mjs";

class Container {
    /**
     * Constructor
     */
    constructor() {
        this.container = document.createElement("div");
        this.elements = new Elements();
    }

    /**
     * Init the container
     */
    init(rate) {
        if(rate === "bottom") {
            this.container.style.cssText = "width: 100%; position: fixed; bottom: 0; height: 10rem; " +
                "display: flex; flex-wrap: nowrap; justify-content: center; align-items: center; z-index: 20;";
        }
        else if(rate === "top") {
            this.container.style.cssText = "width: 100%; position: fixed; height: 10rem; " +
                "display: flex; flex-wrap: nowrap; justify-content: center; align-items: center; z-index: 20;";
        }
        else if(rate === "left") {
            this.container.style.cssText = "position: fixed; width: 10rem; height: 100vh; " +
                "display: flex; flex-direction: column; justify-content: center; align-items: center; z-index: 20;";
        }
        else {
            this.container.style.cssText = "position: fixed; width: 10rem; height: 100vh; right: 0; " +
                "display: flex; flex-direction: column; justify-content: center; align-items: center; z-index: 20;";
        }


        this.container.id = "containerImg";
        this.container.draggable = true;

        document.body.appendChild(this.container);

        this.elements.init(this.container, rate);
    }
}

export {Container};