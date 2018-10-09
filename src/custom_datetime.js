/*!
 * Custom Datetime Lib
 * ------------------------
 * Version: 0.0.1
 * Author: Ka2 ( https://ka2.org/ )
 * Repository: -
 * Lisenced: MIT
 */

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
    if ( opt_arg === undefined ) {
        return default_value;
    }
    if ( opt_callback === undefined ) {
        return opt_arg;
    }
    return opt_callback( default_value, opt_arg );
}

/*
 * Determine whether variable is an array
 */
function is_array( val ) {
    return Object.prototype.toString.call( val ) === '[object Array]';
}

/*
 *
 */
Date.prototype.getWeek = function() {
    let _onejan = new Date( this.getFullYear(), 0, 1 ),
        _millisecInDay = 86400000;
    return Math.ceil( ( ( ( this - _onejan ) / _millisecInDay ) + _onejan.getDay() + 1 ) / 7 );
}

/*
 * Verify the allowed scale, then retrieve that scale's millisecond if allowed (:> 許容スケールかを確認し、許可時はそのスケールのミリ秒を取得する
 *
 * @param string scale (required)
 *
 * @return mixed result (integer of millisec if allowed, false if disallowed scale)
 */
function verifyScale( scale ) {
    'use strict';
    let result = false,
        _ms = -1;
    if ( typeof scale === 'undefined' || typeof scale !== 'string' ) {
        return result;
    }
    switch ( true ) {
        case /^millisec(|ond)s?$/i.test( scale ):
            // Millisecond (:> ミリ秒
            _ms = 1;
            break;
        case /^seconds?$/i.test( scale ):
            // Second (:> 秒
            _ms = 1000;
            break;
        case /^minutes?$/i.test( scale ):
            // Minute (:> 分
            _ms = 60 * 1000;
            break;
        case /^hours?$/i.test( scale ):
            // Hour (:> 時（時間）
            _ms = 60 * 60 * 1000;
            break;
        case /^days?$/i.test( scale ):
            // Day (:> 日
            _ms = 24 * 60 * 60 * 1000;
            break;
        case /^weeks?$/i.test( scale ):
            // Week (:> 週
            _ms = 7 * 24 * 60 * 60 * 1000;
            break;
        case /^months?$/i.test( scale ):
            // Month (:> 月（ヶ月）
            // 365 / 12 = 30.4167, 366 / 12 = 30.5, ((365 * 3) + 366) / (12 * 4) = 30.4375
            _ms = 30.4375 * 24 * 60 * 60 * 1000;
            break;
        case /^years?$/i.test( scale ):
            // Year (:> 年
            _ms = 365.25 * 24 * 60 * 60 * 1000;
            break;
        case /^lustrum$/i.test( scale ):
            // Lustrum (:> 五年紀
            _ms = ( ( 3.1536 * Math.pow( 10, 8 ) ) / 2 ) * 1000;
            break;
        case /^dec(ade|ennium)$/i.test( scale ):
            // Decade (:> 十年紀
            _ms = ( 3.1536 * Math.pow( 10, 8 ) ) * 1000;
            break;
        case /^century$/i.test( scale ):
            // Century (:> 世紀（百年紀）
            _ms = 3155760000 * 1000;
            break;
        case /^millenniums?|millennia$/i.test( scale ):
            // Millennium (:> 千年紀
            _ms = ( 3.1536 * Math.pow( 10, 10 ) ) * 1000;
            break;
        default:
            console.warn( 'Specified an invalid scale.' );
            _ms = -1;
    }
    result = _ms > 0 ? _ms : false;
    return result;
}


/*
 * Acquire the difference between two dates with the specified scale value (:> 2つの日付の差分を指定したスケール値で取得する
 *
 * @param string date1 (required)
 * @param string date2 (required)
 * @param string scale (optional; defaults to "day")
 * @param bool intval (optional; defaults to false)
 * @param bool absval (optional; defaults to false)
 *
 * @return mixed retval (numeric of diff as dependent to scale; false if failed)
 */
function diffDate( date1, date2, scale, intval, absval ) {
    'use strict';
    function validate( def, val ) {
        return ! isNaN( Date.parse( val ) ) && typeof val === 'string' ? Date.parse( val ) : def;
    }
    let _dt1 = supplement( null, date1, validate ),
        _dt2 = supplement( null, date2, validate );
    if ( ! _dt1 || ! _dt2 ) {
        console.warn( 'Cannot parse date because invalid format or undefined.' );
        return false;
    }
    scale  = supplement( 'day', scale );
    intval = supplement( false, intval );
    absval = supplement( false, absval );
    let diffMS = _dt2 - _dt1,
        coefficient = verifyScale( scale ),
        retval;
    /*
    console.log( 
        new Date( date1 ).toLocaleString( 'en-US', { hour12: false } ),
        ' ～ ',
        new Date( date2 ).toLocaleString( 'en-US', { hour12: false } ),
        [ scale, calc, coefficient, diffMS ]
    );
    */
    if ( absval ) {
        diffMS = Math.abs( diffMS );
    }
    retval = diffMS / coefficient;
    if ( intval ) {
        retval = Math.ceil( retval );
    }
    return retval;
}

/*
 * Get the coordinate X on the timeline of any date (:> 任意の日付のタイムライン上のX座標（横軸座標）を取得する
 *
 * @param string date (required)
 * @param string range_begin (required; begin date at the timeline range)
 * @param string range_end (required; end date at the timeline range)
 * @param string scale (required)
 * @param int size_per_scale (required; pixel value of one timecode on the timeline)
 *
 * @return mixed coordinate_x (integer of X axis coordinate if completed, false if failed)
 */
function getCoordinateX( date, range_begin, range_end, scale, size_per_scale ) {
    'use strict';
    function validateDate( def, val ) {
        return ! isNaN( Date.parse( val ) ) && typeof val === 'string' ? Date.parse( val ) : def;
    }
    let _date  = supplement( null, date, validateDate ),
        _begin = supplement( null, range_begin, validateDate ),
        _end   = supplement( null, range_end, validateDate ),
        _scale = verifyScale( scale ),
        _size  = supplement( null, size_per_scale, function( def, val ) {
            return typeof val === 'number' ? Number( val ) : def;
        }),
        coordinate_x;
    if ( ! _date || ! _begin || ! _end ) {
        console.warn( 'Cannot parse date because invalid format or undefined.' );
        return false;
    }
    if ( ! _scale ) {
        console.warn( 'Specified an invalid scale.' );
        return false;
    }
    if ( ! _size ) {
        console.warn( 'Invalid the size per scale of timeline.' );
        return false;
    }
    
    if ( _date - _begin >= 0 && _end - _date >= 0 ) {
        // When the given date is within the range of timeline_range_begin and timeline_range_end (:> 指定された日付がタイムラインの範囲内にある場合
        coordinate_x = Math.ceil( Math.abs( _date - _begin ) / _scale ) * _size;
    } else {
        console.warn( 'The given date is out of range in timeline' );
        return false;
    }
    return coordinate_x;
}

/*
 * Structure of the DOM element of the timeline container:
 *
 * <{{ Element with selector specified by user }}>
 *   <div class="jqtl-headline"><!--     Headline -->
 *     <h* {{ Title: .timeline-title }}>
 *     <div {{ Meta: .range-meta }}>
 *   </div>
 *   <div class="jqtl-container"><!--    Main Content -->
 *     <div class="jqtl-side-index">{{ Index Contents }}</div>
 *     <div class="jqtl-main">
 *       <div class="jqtl-ruler-top">
 *         <canvas class="jqtl-ruler-bg-top"></canvas>
 *         <div class="jqtl-ruler-content-top">{{ Ruler }}</div>
 *       </div>
 *       <div class="jqtl-event-container">
 *         <canvas class="jqtl-bg-grid"></canvas>
 *         <div class="jqtl-events">{{ Events }}</div>
 *       </div>
 *       <div class="jqtl-ruler-bottom">
 *         <canvas class="jqtl-ruler-bg-bottom"></canvas>
 *         <div class="jqtl-ruler-content-bottom">{{ Ruler }}</div>
 *       </div>
 *     </div>
 *   </div>
 *   <div class="jqtl-footer"><!--       Footer -->
 *     {{ Footer }}
 *   </div>
 * </{{ Element with selector specified by user }}>
 *
 */


/*
 * Render the view of the timeline (:> タイムラインのビューをレンダリングする
 *
 * @param string selector (required; selector name of DOM object for containing the timeline)
 * @param string range_begin (required; begin date at the timeline range)
 * @param string range_end (required; end date at the timeline range)
 * @param string scale (required)
 * @param int size_per_scale (required; pixel value of one timecode on the timeline)
 * @param int rows (required)
 * @param int size_per_row (required; pixel value of one row of the timeline)
 * @param int width (optional; maximum width of visible region of timeline)
 * @param int height (optional; maximun height of visible region of timeline)
 *
 * @return bool
 */
function renderTimelineView( selector, range_begin, range_end, scale, size_per_scale, rows, size_per_row, width, height ) {
    'use strict';
    function validateDate( def, val ) {
        return ! isNaN( Date.parse( val ) ) && typeof val === 'string' ? Date.parse( val ) : def;
    }
    function validateNumeric( def, val ) {
        return typeof val === 'number' ? Number( val ) : def;
    }
    let _begin  = supplement( null, range_begin, validateDate ),
        _end    = supplement( null, range_end, validateDate ),
        _scale  = verifyScale( scale ),
        _rows   = supplement( null, rows, validateNumeric ),
        _size_scale = supplement( null, size_per_scale, validateNumeric ),
        _size_row   = supplement( null, size_per_row, validateNumeric );
    selector = supplement( null, selector );
    width    = supplement( null, width, validateNumeric );
    height   = supplement( null, height, validateNumeric );
    if ( ! selector || ! _begin || ! _end || ! _scale || ! _rows || ! _size_scale || ! _size_row  ) {
        console.warn( 'Failed because exist undefined or invalid arguments.' );
        return false;
    }
    // Calculate the full size of the timeline (:> タイムラインのフルサイズを算出
    let _cell_grids = Math.ceil( ( _end - _begin ) / _scale ),
        _fullwidth  = _cell_grids * _size_scale,
        _fullheight = _rows * _size_row;
    if ( _fullwidth < 2 || _fullheight < 2 ) {
        console.warn( 'The range of the timeline to be rendered is incorrect.' );
        return false;
    }
    // Define visible size according to full size of timeline (:> タイムラインのフルサイズに準じた可視サイズを定義
    let _visible_width  = '100%',
        _visible_height = 'auto';
    if ( width && width > 0 ) {
        _visible_width = ( width <= _fullwidth ? width : _fullwidth ) + 'px';
    }
    if ( height && height > 0 ) {
        _visible_height = ( height <= _fullheight ? height : _fullheight ) + 'px';
    }
    // Render a timeline container (:> タイムラインコンテナの描画
    if ( $(selector).length == 0 ) {
        console.warn( 'Does not exist the element to render a timeline container.' );
        return false;
    }
    
    let _tl_container  = $('<div></div>', { class: 'jqtl-container', style: 'width: '+ _visible_width +'; height: '+ _visible_height +';' }),
        _tl_main       = $('<div></div>', { class: 'jqtl-main' }),
        hide_scrollbar = false;
    console.log( _fullwidth, _fullheight, _visible_width, _visible_height );
    $(selector).empty().css( 'position', 'relative' ); // initialize
    if ( hide_scrollbar ) {
        _tl_container.addClass( 'hide-scrollbar' );
    }
    
    // Create the timeline headline (:> タイムラインの見出しを生成
    let title = 'jQuery Timeline Ver.2.0'; // '(Example Timeline)';
    $(selector).prepend( createHeadline( title, range_begin, range_end ) );
    
    // Create the timeline event container (:> タイムラインのイベントコンテナを生成
    _tl_main.append( createEventContainer( _fullwidth, _fullheight, _rows, _size_row, _cell_grids, _size_scale ) );
    
    // Create the timeline ruler (:> タイムラインの目盛を生成
    _tl_main.prepend( createRuler( _cell_grids, _size_scale, _scale, _begin, scale, 'top', [ 'year', 'month', 'day', 'weekday' ] ) );
    _tl_main.append( createRuler( _cell_grids, _size_scale, _scale, _begin, scale, 'bottom', [ 'day', 'week' ] ) );
    
    // Create the timeline side index (:> タイムラインのサイドインデックスを生成
    let _top_margin    = parseInt( _tl_main.find('.jqtl-ruler-top canvas').attr('height') ) - 1,
        _bottom_margin = parseInt( _tl_main.find('.jqtl-ruler-bottom canvas').attr('height') ) - 1,
        _indices       = [
            'Peter Benjamin Parker', 'Gwendolyn Stacy', 'Mary Jane Watson', 'Harry Osborn', 'May Parker', 'Elizabeth Allan', 'Kenny McFarlane', 'Norman Osborn', 'Otto Gunther Octavius', 'Mayday Parker',
        ];
    _tl_container.prepend( createSideIndex( _top_margin, _bottom_margin, _rows, _size_row, _indices ) );
    
    // Append the timeline container in the timeline element (:> タイムライン要素にタイムラインコンテナを追加
    _tl_container.append( _tl_main );
    $(selector).append( _tl_container );
    
    // Create the timeline footer (:> タイムラインのフッタを生成
    $(selector).append( createFooter() );
    

}


function createHeadline( title, range_begin, range_end ) {
    'use strict';
    function validateDate( def, val ) {
        return ! isNaN( Date.parse( val ) ) && typeof val === 'string' ? Date.parse( val ) : def;
    }
    title = supplement( null, title );
    let _begin  = supplement( null, range_begin, validateDate ),
        _end    = supplement( null, range_end, validateDate ),
        _tl_headline = $('<div></div>', { class: 'jqtl-headline my-1', }),
        _wrapper     = $('<div></div>', { class: 'd-flex justify-content-between align-items-stretch' });
    if ( title ) {
        _wrapper.append( '<h3 class="jqtl-timeline-title">'+ title +'</h3>' );
    }
    if ( _begin && _end ) {
        let _range = new Date( _begin ).toLocaleString( 'en-US', { hour12: false } ) +' ~ '+ new Date( _end ).toLocaleString( 'en-US', { hour12: false } );
        _wrapper.append( '<div class="jqtl-range-meta align-self-center">'+ _range +'</div>' );
    }
    return _tl_headline.append( _wrapper );
}

/*
 * Create the ruler of the timeline (:> タイムラインの目盛を作成する
 *
 * 
 */
function createRuler( grids, size_per_grid, scale, begin, min_scale, position, ruler_line ) {
    'use strict';
    function validatePosition( def, val ) {
        return typeof val === 'string' && val !== 'bottom' ? def : val;
    }
    function validateRulerLine( def, val ) {
        return is_array( val ) ? val : def;
    }
    position   = supplement( 'top', position, validatePosition );
    ruler_line = supplement( [ min_scale ], ruler_line, validateRulerLine );
    
    let _fullwidth  = grids * size_per_grid - 1,
        _fullheight = ruler_line.length * size_per_grid,
        _ruler      = $('<div></div>', { class: 'jqtl-ruler-'+position }),
        _ruler_bg   = $('<canvas width="'+ _fullwidth +'" height="'+ _fullheight +'"></canvas>', { class: 'jqtl-ruler-bg-' + position, }),
        _ruler_body = $('<div></div>', { class: 'jqtl-ruler-content-' + position }),
        ctx_ruler   = _ruler_bg[0].getContext('2d');
    console.log( grids, size_per_grid, scale, begin, min_scale, position, ctx_ruler.canvas.width, ctx_ruler.canvas.height );
    // Draw background of ruler
    ctx_ruler.fillStyle = '#FFF';
    ctx_ruler.fillRect( 0, 0, ctx_ruler.canvas.width, ctx_ruler.canvas.height );
    // Draw stroke of ruler
    ctx_ruler.strokeStyle = 'rgba( 51, 51, 51, 0.1 )';
    ctx_ruler.lineWidth = 1;
    ctx_ruler.filter = 'url(#crisp)';
    ruler_line.forEach(function( line_scale, idx ){
        ctx_ruler.beginPath();
        // Draw rows
        let _line_x = position === 'top' ? 0 : ctx_ruler.canvas.width,
            _line_y = position === 'top' ? size_per_grid * ( idx + 1 ) - 0.5 : size_per_grid * idx + 0.5;
        ctx_ruler.moveTo( 0, _line_y );
        ctx_ruler.lineTo( ctx_ruler.canvas.width, _line_y );
        // Draw cols
        let _line_grids = getGridsPerScale( grids, begin, scale, line_scale );
// console.log( _line_grids, grids, begin, scale, line_scale );
        let _grid_x = 0;
        for ( let _key in _line_grids ) {
            if ( _line_grids[_key] >= grids ) {
                break;
            }
            let _grid_width = _line_grids[_key] * size_per_grid,
                _correction = -1.5;
            _grid_x += _grid_width;
            if ( Math.ceil( _grid_x ) - _correction >= ctx_ruler.canvas.width ) {
                break;
            }
            ctx_ruler.moveTo( _grid_x + _correction, position === 'top' ? _line_y - size_per_grid : _line_y );
            ctx_ruler.lineTo( _grid_x + _correction, position === 'top' ? _line_y : _line_y + size_per_grid );
        }
        ctx_ruler.closePath();
        ctx_ruler.stroke();
        _ruler_body.append( createRulerContent( _line_grids, line_scale, size_per_grid ) );
    });
    
    return _ruler.append( _ruler_bg ).append( _ruler_body );
}

/*
 * 
 */
function getGridsPerScale( grids, begin, scale, target_scale ) {
    let _tmp, i, _scopes = [], _scale_grids = {};
    for ( i = 0; i < grids; i++ ) {
        _tmp = new Date( begin + ( i * scale ) );
        let _y   = _tmp.getFullYear(),
            _mil = Math.ceil( _y / 1000 ),
            _cen = Math.ceil( _y / 100 ),
            _dec = Math.ceil( _y / 10 ),
            _lus = Math.ceil( _y / 5 ),
            _m   = _tmp.getMonth() + 1,
            _w   = _tmp.getWeek(),
            _wd  = _tmp.getDay(), // 0 = Sun, ... 6 = Sat
            _d   = _tmp.getDate(),
            _h   = _tmp.getHours(),
            _min = _tmp.getMinutes(),
            _s   = _tmp.getSeconds();
        _scopes.push({
            millennium: _mil,
            century:    _cen,
            decade:     _dec,
            lustrum:    _lus,
            year:       _y,
            month:      _y +'-'+ _m,
            week:       _y +','+ _w,
            weekday:    _y +'-'+ _m +'-'+ _d +','+ _wd,
            day:        _y +'-'+ _m +'-'+ _d,
            hour:       _y +'-'+ _m +'-'+ _d +' '+ _h,
            minute:     _y +'-'+ _m +'-'+ _d +' '+ _h +':'+ _min,
            second:     _y +'-'+ _m +'-'+ _d +' '+ _h +':'+ _min +':'+ _s,
            datetime:   _tmp.toString(),
        });
    }
//console.log( _scopes );
    _scopes.forEach(function( _scope, idx ) {
        // console.log( _scope[target_scale], idx );
        if ( ! _scale_grids[_scope[target_scale]] ) {
            _scale_grids[_scope[target_scale]] = 1;
        } else {
            _scale_grids[_scope[target_scale]]++;
        }
    });
    
    return _scale_grids;
}

/*
 * 
 */
function createRulerContent( line_scope, line_scale, size_per_grid ) {
    let _ruler_lines = $('<div></div>', { class: 'jqtl-ruler-line-rows', style: 'width:100%;height:'+ size_per_grid +'px;' }),
        _weekday = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
    for ( let _key in line_scope ) {
        let _line = $('<div></div>', { class: 'jqtl-ruler-line-item', style: 'width:'+ (line_scope[_key] * size_per_grid) +'px;height:'+ size_per_grid +'px;line-height:'+ size_per_grid +'px;font-size:'+ (size_per_grid / 2) +'px;' }),
            _ruler_string = '', _data_ruler_item = '', _tmp;
        switch ( line_scale ) {
            case 'millennium':
            case 'century':
            case 'decade':
            case 'lustrum':
                _ruler_string = _key;
                break;
            case 'year':
                _ruler_string = _key;
                break;
            case 'month':
                _ruler_string = new Date( _key ).getMonth() + 1;
                break;
            case 'week':
                _tmp = _key.split(',');
                _ruler_string = _tmp[1];
                _data_ruler_item = _ruler_string;
                break;
            case 'weekday':
                _tmp = _key.split(',');
                _ruler_string = _weekday[_tmp[1]];
                _data_ruler_item = _ruler_string.toLowerCase();
                break;
            case 'day':
                _ruler_string = new Date( _key ).getDate();
                break;
            case 'hour':
                _ruler_string = new Date( _key ).getHours();
                break;
            case 'minute':
                _ruler_string = new Date( _key ).getMinutes();
                break;
            case 'second':
                _ruler_string = new Date( _key ).getSeconds();
                break;
        }
        _data_ruler_item  = line_scale +'-'+ ( _data_ruler_item === '' ? String( _key ) : _data_ruler_item );
        _line.attr( 'data-ruler-item', _data_ruler_item ).html( _ruler_string );
        _ruler_lines.append( _line ).attr( 'data-ruler-scope', line_scale );
    }
    return _ruler_lines;
}


function createEventContainer( width, height, rows, size_per_row, grids, size_per_scale ) {
    'use strict';
    width -= 1;
    let _container   = $('<div></div>', { class: 'jqtl-event-container' }),
        _events_bg   = $('<canvas width="'+ width +'" height="'+ height +'"></canvas>', { class: 'jqtl-bg-grid', }),
        _events_body = $('<div></div>', { class: 'jqtl-events' }),
        ctx_grid     = _events_bg[0].getContext('2d');
    let drawRowRect = function( pos_y, color ) {
        color = supplement( '#FFFFFF', color );
        // console.log( 0, pos_y, _fullwidth, _size_row, color );
        ctx_grid.fillStyle = color;
        ctx_grid.fillRect( 0, pos_y + 0.5, width, size_per_row + 1 );
        ctx_grid.stroke();
    };
    let drawHorizontalLine = function( pos_y, is_dotted ) {
        is_dotted = supplement( false, is_dotted );
        // console.log( pos_y, is_dotted );
        ctx_grid.strokeStyle = 'rgba( 51, 51, 51, 0.1 )';
        ctx_grid.lineWidth = 1;
        ctx_grid.filter = 'url(#crisp)';
        ctx_grid.beginPath();
        if ( is_dotted ) {
            ctx_grid.setLineDash([ 1, 2 ]);
        } else {
            ctx_grid.setLineDash([]);
        }
        ctx_grid.moveTo( 0, pos_y + 0.5 );
        ctx_grid.lineTo( width, pos_y + 0.5 );
        ctx_grid.closePath();
        ctx_grid.stroke();
    };
    let drawVerticalLine = function( pos_x, is_dotted ) {
        is_dotted = supplement( false, is_dotted );
        // console.log( pos_x, is_dotted );
        ctx_grid.strokeStyle = 'rgba( 51, 51, 51, 0.025 )';
        ctx_grid.lineWidth = 1;
        ctx_grid.filter = 'url(#crisp)';
        ctx_grid.beginPath();
        if ( is_dotted ) {
            ctx_grid.setLineDash([ 1, 2 ]);
        } else {
            ctx_grid.setLineDash([]);
        }
        ctx_grid.moveTo( pos_x - 0.5, 0 );
        ctx_grid.lineTo( pos_x - 0.5, height );
        ctx_grid.closePath();
        ctx_grid.stroke();
    };
    let i;
    for ( i = 0; i < rows; i++ ) {
        drawRowRect( ( i * size_per_row ), i % 2 == 0 ? '#FEFEFE' : '#F8F8F8' );
    }
    for ( i = 1; i < rows; i++ ) {
        drawHorizontalLine( ( i * size_per_row ), true );
    }
    for ( i = 1; i < grids; i++ ) {
        drawVerticalLine( ( i * size_per_scale ), false );
    }
    
    return _container.append( _events_bg ).append( _events_body );
}


function createSideIndex( top_margin, bottom_margin, rows, size_per_row, indices ) {
    'use strict';
    let _wrapper = $('<div></div>', { class: 'jqtl-side-index' }),
        _list    = $('<div></div>', { class: 'jqtl-side-index-item' });
    _wrapper.css( 'margin-top', top_margin + 'px' ).css( 'margin-bottom', bottom_margin + 'px' ); //.css( 'grid-template-rows', 'repeat('+ rows +', '+ ( size_per_row + 0.25 ) +')' );
    for ( let i = 0; i < rows; i++ ) {
        let _item = _list.clone().html( indices[i] );
        _wrapper.append( _item );
    }
    _wrapper.find('.jqtl-side-index-item').css( 'height', ( size_per_row + 0.25 ) + 'px' ).css( 'line-height', ( size_per_row + 0.25 ) + 'px' );
    return _wrapper;
}

function createFooter() {
    'use strict';
    let _footer = $('<div></div>', { class: 'jqtl-footer' });
    return _footer.append( '<div class="my-3 text-center">Footer</div>' );
}

