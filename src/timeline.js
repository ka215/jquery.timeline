import "core-js/stable"
import "regenerator-runtime/runtime"

/*!
 * jQuery Timeline
 * ------------------------
 * Version: 2.1.2
 * Author: Ka2 (https://ka2.org/)
 * Repository: https://github.com/ka215/jquery.timeline
 * Lisenced: MIT
 */

/* ----------------------------------------------------------------------------------------------------------------
 * Constants
 * ----------------------------------------------------------------------------------------------------------------
 */
const NAME               = "Timeline"
const VERSION            = "2.1.2"
const DATA_KEY           = "jq.timeline"
const EVENT_KEY          = `.${DATA_KEY}`
const PREFIX             = "jqtl-"
const IS_TOUCH           = 'ontouchstart' in window
const MIN_POINTER_SIZE   = 12
const JQUERY_NO_CONFLICT = $.fn[NAME]

const Default = {
    type            : "bar",
    scale           : "day",
    startDatetime   : "currently",
    endDatetime     : "auto",
    range           : 3,
    rows            : "auto",
    rowHeight       : 48,
    width           : "auto",
    height          : "auto",
    minGridSize     : 30,
    marginHeight    : 2,
    headline        : {
        display     : true,
        title       : "",
        range       : true,
        locale      : "en-US",
        format      : { hour12: false }
    },
    sidebar         : {
        sticky      : false,
        overlay     : false,
        list        : [],
    },
    ruler           : {
        truncateLowers : false,
        top         : {
            lines      : [],
            height     : 30,
            fontSize   : 14,
            color      : "inherit",// Changed since v2.1.0, an old value is "#777777"
            background : "inherit",// Changed since v2.1.0, an old value is "#FFFFFF"
            locale     : "en-US",
            format     : { hour12: false }
        },
        bottom      : {// Added since v2.1.0 to fix #61
            lines      : [],
            height     : 30,
            fontSize   : 14,
            color      : "inherit",
            background : "inherit",
            locale     : "en-US",
            format     : { hour12: false }
        }
    },
    footer          : {
        display     : true,
        content     : "",
        range       : false,
        locale      : "en-US",
        format      : { hour12: false }
    },
    eventMeta       : {
        display     : false,
        scale       : "day",
        locale      : "en-US",
        format      : { hour12: false },
        content     : ""
    },
    eventData       : [],
    effects         : {
        presentTime : true,
        hoverEvent  : true,
        stripedGridRow : true,
        horizontalGridStyle : "dotted",
        verticalGridStyle : "solid",
    },
    //startHour       : 0, // Merge PR#37
    //endHour         : 23, // Merge PR#37
    /*
    hourPeriod      : { // Added new option inspired from PR#37; Available only if the scale is "day"( or "week")
        start       : 0,
        end         : 23,
    },
    */
    colorScheme     : { // Added new option since v2.0.0
        theme         : { // Added new option since v2.1.0
            name        : "default",
            text        : "#343A40",
            subtext     : "#707070",
            offtext     : "#BBBBBB",
            modesttext  : "#969696",
            line        : "#6C757D",
            offline     : "#DDDDDD",
            activeline  : "#DC3545",
            background  : "#FFFFFF",
            invertbg    : "#121212",
            striped1    : "#F7F7F7",
            striped2    : "#F0F0F0",
            active      : "#F73333",
            marker      : "#2C7CFF",
            gridbase    : "#333333"
        },
        event         : {
            text        : "#343A40",
            border      : "#6C757D",
            background  : "#E7E7E7"
        },
        hookEventColors : () => null, // Added instead of merging setColorEvent of PR#37 since v2.0.0
    },
    // onOpenEvent     : () => null, // Merge PR#37; (event) => null
    rangeAlign      : "latest",
    loader          : "default",
    loadingMessage  : "",
    hideScrollbar   : false,
    storage         : "session",
    reloadCacheKeep : true,
    zoom            : false,
    wrapScale       : true,
    firstDayOfWeek  : 0, // 0: Sunday, 1: Monday, ... 6: Saturday
    engine          : "canvas",
    disableLimitter : false, // Added new option since v2.1.2
    debug           : false,
    // datetimeFormat : {},       // --> Deprecated since v2.0.0
    // datetimePrefix : "",       // --> Deprecated since v2.0.0
    // duration     : 150,        // --> Deprecated since v2.0.0
    // showPointer  : true,       // --> Deprecated since v2.0.0
    // httpLanguage : false,      // --> Deprecated since v2.0.0
    // i18n         : {},         // --> Deprecated since v2.0.0
    // langsDir     : "./langs/", // --> Deprecated since v2.0.0
    // minGridPer   : 2,          // --> Deprecated since v2.0.0
    // minuteInterval : 30,       // --> Deprecated since v2.0.0
    // naviIcon     : {},         // --> Deprecated since v2.0.0
    // showHeadline : true,       // --> Deprecated since v2.0.0
    // zerofillYear   : false,    // --> Deprecated since v2.0.0
}

const LimitScaleGrids = {
    millennium  : 100,
    century     : 100 * 5,
    decade      : 10 * 50,
    lustrum     : 5 * 100,
    year        : 500,
    month       : 12 * 45,
    week        : 53 * 10,
    day         : 366,
    hour        : 24 * 30,
    quarterHour : 24 * 4 * 7.5,
    halfHour    : 24 * 2 * 15,
    minute      : 60 * 12,
    second      : 60 * 15
}

const EventParams = {
    uid       : "",
    eventId   : "",
    x         : 0,
    y         : Default.marginHeight,
    width     : Default.minGridSize,
    height    : Default.rowHeight - Default.marginHeight * 2,
    start     : "",
    end       : "",
    row       : 1,
    bgColor   : Default.colorScheme.event.background, // Modified since v2.0.0
    color     : Default.colorScheme.event.text, // Modified since v2.0.0
    bdColor   : Default.colorScheme.event.border, // Modified since v2.0.0
    label     : "",
    content   : "",
    category  : "", // Added new option since v2.0.0
    image     : "",
    margin    : Default.marginHeight,
    rangeMeta : "",
    size      : "normal",
    type      : "",
    extend    : {},
    remote    : false,
    relation  : {},
    callback() {}
}

const Event = {
    INITIALIZED        : `initialized${EVENT_KEY}`,
    HIDE               : `hide${EVENT_KEY}`,
    SHOW               : `show${EVENT_KEY}`,
    CLICK_EVENT        : `click.open${EVENT_KEY}`,
    FOCUSIN_EVENT      : `focusin.event${EVENT_KEY}`,
    FOCUSOUT_EVENT     : `focusout.event${EVENT_KEY}`,
    TOUCHSTART_TIMELINE: `mousedown.timeline${EVENT_KEY}`, // Deleted touchstart.timeline${EVENT_KEY} because never work the openEvent on touch device; since v2.0.0
    TOUCHMOVE_TIMELINE : `mousemove.timeline${EVENT_KEY}`, // Deleted touchmove.timeline${EVENT_KEY} because never work the openEvent on touch device; since v2.0.0
    TOUCHEND_TIMELINE  : `mouseup.timeline${EVENT_KEY}`, // Deleted touchend.timeline${EVENT_KEY} because never work the openEvent on touch device; since v2.0.0
    MOUSEENTER_POINTER : `mouseenter.pointer${EVENT_KEY}`,
    MOUSELEAVE_POINTER : `mouseleave.pointer${EVENT_KEY}`,
    ZOOMIN_SCALE       : `dblclick.zoom${EVENT_KEY}`
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
    PRESENT_TIME_MARKER        : `${PREFIX}present-time`,
    LOADER_CONTAINER           : `${PREFIX}loader`,
    LOADER_ITEM                : `${PREFIX}loading`
}

const Selector = {
    EVENT_NODE                : `.${PREFIX}event-node`,
    EVENT_VIEW                : `.timeline-event-view, .${PREFIX}event-view`,
    RULER_TOP                 : `.${PREFIX}ruler-top`,
    RULER_BOTTOM              : `.${PREFIX}ruler-bottom`,
    TIMELINE_CONTAINER        : `.${ClassName.TIMELINE_CONTAINER}`,
    TIMELINE_MAIN             : `.${ClassName.TIMELINE_MAIN}`,
    HEADLINE_TITLE            : `.${ClassName.HEADLINE_TITLE}`,// Added since v2.1.0
    RANGE_META                : `.${ClassName.RANGE_META}`,// Added since v2.1.0
    TIMELINE_RULER_TOP        : `.${PREFIX}ruler-top`,
    TIMELINE_EVENT_CONTAINER  : `.${ClassName.TIMELINE_EVENT_CONTAINER}`,
    TIMELINE_RULER_BOTTOM     : `.${PREFIX}ruler-bottom`,
    TIMELINE_RULER_LINES      : `.${ClassName.TIMELINE_RULER_LINES}`,// Added since v2.1.0
    TIMELINE_RULER_ITEM       : `.${ClassName.TIMELINE_RULER_ITEM}`,
    TIMELINE_RELATION_LINES   : `.${ClassName.TIMELINE_RELATION_LINES}`,
    TIMELINE_EVENTS           : `.${ClassName.TIMELINE_EVENTS}`,
    TIMELINE_SIDEBAR          : `.${ClassName.TIMELINE_SIDEBAR}`,
    TIMELINE_SIDEBAR_MARGIN   : `.${ClassName.TIMELINE_SIDEBAR_MARGIN}`,// Added since v2.1.0
    TIMELINE_SIDEBAR_ITEM     : `.${ClassName.TIMELINE_SIDEBAR_ITEM}`,
    TIMELINE_EVENT_NODE       : `.${ClassName.TIMELINE_EVENT_NODE}`,
    VIEWER_EVENT_TITLE        : `.${ClassName.VIEWER_EVENT_TITLE}`,// Added since v2.1.0
    VIEWER_EVENT_CONTENT      : `.${ClassName.VIEWER_EVENT_CONTENT}`,// Added since v2.1.0
    VIEWER_EVENT_META         : `.${ClassName.VIEWER_EVENT_META}`,// Added since v2.1.0
    VIEWER_EVENT_TYPE_POINTER : `.${ClassName.VIEWER_EVENT_TYPE_POINTER}`,
    OVERLAY                   : `.${ClassName.OVERLAY}`,// Added since v2.1.0
    PRESENT_TIME_MARKER       : `.${ClassName.PRESENT_TIME_MARKER}`,// Added since v2.1.0
    LOADER                    : `.${ClassName.LOADER_CONTAINER}`,
    LOADER_ITEM               : `.${ClassName.LOADER_ITEM}`,// Added since v2.1.0
    DEFAULT_EVENTS            : ".timeline-events"
}

const mapData = (() => {
    const storeData = {}
    let id = 1
    return {
        set( element, key, data ) {
            if ( typeof element.key === 'undefined' ) {
                element.key = { key, id }
                id++
            }

            storeData[element.key.id] = data
        },
        get( element, key ) {
            if ( ! element || typeof element.key === 'undefined' ) {
                return null
            }

            const keyProperties = element.key
            if ( keyProperties.key === key ) {
                return storeData[keyProperties.id]
            }

            return null
        },
        delete( element, key ) {
            if ( typeof element.key === 'undefined' ) {
                return
            }

            const keyProperties = element.key
            if ( keyProperties.key === key ) {
                delete storeData[keyProperties.id]
                delete element.key
            }
        }
    }
})()

const Data = {
    setData( instance, key, data ) {
        mapData.set( instance, key, data )
    },
    getData( instance, key ) {
        return mapData.get( instance, key )
    },
    removeData( instance, key ) {
        mapData.delete( instance, key )
    }
}

/* ----------------------------------------------------------------------------------------------------------------
 * Plugin Core Class
 * ----------------------------------------------------------------------------------------------------------------
 */
class Timeline {
    constructor( element, config ) {
        this._config           = this._getConfig( config )
        this._element          = element
        this._selector         = null
        this._isInitialized    = false
        this._isCached         = false
        this._isCompleted      = false
        this._isShown          = false
        this._isTouched        = false
        this._instanceProps    = {}
        this._observer         = null // Added new since v2.0.0
        this._beforeOpenEvent  = null // Added new since v2.0.0
        //this._countEventinCell = {} // since v2.0.0
        Data.setData( element, DATA_KEY, this )
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
        // config = { ...Default, ...config } // Note: this is NG because two objects have not merged deeply
        if ( config.startDatetime instanceof Date ) {
            config.startDatetime = config.startDatetime.toString()
        }
        if ( config.endDatetime instanceof Date ) {
            config.endDatetime = config.endDatetime.toString()
        }
        return this.mergeDeep( Default, config )
    }

    /*
     * @private: Filter the given scale key name to allowed for plugin
     */
    _filterScaleKeyName( key ) {
        let filteredKey = null

        switch( true ) {
            case /^millenniums?|millennia$/i.test( key ):
                filteredKey = 'millennium'
                break
            case /^century$/i.test( key ):
                filteredKey = 'century'
                break
            case /^dec(ade|ennium)$/i.test( key ):
                filteredKey = 'decade'
                break
            case /^lustrum$/i.test( key ):
                filteredKey = 'lustrum'
                break
            case /^years?$/i.test( key ):
                filteredKey = 'year'
                break
            case /^months?$/i.test( key ):
                filteredKey = 'month'
                break
            case /^weeks?$/i.test( key ):
                filteredKey = 'week'
                break
            case /^weekdays?$/i.test( key ):
                filteredKey = 'weekday'
                break
            case /^da(y|te)s?$/i.test( key ):
                filteredKey = 'day'
                break
            case /^hours?$/i.test( key ):
                filteredKey = 'hour'
                break
            case /^quarter-?(|hour)$/i.test( key ):
                filteredKey = 'quarterHour'
                break
            case /^half-?(|hour)$/i.test( key ):
                filteredKey = 'halfHour'
                break
            case /^minutes?$/i.test( key ):
                filteredKey = 'minute'
                break
            case /^seconds?$/i.test( key ):
                filteredKey = 'second'
                break
            default:
                filteredKey = 'millisecond'
        }
        return filteredKey
    }

    /*
     * @private: Initialize the plugin
     */
    async _init() {
        this._debug( '_init' )

        let _elem     = this._element,
            _selector = `${_elem.tagName}${( _elem.id ? `#${_elem.id}` : '' )}${( _elem.className ? `.${_elem.className.replace(/\s/g, '.')}` : '' )}`

        this._selector = _selector//.toLowerCase()

        if ( this._isInitialized || this._isCompleted ) {
            return this
        }

        this._calcVars()

        this.showLoader()

        if ( ! this._verifyMaxRenderableRange() ) {
            throw new RangeError( `Timeline display period exceeds maximum renderable range.` )
        }

        this._renderView()

        if ( ! this._isCached ) {
            this._loadEvent()
        }

        if ( this._isCached ) {
            await this._placeEvent()
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
        $(_elem).on(
            Event.TOUCHSTART_TIMELINE,
            Selector.TIMELINE_MAIN,
            ( event ) => this._swipeStart( event )
        )
        $(_elem).on(
            Event.TOUCHMOVE_TIMELINE,
            Selector.TIMELINE_MAIN,
            ( event ) => this._swipeMove( event )
        )
        $(_elem).on(
            Event.TOUCHEND_TIMELINE,
            Selector.TIMELINE_MAIN,
            ( event ) => this._swipeEnd( event )
        )
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
        if ( this._config.zoom ) {
            $(_elem).on(
                Event.ZOOMIN_SCALE,
                Selector.TIMELINE_RULER_ITEM,
                ( event ) => this.zoomScale( event )
            )

        }
        $(_elem).find( Selector.TIMELINE_CONTAINER ).on(
            'scroll',
            ( event ) => this._scrollTimeline( event )
        )

        this._isCompleted = true

        await this.hideLoader()

        this.alignment()

        if ( ! this._isInitialized ) {
            const afterInitEvent = $.Event( Event.INITIALIZED, _elem )

            $(_elem).trigger( afterInitEvent )

            $(_elem).off( Event.INITIALIZED )

        }
        // Binding bs.popover
        if ( $.fn['popover'] ) {
            $('[data-toggle="popover"]').popover()
        }
    }

    /*
     * @private: Calculate each properties of the timeline instance
     */
    _calcVars() {
        let _opts     = this._config,
            _props    = {},
            _callback = ( _ac, _cv ) => {
                if ( this.verifyScale( _cv ) ) {
                    _cv = this._filterScaleKeyName( _cv )
                    if ( _ac.indexOf( _cv ) === -1 ) {
                        _ac.push( _cv )
                    }
                }
                return _ac
            }

        _props.begin      = this.supplement( null, this._getPluggableDatetime( _opts.startDatetime, 'first' ) ) // The milliseconds as start datetime (:> 開始日時のミリ秒
        _props.end        = this.supplement( null, this._getPluggableDatetime( _opts.endDatetime, 'last' ) ) // The milliseconds as end datetime (:> 終了日時のミリ秒
        _props.scaleSize  = this.supplement( null, _opts.minGridSize, this.validateNumeric ) // The minimum width of one grid on the base scale (:> 基本スケール上の1グリッドの最小幅
        _props.rows       = this._getPluggableRows() // The number of rows on the timeline container (:> タイムラインコンテナの行数
        _props.rowSize    = this.supplement( null, _opts.rowHeight, this.validateNumeric ) // The height of one row on the timeline container (:> タイムラインコンテナの1行の高さ
        _props.width      = this.supplement( null, _opts.width, this.validateNumeric ) // ?
        _props.height     = this.supplement( null, _opts.height, this.validateNumeric ) // ?
        _props.isVLS      = true // Whether is the variable length scale, fixed as constraint value of the "true" since v2.0.0b2
        // _props.scale         // The basic millisecond of one base grid on the setting scale (:> 設定スケールにおける起点グリッド1目盛の基準ミリ秒
        // _props.grids         // Number of base grids on the setting scale (= number of grids displayed) (:> 設定スケールにおける起点グリッド数（=表示されるグリッド数）
        // _props.variableScale // An object that referable as the width of the base grid on the setting scale (:> 設定スケールにおける起点グリッド幅の幅員基準値となるオブジェクト
        // _props.gridsMap      // An object that mapped the available grids (:> 有効グリッドをマップしたオブジェクト -> これを定義するとメモリを食うのでNG
        // _props.rulers        // The available scale list on the ruler (:> 有効な目盛のスケールリスト
        // _props.fullwidth     // The total width of the timeline container (:> タイムラインコンテナの横幅の全長
        // _props.fullheight    // The total height of the timeline container (:> タイムラインコンテナの縦幅の全長
        // _props.visibleWidth  // The width of the timeline that will display (:> 表示されるタイムラインの横幅
        // _props.visibleHeight // The height of the timeline that will display (:> 表示されるタイムラインの縦幅
        _props.absX       = 0 // An absolute X position on the page for using in swipe event (:> スワイプイベント用
        _props.moveX      = 0 // The moving position after doing the touchstart for using in swipe event (:> スワイプイベント用

        // get all scales on ruler
        let _rulers = _opts.ruler.top.lines.reduce( _callback, [])

        if ( Object.hasOwnProperty.call( _opts.ruler, 'bottom' ) && Object.hasOwnProperty.call( _opts.ruler.bottom, 'lines' ) ) {
            _rulers = [..._rulers, ..._opts.ruler.bottom.lines].reduce( _callback, [] )
        }
        if ( this.is_empty( _rulers ) ) {
            _opts.ruler.top.lines.push( _opts.scale )
            _rulers.push( _opts.scale )
        }
        _props.rulers = _rulers

        this._instanceProps = _props // pre-cache

        if ( _props.isVLS ) {
            // For scales where the value of quantity per unit is variable length (:> 単位あたりの量の値が可変長であるスケールの場合
            let _temp       = this.verifyScale( _opts.scale, _props.begin, _props.end, _props.isVLS ),
                _values     = Object.values( _temp ),
                //_averageVar = this.numRound( _values.reduce( ( a, v ) => a + v, 0 ) / _values.length, 4 ), // Average value within the range
                //_minVar     = Math.min( ..._values ),
                _baseVar    = /^weeks?$/i.test( _opts.scale ) ? Math.max( ..._values ) : Math.min( ..._values ),
                _totalWidth = 0//,
                //_baseToMin  = true, // Whether use min value of scale as base grid width (:> スケールの最小値をベースグリッド幅として使用するか
                //_baseVar    = _baseToMin ? _minVar : _averageVar

            switch ( true ) {
                case /^millenniums?|millennia$/i.test( _opts.scale ):
                case /^century$/i.test( _opts.scale ):
                    // unit: years = 365.25 * 24 * 60 * 60 * 1000
                    _props.scale = _baseVar * ( 365.25 * 24 * 60 * 60 * 1000 )
                    break
                case /^dec(ade|ennium)$/i.test( _opts.scale ):
                case /^lustrum$/i.test( _opts.scale ):
                case /^years?$/i.test( _opts.scale ):
                case /^months?$/i.test( _opts.scale ):
                    // unit: days = 24 * 60 * 60 * 1000
                    _props.scale = _baseVar * ( 24 * 60 * 60 * 1000 )
                    break
                case /^weeks?$/i.test( _opts.scale ):
                case /^(|week)days?$/i.test( _opts.scale ):
                    // unit: hours = 60 * 60 * 1000
                    _props.scale = _baseVar * ( 60 * 60 * 1000 )
                    break
                case /^hours?$/i.test( _opts.scale ):
                    // unit: minutes = 60 * 1000
                    _props.scale = _baseVar * ( 60 * 1000 )
                    break
                case /^minutes?$/i.test( _opts.scale ):
                    // unit: seconds = 1000
                    _props.scale = _baseVar * 1000
                    break
                case /^seconds?$/i.test( _opts.scale ):
                default:
                    // unit: milliseconds = 1
                    _props.scale = _baseVar * 1
                    break
            }
            //console.log( '!_calcVars::', _opts.scale, _temp, _values, _props )
            _values.forEach( ( val ) => {
                //console.log( `!!_calcVars::_totalWidth: ${_totalWidth} + ${this.numRound( ( val * _props.scaleSize ) / _baseVar, 2 )}` )
                _totalWidth += this.numRound( ( val * _props.scaleSize ) / _baseVar, 2 )
            })

            _props.grids         = _values.length
            _props.variableScale = _temp
            _props.fullwidth     = _totalWidth
        } else {
            // Deprecated since v2.0.0 stable; in case of fixed length scale
        }
        _props.fullheight = _props.rows * _props.rowSize // Provisional value as theoretical value
        // Define visible size according to full size of timeline (:> タイムラインのフルサイズに準じた可視サイズを定義
        _props.visibleWidth  = _props.width > 0  ? `${( _props.width <= _props.fullwidth ? _props.width : _props.fullwidth )}px` : 'max-content'
        _props.visibleHeight = _props.height > 0 ? `${( _props.height <= _props.fullheight ? _props.height : _props.fullheight )}px` : 'max-content'

        for ( let _prop in _props ) {
            if ( /^(width|height|variableScale|absX|moveX)$/.test( _prop ) ) {
                continue
            }
            if ( this.is_empty( _props[_prop] ) ) {
                throw new TypeError( `Property "${_prop}" cannot set because undefined or invalid variable.` )
            }
        }

        if ( _props.fullwidth < 2 || _props.fullheight < 2 ) {
            throw new TypeError( `The range of the timeline to be rendered is incorrect.` )
        }

        //console.log( '!_calcVars::return:', _props )
        this._instanceProps = _props
    }

    /*
     * @private: Retrieve the pluggable datetime as milliseconds depend on specific preset keyword
     *
     * @param mixed key (required; preset keywords 'current', 'currently', 'auto' or seed of datetime)
     * @param string round_type (optional; defaults to '')
     *
     * @return int (milliseconds as valid datetime)
     */
    _getPluggableDatetime( key, round_type = '' ) {
        let _opts        = this._config,
            _date        = null,
            getFirstDate = ( dateObj, scale ) => {
                let _fullYear  = dateObj.getFullYear(),
                    _remapYear = _fullYear >= 0 && Math.abs( _fullYear ) < 100 ? true : false,
                    _tmpDate

                switch ( true ) {
                    case /^millenniums?|millennia$/i.test( scale ):
                    case /^century$/i.test( scale ):
                    case /^dec(ade|ennium)$/i.test( scale ):
                    case /^lustrum$/i.test( scale ):
                    case /^years?$/i.test( scale ):
                        _tmpDate = new Date( _fullYear, 0, 1 )
                        break
                    case /^months?$/i.test( scale ):
                        _tmpDate = new Date( _fullYear, dateObj.getMonth(), 1 )
                        break
                    case /^(week|day)s?$/i.test( scale ):
                        _tmpDate = new Date( _fullYear, dateObj.getMonth(), dateObj.getDate() )
                        break
                    case /^(|half|quarter)-?hours?$/i.test( scale ):
                        _tmpDate = new Date( _fullYear, dateObj.getMonth(), dateObj.getDate(), dateObj.getHours() )
                        break
                    case /^minutes?$/i.test( scale ):
                        _tmpDate = new Date( _fullYear, dateObj.getMonth(), dateObj.getDate(), dateObj.getHours(), dateObj.getMinutes() )
                        break
                    case /^seconds?$/i.test( scale ):
                        _tmpDate = new Date( _fullYear, dateObj.getMonth(), dateObj.getDate(), dateObj.getHours(), dateObj.getMinutes(), dateObj.getSeconds() )
                        break
                    default:
                        _tmpDate = new Date( _fullYear, dateObj.getMonth(), dateObj.getDate(), dateObj.getHours(), dateObj.getMinutes(), dateObj.getSeconds(), dateObj.getMilliseconds() )
                        break
                }
                if ( _remapYear ) {
                    _tmpDate.setFullYear( _fullYear )
                }
                return _tmpDate
            },
            getLastDate  = ( dateObj, scale ) => {
                let _fullYear  = dateObj.getFullYear(),
                    _remapYear = _fullYear >= 0 && Math.abs( _fullYear ) < 100 ? true : false,
                    _offset    = _fullYear >= 0 ? -1 : 1,
                    _tmpDate

                switch ( true ) {
                    case /^millenniums?|millennia$/i.test( scale ):
                    case /^century$/i.test( scale ):
                    case /^dec(ade|ennium)$/i.test( scale ):
                    case /^lustrum$/i.test( scale ):
                    case /^years?$/i.test( scale ):
                        _tmpDate = new Date( _fullYear + 1, 0, 1 )
                        _remapYear = ( _fullYear + 1 ) >= 0 && Math.abs( _fullYear + 1 ) < 100 ? true : false
                        _offset    = ( _fullYear + 1 ) >= 0 ? -1 : 1
                        break
                    case /^months?$/i.test( scale ):
                        _tmpDate = new Date( _fullYear, dateObj.getMonth() + 1, 1 )
                        break
                    case /^(week|day)s?$/i.test( scale ):
                        _tmpDate = new Date( _fullYear, dateObj.getMonth(), dateObj.getDate() + 1 )
                        break
                    case /^(|half|quarter)-?hours?$/i.test( scale ):
                        _tmpDate = new Date( _fullYear, dateObj.getMonth(), dateObj.getDate(), dateObj.getHours() + 1 )
                        break
                    case /^minutes?$/i.test( scale ):
                        _tmpDate = new Date( _fullYear, dateObj.getMonth(), dateObj.getDate(), dateObj.getHours(), dateObj.getMinutes() + 1 )
                        break
                    case /^seconds?$/i.test( scale ):
                        _tmpDate = new Date( _fullYear, dateObj.getMonth(), dateObj.getDate(), dateObj.getHours(), dateObj.getMinutes(), dateObj.getSeconds() + 1 )
                        break
                    default:
                        _tmpDate = new Date( _fullYear, dateObj.getMonth(), dateObj.getDate(), dateObj.getHours(), dateObj.getMinutes(), dateObj.getSeconds(), dateObj.getMilliseconds() + 1 )
                        break
                }
                if ( _remapYear ) {
                    _tmpDate.setFullYear( _fullYear )
                }
                return new Date( _tmpDate.getTime() + _offset )
            }

//console.log( '!_getPluggableDatetime::return:', key )
        switch ( true ) {
            case /^current(|ly)$/i.test( key ):
                // now date
                _date = new Date()
                break
            case /^auto$/i.test( key ): {
                let _auto_range  = _opts.range && _opts.range > 0 ? parseInt( _opts.range, 10 ) : 3,
                    _higherScale = /^(|week)days?$/i.test( _opts.scale ) ? 'month' : this.getHigherScale( _opts.scale )

                if ( /^current(|ly)$/i.test( _opts.startDatetime ) ) {
                    _date = getFirstDate( new Date(), _opts.scale )
                } else {
                    _date = this.getCorrectDatetime( _opts.startDatetime )
                }

                _date = this.modifyDate( _date, _auto_range, _higherScale )
                break
            }
            default:
                _date = this.getCorrectDatetime( key )
                break
        }

        if ( ! this.is_empty( round_type ) ) {
            if ( 'first' === round_type ) {
                _date = getFirstDate( _date, _opts.scale )
            } else
            if ( 'last' === round_type ) {
                _date = getLastDate( _date, _opts.scale )
            }
        }

//console.log( '!!_getPluggableDatetime::return:', _date )
        return _date.getTime()
    }

    /*
     * @private: Retrieve the pluggable parameter as an object
     */
    _getPluggableParams( str_like_params ) {
        let params = {}

        if ( typeof str_like_params === 'string' && str_like_params ) {
            try {
                params = JSON.parse( JSON.stringify( ( new Function( `return ${str_like_params}` ) )() ) )
                if ( Object.hasOwnProperty.call( params, 'extend' ) && typeof params.extend === 'string' ) {
                    params.extend = JSON.parse( JSON.stringify( ( new Function( `return ${params.extend}` ) )() ) )
                }
            } catch( e ) {
                //console.warn( 'Can not parse to object therefor invalid param.' )
                this._error( 'Can not parse to object therefor invalid param.', 'warn' )
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
     * @private: Verify the display period of the timeline does not exceed the maximum renderable range (:> タイムラインの表示期間が最大描画可能範囲を超過していないか検証する
     */
    _verifyMaxRenderableRange( scale = this._config.scale ) {
        if ( this._config.disableLimitter ) {
            this._debug( `The scale limiter has been OFF::${scale}: ${this._instanceProps.grids} / ${LimitScaleGrids[this._filterScaleKeyName( scale )]}` )
            return true
        } else {
            this._debug( `Verify max renderable range::${scale}: ${this._instanceProps.grids} / ${LimitScaleGrids[this._filterScaleKeyName( scale )]}` )
            return this._instanceProps.grids <= LimitScaleGrids[this._filterScaleKeyName( scale )]
        }
    }

    /*
     * @private: Render the view of timeline container
     */
    _renderView() {
        this._debug( '_renderView' )

        let _elem          = this._element,
            _opts          = this._config,
            _props         = this._instanceProps,
            _tl_container  = $('<div></div>', { class: ClassName.TIMELINE_CONTAINER }),// .jqtl-container
            _tl_main       = $('<div></div>', { class: ClassName.TIMELINE_MAIN }),// .jqtl-main
            $_el           = $(_elem),// Cached an element
            $_tl_parent    = $_el.parent()

//console.log( '_renderView::', _elem, _opts, _props )
        if ( $_el.length == 0 ) {
            throw new TypeError( 'Does not exist the element to render a timeline container.' )
        }

        this._debug( `Timeline:{ fullWidth: ${_props.fullwidth}px, fullHeight: ${_props.fullheight}px, viewWidth: ${_props.visibleWidth}, viewHeight: ${_props.visibleHeight} }` )

        $_el.css( 'position', 'relative' ) // initialize; not .empty()
        if ( _opts.hideScrollbar ) {
            _tl_container.addClass( ClassName.HIDE_SCROLLBAR )// .jqtl-hide-scrollbar
        }

        // Create the timeline headline (:> タイムラインの見出しを生成
        $_el.prepend( this._createHeadline() )

        // Create the timeline event container (:> タイムラインのイベントコンテナを生成
        _tl_main.append( this._createEventContainer() )

        // Create the timeline ruler (:> タイムラインの目盛を生成
        if ( Object.hasOwnProperty.call( _opts.ruler, 'top' ) && Object.hasOwnProperty.call( _opts.ruler.top, 'lines' ) && ! this.is_empty( _opts.ruler.top.lines ) ) {
            _tl_main.prepend( this._createRuler( 'top' ) )
        }
        if ( Object.hasOwnProperty.call( _opts.ruler, 'bottom' ) && Object.hasOwnProperty.call( _opts.ruler.bottom, 'lines' ) && ! this.is_empty( _opts.ruler.bottom.lines ) ) {
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
        $_el.append( _tl_container )

        // Create the timeline footer (:> タイムラインのフッタを生成
        $_el.append( this._createFooter() )

        // Optimize the parent element of the timeline
        if ( this.is_empty( $_el.attr( 'data-resized' ) ) ) {
//console.log( '_renderView::', $_tl_parent, Number(_tl_main.get(0).scrollWidth), Number($_el.get(0).scrollWidth), Number($_tl_parent.width() + 2) )
            if ( $_el.get(0).scrollWidth > $_tl_parent.width() + 2 ) {
                _tl_container.css({ width: $_tl_parent.width() - 2, height: _props.visibleHeight })
                $_tl_parent.css({ maxWidth: '100vw', overflowX: 'hidden' })
            } else {
                _tl_container.css({ width: _props.visibleWidth, height: _props.visibleHeight })
            }
            $_el.attr( 'data-resized', true )
        }

        // Apply the theme color scheme
        this.applyThemeStyle()

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
            _scale   = _opts.scale,
            _tl_headline = $('<div></div>', { class: ClassName.TIMELINE_HEADLINE }),// .jqtl-headline
            _wrapper     = $('<div></div>', { class: ClassName.TIMELINE_HEADLINE_WRAPPER })// .jqtl-headline-wrapper

        if ( _title ) {
            _wrapper.append( `<h3 class="${ClassName.HEADLINE_TITLE}">${_opts.headline.title}</h3>` )// .jqtl-timeline-title
        }
        if ( _range ) {
            if ( _begin && _end ) {
                let _meta = ''
                
                if ( Object.hasOwnProperty.call( _format, 'custom' ) ) {
                    _scale = 'custom'
                }
                if ( [ 'year', 'month', 'day', 'week' ].includes( _scale ) ) {
                    _meta = `${this.getLocaleString( _opts.startDatetime, _scale, _locale, _format )}<span class="${ClassName.RANGE_SPAN}"></span>${this.getLocaleString( _opts.endDatetime, _scale, _locale, _format )}`
                } else {
                    _meta = `${this.getLocaleString( _begin, _scale, _locale, _format )}<span class="${ClassName.RANGE_SPAN}"></span>${this.getLocaleString( _end, _scale, _locale, _format )}`
                }
                _wrapper.append( `<div class="${ClassName.RANGE_META}">${_meta}</div>` )// .jqtl-range-meta
            }
        }
        if ( ! _display ) {
            _tl_headline.addClass( ClassName.HIDE )// .jqtl-hide
        }
        return _tl_headline.append( _wrapper )
    }

    /*
     * @private: Create the event container of the timeline (:> タイムラインのイベントコンテナを作成する
     */
    _createEventContainer() {
        let _opts         = this._config,
            _props        = this._instanceProps,
            _actualHeight = _props.fullheight + Math.ceil( _props.rows / 2 ) + 1,
            _container    = $('<div></div>', { class: ClassName.TIMELINE_EVENT_CONTAINER, style: `height:${_actualHeight}px;` }),
            _events_bg    = $(`<canvas width="${( _props.fullwidth - 1 )}" height="${_actualHeight}" class="${ClassName.TIMELINE_BACKGROUND_GRID}"></canvas>`),
            _events_lines = $(`<canvas width="${( _props.fullwidth - 1 )}" height="${_actualHeight}" class="${ClassName.TIMELINE_RELATION_LINES}"></canvas>`),
            _events_body  = $('<div></div>', { class: ClassName.TIMELINE_EVENTS }),
            _cy           = 0,
            ctx_grid      = _events_bg[0].getContext('2d'),
            _grid_style   = { horizontal: 'dotted', vertical: 'solid' },
            drawRowRect   = ( pos_y, color ) => {
                color = this.supplement( _opts.colorScheme.theme.background, color )
                // console.log( 0, pos_y, _fullwidth, _size_row, color )
                ctx_grid.fillStyle = color
                ctx_grid.fillRect( 0, pos_y + 0.5, _props.fullwidth, _props.rowSize + 1.5 )
                ctx_grid.stroke()
            },
            drawHorizontalLine = ( pos_y, style ) => {
                let _correction = 0.5

                switch ( true ) {
                    case /^solid$/i.test( style ):
                        style = 'solid'
                        break
                    case /^dotted$/i.test( style ):
                        style = 'dotted'
                        break
                    case /^none$/i.test( style ):
                    default:
                        return
                }
                ctx_grid.strokeStyle = this.hexToRgbA( _opts.colorScheme.theme.gridbase, 0.1 )// 'rgba( 51, 51, 51, 0.1 )'
                ctx_grid.lineWidth = 1
                ctx_grid.filter = 'url(#crisp)'
                ctx_grid.beginPath()
                if ( style === 'dotted' ) {
                    ctx_grid.setLineDash([ 1, 2 ])
                } else {
                    ctx_grid.setLineDash([])
                }
                ctx_grid.moveTo( 0, pos_y + _correction )
                ctx_grid.lineTo( _props.fullwidth, pos_y + _correction )
                ctx_grid.closePath()
                ctx_grid.stroke()
            },
            drawVerticalLine = ( pos_x, style ) => {
                let _correction = -0.5

                switch ( true ) {
                    case /^solid$/i.test( style ):
                        style = 'solid'
                        break
                    case /^dotted$/i.test( style ):
                        style = 'dotted'
                        break
                    case /^none$/i.test( style ):
                    default:
                        return
                }
                ctx_grid.strokeStyle = this.hexToRgbA( _opts.colorScheme.theme.gridbase, 0.1 )// 'rgba( 51, 51, 51, 0.025 )'
                ctx_grid.lineWidth = 1
                ctx_grid.filter = 'url(#crisp)'
                ctx_grid.beginPath()
                if ( style === 'dotted' ) {
                    ctx_grid.setLineDash([ 1, 2 ])
                } else {
                    ctx_grid.setLineDash([])
                }
                ctx_grid.moveTo( pos_x + _correction, 0 )
                ctx_grid.lineTo( pos_x + _correction, _actualHeight )
                ctx_grid.closePath()
                ctx_grid.stroke()
            }

        if ( Object.hasOwnProperty.call( _opts.effects, 'horizontalGridStyle' ) ) {
            _grid_style.horizontal = _opts.effects.horizontalGridStyle
        }
        if ( Object.hasOwnProperty.call( _opts.effects, 'verticalGridStyle' ) ) {
            _grid_style.vertical = _opts.effects.verticalGridStyle
        }

        _cy = 0
        for ( let i = 0; i < _props.rows; i++ ) {
            _cy += i % 2 == 0 ? 1 : 0
            let _pos_y = ( i * _props.rowSize ) + _cy,
                _color = this.hexToRgbA( _opts.colorScheme.theme.striped1, 0.1 )// '#FEFEFE'

            if ( Object.hasOwnProperty.call( _opts.effects, 'stripedGridRow' ) && _opts.effects.stripedGridRow ) {
                _color = i % 2 == 0 ? this.hexToRgbA( _opts.colorScheme.theme.striped1, 0.1 ) : this.hexToRgbA( _opts.colorScheme.theme.striped2, 0.25 )// '#FEFEFE' : '#F8F8F8'
            }
            drawRowRect( _pos_y, _color )
        }
        _cy = 0
        for ( let i = 1; i < _props.rows; i++ ) {
            _cy += i % 2 == 0 ? 1 : 0
            let _pos_y = ( i * _props.rowSize ) + _cy
            drawHorizontalLine( _pos_y, _grid_style.horizontal )
        }
        if ( _props.isVLS ) {
            // For scales where the value of quantity per unit is variable length (:> 単位あたりの量の値が可変長であるスケールの場合
            let _sy = 0,
                _baseVar

            switch (true) {
                case /^millenniums?|millennia$/i.test( _opts.scale ):
                case /^century$/i.test( _opts.scale ):
                    // unit: years = 365.25 * 24 * 60 * 60 * 1000
                    _baseVar = _props.scale / ( 365.25 * 24 * 60 * 60 * 1000 )
                    break
                case /^dec(ade|ennium)$/i.test( _opts.scale ):
                case /^lustrum$/i.test( _opts.scale ):
                case /^years?$/i.test( _opts.scale ):
                case /^months?$/i.test( _opts.scale ):
                    // unit: days = 24 * 60 * 60 * 1000
                    _baseVar = _props.scale / ( 24 * 60 * 60 * 1000 )
                    break
                case /^weeks?$/i.test( _opts.scale ):
                case /^(|week)days?$/i.test( _opts.scale ):
                    // unit: hours = 60 * 60 * 1000
                    _baseVar = _props.scale / ( 60 * 60 * 1000 )
                    break
                case /^hours?$/i.test( _opts.scale ):
                    // unit: minutes = 60 * 1000
                    _baseVar = _props.scale / ( 60 * 1000 )
                    break
                case /^minutes?$/i.test( _opts.scale ):
                    // unit: seconds = 1000
                    _baseVar = _props.scale / 1000
                    break
                case /^seconds?$/i.test( _opts.scale ):
                default:
                    // unit: milliseconds = 1
                    _baseVar = _props.scale / 1
                    break
            }

            for ( let _key of Object.keys( _props.variableScale ) ) {
                _sy += this.numRound( ( _props.variableScale[_key] * _props.scaleSize ) / _baseVar, 2 )
                drawVerticalLine( _sy, _grid_style.vertical )
            }
        } else {
            // In case of fixed length scale; Deprecated
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
            ruler_line  = this.supplement( [ _opts.scale ], _opts.ruler[position].lines, ( def, val ) => {
                if ( Array.isArray( val ) && val.length > 0 ) {
                    if ( Object.hasOwnProperty.call( _opts.ruler, 'truncateLowers' ) && _opts.ruler.truncateLowers ) {
                        let _ignore_scales = this.findScale( _opts.scale, 'lower all' ),
                            _filter_scales = val.filter( ( scl ) => ! _ignore_scales.includes( this._filterScaleKeyName( scl ) ) )
//console.log( '!_createRuler::truncateLowers:', _opts.scale, _ignore_scales, val, _filter_scales )
                        val = _filter_scales
                    }
                    return val
                } else {
                    return def
                }
            }),
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

        // Override ruler options for applying theme; added since v2.1.0
        if ( 'inherit' === ruler_opts.color ) {
            ruler_opts.color = _opts.colorScheme.theme.subtext
        }
        if ( 'inherit' === ruler_opts.background ) {
            ruler_opts.background = _opts.colorScheme.theme.background
        }

//console.log( '!_createRuler:', ruler_line, ruler_opts )
        // Draw background of ruler
        ctx_ruler.fillStyle = ruler_opts.background
        ctx_ruler.fillRect( 0, 0, ctx_ruler.canvas.width, ctx_ruler.canvas.height )

        // Draw stroke of ruler
        ctx_ruler.strokeStyle = this.hexToRgbA( _opts.colorScheme.theme.gridbase, 0.1 )// 'rgba( 51, 51, 51, 0.1 )'
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
                _correction = -0.5

            // For scales where the value of quantity per unit is variable length (:> 単位あたりの量の値が可変長であるスケールの場合
            _line_grids = this._filterVariableScale( line_scale )
//console.log( '!!_createRuler:', line_scale, _line_grids )

            for ( let _key of Object.keys( _line_grids ) ) {
                _grid_x += this.numRound( _line_grids[_key], 2 )

                ctx_ruler.moveTo( _grid_x + _correction, position === 'top' ? _line_y - line_height : _line_y )
                ctx_ruler.lineTo( _grid_x + _correction, position === 'top' ? _line_y : _line_y + line_height )
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
     *
     * @param: target_scale = a scale of one line on the ruler (:> 目盛1行分のスケール
     * @return: An object of actual grid widths for each individual scale on the set scale of the timeline container (:> タイムラインコンテナの指定スケール上における各個別スケールの実際のグリッド幅のオブジェクト
     */
    _filterVariableScale( target_scale ) {
        let _opts  = this._config,
            _props = this._instanceProps,
            // _opts.scale が day の場合は時間/日、それ以外の場合は日/年となる
            scales = _props.variableScale,
            retObj = {},
            _baseVar

        switch (true) {
            case /^millenniums?|millennia$/i.test( _opts.scale ):
            case /^century$/i.test( _opts.scale ):
                // unit: years = 365.25 * 24 * 60 * 60 * 1000
                _baseVar = _props.scale / ( 365.25 * 24 * 60 * 60 * 1000 )
                break
            case /^dec(ade|ennium)$/i.test( _opts.scale ):
            case /^lustrum$/i.test( _opts.scale ):
            case /^years?$/i.test( _opts.scale ):
            case /^months?$/i.test( _opts.scale ):
                // unit: days = 24 * 60 * 60 * 1000
                _baseVar = _props.scale / ( 24 * 60 * 60 * 1000 )
                break
            case /^weeks?$/i.test( _opts.scale ):
            case /^(|week)days?$/i.test( _opts.scale ):
                // unit: hours = 60 * 60 * 1000
                _baseVar = _props.scale / ( 60 * 60 * 1000 )
                break
            case /^hours?$/i.test( _opts.scale ):
                // unit: minutes = 60 * 1000
                _baseVar = _props.scale / ( 60 * 1000 )
                break
            case /^minutes?$/i.test( _opts.scale ):
                // unit: seconds = 1000
                _baseVar = _props.scale / 1000
                break
            case /^seconds?$/i.test( _opts.scale ):
            default:
                // unit: milliseconds = 1
                _baseVar = _props.scale / 1
                break
        }

        // グリッド幅の起点となるスケールは _opts.scale で、表示用にフィルタされるスケールは target_scale なので、それに合わせてサイズを計算する
//console.log( `!_filterVariableScale::${_opts.scale} -> ${target_scale}:`, scales )
        for ( let _dt of Object.keys( scales ) ) {
            let grid_size = this.numRound( ( scales[_dt] * _props.scaleSize ) / _baseVar, 2 ),
                _newKey   = null,
                _arr      = _dt.split(','),
                _tmpDt    = /^weeks?$/i.test( _opts.scale ) ? this.getFirstDayOfWeek( parseInt( _arr[1], 10 ), parseInt( _arr[0], 10 ) ) : this.getCorrectDatetime( _arr[0] ),
                _temp
//console.log( '!!_filterVariableScale:', _dt, this.getCorrectDatetime( _dt ), _props.scaleSize, scales[_dt], grid_size )

            switch ( true ) {
                case /^millenniums?|millennia$/i.test( target_scale ):
                    //_years = 1000
                    _newKey   = Math.ceil( _tmpDt.getFullYear() / 1000 )
                    //grid_size = this.numRound( ( _years * _props.scaleSize ) / _baseVar, 2 )
                    break
                case /^century$/i.test( target_scale ):
                    //_years = 100
                    _newKey   = Math.ceil( _tmpDt.getFullYear() / 100 )
                    //grid_size = this.numRound( ( _years * _props.scaleSize ) / _baseVar, 2 )
                    break
                case /^dec(ade|ennium)$/i.test( target_scale ):
                    //_years = 10
                    _newKey   = Math.ceil( _tmpDt.getFullYear() / 10 )
                    //grid_size = this.numRound( ( _years * _props.scaleSize ) / _baseVar, 2 )
                    break
                case /^lustrum$/i.test( target_scale ):
                    //_years = 5
                    _newKey   = Math.ceil( _tmpDt.getFullYear() / 5 )
                    //grid_size = this.numRound( ( _years * _props.scaleSize ) / _baseVar, 2 )
                    break
                case /^years?$/i.test( target_scale ):
                    //_days = scales[_dt]
                    _newKey = `${_tmpDt.getFullYear()}`
                    //grid_size = this.numRound( ( _days * _props.scaleSize ) / _baseVar, 2 )
                    break
                case /^months?$/i.test( target_scale ):
                    _newKey = `${_tmpDt.getFullYear()}/${_tmpDt.getMonth() + 1}`
                    break
                case /^weeks?$/i.test( target_scale ):
                    if ( /^weeks?$/i.test( _opts.scale ) ) {
                        _newKey = _arr.join()
                    } else {
                        _temp   = this.getWeek( _tmpDt )
                        _newKey = `${_tmpDt.getFullYear()},${_temp}`
                    }
//console.log( `!!_filterVariableScale::${target_scale}:`, _opts.scale, _arr, _tmpDt, _temp, _newKey )
                    break
                case /^weekdays?$/i.test( target_scale ):
                    if ( /^weeks?$/i.test( _opts.scale ) && this.is_empty( retObj ) ) {
                        _tmpDt  = new Date( _props.begin )
                    }
                    _temp = _tmpDt.getDay()
                    _newKey = `${_tmpDt.getFullYear()}/${_tmpDt.getMonth() + 1}/${_tmpDt.getDate()},${_temp}`
                    break
                case /^days?$/i.test( target_scale ):
                    if ( /^weeks?$/i.test( _opts.scale ) && this.is_empty( retObj ) ) {
                        _tmpDt  = new Date( _props.begin )
                    }
                    _newKey = `${_tmpDt.getFullYear()}/${_tmpDt.getMonth() + 1}/${_tmpDt.getDate()}`
                    break
                case /^hours?$/i.test( target_scale ):
                    _newKey = `${_tmpDt.getFullYear()}/${_tmpDt.getMonth() + 1}/${_tmpDt.getDate()} ${_tmpDt.getHours()}`
                    //retObj[`${this.getCorrectDatetime( _dt ).getFullYear()}/${this.getCorrectDatetime( _dt ).getMonth() + 1}/1 0`] = grid_size
                    break
                case /^minutes?$/i.test( target_scale ):
                    _newKey = `${_tmpDt.getFullYear()}/${_tmpDt.getMonth() + 1}/${_tmpDt.getDate()} ${_tmpDt.getHours()}:${_tmpDt.getMinutes()}`
                    //retObj[`${this.getCorrectDatetime( _dt ).getFullYear()}/${this.getCorrectDatetime( _dt ).getMonth() + 1}/1 0:00`] = grid_size
                    break
                case /^seconds?$/i.test( target_scale ):
                    _newKey = `${_tmpDt.getFullYear()}/${_tmpDt.getMonth() + 1}/${_tmpDt.getDate()} ${_tmpDt.getHours()}:${_tmpDt.getMinutes()}:${_tmpDt.getSeconds()}`
                    //retObj[`${this.getCorrectDatetime( _dt ).getFullYear()}/${this.getCorrectDatetime( _dt ).getMonth() + 1}/1 0:00:00`] = grid_size
                    break
                default:
                    _newKey = `${_tmpDt.getFullYear()}/${_tmpDt.getMonth() + 1}/${_tmpDt.getDate()} ${_tmpDt.getHours()}:${_tmpDt.getMinutes()}:${_tmpDt.getSeconds()}.${_tmpDt.getMilliseconds()}`
                    //retObj[`${this.getCorrectDatetime( _dt ).getFullYear()}/${this.getCorrectDatetime( _dt ).getMonth() + 1}`] = grid_size
                    break
            }
//console.log( `!!!_filterVariableScale::${target_scale}:`, _dt, _newKey, grid_size )
            if ( Object.hasOwnProperty.call( retObj, _newKey ) ) {
                retObj[_newKey] += grid_size
            } else {
                retObj[_newKey] = grid_size
            }
        }

//console.log( `!!!_filterVariableScale::${_opts.scale} -> ${target_scale}:`, retObj )
        return retObj
    }


    /*
     * @private: Create the content of ruler of the timeline (:> タイムラインの目盛本文を作成する
     */
    _createRulerContent( _line_grids, line_scale, ruler ) {
        let line_height  = this.supplement( Default.ruler.top.height, ruler.height ),
            font_size    = this.supplement( Default.ruler.top.fontSize, ruler.fontSize ),
            text_color   = this.supplement( Default.ruler.top.color, ruler.color ),
            locale       = this.supplement( Default.ruler.top.locale, ruler.locale, this.validateString ),
            format       = this.supplement( Default.ruler.top.format, ruler.format, this.validateObject ),
            _ruler_lines = $('<div></div>', { class: ClassName.TIMELINE_RULER_LINES, style: `width:100%;height:${line_height}px;` })

//console.log( '!_createRulerContent::', ruler, line_scale, text_color, locale, format )
        for ( let _key of Object.keys( _line_grids ) ) {
            let _item_width      = _line_grids[_key],
                _line            = $('<div></div>', { class: ClassName.TIMELINE_RULER_ITEM, style: `width:${_item_width}px;height:${line_height}px;line-height:${line_height}px;font-size:${font_size}px;color:${text_color};` }),
                _ruler_string    = this.getLocaleString( _key, this._filterScaleKeyName( line_scale ), locale, format ),
                _data_ruler_item = ''

//console.log( '!_createRulerContent::', _key, line_scale, _ruler_string )
            _data_ruler_item = `${line_scale}-${( _data_ruler_item === '' ? String( _key ) : _data_ruler_item )}`
            _line.attr( 'data-ruler-item', _data_ruler_item ).html( `<span>${_ruler_string}</span>` )

            if ( _item_width > this.strWidth( _ruler_string ) ) {
                // Adjust position of ruler item string
                /*
//console.log( _item_width, _ruler_string, _ruler_string.toString().length, this.strWidth( _ruler_string ), $(this._element).get(0).clientWidth )
                if ( _item_width > $(this._element).width() ) {
                    _line.children('span').addClass( ClassName.RULER_ITEM_ALIGN_LEFT )
                }
                */
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
            _item_h  = this.numRound( (_props.fullheight + Math.ceil(_props.rows / 2)) / _props.rows, 2 ), // Actual height of container: fullheight + Math.ceil( rows / 2 )
            _c       = -0.5

        if ( _sticky ) {
            _wrapper.addClass( ClassName.STICKY_LEFT )
        }

        if ( _overlay ) {
            _list.addClass( ClassName.OVERLAY )
        }

        if ( margin.top > 0 ) {
            _wrapper.prepend( _margin.clone().css( 'height', `${margin.top}px` ) )
        }

        for ( let i = 0; i < _props.rows; i++ ) {
            let _item = _list.clone().html( `${_sbList[i]}` )

            if ( i + 1 == _props.rows ) {
                _item.css( 'height', `${(_item_h + _c)}px` ).css( 'line-height', `${(_item_h + _c)}px` )
            } else {
                _item.css( 'height', `${(_item_h - 1)}px` ).css( 'line-height', `${(_item_h - 1)}px` )
            }

            _wrapper.append( _item )
        }

        if ( margin.bottom > 0 ) {
            _wrapper.append( _margin.clone().css( 'height', `${( margin.bottom + _c )}px` ) )
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
            _scale   = _opts.scale,
            _tl_footer = $('<div></div>', { class: ClassName.TIMELINE_FOOTER })

        if ( _range ) {
            if ( _begin && _end ) {
                if ( Object.hasOwnProperty.call( _format, 'custom' ) ) {
                    _scale = 'custom'
                }
                let _meta = `${this.getLocaleString( _begin, _scale, _locale, _format )}<span class="${ClassName.RANGE_SPAN}"></span>${this.getLocaleString( _end, _scale, _locale, _format )}`

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
     * @private: Load all enabled events markupped on target element to the timeline object (:> 対象要素にマークアップされたすべての有効なイベントをタイムラインにロードする
     *           Firstly load default events bound to plugin config (:> 最初にプラグイン設定にバインドされた初期イベントをロードする
     */
    _loadEvent() {
        this._debug( '_loadEvent' )

        let _that           = this,
            _elem           = this._element,
            _opts           = this._config,
            _default_events = _opts.eventData,
            _event_list     = $(_elem).find( Selector.DEFAULT_EVENTS ),
            _cnt            = _default_events.length,
            events          = [],
            lastEventId     = 0

        _event_list.children().each(function() {
            let _attr = $(this).attr( 'data-timeline-node' )

            if ( typeof _attr !== 'undefined' && _attr !== false ) {
                _cnt++
            }
        })

        if ( _cnt == 0 ) {
            //this._debug( 'Enable event does not exist.' )
            //console.warn( 'Enable event does not exist.' )
            this._error( 'Enable event does not exist.', 'warn' )
        }

        // Register Event Data
        if ( _default_events.length > 0 ) {
            _default_events.forEach(( _evt_obj ) => {
                let _one_event  = {}

                if ( ! this.is_empty( _evt_obj ) ) {
                    _one_event = this._registerEventData( '<div></div>', _evt_obj )
                    events.push( _one_event )
                    lastEventId = Math.max( lastEventId, parseInt( _one_event.eventId, 10 ) )
                }
            })
        }
        _event_list.children().each(function() {
            let _evt_params = _that._getPluggableParams( $(this).attr( 'data-timeline-node' ) ),
                _one_event  = {}

            if ( ! _that.is_empty( _evt_params ) ) {
                _one_event = _that._registerEventData( this, _evt_params )
                events.push( _one_event )
                lastEventId = Math.max( lastEventId, parseInt( _one_event.eventId, 10 ) )
            }
        })
        // Set event id with auto increment
        let cacheIds = [] // for checking duplication of id
        events.forEach( ( _evt, _i, _this ) => {
            let _chkId = parseInt( _this[_i].eventId, 10 )

            if ( _chkId == 0 || cacheIds.includes( _chkId ) ) {
                lastEventId++
                _this[_i].eventId = lastEventId
            } else {
                _this[_i].eventId = _chkId
            }
            cacheIds.push( _this[_i].eventId )
        })

        // Hook to event colors; Added instead of merging setColorEvent of PR#37
        events.forEach( ( _evt, _i, _this ) => {
            if ( Object.hasOwnProperty.call( _opts.colorScheme, 'event' ) && typeof _opts.colorScheme.event === 'object' ) {
                // Firstly overwrite default colors
                if ( Object.hasOwnProperty.call( _opts.colorScheme.event, 'text' ) && _evt.color === Default.colorScheme.event.text && Default.colorScheme.event.text !== _opts.colorScheme.event.text ) {
                    _this[_i].color = _opts.colorScheme.event.text
                }
                if ( Object.hasOwnProperty.call( _opts.colorScheme.event, 'background' ) && _evt.bgColor === Default.colorScheme.event.background && Default.colorScheme.event.background !== _opts.colorScheme.event.background ) {
                    _this[_i].bgColor = _opts.colorScheme.event.background
                }
                if ( Object.hasOwnProperty.call( _opts.colorScheme.event, 'border' ) && _evt.bdColor === Default.colorScheme.event.border && Default.colorScheme.event.border !== _opts.colorScheme.event.border ) {
                    _this[_i].bdColor = _opts.colorScheme.event.border
                }
            }
            if ( Object.hasOwnProperty.call( _opts.colorScheme, 'hookEventColors' ) && typeof _opts.colorScheme.hookEventColors === 'function' ) {
                // Lastly, overwrite current colors
                let _new_colors = _opts.colorScheme.hookEventColors( _evt, { text: _this[_i].color, border: _this[_i].bdColor, background: _this[_i].bgColor } ) || undefined

                if ( typeof _new_colors === 'object' ) {
                    if ( Object.hasOwnProperty.call( _new_colors, 'text' ) && _evt.color !== _new_colors.text ) {
                        _this[_i].color = _new_colors.text
                    }
                    if ( Object.hasOwnProperty.call( _new_colors, 'background' ) && _evt.bgColor !== _new_colors.background ) {
                        _this[_i].bgColor = _new_colors.background
                    }
                    if ( Object.hasOwnProperty.call( _new_colors, 'border' ) && _evt.bdColor !== _new_colors.border ) {
                        _this[_i].bdColor = _new_colors.border
                    }
                }
            }
        })

        this._isCached = this._saveToCache( events )

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
            _x, _w, _row, _c //, _pointSize
//console.log( '!_registerEventData:', EventParams, new_event )

        if ( Object.hasOwnProperty.call( params, 'start' ) && ! this.is_empty( params.start ) ) {
            _x = this._getCoordinateX( params.start )
            new_event.x = this.numRound( _x, 2 )
            if ( Object.hasOwnProperty.call( params, 'end' ) && ! this.is_empty( params.end ) ) {
                _x = this._getCoordinateX( params.end )
                _w = _x - new_event.x
                new_event.width = this.numRound( _w, 2 )

                if ( _opts.eventMeta.display ) {
                    if ( this.is_empty( _opts.eventMeta.content ) && ! Object.hasOwnProperty.call( params, 'rangeMeta' ) ) {
//console.log( '!_registerEventData::', _opts.eventMeta.locale, _opts.eventMeta.format, _opts.scale, params )

                        new_event.rangeMeta += this.getLocaleString( params.start, _opts.eventMeta.scale, _opts.eventMeta.locale, _opts.eventMeta.format )
                        new_event.rangeMeta += ` - ${this.getLocaleString( params.end, _opts.eventMeta.scale, _opts.eventMeta.locale, _opts.eventMeta.format )}`
                    } else {
                        new_event.rangeMeta = _opts.eventMeta.content
                    }
                }
            } else {
                new_event.width = 0
            }
            _row = Object.hasOwnProperty.call( params, 'row' ) ? parseInt( params.row, 10 ) : 1
            _c = Math.floor( _row / 2 )
            new_event.y = ( _row - 1 ) * _opts.rowHeight + new_event.margin + _c
            new_event.height = _opts.rowHeight - (_opts.marginHeight * 2)

            Object.keys( new_event ).forEach( ( _prop ) => {
                switch( true ) {
                    case /^eventId$/i.test( _prop ):
                        if ( Object.hasOwnProperty.call( params, 'id' ) ) {
                            new_event.eventId = parseInt( params.id, 10 )
                        } else {
                            new_event.eventId = parseInt( params[_prop], 10 ) || 0
                        }
                        break
                    case /^(label|content)$/i.test( _prop ):
                        if ( Object.hasOwnProperty.call( params, _prop ) && ! this.is_empty( params[_prop] ) ) {
                            new_event[_prop] = params[_prop]
                        }
                        // Override the children element to label or content setting
                        if ( $(event_element).children(`.event-${_prop}`).length > 0 ) {
                            new_event[_prop] = $(event_element).children(`.event-${_prop}`).html()
                        }
                        break
                    case /^relation$/i.test( _prop ):
                        // For drawing the relation line
                        if ( /^mix(|ed)$/i.test( _opts.type ) || /^point(|er)$/i.test( _opts.type ) ) {
                            //let _pointSize  = this._getPointerSize( new_event.size, new_event.margin )

                            _relation.x = this.numRound( new_event.x, 2 )
                            _relation.y = this.numRound( ( _props.rowSize * ( ( params.row || 1 ) - 1 ) ) + ( _props.rowSize / 2 ), 2 ) + ( ( ( params.row || 1 ) - 1 ) * 0.5 )

//console.log( '!_registerEventData:', params, _props, new_event.x, new_event.y, _pointSize, _relation )
                            new_event[_prop] = {
                                ...params[_prop],
                                ..._relation
                            }
                        }
                        break
                    default:
                        if ( Object.hasOwnProperty.call( params, _prop ) && ! this.is_empty( params[_prop] ) ) {
                            new_event[_prop] = params[_prop]
                        }
                        break
                }
            })
        }
//console.log( '!_registerEventData:', new_event )
        return new_event
    }

    /*
     * @private: Get the coordinate X on the timeline of any date
     */
    _getCoordinateX( date ) {
        /*
        // add new since v2.0.0 : start
        if ( this._config.scale === "day" ) {
            let dateAdjust = new Date( date )

            if ( dateAdjust.getHours() <= this._config.startHour ) {
                date = `${dateAdjust.getFullYear()}-${(dateAdjust.getMonth() + 1)}-${dateAdjust.getDate()} 00:00:00`
            } else
            if ( dateAdjust.getHours() >= this._config.endHour ) {
                date = `${dateAdjust.getFullYear()}-${(dateAdjust.getMonth() + 1)}-${dateAdjust.getDate()} 23:59:59`
            }
        }
        // add new since v2.0.0 : end
        */
        let _props = this._instanceProps,
            _date  = this.supplement( null, this._getPluggableDatetime( date ) ),
            coordinate_x = 0

//console.log( '!_getCoordinateX::', _props, _date )
        if ( _date ) {
            if ( _date - _props.begin >= 0 && _props.end - _date >= 0 ) {
                // When the given date is within the range of timeline begin and end (:> 指定された日付がタイムラインの開始と終了の範囲内にある場合
                coordinate_x = ( Math.abs( _date - _props.begin ) / _props.scale ) * _props.scaleSize
            } else {
                // When the given date is out of timeline range (:> 指定された日付がタイムラインの範囲外にある場合
                coordinate_x = ( ( _date - _props.begin ) / _props.scale ) * _props.scaleSize
            }
        } else {
            //console.warn( 'Cannot parse date because invalid format or undefined.' )
            this._error( 'Cannot parse date because invalid format or undefined.', 'warn' )
        }

        return coordinate_x
    }

    /*
     * @private: Cache the event data to the web storage
     */
    _saveToCache( data ) {
        let strageEngine = /^local(|Storage)$/i.test( this._config.storage ) ? 'localStorage' : 'sessionStorage',
            is_available = ( strageEngine in window ) && ( ( strageEngine === 'localStorage' ? window.localStorage : window.sessionStorage ) !== null )

        if ( is_available ) {
            if ( strageEngine === 'localStorage' ) {
                localStorage.setItem( this._selector, JSON.stringify( data ) )
            } else {
                sessionStorage.setItem( this._selector, JSON.stringify( data ) )
            }
            return true
        } else {
            throw new TypeError( `The storage named "${strageEngine}" can not be available.` )
        }
    }

    /*
     * @private: Load the cached event data from the web storage
     */
    _loadToCache() {
        let strageEngine = /^local(|Storage)$/i.test( this._config.storage ) ? 'localStorage' : 'sessionStorage',
            is_available = ( strageEngine in window ) && ( ( strageEngine === 'localStorage' ? window.localStorage : window.sessionStorage ) !== null ),
            data         = null

        if ( is_available ) {
            if ( strageEngine === 'localStorage' ) {
                data = JSON.parse( localStorage.getItem( this._selector ) )
            } else {
                data = JSON.parse( sessionStorage.getItem( this._selector ) )
            }
        } else {
            throw new TypeError( `The storage named "${strageEngine}" can not be available.` )
        }
        return data
    }

    /*
     * @private: Remove the cache data on the web storage
     */
    _removeCache() {
        let strageEngine = /^local(|Storage)$/i.test( this._config.storage ) ? 'localStorage' : 'sessionStorage',
            is_available = ( strageEngine in window ) && ( ( strageEngine === 'localStorage' ? window.localStorage : window.sessionStorage ) !== null )

        if ( is_available ) {
            if ( strageEngine === 'localStorage' ) {
                localStorage.removeItem( this._selector )
            } else {
                sessionStorage.removeItem( this._selector )
            }
        } else {
            throw new TypeError( `The storage named "${strageEngine}" can not be available.` )
        }
    }

    /*
     * @private: Controller method to place event data on timeline
     */
    _placeEvent() {
        return new Promise(( resolve, reject ) => {
            this._debug( '_placeEvent' )

            if ( ! this._isCached ) {
                //return
                reject('No Cached Event')
            }

            let _elem           = this._element,
                _opts           = this._config,
                _evt_container  = $(_elem).find( Selector.TIMELINE_EVENTS ),
                _relation_lines = $(_elem).find( Selector.TIMELINE_RELATION_LINES ),
                events          = this._loadToCache(),
                placedEvents    = []

            // c.f. https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
            this._observer = new MutationObserver(( mutations ) => {
                mutations.forEach((mutation) => {
                    let _self = mutation.target

                    switch( mutation.type ) {
                        case 'childList':
                            // console.log( 'MutationObserver::childList:', mutation.addedNodes.length, placedEvents.length )
                            if ( mutation.addedNodes.length == placedEvents.length ) {
                                _relation_lines.attr( 'data-state', 'show' )
                                _evt_container.attr( 'data-state', 'show' )
                            }
                            break;
                        case 'attributes':
                            if ( mutation.attributeName === 'data-state' ) {
                                // console.log( 'MutationObserver::attributes:', $(_self).attr('data-state') )
                                if ( $(_self).attr('data-state') === 'shown' ) {
                                    resolve('Completed Placing')
                                } else
                                if ( $(_self).attr('data-state') === 'show' ) {
                                    setTimeout(() => {
                                        _relation_lines.attr( 'data-state', 'shown' )
                                        _evt_container.attr( 'data-state', 'shown' )
                                    }, 300)
                                }
                            }
                            break;
                    }
                })
            })
            this._observer.observe( _evt_container.get(0), { childList: true, attributes: true, subtree: true, attributeOldValue: true } )

            if ( events.length > 0 ) {
                _evt_container.empty()
                /*
                // add new since v2.0.0 : start
                events = events.sort( (a, b) => a.width < b.width ? 1 : -1 ) // sort elements
                // add new since v2.0.0 : end
                */
                events.forEach( ( _evt ) => {
                    // Apply color scheme to the creation event
                    if ( _evt.color === Default.colorScheme.event.text && Default.colorScheme.event.text !== _opts.colorScheme.event.text ) {
                        _evt.color = _opts.colorScheme.event.text
                    }
                    if ( _evt.bgColor === Default.colorScheme.event.background && Default.colorScheme.event.background !== _opts.colorScheme.event.background ) {
                        _evt.bgColor = _opts.colorScheme.event.background
                    }
                    if ( _evt.bdColor === Default.colorScheme.event.border && Default.colorScheme.event.border !== _opts.colorScheme.event.border ) {
                        _evt.bdColor = _opts.colorScheme.event.border
                    }
                    let _evt_elem = this._createEventNode( _evt )

                    if ( _evt_elem ) {
                        //_evt_container.append( _evt_elem )
                        placedEvents.push( _evt_elem )
                    }
                })
                if ( placedEvents.length > 0 ) {
                    _evt_container.append( ...placedEvents )
                }
            } else {
                _relation_lines.attr( 'data-state', 'show' )
                _evt_container.attr( 'data-state', 'show' )
            }

            if ( /^mix(|ed)$/i.test( _opts.type ) || /^point(|er)$/i.test( _opts.type ) ) {
                this._drawRelationLine( events )
            }

            if ( Object.hasOwnProperty.call( _opts.effects, 'presentTime' ) && _opts.effects.presentTime ) {
                this._viewPresentTime()
            }

            resolve(true)
        })// return Promise
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
            }),
            _is_bar   = true

        // Whether this event type is bar or point
        if ( /^point(|er)$/i.test( _opts.type ) ) {
            _is_bar = false // point type
        } else
        if ( /^mix(|ed)$/i.test( _opts.type ) ) {
            if ( /^point(|er)$/i.test( params.type ) ) {
                _is_bar = false // point type
            } else
            if ( params.width < 1 ) {
                _is_bar = ! /^bar$/i.test( params.type ) ? false : true
            }
        }

//console.log( '!_createEventNode:', params, _is_bar )

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
                    // add new since v2.0.0 : start
                    //_evt_elem.append( `<span class="${ClassName.TIMELINE_EVENT_NODE}-next glyphicon glyphicon-search glyphicon-chevron-right" aria-hidden="true"></span>` )
                    // add new since v2.0.0 : end
                }
            } else {
                // The event start datetime is after the timeline end datetime (exclude event) (:> イベント始点がタイムラインの終点より後（除外イベント）
                params.width = -1
            }
        } else {
            // The event start datetime is before the timeline start datetime (:> イベント始点がタイムラインの始点より前
            if ( ! _is_bar ) {
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
                        // add new since v2.0.0 : start
                        //_evt_elem.prepend( `<span class="${ClassName.TIMELINE_EVENT_NODE}-before glyphicon glyphicon-search glyphicon-chevron-left" aria-hidden="true"></span>` )
                        // add new since v2.0.0 : end
                        params.x = 0
                    } else {
                        // The event end datetime is after the timeline end datetime (event exceeded both start and end datetime) (:> イベント終点がタイムラインの終点より後（始点・終点ともに超過イベント）
                        params.width = _props.fullwidth
                        // add new since v2.0.0 : start
                        //_evt_elem.append( `<span class="${ClassName.TIMELINE_EVENT_NODE}-next glyphicon glyphicon-search glyphicon-chevron-right" aria-hidden="true"></span>` )
                        //_evt_elem.prepend( `<span class="${ClassName.TIMELINE_EVENT_NODE}-before glyphicon glyphicon-search glyphicon-chevron-left" aria-hidden="true"></span>` )
                        // add new since v2.0.0 : end
                        params.x = 0
                    }
                }
            }
        }
//console.log( 'x:', params.x, 'w:', params.width, 'x-end:', Math.abs( params.x ) + params.width, 'fw:', _props.fullwidth, 'ps:', params.size )

        if ( ! _is_bar ) {
            // If this event is the point type
            if ( params.width < 0 ) {
                return null
            }
            let _pointSize = this._getPointerSize( params.size, params.margin ),
                _shiftX    = this.numRound( params.x - ( _pointSize / 2 ), 2 ) - params.margin,
                _shiftY    = this.numRound( params.y + ( ( params.height - _pointSize ) / 2 ), 2 ) - params.margin

//console.log( '!!_createEventNode::', params, _pointSize, _shiftX, _shiftY )
            _evt_elem.addClass( ClassName.VIEWER_EVENT_TYPE_POINTER ).css( 'border-color', params.bdColor )
            .css( 'left', `${_shiftX}px` ).css( 'top', `${_shiftY}px` ).css( 'width', `${_pointSize}px` ).css( 'height', `${_pointSize}px` )
            .attr( 'data-base-size', _pointSize ).attr( 'data-base-left', _shiftX ).attr( 'data-base-top', _shiftY )
        } else {
            // If this event is the bar type
            if ( params.width < 1 ) {
                return null
            }
            _evt_elem.css( 'left', `${params.x}px` ).css( 'width', `${params.width}px` )
            /*
            // add new since v2.0.0 : start
            if ( params.width < 15 ) {
                // Create Event info on bullet point
                let date_start = new Date( params.start ),
                    date_start_grid, correction_x, correction_y

                switch ( true ) {
                    case /^months?$/i.test( _opts.scale ):
                        correction_x = 6
                        date_start_grid = `${date_start.getFullYear()}-${(date_start.getMonth() + 1)}-1`

                        _evt_elem.html( `<div class="${ClassName.TIMELINE_EVENT_LABEL}"><span style="border-radius:50%;background-color:${this.hexToRgbA( params.bgColor )}"> &nbsp; </span> ${date_start.getDate()} : ${params.label}</div>` )
                        break
                    case /^(|week)days?$/i.test( _opts.scale ):
                        correction_x = 0
                        date_start_grid = `${date_start.getFullYear()}-${(date_start.getMonth() + 1)}-${date_start.getDate()} 00:00`

                        _evt_elem.html( `<div class="${ClassName.TIMELINE_EVENT_LABEL}"><span style="border-radius:50%;background-color:${this.hexToRgbA( params.bgColor )}"> &nbsp; </span> ${date_start.getHours()}:${date_start.getMinutes()} : ${params.label}</div>` )
                        break
                    case /^hours?$/i.test( _opts.scale ):
                        correction_x = 0
                        date_start_grid = `${date_start.getFullYear()}-${(date_start.getMonth() + 1)}-${date_start.getDate()} ${date_start.getHours()}:00`

                        _evt_elem.html( `<div class="${ClassName.TIMELINE_EVENT_LABEL}"><span style="border-radius:50%;background-color:${this.hexToRgbA( params.bgColor )}"> &nbsp; </span> ${date_start.getHours()}:${date_start.getMinutes()} : ${params.label}</div>` )
                        break
                }
                if ( this._countEventinCell[params.row] == null ) {
                    this._countEventinCell[params.row] = {}
                }
                if ( this._countEventinCell[params.row][date_start_grid] == null ) {
                    this._countEventinCell[params.row][date_start_grid] = 0
                }
                correction_y = this._countEventinCell[params.row][date_start_grid] * EventParams.height
                this._countEventinCell[params.row][date_start_grid]++

                if ( (this._countEventinCell[params.row][date_start_grid] * EventParams.height) > this._config.rowHeight ) {
                     this._config.rowHeight = this._countEventinCell[params.row][date_start_grid] * EventParams.height
                     this.reload( this._config )
                     //console.log("Reload : " + this._config.rowHeight);
                }

                params.x = this._getCoordinateX( date_start_grid )
                _evt_elem.css( 'top', `${this.numRound( params.y+correction_y, 2 )}px` ).css( 'backgroundColor', 'transparent' )
                .css( 'color', 'black' ).css( 'left', `${this.numRound( params.x+correction_x, 2 )}px` )
                .css( 'width', `${this._config.minGridSize}px` ) // .css('height', `12px`)
                //return null
            } else {
                let date_start = new Date( params.start ),
                    date_end   = new Date( params.end ),
                    date_test_grid, correction_y, date_test_grid_index

                switch ( true ) {
                    case /^months?$/i.test( _opts.scale ):
                        date_test_grid_index = `${date_start.getFullYear()}-${(date_start.getMonth() + 1)}-1`
                        break
                    case /^(|week)days?$/i.test( _opts.scale ):
                        date_test_grid_index = `${date_start.getFullYear()}-${(date_start.getMonth() + 1)}-${date_start.getDate()} 00:00`
                        break
                    case /^hours?$/i.test( _opts.scale ):
                        date_test_grid_index = `${date_start.getFullYear()}-${(date_start.getMonth() + 1)}-${date_start.getDate()} ${date_start.getHours()}:00`
                        break
                }
                if ( this._countEventinCell[params.row] == null ) {
                    this._countEventinCell[params.row] = {}
                }
                if ( this._countEventinCell[params.row][date_test_grid_index] == null ) {
                    this._countEventinCell[params.row][date_test_grid_index] = 0
                }
                correction_y = this._countEventinCell[params.row][date_test_grid_index]

                // For all grid between start / end, search max Position Y
                date_test_grid = date_start
                while ( date_test_grid <= date_end ) {
                    switch ( true ) {
                        case /^months?$/i.test( _opts.scale ):
                            date_test_grid = new Date( date_test_grid.getFullYear(), date_test_grid.getMonth() + 1, 1 )
                            date_test_grid_index = `${date_test_grid.getFullYear()}-${(date_test_grid.getMonth() + 1)}-1`
                            break;
                        case /^(|week)days?$/i.test( _opts.scale ):
                            date_test_grid = new Date( date_test_grid.getFullYear(), date_test_grid.getMonth(), date_test_grid.getDate() + 1 )
                            date_test_grid_index = `${date_test_grid.getFullYear()}-${(date_test_grid.getMonth() + 1)}-${date_test_grid.getDate()} 00:00`
                            break;
                        case /^hours?$/i.test( _opts.scale ):
                            date_test_grid = new Date( date_test_grid.getFullYear(), date_test_grid.getMonth(), date_test_grid.getDate(), date_test_grid.getHours() + 1 )
                            date_test_grid_index = `${date_test_grid.getFullYear()}-${(date_test_grid.getMonth() + 1)}-${date_test_grid.getDate()} ${date_test_grid.getHours()}:00`
                            break;
                    }

                    if ( this._countEventinCell[params.row] == null ) {
                        this._countEventinCell[params.row] = {}
                    }
                    if ( this._countEventinCell[params.row][date_test_grid_index] == null ) {
                        this._countEventinCell[params.row][date_test_grid_index] = 0
                    }
                    correction_y = Math.max( this._countEventinCell[params.row][date_test_grid_index], correction_y )
                }

                // set new position
                correction_y++

                switch ( true ) {
                    case /^months?$/i.test( _opts.scale ):
                        date_test_grid_index = `${date_start.getFullYear()}-${(date_start.getMonth() + 1)}-1`
                        break;
                    case /^(|week)days?$/i.test( _opts.scale ):
                        date_test_grid_index = `${date_start.getFullYear()}-${(date_start.getMonth() + 1)}-${date_start.getDate()} 00:00`
                        break;
                    case /^hours?$/i.test( _opts.scale ):
                        date_test_grid_index = `${date_start.getFullYear()}-${(date_start.getMonth() + 1)}-${date_start.getDate()} ${date_start.getHours()}:00`
                        break;
                }
                this._countEventinCell[params.row][date_test_grid_index] = correction_y;

                // For all grid between start / end, set new Position Y
                date_test_grid = date_start;
                while ( date_test_grid <= date_end ) {
                    switch ( true ) {
                        case /^months?$/i.test( _opts.scale ):
                            date_test_grid = new Date( date_test_grid.getFullYear(), date_test_grid.getMonth() + 1, 1 )
                            date_test_grid_index = `${date_test_grid.getFullYear()}-${(date_test_grid.getMonth() + 1)}-1`
                            break
                        case /^(|week)days?$/i.test( _opts.scale ):
                            date_test_grid = new Date( date_test_grid.getFullYear(), date_test_grid.getMonth(), date_test_grid.getDate() + 1 )
                            date_test_grid_index = `${date_test_grid.getFullYear()}-${(date_test_grid.getMonth() + 1)}-${date_test_grid.getDate()} 00:00`
                            break
                        case /^hours?$/i.test( _opts.scale ):
                            date_test_grid = new Date( date_test_grid.getFullYear(), date_test_grid.getMonth(), date_test_grid.getDate(), date_test_grid.getHours() + 1 )
                            date_test_grid_index = `${date_test_grid.getFullYear()}-${(date_test_grid.getMonth() + 1)}-${date_test_grid.getDate()} ${date_test_grid.getHours()}:00`
                            break
                    }

                    if ( this._countEventinCell[params.row] == null ) {
                        this._countEventinCell[params.row] = {}
                    }
                    if ( this._countEventinCell[params.row][date_test_grid_index] == null ) {
                        this._countEventinCell[params.row][date_test_grid_index] = 0
                    }

                    this._countEventinCell[params.row][date_test_grid_index] = correction_y
                }

                if ( ( correction_y * EventParams.height ) > this._config.rowHeight ) {
                     this._config.rowHeight = correction_y * EventParams.height
                     this.reload( this._config )
                }
                _evt_elem.css( 'top', `${this.numRound( params.y + ( (correction_y - 1) * EventParams.height ), 2 )}px` )
                .css( 'left', `${params.x}px` ).css( 'width', `${params.width}px` ).css( 'border', `1px solid ${EventParams.bdColor}` )
            }
            // add new since v2.0.0 : end
            */
        }

        _evt_elem.attr( 'data-uid', params.uid )
        /*
        // add new since v2.0.0 : start
        _evt_elem.attr( 'data-category', params.category);
        // add new since v2.0.0 : end
        */
        if ( ! this.is_empty( params.image ) ) {
            if ( ! _is_bar ) {
                _evt_elem.css( 'background-image', `url(${params.image})` )
            } else {
                let _imgSize = params.height - ( params.margin * 2 )
                _evt_elem.prepend( `<img src="${params.image}" class="${ClassName.TIMELINE_EVENT_THUMBNAIL}" width="${_imgSize}" height="${_imgSize}" />` )
            }
        }

        if ( _is_bar && _opts.eventMeta.display ) {
//console.log( '!_createEventNode:', params )
            params.extend.meta = params.rangeMeta
        }

        if ( ! this.is_empty( params.extend ) ) {
            for ( let _prop of Object.keys( params.extend ) ) {
                _evt_elem.attr( `data-${_prop}`, params.extend[_prop] )
                if ( _prop === 'toggle' && [ 'popover', 'tooltip' ].includes( params.extend[_prop] ) ) {
                    // for bootstrap's popover or tooltip
                    _evt_elem.attr( 'title', params.label )
                    if ( ! Object.hasOwnProperty.call( params.extend, 'content' ) ) {
                        _evt_elem.attr( 'data-content', params.content )
                    }
                }
            }
        }

        if ( ! this.is_empty( params.callback ) ) {
            _evt_elem.attr( 'data-callback', params.callback )
        }

        return _evt_elem
    }

    /*
     * @private: Retrieve the diameter size (pixel) of pointer (:> ポインタの直径サイズ（ピクセル値）を取得する
     */
    _getPointerSize( key, margin ) {
        let _props = this._instanceProps,
            _max   = Math.min( (_props.scaleSize - ( margin * 2 )), (_props.rowSize - ( margin * 2 )) ),
            _size  = null

        switch ( true ) {
            case /^([1-9]\d*|0)$/i.test( key ):
                _size = Math.max( parseInt( key, 10 ), MIN_POINTER_SIZE )
                break
            case /^small$/i.test( key ):
                _size = Math.max( this.numRound( _max / 4, 2 ), MIN_POINTER_SIZE )
                break
            case /^large$/i.test( key ):
                _size = Math.max( this.numRound( _max * 0.75, 2 ), MIN_POINTER_SIZE )
                break
            case /^normal$/i.test( key ):
            default:
                _size = Math.max( this.numRound( _max / 2, 2 ), MIN_POINTER_SIZE )
                break
        }

// console.log( '!_getPointerSize:', _props, key, _max, _size )
        return _size
    }

    /*
     * @private: Draw the relational lines
     */
    _drawRelationLine( events ) {
        // let _opts         = this._config,
        let _props        = this._instanceProps,
            _canvas       = $(this._element).find( Selector.TIMELINE_RELATION_LINES ),
            ctx_relations = _canvas[0].getContext('2d'),
            drawLine      = ( _sx, _sy, _ex, _ey, evt, _ba ) => {
                let _curveType   = {},
                    _strokeColor = EventParams.bdColor,
                    _radius      = this.numRound( Math.min( _props.scaleSize, _props.rowSize ) / 2, 2 )//,
                    // _subRadius = this.numRound( this._getPointerSize( evt.size, _opts.marginHeight ) / 2, 2 )

                // Defaults
                if ( _strokeColor === Default.colorScheme.event.border && Default.colorScheme.event.border !== this._config.colorScheme.event.border ) {
                    _strokeColor = this._config.colorScheme.event.border
                }
                ctx_relations.strokeStyle = _strokeColor
                ctx_relations.lineWidth   = 2.5
                ctx_relations.filter      = 'url(#crisp)'

                for ( let _key of Object.keys( evt.relation ) ) {
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
                                        // Relational endpoint is located "under" self (:> 連結点が自分の下にある
                                        if ( _sx < _ex ) {
                                            // Then relational endpoint is located "right" self (:> 連結点が自分の右にある "(_sx,_sy)┐(_ex,_ey)" as "rt"
                                            _curveType[_ba] = 'rt'
                                        } else
                                        if ( _sx > _ex ) {
                                            // Then relational endpoint is located "left" self (:> 連結点が自分より左にある "_⊃" as "rt+rb"
                                            _curveType[_ba] = 'rt+rb'
                                        } else {
                                            // Relational endpoint is located "just under" self (:> 連結点が自分の直下 "│" to bottom
                                            _curveType[_ba] = null
                                        }
                                    } else
                                    if ( _sy > _ey ) {
                                        // Relational endpoint is located "above" self (:> 連結点が自分より上にある
                                        if ( _sx < _ex ) {
                                            // Then relational endpoint is located "right" self (:> 連結点が自分の右にある "┘" as "rb"
                                            _curveType[_ba] = 'rb'
                                        } else
                                        if ( _sx > _ex ) {
                                            // Then relational endpoint is located "left" self (:> 連結点が自分より左にある "￣⊃" as "rb+rt"
                                            _curveType[_ba] = 'rb+rt'
                                        } else {
                                            // Relational endpoint is located "just under" self (:> 連結点が自分の直上 "│" to top
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
                                ctx_relations.lineTo( _ex + _radius, _sy ) // "─"
                            }
                            if ( Math.abs( _ey - _sy ) > _radius ) {
                                let _hep = _ey - _sy >= 0 ? _sy + _radius : _sy - _radius
                                ctx_relations.quadraticCurveTo( _ex, _sy, _ex, _hep ) // "┌"
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
                        default:
                            ctx_relations.moveTo( _sx, _sy )
                            ctx_relations.lineTo( _ex, _ey )
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
//console.log( '!_drawRelationLine:', evt )
            let _rel = evt.relation,
                _sx, _sy, _ex, _ey,
                _targetId, _targetEvent

            if ( Object.hasOwnProperty.call( _rel, 'before' ) ) {
                // before: targetEvent[ _ex, _ey ] <---- selfEvent[ _sx, _sy ]
                // (:> before: 自分を起点（ _sx, _sy ）として左方向の連結点（ _ex, _ey ）へ向かう描画方式
                _sx = _rel.x + this.numRound( evt.margin / 2, 2 )
                _sy = _rel.y + this.numRound( evt.margin / 2, 2 )
                _targetId = parseInt( _rel.before, 10 )
                if ( _targetId < 0 ) {
                    _ex = 0
                    _ey = _sy + this.numRound( evt.margin / 2, 2 )
                } else {
                    _targetEvent = events.find( ( _evt ) => parseInt( _evt.eventId, 10 ) == _targetId )
                    if ( ! this.is_empty( _targetEvent ) && _targetEvent.relation ) {
                        _ex = _targetEvent.relation.x < 0 ? 0 : _targetEvent.relation.x + this.numRound( evt.margin / 2, 2 )
                        _ey = _targetEvent.relation.y + this.numRound( evt.margin / 2, 2 )
                    }
                }
                if ( _sx >= 0 && _sy >= 0 && _ex >= 0 && _ey >= 0 ) {
                    drawLine( _sx, _sy, _ex, _ey, evt, 'before' )
                }
            }
            if ( Object.hasOwnProperty.call( _rel, 'after' ) ) {
                // after: selfEvent[ _sx, _sy ] ----> targetEvent[ _ex, _ey ]
                // (:> after: 自分を起点（ _sx, _sy ）として右方向の連結点（ _ex, _ey ）へ向かう描画方式
                _sx = _rel.x + this.numRound( evt.margin / 2, 2 )
                _sy = _rel.y + this.numRound( evt.margin / 2, 2 )
                _targetId = parseInt( _rel.after, 10 )
                if ( _targetId < 0 ) {
                    _ex = _props.fullwidth
                    _ey = _sy + this.numRound( evt.margin / 2, 2 )
                } else {
                    _targetEvent = events.find( ( _evt ) => parseInt( _evt.eventId, 10 ) == _targetId )
                    if ( ! this.is_empty( _targetEvent ) && _targetEvent.relation ) {
                        _ex = _targetEvent.relation.x > _props.fullwidth ? _props.fullwidth : _targetEvent.relation.x + this.numRound( evt.margin / 2, 2 )
                        _ey = _targetEvent.relation.y + this.numRound( evt.margin / 2, 2 )
                    }
                }
                if ( _sx >= 0 && _sy >= 0 && _ex >= 0 && _ey >= 0 ) {
                    drawLine( _sx, _sy, _ex, _ey, evt, 'after' )
                }
            }

        })

    }

    /*
     * @private: Output a marker of the present time
     */
    _viewPresentTime() {
        let _elem  = this._element,
            _props = this._instanceProps,
            _nowDt = new Date()

        if ( this.diffDate( _props.begin, _nowDt ) < 0 || this.diffDate( _nowDt, _props.end ) < 0 ) {
            return
        }
        let _marker = $('<div></div>', { class: ClassName.PRESENT_TIME_MARKER,
                style: `left:${this.numRound( this._getCoordinateX( _nowDt ), 2 )}px;top:${$(_elem).find(Selector.TIMELINE_RULER_TOP).height()}px;height:${$(_elem).find(Selector.TIMELINE_EVENT_CONTAINER).height()}px;`,
            })

        $(_elem).find(Selector.TIMELINE_MAIN).append( _marker )
    }

    /*
     * @private: Retrieve the mapping data that placed current events
     */
    _mapPlacedEvents() {
        let _that      = this,
            _tl_events = $(this._element).find( Selector.TIMELINE_EVENTS ).children(),
            _cache     = this._loadToCache(),
            _events    = []

        if ( ! this._isCached || this.is_empty( _cache ) ) {
            return _events
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
        this._debug( '_activeEvent@Event' )
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
     * @private: Event when scroll timeline
     */
    _scrollTimeline( event ) {
        this._debug( '_scrollTimeline@Event' )

        let _elem = event.target

        this._debug( _elem.scrollLeft )
    }

    /*
     * @private: Event when touchstart or mousedown on the timeline container
     */
    _swipeStart( event ) {
        this._debug( '_swipeStart@Event' )
        event.preventDefault()
        let _props = this._instanceProps

        _props.absX  = IS_TOUCH ? event.changedTouches[0].pageX : event.pageX
        _props.moveX = $(event.currentTarget).parent(Selector.TIMELINE_CONTAINER).scrollLeft() * -1
        this._isTouched = true
    }

    /*
     * @private: Event when touchmove or mousemove in the timeline container
     */
    _swipeMove( event ) {
        if ( ! this._isTouched ) {
            return
        }
        this._debug( '_swipeMove@Event' )
        event.preventDefault()
        let _props = this._instanceProps

        _props.moveX -= _props.absX - ( IS_TOUCH ? event.changedTouches[0].pageX : event.pageX )
        $(event.currentTarget).parent(Selector.TIMELINE_CONTAINER).scrollLeft( _props.moveX * -1 )
        _props.absX  = IS_TOUCH ? event.changedTouches[0].pageX : event.pageX
    }

    /*
     * @private: Event when touchend or mouseup from the timeline container
     */
    _swipeEnd() {
        if ( ! this._isTouched ) {
            return
        }
        this._debug( '_swipeEnd@Event' )
        this._isTouched = false
    }

    /*
     * @private: Event when hover on the pointer type event
     */
    _hoverPointer( event ) {
        if ( ! this._config.effects.hoverEvent ) {
            return
        }
        this._debug( '_hoverPointer@Event' )
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

//this._getPointerSize( new_event.size, new_event.margin )
        if ( 'mouseenter' === event.type ) {
            _w = Math.min( this.numRound( _w * 1.25, 'ceil' ), Math.min( _props.rowSize, _props.scaleSize ) )
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
     * @private: Logger of errors when the method execution
     */
    _error( message, type = 'error' ) {
        if ( message && window.console ) {
            type = window.console[type] ? type : 'error'
            console[type]( message )
        }
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
//console.log('!this._isInitialized:', this._isInitialized, 'this._isCompleted:', this._isCompleted )
        if ( this._isInitialized ) {
            return
        }

        let _elem    = this._element,
            _opts    = this._config,
            _args    = args[0],
            callback = _args.length > 0 && typeof _args[0] === 'function' ? _args[0] : null,
            userdata = _args.length > 1 ? this.getUserArg( _args.slice(1) ) : undefined

// console.log( '!initialized:', callback, userdata )
        if ( callback && ! this._isInitialized ) {
            this._debug( 'Fired your callback function after initializing this plugin.' )

            callback( _elem, _opts, userdata )
        }

        this._isInitialized = true

        return this
    }

    /*
     * @public: Destroy the object to which the plugin is applied
     */
    destroy() {
        this._debug( 'destroy' )

        $.removeData( this._element, DATA_KEY )

        $(window, document, this._element).off( EVENT_KEY )

        $(this._element).remove()

        this._removeCache()

        for ( let _prop of Object.keys( this ) ) {
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
     * @public: Move shift or expand the range of timeline container as to past direction (to left)
     */
    dateback( ...args ) {
        this._debug( 'dateback' )

        let _args    = args[0],
            _opts    = this._config,
            moveOpts = this.supplement( null, _args[0], this.validateObject ),
            callback = _args.length > 1 && typeof _args[1] === 'function' ? _args[1] : null,
            userdata = _args.length > 2 ? this.getUserArg( _args.slice(2) ) : undefined,
            newOpts  = {},
            begin_date, end_date, _tmpDate

        if ( this.is_empty( moveOpts ) ) {
            moveOpts = { scale: _opts.scale, range: _opts.range, shift: true }
        } else {
            if ( ! Object.hasOwnProperty.call( moveOpts, 'shift' ) || moveOpts.shift !== false ) {
                moveOpts.shift = true
            }
            if ( ! Object.hasOwnProperty.call( moveOpts, 'scale' ) || ! this.verifyScale( moveOpts.scale ) ) {
                moveOpts.scale = _opts.scale
            }
            if ( ! Object.hasOwnProperty.call( moveOpts, 'range' ) || ( ! _opts.disableLimitter ? parseInt( moveOpts.range, 10 ) > LimitScaleGrids[moveOpts.scale] : true ) ) {
                moveOpts.range = _opts.range
            }
        }
        _tmpDate = new Date( _opts.startDatetime )
        switch ( true ) {
            case /^years?$/i.test( moveOpts.scale ):
                begin_date = new Date( _tmpDate.setFullYear( _tmpDate.getFullYear() - parseInt( moveOpts.range, 10 ) ) )
                break
            case /^months?$/i.test( moveOpts.scale ):
                begin_date = new Date( _tmpDate.setMonth( _tmpDate.getMonth() - parseInt( moveOpts.range, 10 ) ) )
                break
            default:
                begin_date = new Date( _tmpDate.getTime() - ( this.verifyScale( moveOpts.scale, _tmpDate.getTime(), _tmpDate.getTime(), false ) * parseInt( moveOpts.range, 10 ) ) )
                break
        }
        newOpts.startDatetime = begin_date.toString()
        if ( moveOpts.shift ) {
            _tmpDate = new Date( _opts.endDatetime )
            switch ( true ) {
                case /^years?$/i.test( moveOpts.scale ):
                    end_date = new Date( _tmpDate.setFullYear( _tmpDate.getFullYear() - parseInt( moveOpts.range, 10 ) ) )
                    break
                case /^months?$/i.test( moveOpts.scale ):
                    end_date = new Date( _tmpDate.setMonth( _tmpDate.getMonth() - parseInt( moveOpts.range, 10 ) ) )
                    break
                default:
                    end_date = new Date( _tmpDate.getTime() - ( this.verifyScale( moveOpts.scale, _tmpDate.getTime(), _tmpDate.getTime(), false ) * parseInt( moveOpts.range, 10 ) ) )
                    break
            }
            newOpts.endDatetime = end_date.toString()
        }
        if ( moveOpts.scale !== _opts.scale ) {
            newOpts.moveScale = moveOpts.scale
        }
//console.log( '!dateback::', moveOpts, _opts.startDatetime, _opts.endDatetime, newOpts )

        this.reload( [newOpts] )

        if ( callback ) {
            this._debug( 'Fired your callback function after datebacking.' )

            callback( this._element, _opts, userdata )
        }
    }

    /*
     * @public: Move shift or expand the range of timeline container as to futrue direction (to right)
     */
    dateforth( ...args ) {
        this._debug( 'dateforth' )

        let _args    = args[0],
            _opts    = this._config,
            moveOpts = this.supplement( null, _args[0], this.validateObject ),
            callback = _args.length > 1 && typeof _args[1] === 'function' ? _args[1] : null,
            userdata = _args.length > 2 ? this.getUserArg( _args.slice(2) ) : undefined,
            newOpts  = {},
            begin_date, end_date, _tmpDate

        if ( this.is_empty( moveOpts ) ) {
            moveOpts = { scale: _opts.scale, range: _opts.range, shift: true }
        } else {
            if ( ! Object.hasOwnProperty.call( moveOpts, 'shift' ) || moveOpts.shift !== false ) {
                moveOpts.shift = true
            }
            if ( ! Object.hasOwnProperty.call( moveOpts, 'scale' ) || ! this.verifyScale( moveOpts.scale ) ) {
                moveOpts.scale = _opts.scale
            }
            if ( ! Object.hasOwnProperty.call( moveOpts, 'range' ) || ( ! _opts.disableLimitter ? parseInt( moveOpts.range, 10 ) > LimitScaleGrids[moveOpts.scale] : true ) ) {
                moveOpts.range = _opts.range
            }
        }
        _tmpDate = new Date( _opts.endDatetime )
        switch ( true ) {
            case /^years?$/i.test( moveOpts.scale ):
//console.log(_tmpDate, _tmpDate.getTime(), _tmpDate.getFullYear(), _tmpDate.setFullYear(_tmpDate.getFullYear() + parseInt( moveOpts.range, 10 ) ) )
                end_date = new Date( _tmpDate.setFullYear( _tmpDate.getFullYear() + parseInt( moveOpts.range, 10 ) ) )
                break
            case /^months?$/i.test( moveOpts.scale ):
                end_date = new Date( _tmpDate.setMonth( _tmpDate.getMonth() + parseInt( moveOpts.range, 10 ) ) )
                break
            default:
                end_date = new Date( _tmpDate.getTime() + ( this.verifyScale( moveOpts.scale, _tmpDate.getTime(), _tmpDate.getTime(), false ) * parseInt( moveOpts.range, 10 ) ) )
                break
        }
        newOpts.endDatetime = end_date.toString()
        if ( moveOpts.shift ) {
            _tmpDate = new Date( _opts.startDatetime )
            switch ( true ) {
                case /^years?$/i.test( moveOpts.scale ):
                    begin_date = new Date( _tmpDate.setFullYear( _tmpDate.getFullYear() + parseInt( moveOpts.range, 10 ) ) )
                    break
                case /^months?$/i.test( moveOpts.scale ):
                    begin_date = new Date( _tmpDate.setMonth( _tmpDate.getMonth() + parseInt( moveOpts.range, 10 ) ) )
                    break
                default:
                    begin_date = new Date( _tmpDate.getTime() + ( this.verifyScale( moveOpts.scale, _tmpDate.getTime(), _tmpDate.getTime(), false ) * parseInt( moveOpts.range, 10 ) ) )
                    break
            }
            newOpts.startDatetime = begin_date.toString()
        }
        if ( moveOpts.scale !== _opts.scale ) {
            newOpts.moveScale = moveOpts.scale
        }
//console.log( '!dateforth::', moveOpts, _opts.startDatetime, _opts.endDatetime, newOpts )

        this.reload( [newOpts] )

        if ( callback ) {
            this._debug( 'Fired your callback function after dateforthing.' )

            callback( this._element, this._config, userdata )
        }
    }

    /*
     * @public: Move the display position of the timeline container to the specified position
     */
    alignment( ...args ) {
        this._debug( 'alignment' )

        let _opts         = this._config,
            _props        = this._instanceProps,
            _elem         = this._element,
            _tl_container = $(_elem).find( Selector.TIMELINE_CONTAINER ),
            _movX         = 0,
            _args         = ! this.is_empty( args ) ? args[0] : [],
            position      = _args.length > 0 && typeof _args[0] === 'string' ? _args[0] : _opts.rangeAlign,
            duration      = _args.length > 1 && /^(\d{1,}|fast|normal|slow)$/i.test( _args[1] ) ? _args[1] : 0

//console.log( args, _args, position, duration )
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
                if ( ! this.is_empty( lastEvent ) ) {
                    $(`${Selector.TIMELINE_EVENT_NODE}[data-uid="${lastEvent.uid}"]`).trigger( Event.FOCUSIN_EVENT )
                }
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
                if ( ! this.is_empty( targetEvent ) ) {
                    $(`${Selector.TIMELINE_EVENT_NODE}[data-uid="${targetEvent.uid}"]`).trigger( Event.FOCUSIN_EVENT )
                }
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
        if ( duration === '0' ) {
            _tl_container.scrollLeft( _movX )
        } else {
            _tl_container.animate({ scrollLeft: _movX }, duration )
        }
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
    async addEvent( ...args ) {
        this._debug( 'addEvent' )

        let _args        = args[0],
            events       = this.supplement( null, _args[0], this.validateArray ),
            callback     = _args.length > 1 && typeof _args[1] === 'function' ? _args[1] : null,
            userdata     = _args.length > 2 ? this.getUserArg( _args.slice(2) ) : undefined,
            _cacheEvents = this._loadToCache(),
            _cacheIds    = _cacheEvents.map((evt) => evt.eventId),
            lastEventId  = 0,
            addedEvents  = [],
            add_done     = false

        if ( this.is_empty( events ) || ! this._isCompleted ) {
            return
        }

        if ( ! this.is_empty( _cacheEvents ) ) {
            //_cacheEvents.sort( this.compareValues( 'eventId' ) )
            //lastEventId = parseInt( _cacheEvents[_cacheEvents.length - 1].eventId, 10 )
            lastEventId = Math.max( ..._cacheIds )
        }
//console.log( '!_addEvent::before:', _cacheEvents, lastEventId, callback, userdata )

        //events.forEach( ( evt ) => {
        events.some( ( evt ) => {
            if ( ! this.is_empty( evt.eventId ) && _cacheIds.includes( evt.eventId ) ) {
                this._error( `An event with the same eventID: ${evt.eventId} already exists.`, 'warn' )
                return false
            }
            let _one_event = this._registerEventData( '<div></div>', evt )

            if ( ! this.is_empty( _one_event ) ) {
//console.log( '!!_addEvent::before:', _cacheIds, lastEventId, _one_event.eventId )
                if ( _one_event.eventId == 0 ) {
                    _one_event.eventId = Math.max( lastEventId + 1, parseInt( _one_event.eventId, 10 ) )
                    _cacheEvents.push( _one_event )
                    lastEventId = parseInt( _one_event.eventId, 10 )
                } else {
                    _cacheEvents.push( _one_event )
                    lastEventId = lastEventId < _one_event.eventId ? _one_event.eventId : lastEventId
                }
                addedEvents[_one_event.eventId] = _one_event
                _cacheIds.push( _one_event.eventId )
                add_done = true
            }
        })
//console.log( '!!!_addEvent::after:', _cacheEvents, lastEventId, callback, userdata )
        if ( ! add_done ) {
            return
        }

        this._saveToCache( _cacheEvents )

        // Prevents flicker when re-placing events; Added since v2.1.0 (#51)
        $(this._element).find(Selector.TIMELINE_RELATION_LINES)[0].style.opacity = 1
        $(this._element).find(Selector.TIMELINE_EVENTS)[0].style.opacity = 1

        await this._placeEvent()

        if ( callback ) {
            this._debug( 'Fired your callback function after replacing events.' )

            if ( userdata ) {
                callback( this._element, this._config, userdata, addedEvents )
            } else {
                callback( this._element, this._config, addedEvents )
            }
        }
    }

    /*
     * @public: Remove events from the currently timeline object
     */
    async removeEvent( ...args ) {
        this._debug( 'removeEvent' )

        let _args         = args[0],
            targets       = this.supplement( null, _args[0], this.validateArray ),
            callback      = _args.length > 1 && typeof _args[1] === 'function' ? _args[1] : null,
            userdata      = _args.length > 2 ? this.getUserArg( _args.slice(2) ) : undefined,
            _cacheEvents  = this._loadToCache(),
            condition     = {},
            removedEvents = []

        if ( this.is_empty( targets ) || ! this._isCompleted || this.is_empty( _cacheEvents ) ) {
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
            //_cacheEvents.forEach( ( evt ) => {
            _cacheEvents.some( ( evt, idx ) => {
                let is_remove = false

                switch ( condition.type ) {
                    case 'eventId': {
                        if ( parseInt( evt.eventId, 10 ) == condition.value ) {
                            //console.log( `!removeEvent::${condition.type}:${condition.value}:`, _cacheEvents[_idx] )
                            is_remove = true
                        }
                        break
                    }
                    case 'daterange': {
                        let _fromX = condition.value.from ? Math.ceil( this._getCoordinateX( condition.value.from.toString() ) ) : 0,
                            _toX   = condition.value.to   ? Math.floor( this._getCoordinateX( condition.value.to.toString() ) ) : _fromX

                        //console.log( `!removeEvent::${condition.type}:${condition.value.from} ~ ${condition.value.to}:`, `${evt.eventId}: ${_fromX} <= ${evt.x} <= ${_toX} ?`, _fromX <= evt.x && evt.x <= _toX )
                        if ( _fromX <= evt.x && evt.x <= _toX ) {
                            is_remove = true
                        }
                        break
                    }
                    case 'regex': {
                        //console.log( `!removeEvent::${condition.type}:${condition.value}:`, JSON.stringify( evt ) )
                        if ( condition.value.test( JSON.stringify( evt ) ) ) {
                            is_remove = true
                        }
                        break
                    }
                }
                if ( is_remove ) {
                    removedEvents[evt.eventId] = evt
                    _cacheEvents.splice( idx, 1 )
                }
            })
        })
        if ( removedEvents.length == 0 ) {
            this._error( 'There is no event that matches the deletion condition.', 'warn' )
            return
        }

        this._saveToCache( _cacheEvents )

        // Prevents flicker when re-placing events; Added since v2.1.0 (#51)
        $(this._element).find(Selector.TIMELINE_RELATION_LINES)[0].style.opacity = 1
        $(this._element).find(Selector.TIMELINE_EVENTS)[0].style.opacity = 1

        await this._placeEvent()

        if ( callback ) {
            this._debug( 'Fired your callback function after placing additional events.' )

            if ( userdata ) {
                callback( this._element, this._config, userdata, removedEvents )
            } else {
                callback( this._element, this._config, removedEvents )
            }
        }
    }

    /*
     * @public: Update events on the currently timeline object
     */
    async updateEvent( ...args ) {
        this._debug( 'updateEvent' )

        let _args         = args[0],
            events        = this.supplement( null, _args[0], this.validateArray ),
            callback      = _args.length > 1 && typeof _args[1] === 'function' ? _args[1] : null,
            userdata      = _args.length > 2 ? this.getUserArg( _args.slice(2) ) : undefined,
            _cacheEvents  = this._loadToCache(),
            _cacheIds     = _cacheEvents.map((evt) => evt.eventId),
            updatedEvents = [],
            update_done   = false

        if ( this.is_empty( events ) || ! this._isCompleted || this.is_empty( _cacheEvents ) ) {
            return
        }

        //events.forEach( ( evt ) => {
        events.some( ( evt ) => {
            if ( this.is_empty( evt.eventId ) ) {
                this._error( 'Could not update because the eventID to be updated is not defined.', 'warn' )
                return false
            }
            if ( ! _cacheIds.includes( evt.eventId ) ) {
                this._error( `The event node with the eventID: ${evt.eventId} to update does not exist.`, 'warn' )
                return false
            }
            let _upc_event = this._registerEventData( '<div></div>', evt ), // Update Candidate
                _old_index = null,
                _old_event = _cacheEvents.find( ( _evt, _idx ) => {
                    _old_index = _idx
                    return _evt.eventId == _upc_event.eventId
                }),
                _new_event = {}

            if ( ! this.is_empty( _old_event ) && ! this.is_empty( _upc_event ) ) {
                if ( Object.hasOwnProperty.call( _upc_event, 'uid' ) ) {
                    delete _upc_event.uid
                }
                _new_event = Object.assign( _new_event, _old_event, _upc_event )
//console.log( _new_event, _old_event, _upc_event, _old_index )
                _cacheEvents[_old_index] = _new_event
                updatedEvents[_upc_event.eventId] = _upc_event
                _cacheIds.push( _upc_event.eventId )
                update_done = true
            }
        })

        if ( ! update_done ) {
            return
        }

        this._saveToCache( _cacheEvents )

        // Prevents flicker when re-placing events; Added since v2.1.0 (#51)
        $(this._element).find(Selector.TIMELINE_RELATION_LINES)[0].style.opacity = 1
        $(this._element).find(Selector.TIMELINE_EVENTS)[0].style.opacity = 1

        await this._placeEvent()

        if ( callback ) {
            this._debug( 'Fired your callback function after updating events.' )

            if ( userdata ) {
                callback( this._element, this._config, userdata, updatedEvents )
            } else {
                callback( this._element, this._config, updatedEvents )
            }
        }
    }

    /*
     * @public: Reload the timeline with overridable any options
     */
    async reload( ...args ) {
        this._debug( 'reload' )

        let _args        = args[0],
            _upc_options = this.supplement( null, _args[0], this.validateObject ),
            callback     = _args.length > 1 && typeof _args[1] === 'function' ? _args[1] : null,
            userdata     = _args.length > 2 ? this.getUserArg( _args.slice(2) ) : undefined,
            _elem        = this._element,
            $default_evt = $(_elem).find( Selector.DEFAULT_EVENTS ),
            _old_options = this._config,
            _new_options = {},
            _chk_scale

        if ( ! this.is_empty( _upc_options ) ) {
            // _new_options = Object.assign( _new_options, _old_options, _upc_options )
            _new_options = this.mergeDeep( _old_options, _upc_options )
            this._config = _new_options
        }

        this._isInitialized = false
        this._isCached      = false
        this._isCompleted   = false
        this._instanceProps = {}
        this._countEventinCell = {}

        $(_elem).empty().append( $default_evt )

        this._calcVars()

        this.showLoader()

        if ( Object.hasOwnProperty.call( this._config, 'moveScale' ) ) {
            _chk_scale = this._config.moveScale
            delete this._config.moveScale
        } else {
            _chk_scale = this._config.scale
        }
        if ( ! this._verifyMaxRenderableRange( _chk_scale ) ) {
            throw new RangeError( `Timeline display period exceeds maximum renderable range.` )
        }

        if ( ! this._isInitialized ) {
            this._renderView()
            this._isInitialized = true
        }

        if ( this._config.reloadCacheKeep ) {
            let _cacheEvents = this._loadToCache(),
                _renewEvents = []

            if ( ! this.is_empty( _cacheEvents ) ) {
                _cacheEvents.forEach( ( evt ) => {
                    delete evt.uid
                    delete evt.x
                    delete evt.Y
                    delete evt.width
                    delete evt.height
                    delete evt.relation.x
                    delete evt.relation.y
                    _renewEvents.push( this._registerEventData( '<div></div>', evt ) )
                })
            }
            this._isCached = this._saveToCache( _renewEvents )
        } else {
            this._loadEvent()
        }

        await this._placeEvent()

        this._isCompleted = true

        await this.hideLoader()

        if ( callback ) {
            this._debug( 'Fired your callback function after reloading timeline.' )

            callback( this._element, this._config, userdata )
        }
        // Binding bs.popover
        if ( $.fn['popover'] ) {
            $('[data-toggle="popover"]').popover()
        }
    }

    /*
     * @public: The method that fires when an event on the timeline is clicked (:> タイムライン上のイベントがクリックされた時に発火
     *
     * Note: You can hook the custom processing with the callback specified in the event parameter. (:> イベントパラメータに指定したコールバックでカスタム処理をフックできます
     */
    openEvent( event ) {
        this._debug( 'openEvent' )

        if ( ! this.is_empty( event ) && ! Object.hasOwnProperty.call( event, 'type' ) && ! Object.hasOwnProperty.call( event, 'target' ) ) {
            if ( typeof event[0] === 'function' ) {
                this._beforeOpenEvent = event[0]
            }
        }

        let _self        = event.target,
            $viewer      = $(document).find( Selector.EVENT_VIEW ),
            //eventId    = parseInt( $(_self).attr( 'id' ).replace( 'evt-', '' ), 10 ),
            uid          = $(_self).data( 'uid' ),
            //meta       = this.supplement( null, $(_self).data( 'meta' ) ),
            callback     = this.supplement( null, $(_self).data( 'callback' ) ),
            _cacheEvents = this._loadToCache(),
            _eventData   = _cacheEvents.find( ( event ) => event.uid === uid ),
            _hookedState = true

        if ( this.is_empty( _self ) ) {
            return
        }

        // Generate content for viewer
        let _label   = $('<div></div>', { class: ClassName.VIEWER_EVENT_TITLE }),
            _content = $('<div></div>', { class: ClassName.VIEWER_EVENT_CONTENT }),
            _meta    = $('<div></div>', { class: ClassName.VIEWER_EVENT_META }),
            _image   = $('<div></div>', { class: ClassName.VIEWER_EVENT_IMAGE_WRAPPER }),
            _viewers = {},
            _order   = [ 'label', 'image', 'content', 'meta' ]

        if ( ! this.is_empty( _eventData.image ) ) {
            _image.append( `<img src="${_eventData.image}" class="${ClassName.VIEWER_EVENT_IMAGE}" />` )
            //_viewers.push( _image.get(0) )
            _viewers.image = _image.get(0)
        }
        if ( ! this.is_empty( _eventData.label ) ) {
            _label.html( _eventData.label )
            //_viewers.push( _label.get(0) )
            _viewers.label = _label.get(0)
        }
        if ( ! this.is_empty( _eventData.content ) ) {
            _content.html( _eventData.content )
            //_viewers.push( _content.get(0) )
            _viewers.content = _content.get(0)
        }
        if ( ! this.is_empty( _eventData.rangeMeta ) ) {
            _meta.html( _eventData.rangeMeta )
            //_viewers.push( _meta.get(0) )
            _viewers.meta = _meta.get(0)
        }

        if ( this._beforeOpenEvent ) {
            _hookedState = this._beforeOpenEvent( _eventData, _viewers ) || true
            //_hookedState = _hookedState == undefined ? true : _hookedState
        }
//console.log( '!openEvent::', _self, $viewer, uid, callback, _viewers, this._beforeOpenEvent, _hookedState )
        if ( ! _hookedState ) {
            return
        }
        if ( $viewer.length > 0 ) {
            $viewer.each(function() {
                $(this).empty() // Initialize Viewer
                _order.forEach((_prop) => {
                    if ( Object.prototype.hasOwnProperty.call(_viewers, _prop) ) {
                        $(this).append( _viewers[_prop].outerHTML )
                    }
                })
            })
        }

        if ( callback ) {
            this._debug( `The callback "${callback}" was called by the "openEvent" method.` )

            try {
                Function.call( null, `return ${callback}` )()
            } catch ( e ) {
                throw new TypeError( e )
            }
        }
    }

    /*
     * @public: Be zoomed in scale of the timeline that fires when any scales on the ruler is double clicked (:> ルーラー上の任意スケールをダブルクリック時に発火するスケールズームイベント
     */
    zoomScale( event ) {
        this._debug( 'zoomScale' )
//console.log( '!zoomScale::', event, $(event.currentTarget) )

        let _elem        = event.currentTarget,
            ruler_item   = $(_elem).data( 'ruler-item' ),
            scaleMap     = {
                millennium : { years: 1000, lower: 'century',     minGrids: 10 },
                century    : { years: 100,  lower: 'decade',      minGrids: 10 },
                decade     : { years: 10,   lower: 'lustrum',     minGrids: 2  },
                lustrum    : { years: 5,    lower: 'year',        minGrids: 5  },
                year       : { years: 1,    lower: 'month',       minGrids: 12 },
                month      : {              lower: 'day',         minGrids: 28 },
                week       : {              lower: 'day',         minGrids: 7  },
                day        : {              lower: 'hour',        minGrids: 24 },
                weekday    : {              lower: 'hour',        minGrids: 24 },
                hour       : {              lower: 'minute',      minGrids: 60 },
                minute     : {              lower: 'second',      minGrids: 60 },
                second     : {              lower: null,          minGrids: 60 },
                millisecond: {              lower: null,          minGrids: 1000 }
            },
            getZoomScale = ( ruler_item ) => {
                let [ _scl, date_seed ] = ruler_item.split('-'),
                    scale                = this._filterScaleKeyName( _scl ),
                    min_grids            = scaleMap[scale].minGrids,
                    begin_date, end_date, base_year, week_num
//console.log( '!zoomScale::getZoomScale:', ruler_item, '->', scale, ', ', date_seed, ', minGrid:', min_grids )

                switch ( true ) {
                    case /^millennium$/i.test( scale ):
                    case /^century$/i.test( scale ):
                    case /^decade$/i.test( scale ):
                    case /^lustrum$/i.test( scale ):
                        begin_date = `${( ( date_seed - 1 ) * scaleMap[scale].years ) + 1}/1/1 0:00:00`
                        end_date   = new Date( this.modifyDate( begin_date, scaleMap[scale].years, 'year' ).getTime() - 1 ).toString()
                        break
                    case /^year$/i.test( scale ):
                        begin_date = `${date_seed}/1/1 0:00:00`
                        end_date = new Date( this.modifyDate( begin_date, scaleMap[scale].years, 'year' ).getTime() - 1 ).toString()
                        break
                    case /^month$/i.test( scale ):
                        begin_date = this.getCorrectDatetime( date_seed ).toString()
                        end_date   = new Date( this.modifyDate( begin_date, 1, 'month' ).getTime() - 1 ).toString()
                        break
                    case /^week$/i.test( scale ):
                        [ base_year, week_num ] = date_seed.split(',')
                        begin_date = this.getFirstDayOfWeek( week_num, base_year ).toString(),
                        end_date = new Date( this.modifyDate( begin_date, 7, 'day' ).getTime() - 1 ).toString()
                        break
                    case /^day$/i.test( scale ):
                    case /^weekday$/i.test( scale ):
                        date_seed = 'weekday' === scale ? date_seed.substring( 0, date_seed.indexOf(',') ) : date_seed
                        begin_date = this.getCorrectDatetime( date_seed ).toString()
                        end_date = new Date( this.modifyDate( begin_date, 1, 'day' ).getTime() - 1 ).toString()
                        break
                    case /^hour$/i.test( scale ):
                    case /^minute$/i.test( scale ):
                    case /^second$/i.test( scale ):
                    case /^millisecond$/i.test( scale ):
                    default:
                        begin_date = this.getCorrectDatetime( date_seed ).toString()
                        end_date = new Date( this.modifyDate( begin_date, 1, scale ).getTime() - 1 ).toString()
                        break
                }

                scale = Object.hasOwnProperty.call( scaleMap, scale ) ? scaleMap[scale].lower : scale
//console.log( '!zoomScale::getZoomScale:', date_seed, ', to:', scale, ', beginDate:', begin_date, ', endDate:', end_date, ', minGrids:', min_grids )
                return [ scale, begin_date, end_date, min_grids ]
            },
            [ to_scale, begin_date, end_date, min_grids ] = getZoomScale( ruler_item ),
            zoom_options = {
                startDatetime : begin_date,
                endDatetime   : end_date,
                scale         : to_scale,
            }

        if ( this.is_empty( zoom_options.scale ) ) {
            return
        }
        if ( this._config.wrapScale ) {
            let _wrap = Math.ceil( ( $(this._element).find(Selector.TIMELINE_CONTAINER).width() - $(this._element).find(Selector.TIMELINE_SIDEBAR).width() ) / min_grids ),
                _originMinGridSize

            if ( ! Object.hasOwnProperty.call( this._config, 'originMinGridSize' ) ) {
                // Keep an original minGridSize as cache
                this._config.originMinGridSize = this._config.minGridSize
            }
            _originMinGridSize = this._config.originMinGridSize
            zoom_options.minGridSize = Math.max( _wrap, _originMinGridSize )
        }
// console.log( ruler_item, zoom_options, this._config.wrapScale, this._config.minGridSize )

        this.reload( [zoom_options] )
    }

    /*
     * @public: Show the loader
     */
    showLoader() {
        this._debug( 'showLoader' )

        let $elem       = $(this._element),
            _opts       = this._config,
            _props      = this._instanceProps,
            _container  = $elem.find( Selector.TIMELINE_CONTAINER ),
            _max_width  = _props.scaleSize * _props.grids,
            _min_height = _props.rowSize * _props.rows,
            _loaderContainer = $('<div></div>', { class: 'jqtl-loader', style: `max-width:${_max_width}px;min-height:${_min_height}px;` }),
            _loaderContent   = null,
            _innerContent    = ''

        if ( _opts.loader === false ) {
            return
        }
        if ( _container.length == 0 ) {
            // To avoid jquery memory leak
            _container = _container.prevObject
        }

        if ( $elem.find( Selector.LOADER ).length == 0 ) {
            // Generate loader container
            if ( $(_opts.loader).length == 0 ) {
                // Set built-in loader content
                _innerContent = this.is_empty( _opts.loadingMessage ) ? '<span></span><span></span><span></span><span></span><span></span>' : _opts.loadingMessage
                _loaderContent = $('<div></div>', { class: ClassName.LOADER_ITEM }).html( _innerContent )
            } else {
                // Set custom loader content
                _loaderContent = $(_opts.loader).clone().prop( 'hidden', false ).css( 'display', 'block' )
            }
            _loaderContainer.append( _loaderContent )
            _container.append( _loaderContainer )
        } else {
            $elem.find( Selector.LOADER ).css({ width: '100%', height: '100%' })
        }
        // Show loader
        //$elem.find( Selector.LOADER ).show('fast', () => {
        $elem.find( Selector.LOADER ).attr('data-state', 'show')
        //})
    }

    /*
     * @public:  Hide the loader
     */
    hideLoader() {
        return new Promise(( resolve ) => {

        this._debug( 'hideLoader' )

        let $elem   = $(this._element),
            _loader = $elem.find( Selector.LOADER )

        //_loader.hide('fast', () => {
        _loader.attr('data-state', 'hide')
        //})
        setTimeout(() => {
            resolve()
        }, 300)
        })
    }


    /* ----------------------------------------------------------------------------------------------------------------
     * Utility Api
     * ----------------------------------------------------------------------------------------------------------------
     */

    /*
     * Determine empty that like PHP
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
     * Determine whether variable is an Object
     *
     * @param mixed item (required)
     *
     * @return bool
     */
    is_Object( item ) {
        return (item && typeof item === 'object' && ! Array.isArray( item ))
    }

    /*
     * Merge two objects deeply as polyfill for instead "$.extend(true,target,source)"
     *
     * @param object target (required)
     * @param object source (required)
     *
     * @return object output
     */
    mergeDeep( target, source ) {
        let output = Object.assign( {}, target )

        if ( this.is_Object( target ) && this.is_Object( source ) ) {
            for ( const key of Object.keys( source ) ) {
                if ( this.is_Object( source[key] ) ) {
                    if ( ! ( key in target ) ) {
                        Object.assign( output, { [key]: source[key] } )
                    } else {
                        output[key] = this.mergeDeep( target[key], source[key] )
                    }
                } else {
                    Object.assign( output, { [key]: source[key] } )
                }
            }
        }
        return output
    }

    /*
     * Determine whether the object is iterable
     *
     * @param object obj (required)
     *
     * @return bool
     */
    is_iterable( obj ) {
        return obj && typeof obj[Symbol.iterator] === 'function'
    }

    /*
     * Add an @@iterator method to non-iterable object
     *
     * @param object obj (required)
     *
     * @return object
     */
    toIterableObject( obj ) {
        if ( this.is_iterable( obj ) ) {
            return obj
        }

        obj[Symbol.iterator] = () => {
            let index = 0

            return {
                next() {
                    if ( obj.length <= index ) {
                        return { done: true }
                    } else {
                        return { value: obj[index++] }
                    }
                }
            }
        }

        return obj
    }

    /*
     * Supplemental method for validating arguments in local scope
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
     * Generate the pluggable unique id
     *
     * @param int digit (optional)
     *
     * @return string
     */
    generateUniqueID( digit = 1000 ) {
        return new Date().getTime().toString(16) + Math.floor( digit * Math.random() ).toString(16)
    }

    /*
     * Round a number with specific digit
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
     * Convert hex of color code to rgba
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
     * This method is able to get the correct datetime instead of built in "new Date" on javascript. (:> JavaScriptビルトインメソッドのnew Dateに代わって正確な日時を取得する
     * That is remapping to correct year if the year is 0 - 99, and supporting years BCE. (:> 0 - 99年の場合に年をリマッピングし、紀元前の年にも対応する
     *
     * @param mixed datetime (required; allowed an integer as milliseconds, a string as like datetime or an object instance of Date)
     * @param boolean adjustTimeZoneDiff (optional; defaults to false)
     *
     * @return Date Object, or null if failed
     */
    getCorrectDatetime( datetime, adjustTimeZoneDiff = false ) {
        let normalizeDate = ( dateString ) => {
                let isMinus = /^-/.test( dateString ),
                    _m = isMinus ? '-' : '',
                    _d

                if ( isMinus ) {
                    dateString = dateString.replace(/^-/, '')
                }
                // for Safari and Firefox
                _d = dateString.replace(/-/g, '/')
                switch ( true ) {
                    case /^\d{1,4}\/\d{1,2}$/.test( _d ):
                        return `${_m}${_d}/1`
                    case /^.+(\.\d{1,3})$/.test( _d ):
                        if ( isNaN( Date.parse( _d ) ) ) {
                            _d = _d.replace( RegExp.$1, '' )
                        }
                        return `${_m}${_d}`
                    default:
                        return `${_m}${_d}`
                }
            },
            getDateObject = ( datetime ) => {
                let _chk_str = normalizeDate( datetime ),
                    _raise   = 0,
                    _ymd, _his, _parts, _date

                switch ( true ) {
                    case /^-?\d{1,}\/\d{1,2}(|\/\d{1,2})(| \d{1,2}(|:\d{1,2}(|:\d{1,2})))$/i.test( _chk_str ): {
                        [ _ymd, _his ] = _chk_str.split(' ')
                        _parts = _ymd.split('/')
                        if ( _parts[1] ) {
                            _raise = Math.floor( _parts[1] / 13 )
                            _parts[1] = parseInt( _parts[1], 10 ) - 1 // to month index
                        }
                        let _his_base = [ 0, 0, 0 ]
                        if ( _his ) {
                            //_parts.push( ..._his.split(':') )
                            _parts.push( ...Object.assign( _his_base, _his.split(':') ) )
                        } else {
                            _parts.push( ..._his_base )
                        }
                        _date = new Date( new Date( ..._parts ).setFullYear( parseInt( _parts[0], 10 ) + _raise ) )
                        break
                    }
                    case /^-?\d+$/.test( _chk_str ):
                        _date = new Date( _chk_str, 0, 1, 0, 0, 0, 0 ).setFullYear( parseInt( _chk_str, 10 ) )
                        break
                    default:
                        _date = new Date( _chk_str.toString() )
                        break
                }
                return _date
            },
            _checkDate

        switch ( typeof datetime ) {
            case 'number':
                _checkDate = new Date( datetime )
                break
            case 'string':
                _checkDate = getDateObject( datetime )
                break
            case 'object':
                if ( datetime instanceof Date ) {
                    _checkDate = datetime
                }
                break
        }

        if ( isNaN( _checkDate ) || ! _checkDate ) {
            //console.warn( `"${datetime}" Cannot parse date because invalid format.` )
            this._error( `"${datetime}" Cannot parse date because invalid format.`, 'warn' )
            return null
        }

        if ( _checkDate instanceof Date === false ) {
            _checkDate = new Date( _checkDate )
        }

        if ( adjustTimeZoneDiff ) {
            let _utcDate = new Date( _checkDate.getUTCFullYear(), _checkDate.getUTCMonth(), _checkDate.getUTCDate(), _checkDate.getUTCHours(), _checkDate.getUTCMinutes(), _checkDate.getUTCSeconds(), _checkDate.getUTCMilliseconds() ),
                _tzDiff  = this.diffDate( _checkDate, _utcDate )

//console.log('!getCorrectDatetime::', _checkDate.toString(), _utcDate.toString(), _tzDiff )
            if ( _tzDiff != 0 ) {
                _checkDate = this.modifyDate( (_tzDiff > 0 ? _utcDate : _checkDate), -1 * _tzDiff, 'millisecond' )
            }
//console.log('!!getCorrectDatetime::', _checkDate.toString() )
        }
        return _checkDate
    }

    /*
     * Method to get week number as extension of Date object
     * Note: added support for daylight savings time but needs improvement as performance has dropped
     *
     * @param mixed datetime (required; to be date object filtered by getCorrectDatetime method)
     *
     * @return mixed (return integer as week number when given valid argument, or false if failed)
     */
    getWeek( datetime ) {
        if ( this.is_empty( datetime ) ) {
            return false
        }
        let firstDayIndex  = this._config.firstDayOfWeek || 0,
            targetDate     = this.getCorrectDatetime( datetime ),
            firstDayOfYear = this.getCorrectDatetime( `${targetDate.getFullYear()}/1/1` ),
            //firstWeekday   = firstDayOfYear.getDay(),
            targetDateStr  = targetDate.toDateString(),
            _weekNumber    = 1,
            _checkDate     = firstDayOfYear

        for ( let i = 0; i < 367; i++ ) {
            if ( i > 0 ) {
                _checkDate = this.modifyDate( firstDayOfYear, i, 'day' )
            }
            if ( _checkDate.getDay() == firstDayIndex ) {
                _weekNumber++
            }
            if ( _checkDate.toDateString() === targetDateStr ) {
                break
            }
        }
        return _weekNumber
    }

    /*
     * Retrieve a first day of the week from week number
     * Note: added support for daylight savings time but needs improvement as performance has dropped
     *
     * @param int week_number (required)
     * @param int year (optional; defaults to current year)
     *
     * @return mixed (return Date object as the first day of week when given valid arguments, or false if failed)
     */
    getFirstDayOfWeek( week_number, year ) {
        if ( this.is_empty( week_number ) ) {
            return false
        }
        year = this.is_empty( year ) ? new Date().getFullYear() : parseInt( year, 10 )
        let firstDayIndex  = this._config.firstDayOfWeek,
            firstDayOfYear = this.getCorrectDatetime( `${year}/1/1` ),
            _weekday       = firstDayOfYear.getDay(),
            //_millisecInDay = 24 * 60 * 60 * 1000,
            //_week_time     = (week_number - 1) * _millisecInDay * 7,
            //_day_offset, _tempDt, _time, _retDt
            _keyDayOfWeek  = firstDayOfYear,
            _offset        = _weekday > firstDayIndex ? _weekday - firstDayIndex : 0,
            _weekNumber    = _offset <= 0 ? 0 : 1,
            hitDate
//console.log( `!getFirstDayOfWeek::${year}, ${week_number}:`, _keyDayOfWeek.toDateString(), `(${_weekday}) > ${firstDayIndex} ?`, _offset, _weekNumber )
        if ( _weekNumber == week_number && _weekday == firstDayIndex ) {
            hitDate = firstDayOfYear
        } else {
            for ( let i = _offset; i < _offset + 7; i++ ) {
                if ( i > _offset ) {
                    _keyDayOfWeek = this.modifyDate( firstDayOfYear, i, 'day' )
                }
                if ( _keyDayOfWeek.getDay() == firstDayIndex ) {
                    _weekNumber++
                    break
                }
            }
            if ( _weekNumber == week_number ) {
                hitDate = _keyDayOfWeek
            } else {
                hitDate = this.modifyDate( _keyDayOfWeek, (week_number - _weekNumber) * 7, 'day' )
            }
        }
//console.log( `!!getFirstDayOfWeek::${year}, ${week_number}:`, hitDate.toDateString() )
        return hitDate
        /*
        _weekday = _weekday == 0 ? 7 : _weekday
        _day_offset = 1 - _weekday
        if ( 7 - _weekday + 1 < 4 ) {
            _day_offset += 7
        }
        _tempDt = new Date( firstDayOfYear.getTime() + _day_offset * _millisecInDay )
        _time   = _tempDt.getTime() + _week_time
        _retDt  = new Date( _tempDt.setTime( _time ) )
console.log( '!!!getFirstDayOfWeek::', week_number, _retDt.toDateString() )
        return _retDt
        */
    }

    /*
     * Get the datetime shifted from the specified datetime by any fluctuation value
     *
     * @param mixed datetime (required; to be date object filtered by getCorrectDatetime method)
     * @param int fluctuation (required; an interval value to shift from given base datetime)
     * @param string scale (required; the scale of an interval value)
     *
     * @return mixed (return modified new Date object when given valid argument, or false if failed)
     */
    modifyDate( datetime, fluctuation, scale ) {
        if ( this.is_empty( datetime ) || this.is_empty( fluctuation ) || this.is_empty( scale ) || ! this.verifyScale( scale ) ) {
            return false
        }
        let baseDate = this.getCorrectDatetime( datetime ),
            flct     = this.validateNumeric( 0, fluctuation ),
            dateElms = [
                baseDate.getFullYear(),    // 0: year
                baseDate.getMonth(),       // 1: month (index)
                baseDate.getDate(),        // 2: day
                baseDate.getHours(),       // 3: hour
                baseDate.getMinutes(),     // 4: minute
                baseDate.getSeconds(),     // 5: second
                baseDate.getMilliseconds() // 6: millisec
            ],
            tmpDate  = new Date( new Date( ...dateElms ).setFullYear( dateElms[0] ) ),
            isAdjust = false,
            newDate

        switch ( true ) {
            case /^millenniums?|millennia$/i.test( scale ):
                newDate = new Date( tmpDate.setFullYear( tmpDate.getFullYear() + (flct * 1000) ) )
                break
            case /^century$/i.test( scale ):
                newDate = new Date( tmpDate.setFullYear( tmpDate.getFullYear() + (flct * 100) ) )
                break
            case /^dec(ade|ennium)$/i.test( scale ):
                newDate = new Date( tmpDate.setFullYear( tmpDate.getFullYear() + (flct * 10) ) )
                break
            case /^lustrum$/i.test( scale ):
                newDate = new Date( tmpDate.setFullYear( tmpDate.getFullYear() + (flct * 5) ) )
                break
            case /^years?$/i.test( scale ):
                newDate = new Date( tmpDate.setFullYear( tmpDate.getFullYear() + flct ) )
                break
            case /^months?$/i.test( scale ):
                newDate = new Date( tmpDate.setMonth( tmpDate.getMonth() + flct ) )
                break
            case /^weeks?$/i.test( scale ):
                newDate = new Date( tmpDate.setDate( tmpDate.getDate() + (flct * 7) ) )
                newDate.setHours( dateElms[3] )
                newDate.setMinutes( dateElms[4] )
                newDate.setSeconds( dateElms[5] )
                newDate.setMilliseconds( dateElms[6] )
                break
            case /^(|week)days?$/i.test( scale ):
                newDate = new Date( tmpDate.setDate( tmpDate.getDate() + flct ) )
                newDate.setHours( dateElms[3] )
                newDate.setMinutes( dateElms[4] )
                newDate.setSeconds( dateElms[5] )
                newDate.setMilliseconds( dateElms[6] )
                //isAdjust = true
                break
            case /^hours?$/i.test( scale ):
                newDate = new Date( tmpDate.setTime( tmpDate.getTime() + ( flct * 60 * 60 * 1000 ) ) )
                newDate.setMinutes( dateElms[4] )
                newDate.setSeconds( dateElms[5] )
                newDate.setMilliseconds( dateElms[6] )
                break
            case /^minutes?$/i.test( scale ):
                newDate = new Date( tmpDate.setTime( tmpDate.getTime() + ( flct * 60 * 1000 ) ) )
                newDate.setSeconds( dateElms[5] )
                newDate.setMilliseconds( dateElms[6] )
                break
            case /^seconds?$/i.test( scale ):
                newDate = new Date( tmpDate.setTime( tmpDate.getTime() + ( flct * 1000 ) ) )
                newDate.setMilliseconds( dateElms[6] )
                break
            default:
                newDate = new Date( tmpDate.setTime( tmpDate.getTime() + flct ) )
                break
        }

        if ( isAdjust ) {
            // Why different time of 1 min 15 sec on 12/01/1847, 0:00:00? (GMT+0001)
            let divide = this.getCorrectDatetime( '1847/12/1 0:01:15' )

            if ( baseDate.getTime() < divide.getTime() && newDate.getTime() >= divide.getTime() ) {
                newDate = new Date( newDate.setTime( newDate.getTime() - (60 * 1000) ) )
            } else
            if ( baseDate.getTime() > divide.getTime() && newDate.getTime() <= divide.getTime() ) {
                newDate = new Date( newDate.setTime( newDate.getTime() - (75 * 1000) ) )
            }
        }
//console.log( 'modifyDate:', baseDate.toString(), '-[', flct, scale, ']->', newDate.toString() )
        return newDate
    }

    /*
     * Acquire the difference between two dates with the specified scale value (:> 2つの日付の差分を指定したスケール値で取得する
     *
     * @param mixed date1 (required; integer as milliseconds or object instanceof Date)
     * @param mixed date2 (required; integer as milliseconds or object instanceof Date)
     * @param string scale (optional; defaults to 'millisecond')
     * @param bool absval (optional; defaults to false)
     *
     * @return mixed
     */
    diffDate( date1, date2, scale = 'millisecond', absval = false ) {
        let _dt1   = date1 === undefined ? null : date1,
            _dt2   = date2 === undefined ? null : date2,
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
            //console.warn( 'Cannot parse date to get difference because undefined.' )
            this._error( 'Cannot parse date to get difference because undefined.', 'warn' )
            return false
        }

        diffMS = _dt2 - _dt1

        if ( isNaN( diffMS ) ) {
            //console.warn( 'Cannot parse date to get difference because invalid format.' )
            this._error( 'Cannot parse date to get difference because invalid format.', 'warn' )
            return false
        }
        if ( absval ) {
            diffMS = Math.abs( diffMS )
        }

        let _bd = _dt1 instanceof Date ? _dt1 : new Date( _dt1 ),
            _ed = _dt2 instanceof Date ? _dt2 : new Date( _dt2 ),
            _dy = _ed.getFullYear() - _bd.getFullYear(),
            _m  = {}

        switch ( true ) {
            case /^millenniums?|millennia$/i.test( scale ): {
                // return { "millennium-number": years,... }
                let _by = _bd.getFullYear(),
                    _ey = _ed.getFullYear(),
                    _bm = Math.ceil( (_by == 0 ? 1 : _by) / 1000 ), // millennium of first ordinal
                    _em = Math.ceil( (_ey == 0 ? 1 : _ey) / 1000 ),
                    _cm = _bm

                _m[_bm] = _em - _bm > 0 ? (_bm * 1000) - _by : _ey - _by
                _cm++
                while ( _cm <= _em ) {
                    _m[_cm] = _em - _cm > 0 ? 1000 : _ey - ((_cm - 1) * 1000)
                    _cm++
                }
                retval = _m
                // return number of milliseconds
                // retval = diffMS
                break
            }
            case /^century$/i.test( scale ): {
                // return { "century-number": years,... }
                let _by = _bd.getFullYear(),
                    _ey = _ed.getFullYear(),
                    _bc = Math.ceil( (_by == 0 ? 1 : _by) / 100 ), // century of first ordinal
                    _ec = Math.ceil( (_ey == 0 ? 1 : _ey) / 100 ),
                    _cc = _bc

                _m[_bc] = _ec - _bc > 0 ? (_bc * 100) - _by : _ey - _by
                _cc++
                while ( _cc <= _ec ) {
                    _m[_cc] = _ec - _cc > 0 ? 100 : _ey - ((_cc - 1) * 100)
                    _cc++
                }
                retval = _m
                // return number of milliseconds
                // retval = diffMS
                break
            }
            case /^dec(ade|ennium)$/i.test( scale ): {
                // return { "decade-number": days,... }
                let _by = _bd.getFullYear(),
                    _ey = _ed.getFullYear(),
                    _cy = _by == 0 ? 1 : _by,
                    _cd, _days

                while ( _cy <= _ey ) {
                    _days = isLeapYear( new Date( _cy, 0, 1 ) ) ? 366 : 365
                    _cd = Math.ceil( _cy / 10 ) // decade of first ordinal
                    if ( Object.hasOwnProperty.call( _m, _cd ) ) {
                        _m[_cd] += _days
                    } else {
                        _m[_cd] = _days
                    }
                    _cy++
                }
                retval = _m
                // return number of milliseconds
                // retval = diffMS
                break
            }
            case /^lustrum$/i.test( scale ): {
                // return { "lustrum-number": days,... }
                let _by = _bd.getFullYear(),
                    _ey = _ed.getFullYear(),
                    _cy = _by == 0 ? 1 : _by,
                    _cl, _days

                while ( _cy <= _ey ) {
                    _days = isLeapYear( new Date( _cy, 0, 1 ) ) ? 366 : 365
                    _cl = Math.ceil( _cy / 5 ) // lustrum of first ordinal
                    if ( Object.hasOwnProperty.call( _m, _cl ) ) {
                        _m[_cl] += _days
                    } else {
                        _m[_cl] = _days
                    }
                    _cy++
                }
                retval = _m
                // return number of milliseconds
                // retval = diffMS
                break
            }
            case /^years?$/i.test( scale ):
                // return { "year": days,... }
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
                // return { "year/month": days,... }
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
            case /^weeks?$/i.test( scale ): {
                // return { "year,week": hours,... }
                let _cd = new Date( _bd.getFullYear(), _bd.getMonth(), _bd.getDate() ),
                    _cw = this.getWeek( _cd ),
                    _nd = new Date( _cd ),
                    _pd = new Date( _cd ),
                    _newWeek = `${_cd.getFullYear()},${_cw}`

                _nd.setDate( _nd.getDate() + 1 )
                _pd.setDate( _pd.getDate() - 1 )
                _m[_newWeek] = ( _cd - _pd ) / ( 60 * 60 * 1000 ) // hours of first day
                while ( _nd.getTime() <= _ed.getTime() ) {
                    _nd.setDate( _nd.getDate() + 1 )
                    _cd.setDate( _cd.getDate() + 1 )
                    _cw = this.getWeek( _cd )
                    let _newWeekKey = `${_cd.getFullYear()},${_cw}`

                    if ( Object.hasOwnProperty.call( _m, _newWeekKey ) ) {
                        _m[_newWeekKey] += ( _nd - _cd ) / ( 60 * 60 * 1000 )
                    } else {
                        _m[_newWeekKey] = ( _nd - _cd ) / ( 60 * 60 * 1000 )
                    }
                }
                retval = _m
                break
            }
            case /^(|week)days?$/i.test( scale ): {
                // return { "year/month/day": hours,... }
                let _cd = new Date( _bd.getFullYear(), _bd.getMonth(), _bd.getDate() ),
                    _nd = new Date( _cd ),
                    _pd = new Date( _cd )

                _nd.setDate( _nd.getDate() + 1 )
                _pd.setDate( _pd.getDate() - 1 )
                _m[`${_cd.getFullYear()}/${(_cd.getMonth() + 1)}/${_cd.getDate()}`] = ( _cd - _pd ) / ( 60 * 60 * 1000 )
                while ( _nd.getTime() <= _ed.getTime() ) {
                    _nd.setDate( _nd.getDate() + 1 )
                    _cd.setDate( _cd.getDate() + 1 )
                    _m[`${_cd.getFullYear()}/${(_cd.getMonth() + 1)}/${_cd.getDate()}`] = ( _nd - _cd ) / ( 60 * 60 * 1000 )
                }
                retval = _m
                break
            }
            case /^hours?$/i.test( scale ): {
                // return { "year/month/day hour": minutes,... }
                let _cd = new Date( _bd.getFullYear(), _bd.getMonth(), _bd.getDate(), _bd.getHours() ),
                    _nd = new Date( _cd ),
                    _pd = new Date( _cd )

                _nd.setHours( _nd.getHours() + 1 )
                _pd.setHours( _pd.getHours() - 1 )
                _m[`${_cd.getFullYear()}/${(_cd.getMonth() + 1)}/${_cd.getDate()} ${_cd.getHours()}`] = ( _cd - _pd ) / ( 60 * 1000 )
                while ( _nd.getTime() <= _ed.getTime() ) {
                    _nd.setHours( _nd.getHours() + 1 )
                    _cd.setHours( _cd.getHours() + 1 )
                    _m[`${_cd.getFullYear()}/${(_cd.getMonth() + 1)}/${_cd.getDate()} ${_cd.getHours()}`] = ( _nd - _cd ) / ( 60 * 1000 )
                }
                retval = _m
                break
            }
            case /^minutes?$/i.test( scale ): {
                // return { "year/month/day hour:minute": seconds,... }
                let _cd = new Date( _bd.getFullYear(), _bd.getMonth(), _bd.getDate(), _bd.getHours(), _bd.getMinutes() ),
                    _nd = new Date( _cd ),
                    _pd = new Date( _cd )

                _nd.setMinutes( _nd.getMinutes() + 1 )
                _pd.setMinutes( _pd.getMinutes() - 1 )
                _m[`${_cd.getFullYear()}/${(_cd.getMonth() + 1)}/${_cd.getDate()} ${_cd.getHours()}:${_cd.getMinutes()}`] = ( _cd - _pd ) / 1000
                while ( _nd.getTime() <= _ed.getTime() ) {
                    _nd.setMinutes( _nd.getMinutes() + 1 )
                    _cd.setMinutes( _cd.getMinutes() + 1 )
                    _m[`${_cd.getFullYear()}/${(_cd.getMonth() + 1)}/${_cd.getDate()} ${_cd.getHours()}:${_cd.getMinutes()}`] = ( _nd - _cd ) / 1000
                }
                retval = _m
                break
            }
            case /^seconds?$/i.test( scale ): {
                // return { "year/month/day hour:minute:second": milliseconds,... }
                let _cd = new Date( _bd.getFullYear(), _bd.getMonth(), _bd.getDate(), _bd.getHours(), _bd.getMinutes(), _bd.getSeconds() ),
                    _nd = new Date( _cd ),
                    _pd = new Date( _cd )

                _nd.setSeconds( _nd.getSeconds() + 1 )
                _pd.setSeconds( _pd.getSeconds() - 1 )
                _m[`${_cd.getFullYear()}/${(_cd.getMonth() + 1)}/${_cd.getDate()} ${_cd.getHours()}:${_cd.getMinutes()}:${_cd.getSeconds()}`] = _cd - _pd
                while ( _nd.getTime() <= _ed.getTime() ) {
                    _nd.setSeconds( _nd.getSeconds() + 1 )
                    _cd.setSeconds( _cd.getSeconds() + 1 )
                    _m[`${_cd.getFullYear()}/${(_cd.getMonth() + 1)}/${_cd.getDate()} ${_cd.getHours()}:${_cd.getMinutes()}:${_cd.getSeconds()}`] = _nd - _cd
                }
                retval = _m
                break
            }
            default:
                // return number of milliseconds
                retval = diffMS
                break
        }

        return retval
    }

    /*
     * Verify whether is allowed scale in the plugin. (:> 許容スケールかを確認します。
     * Then retrieves that values of intervals on the scale if the scale is available and given arguments of date range. (:> 有効スケールかつ日付範囲引数が与えられた場合、対象スケールの間隔値を取得します
     * And return the base millisecond of scale if it is not the variable length scale (isVLS to false) (:> 可変長スケールでない場合はスケールの基本ミリ秒を返します
     *
     * @param string scale (required)
     * @param int begin (optional; begin of range as unit millisecs that got by `Date.getTime()`)
     * @param int end (optional; end of range as unit millisecs that got by `Date.getTime()`)
     * @param bool isVLS (optional; whether is variable length scale, defaults to false)
     *
     * @return mixed (boolean if no arguments are given after the first argument)
     */
    verifyScale( scale, begin = null, end = null, isVLS = false ) {
        let _ms    = -1,
            isBool = this.is_empty( begin ) || this.is_empty( end ),
            retval = isVLS ? this.diffDate( begin, end, scale ) : false

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
            case /^(|week)days?$/i.test( scale ):
                // Day (is the variable length scale by DST) (:> 日 (サマータイムによる可変長スケール)
                _ms = 24 * 60 * 60 * 1000
                break
            case /^weeks?$/i.test( scale ):
                // Week (is the variable length scale by DST) (:> 週 (サマータイムによる可変長スケール)
                _ms = 7 * 24 * 60 * 60 * 1000
                break
            case /^months?$/i.test( scale ):
                // Month (is the variable length scale) (:> 月（可変長スケール）
                _ms = 30.44 * 24 * 60 * 60 * 1000
                break
            case /^years?$/i.test( scale ):
                // Year (is the variable length scale) (:> 年（可変長スケール）
                _ms = 365.25 * 24 * 60 * 60 * 1000
                break
            case /^lustrum$/i.test( scale ):
                // Lustrum (is the variable length scale, but currently does not support) (:> 五年紀 (可変長スケールだが現在サポートしてない)
                // 5y = 1826 or 1827; 1826 * 24 * 60 * 60 = 15766400, 1827 * 24 * 60 * 60 = 157852800 | avg.= 157788000
                //_ms = ( ( 3.1536 * Math.pow( 10, 8 ) ) / 2 ) * 1000 // <--- Useless by info of wikipedia
                _ms = 157788000 * 1000
                break
            case /^dec(ade|ennium)$/i.test( scale ):
                // Decade (is the variable length scale, but currently does not support) (:> 十年紀 (可変長スケールだが現在サポートしてない)
                // 10y = 3652 or 3653; 3652 * 24 * 60 * 60 = 315532800, 3653 * 24 * 60 * 60 = 157852800 | avg. = 315576000
                // _ms = ( 3.1536 * Math.pow( 10, 8 ) ) * 1000 // <--- Useless by info of wikipedia
                _ms = 315576000 * 1000
                break
            case /^century$/i.test( scale ):
                // Century (:> 世紀（百年紀）
                // 100y = 36525; 36525 * 24 * 60 * 60 = 3155760000
                _ms = 3155760000 * 1000
                break
            case /^millenniums?|millennia$/i.test( scale ):
                // Millennium (:> 千年紀
                // 100y = 365250
                //_ms = ( 3.1536 * Math.pow( 10, 10 ) ) * 1000
                _ms = 3155760000 * 10 * 1000
                break
            default:
                //console.warn( `Specified an invalid "${scale}" scale.` )
                this._error( `Specified an invalid "${scale}" scale.`, 'warn' )
                _ms = -1
        }
        if ( isBool ) {
            return _ms > 0
        } else {
            return isVLS ? retval : _ms
        }
    }

    /*
     * Retrieve one higher scale
     *
     * @param string scale (required)
     *
     * @return string as higher scale
     */
    getHigherScale( scale ) {
        return this.findScale( scale, 'higher' )
    }

    /*
     * Retrieve one lower scale
     *
     * @param string scale (required)
     *
     * @return string as lower scale
     */
    getLowerScale( scale ) {
        return this.findScale( scale, 'lower' )
    }

    /*
     * Find scale matched the specified condition
     *
     * @param string base_scale (required)
     * @param string condition (required)
     *
     * @return mixed matched scale(s)
     */
    findScale( base_scale, condition ) {
        let scalePatternMap = [
                [ 'millisecond', '^millisec(|ond)s?$' ],
                [ 'second', '^seconds?$' ],
                [ 'minute', '^minutes?$' ],
                [ 'hour', '^(|half|quarter)-?(|hour)s?$' ],
                [ 'day', '^(|week)days?$' ],
                [ 'week', '^weeks?$' ],
                [ 'month', '^months?$' ],
                [ 'year', '^years?$' ],
                [ 'lustrum', '^lustrum$' ],
                [ 'decade', '^dec(ade|ennium)$' ],
                [ 'century', '^century$' ],
                [ 'millennium', '^millenniums?|millennia$' ],
            ],
            _idx = scalePatternMap.findIndex( ( elm ) => new RegExp( `${elm[1]}`, 'i' ).test( base_scale ) ),
            _narrows

        switch ( true ) {
            case /^higher$/i.test( condition ):
                _idx = scalePatternMap[(_idx + 1)] ? _idx + 1 : _idx
                return scalePatternMap[_idx][0]
            case /^higher\s?all$/i.test( condition ):
                _narrows = scalePatternMap.slice( _idx + 1 )
                _narrows = _narrows.reduce( ( acc, cur ) => acc.concat( cur[0] ), [] )
                if ( _narrows.includes( 'day' ) ) {
                    _narrows.push( 'weekday' )
                }
                return _narrows
            case /^lower$/i.test( condition ):
                _idx = scalePatternMap[(_idx - 1)] ? _idx - 1 : _idx
                return scalePatternMap[_idx][0]
            case /^lower\s?all$/i.test( condition ):
                _narrows = scalePatternMap.slice( 0, _idx )
                _narrows = _narrows.reduce( ( acc, cur ) => acc.concat( cur[0] ), [] )
                if ( _narrows.includes( 'day' ) ) {
                    _narrows.push( 'weekday' )
                }
                return _narrows
            default:
                return scalePatternMap[_idx][0]
        }
    }

    /*
     * Retrieve the date string of specified locale (:> 指定されたロケールの日付文字列を取得する
     *
     * @param string date_seed (required)
     * @param string scale (optional; defalts to '')
     * @param string locales (optional and omittable; defaults to 'en-US')
     * @param object options (optional; defaults to empty object)
     *
     * @return mixed locale_string (return false if failure)
     */
    getLocaleString( date_seed, scale = '', locales = 'en-US', options = {} ) {
        function toLocaleStringSupportsLocales() {
            try {
                new Date().toLocaleString( 'i' )
            } catch ( e ) {
                return e.name === "RangeError";
            }
            return false;
        }
        let is_toLocalString = toLocaleStringSupportsLocales(),
            locale_string    = '',
            _options         = {}, // options for built-in method only
            //_ext_opts        = {}, // options extended for this plugin
            _has_options     = false,
            getOrdinal       = ( n ) => {
                let s = [ 'th', 'st', 'nd', 'rd' ],
                    v = n % 100

                return n + ( s[(v - 20)%10] || s[v] || s[0] )
            },
            getZerofill      = ( num, digit = 4 ) => {
                let strDuplicate = ( n, str ) => Array( n + 1 ).join( str ),
                    zero = strDuplicate( digit - String( num ).length, '0' )

                return String( num ).length == digit ? String( num ) : ( zero + num ).substr( num * -1 )
            },
            _prop, _temp, _str, _num, _year, _month, _week

        if ( this.is_empty( date_seed ) ) {
            return false
        }
        locales = this.supplement( 'en-US', locales, this.validateString )
        options = this.supplement( {}, options, this.validateObject )
        for ( _prop in options ) {
            if ( /^(localeMatcher|timeZone|hour12|formatMatcher|era|timeZoneName)$/.test( _prop ) ) {
                _options[_prop] = options[_prop]
            }
        }
        if ( Object.keys( _options ).length > 0 ) {
            _has_options = true
        }
//console.log( `!getLocaleString::${scale}:`, date_seed, locales, options[scale], is_toLocalString )

        switch ( true ) {
            case /^millenniums?|millennia$/i.test( scale ):
            case /^century$/i.test( scale ):
            case /^dec(ade|ennium)$/i.test( scale ):
            case /^lustrum$/i.test( scale ):
                // Allowed value as format: 'numeric', 'ordinal'
                _year = this.getCorrectDatetime( date_seed ).getFullYear()
                if ( /^millenniums?|millennia$/i.test( scale ) ) {
                    _temp = 1000
                } else
                if ( /^century$/i.test( scale ) ) {
                    _temp = 100
                } else
                if ( /^dec(ade|ennium)$/i.test( scale ) ) {
                    _temp = 10
                } else {
                    _temp = 5
                }
                _num = this.numRound( _year / _temp, 0, 'ceil' )
                if ( Object.hasOwnProperty.call( options, scale ) && options[scale] === 'ordinal' ) {
                    locale_string = getOrdinal( _num )
                } else {
                    locale_string = _num
                }
                break
            case /^years?$/i.test( scale ):
                // Allowed value as format: 'numeric', '2-digit', 'zerofill'
                _temp = this.getCorrectDatetime( date_seed )
                _year = _temp.getFullYear()
                if ( is_toLocalString ) {
                    if ( Object.hasOwnProperty.call( options, 'timeZone' ) && /^utc$/i.test(options.timeZone) ) {
                        _temp = this.modifyDate( _temp, -1 * _temp.getTimezoneOffset(), 'minute' )
                    }
                    if ( Object.hasOwnProperty.call( options, scale ) ) {
                        if ( /^(numeric|2-digit)$/i.test( options[scale] ) ) {
                            _options.year = options[scale]
                            //locale_string = _temp.toLocaleString( locales, _options )
                            locale_string = _temp.toLocaleDateString( locales, _options )
                        } else
                        if ( /^zerofill$/i.test( options[scale] ) ) {
                            locale_string = _year.toString().length > 3 ? _year : getZerofill( _year, 4 )
                            if ( _has_options ) {
                                locale_string = _temp.toLocaleDateString( locales, _options ).replace( _year, locale_string )
                            }
                        } else {
                            locale_string = _year
                        }
                    } else
                    if ( _has_options ) {
                        locale_string = _temp.toLocaleDateString( locales, _options )
                    }
                }
                locale_string = this.is_empty( locale_string ) ? _year : locale_string
//console.log(`!getLocaleString::${scale}:`, date_seed, _temp, _year, is_toLocalString, options[scale], locale_string )
                break
            case /^months?$/i.test( scale ):
                // Allowed value as format: 'numeric', '2-digit', 'narrow', 'short', 'long'
                _temp  = this.getCorrectDatetime( date_seed, true )
                _month = _temp.getMonth() + 1
//console.log(`!getLocaleString::${scale}:`, date_seed, _temp, _month, is_toLocalString, options[scale], _options )
                if ( is_toLocalString ) {
                    if ( Object.hasOwnProperty.call( options, 'timeZone' ) && /^utc$/i.test(options.timeZone) ) {
                        _temp = this.modifyDate( _temp, -1 * _temp.getTimezoneOffset(), 'minute' )
                    }
                    if ( Object.hasOwnProperty.call( options, scale ) ) {
                        if ( /^(numeric|2-digit|narrow|short|long)$/i.test( options[scale] ) ) {
                            _options.month = options[scale]
                            locale_string  = _temp.toLocaleString( locales, _options )
                        } else {
                            locale_string = _month
                        }
                    } else
                    if ( _has_options ) {
                        locale_string = _temp.toLocaleDateString( locales, _options )
                    }
                }
                locale_string = this.is_empty( locale_string ) ? _month : locale_string
//console.log(`!!getLocaleString::${scale}:`, locale_string )
                break
            case /^weeks?$/i.test( scale ):
                // Allowed value as format: 'numeric', 'ordinal'
                if ( typeof date_seed === 'string' && /^(.*)+,\d{1,2}$/.test( date_seed ) ) {
                    [ _str, _num ] = date_seed.split(',')
                    _week = parseInt( _num, 10 )
                } else {
                    _week = this.getWeek( this.getCorrectDatetime( date_seed ) )
                }
                if ( Object.hasOwnProperty.call( options, scale ) && options[scale] === 'ordinal' ) {
                    locale_string = getOrdinal( _week )
                } else {
                    locale_string = _week
                }
                break
            case /^weekdays?$/i.test( scale ):
                // Allowed value as format: 'narrow', 'short', 'long'
                if ( typeof date_seed === 'string' && /^(.*)+,\d{1}$/.test( date_seed ) ) {
                    [ _str, _num ] = date_seed.split(',')
                    _temp = this.getCorrectDatetime( _str, true )
                    _num  = parseInt( _num, 10 )
                } else {
                    _temp = this.getCorrectDatetime( date_seed, true )
                }
                if ( is_toLocalString ) {
                    if ( Object.hasOwnProperty.call( options, 'timeZone' ) && /^utc$/i.test(options.timeZone) ) {
                        _temp = this.modifyDate( _temp, -1 * _temp.getTimezoneOffset(), 'minute' )
                    }
                    if ( Object.hasOwnProperty.call( options, scale ) ) {
                        if ( /^(narrow|short|long)$/i.test( options[scale] ) ) {
                            _options.weekday = options[scale]
                            locale_string = _temp.toLocaleString( locales, _options )
                        }
                    } else
                    if ( _has_options ) {
                        locale_string = _temp.toLocaleDateString( locales, _options )
                    }
                }
                if ( this.is_empty( locale_string ) ) {
                    _str = _temp.toLocaleDateString( locales, { weekday: 'long' } )
                    if ( /^short$/i.test( options[scale] ) ) {
                        locale_string = _str.substring(0, 3)
                    } else
                    if ( /^long$/i.test( options[scale] ) ) {
                        locale_string = _str
                    } else {
                        locale_string = _str.substring(0, 1)
                    }
                }
                break
            case /^days?$/i.test( scale ):
                // Allowed value as format: 'numeric', '2-digit', 'ordinal'
                _temp  = this.getCorrectDatetime( date_seed, true )
                if ( is_toLocalString ) {
                    if ( Object.hasOwnProperty.call( options, 'timeZone' ) && /^utc$/i.test(options.timeZone) ) {
                        _temp = this.modifyDate( _temp, -1 * _temp.getTimezoneOffset(), 'minute' )
                    }
                    if ( Object.hasOwnProperty.call( options, scale ) ) {
                        if ( /^(numeric|2-digit)$/i.test( options[scale] ) ) {
                            _options.day = options[scale]
                            locale_string = _temp.toLocaleString( locales, _options )
                        } else
                        if ( /^ordinal$/i.test( options[scale] ) ) {
                            locale_string = getOrdinal( parseInt( _temp.getDate(), 10 ) )
                        }
                    } else
                    if ( _has_options ) {
                        locale_string = _temp.toLocaleDateString( locales, _options )
                    }
                }
                locale_string = this.is_empty( locale_string ) ? _temp.getDate() : locale_string
                break
            case /^hours?$/i.test( scale ):
            case /^(half|quarter)-?hours?$/i.test( scale ):
                // Allowed value as format: 'numeric', '2-digit', 'fulltime'
                _temp  = this.getCorrectDatetime( date_seed )
                if ( is_toLocalString ) {
                    if ( Object.hasOwnProperty.call( options, 'timeZone' ) && /^utc$/i.test(options.timeZone) ) {
                        _temp = this.modifyDate( _temp, -1 * _temp.getTimezoneOffset(), 'minute' )
                    }
                    if ( Object.hasOwnProperty.call( options, scale ) ) {
                        if ( /^(numeric|2-digit)$/i.test( options[scale] ) ) {
                            _options.hour = options[scale]
                        } else
                        if ( /^fulltime$/i.test( options[scale] ) ) {
                            _options.hour   = 'numeric'
                            _options.minute = 'numeric'
                        }
                        locale_string = _temp.toLocaleString( locales, _options )
                    } else
                    if ( _has_options ) {
                        locale_string = _temp.toLocaleString( locales, _options )
                    }
                }
                locale_string = this.is_empty( locale_string ) ? _temp.getHours() : locale_string
                break
            case /^minutes?$/i.test( scale ):
                // Allowed value as format: 'numeric', '2-digit', 'fulltime'
                _temp  = this.getCorrectDatetime( date_seed )
                if ( is_toLocalString ) {
                    if ( Object.hasOwnProperty.call( options, 'timeZone' ) && /^utc$/i.test(options.timeZone) ) {
                        _temp = this.modifyDate( _temp, -1 * _temp.getTimezoneOffset(), 'minute' )
                    }
                    if ( Object.hasOwnProperty.call( options, scale ) ) {
                        if ( /^(numeric|2-digit)$/i.test( options[scale] ) ) {
                            _options.minute = options[scale]
                        } else
                        if ( /^fulltime$/i.test( options[scale] ) ) {
                            _options.hour   = 'numeric'
                            _options.minute = 'numeric'
                        }
                        locale_string = _temp.toLocaleString( locales, _options )
                    } else
                    if ( _has_options ) {
                        locale_string = _temp.toLocaleString( locales, _options )
                    }
                }
                locale_string = this.is_empty( locale_string ) ? _temp.getMinutes() : locale_string
                break
            case /^seconds?$/i.test( scale ):
                // Allowed value as format: 'numeric', '2-digit', 'fulltime'
                _temp  = this.getCorrectDatetime( date_seed )
                if ( is_toLocalString ) {
                    if ( Object.hasOwnProperty.call( options, 'timeZone' ) && /^utc$/i.test(options.timeZone) ) {
                        _temp = this.modifyDate( _temp, -1 * _temp.getTimezoneOffset(), 'minute' )
                    }
                    if ( Object.hasOwnProperty.call( options, scale ) ) {
                        if ( /^(numeric|2-digit)$/i.test( options[scale] ) ) {
                            _options.second = options[scale]
                        } else
                        if ( /^fulltime$/i.test( options[scale] ) ) {
                            _options.hour   = 'numeric'
                            _options.minute = 'numeric'
                            _options.second = 'numeric'
                        }
                        locale_string = _temp.toLocaleString( locales, _options )
                    } else
                    if ( _has_options ) {
                        locale_string = _temp.toLocaleString( locales, _options )
                    }
                }
                locale_string = this.is_empty( locale_string ) ? _temp.getSeconds() : locale_string
                break
            case /^millisec(|ond)s?$/i.test( scale ):
                // Allowed value as format: 'narrow', 'numeric'
                _temp = this.getCorrectDatetime( date_seed )
                if ( Object.hasOwnProperty.call( options, scale ) ) {
                    if ( Object.hasOwnProperty.call( options, 'timeZone' ) && /^utc$/i.test(options.timeZone) ) {
                        _temp = this.modifyDate( _temp, -1 * _temp.getTimezoneOffset(), 'minute' )
                    }
                    if ( /^numeric$/i.test( options[scale] ) ) {
                        locale_string = parseInt( _temp.getMilliseconds(), 10 )
                    } else {
                        locale_string = getZerofill( parseInt( _temp.getMilliseconds(), 10 ), 3 )
                    }
                }
                locale_string = this.is_empty( locale_string ) ? _temp.getMilliseconds() : locale_string
                break
            case /^custom$/i.test( scale ):
//console.log( `!getLocaleString::${scale}:`, date_seed, locales, options, _options, _has_options )
                // Custom format
                _temp = this.getCorrectDatetime( date_seed )
                if ( Object.hasOwnProperty.call( options, 'timeZone' ) && /^utc$/i.test(options.timeZone) ) {
                    _temp = this.modifyDate( _temp, -1 * _temp.getTimezoneOffset(), 'minute' )
                }
                if ( Object.hasOwnProperty.call( options, scale ) ) {
                    locale_string = this.datetimeFormat( _temp, options[scale], locales )
                }
                locale_string = this.is_empty( locale_string ) ? _temp.toString() : locale_string
                break
            default:
                // Allowed value as format: 'narrow'
                _temp = this.getCorrectDatetime( date_seed )
                if ( _has_options ) {
                    locale_string = _temp.toLocaleString( locales, _options )
                } else {
                    locale_string = _temp.toString()
                }
                break
        }
//console.log( '!getLocaleString:', date_seed, scale, locales, options[scale], locale_string )
        return locale_string.toString()
    }

    /*
     * Convert the date-time to custom formatting strings, as like ruby
     *
     * @param mixed baseDate (required; should be a Date object)
     * @param string format (optional; defaults to '')
     * @param string locales (optional; defaults to 'en-US')
     *
     * @return string
     */
    datetimeFormat( baseDate, format = '', locales = 'en-US' ) {
        // let _baseDt = Object.prototype.toString.call( baseDate ) === '[object Date]' ? baseDate : this.getCorrectDatetime( baseDate ),
        let _baseDt = baseDate instanceof Date ? baseDate : this.getCorrectDatetime( baseDate ),
            _fmt    = format.toString().split(''),
            _ptn    = 'YyZmBbdwWAaIHMSj'.split(''),
            _cnvStr = '',
            lastDayOfMonth = ( dateObj ) => {
                let _tmp = new Date( dateObj.getFullYear(), dateObj.getMonth() + 1, 1 )

                _tmp.setTime( _tmp.getTime() - 1 )
                return _tmp.getDate()
            }

        if ( this.is_empty( _fmt ) ) {
            return _baseDt.toString()
        }
        _fmt.forEach( ( _str, _i, _orig ) => {
            let _match  = false,
                _repStr = ''

            if ( _ptn.includes( _str ) && ! this.is_empty( _orig[_i - 1] ) && _orig[_i - 1] === '%' ) {
                _match = this.is_empty( _orig[_i - 2] ) || _orig[_i - 2] !== '\\'
            }
            if ( _match ) {
                switch ( _str ) {
                    case 'Y':
                    case 'y':
                    case 'Z': {
                        // year
                        let _year = _baseDt.getFullYear()

                        if ( _str === 'Z' ) {
                            _repStr = _year < 10 ? `000${_year}` : _year < 100 ? `00${_year}` : _year < 1000 ? `0${_year}` : _year
                        } else {
                            _repStr = _str === 'Y' ? _year : _year.toString().slice(-2)
                        }
                        break
                    }
                    case 'm':
                    case 'B':
                    case 'b': {
                        // month
                        if ( _str === 'm' ) {
                            let _month = _baseDt.getMonth() + 1

                            _repStr = _month < 10 ? `0${_month}` : _month
                        } else {
                            let _opts = { month: _str === 'B' ? 'long' : 'short' }

                            _repStr = _baseDt.toLocaleDateString( locales, _opts )
                        }
                        break
                    }
                    case 'd': {
                        // day
                        let _day = _baseDt.getDate()

                        _repStr = _day < 10 ? `0${_day}` : _day
                        break
                    }
                    case 'w':
                    case 'A':
                    case 'a': {
                        // weekday
                        if ( _str === 'w' ) {
                            let _wday = _baseDt.getDay()

                            _repStr = _wday
                        } else {
                            let _opts = { weekday: _str === 'A' ? 'long' : 'short' }

                            _repStr = _baseDt.toLocaleDateString( locales, _opts )
                        }
                        break
                    }
                    case 'W': {
                        // week
                        _repStr = this.getWeek( _baseDt )
                        break
                    }
                    case 'I':
                    case 'H': {
                        // hour
                        let _opts = { hour12: _str === 'I', hour: 'numeric' }

                        _repStr = _baseDt.toLocaleTimeString( locales, _opts )
                        break
                    }
                    case 'M': {
                        // minute
                        _repStr = _baseDt.toLocaleTimeString( locales, { minute: 'numeric' } )
                        break
                    }
                    case 'S': {
                        // second
                        _repStr = _baseDt.toLocaleTimeString( locales, { second: 'numeric' } )
                        break
                    }
                    case 'j': {
                        // day of year
                        let _fdy   = new Date( _baseDt.getFullYear(), 0, 1 ),
                            _month = _baseDt.getMonth(),
                            _days  = 0, _m

                        for ( _m = 0; _m < _month; _m++ ) {
                            _fdy.setMonth( _m )
                            _days += lastDayOfMonth( _fdy )
                        }
                        _repStr = _days + _baseDt.getDate()
                        _repStr = _repStr < 10 ? `00${_repStr}` : _repStr < 100 ? `0${_repStr}` : _repStr
                        break
                    }
                }
                _cnvStr = _cnvStr.substring(0, _cnvStr.length - 1) + _repStr.toString()
            } else {
                _cnvStr += _str
            }
        }, _cnvStr )
        _cnvStr = _cnvStr.toString().replace( /\\/g, '' )
        return _cnvStr
    }

    /*
     * Get the rendering width of the given string
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
     * Sort an array by value of specific property (Note: destructive method)
     * Usage: Object.sort( this.compareValues( property, order ) )
     *
     * @param string key (required)
     * @param string order (optional; defaults to 'asc')
     *
     * @return object
     */
    compareValues( key, order = 'asc' ) {
        return ( a, b ) => {
            if ( ! Object.hasOwnProperty.call( a, key ) || ! Object.hasOwnProperty.call( b, key ) ) {
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
     * Getter argument as user data
     *
     * @since v2.1.0
     *
     * @param array userdata (required)
     *
     * @return mixed
     */
    getUserArg( userdata ) {
        //console.log( '!_getUserArg:', userdata, typeof userdata, typeof userdata[0], this.is_Object( userdata[0] ) )
        switch( typeof userdata[0] ) {
            case 'string':
            case 'number':
                userdata = [ userdata[0] ]
                break
            case 'object':
                if ( this.is_Object( userdata[0] ) ) {
                    // Object
                    if ( this.is_empty( userdata[0] ) ) {
                        userdata = {}
                    } else {
                        userdata = this.mergeDeep( {}, userdata[0] )
                    }
                } else {
                    // Array
                    if ( this.is_empty( userdata[0] ) ) {
                        userdata = []
                    } else {
                        userdata = userdata[0]
                    }
                }
                break
            default:
                userdata = userdata[0]
                break
        }
        return userdata
    }

    /*
     * Apply custom theme styles
     *
     * @since v2.1.0
     *
     * @return void
     */
    applyThemeStyle() {
        let theme    = this._config.colorScheme.theme,
            selector = this._selector,
            styleId  = `${PREFIX}-theme-${selector.replace(/[.#_]/g, '-')}`,
            styleTag = $('<style></style>', { id: styleId }),
            _is      = {},
            _os      = {},
            cssText  = ''
        
        if ( $(`style#${styleId}`).length > 0 ) {
            $(`style#${styleId}`).remove()
        }
        if ( 'default' === theme.name ) {
            return
        }

        _is[Selector.TIMELINE_CONTAINER] = `border:solid 1px ${theme.offline}; background:${theme.background}`
        _is[Selector.HEADLINE_TITLE] = `color:${theme.text}`
        _is[Selector.RANGE_META] = `color:${theme.subtext}`
        _is[Selector.TIMELINE_RULER_TOP] = `outline:solid 1px ${theme.offline}`
        _is[Selector.TIMELINE_RULER_BOTTOM] = `outline:solid 1px ${theme.offline}`
        _is[`${Selector.TIMELINE_RULER_LINES}:nth-child(even)`] = `background-color:${this.hexToRgbA(theme.striped1, 0.25)}`
        _is[Selector.TIMELINE_RULER_ITEM] = `color:${theme.subtext}`
        _is[`${Selector.TIMELINE_RULER_ITEM}:nth-child(even)`] = `background-color:${this.hexToRgbA(theme.striped2, 0.25)}`
        _is[Selector.TIMELINE_EVENT_CONTAINER] = `outline:solid 1px ${theme.offline}`
        _is[`${Selector.TIMELINE_EVENT_NODE}:not(.jqtl-event-type-pointer).active`] = `color:${theme.background};background-color:${theme.active}`
        _is[`${Selector.TIMELINE_EVENT_NODE}:hover`] = `color:${theme.background};background-color:${theme.active}`
        _is[`${Selector.TIMELINE_EVENT_NODE}:hover::after`] = `background-color:${this.hexToRgbA(theme.invertbg, 0.1)}`
        _is[`${Selector.TIMELINE_EVENT_NODE}::before`] = `color:${theme.modesttext}`
        _is[`${Selector.TIMELINE_EVENT_NODE}${Selector.VIEWER_EVENT_TYPE_POINTER}`] = `border:solid 3px ${theme.line}`
        _is[`${Selector.TIMELINE_EVENT_NODE}${Selector.VIEWER_EVENT_TYPE_POINTER}.active`] = `border-color:${theme.activeline}`
        _is[`${Selector.TIMELINE_EVENT_NODE}${Selector.VIEWER_EVENT_TYPE_POINTER}:hover`] = `border-color:${theme.activeline}`
        _is[Selector.TIMELINE_SIDEBAR] = `outline:solid 1px ${theme.offline}`
        _is[`${Selector.TIMELINE_SIDEBAR}> [class^="jqtl-side-index-"]`] = `border-bottom:dotted 1px ${theme.offline};background-color:${theme.background};color:${theme.text}`
        _is[`${Selector.TIMELINE_SIDEBAR} ${Selector.TIMELINE_SIDEBAR_ITEM}:nth-child(odd)`] = `background-color:${theme.striped1}`
        _is[`${Selector.TIMELINE_SIDEBAR} ${Selector.TIMELINE_SIDEBAR_ITEM}:first-child`] = `border-top:solid 1px ${theme.offline}`
        _is[Selector.TIMELINE_SIDEBAR_MARGIN] = `outline:solid 1px ${theme.offline}`
        _is[`${Selector.TIMELINE_SIDEBAR_MARGIN}:first-child`] = `border-bottom:solid 1px ${theme.offline}`
        _is[`${Selector.TIMELINE_SIDEBAR_MARGIN}:last-child`] = `border-top:solid 1px ${theme.offline}`
        _is[Selector.OVERLAY] = `background-color:${this.hexToRgbA(theme.background, 0.65)} !important`
        _is[`${Selector.OVERLAY}:nth-child(odd)`] = `background-color:${this.hexToRgbA(theme.striped1, 0.45)} !important`
        _os[`${Selector.VIEWER_EVENT_TITLE},${Selector.VIEWER_EVENT_CONTENT}`] = `color:${theme.text}`
        _os[`${Selector.VIEWER_EVENT_TITLE}> .event-content`] = `color:${theme.offtext}`
        _os[Selector.VIEWER_EVENT_META] = `color:${theme.offtext}`
        _is[Selector.PRESENT_TIME_MARKER] = `border-left:dotted 1px ${theme.marker}`
        _is[`${Selector.PRESENT_TIME_MARKER}::before,${Selector.PRESENT_TIME_MARKER}::after`] = `background-color:${theme.marker}`
        _is[`${Selector.LOADER_ITEM} span`] = `background:${this.hexToRgbA(theme.text, 0.15)}`
        _os['@keyframes loader'] = `0%{background:${this.hexToRgbA(theme.text, 0.15)}}25%{background:${this.hexToRgbA(theme.text, 0.15)}}50%{background:${this.hexToRgbA(theme.text, 0.15)}}100%{background:${this.hexToRgbA(theme.text, 0.15)}}`

        for ( let _prop of Object.keys( _is ) ) {
            cssText += `${selector} ${_prop}{${_is[_prop]}}`
        }
        for ( let _prop of Object.keys( _os ) ) {
            cssText += `${_prop}{${_os[_prop]}}`
        }
        $('head').append( styleTag.text( cssText ) )
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

            if ( ! data ) {
                // Apply the plugin and store the instance in data
                data = new Timeline( this, _config )
                $(this).data( DATA_KEY, data )
            }

            if ( typeof config === 'string' && config.charAt(0) != '_' ) {
                if ( typeof data[config] === 'undefined' ) {
                    // Call no method
                    throw new ReferenceError( `No method named "${config}"` )
                }
                // Call public method
                data[config]( args )
            } else {
                if ( ! data._isInitialized || ! data._isCompleted ) {
                    data._init()
                }
            }
        })
    }

    static _getInstance( element ) {
        return Data.getData( element, DATA_KEY )
    }

} // class end


/* ----------------------------------------------------------------------------------------------------------------
 * For jQuery
 * ----------------------------------------------------------------------------------------------------------------
 */
$.fn[NAME] = Timeline._jQueryInterface
$.fn[NAME].Constructor = Timeline
$.fn[NAME].noConflict = () => {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Timeline._jQueryInterface
}
