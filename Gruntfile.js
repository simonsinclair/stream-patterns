module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'sass/main.css': 'sass/main.scss'
        }
      }
    },

    watch: {
      sass: {
        files: ['sass/*.scss'],
        tasks: ['sass', 'autoprefixer']
      },

      dist: {
        files: [
          'public/**/*',
          '!public/bower_components/**/*'
        ],
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 9001,
          hostname: 'localhost',
          base: 'public/',
          livereload: true,
          open: 'http://localhost:9001'
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      main: 'public/js/main.js'
    },

    autoprefixer: {
      options: {},
      main: {
        src: 'sass/main.css',
        dest: 'public/css/main.css'
      },
    },

    'gh-pages': {
      src: ['**'],
      options: {
        base: 'public/',
        message: 'Refer to master branch'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('default', ['sass', 'autoprefixer', 'connect', 'watch']);
  grunt.registerTask('deploy', ['gh-pages']);
};
