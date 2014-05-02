// var fs = require('fs');
// var words = fs.readFileSync('./words', { encoding: 'utf8' }).split('\n')
// console.log(words)
// for ( var word of words ) {
//  console.log(word)
// }

// var data
// var httpReq = new XMLHttpRequest()
// httpReq.onreadystatechange = function () {
//     if ( httpReq.readyState == 4 && httpReq.status == 200 ) {
//         data = JSON.parse(httpReq.responseText)
//         console.log(data['MRData'].StandingsTable.StandingsLists[0].DriverStandings[0])
//         let drivers = data['MRData'].StandingsTable.StandingsLists[0].DriverStandings
//         for (var driver of drivers) {
//             // console.log(driver.Driver.familyName)
//           let { givenName: firstName, familyName: lastName, nationality } = driver.Driver
//           console.log(firstName + ' ' + lastName + ' is ' + nationality)
//         }
//     }
// }
// httpReq.open('GET', 'http://ergast.com/api/f1/2013/driverStandings.json', true)
// httpReq.send(null)

import {Human} from './human'
import {SuperHuman} from './superhuman'

// console.log( new Human(), Human.greet() )
var spiderMan = new SuperHuman('Peter', 'Parker', 'Spiderman', 'web')
console.log( spiderMan )
console.log( SuperHuman.greet() )
console.log( spiderMan.useSuperpower() )
// class Vehicle {
//     constructor ( name = 'Base Vehicle', color = 'white' ) {
//         this.name = name
//         this.color = color
//     }

//     drive ( distance = 0, unit = 'meters' ) {
//         console.log( `${this.name} drove ${distance} ${unit}.` )
//     }
// }

// var jollyRoger = new Vehicle( 'Jolly Roger', 'pink' )
// jollyRoger.drive( '42' )

// class Car extends Vehicle {
//     constructor ( name, color, speed = 60 ) {
//         super( name, color )
//         this.speed = speed
//     }

//     drive ( distance, unit ) {
//         super( distance, unit )
//         console.log('Warning, max speed allowed is 120 km/h!')
//     }
// }

// var porsche = new Car( 'Porsche 911', 'black', 250)
// porsche.drive( 200, 'kilometers' )

