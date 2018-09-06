/*!
 * jQuery Timeline Plugin
 * ------------------------
 * Version: 1.0.6
 * Author: Ka2 ( https://ka2.org/ )
 * Repository: https://github.com/ka215/jquery.timeline
 * Lisenced: MIT
 */
(function( $ ) {

  // Constants
  var pluginName   = 'jQuery.Timeline',
      pointMargin  = 2,
      tlEventAreaH = 0,
      debugMode    = true, // Added v1.0.6
      pluginDfd    = new $.Deferred(), // Added v1.0.6
      rowH;

  var methods = {
    init : function( options ) {
      
      // Default settings
      var settings = $.extend(true, {
        type            : "bar", // View type of timeline event is either "bar" or "point"
        scale           : "days", // Timetable's top level scale is either "years" or "months" or "days"
        startDatetime   : "currently", // Default set datetime as viewing timetable; format is ( "^[-+]d{4}(/|-)d{2}(/|-)d{2}\sd{2}:d{2}:d{2}$" ) or "currently"
        datetimePrefix  : "", // The prefix of the date and time notation displayed in the headline
        showHeadline    : true, // Whether to display headline
        datetimeFormat  : {
          full          : "j M Y", // or "Y/m/d" etc.
          year          : "Y",
          month         : "M Y", // or "F" etc.
          day           : "D, j M", // or "j" etc.
          years         : "Y", 
          months        : "F", 
          days          : "j",
          meta          : "Y/m/d H:i", // start datetime in meta of Event Detail; or "g:i A, D F j, Y"
          metato        : "" // end datetime in meta of Event Detail; default is same to meta
        },
        minuteInterval  : 30, // Recommend more than 5 minutes; only if top scale is "days" ; Deprecated
        zerofillYear    : false, // It's outputted at the "0099" if true, the "99" if false
        range           : 3, // The default view range of the timetable starting from the `startDatetime`
        rows            : 5, // Rows of timeline event area
        rowHeight       : 40, // Height of one row
        height          : "auto", // Fixed height (pixel) of timeline event area; default "auto" is (rows * rowHeight)px
        minGridPer      : 2, // Minimum grid per
        minGridSize     : 30, // Minimum size (pixel) of timeline grid; It needs 5 pixels or more
        rangeAlign      : "current", // Possible values are "left", "center", "right", "current", "latest" and specific event id
        naviIcon        : { // Define class name
          left          : "jqtl-circle-left",
          right         : "jqtl-circle-right"
        },
        showPointer     : true,
        i18n            : {}, // Deprecated since v1.0.6
        langsDir        : "./langs/",
        httpLanguage    : false,
        getLangUrl      : "//ajaxhttpheaders.appspot.com?callback=?", // Added v1.0.6
        duration        : 150 // duration of animate as each transition effects; Added v1.0.6
      }, options);
      
      // initialize plugin
      return this.each(function(){
        
        var $this = $(this),
            data = $this.data('timeline'),
            timeline = $('<div />', {
              "title"                 : $this.find('.timeline-headline').text(),
              "type"                  : settings.type,
              "scale"                 : settings.scale,
              "start-datetime"        : settings.startDatetime,
              "datetime-prefix"       : settings.datetimePrefix,
              "show-headline"         : settings.showHeadline ? 1 : 0,
              "datetime-format-full"  : settings.datetimeFormat.full || 'j M Y',
              "datetime-format-year"  : settings.datetimeFormat.year || 'Y',
              "datetime-format-month" : settings.datetimeFormat.month || 'M Y',
              "datetime-format-day"   : settings.datetimeFormat.day || 'D, j M',
              "datetime-format-years" : settings.datetimeFormat.years || 'Y',
              "datetime-format-months": settings.datetimeFormat.months || 'F',
              "datetime-format-days"  : settings.datetimeFormat.days || 'j',
              "datetime-format-meta"  : settings.datetimeFormat.meta || 'Y/m/d H:i',
              "datetime-format-metato": settings.datetimeFormat.metato || '',
              "minute-interval"       : settings.minuteInterval,
              "zerofill-year"         : settings.zerofillYear ? 1 : 0,
              "range"                 : settings.range,
              "rows"                  : settings.rows,
              "row-height"            : settings.rowHeight,
              "timeline-height"       : settings.height,
              "min-grid-per"          : settings.minGridPer,
              "min-grid-size"         : settings.minGridSize,
              "range-align"           : settings.rangeAlign,
              "navi-icon-left"        : settings.naviIcon.left || 'jqtl-circle-left',
              "navi-icon-right"       : settings.naviIcon.right || 'jqtl-circle-right',
              "show-pointer"          : settings.showPointer ? 1 : 0,
              //"i18n-month"            : settings.i18n.month ? JSON.stringify( settings.i18n.month ) : '',
              //"i18n-day"              : settings.i18n.day ? JSON.stringify( settings.i18n.day ) : '',
              //"i18n-ma"               : settings.i18n.ma ? JSON.stringify( settings.i18n.ma ) : '',
              "i18n-month"            : settings.i18n.month ? settings.i18n.month : '',
              "i18n-day"              : settings.i18n.day ? settings.i18n.day : '',
              "i18n-ma"               : settings.i18n.ma ? settings.i18n.ma : '',
              "langs-dir"             : settings.langsDir,
              "http-language"         : settings.httpLanguage ? 1 : 0,
              "get-lang-url"          : settings.getLangUrl,
              "duration"              : settings.duration,
              "text"                  : ""
            });
        
        // Set Events
        $this.on( 'click.timeline', '.timeline-to-prev', methods.dateback );
        $this.on( 'click.timeline', '.timeline-to-next', methods.dateforth );
        $this.on( 'click.timeline', '.timeline-node', methods.openEvent );
        $this.on( 'align.timeline', methods.alignment );
        $this.on( 'afterRender.timeline', function(){
          $(this).off('afterRender.timeline');
        });

        
        // If uninitialized yet
        if ( ! data ) {
          
          $(this).data('timeline', {
            target: $this,
            timeline : timeline
          });
          
          rowH = settings.rowHeight;
          
          // Retrive Current Date
          var currentDt, currentDate, _tmp, _regx;
          if ( settings.startDatetime === 'currently' ) {
            currentDt = setCurrentDate( true );
          } else {
            currentDt = new Date( normalizeDate( settings.startDatetime ) );
            _regx = /-|\//;
            _tmp = settings.startDatetime.split( _regx );
            if ( Number( _tmp[0] ) < 100 ) {
              // for 0 - 99 years map
              currentDt.setFullYear( Number( _tmp[0] ) );
            }
          }
          switch( settings.scale ) {
            case 'years':
              currentDate = currentDt.getFullYear() +'/01/01 00:00:00';
              break;
            case 'months':
              currentDate = currentDt.getFullYear() +'/'+ (currentDt.getMonth() + 1) +'/01 00:00:00';
              break;
            case 'days':
              currentDate = currentDt.getFullYear() +'/'+ (currentDt.getMonth() + 1) +'/'+ currentDt.getDate() +' 00:00:00';
              break;
            default:
              currentDate = currentDt.getFullYear() +'/'+ (currentDt.getMonth() + 1) +'/'+ currentDt.getDate() +' '+ currentDate.getHours() +':00:00';
          }
          $this.data('timeline').timeline.attr( 'actual-start-datetime', currentDate );
          
          // Load Language as deferred interface (updated v1.0.4, v1.0.6)
          //getBrowserLang( settings.httpLanguage ).always(function( language ){
          getBrowserLang( settings.httpLanguage, settings.getLangUrl ).always(function( language ){
            debugLog( 'Current Language:', language );
            $this[0].lang = language;
          }).then(function(){
            importLocale( $this ).done(function( locale ) {
              $this.data('timeline').timeline.attr( 'i18n-month', JSON.stringify( locale.month ) );
              $this.data('timeline').timeline.attr( 'i18n-day', JSON.stringify( locale.day ) );
              $this.data('timeline').timeline.attr( 'i18n-ma', JSON.stringify( locale.ma ) );
              //$this.data('timeline').timeline.attr( 'i18n-month', locale.month );
              //$this.data('timeline').timeline.attr( 'i18n-day', locale.day );
              //$this.data('timeline').timeline.attr( 'i18n-ma', locale.ma );
              if ( 'format' in locale ) {
                for ( var prop in locale.format ) {
                  $this.data('timeline').timeline.attr( 'datetime-format-' + prop, locale.format[prop] );
                }
              }
              
              renderTimeline( $this );
              
              // timeline container sizing
              resizeTimeline( $this );
              
              // do methods.alignment
              $this.trigger( 'align.timeline', [ settings.rangeAlign, 0 ] );
              
              $this.css('visibility','visible');
              
              placeEvents( $this );
              
              // Bind an event after initialized (added v1.0.5)
              $this.trigger( 'afterRender.timeline', [ options ] );
              
            }).fail(function() {
              
              renderTimeline( $this );
              
              // timeline container sizing
              resizeTimeline( $this );
              
              // do methods.alignment
              $this.trigger( 'align.timeline', [ settings.rangeAlign, 0 ] );
              
              $this.css('visibility','visible');
              
              placeEvents( $this );
              
              // Bind an event after initialized (added v1.0.5)
              $this.trigger( 'afterRender.timeline', [ options ] );
              
            });
          });
        } else {
          
          if ( debugMode ) {
            /* Debugging code for loading effect: */
            var wait = 0,
                sleep = setInterval(function() {
                  wait++;
                  if ( wait == 1 ) {
                    placeEvents( $this );
                    clearInterval( sleep );
                  }
                }, settings.duration );
          }
          
          placeEvents( $this );
          
        }
      });
      
    },
    initialized : function( callback ) {
      return this.each(function(){
        var $this = $(this),
            data  = $this.data('timeline');
        
        //pluginDfd.resolve();
        
        if ( data && typeof callback === 'function' ) {
          debugLog( 'Fired "initialized" method after initialize this plugin.' );
          callback( $this, data );
        }
      });
    },
    destroy : function( ) {
      // destroy object
      return this.each(function(){
        var $this = $(this),
            data  = $this.data('timeline');
        
        $(window).off('.timeline');
        if ( data ) {
          data.timeline.remove();
          $this.removeData('timeline');
        }
        
      });
    },
    render : function( options ) {
      // render timeline object
      return this.each(function(){
        var $this = $(this),
            data = $this.data('timeline');
        
        // update options
        if ( 'type' in options ) {
          data.timeline.attr( 'type', options.type );
        }
        if ( 'scale' in options ) {
          data.timeline.attr( 'scale', options.scale );
        }
        if ( 'startDatetime' in options ) {
          data.timeline.attr( 'start-datetime', options.startDatetime );
        }
        if ( 'datetimePrefix' in options ) {
          data.timeline.attr( 'datetime-prefix', options.datetimePrefix );
        }
        if ( 'showHeadline' in options ) {
          data.timeline.attr( 'show-headline', options.showHeadline ? 1 : 0 );
        }
        if ( 'datetimeFormat' in options ) {
          if ( typeof options.datetimeFormat.full != undefined ) {
            data.timeline.attr( 'datetime-format-full', options.datetimeFormat.full );
          }
          if ( typeof options.datetimeFormat.year != undefined ) {
            data.timeline.attr( 'datetime-format-year', options.datetimeFormat.year );
          }
          if ( typeof options.datetimeFormat.month != undefined ) {
            data.timeline.attr( 'datetime-format-month', options.datetimeFormat.month );
          }
          if ( typeof options.datetimeFormat.day != undefined ) {
            data.timeline.attr( 'datetime-format-day', options.datetimeFormat.day );
          }
          if ( typeof options.datetimeFormat.years != undefined ) {
            data.timeline.attr( 'datetime-format-years', options.datetimeFormat.years );
          }
          if ( typeof options.datetimeFormat.months != undefined ) {
            data.timeline.attr( 'datetime-format-months', options.datetimeFormat.months );
          }
          if ( typeof options.datetimeFormat.days != undefined ) {
            data.timeline.attr( 'datetime-format-days', options.datetimeFormat.days );
          }
          if ( typeof options.datetimeFormat.meta != undefined ) {
            data.timeline.attr( 'datetime-format-meta', options.datetimeFormat.meta );
          }
          if ( typeof options.datetimeFormat.metato != undefined ) {
            data.timeline.attr( 'datetime-format-metato', options.datetimeFormat.metato );
          }
        }
        if ( 'minuteInterval' in options ) {
          data.timeline.attr( 'minute-interval', options.minuteInterval );
        }
        if ( 'zerofillYear' in options ) {
          data.timeline.attr( 'zerofill-year', options.zerofillYear ? 1 : 0 );
        }
        if ( 'range' in options ) {
          data.timeline.attr( 'range', options.range );
        }
        if ( 'rows' in options ) {
          data.timeline.attr( 'rows', options.rows );
        }
        if ( 'rowHeight' in options ) {
          data.timeline.attr( 'row-height', options.rowHeight );
        }
        if ( 'height' in options ) {
          data.timeline.attr( 'timeline-height', options.height );
        }
        if ( 'minGridPer' in options ) {
          data.timeline.attr( 'min-grid-per', options.minGridPer );
        }
        if ( 'minGridSize' in options ) {
          data.timeline.attr( 'min-grid-size', options.minGridSize );
        }
        if ( 'rangeAlign' in options ) {
          data.timeline.attr( 'range-align', options.rangeAlign );
        }
        if ( 'naviIcon' in options ) {
          if ( typeof options.naviIcon.left != undefined ) {
            data.timeline.attr( 'navi-icon-left', options.naviIcon.left );
          }
          if ( typeof options.naviIcon.right != undefined ) {
            data.timeline.attr( 'navi-icon-right', options.naviIcon.right );
          }
        }
        if ( 'showPointer' in options ) {
          data.timeline.attr( 'show-pointer', options.showPointer ? 1 : 0 );
        }
        if ( 'i18n' in options ) {
          if ( typeof options.i18n.month != undefined ) {
            data.timeline.attr( 'i18n-month', JSON.stringify( options.i18n.month ) );
            //data.timeline.attr( 'i18n-month', options.i18n.month );
          }
          if ( typeof options.i18n.day != undefined ) {
            data.timeline.attr( 'i18n-day', JSON.stringify( options.i18n.day ) );
            //data.timeline.attr( 'i18n-day', options.i18n.day );
          }
          if ( typeof options.i18n.ma != undefined ) {
            data.timeline.attr( 'i18n-ma', JSON.stringify( options.i18n.ma ) );
            //data.timeline.attr( 'i18n-ma', options.i18n.ma );
          }
        }
        if ( 'langsDir' in options ) {
          data.timeline.attr( 'langs-dir', options.langsDir );
        }
        if ( 'httpLanguage' in options ) {
          data.timeline.attr( 'http-language', options.httpLanguage );
        }
        if ( 'getLangUrl' in options ) {
          data.timeline.attr( 'get-lang-url', options.getLangUrl );
        }
        if ( 'duration' in options ) {
          data.timeline.attr( 'duration', options.duration );
        }

        // Retrive current Date
        var currentDt, currentDate, _tmp, _regx;
        if ( data.timeline.attr('start-datetime') === 'currently' ) {
          currentDt = setCurrentDate( true );
        } else {
          currentDt = new Date( normalizeDate( data.timeline.attr('start-datetime') ) );
          _regx = /-|\//;
          _tmp = data.timeline.attr('start-datetime').split( _regx );
          if ( Number( _tmp[0] ) < 100 ) {
            // for 0 - 99 years map
            currentDt.setFullYear( Number( _tmp[0] ) );
          }
        }
        switch( data.timeline.attr('scale') ) {
          case 'years':
            currentDate = currentDt.getFullYear() +'/01/01 00:00:00';
            break;
          case 'months':
            currentDate = currentDt.getFullYear() +'/'+ (currentDt.getMonth() + 1) +'/01 00:00:00';
            break;
          case 'days':
            currentDate = currentDt.getFullYear() +'/'+ (currentDt.getMonth() + 1) +'/'+ currentDt.getDate() +' 00:00:00';
            break;
          default:
            currentDate = currentDt.getFullYear() +'/'+ (currentDt.getMonth() + 1) +'/'+ currentDt.getDate() +' '+ currentDate.getHours() +':00:00';
        }
        data.timeline.attr( 'actual-start-datetime', currentDate );

        $this.find('.timeline-container').empty().removeClass('timeline-container');
        // Load Language as deferred interface (updated v1.0.4)
        //getBrowserLang( data.timeline.attr('http-language') ).always(function( language ){
        getBrowserLang( data.timeline.attr('http-language'), data.timeline.attr('get-lang-url') ).always(function( language ){
          debugLog( 'Current Language:', language );
          $this[0].lang = language;
        }).then(function(){
          importLocale( $this ).done(function( locale ) {
            data.timeline.attr( 'i18n-month', JSON.stringify( locale.month ) );
            data.timeline.attr( 'i18n-day', JSON.stringify( locale.day ) );
            data.timeline.attr( 'i18n-ma', JSON.stringify( locale.ma ) );
            //data.timeline.attr( 'i18n-month', locale.month );
            //data.timeline.attr( 'i18n-day', locale.day );
            //data.timeline.attr( 'i18n-ma', locale.ma );
            if ( 'format' in locale ) {
              for ( var prop in locale.format ) {
                $this.data('timeline').timeline.attr( 'datetime-format-' + prop, locale.format[prop] );
              }
            }
            
            renderTimeline( $this );
            resizeTimeline( $this );
            placeEvents( $this );
            
            // do methods.alignment
            $this.trigger( 'align.timeline', [ data.timeline.attr('range-align'), 0 ] );
            
            // Bind an event after rendered (added v1.0.5)
            $this.trigger( 'afterRender.timeline', [ options ] );
            
          }).fail(function() {
            renderTimeline( $this );
            resizeTimeline( $this );
            placeEvents( $this );
            
            // do methods.alignment
            $this.trigger( 'align.timeline', [ data.timeline.attr('range-align'), 0 ] );

            // Bind an event after rendered (added v1.0.5)
            $this.trigger( 'afterRender.timeline', [ options ] );
            
          });
        });
      });
    },
    show : function( ) {
      return this.each(function(){
        $(this).css('display', 'block').css('visibility', 'visible');
      });
    },
    hide : function( ) {
      return this.each(function(){
        $(this).css('visibility', 'hidden').css('display', 'none');
      });
    },
    dateback  : function( evt ) {
      debugLog( 'Fired "dateback" method', this, evt );
      evt.preventDefault();
      var $root = $(this).parents('.timeline-container'),
          data = $root.data('timeline'),
          visibleTimelineWidth = $root.find('.timeline-body')[0].clientWidth,
          fullTimelineWidth = $root.find('.timeline-wrapper')[0].scrollWidth,
          currentTimelinePos = $root.find('.timeline-body').scrollLeft(),
          mov = 0;
      if ( fullTimelineWidth > visibleTimelineWidth ) {
        if ( (currentTimelinePos / visibleTimelineWidth) > 1 ) {
          mov = currentTimelinePos - visibleTimelineWidth;
        } else {
          mov = currentTimelinePos - ((fullTimelineWidth - visibleTimelineWidth) / Number( data.timeline.attr('range') ));
        }
        mov = mov < 0 ? 0 : mov;
        $root.find('.timeline-body').animate( { scrollLeft: mov }, data.timeline.attr('duration') );
      }
      return this;
    },
    dateforth : function( evt ) {
      debugLog( 'Fired "dateforth" method', this, evt );
      evt.preventDefault();
      var $root = $(this).parents('.timeline-container'),
          data = $root.data('timeline'),
          visibleTimelineWidth = $root.find('.timeline-body')[0].clientWidth,
          fullTimelineWidth = $root.find('.timeline-wrapper')[0].scrollWidth,
          currentTimelinePos = $root.find('.timeline-body').scrollLeft(),
          mov = 0;
      if ( fullTimelineWidth > visibleTimelineWidth ) {
        if ( (fullTimelineWidth - currentTimelinePos) / visibleTimelineWidth > 1 ) {
          mov = currentTimelinePos + visibleTimelineWidth;
        } else {
          mov = currentTimelinePos + ((fullTimelineWidth - visibleTimelineWidth) / Number( data.timeline.attr('range') ));
        }
        mov = mov > (fullTimelineWidth - visibleTimelineWidth + 1) ? fullTimelineWidth - visibleTimelineWidth + 1 : mov;
        $root.find('.timeline-body').animate( { scrollLeft: mov }, data.timeline.attr('duration') );
      }
      return this;
    },
    alignment : function( ) {
      var args = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1) : [ arguments[0] ],
          control = args[0].toLowerCase(),
          data = $(this).data('timeline'),
          animateSpeed = typeof args[1] !== 'undefined' ? String( args[1] ).toLowerCase() : data.timeline.attr('duration');
      debugLog( 'Fired "alignment" method', $(this), control, animateSpeed );
      var visibleTimelineWidth = $(this).find('.timeline-body')[0].clientWidth, // display area
          fullTimelineWidth = $(this).find('.timeline-wrapper')[0].scrollWidth, // full length
          mov = 0; // default position (=left)
      if ( fullTimelineWidth > visibleTimelineWidth ) {
        // When the total length is larger than the display area (when horizontal scrolling occurs)
        var posX;
        switch ( control ) {
          case "left":
            // Move to beginning of timetable range
            mov = 0;
            break;
          case "right":
            // Move to last of timetable range
            mov = fullTimelineWidth - visibleTimelineWidth + 1;
            break;
          case "center":
            // Move to central of timetable range
            mov = (fullTimelineWidth - visibleTimelineWidth) / 2;
            break;
          case "current":
            // Move to nearest current time on timetable (default)
            var currentDt = setCurrentDate( true );
            posX = getAbscissa( currentDt, data );
            if ( posX > -1 ) {
              if ( (posX - visibleTimelineWidth / 2) > (fullTimelineWidth - visibleTimelineWidth + 1) ) {
                mov = fullTimelineWidth - visibleTimelineWidth + 1;
              } else {
                mov = posX - visibleTimelineWidth / 2;
              }
            } else {
              mov = fullTimelineWidth - visibleTimelineWidth + 1;
            }
            break;
          case "latest":
            // Move to latest event on the timetable
            var eventNodes  = ( new Function( 'return ' + data.timeline.text() ) )(),
                diffDt, cur, latestKey, latestDt;
            $.each( eventNodes, function( i, evt ) {
              cur = formatDate( 'U', evt.start );
              if ( i == 0 ) {
                diffDt = cur;
                latestKey = i;
              } else {
                if ( cur >= diffDt ) {
                  diffDt = cur;
                  latestKey = i;
                }
              }
            });
            latestDt = new Date( normalizeDate( eventNodes[latestKey].start ) ),
            posX     = getAbscissa( latestDt, data );
            if ( posX > -1 ) {
              if ( (posX - visibleTimelineWidth / 2) > (fullTimelineWidth - visibleTimelineWidth + 1) ) {
                mov = fullTimelineWidth - visibleTimelineWidth + 1;
              } else {
                mov = posX - visibleTimelineWidth / 2;
              }
            } else {
              mov = fullTimelineWidth - visibleTimelineWidth + 1;
            }
            break;
          default:
            // Move to specific event that has targeted id
            mov = 0;
            var targetId = '#' + control;
            if ( $(targetId).length ) {
              posX = $(targetId).position().left;
              if ( (posX - visibleTimelineWidth / 2) > (fullTimelineWidth - visibleTimelineWidth + 1) ) {
                mov = fullTimelineWidth - visibleTimelineWidth + 1;
              } else {
                mov = posX - visibleTimelineWidth / 2;
              }
            }
            break;
        }
        if ( $.inArray( animateSpeed, [ "slow", 'normal', 'fast' ] ) != -1 || Number( animateSpeed ) > 0 ) {
          $(this).find('.timeline-body').animate({ scrollLeft: mov }, animateSpeed);
        } else {
          $(this).find('.timeline-body').scrollLeft( mov );
        }
      }
      return this;
    },
    getOptions : function( ) {
      debugLog( 'Fired "getOptions" method.' );
      var $this   = $(this),
          data    = $this.data('timeline');
          //nodeMap = data.timeline[0].attributes;
      //debugLog( data.timeline.attr('i18n-month'), nodeMap, nodeMap['i18n-month'].value );
      return {
        title          : data.timeline.attr('title'),
        type           : data.timeline.attr('type'),
        scale          : data.timeline.attr('scale'),
        startDatetime  : data.timeline.attr('start-datetime'),
        datetimePrefix : data.timeline.attr('datetime-prefix'),
        showHeadline   : Number( data.timeline.attr('show-headline') ) == 1 ? true : false,
        datetimeFormat : {
          full         : data.timeline.attr('datetime-format-full'), // for event meta on detial view
          year         : data.timeline.attr('datetime-format-year'), // for headline
          month        : data.timeline.attr('datetime-format-month'), // for headline
          day          : data.timeline.attr('datetime-format-day'), // for headline
          years        : data.timeline.attr('datetime-format-years'), // for scale
          months       : data.timeline.attr('datetime-format-months'), // for scale
          days         : data.timeline.attr('datetime-format-days') // for scale
        },
        minuteInterval : Number( data.timeline.attr('minute-interval') ),
        zerofillYear   : Number( data.timeline.attr('zerofill-year') ) == 1 ? true : false,
        range          : Number( data.timeline.attr('range') ),
        rows           : Number( data.timeline.attr('rows') ),
        rowHeight      : Number( data.timeline.attr('row-height') ),
        height         : data.timeline.attr('timeline-height') === 'auto' ? 'auto' : Number( data.timeline.attr('timeline-height') ),
        minGridPer     : Number( data.timeline.attr('min-grid-per') ),
        minGridSize    : Number( data.timeline.attr('min-grid-size') ),
        rangeAlign     : data.timeline.attr('range-align'),
        naviIcon       : {
          left         : data.timeline.attr('navi-icon-left'),
          right        : data.timeline.attr('navi-icon-right')
        },
        showPointer    : data.timeline.attr('show-pointer'),
        i18n           : {
          month        : data.timeline.attr('i18n-month') !== '' ? JSON.parse( data.timeline.attr('i18n-month') ) : {},
          day          : data.timeline.attr('i18n-day')   !== '' ? JSON.parse( data.timeline.attr('i18n-day') ) : {},
          ma           : data.timeline.attr('i18n-ma')    !== '' ? JSON.parse( data.timeline.attr('i18n-ma') ) : {}
        },
        langsDir       : data.timeline.attr('langs-dir'),
        httpLanguage   : data.timeline.attr('http-language'),
        getLangUrl     : data.timeline.attr('get-lang-url'),
        events         : ( new Function( 'return ' + data.timeline.text() ) )()
      };
    },
    addEvent : function( events, callback ) {
      return this.each(function(){
        var $this       = $(this),
            data        = $this.data('timeline'),
            eventNodes  = ( new Function( 'return ' + data.timeline.text() ) )(),
            incrementId = 1,
            _ids        = [ incrementId ];
        // add events
        if ( events.length > 0 ) {
          $.each(eventNodes, function( i, evt ) {
            _ids.push( Number( evt.eventId ) );
          });
          incrementId = Math.max.apply( null, _ids ) + 1;
          $.each(events, function( i, evt ) {
            evt['eventId'] = incrementId;
            incrementId++;
            eventNodes.push(evt);
          });
          data.timeline.text( JSON.stringify( eventNodes ) );
        }
        
        placeEvents( $this );
        
        // Alignment to current node
        $(this).trigger( 'align.timeline', [ 'evt-' + (incrementId - 1) ] );
        
        if ( data && typeof callback === 'function' ) {
          debugLog( 'Fired "addEvent" method after events addition.' );
          callback( $this, data );
        }
      });
    },
    removeEvent : function( ) { // arguments is optional
      var eventIds, callback;
      if ( arguments.length == 0 ) {
        eventIds = 'all';
        callback = null;
      } else
      if ( arguments.length == 1 ) {
        if ( typeof arguments[0] === 'function' ) {
          eventIds = 'all';
          callback = arguments[0];
        } else {
          eventIds = arguments[0];
          callback = null;
        }
      } else {
        eventIds = arguments[0];
        callback = arguments[1];
      }
      return this.each(function(){
        var $this       = $(this),
            data        = $this.data('timeline'),
            eventNodes  = ( new Function( 'return ' + data.timeline.text() ) )();
        
        // remove events
        if ( eventIds === 'all' ) {
          eventNodes = [];
        } else {
          var newEventNodes = [];
          $.each(eventNodes, function( i, evt ) {
            if ( $.inArray( evt.eventId, eventIds ) == -1 ) {
              newEventNodes.push(evt);
            }
          });
          eventNodes = newEventNodes;
        }
        data.timeline.text( JSON.stringify( eventNodes ) );
        
        placeEvents( $this );
        
        if ( data && typeof callback === 'function' ) {
          debugLog( 'Fired "removeEvent" method after events removing.' );
          callback( $this, data );
        }
      });
    },
    updateEvent : function( events, callback ) {
      if ( typeof events === 'undefined' ) {
        return false;
      }
      return this.each(function(){
        var $this       = $(this),
            data        = $this.data('timeline'),
            _ids        = [],
            eventNodes, lastUpdated;
        // update events
        if ( events.length > 0 ) {
          $.each( events, function( i, newEvt ) {
            _ids.push(newEvt.eventId);
          });
        }
console.log( data.timeline[0].textContent );
        data.timeline.ready(function(){
console.log( this );
          eventNodes = ( new Function( 'return ' + $(this).text() ) )();
//        });
        if ( eventNodes.length > 0 && _ids.length > 0 ) {
          $.each( eventNodes, function( i, evt ) {
            if ( $.inArray( evt.eventId, _ids ) != -1 ) {
              var newEvent;
              $.each( events, function( j, newEvt ) {
                if ( newEvt.eventId == evt.eventId ) {
                  newEvent = newEvt;
                  lastUpdated = newEvt.eventId;
                  return false;
                }
              });
              eventNodes[i] = newEvent;
            }
          });
          data.timeline.text( JSON.stringify( eventNodes ) );
        }
        
        placeEvents( $this );
        
        // Alignment to current node
        $(this).trigger( 'align.timeline', [ 'evt-' + lastUpdated ] );
        
        if ( data && typeof callback === 'function' ) {
          debugLog( 'Fired "updateEvent" method after events updating.' );
          callback( $this, data );
        }
});
      });
    },
    openEvent : function( event ) {
      var eventId         = Number( $(event.target).attr('id').replace('evt-', '') ),
          currentTimeline = event.delegateTarget;
      if ( eventId === '' || eventId == 0 ) {
        return false;
      }
      return $(currentTimeline).each(function(){
        var data       = $(this).data('timeline'),
            eventNodes = ( new Function( 'return ' + data.timeline.text() ) )(),
            metaFormat = { start: data.timeline.attr('datetime-format-meta'), end: data.timeline.attr('datetime-format-metato') },
            eventData;
        $.each( eventNodes, function( i, evt ) {
          if ( evt.eventId == eventId ) {
            eventData = evt;
            return false;
          }
        });
        
        // Activate focused event
        $(this).find('.timeline-node').each(function(){
          if ( $(this).attr('id') === 'evt-' + eventId ) {
            $(this).addClass('active');
          } else {
            $(this).removeClass('active');
          }
        });
        
        // Alignment to current node
        $(this).trigger( 'align.timeline', [ 'evt-' + eventId ] );
        
        if ( showEvent( eventData, metaFormat ) && eventData.callback ) {
          debugLog( 'Fired "openEvent" method after event shown.' );
          Function.call( null, 'return ' + eventData.callback )();
          //var callback = Function.call( null, 'return ' + eventData.callback )();
          //callback.call( eventData );
        }
      });
    }
  };

  $.fn.timeline = function( method ) {
    // Dispatcher of Plugin
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ) );
    } else
    if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' + method + ' does not exist on jQuery.timeline.' );
    }
    
  };

  function renderTimeline( obj ) {
    // Rendering timeline view
    var $this = $(obj), i, _tmp, _regx, 
        data = $this.data('timeline');
    debugLog( 'Called "renderTimeline" function', $this, data.timeline );
    
    _regx = /-|\/|\s|\:/;
    _tmp = data.timeline.attr('actual-start-datetime').split( _regx );
    var startDt = new Date( Number( _tmp[0] ), Number( _tmp[1] ) - 1, Number( _tmp[2] ), Number( _tmp[3] ), Number( _tmp[4] ), Number( _tmp[5] ) );
    if ( Number( _tmp[0] ) < 100 ) {
      // for 0 - 99 years map
      startDt.setFullYear( Number( _tmp[0] ) );
    }
    
    var tlHeader = $('<div />', { addClass: "timeline-header" }),
        tlBody   = $('<div />', { addClass: "timeline-body" }),
        tlFooter = $('<div />', { addClass: "timeline-footer" }),
        tlWrapper= $('<div />', { addClass: "timeline-wrapper" }),
        tlScale  = $('<table />', { addClass: "timeline-timetable timeline-scale" }),
        tlEvents = $('<div />', { addClass: "timeline-events" }),
        tlGrids  = $('<table />', { addClass: "timeline-timetable timeline-grids" }),
        tlPointer= $('<div />', { addClass: "timeline-needle-pointer" }),
        dfEvents = $('<div />', { addClass: "timeline-events default-events" }),
        endDt    = new Date( startDt ),
        scaleSet = {
          years  : {
            "medium_scale": "months",
            "medium_cols": 12,
            "small_scale": "days",
            "small_cols": Number( data.timeline.attr('min-grid-per') )
          },
          months : {
            "medium_scale": "days",
            "medium_cols": new Date( startDt.getFullYear(), startDt.getMonth() + 1, 0 ).getDate(),
            "small_scale": "hours",
            "small_cols": Number( data.timeline.attr('min-grid-per') )
          },
          days   : {
            "medium_scale": "hours",
            "medium_cols": 24,
            "small_scale": "minutes",
            "small_cols": Number( data.timeline.attr('min-grid-per') ) // retriveDaysGrid( data.timeline.attr('minute-interval'), data.timeline.attr('min-grid-per') )
          }
        },
        topScale = data.timeline.attr('scale'),
        midScale = scaleSet[topScale]['medium_scale'],
        smlScale = scaleSet[topScale]['small_scale'],
        mediumCellSize = Number( data.timeline.attr( 'min-grid-per' ) ) * Number( data.timeline.attr( 'min-grid-size' ) ),
        scaleMediumCols = [ scaleSet[topScale]['medium_cols'] ],
        scaleSmallCols, _tmpDt;
    
    // initialize element
    if ( ! $this.hasClass('timeline-container') ) {
      $this.addClass('timeline-container');
    }
    if ( $this.find('.timeline-events').length > 0 ) {
      $this.find('.timeline-events').children().clone().appendTo( dfEvents );
      defaultEvents( dfEvents, data );
    }
    if ( data.timeline.attr( 'type' ) === 'point' || data.timeline.attr( 'type' ) === 'mixed' ) {
      var tlLineCanvas = $('<canvas />', { addClass: "timeline-line-canvas" });
    }
    $this.empty();
    
    // Set endDate
    if ( data.timeline.attr('scale') === 'years' ) {
      endDt.setFullYear( endDt.getFullYear() + Number( data.timeline.attr('range') ) );
      _tmpDt = endDt.getTime();
      endDt.setTime( _tmpDt - 1 );
    } else
    if ( data.timeline.attr('scale') === 'months' ) {
      endDt.setMonth( endDt.getMonth() + Number( data.timeline.attr('range') ) );
      _tmpDt = endDt.getTime();
      endDt.setTime( _tmpDt - 1 );
    } else {
      endDt.setDate( endDt.getDate() + Number( data.timeline.attr('range') ) );
      _tmpDt = endDt.getTime();
      endDt.setTime( _tmpDt - 1 );
    }
    
    // Set scaleMediumCols
    if ( midScale === 'days' && Number( data.timeline.attr('range') ) > 1 ) {
      for ( i = 1; i < Number( data.timeline.attr('range') ); i++ ) {
         scaleMediumCols.push( new Date( startDt.getFullYear(), startDt.getMonth() + 1 + i, 0 ).getDate() );
      }
    } else {
      for ( i = 1; i < Number( data.timeline.attr('range') ); i++ ) {
        scaleMediumCols.push( scaleSet[topScale]['medium_cols'] );
      }
    }
    
    // Create header
    if ( data.timeline.attr('show-headline') ) {
      var fromDate, toDate, zf, zt, tlTitle;
      switch( data.timeline.attr('scale') ) {
        case "years":
          zf = zt = '';
          if ( data.timeline.attr('zerofill-year') == 1 ) {
            if ( startDt.getFullYear() < 100 ) {
              zf = '00';
            } else
            if ( startDt.getFullYear() < 1000 ) {
              zf = '0';
            }
            if ( endDt.getFullYear() < 100 ) {
              zt = '00';
            } else
            if ( endDt.getFullYear() < 1000 ) {
              zt = '0';
            }
          }
          fromDate = data.timeline.attr('datetime-prefix') + zf + formatDate( data.timeline.attr('datetime-format-year'), startDt );
          toDate   = data.timeline.attr('datetime-prefix') + zt + formatDate( data.timeline.attr('datetime-format-year'), endDt );
          break;
        case "months":
          fromDate = data.timeline.attr('datetime-prefix') + formatDate( data.timeline.attr('datetime-format-month'), startDt );
          toDate   = data.timeline.attr('datetime-prefix') + formatDate( data.timeline.attr('datetime-format-month'), endDt );
          break;
        case "days":
          fromDate = data.timeline.attr('datetime-prefix') + formatDate( data.timeline.attr('datetime-format-day'), startDt );
          toDate   = data.timeline.attr('datetime-prefix') + formatDate( data.timeline.attr('datetime-format-day'), endDt );
          break;
      }
      tlTitle = '<span class="timeline-from-date">' + fromDate + '</span><span class="timeline-to-date">' + toDate + '</span>';
      tlHeader.append('<h3 class="timeline-headline">' + tlTitle + '</h3>');
    }
    
    // Create Time Scale
    var topLevelRow = '<tr>',
        mediumLevelRow = '<tr>',
        smallLevelRow = '<tr>',
        tmpDate, resMod, label, cellDt;
    scaleSmallCols = array_sum( scaleMediumCols ) * scaleSet[topScale]['small_cols'];
    
    // Stored total cols
    data.timeline.attr( 'total-cols', scaleSmallCols );
    
    // Row of top level time scale
    for ( i = 0; i < Number( data.timeline.attr('range') ); i++ ) {
      topLevelRow += '<th colspan="' + ( scaleMediumCols[i] * scaleSet[topScale]['small_cols'] ) + '" class="scale-major scale-' + topScale + '">';
      tmpDate = new Date( startDt );
      switch ( topScale ) {
        case 'years':
          tmpDate.setFullYear( tmpDate.getFullYear() + i );
          zf = '';
          if ( data.timeline.attr('zerofill-year') == 1 ) {
            if ( tmpDate.getFullYear() < 100 ) {
              zf = '00';
            } else
            if ( tmpDate.getFullYear() < 1000 ) {
              zf = '0';
            }
          }
          label = zf + formatDate( data.timeline.attr('datetime-format-years'), tmpDate );
          break;
        case 'months':
          tmpDate.setMonth( tmpDate.getMonth() + i );
          label = formatDate( data.timeline.attr('datetime-format-months'), tmpDate );
          break;
        case 'days':
          tmpDate.setDate( tmpDate.getDate() + i );
          label = formatDate( data.timeline.attr('datetime-format-days'), tmpDate );
          break;
      }
      topLevelRow += label + '</th>';
    }
    topLevelRow += '</tr>';
    
    // Row of medium level time scale
    for ( i = 0; i < array_sum( scaleMediumCols ); i++ ) {
      tmpDate = new Date( startDt );
      switch ( midScale ) {
        case 'months':
          resMod = i % scaleSet[topScale]['medium_cols'];
          label = mediumCellSize < 18 ? '' : resMod + 1;
          cellDt = new Date( tmpDate.getFullYear(), tmpDate.getMonth() + i, 1 ).getTime();
          break;
        case 'days':
          tmpDate.setDate( tmpDate.getDate() + i );
          label = mediumCellSize < 20 ? '' : tmpDate.getDate();
          cellDt = tmpDate.getTime();
          break;
        case 'hours':
          resMod = i % scaleSet[topScale]['medium_cols'];
          label = mediumCellSize < 40 ? '' : resMod + ':00';
          cellDt = tmpDate.setTime( tmpDate.getTime() + i * 3600000 );
          break;
      }
      mediumLevelRow += '<th colspan="' + scaleSet[topScale]['small_cols'] + '" class="scale-medium scale-' + midScale + '" data-cell-datetime="' + cellDt + '">';
      mediumLevelRow += label + '</th>';
    }
    mediumLevelRow += '</tr>';
    
    // Row of small level time scale
    for ( i = 0; i < scaleSmallCols; i++ ) {
      smallLevelRow += '<th class="scale-small scale-' + smlScale + '"><span class="spacer-cell"></span></th>';
    }
    
    // Create Timeline grids
    var tlGridsRow = '<tr>';
    for ( i = 0; i < scaleSmallCols; i++ ) {
      tlGridsRow += '<td class="scale-small"><span class="spacer-cell"></span></td>';
    }
    tlGridsRow += '</tr>';
    
    // Create Timeline needle pointer
    if ( data.timeline.attr( 'show-pointer' ) == 0 ) {
      tlPointer.css('display', 'none');
    } else {
      var currentDt = setCurrentDate( true ),
          posX = getAbscissa( currentDt, data );
      if ( posX !== false ) {
        tlPointer.css('left', posX + 'px');
      } else {
        tlPointer.css('display', 'none');
      }
    }
    
    // Create Timeline loader & Timeline Events
    var tlLoader = $('<div />', { addClass: "timeline-loader", css: { display: 'block' } });
    tlLoader.append( '<i class="jqtl-spinner"></i><span class="sr-only">Loading...</span>' );
    
    // Create Timeline footer
    var tlFooterNav    = '<div class="timeline-nav">',
        tlNavLeft      = data.timeline.attr( 'navi-icon-left' ) === '' ? 'jqtl-circle-left' : data.timeline.attr( 'navi-icon-left' ),
        tlNavRight     = data.timeline.attr( 'navi-icon-right' ) === '' ? 'jqtl-circle-right' : data.timeline.attr( 'navi-icon-right' ),
        tlNavPrevClass = /^jqtl-circle-.*$/.test( tlNavLeft ) ? 'timeline-to-prev-default' : 'timeline-to-prev-custom',
        tlNavNextClass = /^jqtl-circle-.*$/.test( tlNavRight ) ? 'timeline-to-next-default' : 'timeline-to-next-custom';
    tlFooterNav += '<a href="javascript:void(0);" class="timeline-to-prev ' + tlNavPrevClass + '"><i class="' + tlNavLeft + '"></i></a>';
    tlFooterNav += '<a href="javascript:void(0);" class="timeline-to-next ' + tlNavNextClass + '"><i class="' + tlNavRight + '"></i></a>';
    tlFooterNav += '</div>';
    
    // Build Elements
    tlScale.append( '<thead>' + topLevelRow + mediumLevelRow + smallLevelRow + '</thead>' );
    tlGrids.append( '<tbody>' + tlGridsRow + '</tbody>' );
    if ( data.timeline.attr( 'type' ) === 'point' || data.timeline.attr( 'type' ) === 'mixed' ) {
      tlWrapper.append( tlScale.prop('outerHTML') + tlEvents.prop('outerHTML') + tlLineCanvas.prop('outerHTML') + tlGrids.prop('outerHTML') + tlPointer.prop('outerHTML') );
    } else {
      tlWrapper.append( tlScale.prop('outerHTML') + tlEvents.prop('outerHTML') + tlGrids.prop('outerHTML') + tlPointer.prop('outerHTML') );
    }
    tlBody.append( tlWrapper );
    tlFooter.append( tlFooterNav );
    
    $this.append( tlHeader );
    $this.append( tlBody );
    $this.append( tlFooter );
    $this.append( tlLoader.prop('outerHTML') );
    
    return $this;
  }

  function resizeTimeline( obj ) {
    // Resizing timeline view
    var $this = $(obj),
        data = $this.data('timeline');

    if ( data.timeline.attr('timeline-height') === "auto" || typeof data.timeline.attr('timeline-height') !== "number" ) {
      // tlEventAreaH = Number( data.timeline.attr('rows') ) * rowH;
      tlEventAreaH = Number( data.timeline.attr('rows') ) * Number( data.timeline.attr('row-height') );
    } else {
      tlEventAreaH = Number( data.timeline.attr('timeline-height') );
    }
    var timetableSize = {
      width : $this.find('.timeline-timetable.timeline-scale').outerWidth(),
      height: 63 // $this.find('.timeline-timetable.timeline-scale').outerHeight() : it's impossible to obtain an accurate value with this, but OK if it uses bootstrap! (Why!?)
    };
    if ( $this.find('.timeline-wrapper')[0].offsetHeight != timetableSize.height + tlEventAreaH ) {
      $this.find('.timeline-wrapper').css('height', (timetableSize.height + tlEventAreaH) + 'px');
      $this.find('.timeline-events').css('height', tlEventAreaH + 'px');
      $this.find('.timeline-line-canvas').css('height', tlEventAreaH + 'px').attr('width', timetableSize.width).attr('height', tlEventAreaH);
      $this.find('.timeline-grids').css('height', tlEventAreaH + 'px');
    }
    data.timeline.attr('min-grid-size', Number( data.timeline.attr('min-grid-size') ) < 5 ? 30 : Number( data.timeline.attr('min-grid-size') ) );
    if ( $this.find('.spacer-cell').width() != data.timeline.attr('min-grid-size') - 1 ) {
      $this.find('.spacer-cell').css('width', (data.timeline.attr('min-grid-size') - 1) + 'px');
    }
    
    // Adjust position of navi icons
    var basePos     = ( $this.find('.timeline-body').outerHeight() - $this.find('.timeline-scale').outerHeight() ) / 2,
        navIconH    = $this.find('.timeline-to-prev').outerHeight(),
        navPosition = -1 * ( basePos + navIconH );
    $this.find('.timeline-to-prev').css('top', navPosition + 'px');
    $this.find('.timeline-to-next').css('top', navPosition + 'px');
    
    // Set event of scrolling timeline
    $this.find('.timeline-body').scroll(function(){
      var currentScrollLeft = $(this).scrollLeft();
      if ( currentScrollLeft < 1 ) {
        // Terminated Left
        $this.find('.timeline-to-prev').hide();
      } else
      if ( currentScrollLeft >= (timetableSize.width - $(this).outerWidth() - 2) ) {
        // Terminated Right
        $this.find('.timeline-to-next').hide();
      } else {
        $this.find('.timeline-to-prev').show();
        $this.find('.timeline-to-next').show();
      }
    });
    
    return $this;
  }

  function defaultEvents( obj, data ) {
    // Defining default events
    //if ( $(obj).find('.timeline-events').children().length > 0 ) {
    if ( $(obj).children().length > 0 ) {
      var eventData = [],
          eventIds = [],
          startEventId = 1;
      //$(obj).find('.timeline-events').children().each(function(){
      $(obj).children().each(function(){
        if ( $(this).data('timelineNode') ) {
          var event = ( new Function( 'return ' + $(this).data('timelineNode') ) )();
          event['label'] = $(this).text();
          if ( event.eventId ) 
            eventIds.push( Number( event.eventId ) );
          eventData.push( event );
        }
      });
      if ( eventData.length > 0 ) {
        startEventId = eventIds.length > 0 ? Math.max.apply( null, eventIds ) + 1 : startEventId;
        eventData.forEach(function( evt, i, ary ) {
          if ( ! evt.eventId ) {
            ary[i]['eventId'] = startEventId;
            startEventId++;
          }
        });
        data.timeline.text( JSON.stringify( eventData ) );
      }
    }
    return data;
  }

  function placeEvents( obj ) {
    // Placing all events
    var $this       = $(obj),
        data        = $this.data('timeline'),
        eventNodes  = ( new Function( 'return ' + data.timeline.text() ) )(),
        tlStartDt   = new Date( normalizeDate( data.timeline.attr('actual-start-datetime') ) ),
        tlEndDt     = new Date( tlStartDt ),
        tlType      = data.timeline.attr('type'),
        tlScale     = data.timeline.attr('scale'),
        tlRange     = Number( data.timeline.attr('range') ),
        rowH        = Number( data.timeline.attr('row-height') ),
        tlTotalCols = Number( data.timeline.attr('total-cols') ),
        minGridPer  = Number( data.timeline.attr('min-grid-per') ),
        minGridSize = Number( data.timeline.attr('min-grid-size') ),
        coordinate  = { x: 0, y: 0, w: 0 },
        tlWidth     = minGridSize * tlTotalCols - 1;
    $this.find('.timeline-loader').css( 'display', 'block' );
    
    // Updated tlEndDt
    switch( tlScale ) {
      case 'years':
        tlEndDt.setYear( tlEndDt.getFullYear() + tlRange );
        break;
      case 'months':
        tlEndDt.setMonth( tlEndDt.getMonth() + tlRange - 1 );
        break;
      case 'days':
        tlEndDt.setDate( tlEndDt.getDate() + tlRange );
        break;
    }
    
    $this.find('.timeline-events').empty();
    eventNodes.forEach(function( evt ) {
      if ( evt.start ) {
        var evtStartDt = new Date( normalizeDate( evt.start ) ),
            evtEndDt   = evt.end == undefined ? new Date( normalizeDate( evt.start ) ) : new Date( normalizeDate( evt.end ) ),
            msMonth    = 30 * 24 * 60 * 60 * 1000, // base value
            msDay      = 24 * 60 * 60 * 1000,
            msHour     = 60 * 60 * 1000,
            gridSize   = minGridPer * minGridSize,
            tlNodeElm;
        if ( isBetweenTo( evtStartDt, tlStartDt, tlEndDt ) ) {
          // When the event start date and time is within the timeline display range.
          switch( tlScale ) {
            case 'years':
              coordinate.x = Math.round( ( ( evtStartDt - tlStartDt ) * tlWidth ) / ( tlEndDt - tlStartDt ) );
              break;
            case 'months':
              coordinate.x = Math.floor( ( evtStartDt - tlStartDt ) / msDay * gridSize );
              break;
            case 'days':
              coordinate.x = Math.floor( ( evtStartDt - tlStartDt ) / msHour * gridSize );
              break;
          }
          coordinate.y = typeof evt.row !== 'undefined' ? ( evt.row - 1 ) * rowH : 0;
          if ( isBetweenTo( evtEndDt, tlStartDt, tlEndDt ) ) {
            // When the event end date and time is within the timeline display range; Define the width of the event block.
            switch( tlScale ) {
              case 'years':
                coordinate.w = Math.floor( ( ( evtEndDt - tlStartDt ) / msMonth * gridSize ) - coordinate.x );
                break;
              case 'months':
                coordinate.w = Math.floor( ( ( evtEndDt - tlStartDt ) / msDay * gridSize ) - coordinate.x );
                break;
              case 'days':
                coordinate.w = Math.floor( ( ( evtEndDt - tlStartDt ) / msHour * gridSize ) - coordinate.x );
                break;
            }
            if ( coordinate.w == 0 ) {
              coordinate.w = 1;
            }
          } else {
            // When the event end date and time exceeds the timeline display range; Define the width of the event block as the timeline display area maximum.
            switch( tlScale ) {
              case 'years':
                coordinate.w = Math.floor( ( ( tlEndDt - tlStartDt ) / msMonth * gridSize ) - coordinate.x );
                break;
              case 'months':
                coordinate.w = Math.floor( ( ( tlEndDt - tlStartDt ) / msDay * gridSize ) - coordinate.x );
                break;
              case 'days':
                coordinate.w = Math.floor( ( ( tlEndDt - tlStartDt ) / msHour * gridSize ) - coordinate.x );
                break;
            }
          }
        } else
        if ( isBetweenTo( evtEndDt, tlStartDt, tlEndDt ) ) {
          // When the event end date and time is within the time line display range.
          coordinate.x = 0;
          coordinate.y = typeof evt.row !== 'undefined' ? ( evt.row - 1 ) * rowH : 0;
          switch( tlScale ) {
            case 'years':
              coordinate.w = Math.floor( ( evtEndDt - tlStartDt ) / msMonth * gridSize );
              break;
            case 'months':
              coordinate.w = Math.floor( ( evtEndDt - tlStartDt ) / msDay * gridSize );
              break;
            case 'days':
              coordinate.w = Math.floor( ( evtEndDt - tlStartDt ) / msHour * gridSize );
              break;
          }
        } else
        if ( isBetweenTo( tlStartDt, evtStartDt, evtEndDt ) && isBetweenTo( tlEndDt, evtStartDt, evtEndDt ) ) {
          // If the timeline display range is included within the event period. (for long-term band events)
          coordinate.x = 0;
          coordinate.y = typeof evt.row !== 'undefined' ? ( evt.row - 1 ) * rowH : 0;
          switch( tlScale ) {
            case 'years':
              coordinate.w = Math.floor( ( tlEndDt - tlStartDt ) / msMonth * gridSize );
              break;
            case 'months':
              coordinate.w = Math.floor( ( tlEndDt - tlStartDt ) / msDay * gridSize );
              break;
            case 'days':
              coordinate.w = Math.floor( ( tlEndDt - tlStartDt ) / msHour * gridSize );
              break;
          }
        } else {
          coordinate.w = 0;
        }
        if ( coordinate.w > 0 ) {
          if ( tlType === 'point' ) {
            // For event view type: point
            var margin = evt.margin ? Number( evt.margin ) : pointMargin;
            margin = margin < 0 ? 0 : margin; 
            margin = margin > (rowH / 2) ? (rowH / 2) - 1 : margin;
            tlNodeElm = $('<div />', {
              addClass: 'timeline-node timeline-event-pointer',
              id: 'evt-' + evt.eventId,
              css: {
                left  : coordinate.x - Math.floor(rowH / 2) + margin + 'px',
                top   : coordinate.y + margin + 'px',
                width : rowH - (margin * 2) + 'px',
                height: rowH - (margin * 2) + 'px'
              },
              title: evt.label
            });
            if ( evt.bdColor ) {
              tlNodeElm.css('border-color', evt.bdColor );
            } else 
            if ( evt.bgColor ) {
              tlNodeElm.css('border-color', evt.bgColor );
            }
            if ( evt.image ) {
              tlNodeElm.css('background-image', 'url(' + evt.image +')');
            }
            if ( evt.relation ) {
              $.each(evt.relation, function( key, value ) {
                if ( $.inArray( key, [ 'before', 'after', 'size' ] ) != -1 && ! isNaN( value ) ) {
                  tlNodeElm.attr( 'data-relay-' + key, Number( value ) );
                } else
                if ( key === 'curve' ) {
                  if ( $.inArray( value, [ 'lt', 'rt', 'lb', 'rb' ] ) != -1 ) {
                    tlNodeElm.attr( 'data-relay-curve', value );
                  }
                } else {
                  tlNodeElm.attr( 'data-relay-' + key, value );
                }
              });
            }
          } else {
            // For event view type: bar
            tlNodeElm = $('<div />', {
              addClass: 'timeline-node timeline-text-truncate',
              id: 'evt-' + evt.eventId,
              css: {
                left  : coordinate.x + 'px',
                top   : coordinate.y + 'px',
                width : coordinate.w + 'px'
              },
              text: evt.label
            });
            if ( evt.color ) {
              tlNodeElm.css('color', evt.color );
            }
            if ( coordinate.w < minGridSize ) {
              tlNodeElm.css('padding-left', '1.5rem').css('padding-right', '0').css('text-overflow', 'clip');
            }
          }
          if ( evt.bgColor ) {
            tlNodeElm.css('background-color', evt.bgColor );
          }
          if ( evt.extend ) {
            $.each(evt.extend, function( key, value ) {
              tlNodeElm.attr( 'data-' + key, value );
            });
          }
          $this.find('.timeline-events').append( tlNodeElm.prop('outerHTML') );
        }
      }
      // End of forEach
    });
    $this.find('.timeline-loader').css( 'display', 'none' );
    
    if ( tlType === 'point' || tlType === 'mixed' ) {
      drowRelationLine( $this );

      // Set event of hovering event-node (point type)
      $this.find('.timeline-event-pointer').hover(function(e){
        var defaultAxis;
        if ( e.type === 'mouseenter' ) {
          defaultAxis = { left: parseInt( $(this).css('left') ), top: parseInt( $(this).css('top') ), width: parseInt( $(this).css('width') ), height: parseInt( $(this).css('height') ) };
          $(this).attr( 'data-default-axis', JSON.stringify( defaultAxis ) );
          // on hover action
          if ( ! $(this).hasClass('hovered') ) {
            $(this).addClass('hovered').animate({ left: defaultAxis.left - rowH/10, top: defaultAxis.top - rowH/10, width: defaultAxis.width + rowH/10*2, height: defaultAxis.height + rowH/10*2 },0);
          }
        } else
        if ( e.type === 'mouseleave' ) {
          defaultAxis = $(this).data( 'defaultAxis' );
          $(this).css('left', defaultAxis.left + 'px').css('top', defaultAxis.top + 'px').css('width', defaultAxis.width + 'px').css('height', defaultAxis.height + 'px');
          $(this).removeAttr( 'data-default-axis' );
          // off hover action
          if ( $(this).hasClass('hovered') ) {
            $(this).removeClass('hovered');
          }
        }
      });
    
    }
  }

  function drowRelationLine( obj ) {
    var events   = obj.find('.timeline-node.timeline-event-pointer'),
        canvas   = obj.find('.timeline-line-canvas')[0],
        ctx;
    if ( ! canvas.getContext ) {
      return;
    }
    ctx = canvas.getContext('2d');
    // Get data for drawing and draw line
    events.each(function(){
      var lineColor = $(this).data('relayLinecolor') == undefined ? $(this).css('border-left-color') : $(this).data('relayLinecolor'),
          lineSize  = $(this).data('relayLinesize') == undefined ? Math.round(rowH/10) : $(this).data('relayLinesize'),
          selfPoint, startPoint, endPoint, cv, margin, diffRow;
      // initialize
      ctx.strokeStyle = lineColor;
      ctx.lineWidth   = lineSize;
      ctx.lineJoin    = 'round';
      ctx.lineCap = 'round';
      cv = {
        x: (rowH - ctx.lineWidth) / 2,
        y: rowH / 2
      };
      margin = Math.floor( (rowH - $(this)[0].offsetWidth) / 2 );
      selfPoint = {
        x: $(this)[0].offsetLeft - margin + cv.x,
        y: Math.floor( $(this)[0].offsetTop / rowH ) * rowH + cv.y
      };
      
      // Draw lines
      if ( $(this).data('relayBefore') != undefined ) {
        // Draw from before-event to myself
        if ( $(this).data('relayBefore') > 0 ) {
          if ( $('#evt-' + $(this).data('relayBefore')).length > 0 ) {
            margin = Math.floor( (rowH - $('#evt-' + $(this).data('relayBefore'))[0].offsetWidth) / 2 );
            startPoint = {
              x: $('#evt-' + $(this).data('relayBefore'))[0].offsetLeft - margin + cv.x,
              y: Math.floor( $('#evt-' + $(this).data('relayBefore'))[0].offsetTop / rowH ) * rowH + cv.y
            };
          }
        } else {
          startPoint = { x: 0, y: selfPoint.y };
        }
        if ( startPoint ) {
          diffRow = ( startPoint.y - selfPoint.y ) / rowH;
          if ( Math.abs( diffRow ) > 0 && $(this).data('relayCurve') != undefined && $.inArray( $(this).data('relayCurve'), [ 'lt', 'rt', 'lb', 'rb' ] ) != -1 ) {
            drawLine( startPoint, selfPoint, $(this).data('relayCurve') );
          } else {
            drawLine( startPoint, selfPoint );
          }
        }
      }
      if ( $(this).data('relayAfter') != undefined ) {
        // Draw from myself to after-event
        if ( $(this).data('relayAfter') > 0 ) {
          if ( $('#evt-' + $(this).data('relayAfter')).length > 0 ) {
            margin = Math.floor( (rowH - $('#evt-' + $(this).data('relayAfter'))[0].offsetWidth) / 2 );
            endPoint = {
              x: $('#evt-' + $(this).data('relayAfter'))[0].offsetLeft - margin + cv.x,
              y: Math.floor( $('#evt-' + $(this).data('relayAfter'))[0].offsetTop / rowH ) * rowH + cv.y
            };
          }
        } else {
          endPoint = { x: canvas.width, y: selfPoint.y };
        }
        if ( endPoint ) {
          diffRow = ( selfPoint.y - endPoint.y ) / rowH;
          if ( Math.abs( diffRow ) > 0 && $(this).data('relayCurve') != undefined && $.inArray( $(this).data('relayCurve'), [ 'lt', 'rt', 'lb', 'rb' ] ) != -1 ) {
            drawLine( selfPoint, endPoint, $(this).data('relayCurve') );
          } else {
            drawLine( selfPoint, endPoint );
          }
        }
      }
      
    });
    
    function drawLine( start, end, curve ) {
      if ( typeof start !== 'object' || typeof end !== 'object' ) {
        return;
      }
      curve = curve || false;
      var diff = { x: Math.abs( (start.x - end.x) / rowH ), y:Math.abs( (start.y - end.y) / rowH ) },
          controlPoint;
      ctx.beginPath();
      ctx.moveTo( start.x, start.y );
      if ( curve !== false ) {
        switch ( curve ) {
          case 'lt':
            controlPoint = {
              relayStartX: start.x, 
              relayStartY: end.y + rowH,
              cpx: start.x,
              cpy: end.y,
              relayEndX: start.x + rowH,
              relayEndY: end.y
            };
            break;
          case 'rt':
            controlPoint = {
              relayStartX: end.x - rowH,
              relayStartY: start.y,
              cpx: end.x,
              cpy: start.y,
              relayEndX: end.x,
              relayEndY: start.y + rowH
            };
            break;
          case 'lb':
            controlPoint = {
              relayStartX: start.x,
              relayStartY: end.y - rowH,
              cpx: start.x,
              cpy: end.y,
              relayEndX: start.x + rowH,
              relayEndY: end.y
            };
            break;
          case 'rb':
            controlPoint = {
              relayStartX: end.x - rowH,
              relayStartY: start.y,
              cpx: end.x,
              cpy: start.y,
              relayEndX: end.x,
              relayEndY: start.y - rowH
            };
            break;
        }
        if ( diff.x > 1 || diff.y > 1 ) {
          ctx.lineTo( controlPoint.relayStartX, controlPoint.relayStartY );
        }
        ctx.quadraticCurveTo( controlPoint.cpx, controlPoint.cpy, controlPoint.relayEndX, controlPoint.relayEndY );
      }
      ctx.lineTo( end.x, end.y );
      ctx.stroke();
    }

  }

  function showEvent( eventData, metaFormat ) {
    if ( $('.timeline-event-view').length == 0 ) {
      return true;
    }
    $('.timeline-event-view').empty();
    var tlevHeader = $('<div />', { addClass: "timeline-event-header" }),
        tlevLabel  = $('<h3 />',  { addClass: "timeline-event-label" }),
        tlevMeta   = $('<div />', { addClass: "timeline-event-meta" }),
        tlevBody   = $('<div />', { addClass: "timeline-event-body" }),
        tlevFooter = $('<div />', { addClass: "timeline-event-footer" }),
        temp;
    tlevLabel.text( eventData.label );
    if ( metaFormat.end === '' ) {
      metaFormat.end = metaFormat.start;
    }
    temp =  '<span class="timeline-event-start-date">' + formatDate( metaFormat.start, eventData.start ) + '</span>';
    if ( eventData.end ) {
      temp += '<span class="timeline-event-date-separator"></span>';
      temp += '<span class="timeline-event-end-date">' + formatDate( metaFormat.end, eventData.end ) + '</span>';
    }
    tlevHeader.append( tlevLabel.prop('outerHTML') + tlevMeta.append( temp ).prop('outerHTML') );
    if ( eventData.content ) {
      tlevBody.html( eventData.content );
    }
    
    $('.timeline-event-view').append( tlevHeader.prop('outerHTML') + tlevBody.prop('outerHTML') + tlevFooter.prop('outerHTML') );
    
    return true;
  }

  var retriveServerDate = function( ) {
    // Retrive datetime from server
    return $.ajax({
      type: 'GET'
    }).done(function(d,s,xhr){
      $('body').data('serverDate', new Date( normalizeDate( xhr.getResponseHeader('Date') ) ) );
    }).promise();
  };

  function setCurrentDate( fromServer ) {
    // Setting currently datetime
    var currentDate = new Date();
    if ( fromServer ) {
      retriveServerDate().then(function() {
        currentDate = $('body').data('serverDate');
        $.removeData('body', 'serverDate');
      }, function() {
        currentDate = new Date();
      });
    }
    return currentDate;
  }
  
  function isBetweenTo( targetDate, beginDate, endDate ) {
    // Determine whether the specified date and time is within range
    var targetDt = new Date( targetDate ).getTime(),
        beginDt  = new Date( beginDate ).getTime(),
        endDt    = new Date( endDate ).getTime();
    return targetDt - beginDt >= 0 && endDt - targetDt >= 0;
  }
  
  function getAbscissa( targetDt, dataObject ) {
    targetDt    = Object.prototype.toString.call( targetDt ) === '[object Date]' ? targetDt : new Date( normalizeDate( targetDt ) );
    var data        = dataObject.timeline,
        //justify     = $.inArray( justify.toLowerCase(), [ 'left', 'center' ] ) != -1 ? justify.toLowerCase() : 'center',
        startDt     = new Date( normalizeDate( data.attr('actual-start-datetime') ) ),
        endDt       = new Date( startDt ),
        scale       = data.attr('scale'),
        range       = Number( data.attr('range') ),
        tlTotalCols = Number( data.attr('total-cols') ),
        minGridPer  = Number( data.attr('min-grid-per') ),
        minGridSize = Number( data.attr('min-grid-size') ),
        tlWidth     = minGridSize * tlTotalCols - 1,
        msDay       = 24 * 60 * 60 * 1000,
        msHour      = 60 * 60 * 1000,
        gridSize    = minGridPer * minGridSize,
        _tmpDt, posX;
    // Set end datetime
    switch ( scale ) {
      case 'years':
        endDt = new Date( endDt.setFullYear( endDt.getFullYear() + range ) );
        _tmpDt = endDt.getTime();
        endDt.setTime( _tmpDt - 1 );
        break;
      case 'months':
        endDt = new Date( endDt.setMonth( endDt.getMonth() + range ) );
        _tmpDt = endDt.getTime();
        endDt.setTime( _tmpDt - 1 );
        break;
      case 'days':
        endDt = new Date( endDt.setDate( endDt.getDate() + range ) );
        _tmpDt = endDt.getTime();
        endDt.setTime( _tmpDt - 1 );
        break;
    }
    if ( isBetweenTo( targetDt, startDt, endDt ) ) {
      switch ( scale ) {
        case 'years':
          posX = Math.round( ( ( targetDt - startDt ) * tlWidth ) / ( endDt - startDt ) );
          break;
        case 'months':
          posX = Math.floor( ( targetDt - startDt ) / msDay * gridSize );
          break;
        case 'days':
          posX = Math.floor( ( targetDt - startDt ) / msHour * gridSize );
          break;
      }
      return posX;
    } else {
      return false;
    }
  }
  
  function normalizeDate( dateString ) {
    // For Safari
    return dateString.replace(/-/g, '/');
  }
  
  function retriveDaysGrid( minuteInterval, minGridPer ) {
    // Deprecated
    if ( minGridPer == 30 ) {
      return Math.floor( 60 / Number( minuteInterval ) );
    } else {
      return Number( minGridPer );
    }
  }
  
  function array_sum( ary ) {
    // Sum all values in array
    return ary.reduce(function( prev, current ) {
      return prev + current;
    });
  }
  
  function object_values( obj ) {
    // Return array of values in object
    var r = [];
    for( var k in obj ) {
      if ( obj.hasOwnProperty( k ) ) {
        r.push( obj[k] );
      }
    }
    return r;
  }
  
  function object_keys( obj ) {
    // Return array of keys in object
    var r = [];
    for ( var k in obj ) {
      if ( obj.hasOwnProperty( k ) ) {
        r.push( k );
      }
    }
    return r;
  }
  
  function zerofill( num, digit ) {
    // Return numeric string with zero-fill the specific upper digits
    var strDuplicate = function( n, str ) {
          return Array( n + 1 ).join( str );
        },
        zero = strDuplicate( digit - 1, '0' );
    return String( num ).length == digit ? num : ( zero + num ).substr( num * -1 );
  }
  
  function formatDate( format, date ) {
    // Date format like PHP
    format = format || '';
    var baseDt  = Object.prototype.toString.call( date ) === '[object Date]' ? date : new Date( normalizeDate( date ) ),
        month   = { 'Jan': 'January', 'Feb': 'February', 'Mar': 'March', 'Apr': 'April', 'May': 'May', 'Jun': 'June', 'Jul': 'July', 'Aug': 'August', 'Sep': 'September', 'Oct': 'October', 'Nov': 'November', 'Dec': 'December' },
        day     = { 'Sun': 'Sunday', 'Mon': 'Monday', 'Tue': 'Tuesday', 'Wed': 'Wednesday', 'Thu': 'Thurseday', 'Fri': 'Friday', 'Sat': 'Saturday' },
        ma      = [ 'am', 'pm' ],
        formatStrings = format.split(''),
        converted = '',
        esc = false,
        lastDayOfMonth = function( dateObj ) {
          var _tmp = new Date( dateObj.getFullYear(), dateObj.getMonth() + 1, 1 );
          _tmp.setTime( _tmp.getTime() - 1 );
          return _tmp.getDate();
        },
        isLeapYear = function( dateObj ) {
          var _tmp = new Date( dateObj.getFullYear(), 0, 1 ),
              sum  = 0, i;
          for ( i = 0; i < 12; i++ ) {
            _tmp.setMonth(i);
            sum += lastDayOfMonth( _tmp );
          }
          return ( sum === 365 ) ? 0 : 1;
        },
        dateCount = function( dateObj ) {
          var _tmp = new Date( dateObj.getFullYear(), 0, 1 ),
              sum = 0, i;
          for ( i=0; i<dateObj.getMonth(); i++ ) {
            _tmp.setMonth(i);
            sum += lastDayOfMonth( _tmp );
          }
          return sum + dateObj.getDate();
        },
        half_hours = function( dateObj ) {
          var h = dateObj.getHours();
          return h > 12 ? h - 12 : h;
        },
        ampm = function( dateObj ) {
          var h = dateObj.getHours();
          return h > 12 ? ma[1] : ma[0];
        };

    if ( format === '' ) {
      return baseDt;
    }

    if ( $('.timeline-container').length > 0 ) {
      var tlData = $('.timeline-container').eq(0).data('timeline').timeline;
      month = tlData.attr('i18n-month') ? JSON.parse( tlData.attr('i18n-month') ) : month;
      day   = tlData.attr('i18n-day') ? JSON.parse( tlData.attr('i18n-day') ) : day;
      ma    = tlData.attr('i18n-ma') ? JSON.parse( tlData.attr('i18n-ma') ) : ma;
    }

    formatStrings.forEach( function( str, i ) {
      var res, tmp, tzo, sign;
      if ( esc === false ) {
        switch( str ) {
          case 'Y': // Full year | ruby %Y
          case 'o': // Full year (ISO-8601)
            res = baseDt.getFullYear();
            break;
          case 'y': // Two digits year | ruby %y
            res = ('' + baseDt.getFullYear()).slice(-2);
            break;
          case 'm': // Zerofill month (01-12) | ruby %m
            res = ('0' + (baseDt.getMonth() + 1)).slice(-2);
            break;
          case 'n': // Month
            res = baseDt.getMonth() + 1;
            break;
          case 'F': // Full month name | ruby %B
            res = object_values( month )[baseDt.getMonth()];
            break;
          case 'M': // Short month name | ruby %b
            res = object_keys( month )[baseDt.getMonth()];
            break;
          case 'd': // Zerofill day (01-31) | ruby %d
            res = ('0' + baseDt.getDate()).slice(-2);
            break;
          case 'j': // Day
            res = baseDt.getDate();
            break;
          case 'S': // Day with suffix
            var suffix = [ 'st', 'nd', 'rd', 'th' ],
                suffix_index = function(){
                  var d = baseDt.getDate();
                  if ( d == 1 || d == 2 || d == 3 || d == 21 || d == 22 || d == 23 || d == 31 ) {
                    return Number( ('' + d).slice(-1) - 1 );
                  } else {
                    return 3;
                  }
                };
            res = suffix[suffix_index()];
            break;
          case 'w': // Day of the week (number) | ruby %w
          case 'W': // Day of the week (ISO-8601 number)
            res = baseDt.getDay();
            break;
          case 'l': // Day of the week (full) | ruby %A
            res = object_values( day )[baseDt.getDay()];
            break;
          case 'D': // Day of the week (short) | ruby %a
            res = object_keys( day )[baseDt.getDay()];
            break;
          case 'N': // Day of the week (ISO-8601 number)
            res = baseDt.getDay() === 0 ? 7 : baseDt.getDay();
            break;
          case 'a': // am or pm
            res = ampm(baseDt);
            break;
          case 'A': // AM or PM
            res = ampm(baseDt).toUpperCase();
            break;
          case 'g': // Half hours (1-12)
            res = half_hours( baseDt );
            break;
          case 'h': // Zerofill half hours (01-12) | ruby %I
            res = ('0' + half_hours(baseDt)).slice(-2);
            break;
          case 'G': // Full hours (0-23)
            res = baseDt.getHours();
            break;
          case 'H': // Zerofill full hours (00-23) | ruby %H
            res = ('0' + baseDt.getHours()).slice(-2);
            break;
          case 'i': // Zerofill minutes (00-59) | ruby %M
            res = ('0' + baseDt.getMinutes()).slice(-2);
            break;
          case 's': // Zerofill seconds (00-59) | ruby %S
            res = ('0' + baseDt.getSeconds()).slice(-2);
            break;
          case 'z': // Day of the year (1-366) | ruby %j
            res = dateCount( baseDt );
            break;
          case 't': // Days of specific month
            res = lastDayOfMonth( baseDt );
            break;
          case 'L': // Whether a leap year
            res = isLeapYear( baseDt );
            break;
          case 'c': // Date of ISO-8601
            tmp = baseDt.getTimezoneOffset();
            tzo = [ Math.floor( Math.abs( tmp ) / 60 ), Math.abs( tmp ) % 60 ];
            sign = tmp < 0 ? '+' : '-';
            res  = baseDt.getFullYear() +'-'+ zerofill( baseDt.getMonth() + 1, 2 ) +'-'+ zerofill( baseDt.getDate(), 2 ) +'T';
            res += zerofill( baseDt.getHours(), 2 ) +':'+ zerofill( baseDt.getMinutes(), 2 ) +':'+ zerofill( baseDt.getSeconds(), 2 );
            res += sign + zerofill( tzo[0], 2 ) +':'+ zerofill( tzo[1], 2 );
            break;
          case 'r': // Date of RFC-2822
            tmp = baseDt.getTimezoneOffset();
            tzo = [ Math.floor( Math.abs( tmp ) / 60 ), Math.abs( tmp ) % 60 ];
            sign = tmp < 0 ? '+' : '-';
            res  = object_keys( day )[baseDt.getDay()] +', '+ baseDt.getDate() +' '+ object_keys( month )[baseDt.getMonth()] +' '+ baseDt.getFullYear() +' ';
            res += zerofill( baseDt.getHours(), 2 ) +':'+ zerofill( baseDt.getMinutes(), 2 ) +':'+ zerofill( baseDt.getSeconds(), 2 ) +' ';
            res += sign + zerofill( tzo[0], 2 ) + zerofill( tzo[1], 2 );
            break;
          case 'u': // Millisecond
            res = baseDt.getTime();
            break;
          case 'U': // Unix Epoch seconds
            res = Date.parse( baseDt ) / 1000;
            break;
          case "\\": // escape
            esc = true;
            res = formatStrings[i + 1];
            break;
          default:
            res = str;
            break;
        }
        converted += res;
      } else {
        esc = false;
        return true;
      }
    });
    return converted;
  }
  
  function getBrowserLang( httpLanguage, getLangUrl ) {
    var dfd = $.Deferred(),
        //language = ( navigator.userLanguage || navigator.browserLanguage || navigator.language );
        languages = window.navigator.languages || [
          window.navigator.language ||
          window.navigator.userLanguage ||
          window.navigator.browserLanguage
        ],
        language = languages[0];
    
    if ( ! httpLanguage || httpLanguage == 0 ) {
      // From local browser settings
      dfd.resolve( language );
    } else {
      $.ajax({
        url: getLangUrl,
        dataType: 'jsonp'
      }).done(function( headers ) {
        var tmpLang, langs, qualities, country;
        $.each( headers, function( _p, _v ) {
          if ( $.inArray( _p, [ "HTTP_ACCEPT_LANGUAGE", "Accept-Language" ] ) !== -1 ) {
            tmpLang = _v.split(';');
            langs = tmpLang[0].split(',');
            if ( tmpLang.length > 1 ) {
              qualities = tmpLang[1].split(',');
            }
          }
          if ( $.inArray( _p, [ "X-Appengine-Country" ] ) !== -1 ) {
            country = _v;
          }
        });
        if ( langs.length > 0 ) {
          language = langs[0];
        }
        dfd.resolve( language );
      }).fail(function() {
        dfd.reject();
      });
    }
    return dfd.promise();
  }
  
  function importLocale( tlObj ) {
    var dfd = $.Deferred(),
        langDir  = tlObj.data('timeline').timeline.attr('langs-dir') || './langs/',
        loadPath = langDir + tlObj[0].lang + '.json'; // updated from `tlObj[0].lang.toLowerCase()`
    $.ajax({
      url: loadPath,
      type: 'get',
      dataType: 'json'
    }).done(function( locale ){
      dfd.resolve( locale );
    }).fail(function(){
      dfd.reject();
    });
    
    return dfd.promise();
  }
  
  function escapeHtml( strings ) {
    return strings
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
        //.replace(/&/g, "&amp;");
  }
  
  function debugLog() {
    // Output some logs for development
    var args = ( arguments.length === 1 ? [arguments[0]] : Array.apply( null, arguments ) );
    if ( args.length === 1 ) {
      console.log( args[0] );
    } else {
      console.log( args );
    }
  }
  
})( jQuery );