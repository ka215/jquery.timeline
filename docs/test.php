<?php
try {
    // DateTimeImmutableオブジェクトで現在の日時を取得
    $timezone = 'Asia/Tokyo'; // 'UTC'
    $current_datetime = new \DateTimeImmutable( 'now', new DateTimeZone( $timezone ) );
} catch ( Exception $e ) {
    echo $e->getMessage();
    exit( 1 );
}
// タイムライン用設定値
define( 'TIMELINE_RANGE', 3 );
define( 'TIMELINE_ROWS', 5 );
// タイムラインの起点日時を算出して定数として定義
$tldt_start_range = $current_datetime->modify( sprintf( '-%d day', floor( TIMELINE_RANGE / 2 ) ) );
define( 'TIMELINE_START_DATE', $tldt_start_range->format( 'Y-m-d' ) );
// var_dump( $current_datetime, $tldt_start_range );

/*
 * ランダムなタイムライン・イベントを生成
 * 
 * @param int $number (optional; defaults to 10)
 * @param string $start_datetime (optional; defaults to null)
 * @param int $min_interval_minute (optional; defaults to 15)
 * @param int $max_interval_minute (optional; defaults to 60 * 12 = 720)
 * 
 * @return array $events
 */
function generate_random_events( $number = 10, $start_datetime = null, $min_interval_minute = 15, $max_interval_minute = 720 ) {
    $events = [];
    (int) $number = (int) $number > 0 ? $number : 10;
    $_min_date = new \DateTimeImmutable( empty( $start_datetime ) ? TIMELINE_START_DATE : $start_datetime );
    for ( $i = 0; $i < $number; $i++ ) {
        $event_start_date = $_min_date->modify( sprintf( '+%d minutes', mt_rand( 0, 60 * 24 * TIMELINE_RANGE ) ) );
        // $max_date = $_min_date->modify( sprintf( '+%d days', TIMELINE_RANGE ) );
        $_interval_string = sprintf( 'PT%dM', mt_rand( (int) $min_interval_minute, (int) $max_interval_minute ) );
        $elapsed_date = $event_start_date->add( new \DateInterval( $_interval_string ) );
        array_push( $events, [
            'start' => $event_start_date->format( 'Y-m-d H:i' ),
            'end'   => $elapsed_date->format( 'Y-m-d H:i' ),
            'row'   => mt_rand( 1, TIMELINE_ROWS ),
        ] );
    }
    return $events;
}

$event_contents = [
    [ 'label' => 'Lorem ipsum', 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus tortor nec bibendum malesuada. Etiam sed libero cursus, placerat est at, fermentum quam. In sed fringilla mauris. Fusce auctor turpis ac imperdiet porttitor. Duis vel pharetra magna, ut mollis libero. Etiam cursus in leo et viverra. Praesent egestas dui a magna eleifend, id elementum felis maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.' ],
    [ 'label' => 'Ut in facilisis dolor, vitae iaculis dui', 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus tortor nec bibendum malesuada. Etiam sed libero cursus, placerat est at, fermentum quam. In sed fringilla mauris. Fusce auctor turpis ac imperdiet porttitor. Duis vel pharetra magna, ut mollis libero. Etiam cursus in leo et viverra. Praesent egestas dui a magna eleifend, id elementum felis maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.' ],
    [ 'label' => 'Donec vulputate leo eu vestibulum gravida', 'content' => 'Nam dui justo, molestie quis tincidunt sit amet, eleifend porttitor mauris.' ],
    [ 'label' => 'Maecenas sit amet ex vitae mi finibus pharetra', 'content' => 'Morbi elementum urna faucibus tempor lacinia.' ],
    [ 'label' => 'Quisque pharetra purus at risus tempor hendrerit', 'content' => 'Vestibulum sed elit gravida, euismod nunc id, ullamcorper tellus.' ],
    [ 'label' => 'Lorem ipsum', 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus tortor nec bibendum malesuada. Etiam sed libero cursus, placerat est at, fermentum quam. In sed fringilla mauris. Fusce auctor turpis ac imperdiet porttitor. Duis vel pharetra magna, ut mollis libero. Etiam cursus in leo et viverra. Praesent egestas dui a magna eleifend, id elementum felis maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.' ],
    [ 'label' => 'Ut in facilisis dolor, vitae iaculis dui', 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus tortor nec bibendum malesuada. Etiam sed libero cursus, placerat est at, fermentum quam. In sed fringilla mauris. Fusce auctor turpis ac imperdiet porttitor. Duis vel pharetra magna, ut mollis libero. Etiam cursus in leo et viverra. Praesent egestas dui a magna eleifend, id elementum felis maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.' ],
    [ 'label' => 'Donec vulputate leo eu vestibulum gravida', 'content' => 'Nam dui justo, molestie quis tincidunt sit amet, eleifend porttitor mauris.' ],
    [ 'label' => 'Maecenas sit amet ex vitae mi finibus pharetra', 'content' => 'Morbi elementum urna faucibus tempor lacinia.' ],
    [ 'label' => 'Quisque pharetra purus at risus tempor hendrerit', 'content' => 'Vestibulum sed elit gravida, euismod nunc id, ullamcorper tellus.' ],
];

define( 'CURRENT_DIR', str_replace( '/docs', '', dirname( $_SERVER['SCRIPT_FILENAME'] ) ) );
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Test of Custom Datetime</title>
  <!-- Bootstrap 4.1.3 -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <!-- Font Awesome latest 5.3.1 -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
  <!-- jQuery Timeline -->
  <link rel="stylesheet" href="./css/timeline.min.css?v=<?= filemtime( CURRENT_DIR . '/docs/css/timeline.min.css' ); ?>">
  <style>
/* Loading Animation : start */
#jqtl-loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    z-index: 99;
}
.jqtl-loading {
    color: rgb(0,0,0);
    font-family: "Courier New", monospace !important;
    font-size: 48px;
    text-decoration: none;
    font-weight: normal;
    font-style: normal;
    float: left;
    animation-name: bounce_jqtl-loading;
    animation-duration: 2.09s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    transform: scale(.5);
}
#jqtl-loading_1 {
    animation-delay: 0.75s;
}
#jqtl-loading_2 {
    animation-delay: 0.9s;
}
#jqtl-loading_3 {
    animation-delay: 1.05s;
}
#jqtl-loading_4{
    animation-delay: 1.2s;
}
#jqtl-loading_5 {
    animation-delay: 1.35s;
}
#jqtl-loading_6 {
    animation-delay: 1.5s;
}
#jqtl-loading_7 {
    animation-delay: 1.64s;
}
#jqtl-loading_8 {
    animation-delay: 1.79s;
}
#jqtl-loading_9 {
    animation-delay: 1.94s;
}
#jqtl-loading_10 {
    animation-delay: 2.09s;
}
@keyframes bounce_jqtl-loading {
    0% {
        transform: scale(1);
        color: rgb(0,0,0);
    }
    100% {
        transform: scale(.5);
        color: rgb(255,255,255);
    }
}
/* Loading Animation : end */
.jqtl-hide {
    display: none;
    visibility: hidden;
    opacity: 0;
}
.jqtl-align-self-left {
    clear: both;
    float: left;
    display: inline-block;
    text-align: left;
}
.jqtl-align-self-right {
    clear: both;
    float: right;
    display: inline-block;
    text-align: right;
}
.jqtl-headline {
    width: 100%;
    padding-left: 5px;
    padding-right: 5px;
}
.jqtl-timeline-title {
    font-size: 26px;
    color: #333;
}
.jqtl-range-meta {
    font-size: 86%;
    color: #777;
}
.jqtl-range-span {
    position: relative;
    display: inline-block;
    margin-left: 2px;
    margin-right: 0;
    width: 1em;
    height: 1em;
}
.jqtl-range-span:before {
    content: "\2013";
    position: absolute;
    left: 0;
    top: 0;
    font-size: 1em;
    color: #C0C0C0;
}
.jqtl-container {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    border: solid 1px #DDD;
    overflow-x: auto;
    overflow-y: hidden;
    background-color: #FFFFFF;
}
.hide-scrollbar {
    -ms-overflow-style: -ms-autohiding-scrollbar;
}
.hide-scrollbar::-webkit-scrollbar {
    display: none;
}
.jqtl-main {
    position: relative;
}
.jqtl-ruler-top, .jqtl-ruler-bottom {
    position: relative;
    border-left: solid 1px #DDD;
    z-index: 20;
}
.jqtl-ruler-bg-top, .jqtl-ruler-bg-bottom {
    position: relative;
    z-index: 21;
}
.jqtl-ruler-bottom {
    top: 1px;
}
.jqtl-ruler-content-top, .jqtl-ruler-content-bottom {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    z-index: 22;
}
.jqtl-ruler-line-rows {
    position: relative;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
}
.jqtl-ruler-line-rows:nth-child(even) {
    background-color: rgba(247,247,247,.25);
}
.jqtl-ruler-line-item {
    position: relative;
    margin: 0;
    vertical-align: middle;
    text-align: center;
    font-family: "Courier New", monospace !important;
    color: #777;
    overflow: hidden;
    white-space: nowrap;
}
.jqtl-ruler-line-item:nth-child(even) {
    background-color: rgba(240,240,240,.25);
}
.jqtl-event-container {
    position: relative;
    z-index: 1;
}
.jqtl-bg-grid {
    position: relative;
    z-index: 2;
}
.jqtl-events {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
}
.jqtl-side-index {
    position: relative;
    left: 1px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: start;
    align-items: center;
    width: max-content;
    border-right: solid 1px #DDD;
    background-color: rgba(255,255,255,.45);
    z-index: 25;
}
.jqtl-sticky-left {
    position: -webkit-sticky;
    position: sticky;
}
.jqtl-side-index-item {
    display: table-cell;
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
    font-size: 14px;
    vertical-align: middle;
    border-bottom: solid 1px #DDD;
    white-space: nowrap;
}
.jqtl-side-index-item:first-child {
    border-top: solid 1px #DDD;
}
.jqtl-side-index-item:nth-child(even) {
    background-color: rgba(247,247,247,.25);
}
.jqtl-footer {
    margin: 15px auto;
    padding: 0;
    width: 100%;
}
.jqtl-footer-content {
    clear: both;
    text-align: center;
}
/* Custom for DEMO: start */
.jqtl-ruler-line-item[data-ruler-item^="year-"] {
    text-align: left;
    padding-left: 2em;
}
.jqtl-ruler-line-item[data-ruler-item^="month-"] {
    text-align: left;
    padding-left: 4em;
}
/*
.jqtl-ruler-line-item[data-ruler-item^="week-"]:before {
    content: '第';
}
*/
.jqtl-ruler-line-item[data-ruler-item^="week-"]:after {
    content: '週';
}
.jqtl-ruler-line-item[data-ruler-item^="weekday-"][data-ruler-item$=",6"] {
    background-color: rgba(51,51,247,.08);
}
.jqtl-ruler-line-item[data-ruler-item^="weekday-"][data-ruler-item$=",0"] {
    background-color: rgba(247,51,51,.08);
}
.jqtl-side-index-item a {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    padding-right: 5px;
    text-decoration: none;
}
.avatar-icon {
    display: inline-block;
    width: 36px;
    height: 36px;
    margin-top: -3px;
    margin-right: 10px;
}
.avatar-icon img {
    width: 100%;
    height: 100%;
}
/* Custom for DEMO: end */
  </style>
</head>
<body>
<div class="container-fluid">

  <nav class="content-header" hidden>

    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="https://github.com/ka215/jquery.timeline"><i class="fas fa-plug"></i> jQuery Timeline</a></li>
      <li class="breadcrumb-item active"><a href="./index.html"><i class="far fa-check-circle"></i> Bar type</a></li>
      <li class="breadcrumb-item"><a href="./index2.html">Point type</a></li>
      <li class="breadcrumb-item"><a href="./index3.html">Multi Languages</a></li>
    </ol>

  </nav>
  <!-- /.content-header -->

  <section class="row">

    <div class="col-12">
    
<!-- /*
      * Structure of the DOM element of the timeline container:
      *
      * <{{ Element with selector specified by user }}>
      *   <div class="jqtl-headline"><!--     Headline - ->
      *     <h* {{ Title: .timeline-title }}>
      *     <div {{ Meta: .range-meta }}>
      *   </div>
      *   <div class="jqtl-container"><!--    Main Content - ->
      *     <div class="jqtl-ruler-top">
      *       <canvas class="jqtl-ruler-bg-top"></canvas>
      *       <div class="jqtl-ruler-content-top">{{ Ruler }}</div>
      *     </div>
      *     <div class="jqtl-event-container">
      *       <canvas class="jqtl-bg-grid"></canvas>
      *       <div class="jqtl-events">{{ Events }}</div>
      *       <div class="jqtl-side-index">{{ Index Contents }}</div>
      *     </div>
      *     <div class="jqtl-ruler-bottom">
      *       <canvas class="jqtl-ruler-bg-bottom"></canvas>
      *       <div class="jqtl-ruler-content-bottom">{{ Ruler }}</div>
      *     </div>
      *   </div>
      *   <div class="jqtl-footer"><!--       Footer - ->
      *     {{ Footer }}
      *   </div>
      * </{{ Element with selector specified by user }}>
      *
      */ -->
        <div id="my-timeline"></div>
        
        <div id="my-timeline2"></div>
        
    </div>
    <!-- /.content-main -->

    <div class="col-lg-6 col-md-12" hidden>

      <div class="card mb-3">
        <div class"card-block">
          <h5><i class="fa fa-cog"></i> Timeline Configuration</h5>
          <div class="card-text">
            <!-- configuration content -->
            
          </div>
        </div>
      </div>
      <!-- /.card -->
    </div>
    <!-- /.col -->

  </section>
  <!-- /.row -->

</div>
<!-- /.container-fluid -->

<div class="modal fade" id="myModal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="timeline-event-view"></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<!-- /.modal -->

<!-- REQUIRED JS SCRIPTS -->

<!-- jQuery (latest 3.3.1) -->
<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<!-- Bootstrap 4.1.3 -->
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<!-- custom_datetime.js -->
<script src="../src/custom_datetime.js?v=<?= filemtime( CURRENT_DIR . '/src/custom_datetime.js' ); ?>"></script>
<!-- local scripts -->
<script>
const date1 = new Date();
//console.log( date1.toLocaleString() );

const dates = [
    '2018年9月27日 2:00:00', // ja-JP  -> invalid
    '2018/9/27 2:00:00', // ja-JP
    '2018/9/27 上午2:00:00', // zh-CN  -> invalid
    '2018. 9. 27. 오전 2:00:00', // ko-krsort  -> invalid
    '9/27/2018, 2:00:00 AM', // en-US
    '27/09/2018, 02:00:00', // en-GB  -> invalid
    '27.09.2018, 2:00:00', // ru-RU  -> invalid
    '27/9/2018, 2:00:00 am', // hi-IN  -> invalid
    '2018/09/27 02:00:00',
    '2018/09/0102:00:00', //  -> invalid
    '2018-9-27 2:00:00',
    '20180927T020000+0900', // ISO-8601  -> invalid
    '2018-09-27T02:00:00+09:00', // RFC 3339
    '2018/9/27T2:00:00+0900',
    '2018/9/27 2:00:00+0900',
    '2018/9/27 2:00:00 +0900',
    'Thu, 27 Sep 18 02:00:00 +0900', // RFC 882/1036
    'Thu, 27 Sep 2018 02:00:00 +0900', // RFC 1123/2822
    'Thu Sep 27 02:00:00 +0900 2018',
    'Thu Sep 27 02:00:00 UTC+0900 2018',
    'Thu Sep 27 2018 02:00:00 GMT+0900',
    'Thu Sep 27 2018 02:00:00 GMT+0900 (Japan Standard Time)',
    'Thursday, 27-Sep-18 02:00:00 JST', // RFC 850  -> invalid
    'Wednesday, 26-Sep-18 17:00:00 GMT' // RFC 850
];
dates.forEach(function( dt ){
    let res = isNaN( Date.parse( dt ) ) ? '"'+dt+'" Cannot parse date because invalid format.' : Date.parse( dt );
    // console.log( res );
});

const test_date = [
    { date1: date1.toLocaleString(), date2: '2018/9/26 02:00:00' },
    { date1: date1.toLocaleString(), date2: '2018/12/31 23:59:59' },
    { date1: '166', date2: '198' },
    { date1: '0079/4/3', date2: '0083/7/9' },
    { date1: '2239/5/18', date2: '3434/6/6' },
    { date1: '65536/12/31', date2: '186743/3/5' },
    { date1: '1974/02/15 06:12:34', date2: date1.toLocaleString() },
    { date1: '1980/9/26 12:34:56', date2: date1.toLocaleString() },
],
test_scales = [
    //'', 1, false, null, 'millisec', 'millisecond', 'milliseconds', 'day', 'millenniums',
    'second', 'minute', 'hour', 'day', 'week', 'month', 'year', 'lustrum', 'decade', 'century', 'millennium',
    //'seconds', 'minutes', 'hours', 'days', 'weeks', 'months', 'years', 'lustrum', 'decennium', 'century', 'millennia',
];

/* * /
test_date.forEach(function( date_set ){
    console.info( date_set.date1, ' ～ ', date_set.date2 );
    test_scales.forEach(function( scale ){
        console.log( diffDate( date_set.date1, date_set.date2, scale, false, false ), scale );
    });
});
/ * */

/*
test_scales.forEach(function( scale ){
    console.log( verifyScale( scale ) );
});
*/

//var _x = getCoordinateX( date1.toLocaleString(), '2018/10/1 00:00:00', '2018/10/31 23:59:59', 'day', 5 ) || 0;
//console.log( _x + 'px' );

//console.log( renderTimelineView( '#my-timeline', '2018/10/1 00:00:00', '2018/12/31 23:59:59', 'day', 30, 10, 50, '100%', '100%' ) );

$('#my-timeline').timeline({
    startDatetime : '2018-10-1',
    endDatetime   : '2018-12-31',
    showHeadline  : true,
    headline      : {
        display   : true,
        title     : 'jQuery Timeline Ver.2.0',
        range     : true,
        locale    : 'ja-JP-u-ca-japanese',
        format    : { timeZone: 'Asia/Tokyo', hour12: false, era: 'long', year: 'numeric', month: 'numeric', day: 'numeric' }
    },
    footer        : {
        display   : true,
        content   : '<small>&copy; MAGIC METHODS 2018</small>',
        range     : true,
        locale    : 'ja-JP-u-ca-japanese',
        format    : { timeZone: 'Asia/Tokyo', hour12: false, era: 'long', year: 'numeric', month: 'numeric', day: 'numeric' }
    },
    sidebar       : {
        sticky : true,
        list   : [ 
            '<a href="#"><span class="avatar-icon"><img src="imgs/thumb_002.png" class="rounded"></span> "Tony" Stark</a>', 
            '<a href="#"><span class="avatar-icon"><img src="imgs/thumb_003.png" class="rounded"></span> Steve Rogers</a>', 
            '<a href="#"><span class="avatar-icon"><img src="imgs/thumb_004.png" class="rounded"></span> Thor</a>', 
            '<a href="#"><span class="avatar-icon"><img src="imgs/thumb_005.png" class="rounded"></span> Hulk</a>', 
            '<a href="#"><span class="avatar-icon"><img src="imgs/thumb_006.png" class="rounded"></span> Natasha Romanoff</a>', 
            '<a href="#"><span class="avatar-icon"><img src="imgs/thumb_007.png" class="rounded"></span> Stephen Strange</a>', 
            '<a href="#"><span class="avatar-icon"><img src="imgs/thumb_008.png" class="rounded"></span> Peter Quill</a>', 
            '<a href="#"><span class="avatar-icon"><img src="imgs/thumb_013.png" class="rounded"></span> T\'Challa</a>', 
            '<a href="#"><span class="avatar-icon"><img src="imgs/thumb_001.png" class="rounded"></span> Peter Parker</a>', 
            '<a href="#"><span class="avatar-icon"><img src="imgs/thumb_015.png" class="rounded"></span> Wanda Maximoff</a>', 
/*
            '<a href="#"><span class="avatar-icon"><img src="imgs/thumb_018.png" class="rounded"></span> Vision</a>', 
            '<a href="#"><span class="avatar-icon"><img src="imgs/thumb_009.png" class="rounded"></span> Groot</a>', 
            '<a href="#"><span class="avatar-icon"><img src="imgs/thumb_010.png" class="rounded"></span> Rocket Raccoon</a>', 
            '<a href="#"><span class="avatar-icon"><img src="imgs/thumb_011.png" class="rounded"></span> Gamora</a>', 
            '<a href="#"><span class="avatar-icon"><img src="imgs/thumb_012.png" class="rounded"></span> Drax the Destroyer</a>', 
            '<a href="#"><span class="avatar-icon"><img src="imgs/thumb_014.png" class="rounded"></span> "Bucky" Barnes</a>', 
            '<a href="#"><span class="avatar-icon"><img src="imgs/thumb_016.png" class="rounded"></span> Samuel Wilson</a>', 
            '<a href="#"><span class="avatar-icon"><img src="imgs/thumb_017.png" class="rounded"></span> James "Rhodey" Rhodes</a>', 
*/
        ]
    },
    ruler         : {
        top    : {
            lines      : [ 'year', 'month', 'week', 'day', 'weekday' ],
            height     : 26,
            fontSize   : 13,
            color      : '#777',
            background : '#FFF',
            locale     : 'ja-JP',
            format     : { timeZone: 'Asia/Tokyo', hour12: false, year: 'numeric', month: 'long', weekday: 'short', hour: '2-digit', minute: '2-digit', second: '2-digit' },
        },
        // bottom : {}
    },
    
    debug         : true
})
//.timeline('initialized', function(elem,opt){ alert( 'initialized!' ); } )
//.timeline('initialized', function(elem,opt){ console.log( 'callback2:', elem, opt ); } )
//.timeline('destroy')
//.timeline('initialized', function(elem,opt){ console.log( 'callback3:', elem, opt ); } )
.css( 'border', 'solid 3px blue' )
//.css({ width: '100%', height: '200px' })
;

$('#my-timeline')
//.timeline('initialized', function(elem,opt){ alert( '!!!' ); } )
.timeline('hide')
.timeline('show')
.css( 'borderColor', 'red' )
;

console.log( $('#my-timeline').timeline('getOptions') );

//$('#my-timeline2').timeline()
//.timeline('initialized', function(elem,opt){ alert( '#my-timeline2' ); } )
//;

</script>
</body>
</html>
