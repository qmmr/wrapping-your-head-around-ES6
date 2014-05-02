export class Human {
    constructor ( firstName = 'Joe', lastName = 'Doe' ) {
        this.firstName = firstName
        this.lastName = lastName
    }

    toString () {
        return `${this.firstName} ${this.lastName}`
    }

    static greet () {
        return `Hello, I am a human!`
    }
}
