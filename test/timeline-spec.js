const expect = chai.expect
const assert = chai.assert
//const stub = sinon.stub

const $timeline = $.fn.Timeline

describe( 'jQuery.Timeline Unit Tests', () => {
    let $el = $('<div id="myTimeline"><ul class="timeline-events"></ul></div>'),
        timelineMethods = $timeline.Constructor.prototype,
        defaultOptions  = $timeline.Constructor.Default
    
    before(() => {
        // let $jqtl = $el.Timeline()
    })
    
    beforeEach(() => {
        //
    })
    
    it ( '_filterScaleKeyName: filter the scale key name for matching the LimitScaleGrids definition', () => {
        let filterScaleKeyName = timelineMethods._filterScaleKeyName,
            LimitScaleKeys = [ 'millennium', 'century', 'decade', 'lustrum', 'year', 'month', 'week', 'day', 'hour', 'quarterHour', 'halfHour', 'minute', 'second' ]
        
        expect( LimitScaleKeys ).to.include( filterScaleKeyName('quarter') )
        expect( LimitScaleKeys ).to.include( filterScaleKeyName('quarter-hour') )
        expect( LimitScaleKeys ).to.include( filterScaleKeyName('quarterhour') )
        expect( LimitScaleKeys ).to.include( filterScaleKeyName('half') )
        expect( LimitScaleKeys ).to.include( filterScaleKeyName('half-hour') )
        expect( LimitScaleKeys ).to.include( filterScaleKeyName('halfhour') )
        expect( LimitScaleKeys ).to.include( filterScaleKeyName('year') )
        expect( LimitScaleKeys ).to.include( filterScaleKeyName('month') )
        expect( LimitScaleKeys ).to.include( filterScaleKeyName('day') )
    })
    
    it ( 'getCorrectDatetime: ', () => {
        let getCorrectDatetime = timelineMethods.getCorrectDatetime
        
        // numeric argument
        expect( getCorrectDatetime(-2340).toUTCString() ).to.be.equal('Wed, 31 Dec 1969 23:59:57 GMT')
        expect( getCorrectDatetime(-1).toUTCString() ).to.be.equal('Wed, 31 Dec 1969 23:59:59 GMT')
        expect( getCorrectDatetime(1).toUTCString() ).to.be.equal('Thu, 01 Jan 1970 00:00:00 GMT')
        expect( getCorrectDatetime(0).toUTCString() ).to.be.equal('Thu, 01 Jan 1970 00:00:00 GMT')
        expect( getCorrectDatetime(1559641760068).toUTCString() ).to.be.equal('Tue, 04 Jun 2019 09:49:20 GMT')
        // string argument
        expect( getCorrectDatetime('-234').toUTCString() ).to.be.equal('Wed, 01 Jan -234 00:01:15 GMT')
        expect( getCorrectDatetime('-1').toUTCString() ).to.be.equal('Fri, 01 Jan -001 00:01:15 GMT')
        expect( getCorrectDatetime('0').toUTCString() ).to.be.equal('Sat, 01 Jan 0000 00:01:15 GMT')
        expect( getCorrectDatetime('1').toUTCString() ).to.be.equal('Mon, 01 Jan 0001 00:01:15 GMT')
        expect( getCorrectDatetime('-234/12').toUTCString() ).to.be.equal('Mon, 01 Dec -234 00:01:15 GMT')
        expect( getCorrectDatetime('-1/5/31').toUTCString() ).to.be.equal('Mon, 31 May -001 00:01:15 GMT')
        expect( getCorrectDatetime('7-1').toDateString() ).to.be.equal('Mon Jan 01 0007')
        expect( getCorrectDatetime('9/2').toDateString() ).to.be.equal('Sun Feb 01 0009')
        expect( getCorrectDatetime('32-5').toDateString() ).to.be.equal('Sat May 01 0032')
        expect( getCorrectDatetime('64/3').toDateString() ).to.be.equal('Sat Mar 01 0064')
        expect( getCorrectDatetime('567/8/9').toDateString() ).to.be.equal('Sun Aug 09 0567')
        expect( getCorrectDatetime('0079/4/30 13:49:57').toUTCString() ).to.be.equal('Sun, 30 Apr 0079 13:51:12 GMT')
        expect( getCorrectDatetime('1974-2-15 3').toUTCString() ).to.be.equal('Fri, 15 Feb 1974 03:00:00 GMT')
        expect( getCorrectDatetime('1998-9-26 4:56').toUTCString() ).to.be.equal('Sat, 26 Sep 1998 03:56:00 GMT')
        expect( getCorrectDatetime('2010-11-9 21:47:36').toUTCString() ).to.be.equal('Tue, 09 Nov 2010 21:47:36 GMT')
        expect( getCorrectDatetime('11223/12/31 12:34:56').toUTCString() ).to.be.equal('Sun, 31 Dec 11223 12:34:56 GMT')
        // invalid datetime
        expect( getCorrectDatetime('1974-13-14').toUTCString() ).to.be.equal('Tue, 14 Jan 1975 00:00:00 GMT')
        expect( getCorrectDatetime('1998/9/32').toUTCString() ).to.be.equal('Thu, 01 Oct 1998 23:00:00 GMT')
        expect( getCorrectDatetime('2010-11-9 25:00').toUTCString() ).to.be.equal('Wed, 10 Nov 2010 01:00:00 GMT')
        expect( getCorrectDatetime('2019/12/31 13:63').toUTCString() ).to.be.equal('Tue, 31 Dec 2019 14:03:00 GMT')
        // string as like date time
        expect( getCorrectDatetime('Wed, 31 Dec 1969 23:59:57 GMT').toUTCString() ).to.be.equal('Wed, 31 Dec 1969 23:59:57 GMT')
        expect( getCorrectDatetime('Sun Mar 31 2019').toUTCString() ).to.be.equal('Sun, 31 Mar 2019 00:00:00 GMT')
        expect( getCorrectDatetime('Sun Oct 27 2019').toUTCString() ).to.be.equal('Sat, 26 Oct 2019 23:00:00 GMT')
        expect( getCorrectDatetime('Wed Jun 28 1993 14:39:07 GMT-0600 (PDT)').toUTCString() ).to.be.equal('Mon, 28 Jun 1993 14:39:07 GMT')
        expect( getCorrectDatetime('12/19/2012, 7:00:00 PM').toUTCString() ).to.be.equal('Wed, 19 Dec 2012 19:00:00 GMT')
        // invalid argument
        expect( getCorrectDatetime('not datetime') ).to.be.null
        expect( getCorrectDatetime() ).to.be.null
        expect( getCorrectDatetime(false) ).to.be.null
        expect( getCorrectDatetime('Donnerstag, 20. Dezember 2012') ).to.be.null
    })
    
    it ( 'diffDate: ', () => {
        let diffDate = timelineMethods.diffDate,
            gCD = timelineMethods.getCorrectDatetime
        
/*
console.log( diffDate(gCD('0'), gCD('50'),'lustrum') )
console.log( diffDate(gCD('9/1'), gCD('106/1'),'lustrum') )
console.log( diffDate(gCD('64/1'), gCD('194/4'),'lustrum') )
console.log( diffDate(gCD('325-6-30'), gCD('415-7-1'),'lustrum') )
console.log( diffDate(gCD('2745/12/1 0:00'), gCD('2998/3/4 23:00'),'lustrum') )
console.log( diffDate(gCD('1998-2-1 0:00'), gCD('2019-3-4 23:00'),'lustrum') )
*/
        expect( diffDate() ).to.be.false
        expect( diffDate('2019/1/1') ).to.be.false
        expect( diffDate('2019/1/1', '2019/12/31') ).to.be.false
        expect( diffDate(new Date('2019/1/1'), new Date('2019/12/31')) ).to.be.a('number')
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
        expect( diffDate(gCD('9/1'), gCD('206/1'),'decade') ).to.be.an('object').that.to.include({1: 1, 11: 10, 21: 6})
        expect( diffDate(gCD('64/1'), gCD('397/4'),'decade') ).to.be.an('object').that.to.include({7: 6, 40: 7})
        expect( diffDate(gCD('325-6-30'), gCD('515-7-1'),'decade') ).to.be.an('object').that.to.include({33: 5, 52: 5})
        expect( diffDate(gCD('2545/12/1 0:00'), gCD('2998/3/4 23:00'),'decade') ).to.be.an('object').that.to.include({255: 5, 300: 8})
        expect( diffDate(gCD('1998-2-1 0:00'), gCD('2019-3-4 23:00'),'decade') ).to.be.an('object').that.to.eql({200: 2, 201: 10, 202: 9})
        // when case "lustrum"
        expect( Object.keys( diffDate(gCD('0'), gCD('50'),'lustrum') ) ).to.have.lengthOf( 10 )
        expect( diffDate(gCD('9/1'), gCD('106/1'),'lustrum') ).to.be.an('object').that.to.include({2: 1, 11: 5, 22: 1})
        expect( diffDate(gCD('64/1'), gCD('194/4'),'lustrum') ).to.be.an('object').that.to.include({13: 1, 39: 4})
        expect( diffDate(gCD('325-6-30'), gCD('415-7-1'),'lustrum') ).to.be.an('object').that.to.include({65: 0, 83: 5})
        expect( diffDate(gCD('2745/12/1 0:00'), gCD('2998/3/4 23:00'),'lustrum') ).to.be.an('object').that.to.include({549: 0, 600: 3})
        expect( diffDate(gCD('1998-2-1 0:00'), gCD('2019-3-4 23:00'),'lustrum') ).to.be.an('object').that.to.eql({400: 2, 401: 5, 402: 5, 403: 5, 404: 4})
        // when case "year"
        expect( diffDate(new Date('2019/1/1'), new Date('2019/12/31'),'year') ).to.be.an('object').that.to.eql({2019: 365})
        expect( diffDate(new Date('2020-1-1'), new Date('2020-12-31'),'year') ).to.be.an('object').that.to.eql({2020: 366})
        expect( diffDate(new Date('169/3/14'), new Date('172/11/3'),'year') ).to.be.an('object').that.to.eql({169: 365, 170: 365, 171: 365, 172: 366})
        // when case "month"
        expect( diffDate(new Date('169/5/14'), new Date('170/3/3'),'month') ).to.be.an('object').that.to.eql({'169/5': 31, '169/6': 30, '169/7': 31, '169/8': 31, '169/9': 30, '169/10': 31, '169/11': 30, '169/12': 31, '170/1': 31, '170/2': 28, '170/3': 31})
        expect( diffDate(new Date('2020/1/1'), new Date('2020/2/31'),'month') ).to.be.an('object').that.to.eql({'2020/1': 31, '2020/2': 29, '2020/3': 31})
        expect( diffDate(new Date('2019-2'), new Date('2019-2'),'month') ).to.be.an('object').that.to.eql({'2019/2': 28})
        // when case "week"
        expect( timelineMethods.diffDate(new Date('2020/1/1'), new Date('2020/2/31'),'week') ).to.be.an('object').that.to.eql({'2020,1': 96,'2020,2': 168,'2020,3': 168,'2020,4': 168,'2020,5': 168,'2020,6': 168,'2020,7': 168,'2020,8': 168,'2020,9': 168,'2020,10': 48})
        expect( timelineMethods.diffDate(new Date('2019-2'), new Date('2019-2'),'week') ).to.be.an('object').that.to.eql({'2019,5': 24})
        // - further with supported on summer time (DST); That must be testing timezone of "GMT Standard Time"
        expect( timelineMethods.diffDate(new Date('2019/3/24'), new Date('2019/11/9'),'week') ).to.be.an('object').that.to.include({'2019,14': 167, '2019,44': 169})
        // when case "day"
        expect( diffDate(new Date('169/12/30'), new Date('170/1/3'),'day') ).to.be.an('object').that.to.eql({'169/12/30': 24, '169/12/31': 24, '170/1/1': 24, '170/1/2': 24, '170/1/3': 24})
        expect( Object.keys( diffDate(new Date('2020-1-29'), new Date('2020-2-31'),'day') ) ).to.have.lengthOf( 34 )
        // - further with supported on summer time (DST); That must be testing timezone of "GMT Standard Time"
        expect( diffDate(new Date('2019/3/24'), new Date('2019/11/9'),'day') ).to.be.an('object').that.to.include({'2019/3/31': 23, '2019/10/27': 25})
        // when case "weekday"
        expect( diffDate(new Date('169/12/30'), new Date('170/1/3'),'weekday') ).to.be.an('object').that.to.eql({'169/12/30': 24, '169/12/31': 24, '170/1/1': 24, '170/1/2': 24, '170/1/3': 24})
        expect( Object.keys( diffDate(new Date('2020-1-29'), new Date('2020-2-31'),'weekday') ) ).to.have.lengthOf( 34 )
        // - further with supported on summer time (DST); That must be testing timezone of "GMT Standard Time"
        expect( diffDate(new Date('2019/3/24'), new Date('2019/11/9'),'weekday') ).to.be.an('object').that.to.include({'2019/3/31': 23, '2019/10/27': 25})
        // when case "hour"
        expect( diffDate(new Date('169/12/31'), new Date('170/1/1'),'hour') ).to.be.an('object').that.to.include({'169/12/31 0': 60, '170/1/1 0': 60})
        expect( diffDate(new Date('2020-1-29 0'), new Date('2020-1-29 12'),'hour') ).to.be.false
        expect( Object.keys( diffDate(new Date('1970/1/1 0:00'), new Date('1970/1/1 23:00'),'hour') ) ).to.have.lengthOf( 24 )
        expect( Object.keys( diffDate(new Date('1970/1/1 0:00'), new Date('1970/1/1 24:00'),'hour') ) ).to.have.lengthOf( 25 )
        expect( diffDate(new Date('1970-1-1 0:00'), new Date('1970-1-1 24:01'),'hour') ).to.be.false
        expect( diffDate(new Date('1998-1-29 5:22'), new Date('1998-1-29 14:08'),'hour') ).to.be.an('object').that.to.eql({'1998/1/29 5': 60, '1998/1/29 6': 60, '1998/1/29 7': 60, '1998/1/29 8': 60, '1998/1/29 9': 60, '1998/1/29 10': 60, '1998/1/29 11': 60, '1998/1/29 12': 60, '1998/1/29 13': 60, '1998/1/29 14': 60})
        // - further with supported on summer time (DST); That must be testing timezone of "GMT Standard Time"
        expect( diffDate(new Date('2019/3/31 0:00'), new Date('2019/3/31 2:00'),'hour') ).to.be.an('object').that.to.eql({'2019/3/31 0': 60, '2019/3/31 2': 60})
        expect( diffDate(new Date('2019/10/27 0:00'), new Date('2019/10/27 2:00'),'hour') ).to.be.an('object').that.to.include({'2019/10/27 1': 120})
        // when case "minute"
        expect( diffDate(new Date('169/12/31 23:50'), new Date('170/1/1 0:10'),'minute') ).to.be.an('object').that.to.include({'169/12/31 23:50': 60, '170/1/1 0:0': 60})
        expect( diffDate(new Date('1970-1-1 0:00'), new Date('1970-1-1 24:01'),'minute') ).to.be.false
        expect( Object.keys( diffDate(new Date('1970/1/1 0:00'), new Date('1970/1/1 9:59'),'minute') ) ).to.have.lengthOf( 600 )
        expect( Object.keys( diffDate(new Date('1998/1/29 5:22'), new Date('1998/1/29 7:08'),'minute') ) ).to.have.lengthOf( 107 )
        // - further with supported on summer time (DST); That must be testing timezone of "GMT Standard Time"
        expect( diffDate(new Date('2019/3/31 0:59'), new Date('2019/3/31 2:00'),'minute') ).to.be.an('object').that.to.eql({'2019/3/31 0:59': 60, '2019/3/31 2:0': 60})
        expect( diffDate(new Date('2019/10/27 0:59'), new Date('2019/10/27 2:00'),'minute') ).to.be.an('object').that.to.include({'2019/10/27 1:59': 3660})
        // when case "second"
        expect( diffDate(new Date('169/12/31 23:59:00'), new Date('170/1/1 0:01:00'),'second') ).to.be.a('object').that.to.include({'169/12/31 23:59:0': 1000, '169/12/31 23:59:59': 1000, '170/1/1 0:0:0': 1000, '170/1/1 0:1:0': 1000})
        expect( Object.keys( diffDate(new Date('1970/1/1 0:00:01'), new Date('1970/1/1 1:00:00'),'second') ) ).to.have.lengthOf( 3600 )
        // - further with supported on leap second
        expect( diffDate(new Date('2015-6-30 23:59:59'), new Date('2015-7-1 0:00:01'),'second') ).to.be.an('object').that.to.eql({'2015/6/30 23:59:59': 1000, '2015/7/1 0:0:0': 1000, '2015/7/1 0:0:1': 1000})
        expect( diffDate(new Date('2016/12/31 23:59:59'), new Date('2017/1/1 00:00:01'),'second') ).to.be.an('object').that.to.eql({'2016/12/31 23:59:59': 1000, '2017/1/1 0:0:0': 1000, '2017/1/1 0:0:1': 1000})
        // - further with supported on summer time (DST); That must be testing timezone of "GMT Standard Time"
        expect( diffDate(new Date('2019/3/31 0:59:59'), new Date('2019/3/31 2:00:00'),'second') ).to.be.an('object').that.to.eql({'2019/3/31 0:59:59': 1000, '2019/3/31 2:0:0': 1000})
        expect( diffDate(new Date('2019/10/27 1:59:58'), new Date('2019/10/27 2:00:01'),'second') ).to.be.a('object').that.to.include({'2019/10/27 1:59:59': 3601000})
        // when case "other"
        expect( diffDate(new Date('1970/1/1 0:00'), new Date('1970/1/1 23:00'),'quarterHour') ).to.be.a('number').that.to.equal( 23 * 60 * 60 * 1000 )
        expect( diffDate(new Date('1970-1-1 0:00'), new Date('1970-1-1 24:00'),'halfHour') ).to.be.a('number').that.to.equal( 24 * 60 * 60 * 1000 )
        expect( diffDate(new Date('2015-6-30 23:59:59'), new Date('2015-7-1 0:00:01'),'millisecond') ).to.equal( 2 * 1000 )
    })
    
    it ( 'getHigherScale: ', () => {
        let getHigherScale = timelineMethods.getHigherScale
        
        expect( getHigherScale( 'millisecond' ) ).to.equal( 'second' )
        expect( getHigherScale( 'milliseconds' ) ).to.equal( 'second' )
        expect( getHigherScale( 'second' ) ).to.equal( 'minute' )
        expect( getHigherScale( 'seconds' ) ).to.equal( 'minute' )
        expect( getHigherScale( 'minute' ) ).to.equal( 'hour' )
        expect( getHigherScale( 'minutes' ) ).to.equal( 'hour' )
        expect( getHigherScale( 'hour' ) ).to.equal( 'day' )
        expect( getHigherScale( 'hours' ) ).to.equal( 'day' )
        expect( getHigherScale( 'half' ) ).to.equal( 'day' )
        expect( getHigherScale( 'halfhour' ) ).to.equal( 'day' )
        expect( getHigherScale( 'half-hour' ) ).to.equal( 'day' )
        expect( getHigherScale( 'quarter' ) ).to.equal( 'day' )
        expect( getHigherScale( 'quarterhour' ) ).to.equal( 'day' )
        expect( getHigherScale( 'quarter-hour' ) ).to.equal( 'day' )
        expect( getHigherScale( 'day' ) ).to.equal( 'week' )
        expect( getHigherScale( 'days' ) ).to.equal( 'week' )
        expect( getHigherScale( 'weekday' ) ).to.equal( 'week' )
        expect( getHigherScale( 'weekdays' ) ).to.equal( 'week' )
        expect( getHigherScale( 'week' ) ).to.equal( 'month' )
        expect( getHigherScale( 'weeks' ) ).to.equal( 'month' )
        expect( getHigherScale( 'month' ) ).to.equal( 'year' )
        expect( getHigherScale( 'months' ) ).to.equal( 'year' )
        expect( getHigherScale( 'year' ) ).to.equal( 'lustrum' )
        expect( getHigherScale( 'years' ) ).to.equal( 'lustrum' )
        expect( getHigherScale( 'lustrum' ) ).to.equal( 'decade' )
        expect( getHigherScale( 'decade' ) ).to.equal( 'century' )
        expect( getHigherScale( 'decennium' ) ).to.equal( 'century' )
        expect( getHigherScale( 'century' ) ).to.equal( 'millennium' )
        expect( getHigherScale( 'millennium' ) ).to.equal( 'millennium' )
        expect( getHigherScale( 'millenniums' ) ).to.equal( 'millennium' )
        expect( getHigherScale( 'millennia' ) ).to.equal( 'millennium' )
    })
    
    // verifyScale
    it ( 'verifyScale: ', () => {
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
*/
        // whether or not valid scale
        expect( timelineMethods.verifyScale() ).to.be.false
        expect( timelineMethods.verifyScale( 'auto' ) ).to.be.false
        expect( timelineMethods.verifyScale( 'millisecond' ) ).to.be.true
        expect( timelineMethods.verifyScale( 'second' ) ).to.be.true
        expect( timelineMethods.verifyScale( 'minute' ) ).to.be.true
        expect( timelineMethods.verifyScale( 'quarter-hour' ) ).to.be.true
        expect( timelineMethods.verifyScale( 'half-hour' ) ).to.be.true
        expect( timelineMethods.verifyScale( 'hour' ) ).to.be.true
        expect( timelineMethods.verifyScale( 'day' ) ).to.be.true
        expect( timelineMethods.verifyScale( 'weekday' ) ).to.be.false
        expect( timelineMethods.verifyScale( 'week' ) ).to.be.true
        expect( timelineMethods.verifyScale( 'month' ) ).to.be.true
        expect( timelineMethods.verifyScale( 'year' ) ).to.be.true
        expect( timelineMethods.verifyScale( 'lustrum' ) ).to.be.true
        expect( timelineMethods.verifyScale( 'decade' ) ).to.be.true
        expect( timelineMethods.verifyScale( 'century' ) ).to.be.true
        expect( timelineMethods.verifyScale( 'millennium' ) ).to.be.true
        // retrieves that values of intervals on the scale
        expect( timelineMethods.verifyScale( 'millisecond', _now.getTime(), _pass.millisecond ) ).to.be.a('number').that.to.equal( 1 )
        expect( timelineMethods.verifyScale( 'millisecond', _now.getTime(), _pass.millisecond, true ) ).to.be.a('number')
        expect( timelineMethods.verifyScale( 'second', _now.getTime(), _pass.second ) ).to.be.a('number').that.to.equal( 1000 )
        expect( timelineMethods.verifyScale( 'second', _now.getTime(), _pass.second, true ) ).to.be.an('object')
        expect( timelineMethods.verifyScale( 'minute', _now.getTime(), _pass.minute ) ).to.be.a('number').that.to.equal( 60 * 1000 )
        expect( timelineMethods.verifyScale( 'minute', _now.getTime(), _pass.minute, true ) ).to.be.an('object')
        expect( timelineMethods.verifyScale( 'quarter-hour', _now.getTime(), _pass.hour ) ).to.be.a('number').that.to.equal( 15 * 60 * 1000 )
        expect( timelineMethods.verifyScale( 'quarter-hour', _now.getTime(), _pass.hour, true ) )
        expect( timelineMethods.verifyScale( 'half-hour', _now.getTime(), _pass.hour ) ).to.be.a('number').that.to.equal( 30 * 60 * 1000 )
        expect( timelineMethods.verifyScale( 'half-hour', _now.getTime(), _pass.hour, true ) )
        expect( timelineMethods.verifyScale( 'hour', _now.getTime(), _pass.hour ) ).to.be.a('number').that.to.equal( 60 * 60 * 1000 )
        expect( timelineMethods.verifyScale( 'hour', _now.getTime(), _pass.hour, true ) ).to.be.an('object')
        expect( timelineMethods.verifyScale( 'day', _now.getTime(), _pass.day ) ).to.be.a('number').that.to.equal( 24 * 60 * 60 * 1000 )
        expect( timelineMethods.verifyScale( 'day', _now.getTime(), _pass.day, true ) ).to.be.an('object').that.to.eql( timelineMethods.diffDate( _now.getTime(), _pass.day, 'day' ) )
        expect( timelineMethods.verifyScale( 'week', _now.getTime(), _pass.week ) ).to.be.a('number').that.to.equal( 7 * 24 * 60 * 60 * 1000 )
        expect( timelineMethods.verifyScale( 'week', _now.getTime(), _pass.week, true ) ).to.be.an('object').that.to.eql( timelineMethods.diffDate( _now.getTime(), _pass.week, 'week' ) )
        expect( timelineMethods.verifyScale( 'month', _now.getTime(), _pass.month ) ).to.be.a('number').that.to.equal( 30.44 * 24 * 60 * 60 * 1000 )
        expect( timelineMethods.verifyScale( 'month', _now.getTime(), _pass.month, true ) ).to.be.an('object').that.to.eql( timelineMethods.diffDate( _now.getTime(), _pass.month, 'month' ) )
        expect( timelineMethods.verifyScale( 'year', _now.getTime(), _pass.year ) ).to.be.a('number').that.to.equal( 365.25 * 24 * 60 * 60 * 1000 )
        expect( timelineMethods.verifyScale( 'year', _now.getTime(), _pass.year, true ) ).to.be.an('object').that.to.eql( timelineMethods.diffDate( _now.getTime(), _pass.year, 'year' ) )
        expect( timelineMethods.verifyScale( 'lustrum', _now.getTime(), _pass.lustrum ) ).to.be.a('number').that.to.equal( 157788000 * 1000 )
        //expect( timelineMethods.verifyScale( 'lustrum', _now.getTime(), _pass.lustrum, true ) ).to.be.an('object')
        expect( timelineMethods.verifyScale( 'decade', _now.getTime(), _pass.decade ) ).to.be.a('number').that.to.equal( 315576000 * 1000 )
        //expect( timelineMethods.verifyScale( 'decade', _now.getTime(), _pass.decade, true ) ).to.be.an('object')
        expect( timelineMethods.verifyScale( 'century', _now.getTime(), _pass.century ) ).to.be.a('number').that.to.equal( 3155760000 * 1000 )
        //expect( timelineMethods.verifyScale( 'century', _now.getTime(), _pass.century, true ) ).to.be.an('object')
        expect( timelineMethods.verifyScale( 'millennium', _now.getTime(), _pass.millennium ) ).to.be.a('number').that.to.equal( 3155760000 * 10 * 1000 )
        //expect( timelineMethods.verifyScale( 'millennium', _now.getTime(), _pass.millennium, true ) ).to.be.an('object')
    })
    
    
    /*
    it ( 'initialized:', () => {
        let $jqtl = $el.Timeline(),
            timeline = $timeline.Constructor._getInstance( $jqtl[0] ),
            spy = sinon.spy( timeline, 'initialized' )
        
        console.log( timeline, timeline._instanceProps )
        //let stub = sinon.stub( timeline, '_calcVars' )
        
        assert.ok( spy.called, 'method is called once' )
    })
    */

})
