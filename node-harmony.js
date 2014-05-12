'use strict';

// =============================================================================
// Function Constructors
// =============================================================================

// function Human ( firstName, lastName ) {
//     this.firstName = firstName || 'John';
//     this.lastName = lastName || 'Doe';
// }

// Human.prototype.greet = function () {
//     return ( 'Hi, my name is ' + this.firstName + ' ' + this.lastName )
// };

// // static method
// Human.type = function () { return 'human' };

// var human = new Human( 'Anakin', 'Skywalker' )
// console.log( human.greet() )





















// =============================================================================
// Prototypal Inheritance
// =============================================================================

// function SuperHuman ( firstName, lastName, alias, superpowers ) {
//     Human.call(this, firstName, lastName );
//     this.alias = 'Spider-man' || 'unknown';
//     this.superpowers = superpowers || [];
// };

// SuperHuman.prototype = Object.create( Human.prototype );
// SuperHuman.prototype.constructor = SuperHuman;

// SuperHuman.prototype.greet = function () { return  ( 'Hi, I am ' + this.alias + '!' ) };

// SuperHuman.prototype.revealIdentity = function () {
//     var greet = ( Human.prototype.greet.call(this) + ' a.k.a. ' + this.alias );
//     return ( greet + ' and I am a ' + SuperHuman.type() + '.' );
// };

// SuperHuman.prototype.useSuperpower = function () {
//     return ( this.alias + ' uses the ' + this.superpowers[0] + '!' )
// };

// SuperHuman.type = function () { return 'superhuman' };

// var spiderMan = new SuperHuman( 'Peter', 'Parker', 'Spider-Man', ['web attack'])
// console.log( spiderMan.greet() )
// console.log( spiderMan.revealIdentity() )
// console.log( spiderMan.useSuperpower() )






















// =============================================================================
// Getters & Setters
// =============================================================================

// Object.defineProperty(Human.prototype, 'fullName', {
//     get: function () {
//         return ( this.lastName + ', ' + this.firstName );
//     }
// });

// Object.defineProperty(Human.prototype, 'occupation', {
//     get: function () {
//         return ( 'Occupation: ' + this._occupation );
//     },
//     set: function ( occupation ) {
//         return this._occupation = occupation;
//     }
// });

// var human = new Human()
// console.log( human.fullName ) // Doe, John
// human.occupation = 'Front-end Developer'
// console.log( human.occupation ) // Occupation: Front-end Developer
