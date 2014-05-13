var math = require('./lib/math.js')
console.log( math.toFixed(3.14) )
console.log( math.circumference( 6378 ) )

var Library = {};
var LOTR = { title: 'The Lord of The Rings', author: 'J.R.R Tolkien' };
var TLP = { title: 'The Little Prince', author: 'Antoine de Saint-Exupery' };
Library[LOTR] = 'The Lord of The Rings';
Library[TLP] = 'The Little Prince';
console.log( Library[LOTR], Library[TLP] ); // ???
console.log( LOTR.toString() );
