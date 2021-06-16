const { watch, src, dest } = require('gulp'); // Подключаем Gulp
const sass = require('gulp-sass'); // Подключаем Sass пакет
const browserSync = require('browser-sync').create(); // Подключаем Browser Sync
const cleanCss = require('gulp-clean-css'); // Подключаем библиотеку для минифицирования стилей
const rename = require('gulp-rename'); // Подключаем библиотеку для переименования стилей
const autoprefixer = require('gulp-autoprefixer'); // Подключаем библиотеку для добавления префиксов в стили

function do_sass()
{
	return src('./app/sass/*.sass')
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({browsers: ['last 15 versions']}))
	.pipe(rename({suffix: '.min'}))
	.pipe(cleanCss())
    .pipe(dest('./app/css'))
	.pipe(browserSync.stream());
}

function do_browserSync()
{
	browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
	
	watch('./app/sass/*.sass', do_sass);
	watch("./app/*.html").on('change', browserSync.reload);
}

function do_build()
{
	src('./app/css/*.css')
		.pipe(dest('./build/css'));
	src('./app/font/**/*')
		.pipe(dest('./build/font'));
	src('./app/img/*')
		.pipe(dest('./build/img'));
	src('./app/js/*.js')
		.pipe(dest('./build/js'));
	src('./app/*.html')
		.pipe(dest('./build'));
}

exports.default = do_browserSync;
exports.build = do_build;