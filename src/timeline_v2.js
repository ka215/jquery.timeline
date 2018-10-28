// import Util from './timeline-utils.js'
/*!
 * jQuery Timeline
 * ------------------------
 * Version: 2.0.0
 * Author: Ka2 (https://ka2.org/)
 * Repository: https://github.com/ka215/jquery.timeline/tree/develop
 * Lisenced: MIT
 */
/*
 * Support the CommonJS because like registable to the npm (:> npmに登録できるように、CommonJSをサポート
 * See: https://blog.npmjs.org/post/112712169830/making-your-jquery-plugin-work-better-with-npm
 */
;(function( factory ) {
    
    if ( typeof module === 'object' && typeof module.exports === 'object' ) {
        factory( require( 'jquery' ), window, document )
    } else {
        factory( jQuery, window, document )
    }
    
}(function( $, window, document, undefined ) {
    
    /*
     * Constants
     */
    const NAME               = 'timeline'
    const VERSION            = '2.0.0'
    const DATA_KEY           = 'jq.timeline'
    const EVENT_KEY          = `.${DATA_KEY}`
    const DATA_API_KEY       = '.data-api'
    const JQUERY_NO_CONFLICT = $.fn[NAME]
    const ESCAPE_KEYCODE     = 27 // KeyboardEvent.which value for Escape (Esc) key
    
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
                lines      : [], // defaults to this.option.scale
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
            left        : "jqtl-circle-left",
            right       : "jqtl-circle-right"
        },
        loader          : "default", // Custom loader definition, possible values are "default", false and selector of loader element; Added new since v2.0.0
        hideScrollbar   : false,
        showEventMeta   : true, // Display meta of range on event node when the timeline type is "bar"; Added new since v2.0.0
        showPointer     : true,
        // i18n         : {}, // --> Deprecated since v1.0.6
        // langsDir     : "./langs/", // --> Deprecated since v1.0.6
        // httpLanguage : false, // --> Deprecated since v1.0.6
        // duration     : 150, // duration of animate as each transition effects; Added v1.0.6 --> Deprecated since v2.0.0
        debug           : true,
    }
    
    /*
    const MinScaleGridSize = {
        millennium : 256,
        century    : 144,
        decade     : 120,
        lustrum    : 108,
        year       : 96,
        month      : 80,
        week       : 64,
        day        : 48,
        hour       : 32,
        minute     : 16,
        second     : 8
    }
    */
    
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
    
    const DefaultType = {
        
    }
    
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
        bgColor   : '#E7E7E7',
        color     : '#343A40',
        label     : '',
        content   : '',
        image     : '',
        margin    : Default.marginHeight,
        rangeMeta : '',
        extend    : {},
        callback  : function() {},
        relation  : {},
    }
    
    const Event = {
        INITIALIZED : `initialized${EVENT_KEY}`,
        HIDE        : `hide${EVENT_KEY}`,
        HIDDEN      : `hidden${EVENT_KEY}`,
        SHOW        : `show${EVENT_KEY}`,
        SHOWN       : `shown${EVENT_KEY}`,
    }
    
    const ClassName = {
        
    }
    
    const Selector = {
        
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
                _selector   = _elem.tagName + ( _elem.id ? '#' + _elem.id : '' ) + ( _elem.className ? '.' + _elem.className.replace(/\s/g, '.') : '' )
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
            
        }
        
        /*
         * @private: Calculate each properties of the timeline instance
         */
        _calcVars() {
            let _opts  = this._config,
                _props = {}
            
            _props.begin      = supplement( null, this._getPluggableDatetime( _opts.startDatetime ) )
            _props.end        = supplement( null, this._getPluggableDatetime( _opts.endDatetime ) )
            _props.scaleSize  = supplement( null, _opts.minGridSize, validateNumeric )
            _props.rows       = this._getPluggableRows()
            _props.rowSize    = supplement( null, _opts.rowHeight, validateNumeric )
            _props.width      = supplement( null, _opts.width, validateNumeric )
            _props.height     = supplement( null, _opts.height, validateNumeric )
            
            this._instanceProps = _props
            
            if ( /^(year|month)s?$/i.test( _opts.scale ) ) {
                // For scales where the value of quantity per unit is variable length (:> 単位あたりの量の値が可変長であるスケールの場合
                let _temp = this._verifyScale( _opts.scale ),
                    _vals = Object.values( _temp ),
                    _avrg = numRound( _vals.reduce( ( a, v ) => a + v, 0 ) / _vals.length, 4 ), // Average value within the range
                    _bc   = /^years?$/i.test( _opts.scale ) ? 365 : 30,
                    _sy   = 0
                
//console.log( '!', _opts.scale, _temp, _vals )
                _vals.forEach( ( v ) => {
                    _sy += numRound( ( v * _props.scaleSize ) / _bc, 2 )
                })
                
                _props.scale         = _avrg * ( 24 * 60 * 60 * 1000 )
                _props.grids         = _vals.length
                _props.variableScale = _temp
                _props.fullwidth     = _sy
            } else {
                // In case of fixed length scale (:> 固定長スケールの場合
                _props.scale         = this._verifyScale( _opts.scale )
                _props.grids         = Math.ceil( ( _props.end - _props.begin ) / _props.scale )
                _props.variableScale = null
                _props.fullwidth     = _props.grids * _props.scaleSize
            }
            _props.fullheight = _props.rows * _props.rowSize
            // Define visible size according to full size of timeline (:> タイムラインのフルサイズに準じた可視サイズを定義
            _props.visibleWidth  = _props.width > 0  ? ( _props.width <= _props.fullwidth ? _props.width : _props.fullwidth ) + 'px' : '100%'
            _props.visibleHeight = _props.height > 0 ? ( _props.height <= _props.fullheight ? _props.height : _props.fullheight ) + 'px' : 'auto'
            
            for ( let _prop in _props ) {
                if ( _prop === 'width' || _prop === 'height' || _prop === 'variableScale' ) {
                    continue
                }
                if ( is_empty( _props[_prop] ) ) {
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
        _getPluggableDatetime( key ) {
            let _opts = this._config,
                _date
            
            switch ( true ) {
                case /^current(|ly)$/i.test( key ):
                    _date = new Date()
                    break
                case /^auto$/i.test( key ):
                    let _ms          = null,
                        _higherScale = getHigherScale( _opts.scale )
                    
                    if ( /^current(|ly)$/i.test( _opts.startDatetime ) ) {
                        _date = new Date()
                    } else {
                        _date = getCorrectDatetime( _opts.startDatetime )
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
//console.log( '!auto:', _opts.scale, getHigherScale( _opts.scale ), key, _date.getTime() )
                    break
                default:
                    _date = getCorrectDatetime( key )
                    break
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
                    params = JSON.parse( JSON.stringify( ( new Function( 'return ' + str_like_params ) )() ) )
                    if ( params.hasOwnProperty( 'extend' ) ) {
                        params.extend = JSON.parse( JSON.stringify( ( new Function( 'return ' + params.extend ) )() ) )
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
            let _opts = this._config,
                fixed_rows = supplement( 'auto', _opts.rows, validateNumeric )
            
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
console.log( '!p', this._instanceProps, _opts.scale )
                    if ( /^(year|month)s?$/i.test( _opts.scale ) ) {
                        return this._diffDate( _props.begin, _props.end, scale )
                    } else {
                        _ms = 30.44 * 24 * 60 * 60 * 1000
                    }
                case /^years?$/i.test( scale ):
                    // Year (is the variable length scale) (:> 年（可変長スケール）
                    if ( /^(year|month)s?$/i.test( _opts.scale ) ) {
                        return this._diffDate( _props.begin, _props.end, scale )
                    } else {
                        _ms = 365.25 * 24 * 60 * 60 * 1000
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
                _tl_container  = $('<div></div>', { class: 'jqtl-container', style: 'width: '+ _props.visibleWidth +'; height: '+ _props.visibleHeight +';' }),
                _tl_main       = $('<div></div>', { class: 'jqtl-main' })
            
//console.log( _elem, _opts, _props )
            if ( $(_elem).length == 0 ) {
                throw new TypeError( 'Does not exist the element to render a timeline container.' )
            }
            
            if ( _opts.debug ) {
                console.log( 'Timeline:{ fullWidth: '+ _props.fullwidth +'px,', 'fullHeight: '+ _props.fullheight +'px,', 'viewWidth: '+ _props.visibleWidth, 'viewHeight: '+ _props.visibleHeight +' }' )
            }
            
            $(_elem).css( 'position', 'relative' ) // initialize; not .empty()
            if ( _opts.hideScrollbar ) {
                _tl_container.addClass( 'hide-scrollbar' )
            }
            
            // Create the timeline headline (:> タイムラインの見出しを生成
            $(_elem).prepend( this._createHeadline() )
            
            // Create the timeline event container (:> タイムラインのイベントコンテナを生成
            _tl_main.append( this._createEventContainer() )
            
            // Create the timeline ruler (:> タイムラインの目盛を生成
            if ( ! is_empty( _opts.ruler.top ) ) {
                _tl_main.prepend( this._createRuler( 'top' ) )
            }
            if ( ! is_empty( _opts.ruler.bottom ) ) {
                _tl_main.append( this._createRuler( 'bottom' ) )
            }
            
            // Create the timeline side index (:> タイムラインのサイドインデックスを生成
            let margin = {
                    top    : parseInt( _tl_main.find('.jqtl-ruler-top').height(), 10 ) - 1,
                    bottom : parseInt( _tl_main.find('.jqtl-ruler-bottom').height(), 10 ) - 1
                }
            
            if ( _opts.sidebar.list.length > 0 ) {
                _tl_container.prepend( this._createSideIndex( margin ) )
            }
            
            // Append the timeline container in the timeline element (:> タイムライン要素にタイムラインコンテナを追加
            _tl_container.append( _tl_main )
            $(_elem).append( _tl_container )
            
            // Create the timeline footer (:> タイムラインのフッタを生成
            $(_elem).append( this._createFooter( /* footer, _begin, _end */ ) )
            
            this._isShown = true
        }
        
        /*
         * @private: Create the headline of the timeline (:> タイムラインの見出しを作成する
         */
        _createHeadline() {
            let _opts    = this._config,
                _props   = this._instanceProps,
                _display = supplement( Default.headline.display, _opts.headline.display, validateBoolean ),
                _title   = supplement( null, _opts.headline.title ),
                _range   = supplement( Default.headline.range, _opts.headline.range, validateBoolean ),
                _locale  = supplement( Default.headline.locale, _opts.headline.locale ),
                _format  = supplement( Default.headline.format, _opts.headline.format ),
                _begin   = supplement( null, _props.begin ),
                _end     = supplement( null, _props.end ),
                _tl_headline = $('<div></div>', { class: 'jqtl-headline', }),
                _wrapper     = $('<div></div>', { class: 'jqtl-headline-wrapper' })
            
console.log( _opts )
            if ( _title ) {
                _wrapper.append( '<h3 class="jqtl-timeline-title">'+ _opts.headline.title +'</h3>' )
            }
            if ( _range ) {
                if ( _begin && _end ) {
                    let _meta = new Date( _begin ).toLocaleString( _locale, _format ) +'<span class="jqtl-range-span"></span>'+ new Date( _end ).toLocaleString( _locale, _format )
                    //let _meta = getCorrectDatetime( _begin ).toLocaleString( _locale, _format ) +'<span class="jqtl-range-span"></span>'+ getCorrectDatetime( _end ).toLocaleString( _locale, _format )
                    
                    _wrapper.append( '<div class="jqtl-range-meta">'+ _meta +'</div>' )
                }
            }
            if ( ! _display ) {
                _tl_headline.addClass( 'jqtl-hide' )
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
                _container    = $('<div></div>', { class: 'jqtl-event-container', style: `height:${_actualHeight}px;` }),
                _events_bg    = $('<canvas width="'+ ( _props.fullwidth - 1 ) +'" height="'+ _actualHeight +'"></canvas>', { class: 'jqtl-bg-grid', }),
                _events_body  = $('<div></div>', { class: 'jqtl-events' }),
                _cy           = 0,
                ctx_grid      = _events_bg[0].getContext('2d'),
                drawRowRect   = ( pos_y, color ) => {
                    color = supplement( '#FFFFFF', color )
                    // console.log( 0, pos_y, _fullwidth, _size_row, color )
                    ctx_grid.fillStyle = color
                    ctx_grid.fillRect( 0, pos_y + 0.5, _props.fullwidth, _props.rowSize + 1.5 )
                    ctx_grid.stroke()
                },
                drawHorizontalLine = ( pos_y, is_dotted ) => {
                    is_dotted = supplement( false, is_dotted )
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
                    is_dotted = supplement( false, is_dotted )
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
                    _sy += numRound( ( _props.variableScale[_key] * _props.scaleSize ) / _bc, 2 )
                    drawVerticalLine( _sy, false )
                }
            } else {
                // In case of fixed length scale (:> 固定長スケールの場合
                for ( let i = 1; i < _props.grids; i++ ) {
                    drawVerticalLine( ( i * _props.scaleSize ), false )
                }
            }
            
            return _container.append( _events_bg ).append( _events_body )
        }
        
        /*
         * @private: Create the ruler of the timeline (:> タイムラインの目盛を作成する
         */
        _createRuler( position ) {
            let _opts       = this._config,
                _props      = this._instanceProps,
                ruler_line  = supplement( [ _opts.scale ], _opts.ruler[position].lines, ( def, val ) => { return is_array( val ) && val.length > 0 ? val : def }),
                line_height = supplement( Default.ruler.top.height, _opts.ruler[position].height ),
                font_size   = supplement( Default.ruler.top.fontSize, _opts.ruler[position].fontSize ),
                text_color  = supplement( Default.ruler.top.color, _opts.ruler[position].color ),
                background  = supplement( Default.ruler.top.background, _opts.ruler[position].background ),
                locale      = supplement( Default.ruler.top.locale, _opts.ruler[position].locale ),
                format      = supplement( Default.ruler.top.format, _opts.ruler[position].format ),
                ruler_opts  = { lines: ruler_line, height: line_height, fontSize: font_size, color: text_color, background: background, locale: locale, format: format },
                _fullwidth  = _props.fullwidth - 1,
                _fullheight = ruler_line.length * line_height,
                _ruler      = $('<div></div>', { class: `jqtl-ruler-${position}`, style: `height:${_fullheight}px;` }),
                _ruler_bg   = $('<canvas class="jqtl-ruler-bg-'+ position +'" width="'+ _fullwidth +'" height="'+ _fullheight +'"></canvas>'),
                _ruler_body = $('<div></div>', { class: `jqtl-ruler-content-${position}` }),
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
                let _line_x = position === 'top' ? 0 : ctx_ruler.canvas.width,
                    _line_y = position === 'top' ? line_height * ( idx + 1 ) - 0.5 : line_height * idx + 0.5
                
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
                        _grid_x += numRound( _line_grids[_key], 2 )
                        
                        ctx_ruler.moveTo( _grid_x + _correction, position === 'top' ? _line_y - line_height : _line_y )
                        ctx_ruler.lineTo( _grid_x + _correction, position === 'top' ? _line_y : _line_y + line_height )
                    }
                } else {
                    // In case of fixed length scale (:> 固定長スケールの場合
                    _line_grids = this._getGridsPerScale( line_scale )
                    
                    for ( let _key in _line_grids ) {
                        if ( is_empty( _key ) || _line_grids[_key] >= _props.grids ) {
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
                _ruler.css( 'height', _finalLines * line_height + 'px' )
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
                    grid_size = numRound( ( _days * _props.scaleSize ) / _bc, 2 ),
                    _newKey   = null,
                    _arr, _temp
console.log( '!_filterVariableScale:', _dt, getCorrectDatetime( _dt ).getFullYear(), _days )
                
                switch ( true ) {
                    case /^millenniums?|millennia$/i.test( target_scale ):
                        _newKey = Math.ceil( getCorrectDatetime( _dt ).getFullYear() / 1000 )
                        
                        if ( retObj.hasOwnProperty( _newKey ) ) {
                            retObj[_newKey] += grid_size
                        } else {
                            retObj[_newKey] = grid_size
                        }
                        break
                    case /^century$/i.test( target_scale ):
                        _newKey = Math.ceil( getCorrectDatetime( _dt ).getFullYear() / 100 )
                        
                        if ( retObj.hasOwnProperty( _newKey ) ) {
                            retObj[_newKey] += grid_size
                        } else {
                            retObj[_newKey] = grid_size
                        }
                        break
                    case /^dec(ade|ennium)$/i.test( target_scale ):
                        _newKey = Math.ceil( getCorrectDatetime( _dt ).getFullYear() / 10 )
                        
                        if ( retObj.hasOwnProperty( _newKey ) ) {
                            retObj[_newKey] += grid_size
                        } else {
                            retObj[_newKey] = grid_size
                        }
                        break
                    case /^lustrum$/i.test( target_scale ):
                        _newKey = Math.ceil( getCorrectDatetime( _dt ).getFullYear() / 5 )
                        
                        if ( retObj.hasOwnProperty( _newKey ) ) {
                            retObj[_newKey] += grid_size
                        } else {
                            retObj[_newKey] = grid_size
                        }
                        break
                    case /^years?$/i.test( target_scale ):
                        _newKey = `${getCorrectDatetime( _dt ).getFullYear()}`
                        
                        if ( retObj.hasOwnProperty( _newKey ) ) {
                            retObj[_newKey] += grid_size
                        } else {
                            retObj[_newKey] = grid_size
                        }
                        break
                    case /^months?$/i.test( target_scale ):
                        retObj[`${getCorrectDatetime( _dt ).getFullYear()}/${getCorrectDatetime( _dt ).getMonth() + 1}`] = grid_size
                        break
                    case /^weeks?$/i.test( target_scale ):
                        _arr  = _dt.split(',')
                        _temp = new Date( _arr[0] ).getWeek()
                        retObj[`${getCorrectDatetime( _arr[0] ).getFullYear()},${_temp}`] = grid_size
                        break
                    case /^weekdays?$/i.test( target_scale ):
                        _arr  = _dt.split(',')
                        _temp = getCorrectDatetime( _arr[0] ).getDay()
                        retObj[`${getCorrectDatetime( _arr[0] ).getFullYear()}/${getCorrectDatetime( _arr[0] ).getMonth() + 1}/1,${_temp}`] = grid_size
                        break
                    case /^days?$/i.test( target_scale ):
                        retObj[`${getCorrectDatetime( _dt ).getFullYear()}/${getCorrectDatetime( _dt ).getMonth() + 1}/1`] = grid_size
                        break
                    case /^hours?$/i.test( target_scale ):
                        retObj[`${getCorrectDatetime( _dt ).getFullYear()}/${getCorrectDatetime( _dt ).getMonth() + 1}/1 0`] = grid_size
                        break
                    case /^minutes?$/i.test( target_scale ):
                        retObj[`${getCorrectDatetime( _dt ).getFullYear()}/${getCorrectDatetime( _dt ).getMonth() + 1}/1 0:00`] = grid_size
                        break
                    case /^seconds?$/i.test( target_scale ):
                        retObj[`${getCorrectDatetime( _dt ).getFullYear()}/${getCorrectDatetime( _dt ).getMonth() + 1}/1 0:00:00`] = grid_size
                        break
                    default:
                        retObj[`${getCorrectDatetime( _dt ).getFullYear()}/${getCorrectDatetime( _dt ).getMonth() + 1}`] = grid_size
                        break
                }
            }
            
            return retObj
        }
        
        /*
         * @private: Get the grid number per scale (for fixed length scale) (:> スケールごとのグリッド数を取得する（固定長スケール用）
         */
        _getGridsPerScale( target_scale ) {
            let _opts        = this._config,
                _props       = this._instanceProps,
                _scopes      = [],
                _scale_grids = {},
                _sep         = '/'
            
            for ( let i = 0; i < _props.grids; i++ ) {
                let _tmp = new Date( _props.begin + ( i * _props.scale ) ),
                //let _tmp = getCorrectDatetime( _props.begin + ( i * _props.scale ) ),
                    _y   = _tmp.getFullYear(),
                    _mil = Math.ceil( _y / 1000 ),
                    _cen = Math.ceil( _y / 100 ),
                    _dec = Math.ceil( _y / 10 ),
                    _lus = Math.ceil( _y / 5 ),
                    _m   = _tmp.getMonth() + 1,
                    _wd  = _tmp.getDay(), // 0 = Sun, ... 6 = Sat
                    _d   = _tmp.getDate(),
                    _w   = new Date( `${_y}/${_m}/${_d}` ).getWeek(),
                    _h   = _tmp.getHours(),
                    _min = _tmp.getMinutes(),
                    _s   = _tmp.getSeconds()
                
                _scopes.push({
                    millennium : _mil,
                    century    : _cen,
                    decade     : _dec,
                    lustrum    : _lus,
                    year       : _y,
                    month      : _y + _sep + _m + _sep + '1',
                    week       : _y + ',' + _w,
                    weekday    : _y + _sep + _m + _sep + _d + ',' + _wd,
                    day        : _y + _sep + _m + _sep + _d,
                    hour       : _y + _sep + _m + _sep + _d + ' ' + _h,
                    minute     : _y + _sep + _m + _sep + _d + ' ' + _h + ':' + _min,
                    second     : _y + _sep + _m + _sep + _d + ' ' + _h + ':' + _min + ':' + _s,
                    datetime   : _tmp.toString()
                })
            }
            _scopes.forEach( ( _scope, idx ) => {
//console.log( _scope[target_scale], idx );
                if ( ! _scale_grids[_scope[target_scale]] ) {
                    _scale_grids[_scope[target_scale]] = 1
                } else {
                    _scale_grids[_scope[target_scale]]++
                }
            })
console.log( '!_getGridsPerScale:', target_scale, _scale_grids )
            
            return _scale_grids
        }
        
        /*
         * @private: Create the content of ruler of the timeline (:> タイムラインの目盛本文を作成する
         */
        _createRulerContent( _line_grids, line_scale, ruler ) {
            let _opts        = this._config,
                _props       = this._instanceProps,
                line_height  = supplement( Default.ruler.top.height, ruler.height ),
                font_size    = supplement( Default.ruler.top.fontSize, ruler.fontSize ),
                text_color   = supplement( Default.ruler.top.color, ruler.color ),
                locale       = supplement( Default.ruler.top.locale, ruler.locale, validateString ),
                format       = supplement( Default.ruler.top.format, ruler.format, validateObject ),
                _ruler_lines = $('<div></div>', { class: 'jqtl-ruler-line-rows', style: 'width:100%;height:'+ line_height +'px;' })
            
            for ( let _key in _line_grids ) {
                let _item_width      = /^(year|month)s?$/i.test( _opts.scale ) ? _line_grids[_key] : _line_grids[_key] * _props.scaleSize,
                    _line            = $('<div></div>', { class: 'jqtl-ruler-line-item', style: `width:${_item_width}px;height:${line_height}px;line-height:${line_height}px;font-size:${font_size}px;color:${text_color};` }),
                    _ruler_string    = getLocaleString( _key, line_scale, locale, format ),
                    _data_ruler_item = ''
console.log( '!_createRulerContent:', _key, _line_grids[_key], line_scale, locale, format, _item_width, _ruler_string )
                
                _data_ruler_item  = line_scale +'-'+ ( _data_ruler_item === '' ? String( _key ) : _data_ruler_item )
                _line.attr( 'data-ruler-item', _data_ruler_item ).html( _ruler_string )
                
                if ( _item_width > strWidth( _ruler_string ) ) {
                    // Adjust position of ruler item string
//console.log( _item_width, _ruler_string, _ruler_string.length, strWidth( _ruler_string ), $(this._element).width() )
                    if ( _item_width > $(this._element).width() ) {
                        _line.addClass( 'jqtl-rli-left' )
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
                _sticky  = supplement( Default.sidebar.sticky, _opts.sidebar.sticky ),
                _overlay = supplement( Default.sidebar.overlay, _opts.sidebar.overlay ),
                _sbList  = supplement( Default.sidebar.list, _opts.sidebar.list ),
                _wrapper = $('<div></div>', { class: 'jqtl-side-index' }),
                _margin  = $('<div></div>', { class: 'jqtl-side-index-margin' }),
                _list    = $('<div></div>', { class: 'jqtl-side-index-item' }),
                _c       = 0.5
            
            if ( _sticky ) {
                _wrapper.addClass( 'jqtl-sticky-left' )
            }
            
            if ( _overlay ) {
                _list.addClass( 'jqtl-overlay' )
            }
            
            //_wrapper.css( 'margin-top', margin.top + 'px' ).css( 'margin-bottom', margin.bottom + 'px' )
            if ( margin.top > 0 ) {
                _wrapper.prepend( _margin.clone().css( 'height', ( margin.top + 1 ) +'px' ) )
            }
            
            for ( let i = 0; i < _props.rows; i++ ) {
                let _item = _list.clone().html( _sbList[i] )
                
                _wrapper.append( _item )
            }
            _wrapper.find('.jqtl-side-index-item').css( 'height', ( _props.rowSize + _c ) + 'px' ).css( 'line-height', ( _props.rowSize + _c ) + 'px' )
            
            if ( margin.bottom > 0 ) {
                _wrapper.append( _margin.clone().css( 'height', ( margin.bottom + 1 ) + 'px' ) )
            }
            
            return _wrapper
        }
        
        /*
         * @private: Create the footer of the timeline (:> タイムラインのフッターを作成する
         */
        _createFooter() {
            let _opts    = this._config,
                _props   = this._instanceProps,
                _display = supplement( Default.footer.display, _opts.footer.display ),
                _content = supplement( null, _opts.footer.content ),
                _range   = supplement( Default.footer.range, _opts.footer.range ),
                _locale  = supplement( Default.footer.locale, _opts.footer.locale ),
                _format  = supplement( Default.footer.format, _opts.footer.format ),
                _begin   = supplement( null, _props.begin ),
                _end     = supplement( null, _props.end ),
                _tl_footer = $('<div></div>', { class: 'jqtl-footer', })
            
            if ( _range ) {
                if ( _begin && _end ) {
                    let _meta = getLocaleString( _begin, _opts.scale, _locale, _format ) +'<span class="jqtl-range-span"></span>'+ getLocaleString( _end, _opts.scale, _locale, _format )
                    //let _meta = getCorrectDatetime( _begin ).toLocaleString( _locale, _format ) +'<span class="jqtl-range-span"></span>'+ getCorrectDatetime( _end ).toLocaleString( _locale, _format )
                    
                    _tl_footer.append( '<div class="jqtl-range-meta jqtl-align-self-right">'+ _meta +'</div>' )
                }
            }
            if ( _content ) {
                _tl_footer.append( '<div class="jqtl-footer-content">'+ _content +'</div>' )
            }
            if ( ! _display ) {
                _tl_footer.addClass( 'jqtl-hide' )
            }
            
            return _tl_footer
        }
        
        /*
         * @private: Acquire the difference between two dates with the specified scale value (:> 2つの日付の差分を指定したスケール値で取得する
         */
        _diffDate( date1, date2, scale = 'millisecond', absval = false ) {
            let _opts  = this._config,
                _dt1   = supplement( null, date1 ),
                _dt2   = supplement( null, date2 ),
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
console.log( '!_diffDate:', retval )
            
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
                _container    = $(_elem).find('.jqtl-container'),
                _ruler_top    = $(_elem).find('.jqtl-ruler-top'),
                _ruler_bottom = $(_elem).find('.jqtl-ruler-bottom'),
                _event_list   = $(_elem).find('.timeline-events'),
                _cnt          = 0,
                events        = [],
                lastEventId   = 0
            
            _event_list.children().each(function() {
                let _attr = $(this).attr('data-timeline-node')
                
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
                    _visible_height = _container.height(),
                    _margin_top     = ( _visible_height - ( _ruler_top.height() || 0 ) - ( _ruler_bottom.height() || 0 ) ) / 2
                
//console.log( _visible_width, _visible_height, _margin_top )
                 $(_elem).find('.jqtl-container').append( this._showLoader( _visible_width, _visible_height ) )
            }
            
//console.log( _opts )
            // Register Event Data
            _event_list.children().each(function() {
                let _evt_params = _that._getPluggableParams( $(this).attr('data-timeline-node') ),
                    _one_event  = {}
                
                if ( ! is_empty( _evt_params ) ) {
                    _one_event = _that._registerEventData( this, _evt_params )
                    events.push( _one_event )
                    lastEventId = Math.max( lastEventId, Number( _one_event.eventId ) )
                }
            });
            // Set event id with auto increment (:> イベントIDを自動採番
            events.forEach(function( _evt, _i, _this ){
                let _chkId = Number( _this[_i].eventId )
                
                if ( _chkId == 0 ) {
                    lastEventId++
                    _this[_i].eventId = lastEventId
                } else {
                    _this[_i].eventId = _chkId
                }
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
            margin_top = supplement( 0, margin_top, validateNumeric )
            let _opts   = this._config,
                _loader = $('<div></div>', { id: 'jqtl-loader', style: `width:${width}px;height:${height}px;top:${margin_top}px;` })
            
            if ( $(_opts.loader).length == 0 ) {
                height = height === 'auto' ? '240px' : height
                let _loading_text = 'Loading...'.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[\s\S]|^$/g).filter( Boolean )
                
                _loading_text.forEach( ( str, idx ) => {
                    let _fountain_text = $('<div></div>', { id: 'jqtl-loading_'+ ( idx + 1 ), class: 'jqtl-loading' }).text( str )
                    _loader.append( _fountain_text )
                })
            } else {
                let _custom_loader = $(_opts.loader).clone().prop( 'hidden', false ).css( 'display', 'block' )
                _loading.append( _custom_loader )
            }
            return _loader
        }
        
        /*
         * @private:  Hide the loader (:> ローダーを非表示
         */
        _hideLoader() {
            $(this._element).find('#jqtl-loader').remove()
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
                        uid   : generateUniqueID(),
                        label : $(event_element).html()
                    }
                },
                _x, _w, _c
//console.log( params, new_event )
            
            if ( params.hasOwnProperty( 'start' ) ) {
                _x = this._getCoordinateX( params.start )
                new_event.x = numRound( _x, 2 )
                if ( params.hasOwnProperty( 'end' ) ) {
                    _x = this._getCoordinateX( params.end )
                    _w = _x - new_event.x
                    new_event.width = numRound( _w, 2 )
                    
//console.log( params.start, _opts.scale, getLocaleString( params.start, _opts.scale, Default.ruler.top.locale, Default.ruler.top.format ) )
//console.log( params.end, _opts.scale, getLocaleString( params.end, _opts.scale, Default.ruler.top.locale, Default.ruler.top.format ) )
                    new_event.rangeMeta += getLocaleString( params.start, _opts.scale, _opts.ruler.top.locale, _opts.ruler.top.format )
                    new_event.rangeMeta += '-' + getLocaleString( params.end, _opts.scale, _opts.ruler.top.locale, _opts.ruler.top.format )
                }
//console.log( 'getX:', _x, 'getW:', _w, event_element )
                if ( params.hasOwnProperty( 'row' ) ) {
                    _c = Math.floor( params.row / 2 )
                    new_event.y = ( params.row - 1 ) * _opts.rowHeight + new_event.margin + _c
                }
                
                Object.keys( new_event ).forEach( ( _prop ) => {
                    switch( _prop ) {
                        case 'label':
                        case 'content':
                            if ( params.hasOwnProperty( _prop ) && params[_prop] && params[_prop] !== '' ) {
                                new_event[_prop] = params[_prop]
                            }
                            // Override the children element to label or content setting
                            if ( $(event_element).children('.event-' + _prop).length > 0 ) {
                                new_event[_prop] = $(event_element).children('.event-' + _prop).html()
                            }
                            break
                        default:
                            if ( params.hasOwnProperty( _prop ) && params[_prop] && params[_prop] !== '' ) {
                                new_event[_prop] = params[_prop]
                            }
                            break
                    }
                });
            }
            return new_event
        }
        
        /*
         * @private: Get the coordinate X on the timeline of any date (:> 任意の日付のタイムライン上のX座標（横軸座標）を取得する
         */
        _getCoordinateX( date ) {
            let _opts  = this._config,
                _props = this._instanceProps,
                _date  = supplement( null, this._getPluggableDatetime( date ) ),
                coordinate_x = 0
            
            if ( _date ) {
                if ( _date - _props.begin >= 0 && _props.end - _date >= 0 ) {
                    // When the given date is within the range of timeline begin and end (:> 指定された日付がタイムラインの開始と終了の範囲内にある場合
                    coordinate_x = ( Math.abs( _date - _props.begin ) / _props.scale ) * _props.scaleSize
                /*
                } else
                if ( _date - _props.begin < 0 ) {
                    // When the given date is less than the begin of timeline range (:> 指定された日付がタイムラインの開始時より前にある場合
                    coordinate_x = ( ( _date - _props.begin ) / _props.scale ) * _props.scaleSize
                */
                } else {
                    // When the given date is greater than the end of timeline range (:> 指定された日付がタイムラインの終了時より後にある場合
                    coordinate_x = ( ( _date - _props.begin ) / _props.scale ) * _props.scaleSize // _props.fullwidth + 1
                }
            } else {
                console.warn( 'Cannot parse date because invalid format or undefined.' )
            }
            
//console.log( _date, ' => ', coordinate_x )
            return coordinate_x
        }
        
        _placeEvent() {
            this._debug( '_placeEvent' )
            
            if ( ! this._isCached ) {
                return
            }
            
            let _elem          = this._element,
                _opts          = this._config,
                _evt_container = $(_elem).find('.jqtl-events'),
                events         = {}
            
            if ( ( 'sessionStorage' in window ) && ( window.sessionStorage !== null ) ) {
                events = JSON.parse( sessionStorage.getItem( this._selector ) )
            }
            
            if ( events.length > 0 ) {
                events.forEach(( _evt, _idx ) => {
                    let _evt_elem = this._createEventNode( _evt )
                    if ( _evt_elem ) {
                        _evt_container.append( _evt_elem )
                    }
                })
            }
            
            sleep( 1000 ).then(() => {
                this._hideLoader()
                _evt_container.fadeIn('normal')
            })
            
        }
        
        /*
         * @private: Create an event element on the timeline (:> タイムライン上にイベント要素を作成する
         */
        _createEventNode( params ) {
            let _opts     = this._config,
                _props    = this._instanceProps,
                _evt_elem = $('<div></div>', {
                    class : 'jqtl-event-node',
                    id    : `evt-${params.eventId}`,
                    css   : {
                        left   : `${params.x}px`,
                        top    : `${params.y}px`,
                        width  : `${params.width}px`,
                        height : `${params.height}px`,
                        color  : hexToRgbA( params.color ),
                        backgroundColor : hexToRgbA( params.bgColor ),
                    },
                    html  : `<div class="jqtl-event-label">${params.label}</div>`
                })
            
            // Whether this event is within the display range of the timeline (:> タイムライン表示範囲内のイベントかどうか
            if ( params.x >= 0 ) {
                // The event start datetime is over the start datetime of the timeline (:> イベント始点がタイムラインの始点以上
                if ( params.x <= _props.fullwidth ) {
                    // The event start datetime is less than or equal to the timeline end datetime (:> イベントの始点がタイムラインの終点以下
                    if ( params.x + params.width <= _props.fullwidth ) {
                        // The event end datetime is less than before the timeline end datetime (regular event) (:> イベント終点がタイムラインの終点以下（通常イベント）
                    } else {
                        // The event end datetime is after the timeline end datetime (event exceeded end datetime) (:> イベント終点がタイムラインの終点より後（終点超過イベント）
                        params.width = _props.fullwidth - params.x
                    }
                } else {
                    // The event start datetime is after the timeline end datetime (exclude event) (:> イベント始点がタイムラインの終点より後（除外イベント）
                    params.width = 0
                }
            } else {
                // The event start datetime is before the timeline start datetime (:> イベント始点がタイムラインの始点より前
                if ( params.x + params.width <= 0 ) {
                    // The event end datetime is less than before the timeline start datetime (exclude event) (:> イベント終点がタイムラインの始点以下（除外イベント）
                    params.width = 0
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
//console.log( 'x:', params.x, 'w:', params.width, 'x-end:', Math.abs( params.x ) + params.width, 'fw:', _props.fullwidth )
            if ( params.width < 1 ) {
                return null
            }
            _evt_elem.css( 'left', `${params.x}px` ).css( 'width', `${params.width}px` )
            
            _evt_elem.attr( 'data-uid', params.uid )
            
            if ( ! is_empty( params.image ) ) {
//console.log( '!_createEventNode:', params )
                let _imgSize = params.height - ( params.margin * 2 )
                _evt_elem.prepend( `<img src="${params.image}" class="jqtl-event-thumbnail" width="${_imgSize}" height="${_imgSize}" />` )
            }
            
            if ( _opts.type.toLowerCase() === 'bar' && _opts.showEventMeta ) {
                params.extend.meta = params.rangeMeta
            }
            
            if ( ! is_empty( params.extend ) ) {
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
            
            if ( ! is_empty( params.callback ) ) {
                _evt_elem.attr( 'data-callback', params.callback )
            }
            
            /*
            $(document).on( 'mouseenter', `#evt-${params.eventId}`, (e) => {
                $(e.target).css( 'background-color', hexToRgbA( params.bgColor, 0.65 ) )
            }).on( 'mouseleave', `#evt-${params.eventId}`, (e) => {
                $(e.target).css( 'background-color', hexToRgbA( params.bgColor, 1 ) )
            })
            */
            
            return _evt_elem
        }
        /*
         * @private: Echo the log of plugin for debugging
         */
        _debug( message, throwType = 'Notice' ) {
            message = supplement( null, message )
            if ( message ) {
                let _msg = typeof $(this._element).data( DATA_KEY )[message] !== 'undefined' ? `Called method "${message}".` : message,
                    _sty = /^Called method \"/.test(_msg) ? 'font-weight:600;color:blue;' : '',
                    _rst = ''
                
                if ( this._config.debug && window.console && window.console.log ) {
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
        initialized( callback ) {
            let _message = this._isInitialized ? 'Skipped because method "initialized" already has been called once' : 'initialized'
            this._debug( _message )
            
            let _elem = this._element,
                _opts = this._config
            
//console.log( _elem, this._isInitialized )
            if ( typeof callback === 'function' && ! this._isInitialized ) {
                if ( _opts.debug ) {
                    this._debug( 'Fired the "initialized" method after initializing this plugin.' )
                }
                callback( _elem, _opts )
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
        }
        
        /*
         * @public: Show hidden timeline
         */
        show() {
            this._debug( 'show' )
            
            let _elem = this.element
            
            if ( ! this._isShown ) {
                $(_elem).removeClass( 'jqtl-hide' )
                
                this._isShown = true
            }
        }
        
        /*
         * @public: Hide shown timeline
         */
        hide() {
            this._debug( 'hide' )
            
            let _elem = this.element
            
            if ( this._isShown ) {
                $(_elem).addClass( 'jqtl-hide' )
                
                this._isShown = false
            }
        }
        
        /*
         * @public: 
         */
        dateback() {
            
        }
        
        /*
         * @public: 
         */
        dateforth() {
            
        }
        
        /*
         * @public: 
         */
        alignment() {
            
        }
        
        /*
         * @public: This method has been deprecated since version 2.0.0
         */
        getOptions() {
            
        }
        
        /*
         * @public: 
         */
        addEvent() {
            
        }
        
        /*
         * @public: 
         */
        removeEvent() {
            
        }
        
        /*
         * @public: 
         */
        updateEvent() {
            
        }
        
        /*
         * @public: 
         */
        openEvent() {
            
        }
        
        // Static
        
        static _jQueryInterface( config, relatedTarget ) {
            // relatedTarget = undefined why?
            return this.each(function () {
                let data = $(this).data( DATA_KEY )
                const _config = {
                    ...Default,
                    ...$(this).data(),
                    ...typeof config === 'object' && config ? config : {}
                }
                
//console.log( '_jQueryInterface', data, config )
                if ( ! data ) {
                    // Apply the plugin and store the instance in data (:> プラグインを適用する
                    data = new Timeline( this, _config )
                    $(this).data( DATA_KEY, data )
                }
                
//if ( typeof config === 'string' ) console.log( config, config.charAt(0) != '_' )
                if ( typeof config === 'string' && config.charAt(0) != '_' ) {
                    if ( typeof data[config] === 'undefined' ) {
                        // Call no method
                        throw new TypeError( `No method named "${config}"` )
                    }
                    // Call public method (:> （インスタンスがpublicメソッドを持っている場合）メソッドを呼び出す
                    data[config]( relatedTarget )
                } else {
                    if ( ! data._isInitialized ) {
                        data._init( relatedTarget )
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
        return Timelin._jQueryInterface
    }
    
    //export default Timeline
    
    
    /* ------------------------------------------------------------------------ ------------------------------------------------------------------------
     * Utility Functions
     * ------------------------------------------------------------------------ ------------------------------------------------------------------------
     */
    /*
     * Determine empty that like PHP (:> PHPライクな空判定メソッド
     *
     * @param mixed value (required)
     *
     * @return bool
     */
    function is_empty( value ) {
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
                        return is_empty( value.valueOf() )
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
     * Supplemental method for validating arguments in local scope (:> ローカルスコープ内で引数を検証するための補助メソッド
     *
     * @param mixed default_value (required)
     * @param mixed opt_arg (optional)
     * @param mixed opt_callback (optional; function or string of function to call)
     *
     * @return mixed
     */
    function supplement( default_value, opt_arg, opt_callback ) {
        'use strict'
        if ( opt_arg === undefined ) {
            return default_value
        }
        if ( opt_callback === undefined ) {
            return opt_arg
        }
        return opt_callback( default_value, opt_arg )
    }
    
    /*
     * Determine whether variable is an array (:> 変数が配列かどうかを調べる
     *
     * @param mixed val (required)
     *
     * @return bool
     */
    function is_array( val ) {
        'use strict'
        return Object.prototype.toString.call( val ) === '[object Array]'
    }
    
    /*
     * Await until next process at specific millisec (:> 指定ミリ秒でスリープ
     *
     * @param int msec (optional; defaults to 1)
     *
     * @return void
     */
    function sleep( msec = 1 ) {
        return new Promise( ( resolve, reject ) => {
            setTimeout( resolve, msec )
        })
    }
    
    /*
     * Generate the pluggable unique id (:> プラガブルな一意のIDを生成する
     *
     * @param int digit (optional)
     *
     * @return string
     */
    function generateUniqueID( digit = 1000 ) {
        // 'use strict'
        // digit = supplement( 1000, digit )
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
    function numRound( number, digit, round_type = 'round' ) {
        digit  = supplement( 0, digit, validateNumeric )
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
    function hexToRgbA( hex, alpha = 1 ) {
        let _c
        
        if ( /^#([A-Fa-f0-9]{3}){1,2}$/.test( hex ) ) {
            _c = hex.substring(1).split('')
            if ( _c.length == 3 ) {
                _c= [ _c[0], _c[0], _c[1], _c[1], _c[2], _c[2] ]
            }
            _c = '0x' + _c.join('')
            return 'rgba(' + [ (_c >> 16) & 255, (_c >> 8) & 255, _c & 255 ].join(',') + ',' + alpha + ')'
        }
        // throw new Error( 'Bad Hex' )
        return hex
    }
    
    /*
     * Method to get week number as extension of Date object (:> Dateオブジェクトで週番号を取得する拡張メソッド
     *
     * @return int
     */
    Date.prototype.getWeek = function() {
        'use strict'
        let _onejan = new Date( this.getFullYear(), 0, 1 ),
            _millisecInDay = 24 * 60 * 60 * 1000
        
        return Math.ceil( ( ( ( this - _onejan ) / _millisecInDay ) + _onejan.getDay() + 1 ) / 7 )
    }
    
    /*
     * Get the correct datetime with remapping to that if the year is 0 - 99 (:> 年が0～99の場合に再マッピングして正確な日時を取得する
     *
     * @param string datetime_str (required)
     *
     * @return Date Object, or null if failed
     */
    function getCorrectDatetime( datetime_str ) {
        let normalizeDate = ( dateString ) => {
                // For Safari, IE
                return dateString.replace(/-/g, '/')
            }
        
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
     * Verify the allowed scale, then retrieve that scale's millisecond if allowed (:> 許容スケールかを確認し、許可時はそのスケールのミリ秒を取得する
     *
     * @param string scale (required)
     *
     * @return mixed result (integer of millisec if allowed, false if disallowed scale)
     */
    function verifyScale( scale ) {
        'use strict'
        let result = false,
            _ms = -1
        
        if ( typeof scale === 'undefined' || typeof scale !== 'string' ) {
            return result
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
                // Month (:> 月（ヶ月）
                // 365 / 12 = 30.4167, 366 / 12 = 30.5, ((365 * 3) + 366) / (12 * 4) = 30.4375
                //_ms = 30.4375 * 24 * 60 * 60 * 1000
                _ms = 31 * 24 * 60 * 60 * 1000
                break
            case /^years?$/i.test( scale ):
                // Year (:> 年
                _ms = 365.25 * 24 * 60 * 60 * 1000
                break
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
        result = _ms > 0 ? _ms : false
        return result
    }
    
    /*
     * Retrieve one higher scale (:> 一つ上のスケールを取得する
     *
     * @param string scale (required)
     *
     * @return string higher_scale
     */
    function getHigherScale( scale ) {
        'use strict'
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
                // higher_scale = 'week'
                // break
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
     * @param string locales (required)
     * @param object options (required)
     *
     * @return string locale_string
     */
    function getLocaleString( date_seed, scale, locales, options ) {
        'use strict'
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
            getOrdinal = n => {
                let s = [ 'th', 'st', 'nd', 'rd' ], v = n % 100
                return n + ( s[(v - 20)%10] || s[v] || s[0] )
            },
            getZerofill = ( num, digit = 4 ) => {
                let strDuplicate = ( n, str ) => {
                        return Array( n + 1 ).join( str )
                    },
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
                        locale_string = getCorrectDatetime( date_seed ).toLocaleString( locales, _options )
                    } else
                    if ( 'zerofill' === options[scale] ) {
                        locale_string = getZerofill( date_seed )
                    }
                }
                locale_string = is_empty( locale_string ) ? getCorrectDatetime( date_seed ).getFullYear() : locale_string
                break
            case /^months?$/i.test( scale ):
                if ( is_toLocalString && options.hasOwnProperty( scale ) ) {
                    if ( [ 'numeric', '2-digit', 'narrow', 'short', 'long' ].includes( options[scale] ) ) {
                        _options.month = options[scale]
                        locale_string = new Date( date_seed ).toLocaleString( locales, _options )
                        //locale_string = getCorrectDatetime( date_seed ).toLocaleString( locales, _options )
                    }
                }
                //locale_string = new Date( date_seed ).getMonth() + 1
                locale_string = is_empty( locale_string ) ? new Date( date_seed ).getMonth() + 1 : locale_string
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
                    //locale_string = getCorrectDatetime( _temp[0] ).toLocaleString( locales, _options )
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
                    //locale_string = getCorrectDatetime( date_seed ).toLocaleString( locales, _options )
                } else {
                    locale_string = new Date( date_seed ).getDate()
                    //locale_string = getCorrectDatetime( date_seed ).getDate()
                }
                break
            case /^hours?$/i.test( scale ):
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
                    //locale_string = getCorrectDatetime( date_seed ).toLocaleString( locales, _options )
                } else {
                    locale_string = new Date( date_seed ).getHours()
                    //locale_string = getCorrectDatetime( date_seed ).getHours()
                }
                break
            case /^minutes?$/i.test( scale ):
                if ( is_toLocalString ) {
                    _options.minute = options.hasOwnProperty('minute') ? options.minute : 'numeric'
                    if ( options.hasOwnProperty('hour') ) {
                        _options.hour   = options.hasOwnProperty('hour') ? options.hour : 'numeric'
                    }
                    locale_string = new Date( date_seed ).toLocaleString( locales, _options )
                    //locale_string = getCorrectDatetime( date_seed ).toLocaleString( locales, _options )
                } else {
                    locale_string = new Date( date_seed ).getMinutes()
                    //locale_string = getCorrectDatetime( date_seed ).getMinutes()
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
                    //locale_string = getCorrectDatetime( date_seed ).toLocaleString( locales, _options )
                } else {
                    locale_string = new Date( date_seed ).getSeconds()
                    //locale_string = getCorrectDatetime( date_seed ).getSeconds()
                }
                break
            case /^millisec(|ond)s?$/i.test( scale ):
            default:
                locale_string = new Date( date_seed )
                //locale_string = getCorrectDatetime( date_seed )
                break
        }
        return locale_string
    }
    
    /*
     * Get the rendering width of the given string (:> 指定された文字列のレンダリング幅を取得する
     */
    function strWidth( str ) {
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
     * Validators
     */
    function validateString( def, val ) {
        'use strict'
        return typeof val === 'string' && val !== '' ? val : def
    }
    function validateNumeric( def, val ) {
        'use strict'
        return typeof val === 'number' ? Number( val ) : def
    }
    function validateBoolean( def, val ) {
        'use strict'
        return typeof val === 'boolean' || ( typeof val === 'object' && val !== null && typeof val.valueOf() === 'boolean' ) ? val : def
    }
    function validateObject( def, val ) {
        'use strict'
        return typeof val === 'object' ? val : def
    }
    
    
})
);