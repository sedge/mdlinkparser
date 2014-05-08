// Support both requirejs (for front-end) and the nodejs require functionality
// if (typeof define !== 'function') { var define = require('amdefine')(module) }

/**
* Exports
*/

module.exports = function( markdown ) {
  var mdLink = /\[([^\]]+)\]\(([^)]+)\)/g;

  var links = [];
  var results;

  if ( !markdown ) {
    throw "No markdown supplied!";
  }

  while ( ( (results = mdLink.exec( markdown ) ) !== null ) ) {
    links.push( results[2] );
  }

  return links;
};


