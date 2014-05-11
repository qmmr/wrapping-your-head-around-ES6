export class Human {
    constructor ( firstName = 'Joe', lastName = 'Doe', occupation = 'redundant' ) {
        this.firstName = firstName
        this.lastName = lastName
        this._occupation = occupation
    }

    greet () {
        return `Hi, my name is ${this.firstName} ${this.lastName}`
    }

    get fullName () {
        return `${this.lastName}, ${this.firstName}`
    }

    get occupation () {
        return this._occupation
    }

    set occupation ( occupation ) {
        return this._occupation = occupation
    }

    static type () {
        return 'human'
    }
}
