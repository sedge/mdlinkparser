module.exports = function( grunt ) {
  // Add the library tasks
  grunt.loadNpmTasks( "grunt-mocha-test" );
  grunt.loadNpmTasks( "grunt-contrib-jshint" );

  grunt.initConfig({
    pkg: grunt.file.readJSON( "package.json" ),

    jshint: {
      files: [
        "Gruntfile.js",
        "index.js",
        "test/*.js"
      ]
    },

    mochaTest: {
      test: {
        options: {
          reporter: "spec",
          timeout: "20000"
        },
        src: [ "./test.js" ]
      }
    }
  });

  grunt.registerTask( "default", [ "jshint", "mochaTest" ]);
};