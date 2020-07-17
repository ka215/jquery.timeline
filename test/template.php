<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Test for jQuery.Timeline Ver.<?= TIMELINE_VERSION ?></title>
<?php if ( $use_bootstrap ) : ?>
  <!-- Bootstrap from cdn -->
  <?= $cdn_bootstrap[$bootstrap_ver]['css'] ?>
<?php endif; ?>
  <!-- furtive -->
  <link rel="stylesheet" href="<?= asset_source( 'dist/index.furtive.min.css' ) ?>">
<?php if ( $use_fontawesome ) : ?>
  <!-- Font Awesome latest 5.3.1 -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
<?php endif; ?>
  <!-- jQuery Timeline -->
  <link rel="stylesheet" href="<?= asset_source( 'dist/jquery.timeline.min.css' ) ?>">
  <link rel="stylesheet" href="<?= asset_source( 'dist/jquery.timeline.tester.css' ) ?>">
  <!-- link rel="preload" href="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" as="script" -->
</head>
<body>
<div class="wrap">
  
  <form id="form-tester" role="form" method="post" action="<?= $_SERVER['PHP_SELF'] ?>">
  
  <nav id="header" class="grd-row bg--off-white px1">
    <div class="grd-row-col-3-6--sm">
      <a href="javascript:;" id="reset-env" class="h4" title="To reload with resetting an environment">jQuery.Timeline <?= TIMELINE_VERSION ?> Tester <span class="fnt--mid-gray" style="font-size:1rem;">( <i class="fas fa-redo"></i> )</span></a>
    </div>
    <div class="grd-row">
      <div class="grd-row">
        <label for="jquery-version" class="mx1">jQuery</label>
        <select id="jquery-version" class="" name="jquery_ver" data-current-ver="<?= $jquery_ver ?>">
<?php foreach( $cdn_jquery as $_version ) : ?>
          <option value="<?= $_version ?>"<?php if ( $jquery_ver === $_version ) : ?> selected<?php endif; ?>><?= $_version ?></option>
<?php endforeach; ?>
        </select>
      </div>
      <div class="grd-row">
        <label for="bootstrap-version" class="mx1">Bootstrap</label>
        <select id="bootstrap-version" class="" name="bootstrap_ver" data-current-ver="<?= $bootstrap_ver ?>">
          <option value="">no used</option>
<?php foreach( array_keys( $cdn_bootstrap ) as $_version ) : ?>
          <option value="<?= $_version ?>"<?php if ( $bootstrap_ver === $_version ) : ?> selected<?php endif; ?>><?= $_version ?></option>
<?php endforeach; ?>
        </select>
      </div>
      <div class="grd-row">
        <label for="user-locale" class="mx1">Locale</label>
        <select id="user-locale" class="" name="user_locale" data-current-locale="<?= $user_locale ?>">
<?php foreach( $locales as $_locale ) : ?>
          <option value="<?= $_locale ?>"<?php if ( $user_locale === $_locale ) : ?> selected<?php endif; ?>><?= $_locale ?></option>
<?php endforeach; ?>
        </select>
      </div>
      <div class="grd-row tg-list-item">
        <input id="toggle-timeline-type" class="tgl tgl-flip" name="timeline_type_point" type="checkbox" data-current-type="<?php if ( $is_point_type ) : ?>point<?php else : ?>bar<?php endif; ?>" <?php if ( $is_point_type ) : ?>checked<?php endif; ?>>
        <label for="toggle-timeline-type" class="tgl-btn" data-tg-off="Bar" data-tg-on="Point"></label>
      </div>
      <div class="grd-row">
        <button type="button" id="apply-env" class="btn--gray btn--s mx1" title="Apply to environment you choose frameworks" disabled>Apply</button>
      </div>
    </div>
  </nav><!-- /#header -->

  <section id="main">

    <div id="my-timeline">
      <ul class="timeline-events">
<?php 
$events = generate_random_events( $date_range['start'], 30, 90, 5, 60 * 24, 60 * 24 * 3 );
if ( $defaults['type'] === 'bar' ) : 
    foreach ( $events as $_evt ) {
        printf( '<li data-timeline-node=\'%s\'></li>', json_encode( $_evt ) );
    }
else : 
    foreach ( $events as $_i => $_evt ) {
        $_evt['id'] = $_i + 1;
        if ( $_i > 0 && mt_rand( 0, 1 ) == 1 ) {
            $_evt['relation'] = [ 
                'before' => $_i > 0 ? $_i : -1, 
                'curve' => mt_rand( 0, 1 ), 
                'linesize' => mt_rand( 1, 6 ),
                'linecolor' => randColorSet()['bg'],
            ];
        }
        printf( '<li data-timeline-node=\'%s\'></li>', json_encode( $_evt ) );
    }
endif; ?>
      </ul><!-- /.timeline-events -->
    </div><!-- /#my-timeline -->

    <div id="my-timeline-2nd" class="my1">
      <ul class="timeline-events">
<?php 
    $events = generate_random_events( $date_range['start'], 10, 90, 1, 60 * 24, 60 * 24 * 3 );
    foreach ( $events as $_evt ) {
        printf( '<li data-timeline-node=\'%s\'></li>', json_encode( $_evt ) );
    }
?>
      </ul><!-- /.timeline-events -->
    </div><!-- /#my-timeline-2nd -->

    <div id="viewer" class="bg--off-white brdr--mid-gray my1">
      <label class="h5 px1">The timeline event details are displayed in this block.<br class="hidden-md"> Until then, there are displaying sponsor advertisements.</label>
      <div class="view-body bg--white m0 p1">
        <div class="timeline-event-view"><!-- レスポンシブ（タイトル下） -->
<ins class="adsbygoogle"
     style="display:block;width:inherit;height:max-content;"
     data-ad-client="ca-pub-8602791446931111"
     data-ad-slot="6050360069"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins></div>
      </div><!-- /.view-body -->
    </div><!-- /#viewer -->

  </section><!-- /#main -->

  <footer class="bg--off-white px1">
    <div id="controller" class="grd-row p1">
      <div id="methods">
        <label class="h5">Method Tester</label>
        <div class="method-list">
          <!-- configuration content -->
          <div class="popover--wrapper">
            <button type="button" class="btn" id="method-alignment">Alignment</button>
            <div class="popover--content">
              <label class="popover--title">Position:</label>
              <select id="alignment-position">
                <option value="begin">begin(left)</option>
                <option value="end">end(right)</option>
                <option value="current">current</option>
                <option value="latest">lateset</option>
                <option value="1">eventId: 1</option>
              </select>
            </div>
          </div>
          <button type="button" class="btn" id="method-hide">Hide</button>
          <button type="button" class="btn" id="method-show">Show</button>
          <button type="button" class="btn" id="method-add-event">Add Event</button>
          <button type="button" class="btn" id="method-remove-event">Remove Event</button>
          <button type="button" class="btn" id="method-update-event">Update Event</button>
          <button type="button" class="btn" id="method-reload">Reload</button>
          <button type="button" class="btn" id="method-reset">Reset (Reload)</button>
          <button type="button" class="btn" id="method-destroy">Destroy</button>
        </div><!-- /.method-list -->
      </div><!-- /#methods -->
      <div id="advanced">
        <label class="h5">Advanced</label>
        <div class="grd-row advanced-list">
          <div class="tg-list-item">
            <label class="h6">Multiple</label>
            <input class="tgl tgl-light" id="toggle-multiple" name="multiple_timeline" type="checkbox"<?php if ( $multiple_timeline ) : ?> checked<?php endif ?>>
            <label class="tgl-btn" for="toggle-multiple"></label>
          </div>
<?php if ( $use_bootstrap ) : ?>
          <div class="tg-list-item">
            <label class="h6">Modal</label>
            <input class="tgl tgl-light" id="toggle-modal" type="checkbox"/>
            <label class="tgl-btn" for="toggle-modal"></label>
          </div>
          <div class="tg-list-item">
            <label class="h6">Popover</label>
            <input class="tgl tgl-light" id="toggle-popover" type="checkbox"/>
            <label class="tgl-btn" for="toggle-popover"></label>
          </div>
          <div class="tg-list-item">
            <label class="h6">Tooltip</label>
            <input class="tgl tgl-light" id="toggle-tooltip" type="checkbox"/>
            <label class="tgl-btn" for="toggle-tooltip"></label>
          </div>
<?php endif; ?>
        </div><!-- /.advanced-list -->
      </div>
    </div><!-- /#controller -->
    <div id="copyright" class="txt--center">
      &copy; <?= date('Y') ?> Monaural Sound ka2.org, Powered by MAGIC METHODS
    </div>
  </footer><!-- / -->

  </form>
  
</div><!-- /.wrap -->

<?php if ( $use_bootstrap ) : ?>
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
</div><!-- /.modal -->
<?php endif; ?>

<div class="custom-loader"></div>

<!-- REQUIRED JS SCRIPTS -->

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- jQuery from cdn -->
<script defer src="https://ajax.googleapis.com/ajax/libs/jquery/<?= $jquery_ver ?>/jquery.min.js"></script>
<?php if ( $use_bootstrap ) : ?>
<!-- Bootstrap from cdn -->
<?= $cdn_bootstrap[$bootstrap_ver]['js'] ?>
<?php endif; ?>
<!-- custom_datetime.js -->
<script defer src="<?= asset_source( 'dist/jquery.timeline.min.js' ) ?>"></script>
<!-- tester scripts -->
<script defer src="<?= asset_source( 'dist/jquery.timeline.tester.js' ) ?>"></script>
<script>
window.addEventListener('DOMContentLoaded', function(){
  const callback = function(e) {
  // 追加されたノードはe[0].addedNodesに入っている
    let added = e[0].addedNodes;
  // プラグイン適用
    for (var i = 0; i < added.length; i++) {
      $('body').append( added[i] );
    }
  };
  const observer = new MutationObserver(callback);
  
  console.log($('.jqtl-events'));
  observer.observe( $('.jqtl-events')[0], { childList: true } );
  // $('.jqtl-events > .tooltip').appendTo('body');
  
});
</script>
</body>
</html>
