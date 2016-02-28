'use strict';

var MAX_UINT8 = require( 'const-max-uint8' );
var bits = require( './../lib' );

var x;
var y;
var b;
var i;

x = new Uint8Array( MAX_UINT8+1 );
for ( i = 0; i < x.length; i++ ) {
	x[ i ] = i;
}

// Convert unsigned 8-bit integers to literal bit representations...
for ( i = 0; i < x.length; i++ ) {
	b = bits( x[i] );
	y = parseInt( b, 2 );
	console.log( 'x: %d, b: %s, y: %d', x[i], b, y );
}
