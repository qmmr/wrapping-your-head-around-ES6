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

import { Human } from '../in/human';
import { SuperHuman } from '../in/superhuman';

var joe = new Human('John', 'Doe');
// console.log( joe.greet() + ' and I am a simple ' + Human.type() + ' being.' )
// getters & setters
// console.log(joe.fullName);
// joe.occupation = 'Front-end Developer';
// console.log(joe);

var spiderMan = new SuperHuman('Peter', 'Parker', 'Spider-man',  ['sixth sense', 'super jump', 'web attack']);
console.log( spiderMan.revealIdentity() )
// console.log( spiderMan.useSuperpower() )

import { sum, pi } from '../in/math';
 
console.log("2π = " + sum(pi, pi));
