export class Human {
    constructor ( firstName = 'Joe', lastName = 'Doe' ) {
        this.firstName = firstName
        this.lastName = lastName
    }

    toString () {
        console.log( `${this.firstName} ${this.lastName}` )
    }

    static greet () {
        console.log( `Hello, I am a human!` )
    }
}
