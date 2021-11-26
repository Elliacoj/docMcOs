class Elements {
    /**
     * Constructor
     */
    constructor() {

    }

    /**
     * Init elements
     * @param container
     * @param rate
     */
    init(container, rate) {
        let xml = new XMLHttpRequest();
        xml.responseType = "json";
        xml.open("GET", "./api/index.php");
        xml.onload = () => {
            let response = xml.response;
            response.forEach((r) => {
                this.CreatElement(container, [r['img'], r['title'] + " page"]);
            });

            this.transformElement(rate);
        }

        xml.send();

    }

    /**
     * Create an element
     * @param container
     * @param data
     * @constructor
     */
    CreatElement(container, data) {
        let div = document.createElement("div");
        let a = document.createElement("a");
        name = data[1].slice(0, data[1].indexOf(" "));
        a.href = "https://www." + name + ".com";
        a.target = "_blanc";
        a.style.cssText = "display: block; height: 100%; width: 100%;"
        div.style.cssText = "width: 5rem; height: 5rem; background-image: url('./images/" + data[0] + "'); background-size: 100%; " +
           "cursor: pointer; margin: 0 0.3rem; background-position: center; background-repeat: no-repeat; transition-duration: 500ms;";
        div.className = "divElement";
        div.title = data[1];
        container.appendChild(div);
        div.appendChild(a);
    }

    /**
     * Add a transform for all elements
     */
    transformElement(rate) {
        let divElement = document.querySelectorAll(".divElement");

        divElement.forEach(e => {
            e.addEventListener("mouseenter", () => {

                this.transform(e, 2, 2.3, rate);

                if(e.nextElementSibling) {
                    this.transform(e.nextElementSibling, 1.6, 1.9, rate);

                    if(e.nextElementSibling.nextElementSibling) {
                        this.transform(e.nextElementSibling.nextElementSibling, 1.3, 1.5, rate);
                    }
                }

                if(e.previousElementSibling) {
                    this.transform(e.previousElementSibling, 1.6, 1.9, rate);

                    if(e.previousElementSibling.previousElementSibling) {
                        this.transform(e.previousElementSibling.previousElementSibling, 1.3, 1.5, rate);
                    }
                }

                e.addEventListener("mouseout", () => {
                    this.transform(e, 1, 0.3, rate);

                    if(e.nextElementSibling) {
                        this.transform(e.nextElementSibling, 1, 0.3, rate);

                        if(e.nextElementSibling.nextElementSibling) {
                            this.transform(e.nextElementSibling.nextElementSibling, 1, 0.3, rate);
                        }
                    }

                    if(e.previousElementSibling) {
                        this.transform(e.previousElementSibling, 1, 0.3,  rate);

                        if(e.previousElementSibling.previousElementSibling) {
                            this.transform(e.previousElementSibling.previousElementSibling, 1, 0.3, rate);
                        }
                    }
                })
            })
        })
    }

    /**
     * Transform parameter
     * @param e
     * @param scaleD
     * @param marginD
     * @param rate
     */
    transform(e, scaleD, marginD, rate) {
        e.style.transform = "scale(" + scaleD + ", " + scaleD + ")";
        if(rate === "top" || rate === "bottom") {
            e.style.margin = "0 " + marginD + "rem";
        }
        else {
            e.style.margin = "" + marginD + "rem 0";
        }
    }
}

export {Elements};