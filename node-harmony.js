'use strict'

var log = console.log

// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var Vehicle = (function () {
    function Vehicle ( options ) {
        this.name = options.name || 'Default Vehicle'
        // this.speed = options.speed || 0
        this.color = options.color || 'white'
    }

    Vehicle.prototype.getColor = function () {
        return this.color
    }

    // Vehicle.prototype.getSpeed = function () {
    //     return this.name + ' have speed of ' + this.speed
    // }

    return Vehicle
})()

var options = { name: 'Jolly Roger', speed: '12km/h', color: 'pink' }
var jollyRoger = new Vehicle( options )

log( jollyRoger.name, jollyRoger.getColor() ) // 'Jolly Roger', 'pink'

var Car = (function( __proto ) {
    function Car ( options ) {
        Vehicle.call( this, options )
    }

    Car.prototype = Object.create(__proto.prototype)
    Car.prototype.constructor = Car

    return Car
})( Vehicle )

var options = { name: 'Aston Martin', speed: '250km/h', color: 'navy blue' }
var astonMartin = new Car( options )

log( astonMartin.name, astonMartin.getColor() ) // 'Aston Martin', 'navy blue'

