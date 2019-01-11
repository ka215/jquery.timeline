[![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)](https://raw.githubusercontent.com/ka215/jquery.timeline/master/LICENSE)

jQuery.Timeline
===

You are able to easily create two types of horizontal timeline with this jQuery plugin.

![jQuery.Timeline Image](https://ka215.github.io/jquery.timeline/imgs/jquery_timeline_image.png)

## DEMO

For various examples, please see here:

* [Bar Type Timeline](https://ka215.github.io/jquery.timeline/index.html)
* [Point Type Timeline](https://ka215.github.io/jquery.timeline/index2.html)
* [Multi Languages](https://ka215.github.io/jquery.timeline/index3.html)

## Browser Support
jQuery.Timeline supports the following browsers:

* **Chrome** : Recommended latest version as active support
* **Firefox** :  Recommended latest version as active support
* **Safari** : Recommended latest version as active support
* **Opera** : Recommended latest version as active support
* **Edge** : Recommended latest version as active support
* **IE** : Recommended latest version as active support

## Dependencies

JQuery.Timeline works normal operation with jQuery version **1.9.0** or later. We recommend that you use the latest version **3.x**.

## Usage

Use resources in the dist directory in the repository package.

```html
<link rel="stylesheet" href="./dist/timeline.min.css">
<script src="./dist/timeline.min.js"></script>
```

### HTML:

```html
<!-- Timeline Block -->
<div id="myTimeline">
  <ul class="timeline-events">
    <li data-timeline-node="{ start:'2017-05-26 10:00',end:'2017-05-26 13:00',content:'text text text text ...' }">Event Label</li>
    <li data-timeline-node="{ start:'2017-05-26 23:10',end:'2017-05-27 1:30',content:'<p>In this way, you can include <em>HTML tags</em> in the event body.<br>:<br>:</p>' }">Event Label</li>
  </ul>
</div>

<!-- Timeline Event Detail View Area (optional) -->
<div class="timeline-event-view"></div>
```

**Note**: The tag of the event list wrapped in the timeline block is not "**ul**" fixed. If the class name is a "**timeline-events**", it can be a "**div**" tag or the like.

### jQuery:

```javascript
$(function () {
  $("#myTimeline").timeline();
});
```

## Options

You can pass options on plugin initialization. For example:

```javascript
$("#myTimeline").timeline({
  startDatetime: '2017-05-25',
  rows: 6,
  datetimeFormat: { meta: 'g:i A, D F j, Y' },
  rangeAlign: 'center'
});
```

| Option | Type | Default | Description |
|--------|------|:--------|-------------|
| type | String | bar | View type of timeline event is either "**bar**" or "**point**" |
| scale | String | days | Timetable's top level scale is either "**years**" or "**months**" or "**days**" |
| startDatetime | String | currently | Default set datetime as viewing timetable; format is `"^[-+]d{4}(/\|-)d{2}(/\|-)d{2}\sd{2}:d{2}:d{2}$"` or "**currently**" |
| datetimePrefix | String |  | The prefix of the date and time notation displayed in the headline |
| showHeadline | Boolean | true | Whether to display headline |
| datetimeFormat | Object | `{full:"j M Y", year:"Y", month:"M", day:"D, j M", years:"Y", months:"F", days:"j", meta:"Y/m/d H:i", metato:""}` | Available formats are here: [fn.date.js](https://gist.github.com/ka215/20cbab58e4f7d4e5508a07cff8d64b00); Since version 1.0.3, it's able to define the date format displayed in the meta field of the event detail. In addition, it can be specified as a language JSON file for multilingual support. |
| minuteInterval | Integer | 30 | Recommend more than 5 minutes; only if top scale is "days" (Deprecated) |
| zerofillYear | Boolean | false | It's outputted at the "0099" if true, the "99" if false |
| range | Integer | 3 | The default view range of the timetable starting from the "startDatetime" |
| rows | Integer | 5 | Rows of timeline event area |
| rowHeight | Integer | 40 | Height of one row |
| height | Mixed | auto | Fixed height (pixel) of timeline event area; default "auto" is (rows * rowHeight)px |
| minGridPer | Integer | 2 | Minimum grid per |
| minGridSize | Integer | 30 | Minimum size (pixel) of timeline grid; It needs 5 pixels or more |
| rangeAlign | String | current | Possible values are "**left**", "**center**", "**right**", "**current**", "**latest**" and **specific event id**
| naviIcon | Object | `{left:"jqtl-circle-left", right:"jqtl-circle-right"}` | Define class name |
| showPointer | Boolean | true | Whether to display needle pointer on the current datetime |
| i18n | Object | (omission) | Define translated text for internationalization of datetime format converted by datetime format. For details, refer to the section on [Internationalization](#Internationalization). |
| langsDir | String | ./langs/ | Since ver.1.0.3, you can specify the path that stores the language files for multilingualization. Please specify by relative path or absolute URL from HTML where js script is loaded. |
| httpLanguage | Boolean | false | Whether to obtain the language setting of the browsing environment from the server side header. |


## Methods

The initialized Timeline object can do various operations by using method. It is also possible to execute multiple methods by chaining each method.

```javascript
$("#myTimeline").timeline({
  type  : "bar",
  range : 5
}).timeline("initialized", function( self, data ){ 
  console.log([ "user's callback", self, data ]);
});
```

| Method | Description | Arguments | Usage |
|--------|:------------|-----------|:-------|
| initialized | Called after plugin initialization, just before timeline block is rendered. | Callback Function | `$.timeline('initialized', function( self, data ){ alert('initialization complete!'); });` |
| destroy | Destroy the timeline object created by the plugin. | - | `$.timeline('destroy');` |
| show | Display hidden timeline objects. | - | `$.timeline('show');` |
| hide | Hide the displayed timeline object. | - | `$.timeline('hide');` |
| render | Re-render the timeline block. At this time, the event operated by the method is discarded and only the initial event is placed. | (object) | `$.timeline('render', {minGridPer:ab});` |
| dateback | Put the timeline back to the past. It is the same as clicking on the left navigation icon. | - | `$.timeline('dateback');` |
| dateforth | Go forth the timeline to the future. It is the same as clicking the right navigation icon. | - | `$.timeline('dateforth');` |
| alignment | Adjust the center position of the timeline. | - | `$.timeline('alignment', 'center');` |
| getOptions | Get all option values for timeline. | - | `var tlOptions = $('#myTimeline').timeline('getOptions');` |
| addEvent | Add any events to the timeline. You can also specify a callback function after adding an event. | Array, Callback Function (optional) | `$.timeline('addEvent', [ {start:'2017-6-1 00:00',end:'2017-6-1 02:00',row:2,label:'Add Event',content:'test'} ], function( self, data ){ alert('Added Event!'); });` |
| removeEvent | Removes the specified event from the timeline. To specify the event, use the event ID. | Array, Callback Function (optional) | `$.timeline('removeEvent', [ 6, 7 ]);`
| updateEvent | Updates the contents of the specified event. It is possible to update multiple events simultaneously. | Array, Callback Function (optional) | `$.timeline('updateEvent', [ {eventId:3, start:'2017-5-29 13:00',end:'2017-5-29 15:30', row:1, label:'Updated Event', bgColor:'#aaaab0', color:'#d70035'} ]);` |
| openEvent | Called back when an event is clicked. | (object) | Unlike other methods, the processing specified by the event parameter callback ([to be described later](#Event Parameters)) is invoked. |

## Handling Events (since v1.0.5)

Since version 1.0.5, the custom events are triggered according to the state of timeline objects. This allows you to bind your own processing to a custom event.

```javascript
$("#myTimeline").on("afterRender.timeline", function( e, options ) {
  // Do something
});
```

| Event | Description | Arguments |
|--------|:------------|-----------|
| afterRender.timeline | Fired after rendering completely a timeline object. | options (object) |

## Event Parameters

Events placed on the timeline have parameters for display. You can specify this event parameter either by directly marking up in HTML or by using a method.

### Directly markup on HTML

```html
<div class="timeline-events">
  <div>This event is ignored because it is an invalid event</div>
  <div data-timeline-node="{ start:'2017-01-01 00:00',end:'2017-01-01 13:00',content:'Fill in the text of the event.' }">This is a valid event</div>
  <div data-timeline-node="{ start:'2017-01-01 00:00',end:'2017-01-01 13:00',content:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...' }">Lorem Ipsum</div>
</div>
```

> **Note**: Event lists that do not have a "data-timeline-node" attribute are ignored when initializing timeline objects and are not placed on the timeline.

### Using methods

```javascript
$('myTimeline').timeline()
.timeline( 'addEvent', [
  {start:'2017-1-1 08:00',end:'2017-1-1 10:00',label:'Event 1',content:'Event body'},
  {start:'2017-1-1 09:30',end:'2017-1-1 10:15',label:'Event 2',content:'Event body'}
],
function( self, data ){
  console.log('Events addition successfully!');
});
```

### Event Parameter List

| Parameter | Type | Timeline Type | Description |
|------------|---------|-----------------|-----|
| eventId | Integer | bar/point | It must be an integer value equal to or greater than 1 and it must be a unique value in the event list. It can be omitted as a parameter, and if omitted, it will be automatically issued at plugin initialization. |
| start | String | bar/point | Event start datetime. Specify it like `2017-1-1 0:00` or `2017/01/02 01:23` |
| end | String | bar | Event end datetime. Ignored if the timeline type is point. The usable format is the same as start. |
| row | Integer | bar/point | The display line (vertical position) on the timeline. An integer value of 1 or more. If not specified, this will be the first line (top row) event. | 
| label | String | bar/point | Event title. When marking up with HTML, the text part of the event list tag is used as a label. |
| content | String | bar/point | Event body. If there is an event detail display area, it will be displayed there. |
| bgColor | String | bar/point | The background color of the event node block displayed on the timeline. |
| color | String | bar/point | The text color of the event node block displayed on the timeline. |
| bdColor | String | point | Valid when the timeline type is point. The border color of the event node block displayed on the timeline. |
| image | String | point | Valid only when the timeline type is point. It is a thumbnail image of the event node block displayed on the timeline. |
| margin | Integer | point | Valid only when the timeline type is point. The margin of the event node block. The initial value is 2 pixels, and by increasing the value you can reduce the size of the event node block. It can be specified less than half the width of the optional rowHeight. |
| extend | Object | bar/point | An arbitrary value can be set in the key and value format as the user extension parameter of the event node block. This parameter value can be referred to in a callback event. |
| callback | JavaScript | bar/point | You can define additional processing when an event is clicked. The processing defined here is treated after the "**openEvent**" method. |
| relation | Object | point | Valid only when the timeline type is point. If there is an event connected to itself before and after the event, its event and its own event are connected by a line by defining a concatenated event. |

### Event Relation Line

When the timeline type is point, each event can be concatenated with a line. To set the connection line, use the "**relation**" parameter at each event and specify the event ID before and after connecting to the event.
The setting values that can be specified by the relation parameter are as follows.

| Property | Type | Value | Description |
|------------|-------|----|-----|
| before | Numeric | eventId | Specify the event ID to be concatenated before (left side) its own event. By specifying `-1`, you can draw a line from outside the timeline area (the left edge of the display area). |
| after | Numeric | eventId | Specify the event ID to be concatenated after (right side) its own event. By specifying `-1`, you can draw a line outside the timeline area (the right end of the display area). |
| linesize | Integer | pixels | Specify the thickness of the connection line. |
| linecolor | String | color code | Specify the color of the connection line. |
| curve | String | Any of `lt`,`rt`,`rb`,`lb` | Line can be curved when connecting to events of a line different from own event. Specify the curved direction at that time. For example, to concatenate to the upper left event specified by before, specify `lb`. |

#### Example of lines

##### Basic

When linking from itself (event ID: 2) to past event (event ID: 1):

```html
<ol class="timeline-events">
  <li data-timeline-node="{ eventId:1, start:'2017-5-25 12:00',row:2 }">Event 1</li>
  <li data-timeline-node="{ eventId:2, start:'2017-5-27 20:00',row:2,relation:{before:1} }">Event 2</li>
</ol>
```

![Straight connection](https://ka215.github.io/jquery.timeline/imgs/jquery_timeline_point_type_relayline_basic.png)

##### Curve

When concatenating by curved line from itself (event ID: 2) to a past event (event ID: 1) of a different line:

```html
<dl class="timeline-events">
  <dd data-timeline-node="{ eventId:1, start:'2017-5-25 12:00',row:2 }">Event 1</dd>
  <dd data-timeline-node="{ eventId:2, start:'2017-5-27 20:00',row:3,relation:{before:1,curve:'lb'} }">Event 2</dd>
</dl>
```

![Curve connection](https://ka215.github.io/jquery.timeline/imgs/jquery_timeline_point_type_relayline_curve.png)


## Internationalization

This plugin has a function to internationalize the date and time format text to be output and to define translated text according to the language to be used. When using this function, please add the following option when initializing the timeline object.

```javascript
$("#myTimeline").timeline({
  i18n : {
    month: { 'Jan.': 'Januar', 'Feb.': 'Februar', 'März': 'März', 'Apr.': 'April', 'Mai': 'Mai', 'Juni': 'Juni', 'Juli': 'Juli', 'Aug.': 'August', 'Sept.': 'September', 'Okt.': 'Oktober', 'Nov.': 'November', 'Dez.': 'Dezember' },
    day: { 'So': 'Sonntag', 'Mo': 'Montag', 'Di': 'Dienstag', 'Mi': 'Mittwoch', 'Do': 'Donnerstag', 'Fr': 'Freitag', 'Sa': 'Samstag' },
    ma: [ 'vorm.', 'nachm.' ]
  }
});
```

> **Note**: The above is an example of defining translation text in German.

### Multilingualization

Since version 1.0.3, multilingual support enhanced. By placing any required language files (as the JSON format) on the "langs" folder, the translated text defined in the JSON file is applied according the language setting of the browser.

```json
{
  "month": {
    "Jan": "January",
    "Feb": "February",
    "Mar": "March",
    "Apr": "April",
    "May": "May",
    "Jun": "June",
    "Jul": "July",
    "Aug": "August",
    "Sep": "September",
    "Oct": "October",
    "Nov": "November",
    "Dec": "December"
  },
  "day": {
    "Sun": "Sunday",
    "Mon": "Monday",
    "Tue": "Tuesday",
    "Wed": "Wednesday",
    "Thu": "Thurseday",
    "Fri": "Friday",
    "Sat": "Saturday"
  },
  "ma": [
    "am",
    "pm"
  ],
  "format": {
    "full": "j M Y",
    "year": "Y",
    "month": "M Y",
    "day": "D, j M",
    "years": "Y",
    "months": "F",
    "days": "j",
    "meta": "g:i A, D F j, Y",
    "metato": ""
  }
}
```

> **Note**: The above is an "en-US.json" that defined translation text in English.

## TIPS

Some practical TIPS are as follows:

### 1. Display event details in bootstrap's modal window

First, we set up an event detail area in the body block (.modal-body) of the modal window.

```html
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
```

Set the callback of the event parameter to the call of the modal window.

```html
<div id="myTimeline">
  <div class="timeline-events">
    <div data-timeline-node="{ start:'2017-05-26 12:45',end:'2017-05-26 13:45',callback:'$(\'#myModal\').modal()',content:'Show modal window via bootstrap' }">Event having callback</div>
  </div>
</div>
```

When an event on the timeline is clicked, event details will be displayed in the modal window.

### 2. Apply bootstrap tooltip to events on timeline

You will define options for tooltip control in the extended setting of event parameters.

```html
<div id="myTimeline">
  <ul class="timeline-events">
    <li data-timeline-node="{ start:'2017-05-26 16:08',end:'2017-05-26 17:54',row:2,extend:{toggle:'popover',placement:'bottom',content:'Show popover via bootstrap'} }">Event with popover</li>
  </ul>
</div>
```

Make the tooltip bind to the event node block rendered in JavaScript.

```javascript
$('.timeline-node').each(function(){
  if ( $(this).data('toggle') === 'popover' ) {
    $(this).attr( 'title', $(this).text() );
    $(this).popover({
      trigger: 'hover'
    });
  }
});
```

Now when you mouse over the event on the timeline you will see the tooltip.

> **Note**: In Bootstrap version 4.x, errors may occur when tooltips are used. In that case, it may be solved by inclusion of the [tether](http://tether.io/) plugin.

### 3. Bind a custom function to an "openEvent" method

The custom function you want to call should be defined on the global scope.

```html
<div id="myTimeline">
  <ul class="timeline-events">
    <li data-timeline-node="{ start:'2017-06-20 08:00',end:'2017-06-20 12:00', callback:'$.openMyEvent()', extend:{'prop':'value'} }">Example Event</li>
  </ul>
</div>
```

```javascript
$.openMyEvent = function() {
  console.log('openEvent - event clicked...');
  // Retrieve extended data from an opened event 
  console.info( $('.timeline-node.active').data() );
};
```

## Note

We posted a Japanese manual here:

[https://ka2.org/](https://ka2.org/released-jquery-timeline-for-easily-generating-two-type-horizontal-timeline/)

## License

This plugin is available under [the MIT license](https://opensource.org/licenses/mit-license.php).
