import {Container} from "./Container.mjs";
import {ButtonAdd} from "./ButtonAdd.js";
import {MoveList} from "./MoveList.js";


const container = new Container();
container.init("left");

const buttonAdd = new ButtonAdd();
buttonAdd.init();
buttonAdd.click(container);

const moveList = new MoveList();
moveList.init();
moveList.change(container);