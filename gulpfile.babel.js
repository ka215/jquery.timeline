import {src, dest, parallel, series, watch} from 'gulp'

import autoprefixer  from 'gulp-autoprefixer'
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
    .pipe(webpackStream( Object.assign( webpackConfig, configDev ), webpack, (err) => {
        if ( err ) {
            console.error( err )
        }
    }))
    .pipe(dest('dist'))

export const deploy_scripts = () => src('src/timeline.js')
    .pipe(webpackStream( Object.assign( webpackConfig, configProd ), webpack, (err) => {
        if ( err ) {
            console.error( err )
        }
    }))
    .pipe(dest('dist'))

export const check = () => src('src/timeline.js')
    .pipe(eslint({useEslintrc: true}))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())


export const styles = () => src('src/timeline.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(autoprefixer())
    .pipe(rename('jquery.timeline.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist'))


export const deploy_styles = () => src('src/timeline.scss')
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(autoprefixer())
    .pipe(rename('jquery.timeline.min.css'))
    .pipe(dest('dist'))


export const docsJS = () => src([
        'dist/jquery.timeline.js',
        'dist/jquery.timeline.js.map'
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