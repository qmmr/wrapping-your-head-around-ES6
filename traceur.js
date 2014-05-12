'use strict';

// class Human {
//     constructor ( firstName = 'Joe', lastName = 'Doe' ) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }

//     greet () {
//         return `Hi, my name is ${this.firstName} ${this.lastName}`
//     }

//     static type () {
//         return 'human'
//     }
// }

// var human = new Human( 'Anakin', 'Skywalker' )
// console.log( human.greet() )

// =============================================================================

// class SuperHuman extends Human {
//     constructor ( firstName, lastName, alias = 'superhuman' , superpowers = [] ) {
//         super( firstName, lastName )
//         this.alias = alias
//         this.superpowers= superpowers
//     }

//     greet () {
//         return `Hi, I am ${this.alias}.`
//     }

//     revealIdentity () {
//         return `${super.greet()} a.k.a. ${this.alias} and I am a ${SuperHuman.type()}.`
//     }

//     useSuperpower () {
//         return `${this.alias} uses the ${this.superpowers[0]}!`
//     }

//     static type() {
//         return 'superhuman'
//     }
// }

// var spiderMan = new SuperHuman( 'Peter', 'Parker', 'Spider-Man', ['web attack'])
// console.log( spiderMan.greet() )
// console.log( spiderMan.revealIdentity() )
// console.log( spiderMan.useSuperpower() )
