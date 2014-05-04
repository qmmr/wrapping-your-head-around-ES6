export class SuperHuman extends Human {
    constructor ( firstName, lastName, alias, superpower ) {
        super( firstName, lastName )
        this.alias = alias
        this.superpower = superpower
    }

    useSuperpower () {
        return `${this.alias} uses ${this.superpower}`
    }

    static getFulln() {
        return super() + ` Pssst... I am also Superhuman!`
    }
}
