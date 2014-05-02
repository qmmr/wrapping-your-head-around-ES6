export class SuperHuman extends Human {
    constructor ( firstName, lastName, alias, superpower ) {
        super( firstName, lastName )
        this.alias = alias
        this.superpower = superpower
    }

    toString () {
        return `Hello, I am a Superhuman`
    }

    useSuperpower () {
        return `${this.alias} uses ${this.superpower}`
    }

    static greet() {
        return super() + ` Pssst... I am also Superhuman!`
    }
}
