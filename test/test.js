// Global requires
var assert = require( "assert" );

// Local requires
var parser = require( "../index.js" ),
    testData = require( "./data.js" ),
    valid = testData.valid,
    invalid = testData.invalid;

describe( "parse() functionality", function() {
  it( "should return an array of strings containing links", function( done ) {
    // Run the function being tested
    var result = parser( valid.strings );

    // Compare results
    for ( var i = 0; i < valid.expected.length; i++ )
    {
      assert.equal( valid.expected[ i ], result[ i ] );
    }

    done();
  });
});
