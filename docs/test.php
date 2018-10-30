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
  <link rel="stylesheet" href="../src/timeline_v2.css?v=<?= filemtime( CURRENT_DIR . '/src/timeline_v2.css' ); ?>">
  <!-- link rel="stylesheet" href="../src/timeline_v2_demo.css?v=<?= filemtime( CURRENT_DIR . '/src/timeline_v2_demo.css' ); ?>" -->
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
    
        <div id="my-timeline" class="test-timeline test-1">
          <ul class="timeline-events">
            <li>無効なイベント</li>
            <li data-timeline-node="">無効なイベント・その２</li>
            <li data-timeline-node="{}">無効なイベント・その３</li>
            <li data-timeline-node="{start:'2018-10-18 9:50',end:'2018-10-18 19:15',content:'始点と終点がレンジ外（タイムライン範囲より前）'}">レンジ外のイベント</li>
            <li data-timeline-node="{eventId:'7',start:'2018-10-26 5:35',end:'2018-10-26 6:15'}"><label class="event-label">ラベルのみ</label></li>
            <li data-timeline-node="{eventId:0,start:'2018-10-26 9:50',end:'2018-10-26 18:50'}"><div class="event-content">本文のみ</div></li>
            <li data-timeline-node="{eventId:1,start:'2018-10-26 00:00:00',end:'2018-10-31 23:59:59',row:2,label:'属性パラメータのラベル',content:'属性パラメータの本文',bgColor:'#CFC',color:'#33E'}">終点がレンジ外</li>
            <li data-timeline-node="{eventId:4,start:'2018-10-25 12:00:00',end:'2018-10-26 22:59:59',row:3,bgColor:'#CCF',color:'#E3E'}"><p class="event-label">子要素のラベル</p><p class="event-content">子要素の本文</p></li>
            <li data-timeline-node="{eventId:null,start:'2018-10-26 10:03:48',end:'2018-10-26 13:21:16',row:4,label:'属性パラメータのラベル',content:'属性パラメータの本文',extend:'{toggle:\'popover\',placement:\'top\',trigger:\'hover\'}'}"><p class="event-label">Bootstrap Popoverのサンプル</p><span class="event-label">子要素の"重複"ラベル</span><p class="event-content">Bootstrap Popoverへの対応がちょっとだけ簡単になった</p><div class="event-content">子要素の"重複"本文</div></li>
            <li data-timeline-node="{start:'2018-10-01 00:00:00',end:'2018-10-24 23:59:59',row:4,extend:'{toggle:\'modal\',target:\'#myModal\'}'}"><h4 class="event-label">Bootstrap Modalのサンプル1</h4><p class="event-content">また、このイベントは始点がレンジ外でもあるのだ。</p></li>
            <li data-timeline-node="{start:'2018-11-01 00:00:00',end:'2018-11-9 23:59:59',row:5,callback:'$(\'#myModal\').modal()'}"><h4 class="event-label">Bootstrap Modalのサンプル2</h4><p class="event-content">また、このイベントは始点がレンジ外でもあるのだ。</p></li>
            <li data-timeline-node="{eventId:1,start:'2018-10-28 5:48',end:'2018-10-28 6:37',row:6,callback:'$(document).localFunction( event )'}"><div class="event-content">始点がレンジ外（タイムライン範囲より後）</div></li>
            <li data-timeline-node="{start:'2018-10-15 13:05',end:'2018-11-2 16:27',row:7,image:'imgs/thumb_014.png',rangeMeta:'個別のmeta'}"><div class="event-content">画像つきイベント</div></li>
            <li data-timeline-node="{start:'0079-10-18 9:50',end:'0079-12-18 19:15',content:'サンプル'}">1年戦争勃発</li>
            <li data-timeline-node="{id:14,start:'2018-10-15 10:50',content:'サイズ指定は「large」',size:'large',relation:{before:-1}}">始点のみ設定されたイベント</li>
            <li data-timeline-node="{id:15,start:'2018-10-17 13:45',row:2,content:'サイズ指定は「normal」',size:'normal',relation:{before:16,curve:'lb'}}">ポインター用イベント（1）</li>
            <li data-timeline-node="{id:16,start:'2018-10-21 10:50',row:2,content:'サイズ指定は「small」',size:'small',relation:{before:15,after:-1,lineSize:8,color:'red'}}">ポインター用イベント（2）</li>
            <li data-timeline-node="{id:17,start:'2018-10-23 3:45',row:3,content:'サイズ指定はピクセル値で「4」',size:4,bdColor:'blue',relation:{before:16,lineColor:'blue',size:1}}">ポインター用イベント（3）</li>
            <li data-timeline-node="{id:18,start:'2018-10-24 0:00',row:4,content:'サイズ指定はなし',relation:{before:17,curve:'lb'}}">ポインター用イベント（4）</li>
          </ul>
        </div>
        
        <div id="my-timeline2" class="test-timeline test-2"></div>
        
        <div class="my-timeline"></div>
        <div class="my-timeline"></div>
        
    </div>
    <!-- /.content-main -->

    <div class="col-lg-6 col-md-12">

      <div class="card mb-3">
        <div class"card-block">
          <h5><i class="fa fa-cog"></i> Test Methods </h5>
          <div class="card-text">
            <!-- configuration content -->
            
          </div>
        </div>
      </div>
      <!-- /.card -->
    </div>
    <!-- /.col -->

    <div class="col-lg-6 col-md-12">

      <div class="card mb-3">
        <div class"card-block">
          <h5><i class="fa fa-eye"></i> Timeline Event Detail</h5>
          <div class="card-text">
            <div class="timeline-event-view"></div>
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
        <div class="jqtl-event-view"></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<!-- /.modal -->

<div class="custom-loader"></div>

<!-- REQUIRED JS SCRIPTS -->

<!-- jQuery (latest 3.3.1) -->
<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<!-- Bootstrap 4.1.3 -->
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<!-- custom_datetime.js -->
<script src="../src/timeline_v2.js?v=<?= filemtime( CURRENT_DIR . '/src/timeline_v2.js' ); ?>"></script>
<!-- local scripts -->
<script>
$(function () {

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
    'Wednesday, 26-Sep-18 17:00:00 GMT', // RFC 850
    '0/12/31',
    '1/1/1',
    '12/12/12',
    '31-2-4',
    '79/4/3',
    '0083/7/6',
    '166/4/1',
];
/*
dates.forEach( ( dt ) => {
    let _d = getLocaleString( dt, 'year', 'en-US', {
            hour12: false, year: 'zerofill'
        } )
    
    //if ( _d ) {
        console.log( `"${dt}"`, _d )
    //}
});
*/

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

let _d = new Date()
_d.setDate( _d.getDate() - 1 )
//console.log( _d )

$('#my-timeline').timeline({
    type          : 'point',
    //startDatetime : '79/1/1 0:00',
    //startDatetime : '166-1-1 0:00',
    //startDatetime : '2000/1/1',
    startDatetime : '2018-10-14 0:00',
    // startDatetime : `${_d.toLocaleDateString()} 0:00`,
    //endDatetime   : '2019-1-3 23:59:59',
    // endDatetime : `${new Date().toLocaleDateString()} 6:59`,
    //endDatetime   : '2020/12/31',
    // scale         : 'half-hour',
    scale         : 'day',
    //rows          : 7,
    minGridSize   : 40,
    showHeadline  : true,
    headline      : {
        display   : true,
        title     : 'jQuery Timeline Ver.2.0.0a1',
        range     : true,
        locale    : 'ja-JP-u-ca-japanese',
        format    : { timeZone: 'Asia/Tokyo', hour12: false, era: 'long', year: 'numeric', month: 'numeric', day: 'numeric' }
    },
    footer        : {
        display   : true,
        content   : `<small>&copy; MAGIC METHODS ${new Date().getFullYear()}</small>`,
        range     : true,
        locale    : 'ja-JP-u-ca-iso8601',
        format    : { timeZone: 'Asia/Tokyo', hour12: false, era: 'narrow', year: 'zerofill', month: 'numeric', day: '2-digit' }
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
            //lines      : [ 'millennium', 'century', 'decade', 'lustrum', 'year', 'month', 'week', 'day', 'weekday', 'hour', 'minute', 'second' ],
            //lines      : [ 'millennium', 'century', 'decade', 'lustrum', 'year', 'month' ],
            //lines      : [ 'year', 'month', 'week', 'day', 'weekday', 'hour', 'half-hour', 'quarter-hour'/*, 'minute'/*, 'second'*/ ],
            lines      : [ 'year', 'month', 'day' ],
            height     : 26,
            fontSize   : 13,
            color      : '#777',
            background : '#FFF',
            locale     : 'ja-JP',
            format     : { timeZone: 'Asia/Tokyo', hour12: false, decade: 'ordinal', lustrum: 'ordinal', year: 'numeric', month: 'long', weekday: 'short', hour: 'numeric', minute: 'numeric', /* second: 'numeric' */ },
        },
        bottom : {
            //lines      : [ 'hour' ],
            lines      : [ 'week', 'year' ],
        }
    },
    eventMeta       : {
        display     : true,
        scale       : 'hour',
        //locale      : 'ja-JP-u-ca-japanese',
        //format      : { hour12: false, month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' },
        //content     : ''
    },
    
    debug         : true
})
//.timeline('initialized', function(elem,opt){ alert( 'initialized!' ); } )
.timeline('initialized', function(elem,opt){ console.log( 'callback2:', elem, opt ); } )
//.timeline('destroy')
//.timeline('_init')
.timeline('initialized', function(elem,opt){ console.log( 'callback3:', elem, opt ); } )
//.css( 'border', 'solid 1px #F03333' )
//.css({ width: '100%', height: '200px' })
;

/*
$('#my-timeline')
//.timeline('initialized', function(elem,opt){ alert( '!!!' ); } )
.timeline('hide')
.timeline('show')
.css( 'border', 'dotted 1px #DDD' )
;
*/

//console.log( $('#my-timeline').VERSION );

//$('.my-timeline').timeline();

/*
$('#my-timeline2').timeline()
.timeline('initialized', function(elem,opt){ console.log( elem, opt ) } )
.css( 'border', 'solid 1px #F03333' )
;
*/

$('[data-toggle="popover"]').popover()

function localFunction( e ) {
    alert( 'Custom Callback Local Function!' )
    console.log( e )
}

})
function globalFunction( e ) {
    alert( 'Custom Callback Global Function!' )
    console.log( e )
}
</script>
</body>
</html>
