module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
           dist: {
             src: [
               'sass/*.scss',
             ],
             dest: 'sass/build.scss',
           }
         },
    sass: {
            dist: {
                files: {
                    'css/styles.css': 'scss/main.scss'
                }
            }
        },
    uglify: {
      build: {
          files: [{
              expand: true,
              src: '**/*.js',
              dest: 'build/scripts',
              cwd: 'js'
          }]
        }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    compress: {
      main: {
        options: {
          mode: 'gzip'
        },
        files: [
          // Each of the files in the src/ folder will be output to
          // the dist/ folder each with the extension .gz.js
          {expand: true, src: ['js/*.js'], dest: 'dist/public/js', ext: '.gz.js'}
        ]
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: [ 'sass']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.registerTask('production', ['jshint', 'qunit','sass','uglify','compress']);
  grunt.registerTask('default', ['watch']);

};