"use strict"

const isBrowser = typeof require === "undefined"
const expect = isBrowser ? chai.expect : require( 'chai' ).expect
const assert = isBrowser ? chai.assert : require( 'chai' ).assert

if ( ! isBrowser ) {
    try {
        const { JSDOM }    = require('jsdom')
        const jsdom        = new JSDOM('<!doctype html><html><body></body></html>')
        const { window }   = jsdom
        const { document } = window
        global.window      = window
        global.document    = document
        const $ = global.$ = require('jquery')(window)
        $.fn = { 'Timeline': {} }
        require( '../dist/jquery.timeline.min.js' )
        //require( '../src/timeline' )
    } catch ( err ) {
        console.warn( err )
    }
}
let $timeline = $.fn.Timeline,
    timelineMethods = $timeline.Constructor.prototype,
    defaultOptions  = $timeline.Constructor.Default

describe( 'jQuery.Timeline Unit Tests', () => {
    let timezoneOffset  = -1 * new Date().getTimezoneOffset(), // minutes
        tzo_ms          = timezoneOffset * 60 * 1000, // milliseconds
        timezoneName    = new Date().toLocaleDateString( 'en-US', { timeZoneName: 'long' } ).split(',')[1],
        isDST           = timezoneOffset != 0 && /(Summer|Daylight)\sTime/.test( new Date().toString() ),
        isGMT           = (timezoneOffset == 0 && timezoneName !== 'Coordinated Universal Time') || (isDST && Math.abs( timezoneOffset ) == 60),
        forFF           = window.navigator.userAgent.toLowerCase().indexOf( 'firefox' ) !== -1
    
    before(() => {
        if ( isBrowser ) {
            $('#notifications').append( `<label>DateString</label> ${new Date().toLocaleString( 'en-US', { timeZone: 'UTC', hour12: false, timeZoneName: 'short' } )}, <label>GMT</label> ${isGMT ? 'true' : 'false'}, <label>DST</label> ${isDST ? 'true' : 'false'}, <label>TimezoneOffset</label> ${timezoneOffset} min, <label>TimezoneName</label> ${timezoneName}` )
            //$('#main-content').css('display', 'block');
        } else {
            console.log( `DateString: ${new Date().toLocaleString( 'en-US', { timeZone: 'UTC', hour12: false, timeZoneName: 'short' } )}, GMT: ${isGMT ? 'true' : 'false'}, DST: ${isDST ? 'true' : 'false'}, TimezoneOffset: ${timezoneOffset} min, TimezoneName: ${new Date().toLocaleDateString( 'en-US', { timeZoneName: 'long' } ).split(',')[1]}` )
        }
    })
    
    beforeEach(() => {
        //
    })
    
    // private methods
    it ( '_filterScaleKeyName: Filter the given scale key name to allowed for plugin', () => {
        let filterScaleKeyName = timelineMethods._filterScaleKeyName
        
        expect( filterScaleKeyName() ).to.be.equal( 'millisecond' )
        expect( filterScaleKeyName('invalid-scale') ).to.be.equal( 'millisecond' )
        expect( filterScaleKeyName('millenniums') ).to.be.equal( 'millennium' )
        expect( filterScaleKeyName('millennia') ).to.be.equal( 'millennium' )
        expect( filterScaleKeyName('Millennium') ).to.be.equal( 'millennium' )
        expect( filterScaleKeyName('Century') ).to.be.equal( 'century' )
        expect( filterScaleKeyName('Decade') ).to.be.equal( 'decade' )
        expect( filterScaleKeyName('decennium') ).to.be.equal( 'decade' )
        expect( filterScaleKeyName('Lustrum') ).to.be.equal( 'lustrum' )
        expect( filterScaleKeyName('years') ).to.be.equal( 'year' )
        expect( filterScaleKeyName('Year') ).to.be.equal( 'year' )
        expect( filterScaleKeyName('months') ).to.be.equal( 'month' )
        expect( filterScaleKeyName('Month') ).to.be.equal( 'month' )
        expect( filterScaleKeyName('weeks') ).to.be.equal( 'week' )
        expect( filterScaleKeyName('Week') ).to.be.equal( 'week' )
        expect( filterScaleKeyName('weekdays') ).to.be.equal( 'weekday' )
        expect( filterScaleKeyName('Weekday') ).to.be.equal( 'weekday' )
        expect( filterScaleKeyName('days') ).to.be.equal( 'day' )
        expect( filterScaleKeyName('Day') ).to.be.equal( 'day' )
        expect( filterScaleKeyName('dates') ).to.be.equal( 'day' )
        expect( filterScaleKeyName('Date') ).to.be.equal( 'day' )
        expect( filterScaleKeyName('hours') ).to.be.equal( 'hour' )
        expect( filterScaleKeyName('Hour') ).to.be.equal( 'hour' )
        expect( filterScaleKeyName('quarter') ).to.be.equal( 'quarterHour' )
        expect( filterScaleKeyName('quarter-hour') ).to.be.equal( 'quarterHour' )
        expect( filterScaleKeyName('quarterhour') ).to.be.equal( 'quarterHour' )
        expect( filterScaleKeyName('half') ).to.be.equal( 'halfHour' )
        expect( filterScaleKeyName('half-hour') ).to.be.equal( 'halfHour' )
        expect( filterScaleKeyName('halfhour') ).to.be.equal( 'halfHour' )
        expect( filterScaleKeyName('minutes') ).to.be.equal( 'minute' )
        expect( filterScaleKeyName('Minute') ).to.be.equal( 'minute' )
        expect( filterScaleKeyName('seconds') ).to.be.equal( 'second' )
        expect( filterScaleKeyName('Second') ).to.be.equal( 'second' )
        expect( filterScaleKeyName('milliseconds') ).to.be.equal( 'millisecond' )
        expect( filterScaleKeyName('Millisecond') ).to.be.equal( 'millisecond' )
    })
    
    it ( '_getPluggableDatetime: Retrieve the pluggable datetime as milliseconds depend on specific preset keyword', () => {
        const getPluggableDatetime = ( preset_key, round_type = '', obj = {} ) => {
            timelineMethods._config = Object.assign( defaultOptions, obj )
            return timelineMethods._getPluggableDatetime( preset_key, round_type )
        }
        let getCorrectDatetime = timelineMethods.getCorrectDatetime,
            _nowDt  = new Date()
        
        // exceptional case as startDatetime
        expect( new Date( getPluggableDatetime( 'currently' ) ).toDateString() ).to.be.equal( _nowDt.toDateString() )
        expect( new Date( getPluggableDatetime( 'currently', '', { scale: 'day' } ) ).toDateString() ).to.be.equal( _nowDt.toDateString() )
        expect( new Date( getPluggableDatetime( 'currently', '', { scale: 'month' } ) ).toDateString() ).to.be.equal( _nowDt.toDateString() )
        // for startDatetime
        expect( new Date( getPluggableDatetime( 'currently', 'first', { scale: 'millennium' } ) ).toDateString() ).to.be.equal( new Date( _nowDt.getFullYear(), 0, 1 ).toDateString() )
        expect( new Date( getPluggableDatetime( 'currently', 'first', { scale: 'century' } ) ).toDateString() ).to.be.equal( new Date( _nowDt.getFullYear(), 0, 1 ).toDateString() )
        expect( new Date( getPluggableDatetime( 'currently', 'first', { scale: 'decade' } ) ).toDateString() ).to.be.equal( new Date( _nowDt.getFullYear(), 0, 1 ).toDateString() )
        expect( new Date( getPluggableDatetime( 'currently', 'first', { scale: 'lustrum' } ) ).toDateString() ).to.be.equal( new Date( _nowDt.getFullYear(), 0, 1 ).toDateString() )
        expect( new Date( getPluggableDatetime( 'currently', 'first', { scale: 'year' } ) ).toDateString() ).to.be.equal( new Date( _nowDt.getFullYear(), 0, 1 ).toDateString() )
        //expect( new Date( getPluggableDatetime( 'currently', 'first', { scale: 'month' } ) ).toDateString() ).to.be.equal( timelineMethods.modifyDate( _nowDt.toDateString(), (_nowDt.getDate() * -1 + 1), 'day' ).toDateString() )
        expect( new Date( getPluggableDatetime( 'currently', 'first', { scale: 'month' } ) ).toDateString() ).to.be.equal( new Date( _nowDt.getFullYear(), _nowDt.getMonth(), 1 ).toDateString() )
        expect( new Date( getPluggableDatetime( 'currently', 'first', { scale: 'week' } ) ).toDateString() ).to.be.equal( _nowDt.toDateString() )
        expect( new Date( getPluggableDatetime( 'currently', 'first', { scale: 'day' } ) ).toDateString() ).to.be.equal( _nowDt.toDateString() )
        expect( new Date( getPluggableDatetime( 'currently', 'first', { scale: 'hour' } ) ).toUTCString() ).to.be.equal( new Date( _nowDt.getFullYear(), _nowDt.getMonth(), _nowDt.getDate(), _nowDt.getHours(), 0, 0 ).toUTCString() )
        expect( new Date( getPluggableDatetime( 'currently', 'first', { scale: 'half-hour' } ) ).toUTCString() ).to.be.equal( new Date( _nowDt.getFullYear(), _nowDt.getMonth(), _nowDt.getDate(), _nowDt.getHours(), 0, 0 ).toUTCString() )
        expect( new Date( getPluggableDatetime( 'currently', 'first', { scale: 'quarter-hour' } ) ).toUTCString() ).to.be.equal( new Date( _nowDt.getFullYear(), _nowDt.getMonth(), _nowDt.getDate(), _nowDt.getHours(), 0, 0 ).toUTCString() )
        expect( new Date( getPluggableDatetime( 'currently', 'first', { scale: 'minute' } ) ).toUTCString() ).to.be.equal( new Date( _nowDt.getFullYear(), _nowDt.getMonth(), _nowDt.getDate(), _nowDt.getHours(), _nowDt.getMinutes(), 0 ).toUTCString() )
        expect( new Date( getPluggableDatetime( 'currently', 'first', { scale: 'second' } ) ).toUTCString() ).to.be.equal( new Date( _nowDt.getFullYear(), _nowDt.getMonth(), _nowDt.getDate(), _nowDt.getHours(), _nowDt.getMinutes(), _nowDt.getSeconds() ).toUTCString() )
        expect( new Date( getPluggableDatetime( '-1-2-3', 'first', { scale: 'year' } ) ).toDateString() ).to.be.equal( getCorrectDatetime('-1').toDateString() )
        expect( new Date( getPluggableDatetime( '0-1-2', 'first', { scale: 'month' } ) ).toDateString() ).to.be.equal( getCorrectDatetime('0').toDateString() )
        expect( new Date( getPluggableDatetime( '1-2-3', 'first', { scale: 'week' } ) ).toDateString() ).to.be.equal( getCorrectDatetime('1-2-3').toDateString() )
        expect( new Date( getPluggableDatetime( '74', 'first', { scale: 'day' } ) ).toDateString() ).to.be.equal( getCorrectDatetime('74').toDateString() )
        expect( new Date( getPluggableDatetime( '169-1-31', 'first', { scale: 'month' } ) ).toDateString() ).to.be.equal( getCorrectDatetime('169-1').toDateString() )
        expect( new Date( getPluggableDatetime( '794/4/5 12', 'first', { scale: 'day' } ) ).toDateString() ).to.be.equal( getCorrectDatetime('794/4/5').toDateString() )
        expect( new Date( getPluggableDatetime( '1600/10/21 10:20', 'first', { scale: 'hour' } ) ).toUTCString() ).to.be.equal( getCorrectDatetime('1600/10/21 10').toUTCString() )
        expect( new Date( getPluggableDatetime( '1847/11/30 23:59:59', 'first', { scale: 'minute' } ) ).toString() ).to.be.equal( getCorrectDatetime('1847/11/30 23:59').toString() )
        expect( new Date( getPluggableDatetime( '2010/11/9 12:34:56.789', 'first', { scale: 'second' } ) ).toString() ).to.be.equal( getCorrectDatetime('2010/11/9 12:34:56').toString() )
        // exceptional case as startDatetime
        timelineMethods._config.scale = 'day' // initialize scale
        expect( new Date( getPluggableDatetime( 'auto' ) ).toDateString() ).to.be.equal( timelineMethods.modifyDate( _nowDt, timelineMethods._config.range, 'month' ).toDateString() )
        expect( new Date( getPluggableDatetime( 'auto', '', { scale: 'day' } ) ).toDateString() ).to.be.equal( timelineMethods.modifyDate( _nowDt, timelineMethods._config.range, 'month' ).toDateString() )
        expect( new Date( getPluggableDatetime( 'auto', '', { scale: 'month' } ) ).toDateString() ).to.be.equal( new Date( _nowDt.getFullYear() + timelineMethods._config.range, _nowDt.getMonth(), 1 ).toDateString() )
        // for endDatetime
        expect( new Date( getPluggableDatetime( 'auto', 'last', { scale: 'millennium' } ) ).toDateString() ).to.be.equal( new Date( _nowDt.getFullYear() + (1000 * timelineMethods._config.range), 11, 31 ).toDateString() )
        expect( new Date( getPluggableDatetime( 'auto', 'last', { scale: 'century' } ) ).toDateString() ).to.be.equal( new Date( _nowDt.getFullYear() + (1000 * timelineMethods._config.range), 11, 31 ).toDateString() )
        expect( new Date( getPluggableDatetime( 'auto', 'last', { scale: 'decade' } ) ).toDateString() ).to.be.equal( new Date( _nowDt.getFullYear() + (100 * timelineMethods._config.range), 11, 31 ).toDateString() )
        expect( new Date( getPluggableDatetime( 'auto', 'last', { scale: 'lustrum' } ) ).toDateString() ).to.be.equal( new Date( _nowDt.getFullYear() + (10 * timelineMethods._config.range), 11, 31 ).toDateString() )
        expect( new Date( getPluggableDatetime( 'auto', 'last', { scale: 'year' } ) ).toDateString() ).to.be.equal( new Date( _nowDt.getFullYear() + (5 * timelineMethods._config.range), 11, 31 ).toDateString() )
        expect( new Date( getPluggableDatetime( 'auto', 'last', { scale: 'month' } ) ).toDateString() ).to.be.equal( new Date( _nowDt.getFullYear() + timelineMethods._config.range, _nowDt.getMonth() + 1, 0 ).toDateString() )
        expect( new Date( getPluggableDatetime( 'auto', 'last', { scale: 'week' } ) ).toDateString() ).to.be.equal( new Date( _nowDt.getFullYear(), _nowDt.getMonth() + timelineMethods._config.range, _nowDt.getDate() ).toDateString() )
        expect( new Date( getPluggableDatetime( 'auto', 'last', { scale: 'day' } ) ).toDateString() ).to.be.equal( new Date( _nowDt.getFullYear(), _nowDt.getMonth() + timelineMethods._config.range, _nowDt.getDate() ).toDateString() )
        expect( new Date( getPluggableDatetime( 'auto', 'last', { scale: 'hour' } ) ).toUTCString() ).to.be.equal( new Date( _nowDt.getFullYear(), _nowDt.getMonth(), _nowDt.getDate() + timelineMethods._config.range, _nowDt.getHours() + 1, 0, -1 ).toUTCString() )
        expect( new Date( getPluggableDatetime( 'auto', 'last', { scale: 'half-hour' } ) ).toUTCString() ).to.be.equal( new Date( _nowDt.getFullYear(), _nowDt.getMonth(), _nowDt.getDate() + timelineMethods._config.range, _nowDt.getHours() + 1, 0, -1 ).toUTCString() )
        expect( new Date( getPluggableDatetime( 'auto', 'last', { scale: 'quarter-hour' } ) ).toUTCString() ).to.be.equal( new Date( _nowDt.getFullYear(), _nowDt.getMonth(), _nowDt.getDate() + timelineMethods._config.range, _nowDt.getHours() + 1, 0, -1 ).toUTCString() )
        expect( new Date( getPluggableDatetime( 'auto', 'last', { scale: 'minute' } ) ).toString() ).to.be.equal( new Date( _nowDt.getFullYear(), _nowDt.getMonth(), _nowDt.getDate(), _nowDt.getHours() + timelineMethods._config.range, _nowDt.getMinutes() + 1, -1 ).toString() )
        expect( new Date( getPluggableDatetime( 'auto', 'last', { scale: 'second' } ) ).toString() ).to.be.equal( new Date( _nowDt.getFullYear(), _nowDt.getMonth(), _nowDt.getDate(), _nowDt.getHours(), _nowDt.getMinutes() + timelineMethods._config.range, _nowDt.getSeconds() + 1, -1 ).toString() )
        expect( new Date( getPluggableDatetime( '-12-3-4', 'last', { scale: 'year', range: null } ) ).toDateString() ).to.be.equal( getCorrectDatetime('-11-1-1').toDateString() )
        expect( new Date( getPluggableDatetime( '-1', 'last', { scale: 'year', range: 10 } ) ).toDateString() ).to.be.equal( getCorrectDatetime('-2/12/31').toDateString() )
        expect( new Date( getPluggableDatetime( '0-1-2', 'last', { scale: 'month', range: 0 } ) ).toDateString() ).to.be.equal( getCorrectDatetime('0/1/31').toDateString() )
        expect( new Date( getPluggableDatetime( '1-2-3', 'last', { scale: 'week' } ) ).toDateString() ).to.be.equal( getCorrectDatetime('1-2-3').toDateString() )
        expect( new Date( getPluggableDatetime( '74-5-6', 'last', { scale: 'day' } ) ).toDateString() ).to.be.equal( getCorrectDatetime('74/5/6').toDateString() )
        expect( new Date( getPluggableDatetime( '74/5/6 13:45', 'last', { scale: 'day' } ) ).toString() ).to.be.equal( getCorrectDatetime('74/5/6 23:59:59').toString() )
        if ( forFF ) {
            expect( new Date( getPluggableDatetime( '1847/11/30 23:59:59', 'last', { scale: 'hour' } ) ).toString() ).to.be.equal( 'Wed Dec 01 1847 00:01:14 GMT+0000 (グリニッジ標準時)' )
        } else {
            expect( new Date( getPluggableDatetime( '1847/11/30 23:59:59', 'last', { scale: 'hour' } ) ).toString() ).to.be.equal( getCorrectDatetime('1847/11/30 23:59:59').toString() )
        }
        if ( isGMT ) {
            expect( new Date( getPluggableDatetime( '1847/12/1 0:0:0', 'last', { scale: 'minute', range: 3 } ) ).toString() ).to.be.equal( getCorrectDatetime('1847/12/1 0:01:59').toString() )
        } else {
            if ( ! forFF && isBrowser ) {
                expect( new Date( getPluggableDatetime( '1847/12/1 0:0:0', 'last', { scale: 'minute', range: 3 } ) ).toString() ).to.be.equal( getCorrectDatetime('1847/12/1 0:00:59').toString(), 'notice!' )
            }
        }
        // general purpose case (because this case is equal to "getCorrectDatetime" method, should use that method)
        expect( new Date( getPluggableDatetime( '-12-3-4', '', { scale: 'year' } ) ).toDateString() ).to.be.equal( getCorrectDatetime('-12-3-4').toDateString() )
        expect( new Date( getPluggableDatetime( '-1', '', { scale: 'year' } ) ).toDateString() ).to.be.equal( getCorrectDatetime('-1/1/1').toDateString() )
        expect( new Date( getPluggableDatetime( '0-1-2', '', { scale: 'month' } ) ).toDateString() ).to.be.equal( getCorrectDatetime('0/1/2').toDateString() )
        expect( new Date( getPluggableDatetime( '1-2-3', '', { scale: 'week' } ) ).toDateString() ).to.be.equal( getCorrectDatetime('1-2-3').toDateString() )
        expect( new Date( getPluggableDatetime( '74-5-6', '', { scale: 'day' } ) ).toDateString() ).to.be.equal( getCorrectDatetime('74/5/6').toDateString() )
        expect( new Date( getPluggableDatetime( '74/5/6 13:45', '', { scale: 'day' } ) ).toString() ).to.be.equal( getCorrectDatetime('74/5/6 13:45').toString() )
        expect( new Date( getPluggableDatetime( '1847/11/30 23:59:59', '', { scale: 'hour' } ) ).toString() ).to.be.equal( getCorrectDatetime('1847/11/30 23:59:59').toString() )
        expect( new Date( getPluggableDatetime( '1847/12/1 0:0:0', '', { scale: 'minute' } ) ).toString() ).to.be.equal( getCorrectDatetime('1847/12/1 0:00:00').toString() )
    })
    
    // public methods as utility
    it ( 'mergeDeep: Merge two objects deeply as polyfill for instead "$.extend(true,target,source)"', () => {
        
        expect( timelineMethods.mergeDeep() ).to.be.eql( {} )
        expect( timelineMethods.mergeDeep( 0, 1 ) ).to.be.an('object')
        expect( timelineMethods.mergeDeep( 'str' ) ).to.be.eql( { 0: 's', 1: 't', 2: 'r' } )
        expect( timelineMethods.mergeDeep( [ 'apple', 'orange' ], [ 'banana' ] ) ).to.be.eql( { 0: 'apple', 1: 'orange' } )
        expect( timelineMethods.mergeDeep( [ 'apple', 'orange' ], { 0: 'banana' } ) ).to.be.eql( { 0: 'apple', 1: 'orange' } )
        expect( timelineMethods.mergeDeep( { 0: 'apple', 1: 'orange' }, { 0: 'banana' } ) ).to.be.eql( { 0: 'banana', 1: 'orange' } )
        expect( timelineMethods.mergeDeep( { prop1: 'val-1', prop2: { subProp1: 'val-2', subProp2: 3 } }, { prop2: { subProp1: 'new value' }, prop3: null } ) ).to.be.eql( {prop1: "val-1", prop2: {subProp1: "new value", subProp2: 3}, prop3: null} )
        expect( timelineMethods.mergeDeep( defaultOptions, { headline: { locale: 'ja-JP', format: { custom: '%Y-%m-%d %H:%M' } } } ) ).to.deep.include( { headline: { display: true, format: { hour12: false, custom: '%Y-%m-%d %H:%M' }, locale: 'ja-JP', range: true, title: '' } } )
    })
    
    it ( 'getCorrectDatetime: This method is able to get the correct datetime instead of built in "new Date" on javascript', () => {
        let getCorrectDatetime = timelineMethods.getCorrectDatetime
        
        // numeric argument
        expect( getCorrectDatetime(-2340).toUTCString() ).to.be.equal('Wed, 31 Dec 1969 23:59:57 GMT')
        expect( getCorrectDatetime(-1).toUTCString() ).to.be.equal('Wed, 31 Dec 1969 23:59:59 GMT')
        expect( getCorrectDatetime(1).toUTCString() ).to.be.equal('Thu, 01 Jan 1970 00:00:00 GMT')
        expect( getCorrectDatetime(0).toUTCString() ).to.be.equal('Thu, 01 Jan 1970 00:00:00 GMT')
        expect( getCorrectDatetime(1559641760068).toUTCString() ).to.be.equal('Tue, 04 Jun 2019 09:49:20 GMT')
        // string argument
        expect( getCorrectDatetime('-234').toString() ).to.be.equal(new Date( new Date(-234,0,1) ).toString())
        expect( getCorrectDatetime('-1').toUTCString() ).to.be.equal(new Date( new Date(-1,0,1).setFullYear(-1) ).toUTCString())
        expect( getCorrectDatetime('0').toString() ).to.be.equal(new Date( new Date(0,0,1).setFullYear(0) ).toString())
        expect( getCorrectDatetime('1').toUTCString() ).to.be.equal(new Date( new Date(1,0,1).setFullYear(1) ).toUTCString())
        expect( getCorrectDatetime('-234/12').toUTCString() ).to.be.equal(new Date( new Date(-234, 11, 1) ).toUTCString())
        expect( getCorrectDatetime('-1/5/31').toUTCString() ).to.be.equal(new Date( new Date(-1, 4, 31).setFullYear(-1) ).toUTCString())
        expect( getCorrectDatetime('7-1').toDateString() ).to.be.equal('Mon Jan 01 0007')
        expect( getCorrectDatetime('9/2').toDateString() ).to.be.equal('Sun Feb 01 0009')
        expect( getCorrectDatetime('32-5').toDateString() ).to.be.equal('Sat May 01 0032')
        expect( getCorrectDatetime('64/3').toDateString() ).to.be.equal('Sat Mar 01 0064')
        expect( getCorrectDatetime('567/8/9').toDateString() ).to.be.equal('Sun Aug 09 0567')
        expect( getCorrectDatetime('0079/4/30 13:49:57').toUTCString() ).to.be.equal(new Date( new Date(79, 3, 30, 13, 49, 57).setFullYear(79) ).toUTCString())
        expect( getCorrectDatetime('1974-2-15 3').toUTCString() ).to.be.equal(new Date(1974, 1, 15, 3).toUTCString())
        expect( getCorrectDatetime('1998-9-26 4:56').toUTCString() ).to.be.equal(new Date(1998, 8, 26, 4, 56).toUTCString())
        expect( getCorrectDatetime('2010-11-9 21:47:36').toUTCString() ).to.be.equal(new Date(2010, 10, 9, 21, 47, 36).toUTCString())
        expect( getCorrectDatetime('11223/12/31 12:34:56').toUTCString() ).to.be.equal(new Date(11223, 11, 31, 12, 34, 56).toUTCString())
        // invalid datetime
        expect( getCorrectDatetime('1974-13-14').toUTCString() ).to.be.equal(new Date(1974, 12, 14).toUTCString())
        expect( getCorrectDatetime('1998/9/32').toUTCString() ).to.be.equal(new Date(1998, 8, 32).toUTCString())
        expect( getCorrectDatetime('2010-11-9 25:00').toUTCString() ).to.be.equal(new Date(2010, 10, 9, 25, 0).toUTCString())
        expect( getCorrectDatetime('2019/12/31 13:63').toUTCString() ).to.be.equal(new Date(2019, 11, 31, 13, 63).toUTCString())
        // string as like date time
        expect( getCorrectDatetime('Wed, 31 Dec 1969 23:59:57 GMT').toUTCString() ).to.be.equal('Wed, 31 Dec 1969 23:59:57 GMT')
        if ( isGMT ) {
            expect( getCorrectDatetime('Sun Mar 31 2019').toUTCString() ).to.be.equal('Sun, 31 Mar 2019 00:00:00 GMT')
            expect( getCorrectDatetime('Sun Oct 27 2019').toUTCString() ).to.be.equal('Sat, 26 Oct 2019 23:00:00 GMT')
        } else {
            expect( getCorrectDatetime('Sun Mar 31 2019').toString() ).to.be.equal(new Date(2019, 2, 31, 0, 0, 0).toString())
            expect( getCorrectDatetime('Sun Oct 27 2019').toString() ).to.be.equal(new Date(2019, 9, 27, 0, 0, 0).toString())
        }
        if ( ! forFF ) {
            expect( getCorrectDatetime('Wed Jun 28 1993 14:39:07 GMT-0600 (PDT)').toUTCString() ).to.be.equal('Mon, 28 Jun 1993 14:39:07 GMT')
        }
        expect( getCorrectDatetime('12/19/2012, 7:00:00 PM').toString() ).to.be.equal(new Date(2012, 11, 19, 19, 0, 0).toString())
        // invalid argument
        expect( getCorrectDatetime('not datetime') ).to.be.null // console.warn: "not datetime" Cannot parse date because invalid format.
        expect( getCorrectDatetime() ).to.be.null // console.warn: "undefined" Cannot parse date because invalid format.
        expect( getCorrectDatetime(false) ).to.be.null // console.warn: "false" Cannot parse date because invalid format.
        expect( getCorrectDatetime('Donnerstag, 20. Dezember 2012') ).to.be.null // console.warn: "Donnerstag, 20. Dezember 2012" Cannot parse date because invalid format.
    })
    
    it ( 'getWeek: get week number as extension of Date object', async () => {
        let _firstDayOfYear = new Date( new Date().getFullYear(), 0, 1, 0, 0, 0 ),
            _currentDay     = _firstDayOfYear,
            _weeknumber     = 1,
            _step           = 1
        
        for ( let wd = 0; wd < 7; wd++ ) {
            // Set firstDayOfWeek
            timelineMethods._config = Object.assign( defaultOptions, { firstDayOfWeek: wd } )
            for ( let i = 0; i < 365; i += _step ) {
                if ( i > 0 ) {
                    _currentDay = timelineMethods.modifyDate( _firstDayOfYear, i, 'day' )
                }
                if ( _currentDay.getDay() == wd ) {
                    _weeknumber += 1
                    _step = _step == 1 ? 7 : _step
                }
                // console.log( _currentDay.toDateString(), _currentDay.getDay(), wd, timelineMethods.getWeek( _currentDay.toDateString() ), _weeknumber )
                expect( timelineMethods.getWeek( _currentDay.toDateString() ) ).to.be.equal( _weeknumber )
            }
            _currentDay = _firstDayOfYear // reset
            _weeknumber = 1 // reset
            _step = 1 // reset
        }
        // rollback option
        timelineMethods._config = Object.assign( defaultOptions, { firstDayOfWeek: 0 } )
        expect( timelineMethods.getWeek() ).to.be.false
        expect( timelineMethods.getWeek('') ).to.be.false
        expect( timelineMethods.getWeek('-1') ).to.be.equal(1)
        expect( timelineMethods.getWeek('0') ).to.be.equal(1)
        expect( timelineMethods.getWeek('1') ).to.be.equal(1)
        expect( timelineMethods.getWeek('-7/2') ).to.be.equal(6)
        expect( timelineMethods.getWeek('-1/1/7') ).to.be.equal(2)
        expect( timelineMethods.getWeek('0-3-4') ).to.be.equal(10)
        expect( timelineMethods.getWeek('1-3-4') ).to.be.equal(10)
        expect( timelineMethods.getWeek('96/12/31') ).to.be.equal(54)
        expect( timelineMethods.getWeek('1996/12/31') ).to.be.equal(53)
    })
    
    it ( 'getFirstDayOfWeek: Retrieve a first day of the week from week number', () => {
        // firstDayOfWeek = 0 : Sunday as default
        timelineMethods._config = Object.assign( defaultOptions, { firstDayOfWeek: 0 } )
        expect( timelineMethods.getFirstDayOfWeek() ).to.be.false
        expect( timelineMethods.getFirstDayOfWeek(0, 0) ).to.be.false
        expect( timelineMethods.getFirstDayOfWeek(1, 0).toDateString() ).to.be.equal('Sun Dec 30 2018')
        expect( timelineMethods.getFirstDayOfWeek(2, 2019).toDateString() ).to.be.equal('Sun Jan 06 2019')
        expect( timelineMethods.getFirstDayOfWeek(28, 2019).toDateString() ).to.be.equal('Sun Jul 07 2019')
        expect( timelineMethods.getFirstDayOfWeek(54, 2019).toDateString() ).to.be.equal('Sun Jan 05 2020')
        expect( timelineMethods.getFirstDayOfWeek(1, 1).toDateString() ).to.be.equal('Sun Dec 31 0000')
        if ( isBrowser ) {
            expect( timelineMethods.getFirstDayOfWeek(1, -12).toDateString() ).to.be.equal('Sun Jan 03 -0012', 'invalid?')
            expect( timelineMethods.getFirstDayOfWeek(1, -1).toDateString() ).to.be.equal('Sun Jan 03 -0001', 'invalid?')
        } else {
            expect( timelineMethods.getFirstDayOfWeek(1, -12).toDateString() ).to.be.equal('Sun Jan 03 -012', 'notice!')
            expect( timelineMethods.getFirstDayOfWeek(1, -1).toDateString() ).to.be.equal('Sun Jan 03 -001', 'notice!')
        }
        // firstDayOfWeek = 1 : Monday
        timelineMethods._config = Object.assign( defaultOptions, { firstDayOfWeek: 1 } )
        expect( timelineMethods.getFirstDayOfWeek(1, 0).toDateString() ).to.be.equal('Mon Dec 31 2018')
        expect( timelineMethods.getFirstDayOfWeek(2, 2019).toDateString() ).to.be.equal('Mon Jan 07 2019')
        expect( timelineMethods.getFirstDayOfWeek(28, 2019).toDateString() ).to.be.equal('Mon Jul 08 2019')
        expect( timelineMethods.getFirstDayOfWeek(54, 2019).toDateString() ).to.be.equal('Mon Jan 06 2020')
        expect( timelineMethods.getFirstDayOfWeek(1, 1).toDateString() ).to.be.equal('Mon Jan 01 0001')
        if ( isBrowser ) {
            expect( timelineMethods.getFirstDayOfWeek(1, -12).toDateString() ).to.be.equal('Mon Jan 04 -0012', 'invalid?')
            expect( timelineMethods.getFirstDayOfWeek(1, -1).toDateString() ).to.be.equal('Mon Jan 04 -0001', 'invalid?')
        } else {
            expect( timelineMethods.getFirstDayOfWeek(1, -12).toDateString() ).to.be.equal('Mon Jan 04 -012', 'notice!')
            expect( timelineMethods.getFirstDayOfWeek(1, -1).toDateString() ).to.be.equal('Mon Jan 04 -001', 'notice!')
        }
        // firstDayOfWeek = 2 : Tuesday
        timelineMethods._config = Object.assign( defaultOptions, { firstDayOfWeek: 2 } )
        expect( timelineMethods.getFirstDayOfWeek(2, 2019).toDateString() ).to.be.equal('Tue Jan 08 2019')
        expect( timelineMethods.getFirstDayOfWeek(28, 2019).toDateString() ).to.be.equal('Tue Jul 09 2019')
        expect( timelineMethods.getFirstDayOfWeek(54, 2019).toDateString() ).to.be.equal('Tue Jan 07 2020')
        // firstDayOfWeek = 3 : Wednesday
        timelineMethods._config = Object.assign( defaultOptions, { firstDayOfWeek: 3 } )
        expect( timelineMethods.getFirstDayOfWeek(2, 2019).toDateString() ).to.be.equal('Wed Jan 09 2019')
        expect( timelineMethods.getFirstDayOfWeek(28, 2019).toDateString() ).to.be.equal('Wed Jul 10 2019')
        expect( timelineMethods.getFirstDayOfWeek(54, 2019).toDateString() ).to.be.equal('Wed Jan 08 2020')
        // firstDayOfWeek = 4 : Thursday
        timelineMethods._config = Object.assign( defaultOptions, { firstDayOfWeek: 4 } )
        expect( timelineMethods.getFirstDayOfWeek(2, 2019).toDateString() ).to.be.equal('Thu Jan 10 2019')
        expect( timelineMethods.getFirstDayOfWeek(28, 2019).toDateString() ).to.be.equal('Thu Jul 11 2019')
        expect( timelineMethods.getFirstDayOfWeek(54, 2019).toDateString() ).to.be.equal('Thu Jan 09 2020')
        // firstDayOfWeek = 5 : Friday
        timelineMethods._config = Object.assign( defaultOptions, { firstDayOfWeek: 5 } )
        expect( timelineMethods.getFirstDayOfWeek(2, 2019).toDateString() ).to.be.equal('Fri Jan 11 2019')
        expect( timelineMethods.getFirstDayOfWeek(28, 2019).toDateString() ).to.be.equal('Fri Jul 12 2019')
        expect( timelineMethods.getFirstDayOfWeek(54, 2019).toDateString() ).to.be.equal('Fri Jan 10 2020')
        // firstDayOfWeek = 6 : Saturday
        timelineMethods._config = Object.assign( defaultOptions, { firstDayOfWeek: 6 } )
        expect( timelineMethods.getFirstDayOfWeek(2, 2019).toDateString() ).to.be.equal('Sat Jan 12 2019')
        expect( timelineMethods.getFirstDayOfWeek(28, 2019).toDateString() ).to.be.equal('Sat Jul 13 2019')
        expect( timelineMethods.getFirstDayOfWeek(54, 2019).toDateString() ).to.be.equal('Sat Jan 11 2020')
        // rollback option
        timelineMethods._config = Object.assign( defaultOptions, { firstDayOfWeek: 0 } )
    })
    
    it ( 'modifyDate: Get the datetime shifted from the specified datetime by any fluctuation value', () => {
        let gCD = timelineMethods.getCorrectDatetime
        
/* GMT+0001
console.log( timelineMethods.modifyDate('1847/11/30 23:00:00',1,'hour').toString() )
console.log( timelineMethods.modifyDate('1847/12/1 0:00:00',  1,'hour').toString() )
console.log( timelineMethods.modifyDate('1847/12/1 0:00:00', -1,'hour').toString() )
console.log( timelineMethods.modifyDate('1847/12/1 1:00:00', -1,'hour').toString() )
*/
        expect( timelineMethods.modifyDate() ).to.be.false
        expect( timelineMethods.modifyDate(-1,0,'') ).to.be.false
        // modify millennium
        expect( timelineMethods.modifyDate('1',-3,'millennium') ).to.be.eql( gCD('-2999') )
        expect( timelineMethods.modifyDate('1',-1,'millennium') ).to.be.eql( gCD('-999') )
        expect( timelineMethods.modifyDate('1',+1,'millennium') ).to.be.eql( gCD('1001') )
        expect( timelineMethods.modifyDate('1',2,'millennium') ).to.be.eql( gCD('2001') )
        // modify century
        expect( timelineMethods.modifyDate('1',-3,'century') ).to.be.eql( gCD('-299') )
        expect( timelineMethods.modifyDate('1',-1,'century') ).to.be.eql( gCD('-99') )
        expect( timelineMethods.modifyDate('1',+1,'century') ).to.be.eql( gCD('101') )
        expect( timelineMethods.modifyDate('1',21,'century') ).to.be.eql( gCD('2101') )
        // modify decade
        expect( timelineMethods.modifyDate('1',-5,'decade') ).to.be.eql( gCD('-49') )
        expect( timelineMethods.modifyDate('1',-1,'decade') ).to.be.eql( gCD('-9') )
        expect( timelineMethods.modifyDate('1',+1,'decade') ).to.be.eql( gCD('11') )
        expect( timelineMethods.modifyDate('1',8,'decade') ).to.be.eql( gCD('81') )
        // modify lustrum
        expect( timelineMethods.modifyDate('1',-5,'lustrum') ).to.be.eql( gCD('-24') )
        expect( timelineMethods.modifyDate('1',-1,'lustrum') ).to.be.eql( gCD('-4') )
        expect( timelineMethods.modifyDate('1',+1,'lustrum') ).to.be.eql( gCD('6') )
        expect( timelineMethods.modifyDate('1',8,'lustrum') ).to.be.eql( gCD('41') )
        expect( timelineMethods.modifyDate('89/12', 10,'lustrum') ).to.be.eql( gCD('139/12') )
        expect( timelineMethods.modifyDate('197-3-4', -25,'lustrum') ).to.be.eql( gCD('72-3-4') )
        expect( timelineMethods.modifyDate('1984/6/10 1:23:45',3,'lustrum') ).to.be.eql( gCD('1999/6/10 1:23:45') )
        // modify year
        expect( timelineMethods.modifyDate('1',-25,'year') ).to.be.eql( gCD('-24') )
        expect( timelineMethods.modifyDate('1',-1,'year') ).to.be.eql( gCD('0') )
        expect( timelineMethods.modifyDate('1',+1,'year') ).to.be.eql( gCD('2') )
        expect( timelineMethods.modifyDate('1',48,'year') ).to.be.eql( gCD('49') )
        expect( timelineMethods.modifyDate('89/12', 13,'year') ).to.be.eql( gCD('102/12') )
        expect( timelineMethods.modifyDate('197-3-4', -12,'year') ).to.be.eql( gCD('185-3-4') )
        expect( timelineMethods.modifyDate('1984/6/10 1:23:45',3,'year') ).to.be.eql( gCD('1987/6/10 1:23:45') )
        expect( timelineMethods.modifyDate('1847/11/30',1,'year') ).to.be.eql( gCD('1848-11-30') )
        if ( isGMT ) {
            expect( timelineMethods.modifyDate('1847/12/1',-1,'year') ).to.be.eql( gCD('1846-12-1 0:01:15'), 'notice!' )
        } else {
            if ( ! forFF && isBrowser ) {
                expect( timelineMethods.modifyDate('1847/12/1',-1,'year') ).to.be.eql( gCD('1846-12-1 0:00:00') )
            }
        }
        // modify month
        expect( timelineMethods.modifyDate('1',-25,'month') ).to.be.eql( gCD('-2/12') )
        expect( timelineMethods.modifyDate('1',-1,'month') ).to.be.eql( gCD('0/12') )
        expect( timelineMethods.modifyDate('1',+1,'month') ).to.be.eql( gCD('1/2') )
        expect( timelineMethods.modifyDate('1',48,'month') ).to.be.eql( gCD('5/1') )
        expect( timelineMethods.modifyDate('89/12', 13,'month') ).to.be.eql( gCD('91/1') )
        expect( timelineMethods.modifyDate('197-3-4', -12,'month') ).to.be.eql( gCD('196/3/4') )
        expect( timelineMethods.modifyDate('1984/6/10 1:23:45',3,'month') ).to.be.eql( gCD('1984/9/10 1:23:45') )
        expect( timelineMethods.modifyDate('1847/11/30',1,'month') ).to.be.eql( gCD('1847/12/30') )
        if ( isGMT ) {
            expect( timelineMethods.modifyDate('1847/12/1',-1,'month') ).to.be.eql( gCD('1847/11/1 0:01:15'), 'notice!' )
        } else {
            if ( ! forFF && isBrowser ) {
                expect( timelineMethods.modifyDate('1847/12/1',-1,'month') ).to.be.eql( gCD('1847/11/1 0:00:00') )
            }
        }
        // modify week
        expect( timelineMethods.modifyDate('1',-53,'week') ).to.be.eql( gCD('-1/12/27') )
        expect( timelineMethods.modifyDate('1',-1,'week') ).to.be.eql( gCD('0/12/25') )
        expect( timelineMethods.modifyDate('1',+1,'week') ).to.be.eql( gCD('1/1/8') )
        expect( timelineMethods.modifyDate('1',48,'week') ).to.be.eql( gCD('1/12/3') )
        expect( timelineMethods.modifyDate('89/12/25',  1,'week') ).to.be.eql( gCD('90/1/1') )
        expect( timelineMethods.modifyDate('197-3-4', -3,'week') ).to.be.eql( gCD('197/2/11') )
        expect( timelineMethods.modifyDate('1984/6/10 1:23:45',3,'week') ).to.be.eql( gCD('1984/7/1 1:23:45') )
        expect( timelineMethods.modifyDate('1847/11/30',1,'week') ).to.be.eql( gCD('1847/12/7') )
        if ( isGMT ) {
            expect( timelineMethods.modifyDate('1847/12/1',-1,'week') ).to.be.eql( gCD('1847/11/24 0:01:15'), 'notice!' )
        } else {
            if ( ! forFF && isBrowser ) {
                expect( timelineMethods.modifyDate('1847/12/1',-1,'week') ).to.be.eql( gCD('1847/11/24 0:00:00') )
            }
        }
        // modify day
        expect( timelineMethods.modifyDate('1',-367,'day') ).to.be.eql( gCD('-1/12/31') )
        expect( timelineMethods.modifyDate('1',-1,'day') ).to.be.eql( gCD('0/12/31') )
        expect( timelineMethods.modifyDate('1',+1,'day') ).to.be.eql( gCD('1/1/2') )
        expect( timelineMethods.modifyDate('1',60,'day') ).to.be.eql( gCD('1/3/2') )
        expect( timelineMethods.modifyDate('89/12/25',  7,'day') ).to.be.eql( gCD('90/1/1') )
        expect( timelineMethods.modifyDate('197-3-4', -64,'day') ).to.be.eql( gCD('196/12/30') )
        expect( timelineMethods.modifyDate('1984/6/10 1:23:45',365,'day') ).to.be.eql( gCD('1985/6/10 1:23:45') )
        //expect( timelineMethods.modifyDate('1847/11/30',1,'day') ).to.be.eql( gCD('1847/12/1 0:01:15'), 'notice!' )
        //expect( timelineMethods.modifyDate('1847/12/1',-1,'day') ).to.be.eql( gCD('1847/11/30 0:01:15'), 'notice!' )
        // modify hour
        expect( timelineMethods.modifyDate('1974/2/15 0:00:00', +1,'hour') ).to.be.eql( gCD('1974/2/15 01:00:00') )
        expect( timelineMethods.modifyDate('1974/2/15 0:00:00',+24,'hour') ).to.be.eql( gCD('1974/2/16 00:00:00') )
        expect( timelineMethods.modifyDate('1974/2/15 0:00:00',+25,'hour') ).to.be.eql( gCD('1974/2/16 01:00:00') )
        expect( timelineMethods.modifyDate('1192/2/9 0:00:00', -24,'hour') ).to.be.eql( gCD('1192/2/8 00:00:00') )
        expect( timelineMethods.modifyDate('1192/2/9 0:00:00', -25,'hour') ).to.be.eql( gCD('1192/2/7 23:00:00') )
        if ( isGMT ) {
            expect( timelineMethods.modifyDate('2019/10/27',24,'hour') ).to.be.eql( gCD('2019/10/27 23:00:00'), 'DST' )
            expect( timelineMethods.modifyDate('2019-3-31', 24,'hour') ).to.be.eql( gCD('2019/4/01 01:00:00'), 'DST' )
        } else {
            if ( ! forFF && isBrowser ) {
                expect( timelineMethods.modifyDate('2019/10/27',24,'hour') ).to.be.eql( gCD('2019/10/28 0:00:00') )
                expect( timelineMethods.modifyDate('2019-3-31', 24,'hour') ).to.be.eql( gCD('2019/4/1 0:00:00') )
            }
        }
        expect( timelineMethods.modifyDate('1/1/1 00:00:00',+3,'hour') ).to.be.eql( gCD('0001/1/01 03:00:00') )
        expect( timelineMethods.modifyDate('1-1-1 00:00:00',-2,'hour') ).to.be.eql( gCD('0000/12/31 22:00:00') )
        expect( timelineMethods.modifyDate('645/11/11 20:12:34',+3,'hour') ).to.be.eql( gCD('0645-11-11 23:12:34') )
        expect( timelineMethods.modifyDate('1192/2/9 6:00:00',  -2,'hour') ).to.be.eql( gCD('1192-02-09 04:00:00') )
        //expect( timelineMethods.modifyDate('1847/11/30 23:00:00',1,'hour') ).to.be.eql( gCD('01/12/1847, 00:02:15'), 'notice!' )
        //expect( timelineMethods.modifyDate('1847/12/1 0:00:00',  1,'hour') ).to.be.eql( gCD('01/12/1847, 01:01:15'), 'notice!' )
        //expect( timelineMethods.modifyDate('1847/12/1 0:00:00', -1,'hour') ).to.be.eql( gCD('1847-11-30 23:01:15.000Z'), 'notice!' )
        //expect( timelineMethods.modifyDate('1847/12/1 1:00:00', -1,'hour') ).to.be.eql( gCD('1847-12-01 00:01:15.000Z'), 'notice!' )
        // modify minute
        expect( timelineMethods.modifyDate('2019/10/27 0:00:00', 61,'minute') ).to.be.eql( gCD('2019/10/27 01:01:00'), 'DST' )
        if ( isGMT ) {
            expect( timelineMethods.modifyDate('2019-3-31 0:00:00', 120,'minute') ).to.be.eql( gCD('2019/3/31 03:00:00'), 'DST' )
        } else {
            if ( ! forFF && isBrowser ) {
                expect( timelineMethods.modifyDate('2019-3-31 0:00:00', 120,'minute') ).to.be.eql( gCD('2019/3/31 02:00:00') )
            }
        }
        expect( timelineMethods.modifyDate('765-9-26 1:23:45',  +21,'minute') ).to.be.eql( gCD('0765/9/26 01:44:45') )
        expect( timelineMethods.modifyDate('1970/1/1 00:15:00', -45,'minute') ).to.be.eql( gCD('1969-12-31 23:30:00') )
        expect( timelineMethods.modifyDate('1969/12/31 23:30:00',30,'minute') ).to.be.eql( gCD('1970/1/1 00:00:00') )
        //expect( timelineMethods.modifyDate('1847/12/1 0:00:00', -2,'minute') ).to.be.eql( gCD('1847/11/30 23:58:00'), 'notice!' )
        //expect( timelineMethods.modifyDate('1847/12/1 0:00:00', -1,'minute') ).to.be.eql( gCD('1847/11/30 23:59:00'), 'notice!' )
        //expect( timelineMethods.modifyDate('1847/11/30 23:59:00',1,'minute') ).to.be.eql( gCD('1847/12/1 00:00:00'), 'notice!' )
        //expect( timelineMethods.modifyDate('1847/12/1 0:00:00', +1,'minute') ).to.be.eql( gCD('1847/12/1 00:01:00'), 'notice!' )
        // modify second
        if ( isGMT ) {
            expect( timelineMethods.modifyDate('2019/10/27 1:59:59',  1,'second') ).to.be.eql( gCD('2019/10/27 1:00:00'), 'DST' )
            expect( timelineMethods.modifyDate('2019-3-31 0:59:59',  +1,'second') ).to.be.eql( gCD('2019/3/31 2:00:00'), 'DST' )
        } else {
            if ( ! forFF && isBrowser ) {
                expect( timelineMethods.modifyDate('2019/10/27 1:59:59',  1,'second') ).to.be.eql( gCD('2019/10/27 2:00:00') )
                expect( timelineMethods.modifyDate('2019-3-31 0:59:59',  +1,'second') ).to.be.eql( gCD('2019/3/31 1:00:00') )
            }
        }
        expect( timelineMethods.modifyDate('765-9-26 1:23:45',  +21,'second') ).to.be.eql( gCD('765/9/26 1:24:06') )
        expect( timelineMethods.modifyDate('1970/1/1 00:15:00', -45,'second') ).to.be.eql( gCD('1970/1/1 0:14:15') )
        expect( timelineMethods.modifyDate('1969/12/31 23:30:00',30,'second') ).to.be.eql( gCD('1969/12/31 23:30:30') )
        expect( timelineMethods.modifyDate('1847/12/1 0:00:00', -2,'second') ).to.be.eql( gCD('1847/11/30 23:59:58') )
        expect( timelineMethods.modifyDate('1847/12/1 0:00:00', -1,'second') ).to.be.eql( gCD('1847/11/30 23:59:59') )
        if ( isGMT ) {
            expect( timelineMethods.modifyDate('1847/11/30 23:59:59',1,'second') ).to.be.eql( gCD('1847/12/1 0:01:15'), 'notice!' )
            expect( timelineMethods.modifyDate('1847/12/1 0:00:00', +1,'second') ).to.be.eql( gCD('1847/12/1 0:01:16'), 'notice!' )
        } else {
            expect( timelineMethods.modifyDate('1847/11/30 23:59:59',1,'second') ).to.be.eql( gCD('1847/12/1 0:00:00') )
            expect( timelineMethods.modifyDate('1847/12/1 0:00:00', +1,'second') ).to.be.eql( gCD('1847/12/1 0:00:01') )
        }
        // modify millisecond
        if ( ! forFF ) {
            expect( timelineMethods.modifyDate('2019/10/27 1:59:59', 789,'millisecond') ).to.be.eql( gCD('2019-10-27 1:59:59.789'), 'DST' )
        }
        if ( isGMT ) {
            expect( timelineMethods.modifyDate('2019-3-31 2:00:00', -100,'millisecond') ).to.be.eql( gCD('2019/3/31 0:59:59.900'), 'DST' )
        } else {
            if ( ! forFF && isBrowser ) {
                expect( timelineMethods.modifyDate('2019-3-31 2:00:00', -100,'millisecond') ).to.be.eql( gCD('2019/3/31 1:59:59.900') )
            }
        }
        if ( ! forFF ) {
            expect( timelineMethods.modifyDate('1956/12/3 0:06:01',+3456,'millisecond') ).to.be.eql( gCD('1956/12/3 0:06:04.456') )
        }
    })
    
    it ( 'diffDate: Acquire the difference between two dates with the specified scale value', () => {
        let diffDate = timelineMethods.diffDate,
            gCD = timelineMethods.getCorrectDatetime
        
        expect( diffDate() ).to.be.false // console.warn: Cannot parse date to get difference because undefined.
        expect( diffDate('2019/1/1') ).to.be.false // console.warn: Cannot parse date to get difference because undefined.
        expect( diffDate('2019/1/1', '2019/12/31') ).to.be.false // console.warn: Cannot parse date to get difference because invalid format.
        expect( diffDate(gCD('2019/1/1'), gCD('2019/12/31')) ).to.be.a('number')
        // when case "millennium"
        expect( diffDate(gCD('0'), gCD('1000'),'millennium') ).to.be.an('object').that.to.eql({1: 1000})
        expect( diffDate(gCD('9/1'), gCD('2006/1'),'millennium') ).to.be.an('object').that.to.eql({1: 991, 2: 1000, 3: 6})
        expect( diffDate(gCD('64/1'), gCD('1970/4'),'millennium') ).to.be.an('object').that.to.eql({1: 936, 2: 970})
        expect( diffDate(gCD('325-6-30'), gCD('2015-7-1'),'millennium') ).to.be.an('object').that.to.eql({1: 675, 2: 1000, 3: 15})
        expect( diffDate(gCD('1545/12/1 0:00'), gCD('2998/3/4 23:00'),'millennium') ).to.be.an('object').that.to.eql({2: 455, 3: 998})
        expect( diffDate(gCD('1998-2-1 0:00'), gCD('2019-3-4 23:00'),'millennium') ).to.be.an('object').that.to.eql({2: 2, 3: 19})
        expect( diffDate(gCD('116/12/31 23:59:00'), gCD('2017/1/1 00:01:00'),'millennium') ).to.be.an('object').that.to.eql({1: 884, 2: 1000, 3: 17})
        // when case "century"
        expect( Object.keys( diffDate(gCD('0'), gCD('1000'),'century') ) ).to.have.lengthOf( 10 )
        expect( diffDate(gCD('9/1'), gCD('2006/1'),'century') ).to.be.an('object').that.to.include({1: 91, 11: 100, 21: 6})
        expect( diffDate(gCD('64/1'), gCD('1970/4'),'century') ).to.be.an('object').that.to.include({1: 36, 20: 70})
        expect( diffDate(gCD('325-6-30'), gCD('2015-7-1'),'century') ).to.be.an('object').that.to.include({4: 75, 21: 15})
        expect( diffDate(gCD('1545/12/1 0:00'), gCD('2998/3/4 23:00'),'century') ).to.be.an('object').that.to.include({16: 55, 30: 98})
        expect( diffDate(gCD('1998-2-1 0:00'), gCD('2019-3-4 23:00'),'century') ).to.be.an('object').that.to.eql({20: 2, 21: 19})
        // when case "decade"
        expect( Object.keys( diffDate(gCD('0'), gCD('100'),'decade') ) ).to.have.lengthOf( 10 )
        expect( diffDate(gCD('9/1'), gCD('206/1'),'decade') ).to.be.an('object').that.to.include({1: 730, 2: 3653, 3: 3652, 21: 2191})
        expect( diffDate(gCD('64/1'), gCD('397/4'),'decade') ).to.be.an('object').that.to.include({7: 2557, 40: 2557})
        expect( diffDate(gCD('325-6-30'), gCD('515-7-1'),'decade') ).to.be.an('object').that.to.include({33: 2191, 52: 1826})
        expect( diffDate(gCD('2545/12/1 0:00'), gCD('2998/3/4 23:00'),'decade') ).to.be.an('object').that.to.include({255: 2191, 300: 2922})
        expect( diffDate(gCD('1998-2-1 0:00'), gCD('2019-3-4 23:00'),'decade') ).to.be.an('object').that.to.eql({200: 1096, 201: 3652, 202: 3287})
        // when case "lustrum"
        expect( Object.keys( diffDate(gCD('0'), gCD('50'),'lustrum') ) ).to.have.lengthOf( 10 )
        expect( diffDate(gCD('0'), gCD('120'),'lustrum') ).to.be.an('object').that.to.include({1: 1826, 4: 1827, 8: 1827, 20: 1826, 24: 1827})
        expect( diffDate(gCD('9/1'), gCD('106/1'),'lustrum') ).to.be.an('object').that.to.include({2: 730, 3: 1826, 4: 1827, 22: 365})
        expect( diffDate(gCD('64/1'), gCD('194/4'),'lustrum') ).to.be.an('object').that.to.include({13: 731, 39: 1461})
        expect( diffDate(gCD('325-6-30'), gCD('415-7-1'),'lustrum') ).to.be.an('object').that.to.include({65: 365, 83: 1826})
        expect( diffDate(gCD('2745/12/1 0:00'), gCD('2998/3/4 23:00'),'lustrum') ).to.be.an('object').that.to.include({549: 365, 600: 1096})
        expect( diffDate(gCD('1998-2-1 0:00'), gCD('2019-3-4 23:00'),'lustrum') ).to.be.an('object').that.to.eql({400: 1096, 401: 1826, 402: 1826, 403: 1826, 404: 1461})
        // when case "year"
        expect( diffDate(gCD('2019/1/1'), gCD('2019/12/31'),'year') ).to.be.an('object').that.to.eql({2019: 365})
        expect( diffDate(gCD('2020-1-1'), gCD('2020-12-31'),'year') ).to.be.an('object').that.to.eql({2020: 366})
        expect( diffDate(gCD('169/3/14'), gCD('172/11/3'),'year') ).to.be.an('object').that.to.eql({169: 365, 170: 365, 171: 365, 172: 366})
        // when case "month"
        expect( diffDate(gCD('169/5/14'), gCD('170/3/3'),'month') ).to.be.an('object').that.to.eql({'169/5': 31, '169/6': 30, '169/7': 31, '169/8': 31, '169/9': 30, '169/10': 31, '169/11': 30, '169/12': 31, '170/1': 31, '170/2': 28, '170/3': 31})
        expect( diffDate(gCD('2020/1/1'), gCD('2020/2/31'),'month') ).to.be.an('object').that.to.eql({'2020/1': 31, '2020/2': 29, '2020/3': 31})
        expect( diffDate(gCD('2019-2'), gCD('2019-2'),'month') ).to.be.an('object').that.to.eql({'2019/2': 28})
        // when case "week"
        expect( timelineMethods.diffDate(gCD('2020/1/1'), gCD('2020/2/31'),'week') ).to.be.an('object').that.to.eql({'2020,1': 96,'2020,2': 168,'2020,3': 168,'2020,4': 168,'2020,5': 168,'2020,6': 168,'2020,7': 168,'2020,8': 168,'2020,9': 168,'2020,10': 48})
        expect( timelineMethods.diffDate(gCD('2019-2'), gCD('2019-2'),'week') ).to.be.an('object').that.to.eql({'2019,5': 24})
        // - further with supported on summer time (DST); That must be testing timezone of "GMT Standard Time"
        if ( isGMT ) {
            expect( timelineMethods.diffDate(gCD('2019/3/24'), gCD('2019/11/9'),'week') ).to.be.an('object').that.to.include({'2019,14': 167, '2019,44': 169})
        } else {
            if ( isBrowser ) {
                expect( timelineMethods.diffDate(gCD('2019/3/24'), gCD('2019/11/9'),'week') ).to.be.an('object').that.to.include({'2019,14': 168, '2019,44': 168})
            } else {
                expect( timelineMethods.diffDate(gCD('2019/3/24'), gCD('2019/11/9'),'week') ).to.be.an('object').that.to.include({'2019,14': 167, '2019,44': 169})
            }
        }
        // when case "day"
        expect( diffDate(gCD('169/12/30'), gCD('170/1/3'),'day') ).to.be.an('object').that.to.eql({'169/12/30': 24, '169/12/31': 24, '170/1/1': 24, '170/1/2': 24, '170/1/3': 24})
        expect( Object.keys( diffDate(gCD('2020-1-29'), gCD('2020-2-31'),'day') ) ).to.have.lengthOf( 34 )
        // - further with supported on summer time (DST); That must be testing timezone of "GMT Standard Time"
        if ( isGMT ) {
            expect( diffDate(gCD('2019/3/24'), gCD('2019/11/9'),'day') ).to.be.an('object').that.to.include({'2019/3/31': 23, '2019/10/27': 25})
        } else {
            if ( isBrowser ) {
                expect( diffDate(gCD('2019/3/24'), gCD('2019/11/9'),'day') ).to.be.an('object').that.to.include({'2019/3/31': 24, '2019/10/27': 24})
            } else {
                expect( diffDate(gCD('2019/3/24'), gCD('2019/11/9'),'day') ).to.be.an('object').that.to.include({'2019/3/31': 23, '2019/10/27': 25})
            }
        }
        // when case "weekday"
        expect( diffDate(gCD('169/12/30'), gCD('170/1/3'),'weekday') ).to.be.an('object').that.to.eql({'169/12/30': 24, '169/12/31': 24, '170/1/1': 24, '170/1/2': 24, '170/1/3': 24})
        expect( Object.keys( diffDate(gCD('2020-1-29'), gCD('2020-2-31'),'weekday') ) ).to.have.lengthOf( 34 )
        // - further with supported on summer time (DST); That must be testing timezone of "GMT Standard Time"
        if ( isGMT ) {
            expect( diffDate(gCD('2019/3/24'), gCD('2019/11/9'),'weekday') ).to.be.an('object').that.to.include({'2019/3/31': 23, '2019/10/27': 25})
        } else {
            if ( isBrowser ) {
                expect( diffDate(gCD('2019/3/24'), gCD('2019/11/9'),'weekday') ).to.be.an('object').that.to.include({'2019/3/31': 24, '2019/10/27': 24})
            } else {
                expect( diffDate(gCD('2019/3/24'), gCD('2019/11/9'),'weekday') ).to.be.an('object').that.to.include({'2019/3/31': 23, '2019/10/27': 25})
            }
        }
        // when case "hour"
        expect( diffDate(gCD('169/12/31'), gCD('170/1/1'),'hour') ).to.be.an('object').that.to.include({'169/12/31 0': 60, '170/1/1 0': 60})
        expect( diffDate(new Date('2020-1-29 0'), new Date('2020-1-29 12'),'hour') ).to.be.false // console.warn: Cannot parse date to get difference because invalid format.
        expect( diffDate(gCD('2020-1-29 0'), gCD('2020-1-29 12'),'hour') ).to.be.an('object').that.to.include({'2020/1/29 0': 60, '2020/1/29 12': 60})
        expect( Object.keys( diffDate(gCD('1970/1/1 0:00'), gCD('1970/1/1 23:00'),'hour') ) ).to.have.lengthOf( 24 )
        expect( Object.keys( diffDate(gCD('1970/1/1 0:00'), gCD('1970/1/1 24:00'),'hour') ) ).to.have.lengthOf( 25 )
        expect( diffDate(new Date('1970-1-1 0:00'), new Date('1970-1-1 24:01'),'hour') ).to.be.false // console.warn: Cannot parse date to get difference because invalid format.
        expect( diffDate(gCD('1970-1-1 0:00'), gCD('1970-1-1 24:01'),'hour') ).to.be.an('object').that.to.include({'1970/1/2 0': 60})
        expect( diffDate(gCD('1998-1-29 5:22'), gCD('1998-1-29 14:08'),'hour') ).to.be.an('object').that.to.eql({'1998/1/29 5': 60, '1998/1/29 6': 60, '1998/1/29 7': 60, '1998/1/29 8': 60, '1998/1/29 9': 60, '1998/1/29 10': 60, '1998/1/29 11': 60, '1998/1/29 12': 60, '1998/1/29 13': 60, '1998/1/29 14': 60})
        // - further with supported on summer time (DST); That must be testing timezone of "GMT Standard Time"
        if ( isGMT ) {
            expect( diffDate(gCD('2019/3/31 0:00'), gCD('2019/3/31 2:00'),'hour') ).to.be.an('object').that.to.eql({'2019/3/31 0': 60, '2019/3/31 2': 60})
            expect( diffDate(gCD('2019/10/27 0:00'), gCD('2019/10/27 2:00'),'hour') ).to.be.an('object').that.to.include({'2019/10/27 1': 120})
        } else {
            if ( isBrowser ) {
                expect( diffDate(gCD('2019/3/31 0:00'), gCD('2019/3/31 2:00'),'hour') ).to.be.an('object').that.to.eql({'2019/3/31 0': 60, '2019/3/31 1': 60, '2019/3/31 2': 60})
                expect( diffDate(gCD('2019/10/27 0:00'), gCD('2019/10/27 2:00'),'hour') ).to.be.an('object').that.to.include({'2019/10/27 0': 60, '2019/10/27 1': 60})
            } else {
                expect( diffDate(gCD('2019/3/31 0:00'), gCD('2019/3/31 2:00'),'hour') ).to.be.an('object').that.to.eql({'2019/3/31 0': 60, '2019/3/31 2': 60})
                expect( diffDate(gCD('2019/10/27 0:00'), gCD('2019/10/27 2:00'),'hour') ).to.be.an('object').that.to.include({'2019/10/27 1': 120})
            }
        }
        // when case "half-hour"
        
        // when case "quarter-hour"
        
        // when case "minute"
        expect( diffDate(gCD('169/12/31 23:50'), gCD('170/1/1 0:10'),'minute') ).to.be.an('object').that.to.include({'169/12/31 23:50': 60, '170/1/1 0:0': 60})
        expect( diffDate(new Date('1970-1-1 0:00'), new Date('1970-1-1 24:01'),'minute') ).to.be.false // console.warn: Cannot parse date to get difference because invalid format.
        expect( diffDate(gCD('1970-1-1 0:00'), gCD('1970-1-1 24:01'),'minute') ).to.be.an('object').that.to.include({'1970/1/1 23:59': 60, '1970/1/2 0:0': 60, '1970/1/2 0:1': 60})
        expect( Object.keys( diffDate(gCD('1970/1/1 0:00'), gCD('1970/1/1 9:59'),'minute') ) ).to.have.lengthOf( 600 )
        expect( Object.keys( diffDate(gCD('1998/1/29 5:22'), gCD('1998/1/29 7:08'),'minute') ) ).to.have.lengthOf( 107 )
        // - further with supported on summer time (DST); That must be testing timezone of "GMT Standard Time"
        if ( isGMT ) {
            expect( diffDate(gCD('2019/3/31 0:59'), gCD('2019/3/31 2:00'),'minute') ).to.be.an('object').that.to.eql({'2019/3/31 0:59': 60, '2019/3/31 2:0': 60})
            expect( diffDate(gCD('2019/10/27 0:59'), gCD('2019/10/27 2:00'),'minute') ).to.be.an('object').that.to.include({'2019/10/27 1:59': 3660})
        } else {
            if ( isBrowser ) {
                expect( diffDate(gCD('2019/3/31 0:59'), gCD('2019/3/31 2:00'),'minute') ).to.be.an('object').that.to.include({'2019/3/31 0:59': 60, '2019/3/31 1:0': 60, '2019/3/31 1:59': 60, '2019/3/31 2:0': 60})
                expect( diffDate(gCD('2019/10/27 0:59'), gCD('2019/10/27 2:00'),'minute') ).to.be.an('object').that.to.include({'2019/10/27 1:59': 60})
            } else {
                expect( diffDate(gCD('2019/3/31 0:59'), gCD('2019/3/31 2:00'),'minute') ).to.be.an('object').that.to.eql({'2019/3/31 0:59': 60, '2019/3/31 2:0': 60})
                expect( diffDate(gCD('2019/10/27 0:59'), gCD('2019/10/27 2:00'),'minute') ).to.be.an('object').that.to.include({'2019/10/27 1:59': 3660})
            }
        }
        // when case "second"
        expect( diffDate(gCD('169/12/31 23:59:00'), gCD('170/1/1 0:01:00'),'second') ).to.be.a('object').that.to.include({'169/12/31 23:59:0': 1000, '169/12/31 23:59:59': 1000, '170/1/1 0:0:0': 1000, '170/1/1 0:1:0': 1000})
        expect( Object.keys( diffDate(gCD('1970/1/1 0:00:01'), gCD('1970/1/1 1:00:00'),'second') ) ).to.have.lengthOf( 3600 )
        // - further with supported on leap second
        expect( diffDate(gCD('2015-6-30 23:59:59'), gCD('2015-7-1 0:00:01'),'second') ).to.be.an('object').that.to.eql({'2015/6/30 23:59:59': 1000, '2015/7/1 0:0:0': 1000, '2015/7/1 0:0:1': 1000})
        expect( diffDate(gCD('2016/12/31 23:59:59'), gCD('2017/1/1 00:00:01'),'second') ).to.be.an('object').that.to.eql({'2016/12/31 23:59:59': 1000, '2017/1/1 0:0:0': 1000, '2017/1/1 0:0:1': 1000})
        // - further with supported on summer time (DST); That must be testing timezone of "GMT Standard Time"
        if ( isGMT ) {
            expect( diffDate(gCD('2019/3/31 0:59:59'), gCD('2019/3/31 2:00:00'),'second') ).to.be.an('object').that.to.eql({'2019/3/31 0:59:59': 1000, '2019/3/31 2:0:0': 1000})
            expect( diffDate(gCD('2019/10/27 1:59:58'), gCD('2019/10/27 2:00:01'),'second') ).to.be.a('object').that.to.include({'2019/10/27 1:59:59': 3601000})
        } else {
            if ( isBrowser ) {
                expect( diffDate(gCD('2019/3/31 0:59:59'), gCD('2019/3/31 2:00:00'),'second') ).to.be.an('object').that.to.include({'2019/3/31 0:59:59': 1000, '2019/3/31 1:0:0': 1000, '2019/3/31 1:59:59': 1000, '2019/3/31 2:0:0': 1000})
                expect( diffDate(gCD('2019/10/27 1:59:58'), gCD('2019/10/27 2:00:01'),'second') ).to.be.a('object').that.to.include({'2019/10/27 1:59:59': 1000})
            } else {
                expect( diffDate(gCD('2019/3/31 0:59:59'), gCD('2019/3/31 2:00:00'),'second') ).to.be.an('object').that.to.eql({'2019/3/31 0:59:59': 1000, '2019/3/31 2:0:0': 1000})
                expect( diffDate(gCD('2019/10/27 1:59:58'), gCD('2019/10/27 2:00:01'),'second') ).to.be.a('object').that.to.include({'2019/10/27 1:59:59': 3601000})
            }
        }
        // when case "other"
        expect( diffDate(gCD('1970/1/1 0:00'), gCD('1970/1/1 23:00'),'quarterHour') ).to.be.a('number').that.to.equal( 23 * 60 * 60 * 1000 )
        expect( diffDate(gCD('1970-1-1 0:00'), gCD('1970-1-1 24:00'),'halfHour') ).to.be.a('number').that.to.equal( 24 * 60 * 60 * 1000 )
        expect( diffDate(gCD('2015-6-30 23:59:59'), gCD('2015-7-1 0:00:01'),'millisecond') ).to.equal( 2 * 1000 )
    })
    
    it ( 'getHigherScale: Retrieve one higher scale', () => {
        
        expect( timelineMethods.getHigherScale( 'millisecond' ) ).to.equal( 'second' )
        expect( timelineMethods.getHigherScale( 'milliseconds' ) ).to.equal( 'second' )
        expect( timelineMethods.getHigherScale( 'second' ) ).to.equal( 'minute' )
        expect( timelineMethods.getHigherScale( 'seconds' ) ).to.equal( 'minute' )
        expect( timelineMethods.getHigherScale( 'minute' ) ).to.equal( 'hour' )
        expect( timelineMethods.getHigherScale( 'minutes' ) ).to.equal( 'hour' )
        expect( timelineMethods.getHigherScale( 'hour' ) ).to.equal( 'day' )
        expect( timelineMethods.getHigherScale( 'hours' ) ).to.equal( 'day' )
        expect( timelineMethods.getHigherScale( 'half' ) ).to.equal( 'day' )
        expect( timelineMethods.getHigherScale( 'halfhour' ) ).to.equal( 'day' )
        expect( timelineMethods.getHigherScale( 'half-hour' ) ).to.equal( 'day' )
        expect( timelineMethods.getHigherScale( 'quarter' ) ).to.equal( 'day' )
        expect( timelineMethods.getHigherScale( 'quarterhour' ) ).to.equal( 'day' )
        expect( timelineMethods.getHigherScale( 'quarter-hour' ) ).to.equal( 'day' )
        expect( timelineMethods.getHigherScale( 'day' ) ).to.equal( 'week' )
        expect( timelineMethods.getHigherScale( 'days' ) ).to.equal( 'week' )
        expect( timelineMethods.getHigherScale( 'weekday' ) ).to.equal( 'week' )
        expect( timelineMethods.getHigherScale( 'weekdays' ) ).to.equal( 'week' )
        expect( timelineMethods.getHigherScale( 'week' ) ).to.equal( 'month' )
        expect( timelineMethods.getHigherScale( 'weeks' ) ).to.equal( 'month' )
        expect( timelineMethods.getHigherScale( 'month' ) ).to.equal( 'year' )
        expect( timelineMethods.getHigherScale( 'months' ) ).to.equal( 'year' )
        expect( timelineMethods.getHigherScale( 'year' ) ).to.equal( 'lustrum' )
        expect( timelineMethods.getHigherScale( 'years' ) ).to.equal( 'lustrum' )
        expect( timelineMethods.getHigherScale( 'lustrum' ) ).to.equal( 'decade' )
        expect( timelineMethods.getHigherScale( 'decade' ) ).to.equal( 'century' )
        expect( timelineMethods.getHigherScale( 'decennium' ) ).to.equal( 'century' )
        expect( timelineMethods.getHigherScale( 'century' ) ).to.equal( 'millennium' )
        expect( timelineMethods.getHigherScale( 'millennium' ) ).to.equal( 'millennium' )
        expect( timelineMethods.getHigherScale( 'millenniums' ) ).to.equal( 'millennium' )
        expect( timelineMethods.getHigherScale( 'millennia' ) ).to.equal( 'millennium' )
    })
    
    it ( 'getLowerScale: Retrieve one lower scale', () => {
        
        expect( timelineMethods.getLowerScale( 'millisecond' ) ).to.equal( 'millisecond' )
        expect( timelineMethods.getLowerScale( 'milliseconds' ) ).to.equal( 'millisecond' )
        expect( timelineMethods.getLowerScale( 'second' ) ).to.equal( 'millisecond' )
        expect( timelineMethods.getLowerScale( 'seconds' ) ).to.equal( 'millisecond' )
        expect( timelineMethods.getLowerScale( 'minute' ) ).to.equal( 'second' )
        expect( timelineMethods.getLowerScale( 'minutes' ) ).to.equal( 'second' )
        expect( timelineMethods.getLowerScale( 'hour' ) ).to.equal( 'minute' )
        expect( timelineMethods.getLowerScale( 'hours' ) ).to.equal( 'minute' )
        expect( timelineMethods.getLowerScale( 'half' ) ).to.equal( 'minute' )
        expect( timelineMethods.getLowerScale( 'halfhour' ) ).to.equal( 'minute' )
        expect( timelineMethods.getLowerScale( 'half-hour' ) ).to.equal( 'minute' )
        expect( timelineMethods.getLowerScale( 'quarter' ) ).to.equal( 'minute' )
        expect( timelineMethods.getLowerScale( 'quarterhour' ) ).to.equal( 'minute' )
        expect( timelineMethods.getLowerScale( 'quarter-hour' ) ).to.equal( 'minute' )
        expect( timelineMethods.getLowerScale( 'day' ) ).to.equal( 'hour' )
        expect( timelineMethods.getLowerScale( 'days' ) ).to.equal( 'hour' )
        expect( timelineMethods.getLowerScale( 'weekday' ) ).to.equal( 'hour' )
        expect( timelineMethods.getLowerScale( 'weekdays' ) ).to.equal( 'hour' )
        expect( timelineMethods.getLowerScale( 'week' ) ).to.equal( 'day' )
        expect( timelineMethods.getLowerScale( 'weeks' ) ).to.equal( 'day' )
        expect( timelineMethods.getLowerScale( 'month' ) ).to.equal( 'week' )
        expect( timelineMethods.getLowerScale( 'months' ) ).to.equal( 'week' )
        expect( timelineMethods.getLowerScale( 'year' ) ).to.equal( 'month' )
        expect( timelineMethods.getLowerScale( 'years' ) ).to.equal( 'month' )
        expect( timelineMethods.getLowerScale( 'lustrum' ) ).to.equal( 'year' )
        expect( timelineMethods.getLowerScale( 'decade' ) ).to.equal( 'lustrum' )
        expect( timelineMethods.getLowerScale( 'decennium' ) ).to.equal( 'lustrum' )
        expect( timelineMethods.getLowerScale( 'century' ) ).to.equal( 'decade' )
        expect( timelineMethods.getLowerScale( 'millennium' ) ).to.equal( 'century' )
        expect( timelineMethods.getLowerScale( 'millenniums' ) ).to.equal( 'century' )
        expect( timelineMethods.getLowerScale( 'millennia' ) ).to.equal( 'century' )
    })
    
    it ( 'findScale: Find scale matched the specified condition', () => {
        // higher all
        expect( timelineMethods.findScale( 'millisecond', 'higher all' ) ).to.eql( ['second', 'minute', 'hour', 'day', 'week', 'month', 'year', 'lustrum', 'decade', 'century', 'millennium', 'weekday'] )
        expect( timelineMethods.findScale( 'milliseconds', 'higherall' ) ).to.eql( ['second', 'minute', 'hour', 'day', 'week', 'month', 'year', 'lustrum', 'decade', 'century', 'millennium', 'weekday'] )
        expect( timelineMethods.findScale( 'second', 'higher all' ) ).to.eql( ['minute', 'hour', 'day', 'week', 'month', 'year', 'lustrum', 'decade', 'century', 'millennium', 'weekday'] )
        expect( timelineMethods.findScale( 'seconds', 'higherall' ) ).to.eql( ['minute', 'hour', 'day', 'week', 'month', 'year', 'lustrum', 'decade', 'century', 'millennium', 'weekday'] )
        expect( timelineMethods.findScale( 'minute', 'higher all' ) ).to.eql( ['hour', 'day', 'week', 'month', 'year', 'lustrum', 'decade', 'century', 'millennium', 'weekday'] )
        expect( timelineMethods.findScale( 'minutes', 'higherall' ) ).to.eql( ['hour', 'day', 'week', 'month', 'year', 'lustrum', 'decade', 'century', 'millennium', 'weekday'] )
        expect( timelineMethods.findScale( 'hour', 'higher all' ) ).to.eql( ['day', 'week', 'month', 'year', 'lustrum', 'decade', 'century', 'millennium', 'weekday'] )
        expect( timelineMethods.findScale( 'hours', 'higherall' ) ).to.eql( ['day', 'week', 'month', 'year', 'lustrum', 'decade', 'century', 'millennium', 'weekday'] )
        expect( timelineMethods.findScale( 'half', 'higher all' ) ).to.eql( ['day', 'week', 'month', 'year', 'lustrum', 'decade', 'century', 'millennium', 'weekday'] )
        expect( timelineMethods.findScale( 'halfhour', 'higherall' ) ).to.eql( ['day', 'week', 'month', 'year', 'lustrum', 'decade', 'century', 'millennium', 'weekday'] )
        expect( timelineMethods.findScale( 'half-hour', 'higherAll' ) ).to.eql( ['day', 'week', 'month', 'year', 'lustrum', 'decade', 'century', 'millennium', 'weekday'] )
        expect( timelineMethods.findScale( 'quarter', 'higher all' ) ).to.eql( ['day', 'week', 'month', 'year', 'lustrum', 'decade', 'century', 'millennium', 'weekday'] )
        expect( timelineMethods.findScale( 'quarterhour', 'higherall' ) ).to.eql( ['day', 'week', 'month', 'year', 'lustrum', 'decade', 'century', 'millennium', 'weekday'] )
        expect( timelineMethods.findScale( 'quarter-hour', 'higherAll' ) ).to.eql( ['day', 'week', 'month', 'year', 'lustrum', 'decade', 'century', 'millennium', 'weekday'] )
        expect( timelineMethods.findScale( 'day', 'higher all' ) ).to.eql( ['week', 'month', 'year', 'lustrum', 'decade', 'century', 'millennium'] )
        expect( timelineMethods.findScale( 'days', 'higherall' ) ).to.eql( ['week', 'month', 'year', 'lustrum', 'decade', 'century', 'millennium'] )
        expect( timelineMethods.findScale( 'weekday', 'higher all' ) ).to.eql( ['week', 'month', 'year', 'lustrum', 'decade', 'century', 'millennium'] )
        expect( timelineMethods.findScale( 'weekdays', 'higherall' ) ).to.eql( ['week', 'month', 'year', 'lustrum', 'decade', 'century', 'millennium'] )
        expect( timelineMethods.findScale( 'week', 'higher all' ) ).to.eql( ['month', 'year', 'lustrum', 'decade', 'century', 'millennium'] )
        expect( timelineMethods.findScale( 'weeks', 'higherall' ) ).to.eql( ['month', 'year', 'lustrum', 'decade', 'century', 'millennium'] )
        expect( timelineMethods.findScale( 'month', 'higher all' ) ).to.eql( ['year', 'lustrum', 'decade', 'century', 'millennium'] )
        expect( timelineMethods.findScale( 'months', 'higherall' ) ).to.eql( ['year', 'lustrum', 'decade', 'century', 'millennium'] )
        expect( timelineMethods.findScale( 'year', 'higher all' ) ).to.eql( ['lustrum', 'decade', 'century', 'millennium'] )
        expect( timelineMethods.findScale( 'years', 'higherall' ) ).to.eql( ['lustrum', 'decade', 'century', 'millennium'] )
        expect( timelineMethods.findScale( 'lustrum', 'higher all' ) ).to.eql( ['decade', 'century', 'millennium'] )
        expect( timelineMethods.findScale( 'decade', 'higherall' ) ).to.eql( ['century', 'millennium'] )
        expect( timelineMethods.findScale( 'decennium', 'higher all' ) ).to.eql( ['century', 'millennium'] )
        expect( timelineMethods.findScale( 'century', 'higher all' ) ).to.eql( ['millennium'] )
        expect( timelineMethods.findScale( 'millennium', 'higher all' ) ).to.eql( [] )
        expect( timelineMethods.findScale( 'millenniums', 'higherall' ) ).to.eql( [] )
        expect( timelineMethods.findScale( 'millennia', 'higherAll' ) ).to.eql( [] )
        // lower all
        expect( timelineMethods.findScale( 'millennium', 'lower all' ) ).to.eql( ['millisecond', 'second', 'minute', 'hour', 'day', 'week', 'month', 'year', 'lustrum', 'decade', 'century', 'weekday'] )
        expect( timelineMethods.findScale( 'millenniums', 'lowerall' ) ).to.eql( ['millisecond', 'second', 'minute', 'hour', 'day', 'week', 'month', 'year', 'lustrum', 'decade', 'century', 'weekday'] )
        expect( timelineMethods.findScale( 'millennia', 'lower All' ) ).to.eql( ['millisecond', 'second', 'minute', 'hour', 'day', 'week', 'month', 'year', 'lustrum', 'decade', 'century', 'weekday'] )
        expect( timelineMethods.findScale( 'century', 'lower all' ) ).to.eql( ['millisecond', 'second', 'minute', 'hour', 'day', 'week', 'month', 'year', 'lustrum', 'decade', 'weekday'] )
        expect( timelineMethods.findScale( 'decade', 'lower all' ) ).to.eql( ['millisecond', 'second', 'minute', 'hour', 'day', 'week', 'month', 'year', 'lustrum', 'weekday'] )
        expect( timelineMethods.findScale( 'decennium', 'lowerall' ) ).to.eql( ['millisecond', 'second', 'minute', 'hour', 'day', 'week', 'month', 'year', 'lustrum', 'weekday'] )
        expect( timelineMethods.findScale( 'lustrum', 'lower all' ) ).to.eql( ['millisecond', 'second', 'minute', 'hour', 'day', 'week', 'month', 'year', 'weekday'] )
        expect( timelineMethods.findScale( 'year', 'lower all' ) ).to.eql( ['millisecond', 'second', 'minute', 'hour', 'day', 'week', 'month', 'weekday'] )
        expect( timelineMethods.findScale( 'years', 'lowerall' ) ).to.eql( ['millisecond', 'second', 'minute', 'hour', 'day', 'week', 'month', 'weekday'] )
        expect( timelineMethods.findScale( 'month', 'lower all' ) ).to.eql( ['millisecond', 'second', 'minute', 'hour', 'day', 'week', 'weekday'] )
        expect( timelineMethods.findScale( 'months', 'lowerall' ) ).to.eql( ['millisecond', 'second', 'minute', 'hour', 'day', 'week', 'weekday'] )
        expect( timelineMethods.findScale( 'week', 'lower all' ) ).to.eql( ['millisecond', 'second', 'minute', 'hour', 'day', 'weekday'] )
        expect( timelineMethods.findScale( 'weeks', 'lowerall' ) ).to.eql( ['millisecond', 'second', 'minute', 'hour', 'day', 'weekday'] )
        expect( timelineMethods.findScale( 'weekday', 'lower all' ) ).to.eql( ['millisecond', 'second', 'minute', 'hour'] )
        expect( timelineMethods.findScale( 'weekdays', 'lowerall' ) ).to.eql( ['millisecond', 'second', 'minute', 'hour'] )
        expect( timelineMethods.findScale( 'day', 'lower all' ) ).to.eql( ['millisecond', 'second', 'minute', 'hour'] )
        expect( timelineMethods.findScale( 'days', 'lowerall' ) ).to.eql( ['millisecond', 'second', 'minute', 'hour'] )
        expect( timelineMethods.findScale( 'quarter', 'lower all' ) ).to.eql( ['millisecond', 'second', 'minute'] )
        expect( timelineMethods.findScale( 'quarterhour', 'lowerall' ) ).to.eql( ['millisecond', 'second', 'minute'] )
        expect( timelineMethods.findScale( 'quarter-hour', 'lowerAll' ) ).to.eql( ['millisecond', 'second', 'minute'] )
        expect( timelineMethods.findScale( 'half', 'lower all' ) ).to.eql( ['millisecond', 'second', 'minute'] )
        expect( timelineMethods.findScale( 'halfhour', 'lowerall' ) ).to.eql( ['millisecond', 'second', 'minute'] )
        expect( timelineMethods.findScale( 'half-hour', 'Lower All' ) ).to.eql( ['millisecond', 'second', 'minute'] )
        expect( timelineMethods.findScale( 'hour', 'lower all' ) ).to.eql( ['millisecond', 'second', 'minute'] )
        expect( timelineMethods.findScale( 'hours', 'lowerall' ) ).to.eql( ['millisecond', 'second', 'minute'] )
        expect( timelineMethods.findScale( 'minute', 'lower all' ) ).to.eql( ['millisecond', 'second'] )
        expect( timelineMethods.findScale( 'minutes', 'lowerall' ) ).to.eql( ['millisecond', 'second'] )
        expect( timelineMethods.findScale( 'second', 'lower all' ) ).to.eql( ['millisecond'] )
        expect( timelineMethods.findScale( 'seconds', 'lowerall' ) ).to.eql( ['millisecond'] )
        expect( timelineMethods.findScale( 'millisecond', 'lower all' ) ).to.eql( [] )
        expect( timelineMethods.findScale( 'milliseconds', 'lowerall' ) ).to.eql( [] )
    })
    
    it ( 'verifyScale: Verify whether is allowed scale in the plugin', () => {
        let _now = new Date(),
            _pass = {
                millisecond: new Date().setMilliseconds( _now.getMilliseconds() + 789 ),
                second: new Date().setSeconds( _now.getSeconds() + 56 ),
                minute: new Date().setMinutes( _now.getMinutes() + 34 ),
                hour: new Date().setHours( _now.getHours() + 12 ),
                day: new Date().setDate( _now.getDate() + 32 ),
                week: new Date().setDate( _now.getDate() + 7 * 2 ),
                month: new Date().setMonth( _now.getMonth() + 3 ),
                year: new Date().setFullYear( _now.getFullYear() + 1 ),
                lustrum: new Date().setFullYear( _now.getFullYear() + 12 ),
                decade: new Date().setFullYear( _now.getFullYear() + 23 ),
                century: new Date().setFullYear( _now.getFullYear() + 345 ),
                millennium: new Date().setFullYear( _now.getFullYear() + 1234 ),
            }
        
/*
console.log( _now.getTime(), _pass )
* /
console.log( '0::ms: ', timelineMethods.verifyScale( 'millisecond', _now.getTime(), _pass.millisecond, true ) )
console.log( '1::sec:', timelineMethods.verifyScale( 'second', _now.getTime(), _pass.second, true ) )
console.log( '2::min:', timelineMethods.verifyScale( 'minute', _now.getTime(), _pass.minute, true ) )
console.log( '3::q-h:', timelineMethods.verifyScale( 'quarter-hour', _now.getTime(), _pass.hour, true ) )
console.log( '4::h-h:', timelineMethods.verifyScale( 'half-hour', _now.getTime(), _pass.hour, true ) )
console.log( '5::hou:', timelineMethods.verifyScale( 'hour', _now.getTime(), _pass.hour, true ) )
console.log( '6::day:', timelineMethods.verifyScale( 'day', _now.getTime(), _pass.day, true ) )
console.log( '7::wek:', timelineMethods.verifyScale( 'week', _now.getTime(), _pass.week, true ) )
console.log( '8::mon:', timelineMethods.verifyScale( 'month', _now.getTime(), _pass.month, true ) )
console.log( '9::yea:', timelineMethods.verifyScale( 'year', _now.getTime(), _pass.year, true ) )
console.log( 'a::lst:', timelineMethods.verifyScale( 'lustrum', _now.getTime(), _pass.lustrum, true ) )
console.log( 'b::dec:', timelineMethods.verifyScale( 'decade', _now.getTime(), _pass.decade, true ) )
console.log( 'c::cen:', timelineMethods.verifyScale( 'century', _now.getTime(), _pass.century, true ) )
console.log( 'd::mil:', timelineMethods.verifyScale( 'millennium', _now.getTime(), _pass.millennium, true ) )
/* */
        // whether or not valid scale
        expect( timelineMethods.verifyScale() ).to.be.false
        expect( timelineMethods.verifyScale( 'auto' ) ).to.be.false // console.warn: Specified an invalid "auto" scale.
        expect( timelineMethods.verifyScale( 'millisecond' ) ).to.be.true
        expect( timelineMethods.verifyScale( 'second' ) ).to.be.true
        expect( timelineMethods.verifyScale( 'minute' ) ).to.be.true
        expect( timelineMethods.verifyScale( 'quarter-hour' ) ).to.be.true
        expect( timelineMethods.verifyScale( 'half-hour' ) ).to.be.true
        expect( timelineMethods.verifyScale( 'hour' ) ).to.be.true
        expect( timelineMethods.verifyScale( 'day' ) ).to.be.true
        expect( timelineMethods.verifyScale( 'weekday' ) ).to.be.true
        expect( timelineMethods.verifyScale( 'week' ) ).to.be.true
        expect( timelineMethods.verifyScale( 'month' ) ).to.be.true
        expect( timelineMethods.verifyScale( 'year' ) ).to.be.true
        expect( timelineMethods.verifyScale( 'lustrum' ) ).to.be.true
        expect( timelineMethods.verifyScale( 'decade' ) ).to.be.true
        expect( timelineMethods.verifyScale( 'century' ) ).to.be.true
        expect( timelineMethods.verifyScale( 'millennium' ) ).to.be.true
        // retrieves that values of intervals on the scale
        // - isVLS = false
        expect( timelineMethods.verifyScale( 'millisecond', _now.getTime(), _pass.millisecond ) ).to.be.a('number').that.to.equal( 1 )
        expect( timelineMethods.verifyScale( 'second', _now.getTime(), _pass.second ) ).to.be.a('number').that.to.equal( 1000 )
        expect( timelineMethods.verifyScale( 'minute', _now.getTime(), _pass.minute ) ).to.be.a('number').that.to.equal( 60 * 1000 )
        expect( timelineMethods.verifyScale( 'quarter-hour', _now.getTime(), _pass.hour ) ).to.be.a('number').that.to.equal( 15 * 60 * 1000 )
        expect( timelineMethods.verifyScale( 'half-hour', _now.getTime(), _pass.hour ) ).to.be.a('number').that.to.equal( 30 * 60 * 1000 )
        expect( timelineMethods.verifyScale( 'hour', _now.getTime(), _pass.hour ) ).to.be.a('number').that.to.equal( 60 * 60 * 1000 )
        expect( timelineMethods.verifyScale( 'day', _now.getTime(), _pass.day ) ).to.be.a('number').that.to.equal( 24 * 60 * 60 * 1000 )
        expect( timelineMethods.verifyScale( 'weekday', _now.getTime(), _pass.day ) ).to.be.a('number').that.to.equal( 24 * 60 * 60 * 1000 )
        expect( timelineMethods.verifyScale( 'week', _now.getTime(), _pass.week ) ).to.be.a('number').that.to.equal( 7 * 24 * 60 * 60 * 1000 )
        expect( timelineMethods.verifyScale( 'month', _now.getTime(), _pass.month ) ).to.be.a('number').that.to.equal( 30.44 * 24 * 60 * 60 * 1000 )
        expect( timelineMethods.verifyScale( 'year', _now.getTime(), _pass.year ) ).to.be.a('number').that.to.equal( 365.25 * 24 * 60 * 60 * 1000 )
        expect( timelineMethods.verifyScale( 'lustrum', _now.getTime(), _pass.lustrum ) ).to.be.a('number').that.to.equal( 157788000 * 1000 )
        expect( timelineMethods.verifyScale( 'decade', _now.getTime(), _pass.decade ) ).to.be.a('number').that.to.equal( 315576000 * 1000 )
        expect( timelineMethods.verifyScale( 'century', _now.getTime(), _pass.century ) ).to.be.a('number').that.to.equal( 3155760000 * 1000 )
        expect( timelineMethods.verifyScale( 'millennium', _now.getTime(), _pass.millennium ) ).to.be.a('number').that.to.equal( 3155760000 * 10 * 1000 )
        // - isVLS = true
        expect( timelineMethods.verifyScale( 'millisecond', _now.getTime(), _pass.millisecond, true ) ).to.be.a('number')
        expect( timelineMethods.verifyScale( 'second', _now.getTime(), _pass.second, true ) ).to.be.an('object').that.to.eql( timelineMethods.diffDate( _now.getTime(), _pass.second, 'second' ) )
        expect( timelineMethods.verifyScale( 'minute', _now.getTime(), _pass.minute, true ) ).to.be.an('object').that.to.eql( timelineMethods.diffDate( _now.getTime(), _pass.minute, 'minute' ) )
        expect( timelineMethods.verifyScale( 'quarter-hour', _now.getTime(), _pass.hour, true ) ) //.to.be.an('object').that.to.eql( timelineMethods.diffDate( _now.getTime(), _pass.hour, 'quarter-hour' ) )
        expect( timelineMethods.verifyScale( 'half-hour', _now.getTime(), _pass.hour, true ) ) //.to.be.an('object').that.to.eql( timelineMethods.diffDate( _now.getTime(), _pass.hour, 'half-hour' ) )
        expect( timelineMethods.verifyScale( 'hour', _now.getTime(), _pass.hour, true ) ).to.be.an('object').that.to.eql( timelineMethods.diffDate( _now.getTime(), _pass.hour, 'hour' ) )
        expect( timelineMethods.verifyScale( 'day', _now.getTime(), _pass.day, true ) ).to.be.an('object').that.to.eql( timelineMethods.diffDate( _now.getTime(), _pass.day, 'day' ) )
        expect( timelineMethods.verifyScale( 'weekday', _now.getTime(), _pass.day, true ) ).to.be.an('object').that.to.eql( timelineMethods.diffDate( _now.getTime(), _pass.day, 'day' ) )
        expect( timelineMethods.verifyScale( 'week', _now.getTime(), _pass.week, true ) ).to.be.an('object').that.to.eql( timelineMethods.diffDate( _now.getTime(), _pass.week, 'week' ) )
        expect( timelineMethods.verifyScale( 'month', _now.getTime(), _pass.month, true ) ).to.be.an('object').that.to.eql( timelineMethods.diffDate( _now.getTime(), _pass.month, 'month' ) )
        expect( timelineMethods.verifyScale( 'year', _now.getTime(), _pass.year, true ) ).to.be.an('object').that.to.eql( timelineMethods.diffDate( _now.getTime(), _pass.year, 'year' ) )
        expect( timelineMethods.verifyScale( 'lustrum', _now.getTime(), _pass.lustrum, true ) ).to.be.an('object').that.to.eql( timelineMethods.diffDate( _now.getTime(), _pass.lustrum, 'lustrum' ) )
        expect( timelineMethods.verifyScale( 'decade', _now.getTime(), _pass.decade, true ) ).to.be.an('object').that.to.eql( timelineMethods.diffDate( _now.getTime(), _pass.decade, 'decade' ) )
        expect( timelineMethods.verifyScale( 'century', _now.getTime(), _pass.century, true ) ).to.be.an('object').that.to.eql( timelineMethods.diffDate( _now.getTime(), _pass.century, 'century' ) )
        expect( timelineMethods.verifyScale( 'millennium', _now.getTime(), _pass.millennium, true ) ).to.be.an('object').that.to.eql( timelineMethods.diffDate( _now.getTime(), _pass.millennium, 'millennium' ) )
    })
    
    it ( 'getLocaleString: Retrieve the date string of specified locale', () => {
        let _nowDt = new Date()
        
        expect( timelineMethods.getLocaleString() ).to.be.false
        expect( timelineMethods.getLocaleString( _nowDt ).toString() ).to.be.equal( _nowDt.toString() )
        if ( isGMT ) {
            expect( timelineMethods.getLocaleString( _nowDt.toString() ) ).to.be.equal( _nowDt.toString() )
        } else {
            //expect( timelineMethods.getLocaleString( _nowDt.toString() ) ).to.be.equal( new Date(_nowDt.getTime() + tzo_ms).toString() )
            expect( timelineMethods.getLocaleString( _nowDt.toString() ) ).to.be.equal( new Date(_nowDt.getTime()).toString() )
        }
        expect( timelineMethods.getLocaleString( _nowDt.getTime() ) ).to.be.equal( _nowDt.toString() )
        expect( timelineMethods.getLocaleString( '2019/7/4 16:51:13', '', '', { era: 'narrow' } ) ).to.be.equal( '7 4, 2019 A, 4:51:13 PM' )
        expect( timelineMethods.getLocaleString( '2019/7/4 16:51:13', null, null, { era: 'short' } ) ).to.be.equal( '7 4, 2019 AD, 4:51:13 PM' )
        if ( isBrowser ) {
            expect( timelineMethods.getLocaleString( '2019/7/4 16:51:13', '', 'en-GB', { era: 'short' } ) ).to.be.equal( '4 7 2019 AD, 16:51:13' )
            expect( timelineMethods.getLocaleString( '2019/7/4 16:51:13', '', 'ja-JP-u-ca-japanese', { era: 'long' } ) ).to.be.equal( '令和1年7月4日 16:51:13' )
        } else {
            expect( timelineMethods.getLocaleString( '2019/7/4 16:51:13', '', 'en-GB', { era: 'short' } ) ).to.be.equal( '7 4, 2019 AD, 4:51:13 PM' )
            expect( timelineMethods.getLocaleString( '2019/7/4 16:51:13', '', 'ja-JP-u-ca-japanese', { era: 'long' } ) ).to.be.equal( 'CE 2019 7 4 16:51:13' )
        }
        // millennium
        expect( timelineMethods.getLocaleString( _nowDt, 'millennium', null, { millennium: 'ordinal' } ) ).to.be.equal( '3rd' )
        expect( timelineMethods.getLocaleString( '1974', 'millenniums', '', { millenniums: 'numeric' } ) ).to.be.equal( '2' )
        expect( timelineMethods.getLocaleString( '645', 'millennia', '' ) ).to.be.equal( '1' )
        // century
        expect( timelineMethods.getLocaleString( _nowDt, 'century', null, { century: 'ordinal' } ) ).to.be.equal( '21st' )
        expect( timelineMethods.getLocaleString( '1847', 'century', '', { century: 'numeric' } ) ).to.be.equal( '19' )
        expect( timelineMethods.getLocaleString( '96', 'century' ) ).to.be.equal( '1' )
        // decade
        expect( timelineMethods.getLocaleString( _nowDt, 'decade', null, { decade: 'ordinal' } ) ).to.be.equal( '202nd' )
        expect( timelineMethods.getLocaleString( '1600', 'decennium', '', { decade: 'numeric' } ) ).to.be.equal( '160' )
        expect( timelineMethods.getLocaleString( '11', 'decade' ) ).to.be.equal( '2' )
        // lustrum
        expect( timelineMethods.getLocaleString( _nowDt, 'lustrum', null, { lustrum: 'ordinal' } ) ).to.be.equal( '404th' )
        expect( timelineMethods.getLocaleString( '1601', 'lustrum', '', { lustrum: 'numeric' } ) ).to.be.equal( '321' )
        expect( timelineMethods.getLocaleString( '11', 'lustrum', '' ) ).to.be.equal( '3' )
        // year
        expect( timelineMethods.getLocaleString( _nowDt, 'years' ) ).to.be.equal( _nowDt.getFullYear().toString() )
        expect( timelineMethods.getLocaleString( _nowDt, 'years', null, { years: 'numeric' } ) ).to.be.equal( _nowDt.getFullYear().toString() )
        expect( timelineMethods.getLocaleString( '1985', 'year', '', { year: '2-digit' } ) ).to.be.equal( '85' )
        expect( timelineMethods.getLocaleString( '2014', 'years', '', { years: '2-digit' } ) ).to.be.equal( '14' )
        expect( timelineMethods.getLocaleString( '79', 'year', '', { year: 'zerofill' } ) ).to.be.equal( '0079' )
        expect( timelineMethods.getLocaleString( '123', 'years', '', { years: 'zerofill' } ) ).to.be.equal( '0123' )
        expect( timelineMethods.getLocaleString( '2001', 'years', '', { years: 'zerofill' } ) ).to.be.equal( '2001' )
        if ( isBrowser ) {
            expect( timelineMethods.getLocaleString( '2019/7/4', 'year', 'zh-Hans-CN', { era: 'narrow' } ) ).to.be.equal( '公元2019年7月4日' )
            expect( timelineMethods.getLocaleString( '2019/7/4', 'year', 'zh-Hans-CN', { era: 'narrow', year: '2-digit' } ) ).to.be.equal( '公元19年' )
            expect( timelineMethods.getLocaleString( '2019/7/4', 'year', 'ja-JP', { era: 'long' } ) ).to.be.equal( '西暦2019年7月4日' )
            expect( timelineMethods.getLocaleString( '2019/7/4', 'year', 'ja-JP', { era: 'long', year: 'numeric' } ) ).to.be.equal( '西暦2019年' )
            expect( timelineMethods.getLocaleString( '8/7/6', 'year', 'ja-JP', { era: 'long', year: 'zerofill' } ) ).to.be.equal( '西暦0008年7月6日' )
            expect( timelineMethods.getLocaleString( '2019/7/4', 'year', 'de-DE', { era: 'short' } ) ).to.be.equal( '4. 7 2019 n. Chr.' )
            expect( timelineMethods.getLocaleString( '19/7/4', 'year', 'de-DE', { era: 'short', year: 'zerofill' } ) ).to.be.equal( '4. 7 0019 n. Chr.' )
        } else {
            expect( timelineMethods.getLocaleString( '2019/7/4', 'year', 'zh-Hans-CN', { era: 'narrow' } ) ).to.be.equal( 'CE 2019 7 4' )
            expect( timelineMethods.getLocaleString( '2019/7/4', 'year', 'zh-Hans-CN', { era: 'narrow', year: '2-digit' } ) ).to.be.equal( 'CE 19' )
            expect( timelineMethods.getLocaleString( '2019/7/4', 'year', 'ja-JP', { era: 'long' } ) ).to.be.equal( 'CE 2019 7 4' )
            expect( timelineMethods.getLocaleString( '2019/7/4', 'year', 'ja-JP', { era: 'long', year: 'numeric' } ) ).to.be.equal( 'CE 2019' )
            expect( timelineMethods.getLocaleString( '8/7/6', 'year', 'ja-JP', { era: 'long', year: 'zerofill' } ) ).to.be.equal( 'CE 0008 7 6' )
            expect( timelineMethods.getLocaleString( '2019/7/4', 'year', 'de-DE', { era: 'short' } ) ).to.be.equal( 'CE 2019 7 4' )
            expect( timelineMethods.getLocaleString( '19/7/4', 'year', 'de-DE', { era: 'short', year: 'zerofill' } ) ).to.be.equal( 'CE 0019 7 4' )
        }
        // month
        expect( timelineMethods.getLocaleString( _nowDt, 'month' ) ).to.be.equal( (_nowDt.getMonth() + 1).toString() )
        expect( timelineMethods.getLocaleString( _nowDt, 'month', null, { month: 'numeric' } ) ).to.be.equal( (_nowDt.getMonth() + 1).toString() )
        expect( timelineMethods.getLocaleString( '2019/7', 'month', '', { month: '2-digit' } ) ).to.be.equal( '07' )
        expect( timelineMethods.getLocaleString( '14/3', 'month', '', { month: 'narrow' } ) ).to.be.equal( 'M' )
        expect( timelineMethods.getLocaleString( '1847/4/30', 'month', '', { month: 'short' } ) ).to.be.equal( 'Apr' )
        expect( timelineMethods.getLocaleString( '1847/12/1', 'month', '', { month: 'long' } ) ).to.be.equal( 'December' )
        if ( isBrowser ) {
            expect( timelineMethods.getLocaleString( '123/4', 'month', 'ja-JP', { month: 'narrow' } ) ).to.be.equal( '4月' )
            expect( timelineMethods.getLocaleString( '1974/2/15', 'month', 'zh-Hans-CN', { month: 'short' } ) ).to.be.equal( '2月' )
            expect( timelineMethods.getLocaleString( '2001/8/31', 'month', 'ar-EG', { month: 'short' } ) ).to.be.equal( 'أغسطس' )
            expect( timelineMethods.getLocaleString( '2008/12/26', 'month', 'de-DE', { month: 'short' } ) ).to.be.equal( 'Dez' )
            expect( timelineMethods.getLocaleString( '1974/2/15', 'month', 'zh-Hans-CN', { month: 'long' } ) ).to.be.equal( '二月' )
            expect( timelineMethods.getLocaleString( '2001/5/31', 'month', 'ar-EG', { month: 'long' } ) ).to.be.equal( 'مايو' )
            expect( timelineMethods.getLocaleString( '2008/10/26', 'month', 'de-DE', { month: 'long' } ) ).to.be.equal( 'Oktober' )
            expect( timelineMethods.getLocaleString( '2019/1/1', 'month', 'ja-JP-u-ca-japanese', { era: 'long', year: 'numeric', month: 'long' } ) ).to.be.equal( '平成 (月: 1月)' )
        } else {
            expect( timelineMethods.getLocaleString( '123/4', 'month', 'ja-JP', { month: 'narrow' } ) ).to.be.equal( '4' )
            expect( timelineMethods.getLocaleString( '1974/2/15', 'month', 'zh-Hans-CN', { month: 'short' } ) ).to.be.equal( 'M02' )
            expect( timelineMethods.getLocaleString( '2001/8/31', 'month', 'ar-EG', { month: 'short' } ) ).to.be.equal( 'M08' )
            expect( timelineMethods.getLocaleString( '2008/12/26', 'month', 'de-DE', { month: 'short' } ) ).to.be.equal( 'M12' )
            expect( timelineMethods.getLocaleString( '1974/2/15', 'month', 'zh-Hans-CN', { month: 'long' } ) ).to.be.equal( 'M02' )
            expect( timelineMethods.getLocaleString( '2001/5/31', 'month', 'ar-EG', { month: 'long' } ) ).to.be.equal( 'M05' )
            expect( timelineMethods.getLocaleString( '2008/10/26', 'month', 'de-DE', { month: 'long' } ) ).to.be.equal( 'M10' )
            expect( timelineMethods.getLocaleString( '2019/1/1', 'month', 'ja-JP-u-ca-japanese', { era: 'long', year: 'numeric', month: 'long' } ) ).to.be.equal( 'CE (F3: M01)' )
        }
        // week
        timelineMethods._config = Object.assign( defaultOptions, { firstDayOfWeek: 0 } )
        expect( timelineMethods.getLocaleString( _nowDt, 'week' ) ).to.be.equal( timelineMethods.getWeek( _nowDt ).toString() )
        expect( timelineMethods.getLocaleString( _nowDt, 'weeks', null, { weeks: 'numeric' } ) ).to.be.equal( timelineMethods.getWeek( _nowDt ).toString() )
        expect( timelineMethods.getLocaleString( '2019/7/5', 'week', '', { week: 'ordinal' } ) ).to.be.equal( '27th' )
        expect( timelineMethods.getLocaleString( '14/1', 'week', 'zh-Hans-CN', { week: 'ordinal' } ) ).to.be.equal( '1st' )
        expect( timelineMethods.getLocaleString( '1234,3', 'week', 'ja-JP', { week: 'ordinal' } ) ).to.be.equal( '3rd' )
        expect( timelineMethods.getLocaleString( '1988,5', 'week', 'de-DE', { week: 'narrow' } ) ).to.be.equal( '5' )
        // weekday
        expect( timelineMethods.getLocaleString( _nowDt, 'weekday' ) ).to.be.equal( _nowDt.toLocaleDateString( 'en-US', {weekday: 'narrow'} ) )
        expect( timelineMethods.getLocaleString( _nowDt, 'weekdays', null, { weekdays: 'narrow' } ) ).to.be.equal( _nowDt.toLocaleDateString( 'en-US', {weekday: 'narrow'} ) )
        expect( timelineMethods.getLocaleString( '2019/7/5', 'weekdays', '', { weekdays: 'narrow' } ) ).to.be.equal( 'F' )
        expect( timelineMethods.getLocaleString( '12/3', 'weekdays', '', { weekdays: 'short' } ) ).to.be.equal( 'Thu' )
        expect( timelineMethods.getLocaleString( '12/3', 'weekdays', '', { weekdays: 'long' } ) ).to.be.equal( 'Thursday' )
        if ( isBrowser ) {
            expect( timelineMethods.getLocaleString( '123/4/5', 'weekdays', 'zh-Hans-CN', { weekdays: 'short' } ) ).to.be.equal( '周一' )
            expect( timelineMethods.getLocaleString( '1234/5/6', 'weekdays', 'ja-JP', { weekdays: 'short' } ) ).to.be.equal( '土' )
            expect( timelineMethods.getLocaleString( '2020/8/16,0', 'weekdays', 'de-DE', { weekdays: 'short' } ) ).to.be.equal( 'So' )
            expect( timelineMethods.getLocaleString( '123/4/5', 'weekdays', 'zh-Hans-CN', { weekdays: 'long' } ) ).to.be.equal( '星期一' )
            expect( timelineMethods.getLocaleString( '1234/5/6', 'weekdays', 'ja-JP', { weekdays: 'long' } ) ).to.be.equal( '土曜日' )
            expect( timelineMethods.getLocaleString( '2020/8/16,0', 'weekdays', 'de-DE', { weekdays: 'long' } ) ).to.be.equal( 'Sonntag' )
        } else {
            expect( timelineMethods.getLocaleString( '123/4/5', 'weekdays', 'zh-Hans-CN', { weekdays: 'short' } ) ).to.be.equal( 'Mon' )
            expect( timelineMethods.getLocaleString( '1234/5/6', 'weekdays', 'ja-JP', { weekdays: 'short' } ) ).to.be.equal( 'Sat' )
            expect( timelineMethods.getLocaleString( '2020/8/16,0', 'weekdays', 'de-DE', { weekdays: 'short' } ) ).to.be.equal( 'Sun' )
            expect( timelineMethods.getLocaleString( '123/4/5', 'weekdays', 'zh-Hans-CN', { weekdays: 'long' } ) ).to.be.equal( 'Mon' )
            expect( timelineMethods.getLocaleString( '1234/5/6', 'weekdays', 'ja-JP', { weekdays: 'long' } ) ).to.be.equal( 'Sat' )
            expect( timelineMethods.getLocaleString( '2020/8/16,0', 'weekdays', 'de-DE', { weekdays: 'long' } ) ).to.be.equal( 'Sun' )
        }
        // day
        expect( timelineMethods.getLocaleString( _nowDt, 'day' ) ).to.be.equal( _nowDt.getDate().toString() )
        expect( timelineMethods.getLocaleString( _nowDt, 'days', null, { days: 'numeric' } ) ).to.be.equal( _nowDt.getDate().toString() )
        expect( timelineMethods.getLocaleString( '1/2/3', 'day', '', { day: '2-digit' } ) ).to.be.equal( '03' )
        expect( timelineMethods.getLocaleString( '12/3/4', 'day', '', { day: 'ordinal' } ) ).to.be.equal( '4th' )
        if ( isBrowser ) {
            expect( timelineMethods.getLocaleString( '2020/8/16', 'days', 'ar-EG', { days: 'numeric' } ) ).to.be.equal( '١٦' )
            expect( timelineMethods.getLocaleString( '123/4/5', 'days', 'zh-Hans-CN', { days: '2-digit' } ) ).to.be.equal( '05日' )
        } else {
            expect( timelineMethods.getLocaleString( '2020/8/16', 'days', 'ar-EG', { days: 'numeric' } ) ).to.be.equal( '16' )
            expect( timelineMethods.getLocaleString( '123/4/5', 'days', 'zh-Hans-CN', { days: '2-digit' } ) ).to.be.equal( '05' )
        }
        expect( timelineMethods.getLocaleString( '1234/5/6', 'days', 'ja-JP', { days: 'ordinal' } ) ).to.be.equal( '6th' )
        // hour
        expect( timelineMethods.getLocaleString( _nowDt, 'hour' ) ).to.be.equal( _nowDt.getHours().toString() )
        expect( timelineMethods.getLocaleString( '2019-7-5 1:2', 'hour', '', { hour12: true, hour: 'numeric' } ) ).to.be.equal( '1 AM' )
        if ( isBrowser ) {
            expect( timelineMethods.getLocaleString( '2019/7/5 1:2', 'hours', '', { hour12: true, hours: '2-digit' } ) ).to.be.equal( '01 AM' )
            expect( timelineMethods.getLocaleString( '12/3/4 5:6:7', 'hour', 'zh-Hans-CN', { hour: 'numeric' } ) ).to.be.equal( '上午5时' )
            expect( timelineMethods.getLocaleString( '12/3/4 5:6:7', 'hour', 'zh-Hans-CN', { hour12: true, hour: '2-digit' } ) ).to.be.equal( '上午05时' )
            expect( timelineMethods.getLocaleString( '12/3/4 5:6:7', 'hour', 'de-DE', { hour12: true, hour: '2-digit' } ) ).to.be.equal( '05 Uhr AM' )
            expect( timelineMethods.getLocaleString( '123/4/5 6:7:8', 'hour', 'ja-JP', { hour: 'numeric' } ) ).to.be.equal( '6時' )
            expect( timelineMethods.getLocaleString( '123/4/5 16:7:8', 'hour', 'ja-JP', { hour12: true, hour: '2-digit' } ) ).to.be.equal( '午後04時' )
            expect( timelineMethods.getLocaleString( '123/4/5 16:7:8', 'hour', 'de-DE', { hour12: true, hour: 'numeric' } ) ).to.be.equal( '4 Uhr PM' )
            expect( timelineMethods.getLocaleString( '1234/5/6 7:8:9', 'hour', 'zh-Hans-CN', { hour: 'fulltime' } ) ).to.be.equal( '上午7:08' )
            expect( timelineMethods.getLocaleString( '1234/5/6 7:8:9', 'hour', 'ja-JP', { hour: 'fulltime' } ) ).to.be.equal( '7:08' )
            expect( timelineMethods.getLocaleString( '1234/5/6 7:8:9', 'hour', 'ja-JP', { hour: 'fulltime' } ) ).to.be.equal( '7:08' )
            expect( timelineMethods.getLocaleString( '1234/5/6 7:8:9', 'hour', 'ja-JP', { hour12: true, hour: 'fulltime' } ) ).to.be.equal( '午前7:08' )
        } else {
            expect( timelineMethods.getLocaleString( '2019/7/5 1:2', 'hours', '', { hour12: true, hours: '2-digit' } ) ).to.be.equal( '1 AM' )
            expect( timelineMethods.getLocaleString( '12/3/4 5:6:7', 'hour', 'zh-Hans-CN', { hour: 'numeric' } ) ).to.be.equal( '5' )
            expect( timelineMethods.getLocaleString( '12/3/4 5:6:7', 'hour', 'zh-Hans-CN', { hour12: true, hour: '2-digit' } ) ).to.be.equal( '5 AM' )
            expect( timelineMethods.getLocaleString( '12/3/4 5:6:7', 'hour', 'de-DE', { hour12: true, hour: '2-digit' } ) ).to.be.equal( '5 AM' )
            expect( timelineMethods.getLocaleString( '123/4/5 6:7:8', 'hour', 'ja-JP', { hour: 'numeric' } ) ).to.be.equal( '6' )
            expect( timelineMethods.getLocaleString( '123/4/5 16:7:8', 'hour', 'ja-JP', { hour12: true, hour: '2-digit' } ) ).to.be.equal( '4 PM' )
            expect( timelineMethods.getLocaleString( '123/4/5 16:7:8', 'hour', 'de-DE', { hour12: true, hour: 'numeric' } ) ).to.be.equal( '4 PM' )
            expect( timelineMethods.getLocaleString( '1234/5/6 7:8:9', 'hour', 'zh-Hans-CN', { hour: 'fulltime' } ) ).to.be.equal( '07:08' )
            expect( timelineMethods.getLocaleString( '1234/5/6 7:8:9', 'hour', 'ja-JP', { hour: 'fulltime' } ) ).to.be.equal( '07:08' )
            expect( timelineMethods.getLocaleString( '1234/5/6 7:8:9', 'hour', 'ja-JP', { hour: 'fulltime' } ) ).to.be.equal( '07:08' )
            expect( timelineMethods.getLocaleString( '1234/5/6 7:8:9', 'hour', 'ja-JP', { hour12: true, hour: 'fulltime' } ) ).to.be.equal( '7:08 AM' )
        }
        expect( timelineMethods.getLocaleString( '2019-7-5 1:2', 'hours', null, { hour12: false, hours: 'numeric' } ) ).to.be.equal( '01' )
        expect( timelineMethods.getLocaleString( '2019/7/5 1:2', 'hour', null, { hour12: false, hour: '2-digit' } ) ).to.be.equal( '01' )
        expect( timelineMethods.getLocaleString( '1/2/3 4:5:6', 'hour', '', { hour: 'numeric' } ) ).to.be.equal( '4 AM' )
        expect( timelineMethods.getLocaleString( '1234/5/6 7:8:9', 'hour', '', { hour: 'fulltime' } ) ).to.be.equal( '7:08 AM' )
        expect( timelineMethods.getLocaleString( '1234/5/6 7:8:9', 'hour', '', { hour12: false, hour: 'fulltime' } ) ).to.be.equal( '07:08' )
        expect( timelineMethods.getLocaleString( '1234/5/6 7:8:9', 'hour', 'zh-Hans-CN', { hour12: false, hour: 'fulltime' } ) ).to.be.equal( '07:08' )
        expect( timelineMethods.getLocaleString( '1234/5/6 7:8:9', 'hour', 'de-DE', { hour: 'fulltime' } ) ).to.be.equal( '07:08' )
        expect( timelineMethods.getLocaleString( '1234/5/6 7:8:9', 'hour', 'de-DE', { hour12: true, hour: 'fulltime' } ) ).to.be.equal( '7:08 AM' )
        // half-hour
        expect( timelineMethods.getLocaleString( _nowDt, 'half-hour' ) ).to.be.equal( _nowDt.getHours().toString() )
        if ( isBrowser ) {
            expect( timelineMethods.getLocaleString( '2019/7/5 1:2', 'half-hours', '', { hour12: true, 'half-hours': '2-digit' } ) ).to.be.equal( '01 AM' )
        } else {
            expect( timelineMethods.getLocaleString( '2019/7/5 1:2', 'half-hours', '', { hour12: true, 'half-hours': '2-digit' } ) ).to.be.equal( '1 AM' )
        }
        expect( timelineMethods.getLocaleString( '123/4/5 6:7:8', 'halfhour', '', { halfhour: 'fulltime' } ) ).to.be.equal( '6:07 AM' )
        expect( timelineMethods.getLocaleString( '1234/5/6 7:8:9', 'halfhours', '', { hour12: false, halfhours: 'fulltime' } ) ).to.be.equal( '07:08' )
        // quarter-hour
        expect( timelineMethods.getLocaleString( _nowDt, 'quarter-hour' ) ).to.be.equal( _nowDt.getHours().toString() )
        if ( isBrowser ) {
            expect( timelineMethods.getLocaleString( '2019/7/5 1:2', 'quarter-hours', '', { hour12: true, 'quarter-hours': '2-digit' } ) ).to.be.equal( '01 AM' )
        } else {
            expect( timelineMethods.getLocaleString( '2019/7/5 1:2', 'quarter-hours', '', { hour12: true, 'quarter-hours': '2-digit' } ) ).to.be.equal( '1 AM' )
        }
        expect( timelineMethods.getLocaleString( '123/4/5 6:7:8', 'quarterhour', '', { quarterhour: 'fulltime' } ) ).to.be.equal( '6:07 AM' )
        expect( timelineMethods.getLocaleString( '1234/5/6 7:8:9', 'quarterhours', '', { hour12: false, quarterhours: 'fulltime' } ) ).to.be.equal( '07:08' )
        // minute
        expect( timelineMethods.getLocaleString( _nowDt, 'minute' ) ).to.be.equal( _nowDt.getMinutes().toString() )
        expect( timelineMethods.getLocaleString( '2019/7/5 1:02', 'minutes', '', { minutes: '2-digit' } ) ).to.be.equal( '2' )
        expect( timelineMethods.getLocaleString( '2019-7-5 1:23', 'minutes', null, { minutes: 'numeric' } ) ).to.be.equal( '23' )
        expect( timelineMethods.getLocaleString( '2019/7/5 1:23', 'minute', null, { minute: '2-digit' } ) ).to.be.equal( '23' )
        expect( timelineMethods.getLocaleString( '1/2/3 4:5:6', 'minute', '', { minute: 'numeric' } ) ).to.be.equal( '5' )
        expect( timelineMethods.getLocaleString( '12/3/4 5:6:7', 'minute', 'zh-Hans-CN', { minute: 'numeric' } ) ).to.be.equal( '6' )
        expect( timelineMethods.getLocaleString( '12/3/4 5:6:7', 'minute', 'zh-Hans-CN', { hour12: true, minute: '2-digit' } ) ).to.be.equal( '6' )
        expect( timelineMethods.getLocaleString( '12/3/4 5:6:7', 'minute', 'de-DE', { hour12: true, minute: '2-digit' } ) ).to.be.equal( '6' )
        expect( timelineMethods.getLocaleString( '123/4/5 6:7:8', 'minute', 'ja-JP', { minute: 'numeric' } ) ).to.be.equal( '7' )
        expect( timelineMethods.getLocaleString( '123/4/5 16:7:8', 'minute', 'ja-JP', { hour12: true, minute: '2-digit' } ) ).to.be.equal( '7' )
        expect( timelineMethods.getLocaleString( '123/4/5 16:7:8', 'minute', 'de-DE', { hour12: true, minute: 'numeric' } ) ).to.be.equal( '7' )
        expect( timelineMethods.getLocaleString( '1234/5/6 7:8:9', 'minute', '', { minute: 'fulltime' } ) ).to.be.equal( '7:08 AM' )
        expect( timelineMethods.getLocaleString( '1234/5/6 7:8:9', 'minute', '', { hour12: false, minute: 'fulltime' } ) ).to.be.equal( '07:08' )
        if ( isBrowser ) {
            expect( timelineMethods.getLocaleString( '1234/5/6 7:8:9', 'minute', 'zh-Hans-CN', { minute: 'fulltime' } ) ).to.be.equal( '上午7:08' )
            expect( timelineMethods.getLocaleString( '1234/5/6 7:8:9', 'minute', 'ja-JP', { minute: 'fulltime' } ) ).to.be.equal( '7:08' )
            expect( timelineMethods.getLocaleString( '1234/5/6 7:8:9', 'minute', 'ja-JP', { hour12: true, minute: 'fulltime' } ) ).to.be.equal( '午前7:08' )
        } else {
            expect( timelineMethods.getLocaleString( '1234/5/6 7:8:9', 'minute', 'zh-Hans-CN', { minute: 'fulltime' } ) ).to.be.equal( '07:08' )
            expect( timelineMethods.getLocaleString( '1234/5/6 7:8:9', 'minute', 'ja-JP', { minute: 'fulltime' } ) ).to.be.equal( '07:08' )
            expect( timelineMethods.getLocaleString( '1234/5/6 7:8:9', 'minute', 'ja-JP', { hour12: true, minute: 'fulltime' } ) ).to.be.equal( '7:08 AM' )
        }
        expect( timelineMethods.getLocaleString( '1234/5/6 7:8:9', 'minute', 'zh-Hans-CN', { hour12: false, minute: 'fulltime' } ) ).to.be.equal( '07:08' )
        expect( timelineMethods.getLocaleString( '1234/5/6 7:8:9', 'minute', 'de-DE', { minute: 'fulltime' } ) ).to.be.equal( '07:08' )
        expect( timelineMethods.getLocaleString( '1234/5/6 7:8:9', 'minute', 'de-DE', { hour12: true, minute: 'fulltime' } ) ).to.be.equal( '7:08 AM' )
        // second
        expect( timelineMethods.getLocaleString( _nowDt, 'second' ) ).to.be.equal( _nowDt.getSeconds().toString() )
        expect( timelineMethods.getLocaleString( _nowDt, 'seconds', '', { seconds: 'numeric' } ) ).to.be.equal( _nowDt.getSeconds().toString() )
        expect( timelineMethods.getLocaleString( '2019/7/5 1:02', 'seconds', '', { seconds: '2-digit' } ) ).to.be.equal( '0' )
        expect( timelineMethods.getLocaleString( '2019/7/5 1:23:45', 'second', null, { second: '2-digit' } ) ).to.be.equal( '45' )
        expect( timelineMethods.getLocaleString( '1/2/3 4:5:6', 'second', '', { second: 'numeric' } ) ).to.be.equal( '6' )
        expect( timelineMethods.getLocaleString( '12/3/4 5:6:7', 'second', 'zh-Hans-CN', { second: 'numeric' } ) ).to.be.equal( '7' )
        expect( timelineMethods.getLocaleString( '12/3/4 6:7:8', 'second', 'zh-Hans-CN', { hour12: true, second: '2-digit' } ) ).to.be.equal( '8' )
        expect( timelineMethods.getLocaleString( '12/3/4 8:9:10', 'second', 'de-DE', { hour12: true, second: '2-digit' } ) ).to.be.equal( '10' )
        expect( timelineMethods.getLocaleString( '123/4/5 6:7:8', 'second', 'ja-JP', { second: 'numeric' } ) ).to.be.equal( '8' )
        expect( timelineMethods.getLocaleString( '123/4/5 12:34:56', 'second', 'ja-JP', { hour12: true, second: '2-digit' } ) ).to.be.equal( '56' )
        expect( timelineMethods.getLocaleString( '123/4/5 12:34:60', 'second', 'de-DE', { hour12: true, second: 'numeric' } ) ).to.be.equal( '0' )
        expect( timelineMethods.getLocaleString( '1234/5/6 12:34:56', 'second', '', { second: 'fulltime' } ) ).to.be.equal( '12:34:56 PM' )
        expect( timelineMethods.getLocaleString( '1234/5/6 12:34:56', 'second', '', { hour12: false, second: 'fulltime' } ) ).to.be.equal( '12:34:56' )
        if ( isBrowser ) {
            expect( timelineMethods.getLocaleString( '1234/5/6 23:45:60', 'second', 'zh-Hans-CN', { second: 'fulltime' } ) ).to.be.equal( '下午11:46:00' )
            expect( timelineMethods.getLocaleString( '1234/5/6 7:8:9', 'second', 'ja-JP', { second: 'fulltime' } ) ).to.be.equal( '7:08:09' )
            expect( timelineMethods.getLocaleString( '1234/5/6 8:9:10', 'second', 'ja-JP', { hour12: true, second: 'fulltime' } ) ).to.be.equal( '午前8:09:10' )
            expect( timelineMethods.getLocaleString( '1234/5/6 12:34:56.789', 'second', 'ar-EG', { hour12: true, second: 'fulltime' } ) ).to.be.equal( '١٢:٣٤:٥٦ م' )
        } else {
            expect( timelineMethods.getLocaleString( '1234/5/6 23:45:60', 'second', 'zh-Hans-CN', { second: 'fulltime' } ) ).to.be.equal( '23:46:00' )
            expect( timelineMethods.getLocaleString( '1234/5/6 7:8:9', 'second', 'ja-JP', { second: 'fulltime' } ) ).to.be.equal( '07:08:09' )
            expect( timelineMethods.getLocaleString( '1234/5/6 8:9:10', 'second', 'ja-JP', { hour12: true, second: 'fulltime' } ) ).to.be.equal( '8:09:10 AM' )
            expect( timelineMethods.getLocaleString( '1234/5/6 12:34:56.789', 'second', 'ar-EG', { hour12: true, second: 'fulltime' } ) ).to.be.equal( '12:34:56 PM' )
        }
        expect( timelineMethods.getLocaleString( '1234/5/6 23:45:67', 'second', 'zh-Hans-CN', { hour12: false, second: 'fulltime' } ) ).to.be.equal( '23:46:07' )
        expect( timelineMethods.getLocaleString( '1234/5/6 0:0:0', 'second', 'de-DE', { second: 'fulltime' } ) ).to.be.equal( '00:00:00' )
        // millisecond
        expect( timelineMethods.getLocaleString( _nowDt, 'millisecond' ) ).to.be.equal( _nowDt.getMilliseconds().toString() )
        expect( timelineMethods.getLocaleString( _nowDt, 'milliseconds', '', { milliseconds: 'numeric' } ) ).to.be.equal( _nowDt.getMilliseconds().toString() )
        expect( timelineMethods.getLocaleString( '2019/7/5 12:34:56.078', 'millisec', '', { millisec: 'narrow' } ) ).to.be.equal( '078' )
        // custom
        expect( timelineMethods.getLocaleString( _nowDt, 'custom' ) ).to.be.equal( _nowDt.toString() )
        expect( timelineMethods.getLocaleString( _nowDt, 'custom', null, { custom: '' } ) ).to.be.equal( _nowDt.toString() )
        expect( timelineMethods.getLocaleString( _nowDt, 'custom', '', { custom: '%y \\%Y' } ) ).to.be.equal( `${_nowDt.getFullYear().toString().slice(-2)} %Y` )
        expect( timelineMethods.getLocaleString( '2019/7/5 20:30:45', 'custom', '', { custom: '%Y-%m-%d,%w %Wth %H:%M:%S' } ) ).to.be.equal( '2019-07-05,5 27th 20:30:45' )
        expect( timelineMethods.getLocaleString( '123/4/5 12:34:56', 'custom', '', { custom: '%b %d %a, %y' } ) ).to.be.equal( 'Apr 05 Mon, 23' )
        if ( isBrowser ) {
            expect( timelineMethods.getLocaleString( '1234/5/6', 'custom', 'zh-Hans-CN', { custom: '%B %b %A %a %w' } ) ).to.be.equal( '五月 5月 星期六 周六 6' )
            expect( timelineMethods.getLocaleString( '1470/6/7', 'custom', 'ja-JP', { custom: '%B %b %A %a %w' } ) ).to.be.equal( '6月 6月 火曜日 火 2' )
            expect( timelineMethods.getLocaleString( '1901/7/8', 'custom', 'de-DE', { custom: '%B %b %A %a %w' } ) ).to.be.equal( 'Juli Jul Montag Mo 1' )
            expect( timelineMethods.getLocaleString( '2018/8/9', 'custom', 'ar-EG', { custom: '%B %b %A %a %w' } ) ).to.be.equal( 'أغسطس أغسطس الخميس الخميس 4' )
        } else {
            expect( timelineMethods.getLocaleString( '1234/5/6', 'custom', 'zh-Hans-CN', { custom: '%B %b %A %a %w' } ) ).to.be.equal( 'M05 M05 Sat Sat 6' )
            expect( timelineMethods.getLocaleString( '1470/6/7', 'custom', 'ja-JP', { custom: '%B %b %A %a %w' } ) ).to.be.equal( 'M06 M06 Tue Tue 2' )
            expect( timelineMethods.getLocaleString( '1901/7/8', 'custom', 'de-DE', { custom: '%B %b %A %a %w' } ) ).to.be.equal( 'M07 M07 Mon Mon 1' )
            expect( timelineMethods.getLocaleString( '2018/8/9', 'custom', 'ar-EG', { custom: '%B %b %A %a %w' } ) ).to.be.equal( 'M08 M08 Thu Thu 4' )
        }
        expect( timelineMethods.getLocaleString( '2012/3/4 17:6:7', 'custom', '', { custom: '%I' } ) ).to.be.equal( '5 PM' )
        expect( timelineMethods.getLocaleString( '2012/3/4 17:6:7', 'custom', '', { custom: '%H' } ) ).to.be.equal( '17' )
        expect( timelineMethods.getLocaleString( '1847/1/1 0:00:00', 'custom', '', { custom: '%j' } ) ).to.be.equal( '001' )
        expect( timelineMethods.getLocaleString( '1848/12/31 0:00:00', 'custom', '', { custom: '%j' } ) ).to.be.equal( '366' )
        if ( isBrowser ) {
            expect( timelineMethods.getLocaleString( '79/1/3 7:20', 'custom', 'ja-JP', { custom: '宇宙世紀%Z年%B%d日（%a）第%W週目 %H%M分' } ) ).to.be.equal( '宇宙世紀0079年1月03日（火）第2週目 7時20分' )
        } else {
            expect( timelineMethods.getLocaleString( '79/1/3 7:20', 'custom', 'ja-JP', { custom: '宇宙世紀%Z年%B%d日（%a）第%W週目 %H%M分' } ) ).to.be.equal( '宇宙世紀0079年M0103日（Tue）第2週目 720分' )
        }
        // other
        expect( timelineMethods.getLocaleString( _nowDt, 'other' ) ).to.be.equal( _nowDt.toString() )
        if ( isBrowser ) {
            expect( timelineMethods.getLocaleString( '1998/7/9 1:23:45.678', 'invalid', 'zh-Hans-CN', { hour12: true, era: 'long' } ) ).to.be.equal( '公元1998年7月9日 上午1:23:45' )
            expect( timelineMethods.getLocaleString( '1582/6/14 1:23:45', '', 'ja-JP-u-ca-japanese', { hour12: false, era: 'long' } ) ).to.be.equal( '天正10年6月4日 1:23:45' )
        } else {
            expect( timelineMethods.getLocaleString( '1998/7/9 1:23:45.678', 'invalid', 'zh-Hans-CN', { hour12: true, era: 'long' } ) ).to.be.equal( 'CE 1998 7 9 1:23:45 AM' )
            expect( timelineMethods.getLocaleString( '1582/6/14 1:23:45', '', 'ja-JP-u-ca-japanese', { hour12: false, era: 'long' } ) ).to.be.equal( 'CE 1582 6 14 01:23:45' )
        }
    })
    
    // public methods
    /* Biding to test 1 */
    it ( 'bind timeline with default options:', () => {
        if ( ! isBrowser ) {
            return
        }
        let $el = $('<div id="defaultTimeline"><ul class="timeline-events"></ul></div>'),
            $jqtl = $el.Timeline(),
            timeline = $timeline.Constructor._getInstance( $jqtl[0] )
        
        console.log( 'Opts:', timeline._config )
        console.log( 'Props:', timeline._instanceProps )
        $('#main-content').empty().append( $jqtl ).css('display', 'block')
    })
    /* Biding to test 2 */
    it ( 'bind timeline with custom options:', () => {
        if ( ! isBrowser ) {
            return
        }
        let $el = $('<div id="myTimeline"><ul class="timeline-events"></ul></div>'),
            _beginToday = new Date( new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0 ),
            dateset = {
                // Checke auto range (default range: 3)
                'normal-year': [ 'currently', 'auto', 'year' ], // -> 2019 - 2034 (5 * 3 + 1 = 16 years); Ok
                'normal-month': [ 'currently', 'auto', 'month' ], // -> 2019/7/1 - 2022/7/31 (12 * 3 + 1 = 37 months); Ok
                'normal-week': [ 'currently', 'auto', 'week' ], // -> 2019/7/2 - 2019/10/2 (3 months after); Ok
                'normal-day': [ 'currently', 'auto', 'day' ], // -> 2019/7/2 0:00:00 - 2019/10/2 23:59:59 (3 months after); Ok
                'normal-weekday':  [ 'currently', 'auto', 'weekday' ], // -> Error because invalid scale; Ok
                'normal-hour':  [ 'currently', 'auto', 'hour' ], // -> 2019/7/2 03:00:00 - 2019/7/5 03:59:59 (3 day after); Ok
                'normal-minute':  [ 'currently', 'auto', 'minute' ], // -> 2019/7/2 04:03:00 - 2019/7/2 07:03:59 (3 hours after); Ok
                'normal-second':  [ 'currently', 'auto', 'second' ], // -> 2019/7/2 04:10:24 - 2019/7/2 04:13:24 (3 minutes after); Ok
                // Check DST
                'DSTs':   [ '2019/3/1', '2019/4/1', 'day' ], // -> Ok
                'DSTe':   [ '2019/10/1', '2019/10/31', 'day' ], // -> Ok
                'DSTs-h': [ '2019/3/31 0:00', '2019/3/31 23:59', 'hour' ], // -> Ok
                'DSTe-h': [ '2019/10/27 0:00', '2019/10/27 23:59', 'hour' ], // -> Ok
                // Check scale of half and quater hours
                'halfH':    [ '2019/10/27 0:00', '2019/10/27 23:59', 'half-hour' ], // -> 
                'quarterH': [ '2019/10/27 0:00', '2019/10/27 23:59', 'quarter-hour' ], // -> 
                // Check special timezone offset
                'GMT+0001m': [ '1847/11/30 23:50', '1847/12/1 0:10', 'minute' ], // -> Ok
                'GMT+0001s': [ '1847/11/30 23:59:30', '1847/12/1 0:01:59', 'second' ], // -> Ok
                'leap-second': [ '2016/12/31 23:59:59', '2017/1/1 0:1:1', 'second' ], // -> Ok
                // Check others
                'static-day': [ '2019/6/30', '2019/8/4', 'day', 24 * 2 ],
                'today': [ _beginToday, new Date(_beginToday.getTime() + (24 * 60 * 60 * 1000 - 1)), 'hour', 60 ],
                'period': [ '2019/8/23 9:00', '2019/8/23 18:00', 'hour', 60 * 2 ],
            },
            datesetKey = 'today',
            _begin = dateset[datesetKey].length > 0 ? dateset[datesetKey][0] : 'currently',
            _end   = dateset[datesetKey].length > 1 ? dateset[datesetKey][1] : 'auto',
            _scale = dateset[datesetKey].length > 2 ? dateset[datesetKey][2] : 'day',
            _mings = dateset[datesetKey].length > 3 ? dateset[datesetKey][3] : 44,
            defopts = {
                type: 'mixed',
                startDatetime: _begin,
                endDatetime: _end,
                scale: _scale,
                //rows: 3,
                minGridSize: _mings,
                headline: {
                    locale: 'ja-JP',
                    format: { custom: '%Y年%B%d日 %H%M分' },
                },
                sidebar: {
                    sticky: true,
                    overlay: true,
                    list: [
                        '<span style="margin:0 15px;">Row 1st</span>',
                        '<span style="margin:0 15px;">Row 2nd</span>',
                        '<span style="margin:0 15px;">Row 3rd</span>',
                        '<span style="margin:0 15px;">Row 4th</span>',
                        '<span style="margin:0 15px;">Row 5th</span>',
                        '<span style="margin:0 15px;">Row 6th</span>',
                        '<span style="margin:0 15px;">Row 7th</span>',
                        '<span style="margin:0 15px;">Row 8th</span>',
                        '<span style="margin:0 15px;">Row 9th</span>',
                        '<span style="margin:0 15px;">Row 10th</span>',/* * /
                        '<span style="margin:0 15px;">Row 11th</span>',
                        '<span style="margin:0 15px;">Row 12th</span>',
                        '<span style="margin:0 15px;">Row 13th</span>',
                        '<span style="margin:0 15px;">Row 14th</span>',
                        '<span style="margin:0 15px;">Row 15th</span>',
                        '<span style="margin:0 15px;">Row 16th</span>',
                        '<span style="margin:0 15px;">Row 17th</span>',
                        '<span style="margin:0 15px;">Row 18th</span>',
                        '<span style="margin:0 15px;">Row 19th</span>',
                        '<span style="margin:0 15px;">Row 20th</span>',/ * */
                    ]
                },
                ruler: {
                    truncateLowers : true, // T|F Ok
                    top: {
                        lines: [
                            //'millennia',
                            //'century',
                            //'decade',
                            //'lustrum',
                            'years',
                            'months',
                            //'weeks',
                            'days',
                            'weekdays',
                            'hours',
                            //'half-hour',
                            //'quarter-hour',
                            'minutes',
                            'seconds',
                        ], 
                        format: {
                            //timeZone: 'UTC', // 'Europe/Berlin', // 'Asia/Shanghai',
                            hour12: false,
                            millennium: 'ordinal',
                            century: 'ordinal',
                            decade: 'ordinal',
                            lustrum: 'ordinal',
                            year: 'numeric', // 'numeric', '2-digit' or 'zerofill'
                            month: 'long', // 'numeric', '2-digit', 'narrow', 'short', 'long'
                            week: 'ordinal',
                            day: 'ordinal', // 'numeric', '2-digit' or 'ordinal'
                            weekday: 'long', // 'narrow', 'short', 'long'
                            hour: 'fulltime', // 'numeric', '2-digit' or 'fulltime'
                            minute: '2-digit', // 'numeric', '2-digit' or 'fulltime'
                            second: '2-digit', // 'numeric', '2-digit' or 'fulltime'
                            millisecond: 'narrow',
                            //timeZoneName: 'short', // 'short', 'long'
                        }
                    },
                    bottom: {
                        lines: [ /*
                            'Second',
                            'Minute',
                            //'quarter',
                            //'half',
                            'Hour',
                            'Weekday',
                            'Day',
                            'Week',
                            'Month',
                            'Year',
                            'Lustrum',
                            'Decennium',
                            'Century',
                            'Millenniums', */
                        ], 
                        format: { hour12: false,
                            year: '2-digit',
                            month: 'short',
                            weekday: 'narrow',
                            day: 'ordinal',
                            hour: 'numeric',
                            minute: 'numeric',
                            second: 'numeric',
                        }
                    },
                },
                footer: {
                    range: true,
                    locale: 'ja-JP',
                    format: { custom: '%Y年%B%d日' },
                },
                effects: {
                    presentTime: true, // T|F Ok
                    hoverEvent: false,
                    stripedGridRow: true, // T|F Ok
                    horizontalGridStyle: 'none', // solid|dotted|none Ok
                    verticalGridStyle: 'dotted', // solid|dotted|none Ok
                },
                colorScheme: {
                    event: {
                        text: 'red',
                        border: 'green',
                        background: 'blue',
                    },
                    hookEventColors: ( event, defaults ) => { /* console.log( event ); */ if ( event.eventId == 29 ) { defaults.text = 'white'; }; return defaults; },
                },
                eventData: [
                    { start: '2019/7/7 0:00', end: '2019/7/8 23:59', label: 'Test-1', content: '7/7 0:00 - 7/8 23:59' }, // 1
                    { start: '2019/7/8 12:00', end: '2019/7/13 12:00', row: 2, label: 'Test-2', content: '7/8 12:00 - 7/13 12:00' }, // 2
                    { start: '2019/6/30 10:00', end: '2019/8/2 0:00', row: 3, label: 'Test-3', content: '6/30 10:00 - 8/2 0:00' }, // 3
                    { start: '2019/7/6 18:35', end: '2019/7/7 23:59', row: 4, label: 'Test-4', content: '' }, // 4
                    { start: '2019/7/11 12:00', end: '2019/7/11 12:00', row: 4, label: 'Test-5', content: 'Same datetime', type: 'point', relation:{after:-1} }, // 5
                    { start: '2019/7/7 8:12', end: '2019/7/9 3:51', row: 5, label: 'Test-6', content: '' }, // 6
                    { start: '2019/7/9 0:00', row: 6, label: 'Test-7', content: '', relation:{before:-1,after:5,curve:1} }, // 7
                    { start: '2019/7/9 0:00', end: '2019/7/9 23:59:59', row: 7, label: 'Test-8', content: '', type: 'bar' }, // 8
                    { start: '2019/7/9 0:00', row: 8, label: 'Test-9', content: '', type: 'bar' }, // 9
                    { start: '2019/7/9 0:00', row: 8, label: 'Test-10', content: '', type: 'bar' }, // 10
                    { start: '2019/7/13 12:00', row: 8, label: 'Test-11', type: 'pointer', relation:{after:12,curve:1} }, // 11
                    { start: '2019/7/16 12:00', row: 9, label: 'Test-12', type: 'pointer', relation:{} }, // 12
                    { start: '2019/7/13 0:00', row: 10, label: 'Test-13', type: 'pointer', relation:{before:14,after:12,curve:1} }, // 13
                    { start: '2019/7/12 0:00', row: 9, label: 'Test-14', type: 'pointer', relation:{after:11,curve:1} }, // 14
                    { start: '2019-7-7 4:8:40', end: '2019-7-7 4:21:15', row: 9, label: 'Test-15' }, // 15
                    { start: '2019-7-7 4:10:48.500', end: '2019-7-7 4:10:59.250', row: 10, label: 'Test-16' }, // 16
                    // DSTs
                    { start: '2019/3/31 0:00', end: '2019/3/31 23:59', label: 'DST Start 1', content: '3/31 0:00 - 3/31 23:59' }, // 17
                    { start: '2019/3/30 20:15', end: '2019/3/31 3:45', row: 2, label: 'DST Start 2', content: '3/30 20:15 - 3/31 3:45' }, // 18
                    { start: '2019/3/31 1:00', end: '2019/3/31 2:00', row: 3, label: 'DST Start 3', content: '3/31 1:00 - 3/31 2:00' }, // 19
                    { start: '2019/3/31 1:15', end: '2019/3/31 1:45', row: 4, label: 'DST Start 4', content: '3/31 1:15 - 3/31 1:45' }, // 20
                    { start: '2019/3/31 22:00', end: '2019/4/1 0:30', row: 5, label: 'DST Start 5', content: '3/31 22:00 - 3/31 0:30' }, // 21
                    // DSTe
                    { start: '2019/10/27 0:00', end: '2019/10/27 23:59', label: 'DST End 1', content: '10/27 0:00 - 10/27 23:59' }, // 22
                    { start: '2019/10/26 20:15', end: '2019/10/27 3:45', row: 2, label: 'DST End 2', content: '10/26 20:15 - 10/27 3:45' }, // 23
                    { start: '2019/10/27 1:00', end: '2019/10/27 2:00', row: 3, label: 'DST End 3', content: '10/27 1:00 - 10/27 2:00' }, // 24
                    { start: '2019/10/27 1:15', end: '2019/10/27 1:45', row: 4, label: 'DST End 4', content: '10/27 1:15 - 10/27 1:45' }, // 25
                    { start: '2019/10/27 22:00', end: '2019/10/28 0:30', row: 5, label: 'DST End 5', content: '10/27 22:00 - 10/28 0:30' }, // 26
                    // PR#37
                    { start: '2019-8-23 10:8:40', end: '2019-8-23 11:21:15', row: 1, label: 'Test-27' }, // 27
                    { start: '2019-8-23 10:8:40', end: '2019-8-23 11:21:15', row: 1, label: 'Test-28' }, // 28
                    { start: '2019-8-23 10:8:40', end: '2019-8-23 11:21:15', row: 1, label: 'Test-29' }, // 29
                    // today
                    { start: `${_beginToday.getFullYear()}/${_beginToday.getMonth()+1}/${_beginToday.getDate()} 8:30:00`, end: `${_beginToday.getFullYear()}/${_beginToday.getMonth()+1}/${_beginToday.getDate()} 17:30:00`, row: 1, label: 'Task Sample 1' }, // 30
                    { start: `${_beginToday.getFullYear()}/${_beginToday.getMonth()+1}/${_beginToday.getDate()} 8:30:00`, end: `${_beginToday.getFullYear()}/${_beginToday.getMonth()+1}/${_beginToday.getDate()} 17:30:00`, row: 2, label: 'Task Sample 2', bgColor: 'orange', color: 'green', bdColor: 'blue' }, // 31
                ],
                rangeAlign: 'center',
                zoom: true,
                //debug: true,
            },
            opts2 = {
                ruler: {
                    bottom: {
                        lines: [ 'day' ]
                    }
                },
            }
        
        let $jqtl = $el.Timeline( defopts ),
            timeline = $timeline.Constructor._getInstance( $jqtl[0] ),
            spy = sinon.spy( $timeline.Constructor.prototype, '_calcVars' )
        
        console.log( 'Opts:', timeline._config )
        console.log( 'Props:', timeline._instanceProps )
        //let stub = sinon.stub( timeline, '_calcVars' )
        
        $jqtl.Timeline( 'initialized', ( elem, opts ) => {
            console.log( elem, opts )
            $(elem).Timeline( 'showLoader' )
        })
        
        //assert.ok( spy.called, 'method is called once' )
        $('#main-content').empty().append( $jqtl ).css('display', 'block')
    })
    /* */

})
