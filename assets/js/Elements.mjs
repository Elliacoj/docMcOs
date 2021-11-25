class Elements {
    /**
     * Constructor
     */
    constructor() {
        this.xml = new XMLHttpRequest();
    }

    init(container) {
        this.xml.responseType = "json";
        this.xml.open("GET", "./api/index.php");
        this.xml.onload = () => {
            let response = this.xml.response;
            response.forEach((r) => {
                this.CreatElement(container, [r['img'], r['title'] + " page"]);
            });

            this.transformElement();
        }

        this.xml.send();

    }

    CreatElement(container, data) {
       let div = document.createElement("div");

       div.style.cssText = "width: 5rem; height: 5rem; background-image: url('./images/" + data[0] + "'); background-size: 100%; " +
           "cursor: pointer; margin: 0 0.3rem; background-position: center; background-repeat: no-repeat";
       div.className = "divElement";
       div.title = data[1];
       container.appendChild(div);
    }

    transformElement() {
        let divElement = document.querySelectorAll(".divElement");

        divElement.forEach(e => {
            e.addEventListener("mouseenter", () => {

                this.transform(e, 2, 2.3);

                if(e.nextElementSibling) {
                    this.transform(e.nextElementSibling, 1.6, 1.9);

                    if(e.nextElementSibling.nextElementSibling) {
                        this.transform(e.nextElementSibling.nextElementSibling, 1.3, 1.5);
                    }
                }

                if(e.previousElementSibling) {
                    this.transform(e.previousElementSibling, 1.6, 1.9);

                    if(e.previousElementSibling.previousElementSibling) {
                        this.transform(e.previousElementSibling.previousElementSibling, 1.3, 1.5);
                    }
                }

                e.addEventListener("mouseout", () => {
                    this.transform(e, 1, 0.3);

                    if(e.nextElementSibling) {
                        this.transform(e.nextElementSibling, 1, 0.3);

                        if(e.nextElementSibling.nextElementSibling) {
                            this.transform(e.nextElementSibling.nextElementSibling, 1, 0.3);
                        }
                    }

                    if(e.previousElementSibling) {
                        this.transform(e.previousElementSibling, 1, 0.3);

                        if(e.previousElementSibling.previousElementSibling) {
                            this.transform(e.previousElementSibling.previousElementSibling, 1, 0.3);
                        }
                    }
                })
            })
        })
    }

    transform(e, scaleD, marginD) {
        e.style.transform = "scale(" + scaleD + ", " + scaleD + ")";
        e.style.margin = "0 " + marginD + "rem";
    }
}

export {Elements};