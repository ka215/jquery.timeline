/*
 * Scripts for this tester page only
 */
const initTester = () => {
    const JQUERY_VERSION = $.fn.jquery || null

    if ( ! JQUERY_VERSION ) {
        console.warn( 'jQuery is not loaded or readied.' )
        return false
    } else
    if ( /^(\d{1}\.\d{1,2})\.\d{1,2}$/.test(JQUERY_VERSION) ) {
        // Check jQuery version
        let _version = JQUERY_VERSION.match(/^(\d{1})\.(\d{1,2})\.(\d{1,2})$/)

        if ( parseInt(_version[1]) == 1 && parseInt(_version[2]) < 9 ) {
            console.warn( `This jQuery version ${_version[0]} is outdated.` )
            return false
        }
    }

    const fetchTimeline = params => {
            let request = new Request( './tester.php', {
                method : 'post',
                body   : params,
                headers: new Headers({ 'Content-type': 'application/x-www-form-urlencoded' })
            })

            fetch( request ).then(response => {
                if ( ! response.ok ) {
                    throw Error( response.statusText )
                }
                return response
            }).then(response => {
                return response.json()
            }).then(options => {
                if ( ! options.endDatetime || options.endDatetime === null ) {
                    //delete options.endDatetime
                    options.endDatetime = 'auto'
                }
//console.log( options )
                timelineOptions.push( options )

                //$('#my-timeline').Timeline( options )
                $(document.getElementById('my-timeline')).Timeline( options )
                .Timeline('initialized', (elm, opts) => {
                    console.log( 'Initialized Timeline!' )
                    window.addEventListener( 'resize', throttle, {passive: true} )
                    window.addEventListener( 'scroll', throttle, {passive: true} )

                    //stickyFooter()
                })
                .Timeline('openEvent', (targetEvent, viewerContents) => {
                    //console.log( `Called "openEvent" method:`, targetEvent, viewerContents )
                    if ( targetEvent.extend.toggle ? true : false && /^(modal|popover|tooltip|dialog)$/i.test(targetEvent.extend.toggle) ) {
                        if ( targetEvent.extend.toggle === 'modal' ) {
                            let $modal = $(document.getElementById('myModal'))

                            $modal.find('.modal-title').text( viewerContents.label.textContent )
                            $modal.find('.modal-body').html( viewerContents.content.outerHTML )
                        }
                        if ( targetEvent.extend.toggle === 'dialog' ) {
                            let _effect = Math.floor(Math.random() * 4) + 1

                            // showDialog( targetEvent.label, targetEvent.content, {class: 'outline', label: '<i class="fas fa-times"></i> Close'}, _effect )
                            showDialog( viewerContents.label.textContent, viewerContents.content.outerHTML, {class: 'outline', label: '<i class="fas fa-times"></i> Close'}, _effect )
                        }
                        return false
                    }
                })

                if ( $('#my-timeline-2nd').length == 1 ) {
                    let options_2nd = $.extend(true, {}, options)

                    options_2nd.type = 'bar'
                    options_2nd.rows = 1
                    options_2nd.headline.display = false
                    options_2nd.footer.display = false
                    delete options_2nd.ruler.bottom
                    timelineOptions.push( options_2nd )
                    if ( $(document.getElementById('toggle-multiple')).prop('checked') ) {
                        $(document.getElementById('my-timeline-2nd')).Timeline( options_2nd )
                    }
                }
            }).catch( err => {
                console.error( err )
            })
        }

    const addNodeParams = type => {
        //$('[data-timeline-node]').each(function(){
        Array.prototype.forEach.call(document.querySelectorAll('[data-timeline-node]'), elm => {
            //let params = JSON.parse( $(this).attr('data-timeline-node') )
            let params = JSON.parse( elm.getAttribute('data-timeline-node') )

            if ( 'modal' === type ) {
                params.extend = `{toggle:\'${type}\',target:\'#myModal\'}`
            } else
            if ( 'popover' === type ) {
                //params.extend = `{toggle:\'${type}\',placement:\'top\',container:\'body\',trigger:\'click\',html:\'true\'}`
                params.extend = `{toggle:\'${type}\',trigger:\'click\',html:\'true\'}`
            } else
            if ( 'tooltip' === type ) {
                params.extend = `{toggle:\'${type}\'}`
            } else
            if ( 'dialog' === type ) {
                params.extend = `{toggle:\'${type}\'}`
            }
            //$(this).attr('data-timeline-node', JSON.stringify(params))
            elm.setAttribute('data-timeline-node', JSON.stringify(params))
        })
    }

    const removeNodeParams = type => {
        //$('[data-timeline-node]').each(function(){
        Array.prototype.forEach.call(document.querySelectorAll('[data-timeline-node]'), elm => {
            //let params = JSON.parse( $(this).attr('data-timeline-node') )
            let params = JSON.parse( elm.getAttribute('data-timeline-node') )

            if ( /^(modal|popover|tooltip|dialog)$/i.test(type) ) {
                delete params.extend
            }
            //$(this).attr('data-timeline-node', JSON.stringify(params))
            elm.setAttribute('data-timeline-node', JSON.stringify(params))
        })
    }

    //$('#my-timeline').Timeline( options )
    //.Timeline('initialized')
    //.Timeline('initialized', (element,option,userdata) => { console.log( 'callback after initialized!', element, option, userdata ) }, { user: 'custom-data' } )
    //.Timeline( 'initialized', function( elem, opt ){ test_options = opt; console.log( test_options ) } )
    //.Timeline('_init')
    //.Timeline('destroy')
    //.Timeline('initialized', function(elem,opt){ console.log( 'callback3:', elem, opt ); } )
    //.Timeline('hide')
    //.Timeline('show')
    //.Timeline('alignment', 'right')
    //.Timeline('alignment', 'center', 1000 )
    //.Timeline('alignment', '7')
    //.Timeline('alignment', 'latest', 'slow' )
    //.css( 'border', 'solid 1px #F03333' )
    //.css({ width: '100%', height: '200px' })

    $('[id^="method-"]').on('click change', function(e) {
        let method    = $(this).attr('id').split('-')[1],
            timelines = $('.jqtl-container').parent()

        switch ( method ) {
            case 'alignment':
                if ( e.type === 'change' ) {
                    let position = $('[name=alignment]').val(),
                        duration = 'normal'

                    timelines.each(function() {
                        $(this).Timeline( method, position, duration )
                    })
                }
                break
            case 'hide':
            case 'show':
            case 'destroy':
                timelines.each(function() {
                    $(this).Timeline( method )
                })
                break;
            case 'add':
                let events   = createEvents(2) || [],
                    callback = ( elm, opts, usrdata ) => {
                        let elmId = $(elm).attr('id')
                        console.log( `Added events to the "#${elmId}"!` )
                    },
                    userdata = {}

                timelines.each(function() {
                    $(this).Timeline( 'addEvent', events, callback, userdata )
                })
                break;
            case 'remove':
            case 'update':
            case 'open':
            case 'reload':
            case 'reset':
                alert( `The demo of "${method}" method is in preparation yet.` )
                break;
        }
    })

    $('#remove-event').on('click', function() {
        $('#my-timeline').Timeline('removeEvent', [
            //'2018/11/11'
            //',2018/11/13 23:59:59'
            //'2018/11/11 0:00,2018/11/13 23:59:59'
            'Lorem ipsum'
        ], function(e,c,d){ console.log( 'Removed Events!', e,c,d ) }, 'custom-data' )
        //$(this).prop( 'disabled', true )
    })

    $('#update-event').on('click', function() {
        $('#my-timeline').Timeline('showLoader')
        .Timeline('updateEvent', [
            {id:22,start:'2018-11-18 12:00',end:'2018-11-22 12:00',row:3,label:'Update Event',content:'update test',extend:{toggle:'modal',target:'#myModal'},relation:{after:6,curve:1}}

        ], function( e,c,d ){ console.log( 'Updated Events!', e, c, d ) }, 'custom-data' )
        //$(this).prop( 'disabled', true )
    })

    $(document).on('click','.narrow-row2',function() {
        //$('#reload').on('click', function() {
        // Reset currently events then modify to events retrieved via ajax
        $('.timeline-events').empty().append(`
            <li data-timeline-node="{ start:'2019-01-25 10:00',end:'2019-01-27 23:59',row:2,bgColor:'red',color:'yellow' }">Async loaded event-1</li>
            <li data-timeline-node="{ start:'2019-01-27 10:00',end:'2019-01-29 23:59',row:4,bgColor:'red',color:'yellow' }">Async loaded event-2</li>
        `);
        $('#my-timeline').Timeline('reload', {
            // You can override any options when reload the timeline
            //scale: 'month',
            //ruler: { top: { lines: [ 'year', 'month' ] } },
            sidebar : {
                list : [
                    '<a href="#"> Row 2-1</a>',
                    '<a href="#"> Row 2-2</a>',
                    '<a href="#"> Row 2-3</a>',
                    '<a href="#"> Row 2-4</a>',
                ]
            }
        }, function(e,c,d){ console.log( 'Reloaded Timeline!', e, c, d ) }, { userdata: 'custom' } )
        //$(this).prop( 'disabled', true )
    })

    $('#reset').on('click', function() {
        $('#my-timeline').Timeline('reload', test_options, function(e,c,d){ console.log( 'Reset Timeline!', e, c, d ) }, { userdata: 'format' } )
        // ↑ $.Timeline( 'initialized', ( elem, opt ) => { test_options = opt } ) と初期化時に初期設定をローカル変数に保存しておき、その初期設定を上書きリロードすることでタイムラインのリセットが可能
    })

    //console.log( $('#my-timeline').Timeline('getOptions') )
    /*
    $('#my-timeline')
    //.Timeline('initialized', function(elem,opt){ alert( '!!!' ); } )
    .Timeline('hide')
    .Timeline('show')
    .css( 'border', 'dotted 1px #DDD' )
    ;
    */
    //console.log( $('#my-timeline').VERSION );
    //$('.my-timeline').Timeline();
    /*
    $('#my-timeline2').Timeline()
    .Timeline('initialized', function(elem,opt){ console.log( elem, opt ) } )
    .css( 'border', 'solid 1px #F03333' )
    ;
    */

    $('#redo').on('click',function(){
        $('body').attr('data-standby', 'shown');
        $('#jquery-version').val('3.4.1')
        $('#bootstrap-version').val('')
        $('#user-locale').val('en-US')
        $('#toggle-timeline-type').val('bar')
        $('#form-tester').submit()
    })

    $('#apply-env').on('click',function(){
        $('#form-tester').submit()
    })

    $('#jquery-version, #bootstrap-version, #user-locale, #toggle-timeline-type').on('change',function(){
        let jquery_choose_ver     = $('#jquery-version').val(),
            jquery_current_ver    = $('#jquery-version').attr('data-current-ver'),
            bootstrap_choose_ver  = $('#bootstrap-version').val(),
            bootstrap_current_ver = $('#bootstrap-version').attr('data-current-ver'),
            user_locale           = $('#user-locale').val(),
            user_current_locale   = $('#user-locale').attr('data-current-locale'),
            timeline_type         = $('#toggle-timeline-type').val(),
            current_timeline_type = $('#toggle-timeline-type').attr('data-current-type'),
            is_activated_button   = !(jquery_choose_ver !== jquery_current_ver ||
                bootstrap_choose_ver !== bootstrap_current_ver ||
                user_locale !== user_current_locale ||
                timeline_type !== current_timeline_type)

        $('#apply-env').prop('disabled', is_activated_button )
        if ( ! is_activated_button ) {
            $('#apply-env').addClass('clr-prim').removeClass('muted')
        } else {
            $('#apply-env').removeClass('clr-prim').addClass('muted')
        }
    })

    $('a[id^=link-]').on('click', function(e) {
        e.preventDefault()
        window.location.href = e.target.href
    })

    $('#show-options').on('click', () => {
        let $optContent
        if ( timelineOptions.length > 0 ) {
            $optContent = $('<ul></ul>', {class: 'unstyled'})
            $optContent.append( generateOptionList( timelineOptions[0], false ) )
        } else {
            $optContent = $('<p></p>')
            $optContent.append( `An option of this timeline undefined or not found.` )
        }
        showDialog( 'Current Timeline Options', $optContent.get(0).outerHTML, {class: 'outline', label: '<i class="fas fa-times"></i> Close'}, 1 )
    })

    $('#set-options').on('click', () => {
        let $optContent = $('<form></form>', {id: 'set-tlopts'})

        if ( timelineOptions.length > 0 ) {
            $optContent.append( generateOptionList( timelineOptions[0], true ) )
        }
        showDialog( 'Timeline Options Setting', $optContent.get(0).outerHTML, {class: 'outline', label: '<i class="fas fa-sync-alt"></i> Reload', callback: reloadOptions}, 1 )
    })

    $('#toggle-multiple').on('change',function(e){
        if ( $('#my-timeline-2nd').length == 1 ) {
            if ( e.target.checked ) {
                $('#my-timeline-2nd').Timeline( timelineOptions[1] )
            } else {
                let $backupTimeline = $('#my-timeline-2nd').clone(),
                    $backupEvents = $('#my-timeline-2nd .timeline-events').clone()

                $backupTimeline.removeAttr('style').empty().append( $backupEvents )
                $('#my-timeline-2nd').Timeline( 'destroy' )
                $('#my-timeline').after( $backupTimeline )
            }
        }
    })

    $('#toggle-modal').on('change',function(e){
        if ( e.target.checked ) {
            if ( $('#toggle-popover').prop('checked') ) {
                $('#toggle-popover').prop('checked',false)
            }
            if ( $('#toggle-tooltip').prop('checked') ) {
                $('#toggle-tooltip').prop('checked',false)
            }
            addNodeParams('modal')
        } else {
            removeNodeParams('modal')
        }
        $('#my-timeline').Timeline( 'reload', timelineOptions[0] )
        // $('#my-timeline-2nd').Timeline( timelineOptions[1] )
        $('#myModal').on('show.bs.modal',function(e){
console.log( '!show.bs.modal::', $(this).find('.jqtl-event-view').get(0) )
            $(this).find('.jqtl-event-view').hide()
            $(this).find('.modal-title').empty()
            //$(this).find('.modal-body').empty()
        })
    })
    $('#toggle-popover').on('change',function(e){
        if ( e.target.checked ) {
            if ( $('#toggle-modal').prop('checked') ) {
                $('#toggle-modal').prop('checked',false)
            }
            if ( $('#toggle-tooltip').prop('checked') ) {
                $('#toggle-tooltip').prop('checked',false)
            }
            addNodeParams('popover')
        } else {
            removeNodeParams('popover')
        }
        $('#my-timeline').Timeline( 'reload', timelineOptions[0] )
        // $('#my-timeline-2nd').Timeline( timelineOptions[1] )
        // Disable the sloth styles
        $('[data-toggle="popover"]').popover({
            template: '<div class="nons popover" role="tooltip"><div class="arrow"></div><h3 class="nons popover-header"></h3><div class="nons popover-body"></div></div>'
        })
    })
    $('#toggle-tooltip').on('change',function(e){
        if ( e.target.checked ) {
            if ( $('#toggle-modal').prop('checked') ) {
                $('#toggle-modal').prop('checked',false)
            }
            if ( $('#toggle-popover').prop('checked') ) {
                $('#toggle-popover').prop('checked',false)
            }
            addNodeParams('tooltip')
        } else {
            removeNodeParams('tooltip')
        }
        $('#my-timeline').Timeline( 'reload', timelineOptions[0] )
        // $('#my-timeline-2nd').Timeline( timelineOptions[1] )
        // Disable the sloth styles
        $('[data-toggle="tooltip"]').tooltip({
            template: '<div class="nons tooltip" role="tooltip"><div class="nons arrow"></div><div class="nons tooltip-inner"></div></div>'
        })
    })
    $('#toggle-dialog').on('change',function(e){
        if ( e.target.checked ) {
            $('#viewer').prop('hidden', true).removeClass('flx-col')
            addNodeParams('dialog')
        } else {
            $('#viewer').prop('hidden', false).addClass('flx-col')
            removeNodeParams('dialog')
        }
        $('#my-timeline').Timeline( 'reload', timelineOptions[0] )
    })

    $(document).on('click','.jqtl-event-node',function(){
        $('#viewer> label.h5').text('The timeline event details are displayed in this block.')
    })

    /*
     * Native JavaScript processes are below here
     * Those also are for candidate sloth extensions
     */

    // Optimize the navi menu on sloth
    document.querySelectorAll('#jqtl-tester .toggle .menu').item(0).addEventListener('click', (evt) => {
        evt.preventDefault()
    }, false)

    /*
     * For Google Adsence
     */
    let ads = document.querySelectorAll('ins.adsbygoogle:not(.adsbygoogle-noablate)')

    Array.prototype.forEach.call(ads, (ad_elm) => {
        // console.log(ad_elm)
        try {
            (adsbygoogle = window.adsbygoogle || []).push({})
        } catch (e) {
            console.log( e, ad_elm )
        }
    });

    /*
     * Initial fires
     */
    window.timelineOptions = []
    window.ticking = false
    let userLocale = document.getElementById('user-locale').value,//$('#user-locale').val(),
        timelineType = document.getElementById('toggle-timeline-type').value,//$('#toggle-timeline-type').val(),
        envParams = `action=getOptions&user_locale=${userLocale}&timeline_type=${timelineType}`

    if ( $(document.getElementById('toggle-multiple')).prop('checked') ) {
        envParams += `&multiple_timeline=1`
    }

    fetchTimeline( envParams )
}

/*
 * Utility functions for this tester
 */
function throttle() {
    if ( ! ticking ) {
        requestAnimationFrame(() => {
            ticking = false
        })
        ticking = true
    }
}

function getDateArray( date ) {
    let _dt = date instanceof Date ? date : new Date( date )

    return [ _dt.getFullYear(), _dt.getMonth(), _dt.getDate(), _dt.getHours(), _dt.getMinutes(), _dt.getSeconds(), _dt.getMilliseconds() ]
}

function getDateString( date ) {
    let _dt = getDateArray( date )

    return `${_dt[0]}-${_dt[1] + 1}-${_dt[2]} ${_dt[3]}:${_dt[4]}:${_dt[5]}`
}

function createEvents( num ) {
    let nowDt = new Date(),
        _evts = [],
        _max  = num || 1,
        _startDt, _endDt, _row, i

    for ( i = 0; i < _max; i++ ) {
        _startDt = getDateString( nowDt )
        _endDt   = getDateString( nowDt.getTime() + ((Math.floor(Math.random() * 7) + 1) * 24 * 60 * 60 * 1000) )
        _row     = Math.floor(Math.random() * 5) + 1
        _evts.push( {start: _startDt, end: _endDt, row: _row, label: `Additional event ${i + 1}`, content: `This is an event added by the addEvent method.` } )
    }
    return _evts
}

function generateOptionList( opts, editable ) {
    let lists = [],
        getPair = (obj, prt) => {
            let parents  = prt.trim() !== '' ? prt.trim().split(/\s/) : [],
                cascade  = parents.length > 0 ? `${parents.join('.')}.` : '',
                listHTML = '',
                fieldName

            for ( let _k in obj ) {
                if ( typeof obj[_k] === 'object' ) {
                    if ( Array.isArray( obj[_k] ) ) {
                        obj[_k].forEach((item) => {
                            if ( typeof item === 'object' ) {
                                getPair( item, `${prt} ${_k}` )
                            } else {
                                if ( editable ) {
                                    fieldName= `${cascade}${_k}`.replace(/\./g, '-')
                                    listHTML = `<div class="inline"><label class="w-2-5 mr0 pr1 txt-right">${cascade}${_k}:</label><input type="text" name="${fieldName}" value="${castValue(item)}" class="w-3-5 mr0 pr1"></div>`
                                } else {
                                    listHTML = `<li class="inline"><label class="w-2-5 mr0 txt-right">${cascade}${_k}:</label><input type="text" value="${castValue(item)}" class="w-3-5 mr0" readonly></li>`
                                }
                                lists.push( listHTML )
                            }
                        })
                    } else {
                        getPair( obj[_k], `${prt} ${_k}` )
                    }
                } else {
                    if ( editable ) {
                        fieldName= `${cascade}${_k}`.replace(/\./g, '-')
                        listHTML = `<div class="inline"><label class="w-2-5 mr0 pr1 txt-right">${cascade}${_k}:</label><input type="text" name="${fieldName}" value="${castValue(obj[_k])}" class="w-3-5 mr0 pr1"></div>`
                    } else {
                        listHTML = `<li class="inline"><label class="w-2-5 mr0 txt-right">${cascade}${_k}:</label><input type="text" value="${castValue(obj[_k])}" class="w-3-5 mr0" readonly></li>`
                    }
                    lists.push( listHTML )
                }
            }
        },
        escapeHTML = (str) => {
            if ( ! str ) return
            return str.toString().replace(/[<>&"'`]/g, (match) => {
                const escape = {
                    '<': '&lt;',
                    '>': '&gt;',
                    '&': '&amp;',
                    '"': '&quot;',
                    "'": '&#39;',
                    '`': '&#x60;'
                }
                return escape[match]
            })
        },
        castValue = (val) => {
            switch (typeof val) {
                case 'number':
                    break
                case 'string':
                    val = val === '' ? '' : escapeHTML(val)
                    break
                case 'boolean':
                    val = val.toString()
                    break
                default:
                    val = ''
                    break
            }
            return val
        }

    getPair( opts, '' )
    return lists
}

function reloadOptions() {
    let fd = new FormData(document.getElementById('set-tlopts')),
        cast = (v) => {
            switch (true) {
                case /^-?\d{1,}$/i.test(v):
                    return parseInt(v, 10)
                case /^(true|false)$/i.test(v):
                    return /^true$/i.test(v) ? true : false
                default:
                    return v.toString()
            }
        },
        newOpts = {},
        props, pair

    for ( pair of fd ) {
        props = pair[0].split(/-/)
        if ( props.length > 1 ) {
            if ( props.length == 2 ) {
                if ( ! Object.prototype.hasOwnProperty.call(newOpts, props[0]) ) {
                    newOpts[props[0]] = {}
                }
                if ( ! Object.prototype.hasOwnProperty.call(newOpts[props[0]], props[1]) ) {
                    newOpts[props[0]][props[1]] = props[0] === 'sidebar' && props[1] === 'list' ? [] : {}
                }
                if ( props[0] === 'sidebar' && props[1] === 'list' ) {
                    newOpts[props[0]][props[1]].push(cast(pair[1]))
                } else {
                    newOpts[props[0]][props[1]] = cast(pair[1])
                }
            } else
            if ( props.length == 3 ) {
                if ( ! Object.prototype.hasOwnProperty.call(newOpts, props[0]) ) {
                    newOpts[props[0]] = {}
                }
                if ( ! Object.prototype.hasOwnProperty.call(newOpts[props[0]], props[1]) ) {
                    newOpts[props[0]][props[1]] = {}
                }
                if ( ! Object.prototype.hasOwnProperty.call(newOpts[props[0]][props[1]], props[2]) ) {
                    newOpts[props[0]][props[1]][props[2]] = props[0] === 'ruler' && props[2] === 'lines' ? [] : {}
                }
                if ( props[0] === 'ruler' && props[2] === 'lines' ) {
                    newOpts[props[0]][props[1]][props[2]].push(cast(pair[1]))
                } else {
                    newOpts[props[0]][props[1]][props[2]] = cast(pair[1])
                }
            } else
            if ( props.length == 4 ) {
                if ( ! Object.prototype.hasOwnProperty.call(newOpts, props[0]) ) {
                    newOpts[props[0]] = {}
                }
                if ( ! Object.prototype.hasOwnProperty.call(newOpts[props[0]], props[1]) ) {
                    newOpts[props[0]][props[1]] = {}
                }
                if ( ! Object.prototype.hasOwnProperty.call(newOpts[props[0]][props[1]], props[2]) ) {
                    newOpts[props[0]][props[1]][props[2]] = {}
                }
                if ( ! Object.prototype.hasOwnProperty.call(newOpts[props[0]][props[1]][props[2]], props[3]) ) {
                    newOpts[props[0]][props[1]][props[2]][props[3]] = {}
                }
                newOpts[props[0]][props[1]][props[2]][props[3]] = cast(pair[1])
            }
        } else {
            newOpts[props[0]] = cast(pair[1])
        }
    }
    $('#my-timeline').Timeline( 'reload', newOpts, () => {
        console.log( newOpts )
        timelineOptions[0] = newOpts
        $('.navi-menu input[type=checkbox]').prop('checked', false)
    })
}

/*
 * Custom function for binded user's jQuery.Timeline Object
 */
function openEvent( e ) {
    alert( 'Custom Callback Local Function!' )
    console.log( e )
}

/*
 * Dispatcher
 */
if ( document.readyState === 'complete' || ( document.readyState !== 'loading' && ! document.documentElement.doScroll ) ) {
    initTester();
} else
if ( document.addEventListener ) {
    document.addEventListener( 'DOMContentLoaded', initTester, false );
} else {
    window.onload = initTester;
}
