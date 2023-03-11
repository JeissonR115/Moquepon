window.addEventListener('load', main);
const moqueponList = []
const ramdon = (min,max) => Math.floor(Math.random()*((max - min + 1)-1));
function checkMoqueponSelection() {
    let moquepon = 'indefinido'
    for (let i = 0; i < moqueponList.length; i++) {
        const check = document.getElementById(moqueponList[i].id).checked ;
        if(check){
            moquepon=moqueponList[i]
            i =  moqueponList.length
        }
    }
    console.log('el moquepon es ' + moquepon.id)
    return moquepon
}

const element = {
    water: "water",
    eart: "eart",
    fire: "fire",
    air: "air",
}
class Moquepon{
    constructor({
        id,
        name,
        hp,
        type,
        spr = "https://static-s.aa-cdn.net/img/ios/1094591345/84aa6df8993c6a860463aa7baa3fe125?v=1",
        attacks = [],
    }){
        this.id = id
        this.name = name
        this.hp = hp
        this.type = type
        this.spr = spr
        this.attacks = attacks

        this.showInHtml()
    }

    showInHtml(){
        const moqueponsList = document.querySelector('.moquepons-list')
        const div = document.createElement("div")
        const label = document.createElement("label")//.setAttribute('id',this.id).setAttribute('for',this.id)
        const title = document.createElement("h3")
        const img = document.createElement("img")//.setAttribute('href',this.spr)
        const input = document.createElement("input")
        
        moqueponsList.appendChild(div)
        div.setAttribute('class','moquepon-container')
        div.setAttribute('id',this.id+'-container')
        div.setAttribute('for',this.id)

        div.appendChild(label)

        label.setAttribute('for',this.id)
        label.appendChild(title)
        title.innerText = this.name
        label.appendChild(img)
        img.setAttribute('src',this.spr)
        img.setAttribute('alt', 'Una imagen de '+this.name)

        div.appendChild(input)
        
        input.setAttribute('id',this.id)
        input.setAttribute('type','radio')
        input.setAttribute('name','list-moquepons')

        moqueponList.push(this)
    }
}
class Attack{
    constructor({
        name,
        type,
        icon,
        baseDamage = 10,
    }){
        this.name = name
        this.type = type
        this.icon = icon
        this.baseDamage = baseDamage
    }
}

const tapicoco = new Moquepon({
    id:'tapicoco',
    name:'Tapicoco',
    hp: 200,
    type: element.fire,
    attacks: [],
    spr: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/charizard.png'
});
const hiren = new Moquepon({
    id:'hiren',
    name:'Hiren',
    hp: 200,
    type: element.fire,
    attacks: [],
    spr: 'https://ori-prod.azureedge.net/wp-content/uploads/2021/09/cropped-favicon-Ori-v1.png'
});
const cornet = new Moquepon({
    id:'cornet',
    name:'Cornet',
    hp: 200,
    type: element.fire,
    attacks: [],
    spr: 'https://ih1.redbubble.net/image.1393911421.0347/flat,128x128,075,f-pad,128x128,f8f8f8.jpg'//'https://pbs.twimg.com/media/Enb0BjdXIAEO8a_.jpg:large'
});





function main() {
    const moqueponSelectionButton = document.querySelector("#moquepon-selection-button")
    moqueponSelectionButton.addEventListener('click',checkMoqueponSelection)

}