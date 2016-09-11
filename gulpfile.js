var gulp = require('gulp');
var path = require('path');
var zip = require('gulp-zip');
var minimist = require('minimist');
var fs = require('fs');
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");

var knownOptions = {
	string: ['packageName', 'packagePath'],
	default: {packageName: "Package.zip", packagePath: path.join(__dirname, '_package')}
}

var options = minimist(process.argv.slice(2), knownOptions);

var gulpTypings = require("gulp-typings");
 
gulp.task('installTypings',function(){
    var stream = gulp.src("./typings.json")
        .pipe(gulpTypings());  
    return stream; 
});

gulp.task('webpack', ['installTypings'], function(callback) {
    webpack(webpackConfig, function(err, stats) {
        callback(err);
    });
});

gulp.task('zipfiles', ['webpack'], function () {

    /**
     * List of paths to include in the zip file
     * that is deployed in Azure.
     * 
     * !file_path means exclude 'file_path'
     */
	var packagePaths = ['**', 
					'!**/_package/**',                     
					'!_package', 					
                    '!**/node_modules/**',
                    '!node_modules',
                    '!**/typings/**',                    
					'!typings', 
					'!gulpfile.js',
                    '!webpack.config.js',
                    '!package.json',
                    '!typings.json',
                    '!tsconfig.json',
                    '!README.md',
                    ];
	
    return gulp.src(packagePaths)
        .pipe(zip(options.packageName))
        .pipe(gulp.dest(options.packagePath));
});

gulp.task('default', ['installTypings', 'webpack', 'zipfiles']);