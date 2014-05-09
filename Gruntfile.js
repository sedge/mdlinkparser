module.exports = function( grunt ) {
  // Add the library tasks
  grunt.loadNpmTasks( "grunt-contrib-jshint" );
  grunt.loadNpmTasks( "grunt-bower-requirejs" );

  grunt.initConfig({
    pkg: grunt.file.readJSON( "package.json" ),
    jshint: {
      files: [
        "Gruntfile.js",
        "js/main.js"
      ]
    },
    bower: {
      target: {
        rjsConfig: "js/config.js"
      }
    }
  });

  // Register custom tasks
  grunt.registerTask( "default", [ "jshint" ]);
  grunt.registerTask( "build", [ "jshint", "bower" ]);
};
