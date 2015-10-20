module.exports = function(grunt) {

    // grunt.registerTask('speak', function(){
    //     console.log("I'm Speaking");

    // });

    // grunt.registerTask('yee', function(){
    //     console.log("yee here");

    // });

    // grunt.registerTask('default',['speak','yee'] );

    grunt.initConfig({
      // concat: {
      //   // options: {
      //   //   separator: ';',
      //   // },
      //   js: {
      //     src: ['files/js/1.js', 'files/js/2.js'],
      //     dest: 'build/js/all.js',
      //   },
      //   css: {
      //     src: ['files/css/1.css', 'files/css/2.css'],
      //     dest: 'build/css/all.css',
      //   },

      // },
        sass: {
            options: {
                lineNumbers: true
            },
            dist: {
              files: {
                'build/styles.css': 'files/scss/styles/styles.scss'
              }
            }
        },
        watch: {
          // js: {
          //   files: ['files/js/**/*.js'],
          //   tasks: ['concat'],
          // },
          // css: {
          //   files: ['files/css/**/*.css'],
          //   tasks: ['concat'],
          // }, 
          scss: {
             files: ['files/scss/**/*.scss'],
             tasks: ['sass'],

           },   
            livereload: {
             options: {
                port: 9000,
                open: true,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
              },
              files: ['build/**/*'],
            }, 

                             
        },


    });


    //grunt.loadNpmTasks('grunt-contrib-concat'); 
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
}