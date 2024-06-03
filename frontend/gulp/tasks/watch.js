var gulp = require("gulp");

gulp.task("watch", [
	"copy:watch",
	"nunjucks:watch",
	"content:watch",
	"svgSprite:watch",
	"svgo:watch",
	"webpack:watch",
	"sass:watch",
]);
