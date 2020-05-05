var gulp   = require('gulp');

gulp.task('watch',
    ['copy:watch',
    'nunjucks:watch',
    'content:watch',
    'sprite:svg:watch',
    'svgo:watch',
    'webpack:watch',
    'sass:watch'
]);
