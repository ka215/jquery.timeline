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
 * Render the container has timeline grids (:> タイムライングリッド・コンテナをレンダリングする
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
function renderTimelineGrids( selector, range_begin, range_end, scale, size_per_scale, rows, size_per_row, width, height ) {
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
    let _tl_headline   = $('<div></div>', { class: 'jqtl-headline', }),
        _tl_container  = $('<div></div>', { class: 'jqtl-container', style: 'width: '+ _visible_width +'; height: '+ _visible_height +';' }),
        _tl_scope      = $('<canvas width="'+ _fullwidth +'" height="'+ _size_scale +'px"></canvas>', { class: 'jqtl-scope', }),
        _tl_background = $('<canvas width="'+ _fullwidth +'" height="'+ _fullheight +'"></canvas>', { class: 'jqtl-bg-grid', });
    console.log( _fullwidth, _fullheight, _visible_width, _visible_height );
    $(selector).empty(); // initialize
    // Create a timeline headline (:> タイムライン見出しを生成
    let _title = '(title)', // 'Example Timeline',
        _range = new Date( range_begin ).toLocaleString( 'en-US', { hour12: false } ) +' ~ '+ new Date( range_end ).toLocaleString( 'en-US', { hour12: false } );
    _tl_headline.html( '<div class="d-flex justify-content-between align-items-stretch"><h3 class="timeline-title">'+ _title +'</h3><div class="range-meta align-self-center">'+ _range +'</div></div>' );
    $(selector).prepend( _tl_headline );
    
    // Create a timeline scope (:> タイムラインの目盛を生成
    let ctx_scope = _tl_scope[0].getContext('2d');
    let drawScope = function( grids, scale, begin, min_scale ) {
        console.log( grids, scale, begin, min_scale, ctx_scope.canvas.width, ctx_scope.canvas.height );
        ctx_scope.font = "10px sans-serif";
        ctx_scope.fillStyle = 'blue';
        let _cdt, _year, _month, _week, _date, _hour, _minute, _second;
        for ( let i = 0; i < grids; i++ ) {
            _cdt    = new Date( begin + ( i * scale ) );
            _year   = _cdt.getFullYear();
            _month  = _cdt.getMonth() + 1;
            _week   = _cdt.getDay(); // 0 = Sun, ...
            _date   = _cdt.getDate();
            _hour   = _cdt.getHours();
            _minute = _cdt.getMinutes();
            _second = _cdt.getSeconds();
console.log( _year, _month, _week, _date, _hour, _minute, _second );
            ctx_scope.fillText( _date, ( i * _size_scale ), 0 );
        }
        
        ctx_scope.fillStyle = '#FFF';
        ctx_scope.fillRect( 0, 0, ctx_scope.canvas.width, ctx_scope.canvas.height );
        ctx_scope.strokeStyle = 'rgba( 51, 51, 51, 0.1 )';
        ctx_scope.lineWidth = 1;
        ctx_scope.filter = 'url(#crisp)';
        
        ctx_scope.beginPath();
        ctx_scope.moveTo( 0, ctx_scope.canvas.height - 0.5 );
        ctx_scope.lineTo( ctx_scope.canvas.width, ctx_scope.canvas.height - 0.5 );
        
        for ( let j = 1; j < grids; j++ ) {
            ctx_scope.moveTo( ( j * _size_scale ) - 0.5, ctx_scope.canvas.height - _size_scale );
            ctx_scope.lineTo( ( j * _size_scale ) - 0.5, ctx_scope.canvas.height );
        }
        ctx_scope.closePath();
        
        ctx_scope.stroke();
    };
    
    
    // Create a timeline grid (:> タイムライングリッドを生成
    let ctx_grid = _tl_background[0].getContext('2d');
    let drawRowRect = function( pos_y, color ) {
        color = supplement( '#FFF', color );
        // console.log( 0, pos_y, _fullwidth, _size_row, color );
        ctx_grid.fillStyle = color;
        ctx_grid.fillRect( 0, pos_y + 0.5, _fullwidth, _size_row + 1 );
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
        ctx_grid.lineTo( _fullwidth, pos_y + 0.5 );
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
        ctx_grid.lineTo( pos_x - 0.5, _fullheight );
        ctx_grid.closePath();
        ctx_grid.stroke();
    };
    
    // Draw to canvas
    let i;
    for ( i = 0; i < _rows; i++ ) {
        drawRowRect( ( i * _size_row ), i % 2 == 0 ? '#FEFEFE' : '#F8F8F8' );
    }
    for ( i = 1; i < _rows; i++ ) {
        drawHorizontalLine( ( i * _size_row ), true );
    }
    for ( i = 1; i < _cell_grids; i++ ) {
        drawVerticalLine( ( i * _size_scale ), false );
    }
    drawScope( _cell_grids, _scale, _begin, scale );
    
    _tl_container.empty(); // initialize
    _tl_container.append( _tl_scope ).append( _tl_background );
    $(selector).append( _tl_container );

}
