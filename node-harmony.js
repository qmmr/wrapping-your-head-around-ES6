'use strict';

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
