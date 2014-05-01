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

class Vehicle {
    constructor ( name = 'Default Vehicle', color = 'white' ) {
        this.name = name
        this.color = color
    }

    getColor () {
        return this.color
    }
}

var jollyRoger = new Vehicle( 'Jolly Roger', 'pink' )

console.log(jollyRoger.name, jollyRoger.getColor())
