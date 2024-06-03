var gulp = require("gulp");
var svgmin = require("gulp-svgmin");

var svgSprite = require("gulp-svg-sprite");
var config = require("../config");

gulp.task("svgSprite", function () {
	return gulp
		.src(config.src.iconsSvg + "/*.svg")
		.pipe(
			svgmin({
				js2svg: {
					pretty: true,
				},
			})
		)

		.pipe(
			svgSprite({
				shape: {
					transform: [],
				},
				mode: {
					symbol: {
						sprite: "../sprite.svg",
					},
				},
			})
		)
		.pipe(gulp.dest(config.src.img));
});

gulp.task("svgSprite:watch", function () {
	gulp.watch(config.src.iconsSvg + "/*.svg", ["svgSprite"]);
});
