/*jshint node:true*/
'use strict';

module.exports = function(grunt) {

	require('time-grunt')(grunt);

	grunt.initConfig({

        clean: {
            dist: {
                src: [
                    'dist'
                ]
            }
        },

        peg: {
            dist: {
                options: {
                    exportVar: 'XPathJS._parser'
                },
                src: 'src/parser.pegjs',
                dest: 'dist/parser.js'
            }
        },

        concat: {
            dist: {
                src: [
                    'src/engine.js',
                    'dist/parser.js',
                    'src/umd.js'
                ],
                dest: 'dist/enketo-xpathjs.js'
            }
        },

        uglify: {
            dist: {
                src: 'dist/enketo-xpathjs.js',
                dest: 'dist/enketo-xpathjs.min.js'
            }
        },

		karma: {
			options: {
				singleRun: true,
				reporters: ['dots']
			},
			headless: {
				configFile: 'test/karma.conf.js',
				browsers: ['PhantomJS']
			},
			browsers: {
				configFile: 'test/karma.conf.js',
				browsers: ['Chrome', 'Firefox', 'Safari', 'Opera']
			}
		}
	});

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-peg');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('time-grunt');

    grunt.registerTask('dist', [
        'clean:dist',
        'peg:dist',
        'concat:dist',
        'uglify:dist'
    ]);
};

