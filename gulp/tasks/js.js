import webpack from "webpack-stream";
// import concat from "gulp-concat";
import fileinclude from "gulp-file-include";
import rename from "gulp-rename";
import uglify from "gulp-uglify";

export const js = () => {
	return app.gulp.src(app.path.src.js, {sourcemaps: true})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "JS",
				message: "Error: <%= error.message %>"
			}))
		)
		// .pipe(fileinclude())
		// .pipe(app.gulp.dest(app.path.build.js))
		// .pipe(uglify())
		// .pipe(rename({extname: ".min.js"}))
		.pipe(webpack({
			mode: 'development',
			output: {
				filename: 'app.min.js',
			}
		}))
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream())
}
