/* global module:false */
module.exports = function (grunt) {
    'use strict';
    var shell = require('shelljs')
    var port = grunt.option('port') || 8000;
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            banner:
                '/*!\n' +
                ' * reveal.js <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd, HH:MM") %>)\n' +
                ' * http://lab.hakim.se/reveal-js\n' +
                ' * MIT licensed\n' +
                ' *\n' +
                ' * Copyright (C) 2014 Hakim El Hattab, http://hakim.se\n' +
                ' */'
        },

        qunit: {
            files: [ 'test/*.html' ]
        },

        uglify: {
            options: {
                banner: '<%= meta.banner %>\n'
            },
            build: {
                src: 'js/reveal.js',
                dest: 'js/reveal.min.js'
            }
        },

        cssmin: {
            compress: {
                files: {
                    'css/reveal.min.css': [ 'css/reveal.css' ]
                }
            }
        },

        sass: {
            main: {
                files: {
                    'css/theme/default.css': 'css/theme/source/default.scss',
                    'css/theme/beige.css': 'css/theme/source/beige.scss',
                    'css/theme/night.css': 'css/theme/source/night.scss',
                    'css/theme/serif.css': 'css/theme/source/serif.scss',
                    'css/theme/simple.css': 'css/theme/source/simple.scss',
                    'css/theme/sky.css': 'css/theme/source/sky.scss',
                    'css/theme/moon.css': 'css/theme/source/moon.scss',
                    'css/theme/solarized.css': 'css/theme/source/solarized.scss',
                    'css/theme/blood.css': 'css/theme/source/blood.scss',
                    'css/custom.css': 'css/custom.scss'
                }
            }
        },

        jshint: {
            options: {
                asi: true,
                curly: false,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                eqnull: true,
                browser: true,
                expr: true,
                globals: {
                    require: false,
                    head: false,
                    module: false,
                    console: false,
                    unescape: false
                }
            },
            files: [ 'Gruntfile.js', 'js/reveal.js' ]
        },

        connect: {
            server: {
                options: {
                    port: port,
                    base: '.'
                }
            }
        },

        zip: {
            'reveal-js-presentation.zip': [
                'index.html',
                'css/**',
                'js/**',
                'lib/**',
                'images/**',
                'plugin/**'
            ]
        },

        watch: {

            main: {
                files: [ 'Gruntfile.js', 'js/reveal.js', 'css/reveal.css' ],
                tasks: 'default'
            },

            es6: {
                files: [ 'node-harmony.js', 'traceur.js' ],
                tasks: [ 'harmony', 'traceur' ]
            },

            theme: {
                files: [ 'css/**/*.scss' ],
                tasks: 'themes'
            }
        }

    });

    // Loading dependencies
    require('load-grunt-tasks')(grunt)

    grunt.registerTask('traceur', 'Running traceur task', function () {
        grunt.log.subhead('Running nodejs traceur...')
        grunt.log.subhead('<------------------ START ------------------->\n\n')
        shell.exec('./run.sh')
        grunt.log.subhead('\n\n<------------------- END -------------------->')
    })

    grunt.registerTask('harmony', 'Running nodejs --harmony task', function () {
        grunt.log.subhead('Running nodejs --harmony...')
        grunt.log.subhead('<------------------ START ------------------->\n\n')
        shell.exec('node --harmony node-harmony.js')
        grunt.log.subhead('\n\n<------------------- END -------------------->')
    })

    // Default task
    grunt.registerTask( 'default', [ 'jshint', 'cssmin', 'uglify', 'qunit' ] );

    // Theme task
    grunt.registerTask( 'themes', [ 'sass' ] );

    // Package presentation to archive
    grunt.registerTask( 'package', [ 'default', 'zip' ] );

    // Serve presentation locally
    grunt.registerTask( 'serve', [ 'default', 'connect', 'themes', 'watch:main' ] );

    // Run tests
    grunt.registerTask( 'test', [ 'jshint', 'qunit' ] )

};
