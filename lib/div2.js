'use strict';

// MODULES //

var floor = require( 'math-floor' );


// VARIABLES //

var NBITS = 8;


// DIV2 //

/**
* FUNCTION: div2( x )
*	Converts a nonnegative integer to a literal bit representation using the divide-by-2 algorithm.
*
* @param {Number} x - nonnegative integer
* @returns {String} bit representation
*/
function div2( x ) {
	var str = '';
	var i;
	var y;

	// We repeatedly divide by 2 and check for a remainder. If a remainder exists, the number is odd and we add a '1' bit...
	i = NBITS;
	while ( x > 0 && i ) {
		y = x / 2;
		x = floor( y );
		if ( y === x ) {
			str = '0' + str;
		} else {
			str = '1' + str;
		}
		i -= 1;
	}
	return str;
} // end FUNCTION div2()


// EXPORTS //

module.exports = div2;
