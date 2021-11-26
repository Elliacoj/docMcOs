import {Container} from "./Container.mjs";
import {ButtonAdd} from "./ButtonAdd.js";


const container = new Container();
container.init();

const buttonAdd = new ButtonAdd();
buttonAdd.init();
buttonAdd.click(container);