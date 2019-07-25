import {src, dest, parallel, series, watch} from 'gulp'

import autoprefixer  from 'gulp-autoprefixer'
import cleanCSS      from 'gulp-clean-css'
import eslint        from 'gulp-eslint'
import rename        from 'gulp-rename'
import sass          from 'gulp-sass'
import sourcemaps    from 'gulp-sourcemaps'
import webpackStream from 'webpack-stream'
import webpack       from 'webpack'

const webpackConfig = require('./webpack.config')
const configDev     = { mode: 'development', devtool: 'source-map', output: { filename: 'jquery.timeline.js' } }
const configProd    = { mode: 'production' }

export const scripts = () => src('src/timeline.js')
    .pipe(webpackStream( Object.assign( webpackConfig, configDev ), webpack, (err, stats) => {
        console.error( err )
        //console.log( stats )
    }))
    .pipe(dest('dist'))

export const deploy_scripts = () => src('src/timeline.js')
    .pipe(webpackStream( Object.assign( webpackConfig, configProd ), webpack, (err, stats ) => {
        console.error( err )
        //console.log( stats )
    }))
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


export const deploy_styles = () => src('src/timeline.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(autoprefixer())
    .pipe(rename('jquery.timeline.min.css'))
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

export const prod = parallel( deploy_scripts, deploy_styles )

export const dev = () => {
    watch( 'src/timeline.js', series( check, scripts ) )
    watch( 'src/timeline.scss', series( styles ) )
}