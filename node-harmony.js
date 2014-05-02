'use strict'

var log = console.log

// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;



// var options = { name: 'Jolly Roger', speed: '12km/h', color: 'pink' }
// var jollyRoger = new Vehicle( options )

// log( jollyRoger.name, jollyRoger.getColor() ) // 'Jolly Roger', 'pink'

// var Car = (function( __proto ) {
//     function Car ( options ) {
//         Vehicle.call( this, options )
//     }

//     Car.prototype = Object.create(__proto.prototype)
//     Car.prototype.constructor = Car

//     return Car
// })( Vehicle )

// var options = { name: 'Aston Martin', speed: '250km/h', color: 'navy blue' }
// var astonMartin = new Car( options )

// log( astonMartin.name, astonMartin.getColor() ) // 'Aston Martin', 'navy blue'

var Human = (function () {
    function Human ( firstName, lastName ) {
        this.firstName = firstName || 'John'
        this.lastName = lastName || 'Doe'
    }

    Human.type = function () { return 'human' }

    Human.prototype.toString = function () {
        return (this.firstName + ' ' + this.lastName)
    }

    return Human
})();

var joe = new Human( 'Han', 'Solo' )
console.log(joe) // { firstName: 'John', lastName: 'Doe' }
console.log( Human.type() ) // Hello, I am a human!
