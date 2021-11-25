import {Elements} from "./Elements.mjs";

class Container {
    /**
     * Constructor
     */
    constructor() {
        this.container = document.createElement("div");
        this.elements = new Elements();
    }

    init() {
        this.container.style.cssText = "width: 100%; position: fixed; bottom: 0; height: 10rem; " +
            "display: flex; flex-wrap: nowrap; justify-content: center; align-items: center";

        document.body.appendChild(this.container);

        this.elements.init(this.container);
    }
}

export {Container};