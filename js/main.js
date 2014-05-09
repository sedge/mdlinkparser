require( [ "jquery", "sedge_mdlinkparser" ], function( $, mdlinkparser ) {
  var inputField = $( "input" ),
      outputField = $( "output" );

  inputField.onblur = function() {
    outputField.val( mdlinkparser( inputField.val() ));
  };
});
