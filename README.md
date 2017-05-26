
jQuery.Timeline
===

You are able to easily create two types of horizontal timeline with this jQuery plugin.

## Browser Support
jQuery.Timeline supports the following browsers:

* **Chrome** : Recommended latest version as active support
* **Firefox** :  Recommended latest version as active support
* Safari : Not checked the working yet 
* **Opera** : Recommended latest version as active support
* **Edge** : Recommended latest version as active support
* IE : Not checked the working yet

## Dependencies

JQuery.Timeline works normal operation with jQuery version **1.9.0** or later. We recommend that you use the latest version **3.x**.

## Usage

Use resources in the dist directory in the repository package.

```html:
<link rel="stylesheet" href="./dist/timeline.min.css">
<script src="./dist/timeline.min.js"></script>
```

### HTML:

```html:
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

```js:
$(function () {
  $("#myTimeline").timeline();
});
```

## Options

You can pass options on plugin initialization. For example:

```js:
$("#myTimeline").timeline({
  startDatetime: '2017-05-25',
  rows: 6,
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
| datetimeFormat | Object | `{full:"Y/m/d", year:"Y", month:"n", day:"n/j"}` | Available formats are here: [fn.date.js](https://gist.github.com/ka215/20cbab58e4f7d4e5508a07cff8d64b00) |
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
| i18n | Object | (omission) | Define translated text for internationalization of datetime format converted by datetime format |


## Methods

The initialized Timeline object can do various operations by using method. It is also possible to execute multiple methods by chaining each method.

```js:
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
| render | Re-render the timeline block. At this time, the event operated by the method is discarded and only the initial event is placed. | - |  |
| dateback | Put the timeline back to the past. It is the same as clicking on the left navigation icon. | - | `$.timeline('dateback');` |
| dateforth | Go forth the timeline to the future. It is the same as clicking the right navigation icon. | - | `$.timeline('dateforth');` |
| alignment | Adjust the center position of the timeline. | - | `$.timeline('alignment', 'center');` |
| getOptions | Get all option values for timeline. | - | `var tlOptions = $('#myTimeline').timeline('getOptions');` |
| addEvent | Add any events to the timeline. You can also specify a callback function after adding an event. | Array, Callback Function (optional) | `$.timeline('addEvent', [ {start:'2017-6-1 00:00',end:'2017-6-1 02:00',row:2,label:'Add Event',content:'test'} ], function( self, data ){ alert('Added Event!'); });` |
| removeEvent | Removes the specified event from the timeline. To specify the event, use the event ID. | Array, Callback Function (optional) | `$.timeline('removeEvent', [ 6, 7 ]);`
| updateEvent | Updates the contents of the specified event. It is possible to update multiple events simultaneously. | Array, Callback Function (optional) | `$.timeline('updateEvent', [ {eventId:3, start:'2017-5-29 13:00',end:'2017-5-29 15:30', row:1, label:'Updated Event', bgColor:'#aaaab0', color:'#d70035'} ]);` |
| openEvent | Called back when an event is clicked. | object |  |

## Notes

For various examples, please see here:

in preparation

## License

This plugin is available under [the MIT license](https://opensource.org/licenses/mit-license.php).
