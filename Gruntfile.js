'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.initConfig({
    jshint: {
      options: {
        node: true
      },
      src: ['server.js', 'app/js/**/*.js', 'Gruntfile.js']
    },

    simplemocha: {
      src: ['test/api/**/*.js', 'test/client/**/*.js']
    },

    jscs: {
      src: ['server.js', 'app/js/**/*.js'],
      options: {
        config: '.jscsrc'
      }
    },

    clean: {
      dev: {
        src: ['build/']
      }
    },

    copy: {
      dev: {
        cwd: 'app/',
        src: ['**/*.html', 'css/**/*.css'],
        expand: true,
        dest: 'build/'
      }
    },

    browserify: {
      dev: {
        src: ['app/js/**/*.js'],
        dest: 'build/bundle.js',
        options: {
          transform: ['debowerify']
        }
      },

      test: {
        src: ['test/client/**/*.js'],
        dest: 'test/test_bundle.js',
        options: {
          transform: ['debowerify']
        }
      }
    }
  });
  grunt.registerTask('build:dev', ['jshint', 'simplemocha', 'jscs', 'clean:dev', 'browserify:dev', 'copy:dev']);
};
