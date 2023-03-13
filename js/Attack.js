export default class Attack {
    constructor({
        name,
        type,
        icon,
        baseDamage = 10,
    }) {
        this.name = name
        this.type = type
        this.icon = icon
        this.baseDamage = baseDamage
    }
}