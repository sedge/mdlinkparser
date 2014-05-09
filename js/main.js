require.config({
  shim: {

  },
  paths: {
    sedge_mdlinkparser: "sedge_mdlinkparser/index",
    jquery: "jquery/dist/jquery"
  }
});

require( [ "jquery", "sedge_mdlinkparser" ], function( $, mdlinkparser ) {
  var inputField = $( "#input" ),
      outputField = $( "#output" );

  inputField.blur(function() {
    var links = mdlinkparser( inputField.val() );
    var prettyLinks = "";

    if ( !links || !links.length ) {
      return;
    }

    for ( var i = 0; i < links.length; i++ )
    {
      prettyLinks += "[" + links[i] + "]\n";
    }

    outputField.val( prettyLinks );
  });
});
