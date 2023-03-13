import Moquepon from "./Moquepon.js";
import { moqueponList } from "./Moquepon.js";
import Attack from "./Attack.js";

window.addEventListener("load", main);

const ramdon = (min, max) => Math.floor(Math.random() * (max - min + 1 - 1));
function checkMoqueponSelection() {
    let moquepon = "indefinido";
    for (let i = 0; i < moqueponList.length; i++) {
        const check = document.getElementById(moqueponList[i].id).checked;
        if (check) {
            moquepon = moqueponList[i];
            i = moqueponList.length;
        }
    }
    console.log("el moquepon es " + moquepon.id);
    return moquepon;
}

const element = {
    water: "water",
    eart: "eart",
    fire: "fire",
    air: "air",
};

const tapicoco = new Moquepon({
    id: "tapicoco",
    name: "Tapicoco",
    hp: 200,
    type: element.fire,
    attacks: [],
    spr: "https://img.pokemondb.net/sprites/scarlet-violet/normal/charizard.png",
});
const hiren = new Moquepon({
    id: "hiren",
    name: "Hiren",
    hp: 200,
    type: element.fire,
    attacks: [],
    spr: "https://ori-prod.azureedge.net/wp-content/uploads/2021/09/cropped-favicon-Ori-v1.png",
});
const cornet = new Moquepon({
    id: "cornet",
    name: "Cornet",
    hp: 200,
    type: element.fire,
    attacks: [],
    spr: "https://ih1.redbubble.net/image.1393911421.0347/flat,128x128,075,f-pad,128x128,f8f8f8.jpg", //'https://pbs.twimg.com/media/Enb0BjdXIAEO8a_.jpg:large'
});

function main() {
    const moqueponSelectionButton = document.querySelector(
        "#moquepon-selection-button"
    );
    moqueponSelectionButton.addEventListener("click", checkMoqueponSelection);

    for (let i = 0; i < moqueponList.length; i++) {
        moqueponList[i].showInHtml();
    }
}
