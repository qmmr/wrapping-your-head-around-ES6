export class SuperHuman extends Human {
    constructor ( firstName, lastName, alias, superpower ) {
        super( firstName, lastName )
        this.alias = alias
        this.superpower = superpower
    }

    toString () {
        super()
        console.log( `Hello, I am a Superhuman` )
    }

    useSuperpower () {
        console.log( `${this.alias} uses ${this.superpower}` )
    }
}
