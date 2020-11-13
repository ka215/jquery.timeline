Change Logs
---

### v2.1.2 (November 13, 2020 GMT)

* Fixed a bug where the grid width specified minGridSize did not work properly when the scale is "week" ([Issue#54](/ka215/jquery.timeline/issues/54)).
* Added the "disableLimitter" option to avoid validation of the maximum of the scale grids ([Issue#71](/ka215/jquery.timeline/issues/71)).
* Modified the styles of sidebar item elements in the timeline.

### v2.1.1 (October 10, 2020 GMT)

* Fixed a bug that some methods did not work if the selector of the timeline instance contained uppercase letters ([Issue#56](/ka215/jquery.timeline/issues/56)).
* Fixed a bug that the side-scroll bar is displayed when the width of the element of the timeline instance overflows the parent element ([Issue#59](/ka215/jquery.timeline/issues/59)).
* Upgraded all modules for plugin builds to the latest configuration.
* Ignored testing resources from the master branch (Note: they still exist in the develop branch).

### v2.1.0 (September 29, 2020 GMT)

* Fixed the event ID generation process by the addEvent method ([Issue#13](/ka215/jquery.timeline/issues/13)).
  Since ver.2.1.0, the events with duplicate IDs cannot be added and an error will occur. And if you specify a unique ID, it will be added with that event ID. An ID is automatically generated as in the past when an event with an unspecified ID is added.
* Prevented flicker when replacing any events by using addEvent method ([Issue#51](/ka215/jquery.timeline/issues/51)).
* Fixed a bug with some curved relation lines ([Issue#57](/ka215/jquery.timeline/issues/57)).
* Added the theme color setting option for timeline instances ([Issue#58](/ka215/jquery.timeline/issues/58)).
  If you want to enable a custom theme, you need to change the theme name to something other than "default" and set various colors.
* Fixed a bug that there is a difference in locale processing between the top and bottom rulers ([Issue#61](/ka215/jquery.timeline/issues/61)).
* Added an argument that can refer to the newly added event data to the callback function of the addEvent method.
  If user data is specified in the 4th argument of the method, the event data added in the 4th argument of the callback can be referenced, and if user data is not specified, the event data added in the 3rd argument of the callback can be referenced.
  The event data is an array with the issued event ID as the key and the event data object as the value.
* Changed the wrapping process for custom user data arguments for each method.
* Adjusted and added various styles.

### v2.0.0 (November 19, 2019 GMT)

* Revised as first public version 2.0.0 from beta version.

### v2.0.0b6 (October 16, 2019 GMT)

* Fixed a bug that the displayed date on the ruler differs actually value when timezone is UTC ([Issue#48](/ka215/jquery.timeline/issues/48)).
* Fixed a bug that had not return resolve of promise object in the "placeEvent" method.
* Fixed the default order of outputting to display event detail contents by the "opneEvent" method.

### v2.0.0b5 (September 10, 2019 GMT)

* Fixed a bug that the event node height does not work to be adjusted with depending on a "rowHeight" option.
* Fixed a bug that different ruler is displayed from actual date-time when has timezone diff times as like on while DST.
* Changed an "openEvent" method to be able to bind custom user function that fire just before opening event.

### v2.0.0b4 (September 2, 2019 GMT)

* Changed the order of priority of overwriting to "hook function > event params > colorScheme.event object".
* Fixed a bug that does not hide the loader when empty event.
* Fixed a bug that does not overflow the event container.
* Added optional option type definition to the documentation of an esdoc.

### v2.0.0b3 (August 23, 2019 GMT)

* Fixed a bug that occurred error if an option does not have the ruler settings when binding the Timeline.
* Changed to use webpack for deploying the scripts.
* Synchronized several internal processing during timeline initialization by the Promise.
* Added the "colorScheme" option for setting the default color of every event. (by @Guillaume-Bo, [PR#37](/ka215/jquery.timeline/pull/37))

### v2.0.0b2 (July 7, 2019 GMT)

* Added the "firstDayOfWeek" option to define a start day of one week on the timeline.
* Added the "truncateLowers" property in the ruler option to ignore outputting lower ruler scale than global scale.
* Fixed the bug when zooming the scale.
* Changed the default preloading animation to indicator type from strings type.
* Added the "loadingMessage" option for using the custom loader content. (by @Guillaume-Bo, [PR#37](/ka215/jquery.timeline/pull/37))
* Became to able to include the initial events to the plugin option by the "eventData" option.
* Added the "mixed" type to be able to place the events of bar and point type together on the timeline.
* Added some properties that "presentTime", "stripedGridRow", "horizontalGridStyle", "verticalGridStyle".
* Added a property of "custom" to output the custom datetime format.
* Added the events to be able to swipe the timeline container on the PC browser too.
* Supported to summer time (Daylight Savings Time).
* Fixed the bugs that broke some layouts.
* Fixed some internal processing bugs and stabilized the operation of various methods.

### v2.0.0b1 (May 21, 2019 GMT)

* Added tasks into gulp for deploying on production.
* Added new methods named "**dateback**" and "**dateforth**".
* Added new option named "**effects**" for timeline UI enhancement.
* Fixed a bug that does not remove specific events on "**removeEvent**" method.
* Fixed a bug that the vertical position of the relation line deviates in multiple rows of containers.
* Fixed a bug that method chain did not work due to asynchronous initialization.

### v2.0.0a3 (Dec 13, 2018 GMT)

* Fixed a bug that not working the "**openEvent**" method.
* Added a page for making contribution to plugin development to Github pages.

### v2.0.0a2 (Nov 13, 2018 GMT)

* Added new method named "**zoomScale**".

### v2.0.0a1 (Nov 6, 2018, GMT)

* Launch the developer version 2.0.0 alpha-1
