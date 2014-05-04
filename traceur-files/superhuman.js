var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export class SuperHuman extends Human {
    constructor ( firstName, lastName, alias = 'superhuman' , superpowers = [] ) {
        super( firstName, lastName )
        this.alias = alias
        this.superpowers= superpowers
    }

    greet () {
        return `Hi, I am ${this.alias}`
    }

    revealIdentity () {
        return `${super.greet()} a.k.a. ${this.alias} and I am a ${SuperHuman.type()}.`
    }

    useSuperpower () {
        var randomNum = getRandom(0, this.superpowers.length - 1)
        return `${this.alias} uses the ${this.superpowers[randomNum]}!`
    }

    static type() {
        return 'superhuman'
    }
}
