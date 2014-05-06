// Support both requirejs (for front-end) and the nodejs require functionality
// if (typeof define !== 'function') { var define = require('amdefine')(module) }

/**
* Global requires
*/

/**
* Exports
*/
module.exports = (function() {
  var mdLink = /(\[[^\]]+\])(\([^)]+)\)/g;

  return {
    parseString: function( markdown ) {
      var links = new Array();
      var results;

      if ( !markdown ) {
        throw "No markdown supplied!";
      }

      while ( (results = mdLink.exec( markdown ) !== null ) ) {
        links.push( results[2] );
      }

      return links;
    }
  };
})();
