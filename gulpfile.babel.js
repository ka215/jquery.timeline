import {src, dest, parallel, series, watch} from 'gulp'

import autoprefixer from 'gulp-autoprefixer'
import browserify   from 'browserify'
import buffer       from 'vinyl-buffer'
import cleanCSS     from 'gulp-clean-css'
import eslint       from 'gulp-eslint'
import rename       from 'gulp-rename'
import sass         from 'gulp-sass'
import source       from 'vinyl-source-stream'
import sourcemaps   from 'gulp-sourcemaps'
import uglify       from 'gulp-uglify'


export const scripts = () => browserify({
        entries: [ 'src/timeline.js' ],
        debug: true
    })
    .transform( 'babelify', {
        presets: [ '@babel/preset-env' ],
        sourceMaps: true
    })
    .bundle().on('error', (err) => {
        console.error(err)
        this.emit('end')
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(uglify({
        output: {comments: '/^!/'}
    })).on('error', (err) => {
        console.error(err)
        this.emit('end')
    })
    .pipe(rename('jquery.timeline.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist'))


export const check = () => src('src/timeline.js')
    .pipe(eslint({useEslintrc: true}))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())


export const styles = () => src('src/timeline.scss')
    //.pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(sourcemaps.write({includeContent: false}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(autoprefixer())
    .pipe(rename('jquery.timeline.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist'))


export const docsJS = () => src([
        'dist/jquery.timeline.min.js',
        'dist/jquery.timeline.min.js.map'
    ])
    .pipe(dest('docs/js'))


export const docsCSS = () => src([
        'dist/jquery.timeline.min.css',
        'dist/jquery.timeline.min.css.map'
    ])
    .pipe(dest('docs/css'))


//export default series( scripts, styles, docsJS, docsCSS )
export default series( parallel( series( check, scripts ), styles ), docsJS, docsCSS )


export const dev = () => {
    watch( 'src/timeline.js', series( check, scripts, docsJS ) )
    watch( 'src/timeline.scss', series( styles, docsCSS ) )
}