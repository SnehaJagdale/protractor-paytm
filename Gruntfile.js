/**
 * Created by zubairp on  30/07/15.
 **/

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      //  pkg: grunt.file.readJSON('package.json'),
      files: ['Gruntfile.js','page/**/*.js','test/**/*.js','ui_elements/**/*.js','utils/**/*.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },

    shell:{
      option:{
        stdout:true
      },
      protractor_install:{
        command:'webdriver-manager start',
        keepAlive:'false'
      },
      npm_install:{
        command:'npm install'
      }
    }  ,
    protractor: {
      regression:{
        options: {
          configFile: 'Config/regression.js'
        }
      }     ,
      smoke:{
        options: {
          configFile: 'Config/smoke.js'
        }
      } ,
      allSuite:{
        options: {
          configFile: 'Config/AllSuite.js'
        }
      }

    }

  });
  grunt.loadNpmTasks('grunt-shell-spawn');
  grunt.loadNpmTasks('grunt-protractor-webdriver');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-protractor');
  grunt.loadNpmTasks('grunt-protractor-runner');

  grunt.registerTask('default', ['shell:npm_install','shell:protractor_install']);
  grunt.registerTask('driver', ['shell:protractor_install']);
  grunt.registerTask('test', ['protractor']);
  grunt.registerTask('smoke', ['protractor:smoke']);
  grunt.registerTask('regression', ['protractor:regression']);
  grunt.registerTask('allSuite', ['protractor:allSuite']);

};

