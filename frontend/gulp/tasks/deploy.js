var gulp = require('gulp');
var ftp = require('vinyl-ftp');
var minimist = require('minimist');
var gutil = require('gulp-util');
var args = minimist(process.argv.slice(2));

gulp.task('deploy', function() {
  var remotePath = '/';
  var conn = ftp.create({
    host: 'gold.elastictech.org',
    user: args.user,
    password: args.password,
    log: gutil.log,
    parallel: 10,
  });

    // Always deploy HTML/CSS/JS
  gulp.src([
    `./build/${process.env.BRAND_NAME}/*.*`,
    `./build/${process.env.BRAND_NAME}/css/**/*.*`,
    `./build/${process.env.BRAND_NAME}/js/**/*.*`
  ])
    .pipe(conn.dest(`${remotePath}/sponsors`));

  // Compare size of other files before deploy
  gulp.src([
    `./build/${process.env.BRAND_NAME}/**/*.*`,
    `!./build/${process.env.BRAND_NAME}/*.*`,
    `!./build/${process.env.BRAND_NAME}/css/**/*.*`,
    `!./build/${process.env.BRAND_NAME}/js/**/*.*`
  ])
    .pipe(conn.differentSize(`${remotePath}/sponsors`))
    .pipe(conn.dest(`${remotePath}/sponsors`));

});
