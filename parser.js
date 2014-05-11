var fs = require( "fs" ),
    path = require( "path" ),
    parser = require( "./index" );

if ( !process.argv[ 2 ] ) {
  console.log( "No filepath specified, exiting..." );
  process.kill();
}

// Assuming a valid filepath
var filepath = path.resolve( process.argv[ 2 ] );

fs.readFile( filepath, { encoding: "utf8" }, function ( err, data ) {
  if ( err ) {
    return console.error( "Fileread error, exiting..." );
  }

  var links = parser( data );

  if ( !links ) {
    return console.log( "No links found! Exiting..." );
  }

  console.log( "Links found:" );
  for ( var i = 0; i < links.length; i++ )
  {
    console.log( "[" + links[ i ] + "]" );
  }
  console.log( "Exiting..." );
});
