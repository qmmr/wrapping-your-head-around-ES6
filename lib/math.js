var MINI_PI = 3.14;

var toFixed = function ( num ) {
    return Math.ceil(num * 100) / 100
};

var circumference = function ( radius ) {
    return toFixed( MINI_PI * ( 2 * radius )  )
};

exports.toFixed = toFixed;
exports.circumference = circumference;

// module.exports = {
//     circumference: circumference,
//     toFixed: toFixed
// }
