<?php
/**
 * jQuery.Timeline v2.0.x TESTER with Sloth
 *
 * Modified: July 15, 2020
 **/
// Declare Const & Local Valiables
define( 'DOCROOT', $_SERVER['DOCUMENT_ROOT'] );
define( 'CURRENT_DIR', dirname( $_SERVER['SCRIPT_NAME'] ) );
define( 'ENV', preg_match( '/\A(127.0.0.|::)[0-9]{1,3}\z/', $_SERVER['SERVER_ADDR'] ) === 1 ? 'local' : 'public' );
$args = [
    'ltz'  => [
        'filter' => FILTER_VALIDATE_BOOLEAN,
        'flags'  => FILTER_NULL_ON_FAILURE,
    ],
    'mode' => [
        'filter' => FILTER_VALIDATE_BOOLEAN,
        'flags'  => FILTER_NULL_ON_FAILURE,
    ],
];
$params = filter_input_array( INPUT_GET, $args );
define( 'USE_LOCAL_TIMEZONE', isset( $params['ltz'] ) ? (bool) $params['ltz'] : false );
define( 'DEBUG_MODE', isset( $params['mode'] ) ? (bool) $params['mode'] : false );

try {
    // DateTimeImmutableオブジェクトで現在の日時を取得
    $timezone = USE_LOCAL_TIMEZONE ? date_default_timezone_get() : 'UTC';
    $current_datetime = new \DateTimeImmutable( 'now', new \DateTimeZone( $timezone ) );
} catch ( Exception $e ) {
    echo $e->getMessage();
    exit( 1 );
}

require './resources.php';

if ( DEBUG_MODE ) {
    // var_dump('debug mode!');
    $jqtl_script   = @file_get_contents( DOCROOT . CURRENT_DIR .'/../dist/jquery.timeline.js' );
    $version       = preg_match( '/Version:\s(.*)\n/', $jqtl_script, $matches ) ? $matches[1] : '(unknown)';
    $tester_assets = [
        'css' => asset_source( '/dist/jqtl-tester.css' ),
        'js'  => asset_source( '/dist/jqtl-tester.js' )
    ];
} else {
    $version       = $cdn_jqtl['latest']['version'];
    $tester_assets = [
        'css' => '/webpack/dist/style.css',
        'js'  => '/webpack/dist/app.js'
    ];
}

define( 'TIMELINE_VERSION', $version );
/*
var_dump(CURRENT_DIR);
var_dump(ENV);
var_dump(DEBUG_MODE);
var_dump(TIMELINE_VERSION);
*/
$auto_datetime = true;
$default_timeline_span = 3;
$default_timeline_rows = 7;
$_start_datetime = $current_datetime->modify( sprintf( '-%d day', floor( $default_timeline_span / 2 ) ) );
$date_range = [
    'start' => $_start_datetime->format( 'Y-m-d' ),
    'end'   => null
];

define( 'DUMMY_TEXT', $dummy_text );

// locale
$locales = [];
if ( isset( $_SERVER['HTTP_ACCEPT_LANGUAGE'] ) ) {
    foreach ( explode( ',', $_SERVER['HTTP_ACCEPT_LANGUAGE'] ) as $_locale ) {
        $_delmit = strpos( $_locale, ';' );
        $locales[] = $_delmit !== false ? substr( $_locale, 0, $_delmit ) : $_locale;
    }
} else {
    $locales[] = 'en-US';
}
$default_locale = $locales[0];

// Utility

/**
 * Generate random events (:> ランダムなタイムライン・イベントを生成
 *
 * @param string $start_datetime (reqired)
 * @param int $number (optional; defaults to 10 events)
 * @param int $timeline_span (optional; defaults to 3 days)
 * @param int $timeline_rows (optional; defaults to 5)
 * @param int $min_interval_minute (optional; defaults to 15 minutes)
 * @param int $max_interval_minute (optional; defaults to 60 * 12 = 720 minutes)
 *
 * @return array $events
 */
function generate_random_events( $start_datetime, $number = 10, $timeline_span = 3, $timeline_rows = 5, $min_interval_minute = 15, $max_interval_minute = 720 ) {
    $events = [];
    $number = (int) $number > 0 ? (int) $number : 10;
    $_min_date = new \DateTimeImmutable( $start_datetime );
    $base_text = DUMMY_TEXT;
    $text_seeds = explode( ' ', str_replace( [ "\r", "\n" ], '', $base_text ) );
    for ( $i = 0; $i < $number; $i++ ) {
        $event_start_date = $_min_date->modify( sprintf( '+%d minutes', mt_rand( 0, 60 * 24 * $timeline_span ) ) );
        $_interval_string = sprintf( 'PT%dM', mt_rand( (int) $min_interval_minute, (int) $max_interval_minute ) );
        $elapsed_date = $event_start_date->add( new \DateInterval( $_interval_string ) );
        $_sdt = $event_start_date->format( 'Y-m-d H:i' );
        $_edt = $elapsed_date->format( 'Y-m-d H:i' );
        $_erw = mt_rand( 1, $timeline_rows );
        $_label_seeds = array_rand( array_flip( $text_seeds ), 16 );
        $_label_hash  = hash( 'crc32b', "$_sdt$_edt$_erw" );
        $_label_elms  = [];
        foreach ( str_split( $_label_hash ) as $_str ) {
            $_label_elms[] = $_label_seeds[hexdec( strtolower( $_str ) )];
        }
        $_body_seeds = array_rand( array_flip( $text_seeds ), 16 );
        $_body_hash  = hash( 'sha1', "$_sdt$_edt$_erw" );
        $_body_elms  = [];
        foreach ( str_split( $_body_hash ) as $_str ) {
            $_body_elms[] = $_body_seeds[hexdec( strtolower( $_str ) )];
        }
        // $_bgcolor = '#' . substr( md5( mt_rand() ), 0, 6 );
        $colorset = randColorSet( 141 );
        array_push( $events, [
            'start'    => $_sdt,
            'end'      => $_edt,
            'row'      => $_erw,
            'bgColor'  => $colorset['bg'],
            'color'    => $colorset['text'],
            'label'    => ucfirst( str_replace( [ '.', ',' ], '', trim( implode( ' ', $_label_elms ) ) ) ),
            'content'  => ucfirst( trim( implode( ' ', $_body_elms ), " ." ) ) . '.',
        ] );
    }
    return $events;
}

/**
 * Retrieve a color set of random background color and text color.
 * It is optimized for a text color with high readability according to the luminance of the background color.
 *
 * @param int $luminance (optional; Luminance as a branch point of light and darkness is in the range of 0 to 255)
 *
 * @return array $colorset (has keys of "bg" and "text")
 */
function randColorSet( $luminance = 128 ) {
    $rgb = [ 'r' => 0, 'g' => 0, 'b' => 0 ];
    $colorset = [ 'bg' => '#', 'text' => '#FFFFFF' ];

    foreach( $rgb as $_key => $_val ) {
        $rgb[$_key] = mt_rand( 0, 255 );
        $colorset['bg'] .= str_pad( dechex( $rgb[$_key] ), 2, '0', STR_PAD_LEFT );
    }
    $yuv = 0.299 * $rgb['r'] + 0.587 * $rgb['g'] + 0.114 * $rgb['b'];
    if ( $yuv >= $luminance ) {
        $colorset['text'] = '#101010';
    }
    return $colorset;
}


/**
 *
 */
function asset_source( $relative_file_path ) {
    $relative_path = CURRENT_DIR .'/'. trim( $relative_file_path, '/' );
    if ( @file_exists( DOCROOT . $relative_path ) ) {
        $source_url = $relative_path .'?fh='. sha1( filemtime( DOCROOT . $relative_path ) );
    } else {
        $source_url = $relative_path;
    }
    return $source_url;
}

// Catch requests
$jquery_ver = filter_input( INPUT_POST, 'jquery_ver' ) ?: '3.4.1';
$bootstrap_ver = filter_input( INPUT_POST, 'bootstrap_ver' ) ?: '';
$user_locale = filter_input( INPUT_POST, 'user_locale' ) ?: $default_locale;
$use_bootstrap = ! empty( $bootstrap_ver );
$is_point_type = filter_input( INPUT_POST, 'timeline_type_point' ) ?: 0;
$timeline_type = filter_input( INPUT_POST, 'timeline_type' ) ?: 'bar';
$use_fontawesome = true;
$action = filter_input( INPUT_POST, 'action' ) ?: filter_input( INPUT_GET, 'action' ) ?: false;
$is_ruler_colored = false;
$ruler_top_color = randColorSet( 141 );
$ruler_bottom_color = randColorSet( 141 );
$multiple_timeline = filter_input( INPUT_POST, 'multiple_timeline' ) ?: false;

// Plugin Default Settings
$defaults = [
    'type'          => preg_match( '/¥A(bar|point|mixed)¥z/u', $timeline_type ) !== false ? $timeline_type : 'bar',
    'startDatetime' => $date_range['start'],
    'endDatetime'   => $date_range['end'],
    'scale'         => 'day',
    'rows'          => 'auto',
    'rowHeight'     => 40,
    'minGridSize'   => 48,
    'headline'      => [
        'display'   => true,
        'title'     => '<i class="far fa-smile-wink txt-sec"></i> Welcome to the jQuery.Timeline!',
        'range'     => true,
        'locale'    => $user_locale,
        'format'    => [
            'timeZone' => $timezone,
        ],
    ],
    'footer'        => [
        'display'   => true,
        'content'   => '<p class="txt-gray fnt-sm" style="user-select: none;"><i class="fas fa-dragon mr1" _old="fa-registered"></i>jQuery.Timeline '. date( 'Y' ) .'</p>',
        'range'     => true,
        'locale'    => $user_locale,
        'format'    => [
            'timeZone' => $timezone,
        ],
    ],
    'sidebar'       => [
        'sticky'    => true,
        'list'      => [
            '<span class="px1">Item of 1st row</span>',
            '<span class="px1">Item of 2nd row</span>',
            '<span class="px1">Item of 3rd row</span>',
            '<span class="px1">Item of 4th row</span>',
            '<span class="px1">Item of 5th row</span>',
        ],
    ],
    'ruler'         => [
        'top'       => [
            // 'lines'      => [ 'millennium', 'century', 'decade', 'lustrum', 'year', 'month', 'week', 'day', 'weekday', 'hour', 'minute', 'second' ],
            'lines'      => [ 'year', 'month', 'day', 'weekday' ],
            'height'     => 26,
            'fontSize'   => 13,
            'color'      => $is_ruler_colored ? $ruler_top_color['text'] : '#777777',
            'background' => $is_ruler_colored ? $ruler_top_color['bg'] : '#FFFFFF',
            'locale'     => $user_locale,
            'format'     => [
                'timeZone' => $timezone, 'hour12' => false, 'year' => 'numeric', 'month' => 'long', 'day' => 'numeric', 'weekday' => 'short',
            ],
        ],
        'bottom'    => [
            'lines'      => [ 'week', 'year' ],
            'color'      => $is_ruler_colored ? $ruler_bottom_color['text'] : '#777777',
            'background' => $is_ruler_colored ? $ruler_bottom_color['bg'] : '#FFFFFF',
            'locale'     => $user_locale,
            'format'     => [
                'timeZone' => $timezone, 'hour12' => false, 'year' => 'numeric', 'week' => 'ordinal',
            ],
        ]
    ],
    'rangeAlign'    => 'begin',
    'eventMeta'     => [
        'display'        => false,
        'scale'          => 'day',
        'locale'         => $user_locale,
        'format'         => [
            'timeZone' => $timezone,
        ],
        'content'        => '',
    ],
    'reloadCacheKeep' => false,
    'zoom'          => false,
    'debug'         => false,
];

if ( $action ) {
    header( 'Access-Control-Allow-Origin: *' );
    //echo stripcslashes( json_encode( $defaults ) );
    echo json_encode( $defaults );
} else {
    include( $_SERVER['DOCUMENT_ROOT'] . CURRENT_DIR .'/'. 'template2.php' );
}
