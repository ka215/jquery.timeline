<?php
define( 'USE_BOOTSTRAP', false );
define( 'SHOW_SYSTEM_DATETIME', false );

//var_dump( date_default_timezone_get() );
$_tzs = [
    'UTC', // 0
    date_default_timezone_get(), // 1
    'Asia/Tokyo', // 2
    'Asia/Shanghai', // 3
    'Europe/London', // 4 = GMT
    'Europe/Berlin', // 5
    'Europe/Paris', // 6
    'America/New_York', // 7
    'America/Phoenix', // 8; Mountain no DST
    'America/Los_Angeles', // 9
];
date_default_timezone_set( $_tzs[4] );

function loadAsset( $file_relative_path ) {
    if ( file_exists( __DIR__ .'/'. $file_relative_path ) ) {
        $params = '?v=' . filemtime( __DIR__ .'/'. $file_relative_path );
    } else {
        $params = '';
    }
    return $file_relative_path . $params;
}
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>jQuery.Timeline Unit Test</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<?php if ( USE_BOOTSTRAP ) : ?>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
<?php endif; ?>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/6.1.4/mocha.min.css">
  <link rel="stylesheet" href="<?= loadAsset( '../dist/jquery.timeline.min.css' ) ?>">
  <link rel="shortcut icon" href="<?= loadAsset( 'favicon.ico' ) ?>" type="image/x-icon">
  <style>
#notifications { margin: 0 auto; padding: 15px; font-family: monospace; font-size: 11px; }
#notifications label { font-weight: 600; color: #bbb; }
#notifications label:after { content: ':'; }
#main-content { margin: 50px auto 0; padding: 15px; display: none; }
  </style>
</head>
<body>
  <div id="notifications"><?php if ( SHOW_SYSTEM_DATETIME ) :
printf( '<label>Timezone</label> %s (%s), <label>DATE_RFC2822</label> %s, ', date('e'), date('T'), date('r') );
endif; ?></div>

  <div id="main-content"></div>

  <!-- mocha UI -->
  <div id="mocha"></div>

  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<?php if ( USE_BOOTSTRAP ) : ?>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<?php endif; ?>
  <script src="<?= loadAsset( '../dist/jquery.timeline.min.js' ) ?>"></script>

  <!-- mocha -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/6.1.4/mocha.min.js"></script>
  <!-- chai -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/chai/4.2.0/chai.min.js"></script>
  <!-- sinon -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/sinon.js/7.3.2/sinon-no-sourcemaps.min.js"></script>

  <!-- initialize mocha -->
  <script class="mocha-init">
    mocha.setup('bdd');
    mocha.checkLeaks();
  </script>
  <script src="<?= loadAsset( 'timeline-spec.js' ) ?>"></script>

  <!-- execute mocha -->
  <script class="mocha-exec">
    mocha.globals(['jQuery']);
    mocha.run();
  </script>
</body>
</html>