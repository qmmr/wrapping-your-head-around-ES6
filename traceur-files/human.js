export class Human {
    constructor ( firstName = 'Joe', lastName = 'Doe' ) {
        this.firstName = firstName
        this.lastName = lastName
    }

    greet () {
        return `Hi, my name is ${this.firstName} ${this.lastName}`
    }

    static type () {
        return 'human'
    }
}
