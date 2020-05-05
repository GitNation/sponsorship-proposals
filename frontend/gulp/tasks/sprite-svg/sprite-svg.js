var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var svgSprite   = require('gulp-svg-sprite');
var config      = require('../../config');

gulp.task('sprite:svg', function () {
  return gulp
    .src(config.src.iconsSvg + '/*.svg')
    .pipe( svgSprite({
      shape: {
        dimension: { // Set maximum dimensions
          maxWidth: 32,
          maxHeight: 32
        },
        // spacing: { // Add padding
        //   padding: 5
        // }
      },
      mode: {
        css: {
          dest: config.src.root,
          layout: 'diagonal',
          sprite: '../sprite.svg',
          bust: false,
          render: {
            scss: {
              // template: '/src/sass/tpl/_sprite-tpl-css.scss',
              dest: '../../sass/generated/_sprite-svg.scss',
            }
          }
        },

        symbol: {
          dest: config.src.root,
          layout: 'diagonal',
          sprite: '../sprite-inline.svg',
          bust: false,
          render: {
            scss: {
              // template: '../src/sass/tpl/_sprite-tpl-inline.scss',
              dest: '../../sass/generated/_sprite-svg-inline.scss'
            }
          }
        }
      },
      variables: {
        mapname: "icons"
      }
    }))
    .pipe(plumber({
        errorHandler: config.errorHandler
    }))
    .pipe(gulp.dest(config.src.img));
});

gulp.task('sprite:svg:watch', function() {
    gulp.watch(config.src.iconsSvg + '/*.svg', ['sprite:svg']);
});
