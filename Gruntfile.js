module.exports = function( grunt ) {
  // Add the library tasks
  grunt.loadNpmTasks( "grunt-contrib-jshint" );

  grunt.initConfig({
    pkg: grunt.file.readJSON( "package.json" ),
    jshint: {
      files: [
        "Gruntfile.js",
        "js/main.js"
      ]
    }
  });

  // Register custom tasks
  grunt.registerTask( "default", [ "jshint", "mochaTest" ]);
  grunt.registerTask( "travis", [ "jshint", "mochaTest" ]);
};
