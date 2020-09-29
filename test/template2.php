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
  <!-- sloth -->
  <?= $cdn_sloth['latest']['core'] ?>
<?php if ( isset( $tester_assets['css'] ) ) : ?>
  <?php /* link rel="stylesheet" href="<?= asset_source( '/dist/jqtl-tester.css' ) ?>" */ ?>
  <link rel="stylesheet" href="<?= $tester_assets['css'] ?>">
<?php endif; ?>
  <!-- jQuery Timeline -->
<?php if ( DEBUG_MODE ) : ?>
  <link rel="stylesheet" href="<?= asset_source( '/../dist/jquery.timeline.min.css' ) ?>">
<?php else : ?>
  <?= $cdn_jqtl['latest']['css'] ?>
<?php endif; ?>
<?php if ( $use_fontawesome ) : ?>
  <!-- Font Awesome latest -->
  <script async src="https://kit.fontawesome.com/ee8bf0ee7e.js"></script>
<?php endif; ?>
</head>
<body class="sloth" data-standby="shown">
<form id="form-tester" role="form" method="post" action="<?php /* = $_SERVER['PHP_SELF'] */ ?>">
  <header id="jqtl-tester" class="navi-menu">
    <div class="slide-l">
      <label class="toggle">
        <input type="checkbox">
        <div class="backdrop"></div>
        <div class="menu">
          <ul id="env-setting" class="unstyled">
            <li class="fnt-lg mb1 txt-sec"><i class="fas fa-cogs"></i> Environment Settings</li>
            <li class="inline">
              <label>TimeZone</label>
              <input type="text" value="<?= $timezone ?>" readonly disabled>
            </li>
            <li class="inline">
              <label for="jquery-version">jQuery</label>
              <label class="dropdown">
                <select id="jquery-version" name="jquery_ver" data-current-ver="<?= $jquery_ver ?>">
<?php foreach( $cdn_jquery as $_version ) : ?>
                  <option value="<?= $_version ?>"<?php if ( $jquery_ver === $_version ) : ?> selected<?php endif; ?>><?= $_version ?></option>
<?php endforeach; ?>
                </select>
              </label>
            </li>
            <li class="inline">
              <label for="bootstrap-version">Bootstrap</label>
              <label class="dropdown">
                <select id="bootstrap-version" name="bootstrap_ver" data-current-ver="<?= $bootstrap_ver ?>">
                  <option value="">no used</option>
<?php foreach( array_keys( $cdn_bootstrap ) as $_version ) : ?>
                  <option value="<?= $_version ?>"<?php if ( $bootstrap_ver === $_version ) : ?> selected<?php endif; ?>><?= $_version ?></option>
<?php endforeach; ?>
                </select>
              </label>
            </li>
            <li class="inline">
              <label for="user-locale">Locale</label>
              <label class="combo-box">
                <input type="text" id="user-locale" name="user_locale" list="locale-list" placeholder="Choose or enter" value="<?= $user_locale ?>" data-current-locale="<?= $user_locale ?>" size="7">
                <datalist id="locale-list">
<?php foreach( $locales as $_locale ) : ?>
                  <option value="<?= $_locale ?>"<?php if ( $user_locale === $_locale ) : ?> selected<?php endif; ?>>
<?php endforeach; ?>
                </datalist>
                <span class="indicator"></span>
              </label>
            </li>
            <li class="inline">
              <label for="toggle-timeline-type">Timeline Type</label>
              <label class="dropdown">
                <select id="toggle-timeline-type" name="timeline_type" data-current-type="<?= $timeline_type ?>">
                  <option value="bar"<?php if ( $timeline_type === 'bar' ) : ?> selected<?php endif; ?>>Bar</option>
                  <option value="point"<?php if ( $timeline_type === 'point' ) : ?> selected<?php endif; ?>>Point</option>
                  <option value="mixed"<?php if ( $timeline_type === 'mixed' ) : ?> selected<?php endif; ?>>Mixed</option>
                </select>
              </label>
            </li>
            <li class="mt1 txt-center">
              <button type="button" id="apply-env" class="outline muted" title="Apply to environment you choose frameworks" disabled><i class="far fa-share-square"></i> Apply</button>
            </li>
          </ul>
          <hr class="dotted">
          <ul class="unstyled">
            <li class="pr1"><a id="link-docs" href="https://ka2.org/jquery-timeline/"><span class="mr1" data-size="w:1rem"><i class="fas fa-file-alt"></i></span>Document</a></li>
            <li class="pr1"><a id="link-donate" href="https://ka215.github.io/jquery.timeline/donation.html"><span class="mr1" data-size="w:1rem"><i class="fas fa-donate"></i></span>Donation</a></li>
            <li class="pr1"><a id="link-github" href="https://github.com/ka215/jquery.timeline"><span class="mr1" data-size="w:1rem"><i class="fab fa-github-alt"></i></span>Github Repository</a></li>
          </ul>
        </div>
      </label>
      <span class="nons brand" style="margin-left:56px;">jQuery.Timeline <?= TIMELINE_VERSION ?> Tester
<?php if ( ENV === 'local' ) : ?><i class="fab fa-dev txt-quin mrh" aria-label="On Local"></i><?php endif; ?>
<?php if ( DEBUG_MODE ) : ?><i class="fas fa-bug txt-quat" aria-label="On Debug"></i><?php endif; ?>
      </span>
      <button id="redo" type="button" class="outline mr0"><i class="fas fa-redo"></i> Redo</button>
    </div><!-- /.slide-l -->
  </header><!-- /#jqtl-tester powered by Sloth -->
  <a id="page-top" name="page-top"></a>
  <div id="wrapper" class="flx-col ma px2">
<?php if ( ENV === 'public' ) : ?>
    <div id="ad-block"><!-- Responsive (under the title) -->
<ins class="adsbygoogle"
 style="display:block;width:inherit;height:max-content;"
 data-ad-client="ca-pub-8602791446931111"
 data-ad-slot="6050360069"
 data-ad-format="auto"
 data-full-width-responsive="true"></ins>
    </div>
<?php endif; ?>
    <div id="my-timeline" class="nons">
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

    <div id="my-timeline-2nd" class="nons my1">
      <ul class="timeline-events">
<?php
    $events = generate_random_events( $date_range['start'], 10, 90, 1, 60 * 24, 60 * 24 * 3 );
    foreach ( $events as $_evt ) {
        printf( '<li data-timeline-node=\'%s\'></li>', json_encode( $_evt ) );
    }
?>
      </ul><!-- /.timeline-events -->
    </div><!-- /#my-timeline-2nd -->

    <div id="viewer" class="flx-col brd mb2">
      <div class="h6 px1 pbh bg-whitesmoke txt-darkgray txt-of-e"><small>The detail content when clicked timeline event node are displayed in this block via event handler in the plugin.</small></div>
      <div class="bg-white m0 p1">
        <div class="timeline-event-view"><code>&lt;div class="timeline-event-view"&gt;&lt;/div&gt;</code></div>
      </div><!-- /.view-body -->
    </div><!-- /#viewer -->

    <h6 class="line-both">Timeline Control Settings</h6>
    <div class="">
      <div class="flx-row">
        <div id="" class="w-1-4 px1">
          <label class="h5 mbh txt-quat">Configure</label>
          <ul class="unstyled">
            <li>
              <button type="button" id="show-options" class="outline" title="Show the current timeline options">Show Options</button>
            </li>
            <li>
              <button type="button" id="set-options" class="outline" title="Set your custom options to the Timeline">Set Options</button>
            </li>
            <li>
              <button type="button" id="download-options" class="outline" title="Set your custom options to the Timeline">Download Options</button>
            </li>
            <li>
              <button type="button" id="upload-options" class="outline" title="Set your custom options to the Timeline">Upload Options</button>
            </li>
          </ul>
        </div>
        <div id="methods" class="w-2-4 px1">
          <label class="h5 mbh txt-quat">Method Tester</label>
          <div class="method-list">
            <!-- configuration content -->
            <label class="combo-box mr1">Alignment
              <input type="text" name="alignment" id="method-alignment" list="position-list" placeholder="Choose or enter eventId">
              <datalist id="position-list">
                <option value="begin">begin</option>
                <option value="end">end</option>
                <option value="left">left</option>
                <option value="right">right</option>
                <option value="current">current</option>
                <option value="latest">latest</option>
              </datalist>
            </label>
            <button type="button" class="outline" id="method-hide">Hide</button>
            <button type="button" class="outline" id="method-show">Show</button>
            <button type="button" class="outline" id="method-destroy">Destroy</button>
            <hr class="dotted">
            <button type="button" class="outline" id="method-add-event">Add Event</button>
            <button type="button" class="outline" id="method-remove-event">Remove Event</button>
            <button type="button" class="outline" id="method-update-event">Update Event</button>
            <button type="button" class="outline" id="method-open-event">Open Event</button>
            <hr class="dotted">
            <button type="button" class="outline" id="method-reload">Reload</button>
            <button type="button" class="outline" id="method-reset">Reset (Reload)</button>
          </div><!-- /.method-list -->
        </div><!-- /#methods -->
        <div id="advanced" class="w-1-4 px1">
          <label class="h5 mbh txt-quat">Advanced</label>
          <ul class="advanced-list unstyled">
            <li class="">
              <label class="tgl flat">Multiple Timeline Binding
                <input id="toggle-multiple" name="multiple_timeline" type="checkbox"<?php if ( $multiple_timeline ) : ?> checked<?php endif ?>>
                <span class="tgl-btn"></span>
              </label>
            </li>
<?php if ( $use_bootstrap ) : ?>
            <li class="">
              <label class="tgl flat">On Modal Via Bootstrap
                <input id="toggle-modal" type="checkbox">
                <span class="tgl-btn"></span>
              </label>
            </li>
            <li class="">
              <label class="tgl flat">On Popover Via Bootstrap
                <input id="toggle-popover" type="checkbox">
                <span class="tgl-btn"></span>
              </label>
            </li>
            <li class="">
              <label class="tgl flat">On Tooltip Via Bootstrap
                <input id="toggle-tooltip" type="checkbox">
                <span class="tgl-btn"></span>
              </label>
            </li>
<?php else : ?>
            <li class="">
              <label class="tgl flat">On Dialog via Sloth
                <input id="toggle-dialog" type="checkbox">
                <span class="tgl-btn"></span>
              </label>
            </li>
            <li class="" hidden>
              <label class="tgl flat">On Dialog with editable
                <input id="toggle-editable" type="checkbox">
                <span class="tgl-btn"></span>
              </label>
            </li>
<?php endif; ?>
          </ul><!-- /.advanced-list -->
<?php if ( ! $use_bootstrap ) : ?>
          <p class="txt-right pr2">
            <small>See more about the detail of <a href="https://ka2.org/sloth/" rel="external">Sloth</a>.</small>
          </p>
<?php endif; ?>
        </div><!-- /#advanced -->
      </div><!-- /.flx-row -->
    </div><!-- /.pullup-content -->

    <footer class="txt-center txt-darkgray mt2 py1">
      <i class="far fa-copyright txt-darkgray"></i> <?= date('Y') ?> Monaural Sound, ka2.org; Produced by MAGIC METHODS
    </footer>
  </div><!-- /#wrapper -->
</form>

<?php if ( $use_bootstrap ) : ?>
<div class="nons modal fade" id="myModal">
  <div class="nons modal-dialog" role="document">
    <div class="nons modal-content">
      <div class="nons modal-header">
        <h5 class="nons modal-title"></h5>
        <button type="button" class="nons close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="nons modal-body">
        <div class="jqtl-event-view"></div>
      </div>
      <div class="nons modal-footer">
        <button type="button" class="nons btn btn-secondary" data-dismiss="modal">Close</button>
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
<!-- sloth extensions -->
<?= $cdn_sloth['latest']['extensions'] ?>
<!-- jQuery.Timeline -->
<?php if ( DEBUG_MODE ) : ?>
<script defer src="<?= asset_source( '/../dist/jquery.timeline.js' ) ?>"></script>
<?php else : ?>
<?= $cdn_jqtl['latest']['js'] ?>
<?php endif; ?>
<!-- tester scripts -->
<?php if ( isset( $tester_assets['js'] ) ) :
 /* if ( file_exists( DOCROOT . CURRENT_DIR . '/dist/jqtl-tester.js' ) ) : */
 /* script defer src="<?= asset_source( '/dist/jqtl-tester.js' ) ?>"></script */ ?>
<script defer src="<?= $tester_assets['js'] ?>"></script>
<?php endif; ?>
</body>
</html>
