/*!
 * Typedef for jQuery Timeline's ESDoc
 * @version: 2.1.1
 */

/** @type {string} [NAME="Timeline"] */
/** @type {string} VERSION */
/** @type {string} DATA_KEY */
/** @type {string} EVENT_KEY */
/** @type {string} PREFIX */
/** @type {number} MIN_POINTER_SIZE */
/** @type {Object} JQUERY_NO_CONFLICT */

/**
 * In principle, this option conforms to the specification of options in "Date.prototype.toLocaleString()".
 * However, there includes some extensions of this plugin original.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
 * 
 * @typedef {Object} LocaleOptions
 * @property {boolean} [hour12=false] - Whether to use 12-hour time (as opposed to 24-hour time). Possible values are true and false.
 * @property {string} [localeMatcher] - 
 * @property {string} [timeZone] - 
 * @property {string} [hourCycle] - 
 * @property {string} [formatMatcher] - 
 * @property {string} [weekday] - The representation of the weekday. Possible values are "narrow", "short", "long".
 * @property {string} [era] - The representation of the era. Possible values are "narrow", "short", "long".
 * @property {string} [year] - The representation of the year. Possible values are "numeric", "2-digit". Then an extended value by this plugin is "zerofill".
 * @property {string} [month] - The representation of the month. Possible values are "numeric", "2-digit", "narrow", "short", "long".
 * @property {string} [day] - The representation of the day. Possible values are "numeric", "2-digit". Then an extended value by this plugin is "ordinal".
 * @property {string} [hour] - The representation of the hour. Possible values are "numeric", "2-digit". Then an extended value by this plugin is "fulltime".
 * @property {string} [minute] - The representation of the minute. Possible values are "numeric", "2-digit". Then an extended value by this plugin is "fulltime".
 * @property {string} [second] - The representation of the second. Possible values are "numeric", "2-digit". Then an extended value by this plugin is "fulltime".
 * @property {string} [timeZoneName] - The representation of the time zone name. Possible values are "short", "long".
 */

/**
 * 
 * @typedef {Object} Headline
 * @property {boolean} [display=true] - Whether to display headline
 * @property {string} [title] - 
 * @property {boolean} [range=true] - Hide if false
 * @property {string} [locale="en-US"] - This value is an argument "locales" of `dateObj.toLocaleString([locales[, options]])`
 * @property {LocaleOptions} [format] - This value is an argument "options" of `dateObj.toLocaleString([locales[, options]])`
 * @since 2.0.0
 */

/**
 * 
 * @typedef {Object} Footer
 * @property {boolean} [display=true] - Whether to display headline
 * @property {string} [content] - 
 * @property {boolean} [range=false] - Visible if true
 * @property {string} [locale="en-US"] - This value is an argument "locales" of `dateObj.toLocaleString([locales[, options]])`
 * @property {LocaleOptions} [format] - This value is an argument "options" of `dateObj.toLocaleString([locales[, options]])`
 * @since 2.0.0
 */

/**
 * 
 * @typedef {Object} Sidebar
 * @property {boolean} [sticky=false] - Whether does sticky the sidebar by using "display: sticky" of CSS.
 * @property {boolean} [overlay=false] - 
 * @property {array.<String>} [list] - Define the contents of the row of the sidebar. Appropriate escaping is necessary when using HTML.
 * @since 2.0.0
 */

/**
 * Can define the ruler position to top or bottom and both
 * 
 * @typedef {Object} RulerOptions
 * @property {array.<String>} [lines] - Multiple tick marks can be set, and array elements are set in order from the top. Set same scale of Default.scale if omitted this. c.g. [ 'year', 'month', 'day', 'weekday' ]
 * @property {number} [height=30] - The height of a row of rulers
 * @property {number} [fontSize=14] - 
 * @property {string} [color="#777777"] - 
 * @property {string} [background="#FFFFFF"] - 
 * @property {string} [locale="en-US"] - This value is an argument "locales" of `dateObj.toLocaleString([locales[, options]])`
 * @property {LocaleOptions} [format] - This value is an argument "options" of `dateObj.toLocaleString([locales[, options]])`
 * @since 2.0.0
 */

/**
 * You can set the upper and lower ruler individually
 *
 * @typedef {Object} Ruler
 * @property {RulerOptions} [top] - The upper ruler configuration. The upper ruler is hidden if omitted.
 * @property {RulerOptions} [bottom] - The lower ruler configuration. The lower ruler is hidden if omitted.
 * @since 2.0.0
 */

/**
 *
 *
 * @typedef {Object} EventMeta
 * @property {boolean} [display=false] - 
 * @property {string} [scale="day"] - 
 * @property {string} [locale="en-US"] - This value is an argument "locales" of `dateObj.toLocaleString([locales[, options]])`
 * @property {LocaleOptions} [format] - This value is an argument "options" of `dateObj.toLocaleString([locales[, options]])`
 * @property {string} [content] - This is value for if you want to show custom content on the meta
 * @since 2.0.0
 */

/**
 * Various effect settings to the timeline object displayed in the DOM
 *
 * @typedef {Object} Effects
 * @property {boolean} [presentTime=false] - Whether to show marking a present time on the timeline container.
 * @property {boolean} [hoverEvent=true] - Whether to show the effect when individual events on the timeline container are mouse over.
 * @property {boolean} [stripedGridRow=true] - 
 * @property {string} [horizontalGridStyle="solid"] - The style of horizontal grid line on the Timeline container. possible values are "solid", "dotted", "none".
 * @property {string} [verticalGridStyle="solid"] - The style of vertical grid line on the Timeline container. possible values are "solid", "dotted", "none".
 * @since 2.0.0
 */

/**
 * Color scheme to overwrite defaults UI color of the event node
 *
 * @typedef {Object} EventColors
 * @property {string} [text="#343A40"] - Defaults to text color of the event node
 * @property {string} [border="#6C757D"] - Defaults to border color of the event node
 * @property {string} [background="#E7E7E7"] - Defaults to background color of the event node
 * @since 2.0.0
 */

/**
 * Color scheme to overwrite defaults UI color of the timeline instance
 *
 * @typedef {Object} ThemeColors
 * @property {string} [name="default"] - 
 * @property {string} [text="#343A40"] - Defaults to basic text color
 * @property {string} [subtext="#707070"] - 
 * @property {string} [offtext="#BBBBBB"] - 
 * @property {string} [modesttext="#969696"] - 
 * @property {string} [line="#6C757D"] - Defaults to basic border color
 * @property {string} [offline="#DDDDDD"] - 
 * @property {string} [activeline="#DC3545"] - 
 * @property {string} [background="#FFFFFF"] - Defaults to background color
 * @property {string} [invertbg="#121212"] - 
 * @property {string} [striped1="#F7F7F7"] - 
 * @property {string} [striped2="#F0F0F0"] - 
 * @property {string} [active="#F73333"] - 
 * @property {string} [marker="#2C7CFF"] - 
 * @property {string} [gridbase="#333333"] - 
 * @since 2.1.0
 */

/**
 * An option to overwrite defaults UI color of all event nodes
 *
 * @typedef {Object} ColorScheme
 * @property {ThemeColors} [theme] - Color scheme to overwrite defaults UI color of the timeline instance
 * @property {EventColors} [event] - Color scheme to overwrite defaults UI color of the event node
 * @property {function} [hookEventColors] - You can declare a function to set colors with referring the data each event node
 * @since 2.0.0
 */

/**
 * Default options for generating the timeline by the jQuery.Timeline plugin.
 * Those defaults are overridden to undefined settings of the timeline configuration.
 *
 * @typedef {Object} Default
 * @property {string} [type="bar"] - View type of timeline event is either "bar" or "point" or "mixed"
 * @property {string} [scale="day"] - Timetable's minimum level scale is either "year", "month", "week", "day", "hour", "minute"
 * @property {string} [startDatetime="currently"] - Beginning date time of timetable on the timeline. format is ( "^d{4}(/|-)d{2}(/|-)d{2}\sd{2}:d{2}:d{2}$" ) or "currently"
 * @property {string} [endDatetime="auto"] - Ending date time of timetable on the timeline. format is ( "^d{4}(/|-)d{2}(/|-)d{2}\sd{2}:d{2}:d{2}$" ) or "auto"
 * @property {Headline} [headline] - Settings for the content customize in the headline
 * @property {Footer} [footer] - Settings for the content customize in the footer
 * @property {number|string} [range=3] - Override the scale range of the timeline to be rendered when endDatetime is undefined or "auto"
 * @property {Sidebar} [sidebar] - Settings for the content of the sidebar
 * @property {number|string} [rows="auto"] - Rows of timeline event area
 * @property {number} [rowHeight=48] - Height of one row
 * @property {number|string} [width="auto"] - Fixed width (pixel) of timeline view
 * @property {number|string} [height="auto"] - Fixed height (pixel) of timeline view; Defaults to ( rows * rowHeight )
 * @property {number} [minGridSize=30] - Override value of minimum size (pixel) of timeline grid
 * @property {number} [marginHeight=2] - Margin (pixel) top and bottom of events on the timeline
 * @property {Ruler} [ruler] - Settings of the ruler
 * @property {number|string} [rangeAlign="latest"] - Possible values are "left", "center", "right", "current", "latest" and specific event id
 * @property {string} [loader="default"] - Custom loader definition, possible values are "default", false and selector of loader element
 * @property {boolean} [hideScrollbar=false] - Whether or not to display the scroll bar displayed when the width of the timeline overflows (even if it is set to non-display, it will not function depending on the browser)
 * @property {EventMeta} [eventMeta] - Display meta of range on event node when the timeline type is "bar"
 * @property {array.<Object>} [eventData] - You can declare the events with object format as default events you want to place
 * @property {Effects} [effects] - You can declare effective styles as view of the timeline object
 * @property {ColorScheme} [colorScheme] - Can overwrite defaults UI color of the event nodes
 * @property {string} [storage="session"] - Specification of Web storage to cache event data, defaults to sessionStorage
 * @property {boolean} [reloadCacheKeep=true] - Whether to load cached events during reloading, the cache is discarded if false
 * @property {boolean} [zoom=false] - Whether to use the ability to zoom the scale of the timeline by double clicking on any scale on the ruler
 * @property {boolean} [wrapScale=true] - Whether wrapping new scale in the timeline container when zoom
 * @property {string} [engine="canvas"] - Choose dependent module to core as rendering engine. It'll be "canvas" or "d3.js"; Maybe add in future version
 * @property {boolean} [debug=false] - Enable to debug mode if true then output logs for debugging to console; defaults to false
 * @since 2.0.0
 */

/**
 * The limited grid number per scale of timeline
 *
 * @typedef {Object} LimitScaleGrids
 * @property {number} [millennium=100] - In other words it's 100000 years
 * @property {number} [century=500] - In other words it's 50000 years
 * @property {number} [decade=500] - In other words it's 5000 years
 * @property {number} [lustrum=500] - In other words it's 2500 years
 * @property {number} [year=500] - In other words it's 500 years
 * @property {number} [month=540] - In other words it's 45 years
 * @property {number} [week=530] - In other words it's 10 years
 * @property {number} [day=366] - In other words it's about 1 years
 * @property {number} [hour=720] - In other words it's 30 days
 * @property {number} [quarterHour=720] - In other words it's 7.5 days
 * @property {number} [halfHour=720] - In other words it's 15 days
 * @property {number} [minute=720] - In other words it's 12 hours
 * @property {number} [second=900] - In other words it's 15 minutes
 * @since 2.0.0
 */

/**
 * 
 *
 * @typedef {Object} RelationOption
 * @property {number} [before] - Set target eventID to connect the relation line to the event (leftward on the timeline) in chronological before from oneself event.
 * @property {number} [after] - Set target eventID to connect the relation line to the event (rightward on the timeline) in chronological after from oneself event.
 * @property {number} [linesize] - 
 * @property {string} [linecolor] - 
 * @property {number|string|boolean} [curve] - Whether the connection line is curved if the connection events are not on the same horizontal. If you specify a boolean value or a shorthand (0 or 1 only), it will be automatically curved. As with the previous version, it is also possible to specify the type of curve using defined preset values.
 */

/**
 * The preset as default of event parameters on the timeline
 *
 * @typedef {Object} EventParams
 * @property {string} uid - An unique id of event data, this can not define because this value is automatically generate as data for cache only
 * @property {?number} [eventId] - It is an ID that identifies an event for you to manipulate event data via each method. If omitted, consecutive numbers are automatically assigned.
 * @property {number} x - Can not define because this value is automatically generate as data for cache only
 * @property {number} y - Can not define because this value is automatically generate as data for cache only
 * @property {number} width - Can not define because this value is automatically generate as data for cache only
 * @property {number} height - Can not define because this value is automatically generate as data for cache only
 * @property {string} start - Can not define because this value is automatically generate as data for cache only
 * @property {string} end - Can not define because this value is automatically generate as data for cache only
 * @property {number} row - Can not define because this value is automatically generate as data for cache only
 * @property {string} [bgColor="#E7E7E7"] - 
 * @property {string} [color="#343A40"] - 
 * @property {string} [bdColor="#6C757D"] - 
 * @property {string} [label] - 
 * @property {string} [content] - 
 * @property {string} [category] - 
 * @property {string} [image] - 
 * @property {number} [margin] - 
 * @property {string} [rangeMeta] - 
 * @property {number|string} [size="normal"] - Define the diameter size of pointer when type of the timeline is "point". Possible values are "large", "normal", "small" and value of pixel.
 * @property {Object} [extend] - The specified key/value pair is replaced with the data attribute of the event element.
 * @property {boolean} [remote=false] - 
 * @property {RelationOption} [relation] - Setting for connecting events by relation lines when the timeline type is "point".
 * @property {function} [callback] - Callback processing that binds to openEvent method when this event is clicked.
 * @since 2.0.0
 */

/*
 * Binding Custom Events
 *
 * @typedef {Object} Event
 * @property {string} INITIALIZED
 * @property {string} HIDE
 * @property {string} SHOW
 * @property {string} CLICK_EVENT
 * @property {string} FOCUSIN_EVENT
 * @property {string} FOCUSOUT_EVENT
 * @property {string} TOUCHSTART_TIMELINE
 * @property {string} TOUCHMOVE_TIMELINE
 * @property {string} TOUCHEND_TIMELINE
 * @property {string} MOUSEENTER_POINTER
 * @property {string} MOUSELEAVE_POINTER
 * @property {string} ZOOMIN_SCALE
 * @since 2.0.0
 */

/*
 * Class name of the timeline elements created by the plugin
 *
 * @typedef {Object} ClassName
 * @property {string} TIMELINE_CONTAINER
 * @property {string} TIMELINE_MAIN
 * @property {string} TIMELINE_HEADLINE
 * @property {string} TIMELINE_HEADLINE_WRAPPER
 * @property {string} HEADLINE_TITLE
 * @property {string} RANGE_META
 * @property {string} RANGE_SPAN
 * @property {string} TIMELINE_EVENT_CONTAINER
 * @property {string} TIMELINE_BACKGROUND_GRID
 * @property {string} TIMELINE_RELATION_LINES
 * @property {string} TIMELINE_EVENTS
 * @property {string} TIMELINE_EVENT_NODE
 * @property {string} TIMELINE_EVENT_LABEL
 * @property {string} TIMELINE_EVENT_THUMBNAIL
 * @property {string} TIMELINE_RULER_LINES
 * @property {string} TIMELINE_RULER_ITEM
 * @property {string} TIMELINE_SIDEBAR
 * @property {string} TIMELINE_SIDEBAR_MARGIN
 * @property {string} TIMELINE_SIDEBAR_ITEM
 * @property {string} TIMELINE_FOOTER
 * @property {string} TIMELINE_FOOTER_CONTENT
 * @property {string} VIEWER_EVENT_TITLE
 * @property {string} VIEWER_EVENT_CONTENT
 * @property {string} VIEWER_EVENT_META
 * @property {string} VIEWER_EVENT_IMAGE_WRAPPER
 * @property {string} VIEWER_EVENT_IMAGE
 * @property {string} VIEWER_EVENT_TYPE_POINTER
 * @property {string} HIDE_SCROLLBAR
 * @property {string} HIDE
 * @property {string} RULER_ITEM_ALIGN_LEFT
 * @property {string} STICKY_LEFT
 * @property {string} OVERLAY
 * @property {string} ALIGN_SELF_RIGHT
 * @property {string} PRESENT_TIME_MARKER
 * @property {string} LOADER_CONTAINER
 * @property {string} LOADER_ITEM
 * @since 2.0.0
 */

/*
 * Selectors assigned on the timeline element
 *
 * @typedef {Object} Selector
 * @property {string} EVENT_NODE
 * @property {string} EVENT_VIEW
 * @property {string} RULER_TOP
 * @property {string} RULER_BOTTOM
 * @property {string} TIMELINE_CONTAINER
 * @property {string} TIMELINE_MAIN
 * @property {string} TIMELINE_RULER_TOP
 * @property {string} TIMELINE_EVENT_CONTAINER
 * @property {string} TIMELINE_RULER_BOTTOM
 * @property {string} TIMELINE_RULER_ITEM
 * @property {string} TIMELINE_RELATION_LINES
 * @property {string} TIMELINE_EVENTS
 * @property {string} TIMELINE_SIDEBAR
 * @property {string} TIMELINE_SIDEBAR_ITEM
 * @property {string} TIMELINE_EVENT_NODE
 * @property {string} VIEWER_EVENT_TYPE_POINTER
 * @property {string} LOADER
 * @property {string} DEFAULT_EVENTS
 * @since 2.0.0
 */

/**
 * Pluin Core Class
 * @access public
 * @since 2.0.0
 */
class Timeline {
    constructor( element, config ) {
        /** @type {Object} */
        this._config        = this._getConfig( config )
        /** @type {Object} */
        this._element       = element
        /** @type {?string} */
        this._selector      = null
        /** @type {boolean} */
        this._isInitialized = false
        /** @type {boolean} */
        this._isCached      = false
        /** @type {boolean} */
        this._isCompleted   = false
        /** @type {boolean} */
        this._isShown       = false
        /** @type {Object} */
        this._instanceProps = {}
        /** @type {?Object} */
        this._observer      = null
    }
    
    // Getters
    
    /** @type {string} */
    static get VERSION() {
        return VERSION
    }
    
    /** @type {Default} */
    static get Default() {
        return Default
    }
    
    // Private
    
    /**
     * Define the default options of this plugin
     * @private
     * @param {Object} config - Initial options
     * @return {Object} Config overrided initial options to default config
     */
    _getConfig( config ) {
        config = {
            ...Default,
            ...config
        }
        return config
    }
    
    /**
     * Filter the scale key name for LimitScaleGrids
     * @private
     * @param {string} key
     * @return {string} Filtered scale key name
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
    
    /**
     * Initialize the plugin
     * @private
     */
    _init() {
        this._debug( '_init' )
        
        let _elem       = this._element,
            _selector   = `${_elem.tagName}${( _elem.id ? `#${_elem.id}` : '' )}${( _elem.className ? `.${_elem.className.replace(/\s/g, '.')}` : '' )}`
        
        this._selector = _selector.toLowerCase()
        
        if ( this._isInitialized || this._isCompleted ) {
            return
        }
        
        this.showLoader()
        
        this._calcVars()
        
        if ( ! this._verifyMaxRenderableRange() ) {
            throw new RangeError( `Timeline display period exceeds maximum renderable range.` )
        }
        
        this.sleep( _sleep ).then(() => {
            
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
            
            this._isCompleted = true
            
            this.alignment()
            
        })
    }
    
    /**
     * Calculate each properties of the timeline instance
     * @private
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
    
    /**
     * Retrieve the pluggable datetime as milliseconds from specified keyword
     * @private
     * @param {string} key - Any one of "current", "auto", or datetime string
     * @param {string} [round_type] - 
     * @return {number} This value unit is milliseconds
     */
    _getPluggableDatetime( key, round_type = '' ) {
        let _opts        = this._config,
            _date        = null,
            getFirstDate = ( dateObj, scale ) => {
                let _tmpDate
                
                switch ( true ) {
                    case /^millenniums?|millennia$/i.test( scale ):
                    case /^century$/i.test( scale ):
                    case /^dec(ade|ennium)$/i.test( scale ):
                    case /^lustrum$/i.test( scale ):
                    case /^years?$/i.test( scale ):
                        _tmpDate = new Date( dateObj.getFullYear(), 0, 1 )
                        break
                    case /^months?$/i.test( scale ):
                        _tmpDate = new Date( dateObj.getFullYear(), dateObj.getMonth(), 1 )
                        break
                    case /^(week|day)s?$/i.test( scale ):
                        _tmpDate = new Date( dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate() )
                        break
                    case /^(|half|quarter)-?hours?$/i.test( scale ):
                        _tmpDate = new Date( dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(), dateObj.getHours() )
                        break
                    case /^minutes?$/i.test( scale ):
                        _tmpDate = new Date( dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(), dateObj.getHours(), dateObj.getMinutes() )
                        break
                    case /^seconds?$/i.test( scale ):
                        _tmpDate = new Date( dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(), dateObj.getHours(), dateObj.getMinutes(), dateObj.getSeconds() )
                        break
                }
                return _tmpDate
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
            },
            is_remapping = /^\d{1,2}(|(-|\/).+)$/.test( key.toString() )
//console.log( '!_getPluggableDatetime:', key, round_type, is_remapping )
        
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
        
        if ( ! is_remapping ) {
            is_remapping = _date.getFullYear() < 100
        }
        
        if ( ! this.is_empty( round_type ) ) {
            if ( 'first' === round_type ) {
//console.log( '!_getPluggableDatetime::first:before:', key, _date, is_remapping )
                _date = getFirstDate( _date, _opts.scale )
//console.log( '!_getPluggableDatetime::first:after:', key, _date, is_remapping )
            } else
            if ( 'last' === round_type ) {
//console.log( '!_getPluggableDatetime::last:before:', key, _date, is_remapping )
                _date = getLastDate( _date, _opts.scale )
//console.log( '!_getPluggableDatetime::last:after:', key, _date, is_remapping )
            }
        }
        
        if ( is_remapping ) {
            _date.setFullYear( String( _date.getFullYear() ).substr(-2) )
        }
        
//console.log( '!_getPluggableDatetime::return:', _date )
        return _date.getTime()
    }
    
    /**
     * Retrieve the pluggable parameter as an object
     * @private
     * @param {string} str_like_params - Strings that can be parsed as javascript objects
     * @return {Object}
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
    
    /**
     * Retrieve the pluggable rows of the timeline
     * @private
     * @return {number}
     */
    _getPluggableRows() {
        let _opts      = this._config,
            fixed_rows = this.supplement( 'auto', _opts.rows, this.validateNumeric )
        
        if ( fixed_rows === 'auto' ) {
            fixed_rows = _opts.sidebar.list.length
        }
        return fixed_rows > 0 ? fixed_rows : 1
    }
    
    /**
     * Verify the allowed scale, then retrieve that scale's millisecond if allowed
     * @private
     * @param {string} scale - 
     * @return {number|boolean} Return false if specified an invalid scale
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
                console.warn( 'Specified an invalid scale.' )
                _ms = -1
        }
        return _ms > 0 ? _ms : false
    }
    
    /**
     * Verify the display period of the timeline does not exceed the maximum renderable range
     * @private
     * @return {boolean}
     */
    _verifyMaxRenderableRange() {
// console.log( this._instanceProps.grids, '/', LimitScaleGrids[this._filterScaleKeyName( this._config.scale )] )
        return this._instanceProps.grids <= LimitScaleGrids[this._filterScaleKeyName( this._config.scale )]
    }
    
    /**
     * Render the view of timeline container
     * @private
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
            console.info( `Timeline:{ fullWidth: ${_props.fullwidth}px,`, `fullHeight: ${_props.fullheight}px,`, `viewWidth: ${_props.visibleWidth}`, `viewHeight: ${_props.visibleHeight} }` )
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
    
    /**
     * Create the headline of the timeline
     * @private
     * @return {Object} Generated DOM element
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
    
    /**
     * Create the event container of the timeline
     * @private
     * @return {Object} Generated DOM element
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
            
            for ( let _key of Object.keys( _props.variableScale ) ) {
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
    
    /**
     * Create the ruler of the timeline
     * @private
     * @param {string} position - Either "top" or "bottom" as the position of the ruler
     * @return {Object} Generated DOM element
     */
    _createRuler( position ) {
        let _opts       = this._config,
            _props      = this._instanceProps,
            ruler_line  = this.supplement( [ _opts.scale ], _opts.ruler[position].lines, ( def, val ) => Array.isArray( val ) && val.length > 0 ? val : def ),
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
//console.log( '!_createRuler:', line_scale, _line_grids )
                
                for ( let _key of Object.keys( _line_grids ) ) {
                    _grid_x += this.numRound( _line_grids[_key], 2 )
                    
                    ctx_ruler.moveTo( _grid_x + _correction, position === 'top' ? _line_y - line_height : _line_y )
                    ctx_ruler.lineTo( _grid_x + _correction, position === 'top' ? _line_y : _line_y + line_height )
                }
            } else {
                // In case of fixed length scale (:> 固定長スケールの場合
                _line_grids = this._getGridsPerScale( line_scale )
                
                for ( let _val of _line_grids ) {
                    if ( this.is_empty( _val ) || _val >= _props.grids ) {
                        break
                    }
                    let _grid_width = _val * _props.scaleSize
                    
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
    
    /**
     * Filter to aggregate the grid width of the variable length scale
     * @private
     * @param {string} target_scale - 
     * @return {Object} 
     */
    _filterVariableScale( target_scale ) {
        let _opts  = this._config,
            _props = this._instanceProps,
            _bc    = /^years?$/i.test( _opts.scale ) ? 365 : 30,
            scales = _props.variableScale,
            retObj = {}
        
        for ( let _dt of Object.keys( scales ) ) {
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
//console.log( '!_filterVariableScale::week:', _dt, _arr[0], _temp )
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
    
    /**
     * Get the grid number per scale (for fixed length scale)
     * @private
     * @param {string} target_scale - 
     * @return {Object} 
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
// console.log( '!!:', _tmp, `y: ${_y}`, `w: ${_w}`, /* `mil: ${_mil}`, `cen: ${_cen}`, `dec: ${_dec}`, `lus: ${_lus}` */ )
            
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
        
        return this.toIterableObject( _scale_grids )
    }
    
    /**
     * Create the content of ruler of the timeline
     * @private
     * @param {Object} _line_grids - 
     * @param {string} line_scale - 
     * @param {RulerOptions} ruler - 
     * @return {Object} Generated DOM element
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
        
        for ( let _key of Object.keys( _line_grids ) ) {
            let _item_width      = /^(year|month)s?$/i.test( _opts.scale ) ? _line_grids[_key] : _line_grids[_key] * _props.scaleSize,
                _line            = $('<div></div>', { class: ClassName.TIMELINE_RULER_ITEM, style: `width:${_item_width}px;height:${line_height}px;line-height:${line_height}px;font-size:${font_size}px;color:${text_color};` }),
                _ruler_string    = this.getLocaleString( _key, line_scale, locale, format ),
                _data_ruler_item = ''
//console.log( '!_createRulerContent:', _key, _line_grids[_key], line_scale, locale, format, _item_width, _ruler_string )
            
            _data_ruler_item = `${line_scale}-${( _data_ruler_item === '' ? String( _key ) : _data_ruler_item )}`
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
    
    /**
     * Create the side indexes of the timeline
     * @private
     * @param {Object} margin - 
     * @param {number} margin.top - 
     * @param {number} margin.bottom - 
     * @return {Object} Generated DOM element
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
    
    /**
     * Create the footer of the timeline
     * @private
     * @return {Object} Generated DOM element
     */
    _createFooter() {
        let _opts    = this._config,
            _props   = this._instanceProps,
            _display = this.supplement( Default.footer.display, _opts.footer.display ),
            _content = this.supplement( null, _opts.footer.content ),
            _range   = this.supplement( Default.footer.range, _opts.footer.range ),
            _scale   = this.supplement( Default.footer.scale, _opts.footer.scale ),
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
    
    /**
     * Acquire the difference between two dates with the specified scale value
     * @private
     * @param {number} date1 - Number that can be parsed as datetime
     * @param {number} date2 - Number that can be parsed as datetime
     * @param {string} [scale="millisecond"] - 
     * @param {boolean} [absval=false] - 
     * @return {number|boolean}
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
    
    /**
     * Load all enabled events markupped on target element to the timeline object
     * @private
     */
    _loadEvent() {
        this._debug( '_loadEvent' )
        
        let _that         = this,
            _elem         = this._element,
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
        
        this._isCached = this._saveToCache( events )
        
    }
    
    /**
     * Register one event data as object
     * @private
     * @param {Object} event_element - 
     * @param {Object} params - 
     * @return {Object} Registered new event data
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
        
        if ( params.hasOwnProperty( 'start' ) && ! this.is_empty( params.start ) ) {
            _x = this._getCoordinateX( params.start )
            new_event.x = this.numRound( _x, 2 )
            if ( params.hasOwnProperty( 'end' ) && ! this.is_empty( params.end ) ) {
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
    
    /**
     * Get the coordinate X on the timeline of any date
     * @private
     * @param {string} date - 
     * @return {number} The pixel value as the coordinate X on timeline
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
    
    /**
     * Cache the event data to the web storage
     * @private
     * @param {Object} data - 
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
    
    /**
     * Load the cached event data from the web storage
     * @private
     * @return {Object}
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
    
    /**
     * Remove the cache data on the web storage
     * @private
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
    
    /**
     * Controller method to place event data on timeline
     * @private: 
     */
    _placeEvent() {
        this._debug( '_placeEvent' )
        
        if ( ! this._isCached ) {
            return
        }
        
        let _elem           = this._element,
            _opts           = this._config,
            _evt_container  = $(_elem).find( Selector.TIMELINE_EVENTS ),
            _relation_lines = $(_elem).find( Selector.TIMELINE_RELATION_LINES ),
            events          = this._loadToCache(),
            _sleep          = _opts.debug ? DEBUG_SLEEP : 1
        
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
        this.sleep( _sleep ).then(() => {
            this.hideLoader()
            _evt_container.fadeIn( 'fast', () => {
                _relation_lines.fadeIn( 'fast' )
            })
        })
        
    }
    
    /**
     * Create an event element on the timeline
     * @private
     * @param {Object} params - 
     * @return {Object} Generated DOM element
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
            for ( let _prop of Object.keys( params.extend ) ) {
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
        
        return _evt_elem
    }
    
    /**
     * Retrieve the diameter size (pixel) of pointer
     * @private
     * @param {number|string} key - 
     * @param {number} margin
     * @return {number} 
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
    
    /**
     * Draw the relational lines
     * @private
     * @param {Object} events - 
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
    
    /**
     * Retrieve the mapping data that placed current events
     * @private
     * @return {number[]}
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
    
    /**
     * Event when focus or blur
     * @private
     * @param {Object} event - 
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
    
    /**
     * Event when hover on the pointer type event
     * @private
     * @param {Object} event - 
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

    /**
     * Logger of errors when the method execution
     * @private
     * @param {!string} message - 
     * @param {string} [type='error'] - 
     */
    _error( message, type = 'error' ) {
        if ( message && window.console ) {
            type = window.console[type] ? type : 'error'
            console[type]( message )
        }
    }

    /**
     * Echo the log of plugin for debugging
     * @private
     * @param {string} message - 
     * @param {string} [throwType="Notice"] - 
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
    
    /**
     * This method is able to call only once after completed an initializing of the plugin
     * @public
     * @param {?Function()} callback - Custom callback fired after calling this method
     * @param {?(number|string|Object)} userdata - Data as object of referable in that callback
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
    
    /**
     * Destroy the object to which the plugin is applied
     * @public
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
    
    /**
     * @deprecated This method has been deprecated since version 2.0.0
     */
    render() {
        throw new ReferenceError( 'This method named "render" has been deprecated since version 2.0.0' )
    }
    
    /**
     * Show hidden timeline
     * @public
     */
    show() {
        this._debug( 'show' )
        
        let _elem = this._element
        
        if ( ! this._isShown ) {
            $(_elem).removeClass( ClassName.HIDE )
            
            this._isShown = true
        }
    }
    
    /**
     * Hide shown timeline
     * @public
     */
    hide() {
        this._debug( 'hide' )
        
        let _elem = this._element
        
        if ( this._isShown ) {
            $(_elem).addClass( ClassName.HIDE )
            
            this._isShown = false
        }
    }
    
    /**
     * Move shift or expand the range of timeline container as to past direction (to left)
     * @public
     * @param {?Object} options - Options for moving as dateback on the timeline container
     * @param {?Function()} callback - Custom callback fired after calling this method
     * @param {?(number|string|Object)} userdata - Data as object of referable in that callback
     */
    dateback( ...args ) {
        this._debug( 'dateback' )
        
        let _args    = args[0],
            _opts    = this._config,
            moveOpts = this.supplement( null, _args[0], this.validateObject ),
            callback = _args.length > 1 && typeof _args[1] === 'function' ? _args[1] : null,
            userdata = _args.length > 2 ? _args.slice(2) : null,
            newOpts  = {},
            begin_date, end_date, _tmpDate
        
        if ( this.is_empty( moveOpts ) ) {
            moveOpts = { scale: _opts.scale, range: _opts.range, shift: true }
        } else {
            if ( ! moveOpts.hasOwnProperty('shift') || moveOpts.shift !== false ) {
                moveOpts.shift = true
            }
            if ( ! moveOpts.hasOwnProperty('scale') || ! this._verifyScale( moveOpts.scale ) ) {
                moveOpts.scale = _opts.scale
            }
            if ( ! moveOpts.hasOwnProperty('range') || parseInt( moveOpts.range, 10 ) > LimitScaleGrids[moveOpts.scale] ) {
                moveOpts.range = _opts.range
            }
        }
        _tmpDate   = new Date( _opts.startDatetime )
        begin_date = new Date( _tmpDate.getTime() - ( this._verifyScale( moveOpts.scale ) * parseInt( moveOpts.range, 10 ) ) )
        newOpts.startDatetime = begin_date.toString()
        if ( moveOpts.shift ) {
            _tmpDate   = new Date( _opts.endDatetime )
            end_date   = new Date( _tmpDate.getTime() - ( this._verifyScale( moveOpts.scale ) * parseInt( moveOpts.range, 10 ) ) )
            newOpts.endDatetime = end_date.toString()
        }
        
        this.reload( [newOpts] )
        
        if ( callback ) {
            this._debug( 'Fired your callback function after datebacking.' )
            
            callback( this._element, _opts, userdata )
        }
    }
    
    /**
     * Move shift or expand the range of timeline container as to futrue direction (to right)
     * @public
     * @param {?Object} options - Options for moving as dateforth on the timeline container
     * @param {?Function()} callback - Custom callback fired after calling this method
     * @param {?(number|string|Object)} userdata - Data as object of referable in that callback
     */
    dateforth( ...args ) {
        this._debug( 'dateforth' )
        
        let _args        = args[0],
            _opts    = this._config,
            moveOpts = this.supplement( null, _args[0], this.validateObject ),
            callback = _args.length > 1 && typeof _args[1] === 'function' ? _args[1] : null,
            userdata = _args.length > 2 ? _args.slice(2) : null,
            newOpts  = {},
            begin_date, end_date, _tmpDate
        
        if ( this.is_empty( moveOpts ) ) {
            moveOpts = { scale: _opts.scale, range: _opts.range, shift: true }
        } else {
            if ( ! moveOpts.hasOwnProperty('shift') || moveOpts.shift !== false ) {
                moveOpts.shift = true
            }
            if ( ! moveOpts.hasOwnProperty('scale') || ! this._verifyScale( moveOpts.scale ) ) {
                moveOpts.scale = _opts.scale
            }
            if ( ! moveOpts.hasOwnProperty('range') || parseInt( moveOpts.range, 10 ) > LimitScaleGrids[moveOpts.scale] ) {
                moveOpts.range = _opts.range
            }
        }
        _tmpDate   = new Date( _opts.endDatetime )
        end_date   = new Date( _tmpDate.getTime() + ( this._verifyScale( moveOpts.scale ) * parseInt( moveOpts.range, 10 ) ) )
        newOpts.endDatetime = end_date.toString()
        if ( moveOpts.shift ) {
            _tmpDate   = new Date( _opts.startDatetime )
            begin_date = new Date( _tmpDate.getTime() + ( this._verifyScale( moveOpts.scale ) * parseInt( moveOpts.range, 10 ) ) )
            newOpts.startDatetime = begin_date.toString()
        }
        
        this.reload( [newOpts] )
        
        if ( callback ) {
            this._debug( 'Fired your callback function after dateforthing.' )
            
            callback( this._element, this._config, userdata )
        }
    }
    
    /**
     * Move the display position of the timeline container to the specified position
     * @public
     * @param {?string} position - The preset string of position on timeline you want to align. Allowed values are "left", "begin", "center", "right", "end", "latest", "current", "currently" or number of event id
     * @param {?(number|string)} duration - The duration of alignment animation. Allowed values are "fast", "normal", "slow" or number of milliseconds
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
    
    /**
     * @deprecated This method has been deprecated since version 2.0.0
     */
    getOptions() {
        throw new ReferenceError( 'This method named "getOptions" has been deprecated since version 2.0.0' )
    }
    
    /**
     * Add new events to the rendered timeline object
     * @public
     * @param {?Function()} callback - Custom callback fired after calling this method
     * @param {?(number|string|Object)} userdata - Data as object of referable in that callback
     */
    addEvent( ...args ) {
        this._debug( 'addEvent' )
        
        let _args        = args[0],
            events       = this.supplement( null, _args[0], this.validateArray ),
            callback     = _args.length > 1 && typeof _args[1] === 'function' ? _args[1] : null,
            userdata     = _args.length > 2 ? _args.slice(2) : null,
            _cacheEvents = this._loadToCache(),
            lastEventId  = 0,
            add_done     = false
        
        if ( this.is_empty( events ) || ! this._isCompleted ) {
            return
        }
        
        if ( ! this.is_empty( _cacheEvents ) ) {
            _cacheEvents.sort( this.compareValues( 'eventId' ) )
            lastEventId = parseInt( _cacheEvents[_cacheEvents.length - 1].eventId, 10 )
        }
//console.log( '!addEvent::before:', _cacheEvents, lastEventId, callback, userdata )
        
        events.forEach( ( evt ) => {
            let _one_event = this._registerEventData( '<div></div>', evt )
            
            if ( ! this.is_empty( _one_event ) ) {
                _one_event.eventId = Math.max( lastEventId + 1, parseInt( _one_event.eventId, 10 ) )
                _cacheEvents.push( _one_event )
                lastEventId = parseInt( _one_event.eventId, 10 )
                add_done = true
            }
        })
//console.log( '!addEvent::after:', _cacheEvents, lastEventId, callback, userdata )
        if ( ! add_done ) {
            return
        }
        
        this._saveToCache( _cacheEvents )
        
        this._placeEvent()
        
        if ( callback ) {
            this._debug( 'Fired your callback function after replacing events.' )
            
            callback( this._element, this._config, userdata )
        }
    }
    
    /**
     * Remove events from the currently timeline object
     * @public
     * @param {?Function()} callback - Custom callback fired after calling this method
     * @param {?(number|string|Object)} userdata - Data as object of referable in that callback
     */
    removeEvent( ...args ) {
        this._debug( 'removeEvent' )
        
        let _args        = args[0],
            targets      = this.supplement( null, _args[0], this.validateArray ),
            callback     = _args.length > 1 && typeof _args[1] === 'function' ? _args[1] : null,
            userdata     = _args.length > 2 ? _args.slice(2) : null,
            _cacheEvents = this._loadToCache(),
            condition    = {},
            remainEvents = [],
            remove_done  = false
        
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
            _cacheEvents.forEach( ( evt, _idx ) => {
                let is_remove = false
                
                switch ( condition.type ) {
                    case 'eventId': {
                        if ( parseInt( evt.eventId, 10 ) == condition.value ) {
                            is_remove = true
                        }
                        break
                    }
                    case 'daterange': {
                        let _fromX = condition.value.from ? Math.ceil( this._getCoordinateX( condition.value.from.toString() ) ) : 0,
                            _toX   = condition.value.to   ? Math.floor( this._getCoordinateX( condition.value.to.toString() ) ) : _fromX
                        
                        if ( _fromX <= evt.x && evt.x <= _toX ) {
                            is_remove = true
                        }
                        break
                    }
                    case 'regex': {
                        if ( condition.value.test( JSON.stringify( evt ) ) ) {
                            is_remove = true
                        }
                        break
                    }
                }
                if ( ! is_remove ) {
                    remainEvents.push( evt )
                }
            })
        })
        remove_done = remainEvents.length !== _cacheEvents.length
        if ( ! remove_done ) {
            return
        }
        
        this._saveToCache( remainEvents )
        
        this._placeEvent()
        
        if ( callback ) {
            this._debug( 'Fired your callback function after placing additional events.' )
            
            callback( this._element, this._config, userdata )
        }
    }
    
    /**
     * Update events on the currently timeline object
     * @public
     * @param {?Function()} callback - Custom callback fired after calling this method
     * @param {?(number|string|Object)} userdata - Data as object of referable in that callback
     */
    updateEvent( ...args ) {
        this._debug( 'updateEvent' )
        
        let _args        = args[0],
            events       = this.supplement( null, _args[0], this.validateArray ),
            callback     = _args.length > 1 && typeof _args[1] === 'function' ? _args[1] : null,
            userdata     = _args.length > 2 ? _args.slice(2) : null,
            _cacheEvents = this._loadToCache(),
            update_done  = false
        
        if ( this.is_empty( events ) || ! this._isCompleted || this.is_empty( _cacheEvents ) ) {
            return
        }
        
        events.forEach( ( evt ) => {
            let _upc_event = this._registerEventData( '<div></div>', evt ), // Update Candidate
                _old_index = null,
                _old_event = _cacheEvents.find( ( _evt, _idx ) => {
                    _old_index = _idx
                    return _evt.eventId == _upc_event.eventId
                }),
                _new_event = {}
            
            if ( ! this.is_empty( _old_event ) && ! this.is_empty( _upc_event ) ) {
                if ( _upc_event.hasOwnProperty( 'uid' ) ) {
                    delete _upc_event.uid
                }
                _new_event = Object.assign( _new_event, _old_event, _upc_event )
//console.log( _new_event, _old_event, _upc_event, _old_index )
                _cacheEvents[_old_index] = _new_event
                update_done = true
            }
        })
        
        if ( ! update_done ) {
            return
        }
        
        this._saveToCache( _cacheEvents )
        
        this._placeEvent()
        
        if ( callback ) {
            this._debug( 'Fired your callback function after updating events.' )
            
            callback( this._element, this._config, userdata )
        }
    }
    
    /**
     * Reload the timeline with overridable any options
     * @public
     * @param {?Function()} callback - Custom callback fired after calling this method
     * @param {?(number|string|Object)} userdata - Data as object of referable in that callback
     */
    reload( ...args ) {
        this._debug( 'reload' )
        
        let _args        = args[0],
            _upc_options = this.supplement( null, _args[0], this.validateObject ),
            callback     = _args.length > 1 && typeof _args[1] === 'function' ? _args[1] : null,
            userdata     = _args.length > 2 ? _args.slice(2) : null,
            _elem        = this._element,
            $default_evt = $(_elem).find( Selector.DEFAULT_EVENTS ),
            _old_options = this._config,
            _new_options = {}
        
        if ( ! this.is_empty( _upc_options ) ) {
            // _new_options = Object.assign( _new_options, _old_options, _upc_options )
            _new_options = this.mergeDeep( _old_options, _upc_options )
            this._config = _new_options
        }
        
        this._isInitialized = false
        this._isCached      = false
        this._isCompleted   = false
        this._instanceProps = {}
        
        $(_elem).empty().append( $default_evt )
        
        this._calcVars()
        
        if ( ! this._verifyMaxRenderableRange() ) {
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
        
        this._placeEvent()
        
        this._isCompleted = true
        
        if ( callback ) {
            this._debug( 'Fired your callback function after reloading timeline.' )
            
            callback( this._element, this._config, userdata )
        }
    }
    
    /**
     * The method that fires when an event on the timeline is clicked
     * Note: You can hook the custom processing with the callback specified in the event parameter
     * @public
     * @param {Object} event - 
     */
    openEvent( event ) {
        this._debug( 'openEvent' )
        
        let _that     = this,
            _self     = event.target,
            $viewer   = $(document).find( Selector.EVENT_VIEW ),
            //eventId   = parseInt( $(_self).attr( 'id' ).replace( 'evt-', '' ), 10 ),
            uid       = $(_self).data( 'uid' ),
            //meta      = this.supplement( null, $(_self).data( 'meta' ) ),
            callback  = this.supplement( null, $(_self).data( 'callback' ) )
//console.log( '!openEvent:', _self, $viewer, eventId, uid, meta, callback )
        
        if ( $viewer.length > 0 ) {
            $viewer.each(function() {
                let _cacheEvents = _that._loadToCache(),
                    _eventData   = _cacheEvents.find( ( event ) => event.uid === uid ),
                    _label       = $('<div></div>', { class: ClassName.VIEWER_EVENT_TITLE }),
                    _content     = $('<div></div>', { class: ClassName.VIEWER_EVENT_CONTENT }),
                    _meta        = $('<div></div>', { class: ClassName.VIEWER_EVENT_META }),
                    _image       = $('<div></div>', { class: ClassName.VIEWER_EVENT_IMAGE_WRAPPER })
                
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
            this._debug( `The callback "${callback}" was called by the "openEvent" method.` )
            
            try {
                Function.call( null, `return ${callback}` )()
            } catch ( e ) {
                throw new TypeError( e )
            }
        }
    }
    
    /**
     * Be zoomed in scale of the timeline that fires when any scales on the ruler is double clicked
     * @public
     * @param {Object} event - 
     */
    zoomScale( event ) {
        this._debug( 'zoomScale' )
        
        let _elem        = event.target,
            ruler_item   = $(_elem).data( 'ruler-item' ),
            scaleMap     = {
                millennium : { years: 1000, lower: 'century', minGrids: 10 },
                century    : { years: 100,  lower: 'decade',  minGrids: 10 },
                decade     : { years: 10,   lower: 'lustrum', minGrids: 2  },
                lustrum    : { years: 5,    lower: 'year',    minGrids: 5  },
                year       : { years: 1,    lower: 'month',   minGrids: 12 },
                month      : {              lower: 'day',     minGrids: 28 },
                week       : {              lower: 'day',     minGrids: 7  },
                day        : {              lower: 'hour',    minGrids: 24 },
                weekday    : {              lower: 'hour',    minGrids: 24 },
                hour       : {              lower: 'minute',  minGrids: 60 },
                minute     : {              lower: 'second',  minGrids: 60 },
                second     : {              lower: null,      minGrids: 60 }
            },
            getZoomScale = ( ruler_item ) => {
                let [ scale, date_seed ] = ruler_item.split('-'),
                    min_grids            = scaleMap[scale].minGrids,
                    begin_date, end_date, base_year, base_month, week_num, base_day, is_remapping, _tmpDate
                
                switch ( true ) {
                    case /^millennium$/i.test( scale ):
                    case /^century$/i.test( scale ):
                    case /^decade$/i.test( scale ):
                    case /^lustrum$/i.test( scale ):
                        begin_date = `${( ( date_seed - 1 ) * scaleMap[scale].years ) + 1}/1/1`
                        _tmpDate   = new Date( begin_date, 0, 1 ).setFullYear( date_seed * scaleMap[scale].years + 1 )
                        _tmpDate   = new Date( _tmpDate - 1 )
                        end_date   = `${_tmpDate.getFullYear()}/${_tmpDate.getMonth()+1}/${_tmpDate.getDate()} 23:59:59`
                        break
                    case /^year$/i.test( scale ):
                        begin_date = `${date_seed}/1/1`
                        _tmpDate   = new Date( date_seed, 0, 1 ).setFullYear( parseInt( date_seed, 10 ) + 1 )
                        _tmpDate   = new Date( _tmpDate - 1 )
                        end_date   = `${_tmpDate.getFullYear()}/${_tmpDate.getMonth()+1}/${_tmpDate.getDate()} 23:59:59`
                        break
                    case /^month$/i.test( scale ):
                        [ base_year, base_month ] = date_seed.split('/')
                        is_remapping = parseInt( base_year, 10 ) < 100
                        begin_date = new Date( base_year, parseInt( base_month, 10 ) - 1, 1 )
                        if ( begin_date.getMonth() == 11 ) {
                            _tmpDate = new Date( begin_date.getFullYear() + 1, 0, 1 ).setFullYear( parseInt( base_year, 10 ) + 1 )
                        } else {
                            _tmpDate = new Date( begin_date.getFullYear(), begin_date.getMonth() + 1, 1 ).setFullYear( parseInt( base_year, 10 ) )
                        }
                        begin_date = begin_date.toString()
                        end_date   = new Date( _tmpDate - 1 ).toString()
                        break
                    case /^week$/i.test( scale ):
                        [ base_year, week_num ] = date_seed.split(',')
                        is_remapping = parseInt( base_year, 10 ) < 100
                        _tmpDate = new Date( base_year, 0, 1 )
                        if ( is_remapping ) {
                            _tmpDate.setFullYear( base_year )
                        }
                        begin_date = new Date( _tmpDate.getTime() + ( week_num * 7 * 24 * 60 * 60 * 1000 ) ).toString()
                        end_date   = new Date( new Date( begin_date ).getTime() + ( 7 * 24 * 60 * 60 * 1000 ) - 1 ).toString()
                        break
                    case /^day$/i.test( scale ):
                    case /^weekday$/i.test( scale ):
                        if ( 'weekday' === scale ) {
                            let _tmp = date_seed.split(',')
                            date_seed = _tmp[0]
                        }
                        [ base_year, base_month, base_day ] = date_seed.split('/')
                        is_remapping = parseInt( base_year, 10 ) < 100
                        _tmpDate = new Date( base_year, parseInt( base_month, 10 ) - 1, base_day )
                        begin_date = _tmpDate.toString()
                        end_date   = new Date( _tmpDate.getTime() + ( 24 * 60 * 60 * 1000 ) - 1 ).toString()
//console.log( date_seed, base_year, week_num, begin_date, _tmpDate, new Date( _tmpDate ), new Date( _tmpDate - 1 ) )
                        break
                    case /^hour$/i.test( scale ):
                    case /^minute$/i.test( scale ):
                        begin_date = `${date_seed}:00`
                        end_date   = `${date_seed}:59`
                        break
                    default:
                        begin_date = null
                        end_date   = null
                        break
                }
                
                scale = scaleMap.hasOwnProperty( scale ) ? scaleMap[scale].lower : scale
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
            
            if ( ! this._config.hasOwnProperty( 'originMinGridSize' ) ) {
                // Keep an original minGridSize as cache
                this._config.originMinGridSize = this._config.minGridSize
            }
            _originMinGridSize = this._config.originMinGridSize
            zoom_options.minGridSize = Math.max( _wrap, _originMinGridSize )
        }
// console.log( ruler_item, zoom_options, this._config.wrapScale, this._config.minGridSize )
        
        this.reload( [zoom_options] )
        
    }
    
    /**
     * Show the loader
     * @public
     */
    showLoader() {
        this._debug( 'showLoader' )
        
        let _elem      = this._element,
            _opts      = this._config,
            _container = $(_elem).find( Selector.TIMELINE_CONTAINER ),
            width      = _container.length > 0 ? _container.width() : $(_elem).width(),
            height     = ( _container.length > 0 ? _container.height() : $(_elem).height() ) || 120,
            _loader    = $('<div></div>', { id: 'jqtl-loader', style: `width:${width}px;height:${height}px;` })
        
//console.log( '!showLoader:', width, height, _container.length )
        if ( _opts.loader === false ) {
            return
        }
        
        if ( $(_opts.loader).length == 0 ) {
            let _loading_text = LOADING_MESSAGE.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[\s\S]|^$/g).filter( Boolean )
            
            _loading_text.forEach( ( str, idx ) => {
                let _fountain_text = $('<div></div>', { id: `jqtl-loading_${( idx + 1 )}`, class: ClassName.LOADER_ITEM }).text( str )
                _loader.append( _fountain_text )
            })
        } else {
            let _custom_loader = $(_opts.loader).clone().prop( 'hidden', false ).css( 'display', 'block' )
            _loader.append( _custom_loader )
        }
        
        if ( $(_elem).find( Selector.LOADER ).length == 0 ) {
            if ( _container.length > 0 ) {
                _container.append( _loader )
            } else {
                $(_elem).css( 'position', 'relative' ).css( 'min-height', `${height}px` ).append( _loader )
            }
        }
    }
    
    /**
     * Hide the loader
     * @public
     */
    hideLoader() {
        this._debug( 'hideLoader' )
        
        $(this._element).find( Selector.LOADER ).remove()
    }
    
    
    /* ----------------------------------------------------------------------------------------------------------------
     * Utility Api
     * ----------------------------------------------------------------------------------------------------------------
     */
    
    /**
     * Determine empty that like PHP
     * @param {!(number|string|Object|number[]|boolean)} value - Variable you want to check
     * @return {boolean}
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
    
    /**
     * Determine whether variable is an Object
     * @param {!(number|string|Object|boolean)} item - Variable you want to check
     * @return {boolean}
     */
    is_Object( item ) {
        return (item && typeof item === 'object' && ! Array.isArray( item ))
    }
    
    /**
     * Merge two objects deeply as polyfill for instead "$.extend(true,target,source)"
     * @param {!Object} target - 
     * @param {!Object} source - 
     * @return {Object}
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
    
    /**
     * Determine whether the object is iterable
     * @param {!Object} obj - 
     * @return {boolean}
     */
    is_iterable( obj ) {
        return obj && typeof obj[Symbol.iterator] === 'function'
    }
    
    /**
     * Add an @@iterator method to non-iterable object
     * @param {!Object} obj - 
     * @return {Object}
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
    
    /**
     * Await until next process at specific millisec
     * @param {number} [msec=1] - Millisecond
     */
    sleep( msec = 1 ) {
        return new Promise( ( resolve ) => {
            setTimeout( resolve, msec )
        })
    }
    
    /**
     * Supplemental method for validating arguments in local scope
     * @param {!(number|string|Object|boolean)} default_value - 
     * @param {?(number|string|Object|boolean)} opt_arg - 
     * @param {?(number|string|Object|boolean)} opt_callback - function or string of function to call
     * @return {number|string|Object|boolean}
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
    
    /**
     * Generate the pluggable unique id
     * @param {number} [digit=1000] - 
     * @return {string}
     */
    generateUniqueID( digit = 1000 ) {
        return new Date().getTime().toString(16) + Math.floor( digit * Math.random() ).toString(16)
    }
    
    /**
     * Round a number with specific digit
     * @param {!number} number - 
     * @param {?number} digit - Defaults to 0
     * @param {string} [round_type="round"] - 
     * @return {number}
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
    
    /**
     * Convert hex of color code to rgba
     * @param {!string} hex - 
     * @param {number} [alpha=1] - 
     * @return {string}
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
    
    /**
     * Get the correct datetime with remapping to that if the year is 0 - 99
     * @param {!string} datetime_str - 
     * @return {?Object} - Date Object, or null if failed
     */
    getCorrectDatetime( datetime_str ) {
        let normalizeDate = ( dateString ) => {
                // For Safari, IE
                let _d = dateString.replace(/-/g, '/')
                return /^\d{1,4}\/\d{1,2}$/.test( _d ) ? `${_d}/1` : _d
            },
            getDateObject = ( datetime_str ) => {
                let _chk_str = normalizeDate( datetime_str ),
                    _ymd, _his, _parts, _date
                
                switch ( true ) {
                    case /^\d{1,2}(|\/\d{1,2}(|\/\d{1,2}))(| \d{1,2}(|:\d{1,2}(|:\d{1,2})))$/i.test( _chk_str ): {
                        [ _ymd, _his ] = _chk_str.split(' ')
                        _parts = _ymd.split('/')
                        if ( _parts[1] ) {
                            _parts[1] = parseInt( _parts[1], 10 ) - 1 // to month index
                        }
                        if ( _his ) {
                            _parts.push( ..._his.split(':') )
                        }
                        _date = new Date( new Date( ..._parts ).setFullYear( parseInt( _parts[0], 10 ) ) )
                        break
                    }
                    case /^\d+$/.test( _chk_str ):
                        _date = new Date( 1, 0, 1 ).setFullYear( parseInt( _chk_str, 10 ) )
                        break
                    default:
                        _date = new Date( _chk_str.toString() )
                        break
                } 
                return _date
            },
            _checkDate = getDateObject( datetime_str )
        
        if ( isNaN( _checkDate ) || this.is_empty( _checkDate ) ) {
            console.warn( `"${datetime_str}" Cannot parse date because invalid format.` )
            return null
        }
        /*
        let _tempDate = new Date( normalizeDate( datetime_str ) ),
            _chk_date = datetime_str.split( /-|\// )
        
        if ( parseInt( _chk_date[0], 10 ) < 100 ) {
            // Remapping if year is 0-99
            _tempDate.setFullYear( parseInt( _chk_date[0], 10 ) )
        }
        
        return _tempDate
        */
        if ( typeof _checkDate !== 'object' ) {
            _checkDate = new Date( _checkDate )
        }
        return _checkDate
    }
    
    /**
     * Method to get week number as extension of Date object
     * @param {!string} date_str - 
     * @return {number}
     */
    getWeek( date_str ) {
        let targetDate, _str, _onejan,
            _millisecInDay = 24 * 60 * 60 * 1000
        
        if ( /^\d{1,4}(|\/\d{1,2}(|\/\d{1,2}))$/.test( date_str ) ) {
            _str = date_str.split('/')
            if ( ! this.is_empty( _str[1] ) ) {
                _str[1] = parseInt( _str[1], 10 ) - 1 // To month index
            }
            targetDate = new Date( ..._str )
        } else {
            targetDate = new Date( date_str )
        }
        _onejan = new Date( targetDate.getFullYear(), 0, 1 )
        return Math.ceil( ( ( ( targetDate - _onejan ) / _millisecInDay ) + _onejan.getDay() + 1 ) / 7 )
    }
    
    /**
     * Retrieve a first day of the week from week number (Note: added support for daylight savings time but needs improvement as performance has dropped)
     * @param {!number} week_number - 
     * @param {!number} year - defaults to current year
     * @return {object|boolean}
     */
    getFirstDayOfWeek( week_number, year ) {
        if ( this.is_empty( week_number ) ) {
            return false
        }
        year = this.is_empty( year ) ? new Date().getFullYear() : parseInt( year, 10 )
        let firstDayIndex  = this._config.firstDayOfWeek,
            firstDayOfYear = this.getCorrectDatetime( `${year}/1/1` ),
            _weekday       = firstDayOfYear.getDay(),
            _keyDayOfWeek  = firstDayOfYear,
            _offset        = _weekday > firstDayIndex ? _weekday - firstDayIndex : 0,
            _weekNumber    = _offset <= 0 ? 0 : 1,
            hitDate
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
        return hitDate
    }

    /**
     * Get the datetime shifted from the specified datetime by any fluctuation value
     * @param {!object} datetime - to be date object filtered by getCorrectDatetime method
     * @param {!number} fluctuation - an interval value to shift from given base datetime
     * @param {!string} scale  - the scale of an interval value
     * @return {object|boolean}
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
        return newDate
    }

    /**
     * Acquire the difference between two dates with the specified scale value
     * @param {!(number|object)} date1 - integer as milliseconds or object instanceof Date)
     * @param {!(number|object)} date2 - integer as milliseconds or object instanceof Date)
     * @param {string} [scale='millisecond'] - defaults to 'millisecond'
     * @param {boolean} [absval=false] - defaults to false
     * @return {object|boolean}
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

    /**
     * Verify whether is allowed scale in the plugin. Then retrieves that values of intervals on the scale if the scale is available and given arguments of date range. And return the base millisecond of scale if it is not the variable length scale (isVLS to false)
     * @param {!string} scale - 
     * @param {number} [begin=null] - begin of range as unit millisecs that got by `Date.getTime()`
     * @param {number} [end=null] - end of range as unit millisecs that got by `Date.getTime()`
     * @param {boolean} [isVLS=false] - whether is variable length scale, defaults to false
     * @return {object|boolean} boolean if no arguments are given after the first argument
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

    /**
     * Retrieve one higher scale
     * @param {!string} scale - 
     * @return {string} String of higher scale
     */
    getHigherScale( scale ) {
        return this.findScale( scale, 'higher' )
    }

    /**
     * Retrieve one lower scale
     * @param {!string} scale - 
     * @return {string} String of lower scale
     */
    getLowerScale( scale ) {
        return this.findScale( scale, 'lower' )
    }

    /**
     * Find scale matched the specified condition
     * @param {!string} base_scale - 
     * @param {!string} condition - 
     * @return {string|object} matched scale(s)
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

    /**
     * Retrieve the date string of specified locale
     * @param {!string} date_seed - 
     * @param {string} [scale=""] - 
     * @param {string} [locales="en-US"] - 
     * @param {Object} [options={}] - 
     * @return {string} Locale string
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
            locale_string = '',
            _options = {},
            getOrdinal = ( n ) => {
                let s = [ 'th', 'st', 'nd', 'rd' ], v = n % 100
                return n + ( s[(v - 20)%10] || s[v] || s[0] )
            },
            getZerofill = ( num, digit = 4 ) => {
                let strDuplicate = ( n, str ) => Array( n + 1 ).join( str ),
                    zero = strDuplicate( digit - num.length, '0' )
                
                return String( num ).length == digit ? String( num ) : ( zero + num ).substr( num * -1 )
            },
            parseDatetime = ( date_str ) => {
                let [ _ymd, _his ] = date_str.split(' '),
                    _parts         = []
                
                if ( /^\d{1,4}\/\d{1,2}\/\d{1,2}$/.test( _ymd ) ) {
                    _str = _ymd.split('/')
                    _parts.push( ..._str )
                }
                if ( /^\d{1,2}(|:\d{1,2}(|:\d{1,2}))$/.test( _his ) ) {
                    _str = _his.split(':')
                    _parts.push( ..._str )
                }
                if ( _parts.length > 0 ) {
                    return new Date( ..._parts )
                } else {
                    return new Date( date_str )
                }
            },
            _prop, _temp, _str, _num
        
        for ( _prop in options ) {
            if ( _prop === 'timeZone' || _prop === 'hour12' ) {
                _options[_prop] = options[_prop]
            }
        }
        
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
                        locale_string = this.getCorrectDatetime( date_seed ).toLocaleString( locales, _options )
                        //locale_string = this.getCorrectDatetime( date_seed ).toLocaleString( locales, _options )
                    }
                }
                if ( this.is_empty( locale_string ) || isNaN( locale_string ) ) {
                    if ( /^\d{1,2}\/\d{1,2}(|\/\d{1,2})$/.test( date_seed ) ) {
                        _str = date_seed.split('/')
                        _temp = new Date( _str[0], parseInt( _str[1] - 1 ), 1 )
                        locale_string = _temp.toLocaleString( locales, _options )
                    }
                }
                break
            case /^weeks?$/i.test( scale ):
                [ _str, _num ] = date_seed.split(',')
                if ( options.hasOwnProperty( scale ) && options[scale] === 'ordinal' ) {
                    locale_string = getOrdinal( parseInt( _num, 10 ) )
                } else {
                    locale_string = _num
                }
                break
            case /^weekdays?$/i.test( scale ):
                [ _str, _num ] = date_seed.split(',')
                if ( /^\d{1,2}(|\/\d{1,2}(|\/\d{1,2}))$/.test( _str ) ) {
                    _str = _str.split('/')
                    _temp = new Date( ..._str )
                } else {
                    _temp = new Date( _str )
                }
                if ( is_toLocalString ) {
                    _options.weekday = options.hasOwnProperty('weekday') ? options.weekday : 'narrow'
                    locale_string = _temp.toLocaleString( locales, _options )
                    //locale_string = this.getCorrectDatetime( _temp[0] ).toLocaleString( locales, _options )
                } else {
                    let _weekday = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]
                    locale_string = _weekday[parseInt( _num, 10 )]
                }
                break
            case /^days?$/i.test( scale ):
                if ( /^\d{1,2}(|\/\d{1,2}(|\/\d{1,2}))$/.test( date_seed ) ) {
                    _str = date_seed.split('/')
                    _temp = new Date( ..._str )
                } else {
                    _temp = new Date( date_seed )
                }
                if ( is_toLocalString ) {
                    _options.day = options.hasOwnProperty('day') ? options.day : 'numeric'
                    locales = options.hasOwnProperty('day') ? locales : 'en-US'
                    locale_string = _temp.toLocaleString( locales, _options )
                    //locale_string = this.getCorrectDatetime( date_seed ).toLocaleString( locales, _options )
                } else {
                    locale_string = _temp.getDate()
                    //locale_string = this.getCorrectDatetime( date_seed ).getDate()
                }
                break
            case /^hours?$/i.test( scale ):
            case /^(half|quarter)-?hours?$/i.test( scale ):
                _temp = typeof date_seed === 'string' ? parseDatetime( date_seed ) : new Date( date_seed )
                if ( is_toLocalString ) {
                    _options.hour = options.hasOwnProperty('hour') ? options.hour : 'numeric'
                    if ( options.hasOwnProperty('minute') ) {
                        _options.minute = options.hasOwnProperty('minute') ? options.minute : 'numeric'
                    }
                    locale_string = _temp.toLocaleString( locales, _options )
                    //locale_string = this.getCorrectDatetime( date_seed ).toLocaleString( locales, _options )
                } else {
                    locale_string = _temp.getHours()
                    //locale_string = this.getCorrectDatetime( date_seed ).getHours()
                }
                break
            case /^minutes?$/i.test( scale ):
                _temp = typeof date_seed === 'string' ? parseDatetime( date_seed ) : new Date( date_seed )
                if ( is_toLocalString ) {
                    _options.minute = options.hasOwnProperty('minute') ? options.minute : 'numeric'
                    if ( options.hasOwnProperty('hour') ) {
                        _options.hour   = options.hasOwnProperty('hour') ? options.hour : 'numeric'
                    }
                    locale_string = _temp.toLocaleString( locales, _options )
                    //locale_string = this.getCorrectDatetime( date_seed ).toLocaleString( locales, _options )
                } else {
                    locale_string = _temp.getMinutes()
                    //locale_string = this.getCorrectDatetime( date_seed ).getMinutes()
                }
                break
            case /^seconds?$/i.test( scale ):
                _temp = typeof date_seed === 'string' ? parseDatetime( date_seed ) : new Date( date_seed )
                if ( is_toLocalString ) {
                    _options.second = options.hasOwnProperty('second') ? options.second : 'numeric'
                    if ( options.hasOwnProperty('hour') ) {
                        _options.hour   = options.hasOwnProperty('hour') ? options.hour : 'numeric'
                    }
                    if ( options.hasOwnProperty('minute') ) {
                        _options.minute = options.hasOwnProperty('minute') ? options.minute : 'numeric'
                    }
                    locale_string = _temp.toLocaleString( locales, _options )
                    //locale_string = this.getCorrectDatetime( date_seed ).toLocaleString( locales, _options )
                } else {
                    locale_string = _temp.getSeconds()
                    //locale_string = this.getCorrectDatetime( date_seed ).getSeconds()
                }
                break
            case /^millisec(|ond)s?$/i.test( scale ):
            default:
                _temp = typeof date_seed === 'string' ? parseDatetime( date_seed ) : new Date( date_seed )
                locale_string = _temp.toString()
                //locale_string = this.getCorrectDatetime( date_seed )
                break
        }
        return locale_string
    }

    /**
     * Convert the date-time to custom formatting strings, as like ruby
     * @param {!(number|object)} baseDate - should be a Date object
     * @param {string} [format=''] - 
     * @param {string} [locales='en-US'] - 
     * @return {string}
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

    /**
     * Get the rendering width of the given string
     * @param {!string} str - 
     * @return {number}
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
    
    /**
     * Sort an array by value of specific property (Note: destructive method)
     * @example
     * Object.sort( this.compareValues( property, order ) )
     *
     * @param {!string} property - To compare a property of object
     * @param {string} [order="asc"] - Order to sort
     * @return {number} Comparison index
     */
    compareValues( property, order = 'asc' ) {
        return ( a, b ) => {
            if ( ! a.hasOwnProperty( property ) || ! b.hasOwnProperty( property ) ) {
                return 0
            }
            
            const varA = typeof a[property] === 'string' ? a[property].toUpperCase() : a[property]
            const varB = typeof b[property] === 'string' ? b[property].toUpperCase() : b[property]
            
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

    /**
     * Getter argument as user data
     * @since v2.1.0
     * @param {!object} userdata - 
     * @return {object}
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

    /**
     * Apply custom theme styles
     * @since v2.1.0
     * @return {void}
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

    /**
     * Validator for string
     * @param {!(number|string|Object|boolean)} def - Define instead this value as default if validation failure
     * @param {!(number|string|Object|boolean)} val - Value to validate
     * @return {number|string|Object|boolean}
     */
    validateString( def, val ) {
        return typeof val === 'string' && val !== '' ? val : def
    }
    /**
     * Validator for numeric
     * @param {!(number|string|Object|boolean)} def - Define instead this value as default if validation failure
     * @param {!(number|string|Object|boolean)} val - Value to validate
     * @return {number|string|Object|boolean}
     */
    validateNumeric( def, val ) {
        return typeof val === 'number' ? Number( val ) : def
    }
    /**
     * Validator for boolean
     * @param {!(number|string|Object|boolean)} def - Define instead this value as default if validation failure
     * @param {!(number|string|Object|boolean)} val - Value to validate
     * @return {number|string|Object|boolean}
     */
    validateBoolean( def, val ) {
        return typeof val === 'boolean' || ( typeof val === 'object' && val !== null && typeof val.valueOf() === 'boolean' ) ? val : def
    }
    /**
     * Validator for object
     * @param {!(number|string|Object|boolean)} def - Define instead this value as default if validation failure
     * @param {!(number|string|Object|boolean)} val - Value to validate
     * @return {number|string|Object|boolean}
     */
    validateObject( def, val ) {
        return typeof val === 'object' ? val : def
    }
    /**
     * Validator for array
     * @param {!(number|string|Object|boolean)} def - Define instead this value as default if validation failure
     * @param {!(number|string|Object|boolean)} val - Value to validate
     * @return {number|string|Object|boolean}
     */
    validateArray( def, val ) {
        return Object.prototype.toString.call( val ) === '[object Array]' ? val : def
    }
    
    
    // Static
    
    /**
     * Interface for jQuery
     * @interface
     * @param {?(string|Object)} config - The object of plugin options or string of public method
     * @param {?(...string|...Function())} args - Arguments for public method
     */
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
                if ( ! data._isInitialized ) {
                    data._init()
                }
            }
        })
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

/* ----------------------------------------------------------------------------------------------------------------
 * For ESDoc
 * ----------------------------------------------------------------------------------------------------------------
 */
export {
    /*
    NAME,
    VERSION,
    DATA_KEY,
    EVENT_KEY,
    PREFIX,
    LOADING_MESSAGE,
    MIN_POINTER_SIZE,
    JQUERY_NO_CONFLICT,
    */
    Default,
    LimitScaleGrids,
    EventParams,
    /*
    Event,
    ClassName,
    Selector,
    */
    Timeline
}
