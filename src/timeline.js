//import '@babel/polyfill'

/*!
 * jQuery Timeline
 * ------------------------
 * Version: 2.0.0a1
 * Author: Ka2 (https://ka2.org/)
 * Repository: https://github.com/ka215/jquery.timeline/tree/develop
 * Lisenced: MIT
 */

/*
 * Constants
 */
const NAME               = "Timeline"
const VERSION            = "2.0.0a1"
const DATA_KEY           = "jq.timeline"
const EVENT_KEY          = `.${DATA_KEY}`
const PREFIX             = "jqtl-"
const LOADING_MESSAGE    = "Loading..."
const MIN_POINTER_SIZE   = 12

//const DATA_API_KEY       = ".data-api"
const JQUERY_NO_CONFLICT = $.fn[NAME]

/*
 * Defaults of plugin options
 */
const Default = {
    type            : "bar", // View type of timeline event is either "bar" or "point"
    scale           : "day", // Timetable's minimum level scale is either "year", "month", "week", "day", "hour", "minute"; Enhanced since v2.0.0
    startDatetime   : "currently", // Beginning date time of timetable on the timeline. format is ( "^d{4}(/|-)d{2}(/|-)d{2}\sd{2}:d{2}:d{2}$" ) or "currently"
    endDatetime     : "auto", // Ending date time of timetable on the timeline. format is ( "^d{4}(/|-)d{2}(/|-)d{2}\sd{2}:d{2}:d{2}$" ) or "auto"; Added new since v2.0.0
    datetimePrefix  : "", // The prefix of the date and time notation displayed in the headline
    // showHeadline : true, // --> Deprecated since v2.0.0
    headline        : { // Content in the headline; Added new since v2.0.0
        display     : true, // Whether to display headline is instead of former showHeadline
        title       : "",
        range       : true, // Hide if false
        locale      : "en-US", // This value is an argument "locales" of `dateObj.toLocaleString([locales[, options]])`
        format      : { hour12: false } // This value is an argument "options" of `dateObj.toLocaleString([locales[, options]])`
    },
    footer          : { // Content in the footer; Added new since v2.0.0
        display     : true, // Whether to display footer
        content     : "",
        range       : false, // Visible if true
        locale      : "en-US", // This value is an argument "locales" of `dateObj.toLocaleString([locales[, options]])`
        format      : { hour12: false } // This value is an argument "options" of `dateObj.toLocaleString([locales[, options]])`
    },
    /* datetimeFormat  : { // --> Deprecated since v2.0.0
        full        : "j M Y", // or "Y/m/d" etc.
        year        : "Y",
        month       : "M Y", // or "F" etc.
        day         : "D, j M", // or "j" etc.
        years       : "Y", 
        months      : "F", 
        days        : "j",
        meta        : "Y/m/d H:i", // start datetime in meta of Event Detail; or "g:i A, D F j, Y"
        metato      : "" // --> Deprecated since v2.0.0
    }, */
    // minuteInterval : 30, // --> Deprecated since v2.0.0
    zerofillYear    : false, // It's outputted at the "0099" if true, the "99" if false
    range           : 3, // Override the scale range of the timeline to be rendered when endDatetime is undefined or "auto"; Enhanced since v2.0.0
    sidebar         : { // Settings of sidebar; Added new since v2.0.0
        sticky      : false,
        overlay     : false,
        list        : [],
    },
    rows            : "auto", // Rows of timeline event area. defaults to "auto"; Enhanced since v2.0.0
    rowHeight       : 48, // Height of one row
    width           : "auto", // Fixed width (pixel) of timeline view. defaults to "auto"; Added new since v2.0.0
    height          : "auto", // Fixed height (pixel) of timeline view. defaults to "auto" ( rows * rowHeight )
    // minGridPer   : 2, // --> Deprecated since v2.0.0
    minGridSize     : 30, // Override value of minimum size (pixel) of timeline grid; Enhanced since v2.0.0
    marginHeight    : 2, // Margin (pixel) top and bottom of events on the timeline; Added new since v2.0.0
    ruler           : { // Settings of ruler; Added new since v2.0.0
        top         : { // Can define the ruler position to top or bottom and both
            lines      : [], // defaults to this.option.scale; c.g. [ 'year', 'month', 'day', 'weekday' ]
            height     : 30,
            fontSize   : 14,
            color      : "#777777",
            background : "#FFFFFF",
            locale     : "en-US", // This value is an argument "locales" of `dateObj.toLocaleString([locales[, options]])`
            format     : { hour12: false } // This value is an argument "options" of `dateObj.toLocaleString([locales[, options]])`
        },
    },
    rangeAlign      : "current", // Possible values are "left", "center", "right", "current", "latest" and specific event id
    naviIcon        : { // Define class name
        left        : `${PREFIX}circle-left`,
        right       : `${PREFIX}circle-right`
    },
    loader          : "default", // Custom loader definition, possible values are "default", false and selector of loader element; Added new since v2.0.0
    hideScrollbar   : false, // Whether or not to display the scroll bar displayed when the width of the timeline overflows (even if it is set to non-display, it will not function depending on the browser); Added new since v2.0.0
    eventMeta       : { // Display meta of range on event node when the timeline type is "bar"; Added new since v2.0.0
        display     : false,
        scale       : "day",
        locale      : "en-US", // This value is an argument "locales" of `dateObj.toLocaleString([locales[, options]])`
        format      : { hour12: false }, // This value is an argument "options" of `dateObj.toLocaleString([locales[, options]])`
        content     : "" // This is value for if you want to show custom content on the meta
    },
    showPointer     : true,
    // i18n         : {}, // --> Deprecated since v1.0.6
    // langsDir     : "./langs/", // --> Deprecated since v1.0.6
    // httpLanguage : false, // --> Deprecated since v1.0.6
    // duration     : 150, // duration of animate as each transition effects; Added v1.0.6 --> Deprecated since v2.0.0
    debug           : false,
}

/*
 * Define the limited grid number per scale of timeline
 */
const LimitScaleGrids = {
    millennium  : 100,          // = 100 : 100000 years
    century     : 100 * 5,      // = 500 : 50000 years
    decade      : 10 * 50,      // = 500 : 5000 years
    lustrum     : 5 * 100,      // = 500 : 2500 years
    year        : 500,          // = 500 : 500 years
    month       : 12 * 45,      // = 540 : 45 years
    week        : 53 * 10,      // = 530 : 10 years
    day         : 366,          // = 366 : 1 year
    hour        : 24 * 30,      // = 720 : 30 days
    quarterHour : 24 * 4 * 7.5, // = 720 : 7.5 days
    halfHour    : 24 * 2 * 15,  // = 720 : 15 days
    minute      : 60 * 12,      // = 720 : 12 hours
    second      : 60 * 15       // = 900 : 15 minutes
}

/*
const DefaultType = {
    
}
*/

/*
 * Defaults of event parameters on timeline
 */
const EventParams = {
    uid       : '',
    eventId   : '',
    x         : 0,
    y         : Default.marginHeight,
    width     : Default.minGridSize,
    height    : Default.rowHeight - Default.marginHeight * 2,
    bgColor   : '#E7E7E7', // background color
    color     : '#343A40', // text color
    bdColor   : '#6C757D', // border color
    label     : '',
    content   : '',
    image     : '',
    margin    : Default.marginHeight,
    rangeMeta : '',
    size      : 'normal', // diameter of pointer
    extend    : {},
    callback() {},
    relation  : { /*
        before    : 
        after     : 
        linesize  : 
        linecolor : 
        curve     : 
    */ },
}

const Event = {
    INITIALIZED        : `initialized${EVENT_KEY}`,
    HIDE               : `hide${EVENT_KEY}`,
    SHOW               : `show${EVENT_KEY}`,
    CLICK_EVENT        : `click.open${EVENT_KEY}`,
    FOCUSIN_EVENT      : `focusin.event${EVENT_KEY}`,
    FOCUSOUT_EVENT     : `focusout.event${EVENT_KEY}`,
    MOUSEENTER_POINTER : `mouseenter.pointer${EVENT_KEY}`,
    MOUSELEAVE_POINTER : `mouseleave.pointer${EVENT_KEY}`,
}

const ClassName = {
    TIMELINE_CONTAINER         : `${PREFIX}container`,
    TIMELINE_MAIN              : `${PREFIX}main`,
    TIMELINE_HEADLINE          : `${PREFIX}headline`,
    TIMELINE_HEADLINE_WRAPPER  : `${PREFIX}headline-wrapper`,
    HEADLINE_TITLE             : `${PREFIX}timeline-title`,
    RANGE_META                 : `${PREFIX}range-meta`,
    RANGE_SPAN                 : `${PREFIX}range-span`,
    TIMELINE_EVENT_CONTAINER   : `${PREFIX}event-container`,
    TIMELINE_BACKGROUND_GRID   : `${PREFIX}bg-grid`,
    TIMELINE_RELATION_LINES    : `${PREFIX}relation-lines`,
    TIMELINE_EVENTS            : `${PREFIX}events`,
    TIMELINE_EVENT_NODE        : `${PREFIX}event-node`,
    TIMELINE_EVENT_LABEL       : `${PREFIX}event-label`,
    TIMELINE_EVENT_THUMBNAIL   : `${PREFIX}event-thumbnail`,
    TIMELINE_RULER_LINES       : `${PREFIX}ruler-line-rows`,
    TIMELINE_RULER_ITEM        : `${PREFIX}ruler-line-item`,
    TIMELINE_SIDEBAR           : `${PREFIX}side-index`,
    TIMELINE_SIDEBAR_MARGIN    : `${PREFIX}side-index-margin`,
    TIMELINE_SIDEBAR_ITEM      : `${PREFIX}side-index-item`,
    TIMELINE_FOOTER            : `${PREFIX}footer`,
    TIMELINE_FOOTER_CONTENT    : `${PREFIX}footer-content`,
    VIEWER_EVENT_TITLE         : `${PREFIX}event-title`,
    VIEWER_EVENT_CONTENT       : `${PREFIX}event-content`,
    VIEWER_EVENT_META          : `${PREFIX}event-meta`,
    VIEWER_EVENT_IMAGE_WRAPPER : `${PREFIX}event-image-wrapper`,
    VIEWER_EVENT_IMAGE         : `${PREFIX}event-image`,
    VIEWER_EVENT_TYPE_POINTER  : `${PREFIX}event-type-pointer`,
    HIDE_SCROLLBAR             : `${PREFIX}hide-scrollbar`,
    HIDE                       : `${PREFIX}hide`,
    RULER_ITEM_ALIGN_LEFT      : `${PREFIX}rli-left`,
    STICKY_LEFT                : `${PREFIX}sticky-left`,
    OVERLAY                    : `${PREFIX}overlay`,
    ALIGN_SELF_RIGHT           : `${PREFIX}align-self-right`,
    LOADER_ITEM                : `${PREFIX}loading`
}

const Selector = {
    EVENT_NODE                : `.${PREFIX}event-node`,
    EVENT_VIEW                : `.timeline-event-view, .${PREFIX}event-view`,
    RULER_TOP                 : `.${PREFIX}ruler-top`,
    RULER_BOTTOM              : `.${PREFIX}ruler-bottom`,
    TIMELINE_CONTAINER        : `.${ClassName.TIMELINE_CONTAINER}`,
    TIMELINE_RULER_TOP        : `.${PREFIX}ruler-top`,
    TIMELINE_RULER_BOTTOM     : `.${PREFIX}ruler-bottom`,
    TIMELINE_RELATION_LINES   : `.${ClassName.TIMELINE_RELATION_LINES}`,
    TIMELINE_EVENTS           : `.${ClassName.TIMELINE_EVENTS}`,
    TIMELINE_SIDEBAR_ITEM     : `.${ClassName.TIMELINE_SIDEBAR_ITEM}`,
    TIMELINE_EVENT_NODE       : `.${ClassName.TIMELINE_EVENT_NODE}`,
    VIEWER_EVENT_TYPE_POINTER : `.${ClassName.VIEWER_EVENT_TYPE_POINTER}`,
    LOADER                    : `#${PREFIX}loader`,
    DEFAULT_EVENTS            : ".timeline-events"
}

/*
 * The plugin core class of the jQuery Timeline as controller
 */
class Timeline {
    constructor( element, config ) {
        this._config        = this._getConfig( config )
        this._element       = element
        this._selector      = null
        this._isInitialized = false
        this._isCached      = false
        this._isCompleted   = false
        this._isShown       = false
        this._instanceProps = {}
    }
    
    // Getters
    
    static get VERSION() {
        return VERSION
    }
    
    static get Default() {
        return Default
    }
    
    // Private
    
    /*
     * @private: Define the default options of this plugin
     */
    _getConfig( config ) {
        config = {
            ...Default,
            ...config
        }
        return config;
    }
    
    /*
     * @private: Filter the scale key name for LimitScaleGrids
     */
    _filterScaleKeyName( key ) {
        let filteredKey = null
        
        switch( true ) {
            case /^quarter-?(|hour)$/i.test( key ):
                filteredKey = 'quarterHour'
                break
            case /^half-?(|hour)$/i.test( key ):
                filteredKey = 'halfHour'
                break
            default:
                filteredKey = key
        }
        return filteredKey
    }
    
    /*
     * @private: Initialize the plugin
     */
    _init() {
        this._debug( '_init' )
        
        let _elem       = this._element,
            _selector   = `${_elem.tagName}${( _elem.id ? `#${_elem.id}` : '' )}${( _elem.className ? `.${_elem.className.replace(/\s/g, '.')}` : '' )}`
        
        this._selector = _selector.toLowerCase()
        
        if ( this._isInitialized || this._isCompleted ) {
            return
        }
        
        this._calcVars()
        
        if ( ! this._verifyMaxRenderableRange() ) {
            throw new RangeError( `Timeline display period exceeds maximum renderable range.` )
        }
        
        if ( ! this._isInitialized ) {
            
            this._renderView()
            
            const afterInitEvent = $.Event( Event.INITIALIZED, { _elem } )
            
            $(_elem).trigger( afterInitEvent )
            
            $(_elem).off( Event.INITIALIZED )
        }
        
        if ( ! this._isCached ) {
            this._loadEvent()
        }
        
        if ( this._isCached ) {
            this._placeEvent()
        }
        
        // Assign events for the timeline
        $(document).on(
            Event.CLICK_EVENT,
            `${this._selector} ${Selector.EVENT_NODE}`,
            ( event ) => this.openEvent( event )
        )
        $(_elem).on(
            Event.FOCUSIN_EVENT,
            Selector.TIMELINE_EVENT_NODE,
            ( event ) => this._activeEvent( event )
        )
        $(_elem).on(
            Event.FOCUSOUT_EVENT,
            Selector.TIMELINE_EVENT_NODE,
            ( event ) => this._activeEvent( event )
        )
        
//console.log( '!_init:', )
        if ( /^point(|er)$/i.test( this._config.type ) ) {
            $(_elem).on(
                Event.MOUSEENTER_POINTER,
                Selector.VIEWER_EVENT_TYPE_POINTER,
                ( event ) => this._hoverPointer( event )
            )
            $(_elem).on(
                Event.MOUSELEAVE_POINTER,
                Selector.VIEWER_EVENT_TYPE_POINTER,
                ( event ) => this._hoverPointer( event )
            )
        }
        
        this._isCompleted = true
    }
    
    /*
     * @private: Calculate each properties of the timeline instance
     */
    _calcVars() {
        let _opts  = this._config,
            _props = {}
        
        _props.begin      = this.supplement( null, this._getPluggableDatetime( _opts.startDatetime, 'first' ) )
        _props.end        = this.supplement( null, this._getPluggableDatetime( _opts.endDatetime, 'last' ) )
        _props.scaleSize  = this.supplement( null, _opts.minGridSize, this.validateNumeric )
        _props.rows       = this._getPluggableRows()
        _props.rowSize    = this.supplement( null, _opts.rowHeight, this.validateNumeric )
        _props.width      = this.supplement( null, _opts.width, this.validateNumeric )
        _props.height     = this.supplement( null, _opts.height, this.validateNumeric )
        
        this._instanceProps = _props // pre-cache
        
        if ( /^(year|month)s?$/i.test( _opts.scale ) ) {
            // For scales where the value of quantity per unit is variable length (:> 単位あたりの量の値が可変長であるスケールの場合
            let _temp            = this._verifyScale( _opts.scale ),
                _values          = Object.values( _temp ),
                _averageDays     = this.numRound( _values.reduce( ( a, v ) => a + v, 0 ) / _values.length, 4 ), // Average days within the range
                _baseDaysOfScale = /^years?$/i.test( _opts.scale ) ? 365 : 30,
                _totalWidth      = 0
            
//console.log( '!', _opts.scale, _temp, _vals )
            _values.forEach( ( days ) => {
                _totalWidth += this.numRound( ( days * _props.scaleSize ) / _baseDaysOfScale, 2 )
            })
            
            _props.scale         = _averageDays * ( 24 * 60 * 60 * 1000 )
            _props.grids         = _values.length
            _props.variableScale = _temp
            _props.fullwidth     = _totalWidth
        } else {
            // In case of fixed length scale (:> 固定長スケールの場合
            _props.scale         = this._verifyScale( _opts.scale )
            _props.grids         = Math.ceil( ( _props.end - _props.begin ) / _props.scale )
            _props.variableScale = null
            _props.fullwidth     = _props.grids * _props.scaleSize
        }
        _props.fullheight = _props.rows * _props.rowSize
        // Define visible size according to full size of timeline (:> タイムラインのフルサイズに準じた可視サイズを定義
        _props.visibleWidth  = _props.width > 0  ? `${( _props.width <= _props.fullwidth ? _props.width : _props.fullwidth )}px` : '100%'
        _props.visibleHeight = _props.height > 0 ? `${( _props.height <= _props.fullheight ? _props.height : _props.fullheight )}px` : 'auto'
        
        for ( let _prop in _props ) {
            if ( _prop === 'width' || _prop === 'height' || _prop === 'variableScale' ) {
                continue
            }
            if ( this.is_empty( _props[_prop] ) ) {
                throw new TypeError( `Property "${_prop}" cannot set because undefined or invalid variable.` )
            }
        }
        
        if ( _props.fullwidth < 2 || _props.fullheight < 2 ) {
            throw new TypeError( `The range of the timeline to be rendered is incorrect.` )
        }
        
        this._instanceProps = _props
    }
    
    /*
     * @private: Retrieve the pluggable datetime as milliseconds from specified keyword (:> 指定キーから作成されたプラガブルな日時をミリ秒単位で取得する
     */
    _getPluggableDatetime( key, round_type = '' ) {
        let _opts        = this._config,
            _date        = null,
            getFirstDate = ( dateObj, scale ) => {
                switch ( true ) {
                    case /^millenniums?|millennia$/i.test( scale ):
                    case /^century$/i.test( scale ):
                    case /^dec(ade|ennium)$/i.test( scale ):
                    case /^lustrum$/i.test( scale ):
                    case /^years?$/i.test( scale ):
                        return new Date( dateObj.getFullYear(), 0, 1 )
                    case /^months?$/i.test( scale ):
                        return new Date( dateObj.getFullYear(), dateObj.getMonth(), 1 )
                    case /^(week|day)s?$/i.test( scale ):
                        return new Date( dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate() )
                    case /^(|half|quarter)-?hours?$/i.test( scale ):
                        return new Date( dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(), dateObj.getHours() )
                    case /^minutes?$/i.test( scale ):
                        return new Date( dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(), dateObj.getHours(), dateObj.getMinutes() )
                    case /^seconds?$/i.test( scale ):
                        return new Date( dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(), dateObj.getHours(), dateObj.getMinutes(), dateObj.getSeconds() )
                }
            },
            getLastDate  = ( dateObj, scale ) => {
                let _tmpDate
                
                switch ( true ) {
                    case /^millenniums?|millennia$/i.test( scale ):
                    case /^century$/i.test( scale ):
                    case /^dec(ade|ennium)$/i.test( scale ):
                    case /^lustrum$/i.test( scale ):
                    case /^years?$/i.test( scale ):
                        _tmpDate = new Date( dateObj.getFullYear() + 1, 0, 1 )
                        break
                    case /^months?$/i.test( scale ):
                        _tmpDate = new Date( dateObj.getFullYear(), dateObj.getMonth() + 1, 1 )
                        break
                    case /^(week|day)s?$/i.test( scale ):
                        _tmpDate = new Date( dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate() + 1 )
                        break
                    case /^(|half|quarter)-?hours?$/i.test( scale ):
                        _tmpDate = new Date( dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(), dateObj.getHours() + 1 )
                        break
                    case /^minutes?$/i.test( scale ):
                        _tmpDate = new Date( dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(), dateObj.getHours(), dateObj.getMinutes() + 1 )
                        break
                    case /^seconds?$/i.test( scale ):
                        _tmpDate = new Date( dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(), dateObj.getHours(), dateObj.getMinutes(), dateObj.getSeconds() + 1 )
                        break
                }
                return new Date( _tmpDate.getTime() - 1 )
            }
        
        switch ( true ) {
            case /^current(|ly)$/i.test( key ):
                _date = new Date()
//console.log( '!_getPluggableDatetime::currently:', _opts.scale, this.getHigherScale( _opts.scale ), key, _date.getTime() )
                break
            case /^auto$/i.test( key ): {
                let _ms          = null,
                    _higherScale = this.getHigherScale( _opts.scale )
                
                if ( /^current(|ly)$/i.test( _opts.startDatetime ) ) {
                    _date = new Date()
                    //if ( /^(year|month)s?$/i.test( _opts.scale ) ) {
                        _date = getFirstDate( _date, _opts.scale )
                    //}
                } else {
                    _date = this.getCorrectDatetime( _opts.startDatetime )
                }
                
                if ( _opts.range || _opts.range > 0 ) {
                    if ( /^years?$/i.test( _higherScale ) ) {
                        _ms = 365.25 * 24 * 60 * 60 * 1000
                    } else
                    if ( /^months?$/i.test( _higherScale ) ) {
                        _ms = 30.44 * 24 * 60 * 60 * 1000
                    } else {
                        _ms = this._verifyScale( _higherScale )
                    }
                    _date.setTime( _date.getTime() + ( _ms * _opts.range ) )
                } else {
                    if ( /^years?$/i.test( _opts.scale ) ) {
                        _ms = 365.25 * 24 * 60 * 60 * 1000
                    } else
                    if ( /^months?$/i.test( _opts.scale ) ) {
                        _ms = 30.44 * 24 * 60 * 60 * 1000
                    } else {
                        _ms = this._verifyScale( _opts.scale )
                    }
                    _date.setTime( _date.getTime() + ( _ms * LimitScaleGrids[this._filterScaleKeyName( _opts.scale )] ) )
                }
// console.log( '!_getPluggableDatetime::auto:', _opts.scale, this.getHigherScale( _opts.scale ), key, _date.getTime() )
                break
            }
            default:
                _date = this.getCorrectDatetime( key )
                break
        }
        //if ( ! this.is_empty( round_type ) && /^(year|month|day)s?$/i.test( _opts.scale ) ) {
        if ( ! this.is_empty( round_type ) ) {
            if ( 'first' === round_type ) {
                _date = getFirstDate( _date, _opts.scale )
            } else
            if ( 'last' === round_type ) {
                _date = getLastDate( _date, _opts.scale )
            }
        }
        
        return _date.getTime()
    }
    
    /*
     * @private: Retrieve the pluggable parameter as an object (:> プラガブルなパラメータオブジェクトを取得する
     */
    _getPluggableParams( str_like_params ) {
        let params = {}
        
        if ( typeof str_like_params === 'string' && str_like_params ) {
            try {
                params = JSON.parse( JSON.stringify( ( new Function( `return ${str_like_params}` ) )() ) )
                if ( params.hasOwnProperty( 'extend' ) ) {
                    params.extend = JSON.parse( JSON.stringify( ( new Function( `return ${params.extend}` ) )() ) )
                }
            } catch( e ) {
                console.warn( 'Can not parse to object therefor invalid param.' )
            }
        }
        return params
    }
    
    /*
     * @private: Retrieve the pluggable rows of the timeline (:> プラガブルなタイムラインの行数を取得する
     */
    _getPluggableRows() {
        let _opts      = this._config,
            fixed_rows = this.supplement( 'auto', _opts.rows, this.validateNumeric )
        
        if ( fixed_rows === 'auto' ) {
            fixed_rows = _opts.sidebar.list.length
        }
        return fixed_rows > 0 ? fixed_rows : 1
    }
    
    /*
     * @private: Verify the allowed scale, then retrieve that scale's millisecond if allowed (:> 許容スケールかを確認し、許可時はそのスケールのミリ秒を取得する
     */
    _verifyScale( scale ) {
        let _opts  = this._config,
            _props = this._instanceProps,
            _ms    = -1
        
        if ( typeof scale === 'undefined' || typeof scale !== 'string' ) {
            return false
        }
        switch ( true ) {
            case /^millisec(|ond)s?$/i.test( scale ):
                // Millisecond (:> ミリ秒
                _ms = 1
                break
            case /^seconds?$/i.test( scale ):
                // Second (:> 秒
                _ms = 1000
                break
            case /^minutes?$/i.test( scale ):
                // Minute (:> 分
                _ms = 60 * 1000
                break
            case /^quarter-?(|hour)$/i.test( scale ):
                // Quarter of an hour (:> 15分
                _ms = 15 * 60 * 1000
                break
            case /^half-?(|hour)$/i.test( scale ):
                // Half an hour (:> 30分
                _ms = 30 * 60 * 1000
                break
            case /^hours?$/i.test( scale ):
                // Hour (:> 時（時間）
                _ms = 60 * 60 * 1000
                break
            case /^days?$/i.test( scale ):
                // Day (:> 日
                _ms = 24 * 60 * 60 * 1000
                break
            case /^weeks?$/i.test( scale ):
                // Week (:> 週
                _ms = 7 * 24 * 60 * 60 * 1000
                break
            case /^months?$/i.test( scale ):
                // Month (is the variable length scale) (:> 月（可変長スケール）
//console.log( '!_verifyScale::month:', this._instanceProps, _opts.scale )
                if ( /^(year|month)s?$/i.test( _opts.scale ) ) {
                    return this._diffDate( _props.begin, _props.end, scale )
                } else {
                    _ms = 30.44 * 24 * 60 * 60 * 1000
                    break
                }
            case /^years?$/i.test( scale ):
                // Year (is the variable length scale) (:> 年（可変長スケール）
                if ( /^(year|month)s?$/i.test( _opts.scale ) ) {
                    return this._diffDate( _props.begin, _props.end, scale )
                } else {
                    _ms = 365.25 * 24 * 60 * 60 * 1000
                    break
                }
            case /^lustrum$/i.test( scale ):
                // Lustrum (:> 五年紀
                _ms = ( ( 3.1536 * Math.pow( 10, 8 ) ) / 2 ) * 1000
                break
            case /^dec(ade|ennium)$/i.test( scale ):
                // Decade (:> 十年紀
                _ms = ( 3.1536 * Math.pow( 10, 8 ) ) * 1000
                break
            case /^century$/i.test( scale ):
                // Century (:> 世紀（百年紀）
                _ms = 3155760000 * 1000
                break
            case /^millenniums?|millennia$/i.test( scale ):
                // Millennium (:> 千年紀
                _ms = ( 3.1536 * Math.pow( 10, 10 ) ) * 1000
                break
            default:
                console.warn( 'Specified an invalid scale.' )
                _ms = -1
        }
        return _ms > 0 ? _ms : false
    }
    
    /*
     * @private: Verify the display period of the timeline does not exceed the maximum renderable range (:> タイムラインの表示期間が最大描画可能範囲を超過していないか検証する
     */
    _verifyMaxRenderableRange() {
// console.log( this._instanceProps.grids, '/', LimitScaleGrids[this._filterScaleKeyName( this._config.scale )] )
        return this._instanceProps.grids <= LimitScaleGrids[this._filterScaleKeyName( this._config.scale )]
    }
    
    /*
     * @private: Render the view of timeline container
     */
    _renderView() {
        this._debug( '_renderView' )
        
        let _elem          = this._element,
            _opts          = this._config,
            _props         = this._instanceProps,
            _tl_container  = $('<div></div>', { class: ClassName.TIMELINE_CONTAINER, style: `width: ${_props.visibleWidth}; height: ${_props.visibleHeight};` }),
            _tl_main       = $('<div></div>', { class: ClassName.TIMELINE_MAIN })
        
//console.log( _elem, _opts, _props )
        if ( $(_elem).length == 0 ) {
            throw new TypeError( 'Does not exist the element to render a timeline container.' )
        }
        
        if ( _opts.debug ) {
            console.log( `Timeline:{ fullWidth: ${_props.fullwidth}px,`, `fullHeight: ${_props.fullheight}px,`, `viewWidth: ${_props.visibleWidth}`, `viewHeight: ${_props.visibleHeight} }` )
        }
        
        $(_elem).css( 'position', 'relative' ) // initialize; not .empty()
        if ( _opts.hideScrollbar ) {
            _tl_container.addClass( ClassName.HIDE_SCROLLBAR )
        }
        
        // Create the timeline headline (:> タイムラインの見出しを生成
        $(_elem).prepend( this._createHeadline() )
        
        // Create the timeline event container (:> タイムラインのイベントコンテナを生成
        _tl_main.append( this._createEventContainer() )
        
        // Create the timeline ruler (:> タイムラインの目盛を生成
        if ( ! this.is_empty( _opts.ruler.top ) ) {
            _tl_main.prepend( this._createRuler( 'top' ) )
        }
        if ( ! this.is_empty( _opts.ruler.bottom ) ) {
            _tl_main.append( this._createRuler( 'bottom' ) )
        }
        
        // Create the timeline side index (:> タイムラインのサイドインデックスを生成
        let margin = {
                top    : parseInt( _tl_main.find( Selector.RULER_TOP ).height(), 10 ) - 1,
                bottom : parseInt( _tl_main.find( Selector.RULER_BOTTOM ).height(), 10 ) - 1
            }
        
        if ( _opts.sidebar.list.length > 0 ) {
            _tl_container.prepend( this._createSideIndex( margin ) )
        }
        
        // Append the timeline container in the timeline element (:> タイムライン要素にタイムラインコンテナを追加
        _tl_container.append( _tl_main )
        $(_elem).append( _tl_container )
        
        // Create the timeline footer (:> タイムラインのフッタを生成
        $(_elem).append( this._createFooter() )
        
        this._isShown = true
    }
    
    /*
     * @private: Create the headline of the timeline (:> タイムラインの見出しを作成する
     */
    _createHeadline() {
        let _opts    = this._config,
            _props   = this._instanceProps,
            _display = this.supplement( Default.headline.display, _opts.headline.display, this.validateBoolean ),
            _title   = this.supplement( null, _opts.headline.title ),
            _range   = this.supplement( Default.headline.range, _opts.headline.range, this.validateBoolean ),
            _locale  = this.supplement( Default.headline.locale, _opts.headline.locale ),
            _format  = this.supplement( Default.headline.format, _opts.headline.format ),
            _begin   = this.supplement( null, _props.begin ),
            _end     = this.supplement( null, _props.end ),
            _tl_headline = $('<div></div>', { class: ClassName.TIMELINE_HEADLINE }),
            _wrapper     = $('<div></div>', { class: ClassName.TIMELINE_HEADLINE_WRAPPER })
        
// console.log( '!_createHeadline:', _opts )
        if ( _title ) {
            _wrapper.append( `<h3 class="${ClassName.HEADLINE_TITLE}">${_opts.headline.title}</h3>` )
        }
        if ( _range ) {
            if ( _begin && _end ) {
                let _meta = `${new Date( _begin ).toLocaleString( _locale, _format )}<span class="${ClassName.RANGE_SPAN}"></span>${new Date( _end ).toLocaleString( _locale, _format )}`
                //let _meta = this.getCorrectDatetime( _begin ).toLocaleString( _locale, _format ) +'<span class="jqtl-range-span"></span>'+ this.getCorrectDatetime( _end ).toLocaleString( _locale, _format )
                
                _wrapper.append( `<div class="${ClassName.RANGE_META}">${_meta}</div>` )
            }
        }
        if ( ! _display ) {
            _tl_headline.addClass( ClassName.HIDE )
        }
        return _tl_headline.append( _wrapper )
    }
    
    /*
     * @private: Create the event container of the timeline (:> タイムラインのイベントコンテナを作成する
     */
    _createEventContainer() {
        let _opts         = this._config,
            _props        = this._instanceProps,
            _actualHeight = _props.fullheight + Math.ceil( _props.rows / 2 ),
            _container    = $('<div></div>', { class: ClassName.TIMELINE_EVENT_CONTAINER, style: `height:${_actualHeight}px;` }),
            _events_bg    = $(`<canvas width="${( _props.fullwidth - 1 )}" height="${_actualHeight}" class="${ClassName.TIMELINE_BACKGROUND_GRID}"></canvas>`),
            _events_lines = $(`<canvas width="${( _props.fullwidth - 1 )}" height="${_actualHeight}" class="${ClassName.TIMELINE_RELATION_LINES}"></canvas>`),
            _events_body  = $('<div></div>', { class: ClassName.TIMELINE_EVENTS }),
            _cy           = 0,
            ctx_grid      = _events_bg[0].getContext('2d'),
            drawRowRect   = ( pos_y, color ) => {
                color = this.supplement( '#FFFFFF', color )
                // console.log( 0, pos_y, _fullwidth, _size_row, color )
                ctx_grid.fillStyle = color
                ctx_grid.fillRect( 0, pos_y + 0.5, _props.fullwidth, _props.rowSize + 1.5 )
                ctx_grid.stroke()
            },
            drawHorizontalLine = ( pos_y, is_dotted ) => {
                is_dotted = this.supplement( false, is_dotted )
                // console.log( pos_y, is_dotted )
                ctx_grid.strokeStyle = 'rgba( 51, 51, 51, 0.1 )'
                ctx_grid.lineWidth = 1
                ctx_grid.filter = 'url(#crisp)'
                ctx_grid.beginPath()
                if ( is_dotted ) {
                    ctx_grid.setLineDash([ 1, 2 ])
                } else {
                    ctx_grid.setLineDash([])
                }
                ctx_grid.moveTo( 0, pos_y + 0.5 )
                ctx_grid.lineTo( _props.fullwidth, pos_y + 0.5 )
                ctx_grid.closePath()
                ctx_grid.stroke()
            },
            drawVerticalLine = ( pos_x, is_dotted ) => {
                is_dotted = this.supplement( false, is_dotted )
                // console.log( pos_x, is_dotted )
                ctx_grid.strokeStyle = 'rgba( 51, 51, 51, 0.025 )'
                ctx_grid.lineWidth = 1
                ctx_grid.filter = 'url(#crisp)'
                ctx_grid.beginPath()
                if ( is_dotted ) {
                    ctx_grid.setLineDash([ 1, 2 ])
                } else {
                    ctx_grid.setLineDash([])
                }
                ctx_grid.moveTo( pos_x - 0.5, 0 )
                ctx_grid.lineTo( pos_x - 0.5, _props.fullheight )
                ctx_grid.closePath()
                ctx_grid.stroke()
            }
        
        _cy = 0
        for ( let i = 0; i < _props.rows; i++ ) {
            _cy += i % 2 == 0 ? 1 : 0
            let _pos_y = ( i * _props.rowSize ) + _cy
            drawRowRect( _pos_y, i % 2 == 0 ? '#FEFEFE' : '#F8F8F8' )
        }
        _cy = 0
        for ( let i = 1; i < _props.rows; i++ ) {
            _cy += i % 2 == 0 ? 1 : 0
            let _pos_y = ( i * _props.rowSize ) + _cy
            drawHorizontalLine( _pos_y, true )
        }
        if ( /^(year|month)s?$/i.test( _opts.scale ) ) {
            // For scales where the value of quantity per unit is variable length (:> 単位あたりの量の値が可変長であるスケールの場合
            let _bc = /^years?$/i.test( _opts.scale ) ? 365 : 30,
                _sy = 0
            
            for ( let _key in _props.variableScale ) {
                _sy += this.numRound( ( _props.variableScale[_key] * _props.scaleSize ) / _bc, 2 )
                drawVerticalLine( _sy, false )
            }
        } else {
            // In case of fixed length scale (:> 固定長スケールの場合
            for ( let i = 1; i < _props.grids; i++ ) {
                drawVerticalLine( ( i * _props.scaleSize ), false )
            }
        }
        
        return _container.append( _events_bg ).append( _events_lines ).append( _events_body )
    }
    
    /*
     * @private: Create the ruler of the timeline (:> タイムラインの目盛を作成する
     */
    _createRuler( position ) {
        let _opts       = this._config,
            _props      = this._instanceProps,
            ruler_line  = this.supplement( [ _opts.scale ], _opts.ruler[position].lines, ( def, val ) => this.is_array( val ) && val.length > 0 ? val : def ),
            line_height = this.supplement( Default.ruler.top.height, _opts.ruler[position].height ),
            font_size   = this.supplement( Default.ruler.top.fontSize, _opts.ruler[position].fontSize ),
            text_color  = this.supplement( Default.ruler.top.color, _opts.ruler[position].color ),
            background  = this.supplement( Default.ruler.top.background, _opts.ruler[position].background ),
            locale      = this.supplement( Default.ruler.top.locale, _opts.ruler[position].locale ),
            format      = this.supplement( Default.ruler.top.format, _opts.ruler[position].format ),
            ruler_opts  = { lines: ruler_line, height: line_height, fontSize: font_size, color: text_color, background, locale, format },
            _fullwidth  = _props.fullwidth - 1,
            _fullheight = ruler_line.length * line_height,
            _ruler      = $('<div></div>', { class: `${PREFIX}ruler-${position}`, style: `height:${_fullheight}px;` }),
            _ruler_bg   = $(`<canvas class="${PREFIX}ruler-bg-${position}" width="${_fullwidth}" height="${_fullheight}"></canvas>`),
            _ruler_body = $('<div></div>', { class: `${PREFIX}ruler-content-${position}` }),
            _finalLines = 0,
            ctx_ruler   = _ruler_bg[0].getContext('2d')
            
//console.log( grids, size_per_grid, scale, begin, min_scale, ruler, position, ruler_line, line_height, ctx_ruler.canvas.width, ctx_ruler.canvas.height )
        // Draw background of ruler
        ctx_ruler.fillStyle = background
        ctx_ruler.fillRect( 0, 0, ctx_ruler.canvas.width, ctx_ruler.canvas.height )
        
        // Draw stroke of ruler
        ctx_ruler.strokeStyle = 'rgba( 51, 51, 51, 0.1 )'
        ctx_ruler.lineWidth = 1
        ctx_ruler.filter = 'url(#crisp)'
        ruler_line.some( ( line_scale, idx ) => {
            if ( /^(quarter|half)-?(|hour)$/i.test( line_scale ) ) {
                return true // break
            }
            
            ctx_ruler.beginPath()
            
            // Draw rows
            //let _line_x = position === 'top' ? 0 : ctx_ruler.canvas.width,
            let _line_y = position === 'top' ? line_height * ( idx + 1 ) - 0.5 : line_height * idx + 0.5
            
            ctx_ruler.moveTo( 0, _line_y )
            ctx_ruler.lineTo( ctx_ruler.canvas.width, _line_y )
            
            // Draw cols
            let _line_grids = null,
                _grid_x     = 0,
                _correction = -1.5
            
            if ( /^(year|month)s?$/i.test( _opts.scale ) ) {
                // For scales where the value of quantity per unit is variable length (:> 単位あたりの量の値が可変長であるスケールの場合
                _line_grids = this._filterVariableScale( line_scale )
                
                for ( let _key in _line_grids ) {
                    _grid_x += this.numRound( _line_grids[_key], 2 )
                    
                    ctx_ruler.moveTo( _grid_x + _correction, position === 'top' ? _line_y - line_height : _line_y )
                    ctx_ruler.lineTo( _grid_x + _correction, position === 'top' ? _line_y : _line_y + line_height )
                }
            } else {
                // In case of fixed length scale (:> 固定長スケールの場合
                _line_grids = this._getGridsPerScale( line_scale )
                
                for ( let _key in _line_grids ) {
                    if ( this.is_empty( _key ) || _line_grids[_key] >= _props.grids ) {
                        break
                    }
                    let _grid_width = _line_grids[_key] * _props.scaleSize
                    
                    _grid_x += _grid_width
                    if ( Math.ceil( _grid_x ) - _correction >= ctx_ruler.canvas.width ) {
                        break
                    }
                    ctx_ruler.moveTo( _grid_x + _correction, position === 'top' ? _line_y - line_height : _line_y )
                    ctx_ruler.lineTo( _grid_x + _correction, position === 'top' ? _line_y : _line_y + line_height )
                }
            }
            ctx_ruler.closePath()
            ctx_ruler.stroke()
            _ruler_body.append( this._createRulerContent( _line_grids, line_scale, ruler_opts ) )
            _finalLines++
        })
        
        if ( ruler_line.length != _finalLines ) {
            _ruler.css( 'height', `${_finalLines * line_height}px` )
        }
        
        return _ruler.append( _ruler_bg ).append( _ruler_body )
    }
    
    /*
     * @private: Filter to aggregate the grid width of the variable length scale (:> 可変長スケールのグリッド幅を集約するフィルタ
     */
    _filterVariableScale( target_scale ) {
        let _opts  = this._config,
            _props = this._instanceProps,
            _bc    = /^years?$/i.test( _opts.scale ) ? 365 : 30,
            scales = _props.variableScale,
            retObj = {}
        
        for ( let _dt in scales ) {
            let _days     = scales[_dt],
                grid_size = this.numRound( ( _days * _props.scaleSize ) / _bc, 2 ),
                _newKey   = null,
                _arr, _temp
//console.log( '!_filterVariableScale:', _dt, this.getCorrectDatetime( _dt ).getFullYear(), _days )
            
            switch ( true ) {
                case /^millenniums?|millennia$/i.test( target_scale ):
                    _newKey = Math.ceil( this.getCorrectDatetime( _dt ).getFullYear() / 1000 )
                    
                    if ( retObj.hasOwnProperty( _newKey ) ) {
                        retObj[_newKey] += grid_size
                    } else {
                        retObj[_newKey] = grid_size
                    }
                    break
                case /^century$/i.test( target_scale ):
                    _newKey = Math.ceil( this.getCorrectDatetime( _dt ).getFullYear() / 100 )
                    
                    if ( retObj.hasOwnProperty( _newKey ) ) {
                        retObj[_newKey] += grid_size
                    } else {
                        retObj[_newKey] = grid_size
                    }
                    break
                case /^dec(ade|ennium)$/i.test( target_scale ):
                    _newKey = Math.ceil( this.getCorrectDatetime( _dt ).getFullYear() / 10 )
                    
                    if ( retObj.hasOwnProperty( _newKey ) ) {
                        retObj[_newKey] += grid_size
                    } else {
                        retObj[_newKey] = grid_size
                    }
                    break
                case /^lustrum$/i.test( target_scale ):
                    _newKey = Math.ceil( this.getCorrectDatetime( _dt ).getFullYear() / 5 )
                    
                    if ( retObj.hasOwnProperty( _newKey ) ) {
                        retObj[_newKey] += grid_size
                    } else {
                        retObj[_newKey] = grid_size
                    }
                    break
                case /^years?$/i.test( target_scale ):
                    _newKey = `${this.getCorrectDatetime( _dt ).getFullYear()}`
                    
                    if ( retObj.hasOwnProperty( _newKey ) ) {
                        retObj[_newKey] += grid_size
                    } else {
                        retObj[_newKey] = grid_size
                    }
                    break
                case /^months?$/i.test( target_scale ):
                    retObj[`${this.getCorrectDatetime( _dt ).getFullYear()}/${this.getCorrectDatetime( _dt ).getMonth() + 1}`] = grid_size
                    break
                case /^weeks?$/i.test( target_scale ):
                    _arr  = _dt.split(',')
                    _temp = this.getWeek( _arr[0] )
                    retObj[`${this.getCorrectDatetime( _arr[0] ).getFullYear()},${_temp}`] = grid_size
                    break
                case /^weekdays?$/i.test( target_scale ):
                    _arr  = _dt.split(',')
                    _temp = this.getCorrectDatetime( _arr[0] ).getDay()
                    retObj[`${this.getCorrectDatetime( _arr[0] ).getFullYear()}/${this.getCorrectDatetime( _arr[0] ).getMonth() + 1}/1,${_temp}`] = grid_size
                    break
                case /^days?$/i.test( target_scale ):
                    retObj[`${this.getCorrectDatetime( _dt ).getFullYear()}/${this.getCorrectDatetime( _dt ).getMonth() + 1}/1`] = grid_size
                    break
                case /^hours?$/i.test( target_scale ):
                    retObj[`${this.getCorrectDatetime( _dt ).getFullYear()}/${this.getCorrectDatetime( _dt ).getMonth() + 1}/1 0`] = grid_size
                    break
                case /^minutes?$/i.test( target_scale ):
                    retObj[`${this.getCorrectDatetime( _dt ).getFullYear()}/${this.getCorrectDatetime( _dt ).getMonth() + 1}/1 0:00`] = grid_size
                    break
                case /^seconds?$/i.test( target_scale ):
                    retObj[`${this.getCorrectDatetime( _dt ).getFullYear()}/${this.getCorrectDatetime( _dt ).getMonth() + 1}/1 0:00:00`] = grid_size
                    break
                default:
                    retObj[`${this.getCorrectDatetime( _dt ).getFullYear()}/${this.getCorrectDatetime( _dt ).getMonth() + 1}`] = grid_size
                    break
            }
        }
        
        return retObj
    }
    
    /*
     * @private: Get the grid number per scale (for fixed length scale) (:> スケールごとのグリッド数を取得する（固定長スケール用）
     */
    _getGridsPerScale( target_scale ) {
        //let _opts        = this._config,
        let _props       = this._instanceProps,
            _scopes      = [],
            _scale_grids = {},
            _sep         = '/'
        
        for ( let i = 0; i < _props.grids; i++ ) {
            let _tmp = new Date( _props.begin + ( i * _props.scale ) ),
            //let _tmp = this.getCorrectDatetime( _props.begin + ( i * _props.scale ) ),
                _y   = _tmp.getFullYear(),
                _mil = Math.ceil( _y / 1000 ),
                _cen = Math.ceil( _y / 100 ),
                _dec = Math.ceil( _y / 10 ),
                _lus = Math.ceil( _y / 5 ),
                _m   = _tmp.getMonth() + 1,
                _wd  = _tmp.getDay(), // 0 = Sun, ... 6 = Sat
                _d   = _tmp.getDate(),
                _w   = this.getWeek( `${_y}/${_m}/${_d}` ),
                _h   = _tmp.getHours(),
                _min = _tmp.getMinutes(),
                _s   = _tmp.getSeconds()
            
            _scopes.push({
                millennium : _mil,
                century    : _cen,
                decade     : _dec,
                lustrum    : _lus,
                year       : _y,
                month      : `${_y}${_sep}${_m}${_sep}1`,
                week       : `${_y},${_w}`,
                weekday    : `${_y}${_sep}${_m}${_sep}${_d},${_wd}`,
                day        : `${_y}${_sep}${_m}${_sep}${_d}`,
                hour       : `${_y}${_sep}${_m}${_sep}${_d} ${_h}`,
                minute     : `${_y}${_sep}${_m}${_sep}${_d} ${_h}:${_min}`,
                second     : `${_y}${_sep}${_m}${_sep}${_d} ${_h}:${_min}:${_s}`,
                datetime   : _tmp.toString()
            })
        }
        _scopes.forEach( ( _scope ) => {
//console.log( _scope[target_scale], idx );
            if ( ! _scale_grids[_scope[target_scale]] ) {
                _scale_grids[_scope[target_scale]] = 1
            } else {
                _scale_grids[_scope[target_scale]]++
            }
        })
//console.log( '!_getGridsPerScale:', target_scale, _scale_grids )
        
        return _scale_grids
    }
    
    /*
     * @private: Create the content of ruler of the timeline (:> タイムラインの目盛本文を作成する
     */
    _createRulerContent( _line_grids, line_scale, ruler ) {
        let _opts        = this._config,
            _props       = this._instanceProps,
            line_height  = this.supplement( Default.ruler.top.height, ruler.height ),
            font_size    = this.supplement( Default.ruler.top.fontSize, ruler.fontSize ),
            text_color   = this.supplement( Default.ruler.top.color, ruler.color ),
            locale       = this.supplement( Default.ruler.top.locale, ruler.locale, this.validateString ),
            format       = this.supplement( Default.ruler.top.format, ruler.format, this.validateObject ),
            _ruler_lines = $('<div></div>', { class: ClassName.TIMELINE_RULER_LINES, style: `width:100%;height:${line_height}px;` })
        
        for ( let _key in _line_grids ) {
            let _item_width      = /^(year|month)s?$/i.test( _opts.scale ) ? _line_grids[_key] : _line_grids[_key] * _props.scaleSize,
                _line            = $('<div></div>', { class: ClassName.TIMELINE_RULER_ITEM, style: `width:${_item_width}px;height:${line_height}px;line-height:${line_height}px;font-size:${font_size}px;color:${text_color};` }),
                _ruler_string    = this.getLocaleString( _key, line_scale, locale, format ),
                _data_ruler_item = ''
//console.log( '!_createRulerContent:', _key, _line_grids[_key], line_scale, locale, format, _item_width, _ruler_string )
            
        _data_ruler_item  = `${line_scale}-${( _data_ruler_item === '' ? String( _key ) : _data_ruler_item )}`
            _line.attr( 'data-ruler-item', _data_ruler_item ).html( _ruler_string )
            
            if ( _item_width > this.strWidth( _ruler_string ) ) {
                // Adjust position of ruler item string
//console.log( _item_width, _ruler_string, _ruler_string.length, this.strWidth( _ruler_string ), $(this._element).width() )
                if ( _item_width > $(this._element).width() ) {
                    _line.addClass( ClassName.RULER_ITEM_ALIGN_LEFT )
                }
            }
            
            _ruler_lines.append( _line ).attr( 'data-ruler-scope', line_scale )
        }
        
        return _ruler_lines
    }
    
    /*
     * @private: Create the side indexes of the timeline (:> タイムラインのサイド・インデックスを作成する
     */
    _createSideIndex( margin ) {
        let _opts    = this._config,
            _props   = this._instanceProps,
            _sticky  = this.supplement( Default.sidebar.sticky, _opts.sidebar.sticky ),
            _overlay = this.supplement( Default.sidebar.overlay, _opts.sidebar.overlay ),
            _sbList  = this.supplement( Default.sidebar.list, _opts.sidebar.list ),
            _wrapper = $('<div></div>', { class: ClassName.TIMELINE_SIDEBAR }),
            _margin  = $('<div></div>', { class: ClassName.TIMELINE_SIDEBAR_MARGIN }),
            _list    = $('<div></div>', { class: ClassName.TIMELINE_SIDEBAR_ITEM }),
            _c       = 0.5
        
        if ( _sticky ) {
            _wrapper.addClass( ClassName.STICKY_LEFT )
        }
        
        if ( _overlay ) {
            _list.addClass( ClassName.OVERLAY )
        }
        
        //_wrapper.css( 'margin-top', margin.top + 'px' ).css( 'margin-bottom', margin.bottom + 'px' )
        if ( margin.top > 0 ) {
            _wrapper.prepend( _margin.clone().css( 'height', `${( margin.top + 1 )}px` ) )
        }
        
        for ( let i = 0; i < _props.rows; i++ ) {
            let _item = _list.clone().html( _sbList[i] )
            
            _wrapper.append( _item )
        }
        _wrapper.find( Selector.TIMELINE_SIDEBAR_ITEM ).css( 'height', `${( _props.rowSize + _c )}px` ).css( 'line-height', `${( _props.rowSize + _c )}px` )
        
        if ( margin.bottom > 0 ) {
            _wrapper.append( _margin.clone().css( 'height', `${( margin.bottom + 1 )}px` ) )
        }
        
        return _wrapper
    }
    
    /*
     * @private: Create the footer of the timeline (:> タイムラインのフッターを作成する
     */
    _createFooter() {
        let _opts    = this._config,
            _props   = this._instanceProps,
            _display = this.supplement( Default.footer.display, _opts.footer.display ),
            _content = this.supplement( null, _opts.footer.content ),
            _range   = this.supplement( Default.footer.range, _opts.footer.range ),
            _locale  = this.supplement( Default.footer.locale, _opts.footer.locale ),
            _format  = this.supplement( Default.footer.format, _opts.footer.format ),
            _begin   = this.supplement( null, _props.begin ),
            _end     = this.supplement( null, _props.end ),
            _tl_footer = $('<div></div>', { class: ClassName.TIMELINE_FOOTER })
        
        if ( _range ) {
            if ( _begin && _end ) {
                let _meta = `${new Date( _begin ).toLocaleString( _locale, _format )}<span class="${ClassName.RANGE_SPAN}"></span>${new Date( _end ).toLocaleString( _locale, _format )}`
                //let _meta = this.getCorrectDatetime( _begin ).toLocaleString( _locale, _format ) +'<span class="jqtl-range-span"></span>'+ this.getCorrectDatetime( _end ).toLocaleString( _locale, _format )
                
                _tl_footer.append( `<div class="${ClassName.RANGE_META} ${ClassName.ALIGN_SELF_RIGHT}">${_meta}</div>` )
            }
        }
        if ( _content ) {
            _tl_footer.append( `<div class="${ClassName.TIMELINE_FOOTER_CONTENT}">${_content}</div>` )
        }
        if ( ! _display ) {
            _tl_footer.addClass( ClassName.HIDE )
        }
        
        return _tl_footer
    }
    
    /*
     * @private: Acquire the difference between two dates with the specified scale value (:> 2つの日付の差分を指定したスケール値で取得する
     */
    _diffDate( date1, date2, scale = 'millisecond', absval = false ) {
        //let _opts  = this._config,
        let _dt1   = this.supplement( null, date1 ),
            _dt2   = this.supplement( null, date2 ),
            diffMS = 0,
            retval = false,
            lastDayOfMonth = ( dateObj ) => {
                let _tmp = new Date( dateObj.getFullYear(), dateObj.getMonth() + 1, 1 )
                _tmp.setTime( _tmp.getTime() - 1 )
                return _tmp.getDate()
            },
            isLeapYear = ( dateObj ) => {
                let _tmp = new Date( dateObj.getFullYear(), 0, 1 ),
                    sum  = 0
                
                for ( let i = 0; i < 12; i++ ) {
                    _tmp.setMonth(i)
                    sum += lastDayOfMonth( _tmp )
                }
                return sum == 365 ? false : true
            }
        
        if ( ! _dt1 || ! _dt2 ) {
            console.warn( 'Cannot parse date because invalid format or undefined.' )
            return false
        }
        
        diffMS = _dt2 - _dt1
        
        if ( absval ) {
            diffMS = Math.abs( diffMS )
        }
        
        let _bd = new Date( _dt1 ),
            _ed = new Date( _dt2 ),
            _dy = _ed.getFullYear() - _bd.getFullYear(),
            _m  = {}
        
        switch ( true ) {
            case /^years?$/i.test( scale ):
                if ( _dy > 0 ) {
                    for ( let i = 0; i <= _dy; i++ ) {
                        let _cd = new Date( _bd.getFullYear() + i, 0, 1 )
                        _m[`${_bd.getFullYear() + i}`] = isLeapYear( _cd ) ? 366 : 365
                    }
                } else {
                    _m[`${_bd.getFullYear()}`] = isLeapYear( _bd ) ? 366 : 365
                }
                retval = _m
                break
            case /^months?$/i.test( scale ):
                if ( _dy > 0 ) {
                    for ( let i = _bd.getMonth(); i < 12; i++ ) {
                        let _cd = new Date( _bd.getFullYear(), i, 1 )
                        _m[`${_bd.getFullYear()}/${i + 1}`] = lastDayOfMonth( _cd )
                    }
                    if ( _dy > 1 ) {
                        for ( let y = 1; y < _dy; y++ ) {
                            for ( let i = 0; i < 12; i++ ) {
                                let _cd = new Date( _bd.getFullYear() + y, i, 1 )
                                _m[`${_bd.getFullYear() + y}/${i + 1}`] = lastDayOfMonth( _cd )
                            }
                        }
                    }
                    for ( let i = 0; i <= _ed.getMonth(); i++ ) {
                        let _cd = new Date( _ed.getFullYear(), i, 1 )
                        _m[`${_ed.getFullYear()}/${i + 1}`] = lastDayOfMonth( _cd )
                    }
                } else {
                    for ( let i = _bd.getMonth(); i <= _ed.getMonth(); i++ ) {
                        let _cd = new Date( _bd.getFullYear(), i, 1 )
                        _m[`${_bd.getFullYear()}/${i + 1}`] = lastDayOfMonth( _cd )
                    }
                }
                retval = _m
                break
            case /^weeks?$/i.test( scale ):
                retval = Math.ceil( diffMS / ( 7 * 24 * 60 * 60 * 1000 ) )
                break
            case /^(|week)days?$/i.test( scale ):
                retval = Math.ceil( diffMS / ( 24 * 60 * 60 * 1000 ) )
                break
            case /^hours?$/i.test( scale ):
                retval = Math.ceil( diffMS / ( 60 * 60 * 1000 ) )
                break
            case /^minutes?$/i.test( scale ):
                retval = Math.ceil( diffMS / ( 60 * 1000 ) )
                break
            case /^seconds?$/i.test( scale ):
                retval = Math.ceil( diffMS / 1000 )
                break
            default:
                retval = diffMS
                break
        }
//console.log( '!_diffDate:', retval )
        
        return retval
    }
    
    /*
     * @private: Load all enabled events markuped on target element to the timeline object
     */
    _loadEvent() {
        this._debug( '_loadEvent' )
        
        let _that         = this,
            _elem         = this._element,
            _opts         = this._config,
            _container    = $(_elem).find( Selector.TIMELINE_CONTAINER ),
            //_ruler_top    = $(_elem).find( Selector.TIMELINE_RULER_TOP ),
            //_ruler_bottom = $(_elem).find( Selector.TIMELINE_RULER_BOTTOM ),
            _event_list   = $(_elem).find( Selector.DEFAULT_EVENTS ),
            _cnt          = 0,
            events        = [],
            lastEventId   = 0
        
        _event_list.children().each(function() {
            let _attr = $(this).attr( 'data-timeline-node' )
            
            if ( typeof _attr !== 'undefined' && _attr !== false ) {
                _cnt++
            }
        })
        
        if ( _event_list.length == 0 || _cnt == 0 ) {
            this._debug( 'Enable event does not exist.' )
        }
        
        // Show loader
        if ( _opts.loader !== false ) {
            let _visible_width  = _container.width(),
                _visible_height = _container.height()
            //    _margin_top     = ( _visible_height - ( _ruler_top.height() || 0 ) - ( _ruler_bottom.height() || 0 ) ) / 2
            
//console.log( _visible_width, _visible_height, _margin_top )
             $(_elem).find( Selector.TIMELINE_CONTAINER ).append( this._showLoader( _visible_width, _visible_height ) )
        }
        
//console.log( _opts )
        // Register Event Data
        _event_list.children().each(function() {
            let _evt_params = _that._getPluggableParams( $(this).attr( 'data-timeline-node' ) ),
                _one_event  = {}
            
            if ( ! _that.is_empty( _evt_params ) ) {
                _one_event = _that._registerEventData( this, _evt_params )
                events.push( _one_event )
                lastEventId = Math.max( lastEventId, parseInt( _one_event.eventId, 10 ) )
            }
        });
        // Set event id with auto increment (:> イベントIDを自動採番
        let cacheIds = [] // for checking duplication of id (:> IDの重複チェック用
        events.forEach( ( _evt, _i, _this ) => {
            let _chkId = parseInt( _this[_i].eventId, 10 )
            
            if ( _chkId == 0 || cacheIds.includes( _chkId ) ) {
                lastEventId++
                _this[_i].eventId = lastEventId
            } else {
                _this[_i].eventId = _chkId
            }
            cacheIds.push( _this[_i].eventId )
        });
        // Cache the event data to the session storage (:> イベントデータをセッションストレージへキャッシュ
        if ( ( 'sessionStorage' in window ) && ( window.sessionStorage !== null ) ) {
            sessionStorage.setItem( this._selector, JSON.stringify( events ) )
            
            this._isCached = true
        }
        
    }
    
    /*
     * @private: Show the loader when the timeline creation (:> タイムライン作成時にローダーを表示
     */
    _showLoader( width, height, margin_top ) {
        margin_top = this.supplement( 0, margin_top, this.validateNumeric )
        let _opts   = this._config,
            _loader = $('<div></div>', { id: 'jqtl-loader', style: `width:${width}px;height:${height}px;top:${margin_top}px;` })
        
        if ( $(_opts.loader).length == 0 ) {
            height = height === 'auto' ? '240px' : height
            let _loading_text = LOADING_MESSAGE.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[\s\S]|^$/g).filter( Boolean )
            
            _loading_text.forEach( ( str, idx ) => {
                let _fountain_text = $('<div></div>', { id: `jqtl-loading_${( idx + 1 )}`, class: ClassName.LOADER_ITEM }).text( str )
                _loader.append( _fountain_text )
            })
        } else {
            let _custom_loader = $(_opts.loader).clone().prop( 'hidden', false ).css( 'display', 'block' )
            _loader.append( _custom_loader )
        }
        return _loader
    }
    
    /*
     * @private:  Hide the loader (:> ローダーを非表示
     */
    _hideLoader() {
        $(this._element).find( Selector.LOADER ).remove()
    }
    
    /*
     * @private: Register one event data as object (:> イベントデータをオブジェクトとして登録する
     */
    _registerEventData( event_element, params ) {
        let _opts     = this._config,
            _props    = this._instanceProps,
            new_event = {
                ...EventParams,
                ...{
                    uid   : this.generateUniqueID(),
                    label : $(event_element).html()
                }
            },
            _relation = {},
            _x, _w, _c //, _pointSize
//console.log( '!_registerEventData:', _opts, params )
        
        if ( params.hasOwnProperty( 'start' ) ) {
            _x = this._getCoordinateX( params.start )
            new_event.x = this.numRound( _x, 2 )
            if ( params.hasOwnProperty( 'end' ) ) {
                _x = this._getCoordinateX( params.end )
                _w = _x - new_event.x
                new_event.width = this.numRound( _w, 2 )
                
                if ( _opts.eventMeta.display ) {
                    if ( this.is_empty( _opts.eventMeta.content ) && ! params.hasOwnProperty( 'rangeMeta' ) ) {
//console.log( '!_registerEventData:', _opts.eventMeta.locale, _opts.eventMeta.format, _opts.scale, params )
                        
                        new_event.rangeMeta += this.getLocaleString( params.start, _opts.eventMeta.scale, _opts.eventMeta.locale, _opts.eventMeta.format )
                        new_event.rangeMeta += ` - ${this.getLocaleString( params.end, _opts.eventMeta.scale, _opts.eventMeta.locale, _opts.eventMeta.format )}`
                    } else {
                        new_event.rangeMeta = _opts.eventMeta.content
                    }
                }
            } else {
                new_event.width = 0
            }
//console.log( 'getX:', _x, 'getW:', _w, event_element )
            if ( params.hasOwnProperty( 'row' ) ) {
                _c = Math.floor( params.row / 2 )
                new_event.y = ( params.row - 1 ) * _opts.rowHeight + new_event.margin + _c
            }
            
            Object.keys( new_event ).forEach( ( _prop ) => {
                switch( true ) {
                    case /^eventId$/i.test( _prop ):
                        if ( params.hasOwnProperty( 'id' ) && this.is_empty( new_event.eventId ) ) {
                            new_event.eventId = parseInt( params.id, 10 )
                        } else {
                            new_event.eventId = parseInt( params[_prop], 10 ) || 0
                        }
                        break
                    case /^(label|content)$/i.test( _prop ):
                        if ( params.hasOwnProperty( _prop ) && ! this.is_empty( params[_prop] ) ) {
                            new_event[_prop] = params[_prop]
                        }
                        // Override the children element to label or content setting
                        if ( $(event_element).children(`.event-${_prop}`).length > 0 ) {
                            new_event[_prop] = $(event_element).children(`.event-${_prop}`).html()
                        }
//console.log( '!_registerEventData:', _prop, params[_prop], new_event[_prop] )
                        break
                    case /^relation$/i.test( _prop ):
                        // For drawing the relation line
                        if ( /^point(|er)$/i.test( _opts.type ) ) {
                            //let _pointSize  = this._getPointerSize( new_event.size, new_event.margin )
                            _relation.x = this.numRound( new_event.x, 2 )
                            _relation.y = this.numRound( ( _props.rowSize * ( ( params.row || 1 ) - 1 ) ) + ( _props.rowSize / 2 ), 2 )
                            
//console.log( '!_registerEventData:', params, new_event.x, new_event.y, _pointSize, _relation )
                            new_event[_prop] = {
                                ...params[_prop],
                                ..._relation
                            }
                        }
                        break
                    default:
                        if ( params.hasOwnProperty( _prop ) && ! this.is_empty( params[_prop] ) ) {
                            new_event[_prop] = params[_prop]
                        }
                        break
                }
            });
        }
//console.log( '!_registerEventData:', new_event )
        return new_event
    }
    
    /*
     * @private: Get the coordinate X on the timeline of any date (:> 任意の日付のタイムライン上のX座標（横軸座標）を取得する
     */
    _getCoordinateX( date ) {
        //let _opts  = this._config,
        let _props = this._instanceProps,
            _date  = this.supplement( null, this._getPluggableDatetime( date ) ),
            coordinate_x = 0
        
        if ( _date ) {
            if ( _date - _props.begin >= 0 && _props.end - _date >= 0 ) {
                // When the given date is within the range of timeline begin and end (:> 指定された日付がタイムラインの開始と終了の範囲内にある場合
                coordinate_x = ( Math.abs( _date - _props.begin ) / _props.scale ) * _props.scaleSize
            } else {
                // When the given date is out of timeline range (:> 指定された日付がタイムラインの範囲外にある場合
                coordinate_x = ( ( _date - _props.begin ) / _props.scale ) * _props.scaleSize
            }
        } else {
            console.warn( 'Cannot parse date because invalid format or undefined.' )
        }
        
        return coordinate_x
    }
    
    _placeEvent() {
        this._debug( '_placeEvent' )
        
        if ( ! this._isCached ) {
            return
        }
        
        let _elem           = this._element,
            _opts           = this._config,
            _evt_container  = $(_elem).find( Selector.TIMELINE_EVENTS ),
            _relation_lines = $(_elem).find( Selector.TIMELINE_RELATION_LINES ),
            events          = {}
        
        if ( ( 'sessionStorage' in window ) && ( window.sessionStorage !== null ) ) {
            events = JSON.parse( sessionStorage.getItem( this._selector ) )
        }
        
        if ( events.length > 0 ) {
            _evt_container.empty()
            events.forEach( ( _evt ) => {
                let _evt_elem = this._createEventNode( _evt )
                
                if ( _evt_elem ) {
                    _evt_container.append( _evt_elem )
                }
            })
        }
        
        if ( /^point(|er)$/i.test( _opts.type ) ) {
            this._drawRelationLine( events )
        }
        
// console.log( '!_placeEvent:', _opts )
        this.sleep( 1 ).then(() => {
            this._hideLoader()
            _evt_container.fadeIn( 'fast', () => {
                _relation_lines.fadeIn( 'fast' )
            })
        })
        
    }
    
    /*
     * @private: Create an event element on the timeline (:> タイムライン上にイベント要素を作成する
     */
    _createEventNode( params ) {
        let _opts     = this._config,
            _props    = this._instanceProps,
            _evt_elem = $('<div></div>', {
                class : ClassName.TIMELINE_EVENT_NODE,
                id    : `evt-${params.eventId}`,
                css   : {
                    left   : `${params.x}px`,
                    top    : `${params.y}px`,
                    width  : `${params.width}px`,
                    height : `${params.height}px`,
                    color  : this.hexToRgbA( params.color ),
                    backgroundColor : this.hexToRgbA( params.bgColor ),
                },
                html  : `<div class="${ClassName.TIMELINE_EVENT_LABEL}">${params.label}</div>`
            })
//console.log( '!_createEventNode:', params )
        
        // Whether this event is within the display range of the timeline (:> タイムライン表示範囲内のイベントかどうか
        // For events excluded, set the width to -1 (:> 除外イベントは幅を -1 に設定する
        if ( params.x >= 0 ) {
            // The event start datetime is over the start datetime of the timeline (:> イベント始点がタイムラインの始点以上
            if ( params.x <= _props.fullwidth ) {
                // The event start datetime is less than or equal to the timeline end datetime (:> イベントの始点がタイムラインの終点以下
                if ( params.x + params.width <= _props.fullwidth ) {
                    // The event end datetime is less than before the timeline end datetime (regular event) (:> イベント終点がタイムラインの終点以下（通常イベント）
                    // OK
                } else {
                    // The event end datetime is after the timeline end datetime (event exceeded end datetime) (:> イベント終点がタイムラインの終点より後（終点超過イベント）
                    params.width = _props.fullwidth - params.x
                }
            } else {
                // The event start datetime is after the timeline end datetime (exclude event) (:> イベント始点がタイムラインの終点より後（除外イベント）
                params.width = -1
            }
        } else {
            // The event start datetime is before the timeline start datetime (:> イベント始点がタイムラインの始点より前
            if ( /^point(|er)$/i.test( _opts.type ) ) {
                // In the case of "point" type, that is an exclude event (:> ポインター型の場合は除外イベント
                params.width = -1
            } else {
                // The case of "bar" type
                if ( params.x + params.width <= 0 ) {
                    // The event end datetime is less than before the timeline start datetime (exclude event) (:> イベント終点がタイムラインの始点より前（除外イベント）
                    params.width = -1
                } else {
                    // The event end datetime is after the timeline start datetime (:> イベント終点がタイムラインの始点より後
                    if ( params.x + params.width <= _props.fullwidth ) {
                        // The event end datetime is less than or equal the timeline end datetime (event exceeded start datetime) (:> イベント終点がタイムラインの終点以下（始点超過イベント）
                        params.width = Math.abs( params.x + params.width )
                        params.x = 0
                    } else {
                        // The event end datetime is after the timeline end datetime (event exceeded both start and end datetime) (:> イベント終点がタイムラインの終点より後（始点・終点ともに超過イベント）
                        params.width = _props.fullwidth
                        params.x = 0
                    }
                }
            }
        }
//console.log( 'x:', params.x, 'w:', params.width, 'x-end:', Math.abs( params.x ) + params.width, 'fw:', _props.fullwidth, 'ps:', params.size )
        
        if ( /^point(|er)$/i.test( _opts.type ) ) {
            if ( params.width < 0 ) {
                return null
            }
            let _pointSize = this._getPointerSize( params.size, params.margin ),
                _shiftX    = this.numRound( params.x - ( _pointSize / 2 ), 2 ),
                _shiftY    = this.numRound( params.y + ( ( params.height - _pointSize ) / 2 ), 2 )
            
//console.log( '!_createEventNode:', params, _pointSize, _shiftX, _shiftY )
            _evt_elem.addClass( ClassName.VIEWER_EVENT_TYPE_POINTER ).css( 'border-color', params.bdColor )
            .css( 'left', `${_shiftX}px` ).css( 'top', `${_shiftY}px` ).css( 'width', `${_pointSize}px` ).css( 'height', `${_pointSize}px` )
            .attr( 'data-base-size', _pointSize ).attr( 'data-base-left', _shiftX ).attr( 'data-base-top', _shiftY )
        } else {
            if ( params.width < 1 ) {
                return null
            }
            _evt_elem.css( 'left', `${params.x}px` ).css( 'width', `${params.width}px` )
        }
        
        _evt_elem.attr( 'data-uid', params.uid )
        
        if ( ! this.is_empty( params.image ) ) {
            if ( /^point(|er)$/i.test( _opts.type ) ) {
                _evt_elem.css( 'background-image', `url(${params.image})` )
            } else {
                let _imgSize = params.height - ( params.margin * 2 )
                _evt_elem.prepend( `<img src="${params.image}" class="${ClassName.TIMELINE_EVENT_THUMBNAIL}" width="${_imgSize}" height="${_imgSize}" />` )
            }
        }
        
        if ( /^bar$/i.test( _opts.type ) && _opts.eventMeta.display ) {
//console.log( '!_createEventNode:', params )
            params.extend.meta = params.rangeMeta
        }
        
        if ( ! this.is_empty( params.extend ) ) {
            for ( let _prop in params.extend ) {
                _evt_elem.attr( `data-${_prop}`, params.extend[_prop] )
                if ( _prop === 'toggle' && [ 'popover', 'tooltip' ].includes( params.extend[_prop] ) ) {
                    // for bootstrap's popover or tooltip
                    _evt_elem.attr( 'title', params.label )
                    if ( ! params.extend.hasOwnProperty( 'content' ) ) {
                        _evt_elem.attr( 'data-content', params.content )
                    }
                }
            }
        }
        
        if ( ! this.is_empty( params.callback ) ) {
            _evt_elem.attr( 'data-callback', params.callback )
        }
        
        /*
        $(document).on( 'mouseenter', `#evt-${params.eventId}`, (e) => {
            $(e.target).css( 'background-color', this.hexToRgbA( params.bgColor, 0.65 ) )
        }).on( 'mouseleave', `#evt-${params.eventId}`, (e) => {
            $(e.target).css( 'background-color', this.hexToRgbA( params.bgColor, 1 ) )
        })
        */
        
        return _evt_elem
    }
    
    /*
     * @private: Retrieve the diameter size (pixel) of pointer (:> ポインタの直径サイズ（ピクセル値）を取得する
     */
    _getPointerSize( key, margin ) {
        //let _opts  = this._config,
        let _props = this._instanceProps,
            _max   = Math.min( _props.scaleSize, _props.rowSize ) - ( margin * 2 ),
            _size  = null
        
        switch ( true ) {
            case /^large$/i.test( key ):
                _size = Math.max( this.numRound( _max * 0.8, 1 ), MIN_POINTER_SIZE )
                break
            case /^normal$/i.test( key ):
                _size = Math.max( this.numRound( _max / 2, 1 ), MIN_POINTER_SIZE )
                break
            case /^small$/i.test( key ):
                _size = Math.max( this.numRound( _max / 4, 1 ), MIN_POINTER_SIZE )
                break
            default:
                _size = Math.max( parseInt( key, 10 ), MIN_POINTER_SIZE )
        }
        
//console.log( '!_getPointerSize:', _props, key, _max, _size )
        return _size
    }
    
    /*
     * @private: Draw the relation lines (:> 連結線を描画する
     */
    _drawRelationLine( events ) {
        let _opts         = this._config,
            _props        = this._instanceProps,
            _canvas       = $(this._element).find( Selector.TIMELINE_RELATION_LINES ),
            ctx_relations = _canvas[0].getContext('2d'),
            drawLine      = ( _sx, _sy, _ex, _ey, evt, _ba ) => {
                let _curveType = {},
                    _radius    = this.numRound( Math.min( _props.scaleSize, _props.rowSize ) / 2, 2 ),
                    _subRadius = this.numRound( this._getPointerSize( evt.size, _opts.marginHeight ) / 2, 2 )
                
                // Defaults
                ctx_relations.strokeStyle = EventParams.bdColor
                ctx_relations.lineWidth   = 2.5
                ctx_relations.filter      = 'url(#crisp)'
                for ( let _key in evt.relation ) {
                    switch ( true ) {
                        case /^(|line)color$/i.test( _key ):
                            ctx_relations.strokeStyle = evt.relation[_key]
                            break
                        case /^(|line)size$/i.test( _key ):
                            ctx_relations.lineWidth = parseInt( evt.relation[_key], 10 ) || 2.5
                            break
                        case /^curve$/i.test( _key ):
                            if ( /^(r|l)(t|b),?(r|l)?(t|b)?$/i.test( evt.relation[_key] ) ) {
                                let _tmp = evt.relation[_key].split(',')
                                if ( _tmp.length == 2 ) {
                                    _curveType.before = _tmp[0]
                                    _curveType.after  = _tmp[1]
                                } else {
                                    _curveType[_ba] = _tmp[0]
                                }
                            } else
                            if ( ( typeof evt.relation[_key] === 'boolean' && evt.relation[_key] ) || ( typeof evt.relation[_key] === 'number' && Boolean( evt.relation[_key] ) ) ) {
                                // Automatically set the necessary linearity type (:> 自動線形判定
//console.log( _sx, _sy, _ex, _ey, _radius, _ba, _subRadius )
                                if ( _ba === 'before' ) {
                                    // before: targetEvent[ _ex, _ey ] <---- selfEvent[ _sx, _sy ]
                                    if ( _sy > _ey ) {
                                        // 連結点が自分より上にある
                                        if ( _sx > _ex ) {
                                            // 連結点が自分より左にある "(_ex,_ey)└(_sx,_sy)" as "lb"
                                            _curveType[_ba] = 'lb'
                                        } else
                                        if ( _sx < _ex ) {
                                            // 連結点が自分より右にある "⊂￣" as "lb+lt"
                                            _curveType[_ba] = 'lb+lt'
                                        } else {
                                            // 連結点が自分の直上 "│" to top
                                            _curveType[_ba] = null
                                        }
                                    } else
                                    if ( _sy < _ey ) {
                                        // 連結点が自分より下にある
                                        if ( _sx > _ex ) {
                                            // 連結点が自分より左にある "(_ex,_ey)┌(_sx,_sy)" as "lt"
                                            _curveType[_ba] = 'lt'
                                        } else
                                        if ( _sx < _ex ) {
                                            // 連結点が自分より右にある "⊂_" as "rt+rb"
                                            _curveType[_ba] = 'lt+lb'
                                        } else {
                                            // 連結点が自分の直下 "│" to bottom
                                            _curveType[_ba] = null
                                        }
                                    } else {
                                        // 連結点が自分と同じ水平上にある（左右どちらか） _sy == _ey; "─" to left or right
                                        _curveType[_ba] = null
                                    }
                                } else
                                if ( _ba === 'after' ) {
                                    // after: selfEvent[ _sx, _sy ] ----> targetEvent[ _ex, _ey ]
                                    if ( _sy < _ey ) {
                                        // 連結点が自分の下にある
                                        if ( _sx < _ex ) {
                                            // 連結点が自分の右にある "(_sx,_sy)┐(_ex,_ey)" as "rt"
                                            _curveType[_ba] = 'rt'
                                        } else
                                        if ( _sx > _ex ) {
                                            // 連結点が自分より左にある "_⊃" as "rt+rb"
                                            _curveType[_ba] = 'rt+rb'
                                        } else {
                                            // 連結点が自分の直下 "│" to bottom
                                            _curveType[_ba] = null
                                        }
                                    } else
                                    if ( _sy > _ey ) {
                                        // 連結点が自分より上にある
                                        if ( _sx < _ex ) {
                                            // 連結点が自分の右にある "┘" as "rb"
                                            _curveType[_ba] = 'rb'
                                        } else
                                        if ( _sx > _ex ) {
                                            // 連結点が自分より左にある "￣⊃" as "rb+rt"
                                            _curveType[_ba] = 'rb+rt'
                                        } else {
                                            // 連結点が自分の直上 "│" to top
                                            _curveType[_ba] = null
                                        }
                                    } else {
                                        // 連結点が自分と同じ水平上にある（左右どちらか） _sy == _ey; "─" to left or right
                                        _curveType[_ba] = null
                                    }
                                }
                            }
                            break
                    }
                }
                if ( Math.abs( _ey - _sy ) > _props.rowSize ) {
                    _ey += Math.floor( Math.abs( _ey - _sy ) / _props.rowSize )
                }
                ctx_relations.beginPath()
                if ( ! this.is_empty( _curveType ) ) {
// console.log( '!_drawLine:', _curveType, _sx, _sy, _ex, _ey, _radius )
                    switch ( true ) {
                        case /^lt$/i.test( _curveType[_ba] ): // "(_ex,_ey)┌(_sx,_sy)"
                            ctx_relations.moveTo( _sx, _sy )
                            if ( Math.abs( _sx - _ex ) > _radius ) {
                                ctx_relations.lineTo( _ex - _radius, _sy ) // "─"
                            }
                            if ( Math.abs( _ey - _sy ) > _radius ) {
                                ctx_relations.quadraticCurveTo( _ex, _sy, _ex, _sy + _radius ) // "┌"
                                ctx_relations.lineTo( _ex, _ey ) // "│"
                            } else {
                                ctx_relations.quadraticCurveTo( _ex, _sy, _ex, _ey ) // "┌"
                            }
                            break
                        case /^lb$/i.test( _curveType[_ba] ): // "(_ex,_ey)└(_sx,_sy)"
                            ctx_relations.moveTo( _sx, _sy )
                            if ( Math.abs( _sx - _ex ) > _radius ) {
                                ctx_relations.lineTo( _ex + _radius, _sy ) // "─"
                            }
                            if ( Math.abs( _sy - _ey ) > _radius ) {
                                ctx_relations.quadraticCurveTo( _ex, _sy, _ex, _sy - _radius ) // "└"
                                ctx_relations.lineTo( _ex, _ey ) // "│"
                            } else {
                                ctx_relations.quadraticCurveTo( _ex, _sy, _ex, _ey ) // "└"
                            }
                            break
                        case /^rt$/i.test( _curveType[_ba] ): // "(_sx,_sy)┐(_ex,_ey)"
                            ctx_relations.moveTo( _sx, _sy )
                            if ( Math.abs( _ex - _sx ) > _radius ) {
                                ctx_relations.lineTo( _ex - _radius, _sy ) // "─"
                            }
                            if ( Math.abs( _ey - _sy ) > _radius ) {
                                ctx_relations.quadraticCurveTo( _ex, _sy, _ex, _sy + _radius ) // "┐"
                                ctx_relations.lineTo( _ex, _ey )
                            } else {
                                ctx_relations.quadraticCurveTo( _ex, _sy, _ex, _ey ) // "┐"
                            }
                            break
                        case /^rb$/i.test( _curveType[_ba] ): // "(_sx,_sy)┘(_ex,_ey)"
                            ctx_relations.moveTo( _sx, _sy )
                            if ( Math.abs( _ex - _sx ) > _radius ) {
                                ctx_relations.lineTo( _ex - _radius, _sy ) // "─"
                            }
                            if ( Math.abs( _sy - _ey ) > _radius ) {
                                ctx_relations.quadraticCurveTo( _ex, _sy, _ex, _sy - _radius ) // "┘"
                                ctx_relations.lineTo( _ex, _ey )
                            } else {
                                ctx_relations.quadraticCurveTo( _ex, _sy, _ex, _ey ) // "┘"
                            }
                            break
                        case /^lt\+lb$/i.test( _curveType[_ba] ): // "⊂＿"
                        case /^lb\+lt$/i.test( _curveType[_ba] ): // "⊂￣"
                            ctx_relations.moveTo( _sx, _sy )
                            //ctx_relations.lineTo( _sx - _subRadius, _sy ) // "─"
                            ctx_relations.lineTo( _sx - _radius, _sy ) // "─"
                            //ctx_relations.bezierCurveTo( _sx - _subRadius - _radius, _sy, _sx - _subRadius - _radius, _ey, _sx - _subRadius, _ey ) // "⊂"
                            ctx_relations.bezierCurveTo( _sx - _radius * 2, _sy, _sx - _radius * 2, _ey, _sx - _radius, _ey ) // "⊂"
                            ctx_relations.lineTo( _ex, _ey ) // "─"
                            break
                        case /^rt\+rb$/i.test( _curveType[_ba] ): // "＿⊃"
                        case /^rb\+rt$/i.test( _curveType[_ba] ): // "￣⊃"
                            ctx_relations.moveTo( _sx, _sy )
                            //ctx_relations.lineTo( _sx + _subRadius, _sy ) // "─"
                            ctx_relations.lineTo( _sx + _radius, _sy ) // "─"
                            //ctx_relations.bezierCurveTo( _sx + _subRadius + _radius, _sy, _sx + _subRadius + _radius, _ey, _sx + _subRadius, _ey ) // "⊃"
                            ctx_relations.bezierCurveTo( _sx + _radius * 2, _sy, _sx + _radius * 2, _ey, _sx + _radius, _ey ) // "⊃"
                            ctx_relations.lineTo( _ex, _ey ) // "─"
                            break
                    }
                } else {
                    ctx_relations.moveTo( _sx, _sy )
                    ctx_relations.lineTo( _ex, _ey )
                }
                //ctx_relations.closePath()
                ctx_relations.stroke()
            }
        
        ctx_relations.clearRect( 0, 0, _canvas[0].width, _canvas[0].height )
//console.log( '!_drawRelationLine:', _props, events, _canvas )
        events.forEach( ( evt ) => {
            let _rel = evt.relation,
                _sx, _sy, _ex, _ey, 
                _targetId, _targetEvent
            
            if ( _rel.hasOwnProperty( 'before' ) ) {
                // before: targetEvent[ _ex, _ey ] <---- selfEvent[ _sx, _sy ]
                // (:> before: 自分を起点（ _sx, _sy ）として左方向の連結点（ _ex, _ey ）へ向かう描画方式
                _sx = _rel.x
                _sy = _rel.y
                _targetId = parseInt( _rel.before, 10 )
                if ( _targetId < 0 ) {
                    _ex = 0
                    _ey = _sy
                } else {
                    _targetEvent = events.find( ( _evt ) => parseInt( _evt.eventId, 10 ) == _targetId )
                    if ( ! this.is_empty( _targetEvent ) && _targetEvent.relation ) {
                        _ex = _targetEvent.relation.x < 0 ? 0 : _targetEvent.relation.x
                        _ey = _targetEvent.relation.y
                    }
                }
                if ( _sx >= 0 && _sy >= 0 && _ex >= 0 && _ey >= 0 ) {
                    drawLine( _sx, _sy, _ex, _ey, evt, 'before' )
                }
            }
            if ( _rel.hasOwnProperty( 'after' ) ) {
                // after: selfEvent[ _sx, _sy ] ----> targetEvent[ _ex, _ey ]
                // (:> after: 自分を起点（ _sx, _sy ）として右方向の連結点（ _ex, _ey ）へ向かう描画方式
                _sx = _rel.x
                _sy = _rel.y
                _targetId = parseInt( _rel.after, 10 )
                if ( _targetId < 0 ) {
                    _ex = _props.fullwidth
                    _ey = _sy
                } else {
                    _targetEvent = events.find( ( _evt ) => parseInt( _evt.eventId, 10 ) == _targetId )
                    if ( ! this.is_empty( _targetEvent ) && _targetEvent.relation ) {
                        _ex = _targetEvent.relation.x > _props.fullwidth ? _props.fullwidth : _targetEvent.relation.x
                        _ey = _targetEvent.relation.y
                    }
                }
                if ( _sx >= 0 && _sy >= 0 && _ex >= 0 && _ey >= 0 ) {
                    drawLine( _sx, _sy, _ex, _ey, evt, 'after' )
                }
            }
            
        })
        
    }
    
    /*
     * @private: Retrieve the mapping data that placed current events
     */
    _mapPlacedEvents() {
        let _that      = this,
            _tl_events = $(this._element).find( Selector.TIMELINE_EVENTS ).children(),
            _cache     = null,
            _events    = []
        
        if ( this._isCached && ( 'sessionStorage' in window ) && ( window.sessionStorage !== null ) ) {
            _cache = JSON.parse( sessionStorage.getItem( this._selector ) )
        }
        
        _tl_events.each(function() {
            let _uid  = $(this).data( 'uid' ),
                _data = null
            
            if ( _cache ) {
                _data = _cache.find( ( _evt ) => _evt.uid === _uid ) || null
            } else {
                _data = $(this).data()
            }
            
            if ( ! _that.is_empty( _data ) ) {
                _events.push( _data )
            }
        })
//console.log( '!_mapPlacedEvents:', _events )
        
        return _events
    }
    
    /*
     * @private: Event when focus or blur
     */
    _activeEvent( event ) {
// console.log( '!_activeEvent:', event )
        let _elem = event.target
        
        if ( 'focusin' === event.type ) {
            $( Selector.TIMELINE_EVENT_NODE ).removeClass( 'active' )
            $(_elem).addClass( 'active' )
        } else
        if ( 'focusout' === event.type ) {
            $(_elem).removeClass( 'active' )
        }
    }
    
    /*
     * @private: Event when hover on the pointer type event
     */
    _hoverPointer( event ) {
        let _props = this._instanceProps,
            _elem  = event.target,
            _base  = {
                left  : $(_elem).data( 'baseLeft' ),
                top   : $(_elem).data( 'baseTop' ),
                width : $(_elem).data( 'baseSize' )
            },
            _x     = _base.left,
            _y     = _base.top,
            _w     = _base.width,
            _z     = 5
        
//console.log( '!_hoverPointer:', _props )
        if ( 'mouseenter' === event.type ) {
            _w = Math.max( this.numRound( _w * 1.2, 'ceil' ), Math.min( _props.rowSize, _props.scaleSize ) )
            _x = this.numRound( _x - ( ( _w - _base.width ) / 2 ), 2 )
            _y = this.numRound( _y - ( ( _w - _base.width ) / 2 ), 2 )
            _z = 9
            $(_elem).trigger( Event.FOCUSIN_EVENT )
        } else {
            $(_elem).trigger( Event.FOCUSOUT_EVENT )
        }
        $(_elem).css( 'left', `${_x}px` ).css( 'top', `${_y}px` ).css( 'width', `${_w}px` ).css( 'height', `${_w}px` ).css( 'z-index', _z )
    }
    
    /*
     * @private: Echo the log of plugin for debugging
     */
    _debug( message, throwType = 'Notice' ) {
        if ( ! this._config.debug ) {
            return
        }
        message = this.supplement( null, message )
        if ( message ) {
            let _msg = typeof $(this._element).data( DATA_KEY )[message] !== 'undefined' ? `Called method "${message}".` : message,
                _sty = /^Called method "/.test(_msg) ? 'font-weight:600;color:blue;' : '',
                _rst = ''
            
            if ( window.console && window.console.log ) {
                if ( throwType === 'Notice' ) {
                    window.console.log( '%c%s%c', _sty, _msg, _rst )
                } else {
                    throw new Error( `${_msg}` )
                }
            }
        }
    }
    
    // Public
    
    /*
     * @public: This method is able to call only once after completed an initializing of the plugin
     */
    initialized( ...args ) {
        let _message = this._isInitialized ? 'Skipped because method "initialized" already has been called once' : 'initialized'
        this._debug( _message )
        
        let _elem    = this._element,
            _opts    = this._config,
            _args    = args[0],
            callback = _args.length > 0 && typeof _args[0] === 'function' ? _args[0] : null,
            userdata = _args.length > 1 ? _args.slice(1) : null
        
// console.log( '!initialized:', callback, userdata )
        if ( callback && ! this._isInitialized ) {
            this._debug( 'Fired your callback function after initializing this plugin.' )
            
            callback( _elem, _opts, userdata )
        }
        
        this._isInitialized = true
        
    }
    
    /*
     * @public: Destroy the object to which the plugin is applied
     */
    destroy() {
        this._debug( 'destroy' )
        
        $.removeData( this._element, DATA_KEY )
        
        $(window, document, this._element).off( EVENT_KEY )
        
        $(this._element).remove()
        
        // Remove the cached data on the session storage (:> セッションストレージ上にキャッシュしているデータを削除
        if ( ( 'sessionStorage' in window ) && ( window.sessionStorage !== null ) && this._isCached ) {
            sessionStorage.removeItem( this._selector )
        }
        
        for ( let _prop in this ) {
            this[_prop] = null
            delete this[_prop]
        }
    }
    
    /*
     * @public: This method has been deprecated since version 2.0.0
     */
    render() {
        throw new ReferenceError( 'This method named "render" has been deprecated since version 2.0.0' )
    }
    
    /*
     * @public: Show hidden timeline
     */
    show() {
        this._debug( 'show' )
        
        let _elem = this._element
        
        if ( ! this._isShown ) {
            $(_elem).removeClass( ClassName.HIDE )
            
            this._isShown = true
        }
    }
    
    /*
     * @public: Hide shown timeline
     */
    hide() {
        this._debug( 'hide' )
        
        let _elem = this._element
        
        if ( this._isShown ) {
            $(_elem).addClass( ClassName.HIDE )
            
            this._isShown = false
        }
    }
    
    /*
     * @public: 
     */
    dateback() {
        this._debug( 'dateback' )
        
    }
    
    /*
     * @public: 
     */
    dateforth() {
        this._debug( 'dateforth' )
        
    }
    
    /*
     * @public: Move the display position of the timeline container to the specified position
     */
    alignment( position ) {
        this._debug( 'alignment' )
        
        let _opts         = this._config,
            _props        = this._instanceProps,
            _elem         = this._element,
            _tl_container = $(_elem).find( Selector.TIMELINE_CONTAINER ),
            _movX         = 0
        
        position = this.is_array( position ) ? position[0] : _opts.rangeAlign
        
        if ( _props.fullwidth <= _elem.scrollWidth ) {
            return
        }
        
        switch ( true ) {
            case /^(left|begin)$/i.test( position ):
                _movX = 0
                break
            case /^center$/i.test( position ):
                _movX = ( _tl_container[0].scrollWidth - _elem.scrollWidth ) / 2 + 1
                break
            case /^(right|end)$/i.test( position ):
                _movX = _tl_container[0].scrollWidth - _elem.scrollWidth + 1
                break
            case /^latest$/i.test( position ): {
                let events    = this._mapPlacedEvents().sort( this.compareValues( 'x' ) ),
                    lastEvent = events[events.length - 1]
                
                _movX = ! this.is_empty( lastEvent ) ? lastEvent.x : 0
                
// console.log( events, lastEvent, _movX, _elem.scrollWidth / 2 )
                // Centering
                if ( _elem.scrollWidth / 2 < _movX ) {
                    _movX -= Math.ceil( _elem.scrollWidth / 2 )
                } else {
                    _movX = 0
                }
                
                // Focus target event
                $(`${Selector.TIMELINE_EVENT_NODE}[data-uid="${lastEvent.uid}"]`).trigger( Event.FOCUSIN_EVENT )
                
                break
            }
            case /^\d{1,}$/.test( position ): {
                let events      = this._mapPlacedEvents(),
                    targetEvent = {}
                
                if ( events.length > 0 ) {
                    targetEvent = events.find( ( evt ) => evt.eventId == parseInt( position, 10 ) )
                }
                _movX = ! this.is_empty( targetEvent ) ? targetEvent.x : 0
                
                // Centering
                if ( Math.ceil( _elem.scrollWidth / 2 ) < _movX ) {
                    _movX -= Math.ceil( _elem.scrollWidth / 2 )
                } else {
                    _movX = 0
                }
                
                // Focus target event
                $(`${Selector.TIMELINE_EVENT_NODE}[data-uid="${targetEvent.uid}"]`).trigger( Event.FOCUSIN_EVENT )
                
                break
            }
            case /^current(|ly)|now$/i.test( position ):
            default: {
                let _now  = new Date().toString(),
                    _nowX = this.numRound( this._getCoordinateX( _now ), 2 )
                
                if ( _nowX >= 0 ) {
                    if ( _tl_container[0].scrollWidth - _elem.scrollWidth + 1 < _nowX ) {
                        _movX = _tl_container[0].scrollWidth - _elem.scrollWidth + 1
                    } else {
                        _movX = _nowX
                    }
                } else {
                    _movX = 0
                }
                break
            }
        }
//console.log( `!alignment::${position}:`, _props.fullwidth, _props.visibleWidth, _tl_container[0].scrollWidth, _tl_container[0].scrollLeft, _movX )
        
        _tl_container.scrollLeft( _movX )
    }
    
    /*
     * @public: This method has been deprecated since version 2.0.0
     */
    getOptions() {
        throw new ReferenceError( 'This method named "getOptions" has been deprecated since version 2.0.0' )
    }
    
    /*
     * @public: Add new events to the rendered timeline object
     */
    addEvent( ...args ) {
        this._debug( 'addEvent' )
        
        let _args        = args[0],
            events       = this.supplement( null, _args[0], this.validateArray ),
            callback     = _args.length > 1 && typeof _args[1] === 'function' ? _args[1] : null,
            userdata     = _args.length > 2 ? _args.slice(2) : null,
            _cacheEvents = [],
            lastEventId  = 0
        
        if ( this.is_empty( events ) || ! this._isCompleted ) {
            return
        }
        
        if ( this._isCached && ( 'sessionStorage' in window ) && ( window.sessionStorage !== null ) ) {
            _cacheEvents = JSON.parse( sessionStorage.getItem( this._selector ) )
        }
        
        if ( ! this.is_empty( _cacheEvents ) ) {
            _cacheEvents.sort( this.compareValues( 'eventId' ) )
            lastEventId = parseInt( _cacheEvents[_cacheEvents.length - 1].eventId, 10 )
        }
//console.log( '!addEvent::before:', _cacheEvents, lastEventId, callback, userdata )
        
        events.forEach( ( evt ) => {
            let _one_event = this._registerEventData( '<div></div>', evt )
            
            _one_event.eventId = Math.max( lastEventId + 1, parseInt( _one_event.eventId, 10 ) )
            _cacheEvents.push( _one_event )
            lastEventId = parseInt( _one_event.eventId, 10 )
        })
//console.log( '!addEvent::after:', _cacheEvents, lastEventId, callback, userdata )
        // Cache the event data to the session storage (:> イベントデータをセッションストレージへキャッシュ
        if ( ( 'sessionStorage' in window ) && ( window.sessionStorage !== null ) ) {
            sessionStorage.setItem( this._selector, JSON.stringify( _cacheEvents ) )
        }
        
        this._placeEvent()
        
        if ( callback ) {
            this._debug( 'Fired your callback function after replacing events.' )
            
            callback( this._element, this._config, userdata )
        }
    }
    
    /*
     * @public: Remove events from the currently timeline object
     */
    removeEvent( ...args ) {
        this._debug( 'removeEvent' )
        
        let _args        = args[0],
            targets      = this.supplement( null, _args[0], this.validateArray ),
            callback     = _args.length > 1 && typeof _args[1] === 'function' ? _args[1] : null,
            userdata     = _args.length > 2 ? _args.slice(2) : null,
            _cacheEvents = [],
            condition    = {}
        
        if ( this.is_empty( targets ) || ! this._isCompleted ) {
            return
        }
        
        if ( this._isCached && ( 'sessionStorage' in window ) && ( window.sessionStorage !== null ) ) {
            _cacheEvents = JSON.parse( sessionStorage.getItem( this._selector ) )
        }
        
        if ( this.is_empty( _cacheEvents ) ) {
            return
        }
        
        targets.forEach( ( cond ) => {
            switch ( true ) {
                case /^\d{1,}$/.test( cond ):
                    // By matching event ID
                    condition.type  = 'eventId'
                    condition.value = parseInt( cond, 10 )
                    break
                case /^(|\d{1,}(-|\/)\d{1,2}(-|\/)\d{1,2}(|\s\d{1,2}:\d{1,2}(|:\d{1,2})))(|,\d{1,}(-|\/)\d{1,2}(-|\/)\d{1,2}(|\s\d{1,2}:\d{1,2}(|:\d{1,2})))$/.test( cond ): {
                    // By matching range of datetime
                    let _tmp = cond.split(',')
                    
                    condition.type  = 'daterange'
                    condition.value = {}
                    condition.value['from'] = this.is_empty( _tmp[0] ) ? null : new Date( _tmp[0] )
                    condition.value['to']   = this.is_empty( _tmp[1] ) ? null : new Date( _tmp[1] )
                    break
                }
                default:
                    // By matching regex string
                    condition.type  = 'regex'
                    condition.value = new RegExp( cond )
                    break
            }
            _cacheEvents.forEach( ( evt, _idx ) => {
                switch ( condition.type ) {
                    case 'eventId':
                        if ( parseInt( evt.eventId, 10 ) == condition.value ) {
//console.log( `!removeEvent::${condition.type}:${condition.value}:`, _cacheEvents[_idx] )
                            _cacheEvents.splice( _idx, 1 )
                        }
                        break
                    case 'daterange': {
//console.log( condition.value )
                        let _fromX = condition.value.from ? Math.ceil( this._getCoordinateX( condition.value.from.toString() ) ) : 0,
                            _toX   = condition.value.to   ? Math.floor( this._getCoordinateX( condition.value.to.toString() ) ) : _fromX
                        
                        if ( _fromX <= evt.x && evt.x <= _toX ) {
//console.log( `!removeEvent::${condition.type}:${condition.value.from} ~ ${condition.value.to}:`, _fromX, _toX, evt.x )
                            _cacheEvents.splice( _idx, 1 )
                        }
                        break
                    }
                    case 'regex':
//console.log( `!removeEvent::${condition.type}:${condition.value}:`, JSON.stringify( evt ) )
                        if ( condition.value.test( JSON.stringify( evt ) ) ) {
                            _cacheEvents.splice( _idx, 1 )
                        }
                        break
                }
            })
        })
//console.log( `!removeEvent::after:`, _cacheEvents )
        // Cache the event data to the session storage (:> イベントデータをセッションストレージへキャッシュ
        if ( ( 'sessionStorage' in window ) && ( window.sessionStorage !== null ) ) {
            sessionStorage.setItem( this._selector, JSON.stringify( _cacheEvents ) )
        }
        
        this._placeEvent()
        
        if ( callback ) {
            this._debug( 'Fired your callback function after placing additional events.' )
            
            callback( this._element, this._config, userdata )
        }
    }
    
    /*
     * @public: Update events on the currently timeline object
     */
    updateEvent( ...args ) {
        this._debug( 'updateEvent' )
        
        let _args        = args[0],
            events       = this.supplement( null, _args[0], this.validateArray ),
            callback     = _args.length > 1 && typeof _args[1] === 'function' ? _args[1] : null,
            userdata     = _args.length > 2 ? _args.slice(2) : null,
            _cacheEvents = []
        
        if ( this.is_empty( events ) || ! this._isCompleted ) {
            return
        }
        
        if ( this._isCached && ( 'sessionStorage' in window ) && ( window.sessionStorage !== null ) ) {
            _cacheEvents = JSON.parse( sessionStorage.getItem( this._selector ) )
        }
        
        if ( this.is_empty( _cacheEvents ) ) {
            return
        }
        
        
    }
    
    /*
     * @public: The method that fires when an event on the timeline is clicked (:> タイムライン上のイベントがクリックされた時に発火
     *
     * Note: You can hook the custom processing with the callback specified in the event parameter. (:> イベントパラメータに指定したコールバックでカスタム処理をフックできます
     */
    openEvent( event ) {
        this._debug( 'openEvent' )
        
        let _that     = this,
            _opts     = this._config,
            _cached   = this._isCached,
            _selector = this._selector,
            _self     = event.target,
            $viewer   = $(document).find( Selector.EVENT_VIEW ),
            //eventId   = parseInt( $(_self).attr( 'id' ).replace( 'evt-', '' ), 10 ),
            uid       = $(_self).data( 'uid' ),
            //meta      = this.supplement( null, $(_self).data( 'meta' ) ),
            callback  = this.supplement( null, $(_self).data( 'callback' ) )
//console.log( '!openEvent:', _self, $viewer, eventId, uid, meta, callback )
        
        if ( $viewer.length > 0 ) {
            $viewer.each(function() {
                let _cacheEvents = null,
                    _eventData   = null,
                    _label       = $('<div></div>', { class: ClassName.VIEWER_EVENT_TITLE }),
                    _content     = $('<div></div>', { class: ClassName.VIEWER_EVENT_CONTENT }),
                    _meta        = $('<div></div>', { class: ClassName.VIEWER_EVENT_META }),
                    _image       = $('<div></div>', { class: ClassName.VIEWER_EVENT_IMAGE_WRAPPER })
                
                if ( _cached && ( 'sessionStorage' in window ) && ( window.sessionStorage !== null ) ) {
                    _cacheEvents = JSON.parse( sessionStorage.getItem( _selector ) )
                    _eventData = _cacheEvents.find( ( event ) => event.uid === uid )
                }
//console.log( '!openEvent:', $(this), $(_self).html(), _eventData.label )
                
                $(this).empty() // Initialize Viewer
                if ( ! _that.is_empty( _eventData.image ) ) {
                    _image.append( `<img src="${_eventData.image}" class="${ClassName.VIEWER_EVENT_IMAGE}" />` )
                    $(this).append( _image )
                }
                if ( ! _that.is_empty( _eventData.label ) ) {
                    _label.html( _eventData.label )
                    $(this).append( _label )
                }
                if ( ! _that.is_empty( _eventData.content ) ) {
                    _content.html( _eventData.content )
                    $(this).append( _content )
                }
                if ( ! _that.is_empty( _eventData.rangeMeta ) ) {
                    _meta.html( _eventData.rangeMeta )
                    $(this).append( _meta )
                }
                
            })
        }
        
        if ( callback ) {
            if ( _opts.debug ) {
                this._debug( `The callback "${callback}" was called by the "openEvent" method.` )
            }
            try {
                Function.call( null, `return ${callback}` )()
            } catch ( e ) {
                throw new TypeError( e )
            }
        }
    }
    
    /* ----------------------------------------------------------------------------------------------------------------
     * Utility Api
     * ----------------------------------------------------------------------------------------------------------------
     */
    
    /*
     * Determine empty that like PHP (:> PHPライクな空判定メソッド
     *
     * @param mixed value (required)
     *
     * @return bool
     */
    is_empty( value ) {
        if ( value == null ) {
            // typeof null -> object : for hack a bug of ECMAScript
            // Refer: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/typeof
            return true
        }
        switch ( typeof value ) {
            case 'object':
                if ( Array.isArray( value ) ) {
                    // When object is array:
                    return ( value.length === 0 )
                } else {
                    // When object is not array:
                    if ( Object.keys( value ).length > 0 || Object.getOwnPropertySymbols( value ).length > 0 ) {
                        return false
                    } else
                    if ( value.valueOf().length !== undefined ) {
                        return ( value.valueOf().length === 0 )
                    } else
                    if ( typeof value.valueOf() !== 'object' ) {
                        return this.is_empty( value.valueOf() )
                    } else {
                        return true
                    }
                }
            case 'string':
                return ( value === '' )
            case 'number':
                return ( value == 0 )
            case 'boolean':
                return ! value
            case 'undefined':
            case 'null':
                return true
            case 'symbol': // Since ECMAScript6
            case 'function':
            default:
                return false
        }
    }
    
    /*
     * Determine whether variable is an array (:> 変数が配列かどうかを調べる
     *
     * @param mixed val (required)
     *
     * @return bool
     */
    is_array( val ) {
        return Object.prototype.toString.call( val ) === '[object Array]'
    }
    
    /*
     * Await until next process at specific millisec (:> 指定ミリ秒でスリープ
     *
     * @param int msec (optional; defaults to 1)
     *
     * @return void
     */
    sleep( msec = 1 ) {
        return new Promise( ( resolve ) => {
            setTimeout( resolve, msec )
        })
    }
    
    /*
     * Supplemental method for validating arguments in local scope (:> ローカルスコープ内で引数を検証するための補助メソッド
     *
     * @param mixed default_value (required)
     * @param mixed opt_arg (optional)
     * @param mixed opt_callback (optional; function or string of function to call)
     *
     * @return mixed
     */
    supplement( default_value, opt_arg, opt_callback ) {
        if ( opt_arg === undefined ) {
            return default_value
        }
        if ( opt_callback === undefined ) {
            return opt_arg
        }
        return opt_callback( default_value, opt_arg )
    }
    
    /*
     * Generate the pluggable unique id (:> プラガブルな一意のIDを生成する
     *
     * @param int digit (optional)
     *
     * @return string
     */
    generateUniqueID( digit = 1000 ) {
        return new Date().getTime().toString(16) + Math.floor( digit * Math.random() ).toString(16)
    }
    
    /*
     * Round a number with specific digit (:> 桁指定して数値を丸める
     *
     * @param numeric number (required)
     * @param int digit (optional)
     * @param string round_type (optional; defaults to "round")
     *
     * @return numeric
     */
    numRound( number, digit, round_type = 'round' ) {
        digit  = this.supplement( 0, digit, this.validateNumeric )
        let _pow = Math.pow( 10, digit )
        
       switch ( true ) {
            case /^ceil$/i.test( round_type ):
                return Math.ceil( number * _pow ) / _pow
            case /^floor$/i.test( round_type ):
                return Math.floor( number * _pow ) / _pow
            case /^round$/i.test( round_type ):
            default:
                return Math.round( number * _pow ) / _pow
        }
    }
    
    /*
     * Convert hex of color code to rgba (:> カラーコードのHEX値をRGBA値へ変換する
     *
     * @param string hex (required)
     * @param float alpha (optional; defaults to 1)
     *
     * @return string
     */
    hexToRgbA( hex, alpha = 1 ) {
        let _c
        
        if ( /^#([A-Fa-f0-9]{3}){1,2}$/.test( hex ) ) {
            _c = hex.substring(1).split('')
            if ( _c.length == 3 ) {
                _c= [ _c[0], _c[0], _c[1], _c[1], _c[2], _c[2] ]
            }
            _c = `0x${_c.join('')}`
            return `rgba(${[ (_c >> 16) & 255, (_c >> 8) & 255, _c & 255 ].join(',')},${alpha})`
        }
        // throw new Error( 'Bad Hex' )
        return hex
    }
    
    /*
     * Get the correct datetime with remapping to that if the year is 0 - 99 (:> 年が0～99の場合に再マッピングして正確な日時を取得する
     *
     * @param string datetime_str (required)
     *
     * @return Date Object, or null if failed
     */
    getCorrectDatetime( datetime_str ) {
        let normalizeDate = ( dateString ) => dateString.replace(/-/g, '/') // For Safari, IE
        
        if ( isNaN( Date.parse( normalizeDate( datetime_str ) ) ) ) {
            console.warn( `"${datetime_str}" Cannot parse date because invalid format.` )
            return null
        }
        let _tempDate = new Date( normalizeDate( datetime_str ) ),
            _chk_date = datetime_str.split( /-|\// )
        
        if ( parseInt( _chk_date[0], 10 ) < 100 ) {
            // Remapping if year is 0-99
            _tempDate.setFullYear( parseInt( _chk_date[0], 10 ) )
        }
        
        return _tempDate
    }
    
    /*
     * Method to get week number as extension of Date object (:> Dateオブジェクトで週番号を取得する拡張メソッド
     *
     * @param string date_str (required)
     *
     * @return int
     */
    getWeek( date_str ) {
        let targetDate     = new Date( date_str ),
            _onejan        = new Date( targetDate.getFullYear(), 0, 1 ),
            _millisecInDay = 24 * 60 * 60 * 1000
        
        return Math.ceil( ( ( ( targetDate - _onejan ) / _millisecInDay ) + _onejan.getDay() + 1 ) / 7 )
    }
    
    /*
     * Retrieve one higher scale (:> 一つ上のスケールを取得する
     *
     * @param string scale (required)
     *
     * @return string higher_scale
     */
    getHigherScale( scale ) {
        let higher_scale = scale
        
        switch ( true ) {
            case /^millisec(|ond)s?$/i.test( scale ):
                higher_scale = 'second'
                break
            case /^seconds?$/i.test( scale ):
                higher_scale = 'minute'
                break
            case /^minutes?$/i.test( scale ):
                higher_scale = 'hour'
                break
            case /^quarter-?(|hour)$/i.test( scale ):
            case /^half-?(|hour)$/i.test( scale ):
            case /^hours?$/i.test( scale ):
                higher_scale = 'day'
                break
            case /^days?$/i.test( scale ):
            case /^weeks?$/i.test( scale ):
                higher_scale = 'month'
                break
            case /^months?$/i.test( scale ):
                higher_scale = 'year'
                break
            case /^years?$/i.test( scale ):
                higher_scale = 'lustrum'
                break
            case /^lustrum$/i.test( scale ):
                higher_scale = 'decade'
                break
            case /^dec(ade|ennium)$/i.test( scale ):
                higher_scale = 'century'
                break
            case /^century$/i.test( scale ):
                higher_scale = 'millennium'
                break
            case /^millenniums?|millennia$/i.test( scale ):
            default:
                break
        }
        return higher_scale
    }
    
    /*
     * Retrieve the date string of specified locale (:> 指定されたロケールの日付文字列を取得する
     *
     * @param string date_seed (required)
     * @param string scale (required)
     * @param string locales (optional)
     * @param object options (optional)
     *
     * @return string locale_string
     */
    getLocaleString( date_seed, scale, locales = 'en-US', options = {} ) {
        function toLocaleStringSupportsLocales() {
            try {
                new Date().toLocaleString( 'i' )
            } catch ( e ) {
                return e.name === "RangeError";
            }
            return false;
        }
        let is_toLocalString = toLocaleStringSupportsLocales(),
            locale_string = '',
            _options = {},
            getOrdinal = ( n ) => {
                let s = [ 'th', 'st', 'nd', 'rd' ], v = n % 100
                return n + ( s[(v - 20)%10] || s[v] || s[0] )
            },
            getZerofill = ( num, digit = 4 ) => {
                let strDuplicate = ( n, str ) => Array( n + 1 ).join( str ),
                    zero = strDuplicate( digit - 1, '0' )
                
                return String( num ).length == digit ? String( num ) : ( zero + num ).substr( num * -1 )
            },
            _prop, _temp
        
        for ( _prop in options ) {
            if ( _prop === 'timeZone' || _prop === 'hour12' ) {
                _options[_prop] = options[_prop]
            }
        }
//console.log( '!2', date_seed, scale, locales, options[scale], is_toLocalString )
        
        switch ( true ) {
            case /^millenniums?|millennia$/i.test( scale ):
            case /^century$/i.test( scale ):
            case /^dec(ade|ennium)$/i.test( scale ):
            case /^lustrum$/i.test( scale ):
                if ( options.hasOwnProperty( scale ) && options[scale] === 'ordinal' ) {
                    locale_string = getOrdinal( date_seed )
                } else {
                    locale_string = date_seed
                }
                break
            case /^years?$/i.test( scale ):
                if ( is_toLocalString && options.hasOwnProperty( scale ) ) {
                    if ( [ 'numeric', '2-digit' ].includes( options[scale] ) ) {
                        _options.year = options[scale]
                        locale_string = this.getCorrectDatetime( date_seed ).toLocaleString( locales, _options )
                    } else
                    if ( 'zerofill' === options[scale] ) {
                        locale_string = getZerofill( date_seed )
                    }
                }
                locale_string = this.is_empty( locale_string ) ? this.getCorrectDatetime( date_seed ).getFullYear() : locale_string
                break
            case /^months?$/i.test( scale ):
                if ( is_toLocalString && options.hasOwnProperty( scale ) ) {
                    if ( [ 'numeric', '2-digit', 'narrow', 'short', 'long' ].includes( options[scale] ) ) {
                        _options.month = options[scale]
                        locale_string = new Date( date_seed ).toLocaleString( locales, _options )
                        //locale_string = this.getCorrectDatetime( date_seed ).toLocaleString( locales, _options )
                    }
                }
                //locale_string = new Date( date_seed ).getMonth() + 1
                locale_string = this.is_empty( locale_string ) ? new Date( date_seed ).getMonth() + 1 : locale_string
                break
            case /^weeks?$/i.test( scale ):
                _temp = date_seed.split(',')
                if ( options.hasOwnProperty( scale ) && options[scale] === 'ordinal' ) {
                    locale_string = getOrdinal( _temp )
                } else {
                    locale_string = _temp[1]
                }
                break
            case /^weekdays?$/i.test( scale ):
                _temp = date_seed.split(',')
                if ( is_toLocalString ) {
                    _options.weekday = options.hasOwnProperty('weekday') ? options.weekday : 'narrow'
                    locale_string = new Date( _temp[0] ).toLocaleString( locales, _options )
                    //locale_string = this.getCorrectDatetime( _temp[0] ).toLocaleString( locales, _options )
                } else {
                    let _weekday = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]
                    locale_string = _weekday[_temp[1]]
                }
                break
            case /^days?$/i.test( scale ):
                if ( is_toLocalString ) {
                    _options.day = options.hasOwnProperty('day') ? options.day : 'numeric'
                    locales = options.hasOwnProperty('day') ? locales : 'en-US'
                    locale_string = new Date( date_seed ).toLocaleString( locales, _options )
                    //locale_string = this.getCorrectDatetime( date_seed ).toLocaleString( locales, _options )
                } else {
                    locale_string = new Date( date_seed ).getDate()
                    //locale_string = this.getCorrectDatetime( date_seed ).getDate()
                }
                break
            case /^hours?$/i.test( scale ):
            case /^(half|quarter)-?hours?$/i.test( scale ):
// console.log( '!getLocaleString:', date_seed )
                if ( typeof date_seed === 'string' ) {
                    let _parts = date_seed.split(':')
                    if ( _parts.length == 1 ) {
                        date_seed = `${date_seed}:00:00`
                    } else
                    if ( _parts.length == 2 ) {
                        date_seed = `${date_seed}:00`
                    }
                }
                if ( is_toLocalString ) {
                    _options.hour = options.hasOwnProperty('hour') ? options.hour : 'numeric'
                    if ( options.hasOwnProperty('minute') ) {
                        _options.minute = options.hasOwnProperty('minute') ? options.minute : 'numeric'
                    }
                    locale_string = new Date( date_seed ).toLocaleString( locales, _options )
                    //locale_string = this.getCorrectDatetime( date_seed ).toLocaleString( locales, _options )
                } else {
                    locale_string = new Date( date_seed ).getHours()
                    //locale_string = this.getCorrectDatetime( date_seed ).getHours()
                }
                break
            case /^minutes?$/i.test( scale ):
                if ( is_toLocalString ) {
                    _options.minute = options.hasOwnProperty('minute') ? options.minute : 'numeric'
                    if ( options.hasOwnProperty('hour') ) {
                        _options.hour   = options.hasOwnProperty('hour') ? options.hour : 'numeric'
                    }
                    locale_string = new Date( date_seed ).toLocaleString( locales, _options )
                    //locale_string = this.getCorrectDatetime( date_seed ).toLocaleString( locales, _options )
                } else {
                    locale_string = new Date( date_seed ).getMinutes()
                    //locale_string = this.getCorrectDatetime( date_seed ).getMinutes()
                }
                break
            case /^seconds?$/i.test( scale ):
                if ( is_toLocalString ) {
                    _options.second = options.hasOwnProperty('second') ? options.second : 'numeric'
                    if ( options.hasOwnProperty('hour') ) {
                        _options.hour   = options.hasOwnProperty('hour') ? options.hour : 'numeric'
                    }
                    if ( options.hasOwnProperty('minute') ) {
                        _options.minute = options.hasOwnProperty('minute') ? options.minute : 'numeric'
                    }
                    locale_string = new Date( date_seed ).toLocaleString( locales, _options )
                    //locale_string = this.getCorrectDatetime( date_seed ).toLocaleString( locales, _options )
                } else {
                    locale_string = new Date( date_seed ).getSeconds()
                    //locale_string = this.getCorrectDatetime( date_seed ).getSeconds()
                }
                break
            case /^millisec(|ond)s?$/i.test( scale ):
            default:
                locale_string = new Date( date_seed )
                //locale_string = this.getCorrectDatetime( date_seed )
                break
        }
        return locale_string
    }
    
    /*
     * Get the rendering width of the given string (:> 指定された文字列のレンダリング幅を取得する
     *
     * @param string str (required)
     *
     * @return int
     */
    strWidth( str ) {
        let _str_ruler = $( '<span id="jqtl-str-ruler"></span>' ),
            _width     = 0
        if ( $('#jqtl-str-ruler').length == 0 ) {
            $('body').append( _str_ruler )
        }
        _width = $('#jqtl-str-ruler').text( str ).get(0).offsetWidth
        $('#jqtl-str-ruler').empty()
        return _width
    }
    
    /*
     * Sort an array by value of specific property (Note: destructive method) (:> 指定プロパティの値で配列をソートする（注:破壊的メソッド）
     * Usage: Object.sort( this.compareValues( property, order ) )
     *
     * @param string key (required)
     * @param string order (optional; defaults to 'asc')
     *
     * @return object
     */
    compareValues( key, order = 'asc' ) {
        return ( a, b ) => {
            if ( ! a.hasOwnProperty( key ) || ! b.hasOwnProperty( key ) ) {
                return 0
            }
            
            const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key]
            const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key]
            
            let comparison = 0
            
            if ( varA > varB ) {
                comparison = 1
            } else
            if ( varA < varB ) {
                comparison = -1
            }
            return order === 'desc' ? comparison * -1 : comparison
        }
    }
    
    /*
     * Validators
     */
    validateString( def, val ) {
        return typeof val === 'string' && val !== '' ? val : def
    }
    validateNumeric( def, val ) {
        return typeof val === 'number' ? Number( val ) : def
    }
    validateBoolean( def, val ) {
        return typeof val === 'boolean' || ( typeof val === 'object' && val !== null && typeof val.valueOf() === 'boolean' ) ? val : def
    }
    validateObject( def, val ) {
        return typeof val === 'object' ? val : def
    }
    validateArray( def, val ) {
        return Object.prototype.toString.call( val ) === '[object Array]' ? val : def
    }
    
    
    // Static
    
    static _jQueryInterface( config, ...args ) {
        return this.each(function () {
            let data = $(this).data( DATA_KEY )
            const _config = {
                ...Default,
                ...$(this).data(),
                ...typeof config === 'object' && config ? config : {}
            }
            
//console.log( '!_jQueryInterface:', data, config, args )
            if ( ! data ) {
                // Apply the plugin and store the instance in data (:> プラグインを適用する
                data = new Timeline( this, _config )
                $(this).data( DATA_KEY, data )
            }
            
            if ( typeof config === 'string' && config.charAt(0) != '_' ) {
                if ( typeof data[config] === 'undefined' ) {
                    // Call no method
                    throw new ReferenceError( `No method named "${config}"` )
                }
                // Call public method (:> （インスタンスがpublicメソッドを持っている場合）メソッドを呼び出す
                data[config]( args )
            } else {
                if ( ! data._isInitialized ) {
                    data._init()
                }
            }
        })
    }
    
} // class end


/*
 * jQuery
 */
$.fn[NAME] = Timeline._jQueryInterface
$.fn[NAME].Constructor = Timeline
$.fn[NAME].noConflict = () => {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Timeline._jQueryInterface
}
