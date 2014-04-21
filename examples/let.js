function printName ( language ) {
	'use strict'
    var name = 'Marcin';
    if ( language === 'English' ) {
        let name = 'Martin'
        console.log(name) // Martin
    }
    return name
}
console.log(printName())
