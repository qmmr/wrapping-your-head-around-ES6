'use strict'

var log = console.log

// var fs = require('fs');
// var words = fs.readFileSync('./words').toString().split('\n');

// for ( var word of words ) {
// 	console.log(word)
// }

// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// var data
// var httpReq = new XMLHttpRequest()
// httpReq.onreadystatechange = function () {
// 	if ( httpReq.readyState == 4 && httpReq.status == 200 ) {
// 		data = JSON.parse(httpReq.responseText)
// 		console.log(data['MRData'].StandingsTable.StandingsLists[0].DriverStandings[0])
// 		let drivers = data['MRData'].StandingsTable.StandingsLists[0].DriverStandings
// 		for (let driver of drivers) {
// 			// console.log(driver.Driver.familyName)
//           let { givenName: firstName, familyName: lastName, nationality } = driver.Driver
//           console.log(firstName + ' ' + lastName + ' is ' + nationality)
// 		}
// 	}
// }
// httpReq.open('GET', 'http://ergast.com/api/f1/2013/driverStandings.json', true)
// httpReq.send(null)

function* fibonacci () {
    var [ prev, curr ] = [ 0, 1 ];
    while ( 1 ) {
        yield curr;
        [ prev, curr ] = [ curr, prev + curr ];
    }
}
var gen = fibonacci();
gen.next() // {value: 0, done: false}

for ( var n of gen) {
    if (n > 1000) break;
    console.log(n);
}
