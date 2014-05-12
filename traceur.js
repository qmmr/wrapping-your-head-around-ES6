'use strict';
var log = console.log

// =============================================================================
// Classes
// =============================================================================

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
// Classes extend
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































// =============================================================================
// Getters & Setters
// =============================================================================

// class Human {
//     constructor ( firstName = 'Joe', lastName = 'Doe' ) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }

//     get fullName () { return `${this.lastName}, ${this.firstName}` }

//     get occupation () { return `Occupation: ${this._occupation}` }

//     set occupation ( occupation ) { return this._occupation = occupation }
// }

// var human = new Human
// log( human.fullName ) // Doe, John
// log( human.occupation ) // undefined
// human.occupation = 'Front-end Developer'
// log( human.occupation ) // 'Occupation: Front-end Developer'
