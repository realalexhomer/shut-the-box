module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-sass');

  grunt.initConfig({
    browserify: {
      options: {
        browserifyOptions: {
          debug: true
        }
      },

      dev: {
        src: 'dev/scripts/*.js',
        dest: 'dist/bundle.js'
      } 
    },

    handlebars: {
      compile: {
        options: {
          namespace: "JST",
          partialsUseNamespace: "true",
          commonjs: "true"
        },
        files: {
          "dev/scripts/Templates.js": "dev/templates/**/*.hbs",
        }
      }
    },

    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          sourcemap: 'inline'
        },
        dist: {
          files: [{
          expand: true,
          cwd: 'dev/styles',
          src: ['*.scss'],
          dest: 'dist/styles',
          ext: '.css'
          }]
        }
      }
  },

    watch: {
      files: ['dev/templates/**/*.hbs', 'dev/styles/*.scss', 'dev/scripts/*.js'],
      tasks: ['handlebars', 'sass', 'browserify'] 
    }
    

  });

  grunt.registerTask('default', []);
  grunt.registerTask('build', ['sass', 'handlebars', 'browserify']);
  grunt.registerTask('serve', ['build', 'watch']);
}

  // logging
  //grunt.event.on('watch', function(action, filepath, target) {
 //   grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
 // });