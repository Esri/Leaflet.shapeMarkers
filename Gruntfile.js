var fs = require('fs');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: {
        src: [
          'src/*.js'
        ]
      }
    },
    uglify: {
      options: {
        wrap: false,
        sourceMap: true
      },
      build: {
        src: [
          'src/ShapeMarker.js',
          'src/CrossMarker.js',
          'src/DiamondMarker.js',
          'src/SquareMarker.js',
          'src/XMarker.js',
        ],
        dest: 'dist/leaflet-shape-markers.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['build']);
  grunt.registerTask('default', ['jshint','uglify']);
}
