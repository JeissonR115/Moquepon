export default class Moquepon {
    constructor({
        id,
        name,
        hp,
        type,
        spr = "https://static-s.aa-cdn.net/img/ios/1094591345/84aa6df8993c6a860463aa7baa3fe125?v=1",
        attacks = [],
    }) {
        this.id = id
        this.name = name
        this.hp = hp
        this.type = type
        this.spr = spr
        this.attacks = attacks

        moqueponList.push(this)
    }
    showInHtml() {
        const moqueponsList = document.querySelector('.moquepons-list')
        const div = document.createElement("div")
        const label = document.createElement("label")//.setAttribute('id',this.id).setAttribute('for',this.id)
        const title = document.createElement("h3")
        const img = document.createElement("img")//.setAttribute('href',this.spr)
        const input = document.createElement("input")

        moqueponsList.appendChild(div)
        div.setAttribute('class', 'moquepon-container')
        div.setAttribute('id', this.id + '-container')
        div.setAttribute('for', this.id)

        div.appendChild(label)

        label.setAttribute('for', this.id)
        label.appendChild(title)
        title.innerText = this.name
        label.appendChild(img)
        img.setAttribute('src', this.spr)
        img.setAttribute('alt', 'Una imagen de ' + this.name)

        div.appendChild(input)

        input.setAttribute('id', this.id)
        input.setAttribute('type', 'radio')
        input.setAttribute('name', 'list-moquepons')
    }
};
export const moqueponList = [];