/**
 * Based on Dan Harper's gulpfile gist
 * https://gist.github.com/danharper/3ca2273125f500429945
 */

var gulp = require('gulp')
	, sourcemaps = require('gulp-sourcemaps')
	, source = require('vinyl-source-stream')
	, buffer = require('vinyl-buffer')
	, browserify = require('browserify')
	, watchify = require('watchify')
	, babel = require('babelify')

function compile(watch) {
  var bundler = watchify(browserify('./app/script/src/index.js', { debug: true }).transform(babel));

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('build.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./app/script/build'));
  }

  if (watch) {
    bundler.on('update', function() {
      console.log('-> bundling...');
      rebundle();
    });
  } else {
		bundler.emit('end')
	}

  rebundle();
}

function watch() {
  return compile(true);
};

gulp.task('build', function() { return compile(); });
gulp.task('watch', function() { return watch(); });

gulp.task('default', ['watch']);