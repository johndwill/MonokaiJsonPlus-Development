module.exports = function(grunt) {
    grunt.initConfig({
        shell: {
            generateRules: {
                options: {
                    stdout: true
                },
                command: 'python bin/generateRules.py'
            }
        },
        concat: {
            options: {
                separator: '\n',
            },
            dist: {
                src: ['src/Monokai.tmTheme.begin', 'tmp/rules.xml', 'src/Monokai.tmTheme.end'],
                dest: 'tmp/Afterglow JSON+.tmTheme',
            },
        },
        xmlmin: { // Task
            dist: { // Target
                options: { // Target options
                    preserveComments: false
                },
                files: { // Dictionary of files
                    'dist/Afterglow JSON+.tmTheme': 'tmp/Afterglow JSON+.tmTheme', // 'destination': 'source'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-xmlmin');

    grunt.registerTask('default', ['shell:generateRules', 'concat', 'xmlmin']);
};
