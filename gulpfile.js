var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var babel = require('gulp-babel');
//var server = require('gulp-express');
var gls = require('gulp-live-server');
var jshint = require('gulp-jshint');

var paths = {
		scripts: ['app.js', 'src/**/*.js'],
		images: 'src/images/**/*',
		dist: 'dist/**/*'
};

// delete all compiled resources
gulp.task('clean', function() {
	return del(paths.dist)
 });

// copy all static images
gulp.task('images', ['clean'],function() {
	return gulp.src(paths.images)
		// Pass in options to the task
		.pipe(imagemin({optimizationLevel: 5}))
		.pipe(gulp.dest('dist/imgages'));
});

// compile EC6 to javascript
gulp.task('compile', ['clean'], function () {
	return gulp.src(paths.scripts)
		.pipe(babel({presets: ['es2015']}))
		.pipe(gulp.dest('dist'));
});

// concat
// FIXME: does not make since because import 
//    	  are invoking sources files and not references on concatenated file (myapp.js)  
// gulp.task('concat', function(){
// 	return gulp.src(['dist/app.js', 
// 					'dist/modules/**/*.js',
// 					'dist/server.js'])
// 		.pipe(concat('myapp.js',{ newLine: ';' }))
// 		.pipe(gulp.dest('dist'));
// });

// run server
var server = gls('dist/app.js', undefined, 35729);
gulp.task('server',['compile'], function () {
	// Start the server (gulp-express) after compilation 
	// var options = {
	// 	cwd: undefined,
	// 	env: process.env,
	// 	livereload: {
	// 		port: 8080
	// 	},connect:80
	// }
	// options.env.NODE_ENV = 'development';
	// server.run(['dist/app.js', 'connect:80'], options, true);
	server.stop()
	server.start();
});

// Rerun the task when a file changes
 gulp.task('watch', ['server'], function() {
 	gulp.watch(paths.scripts, ['server']);
 	gulp.watch(paths.images, ['server']);
 });

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch']);