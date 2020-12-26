module.exports = (grunt) =>{
    require('load-grunt-tasks')(grunt)
    grunt.initConfig({
        sass:{
            dist:{
                options:{
                    implementation:require('node-sass')
                },
                files:{
                    'css/styles.css':'sass/index.scss'
                }
                
            }
        },
        watch:{
            scss:{
                files:'sass/**.scss',
                tasks:['sass'],
                options:{
                    livereload:true
                }
            }
        }
    })
    grunt.registerTask('default',['sass'])
}





