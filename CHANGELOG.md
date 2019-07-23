Change Log
---

### v2.0.0 (July 23, 2019 GMT)

* for bar: Show bullet event in timeline for event width < 1, and change limit 1 to 15 (:> barの場合：イベント幅が1未満の場合はタイムラインに箇条書きイベントを表示し、制限1を15に変更
* Add setColorEvent for defined color with function (:> 関数で定義色のsetColorEventを追加する
* Add onOpenEvent for defined action in function in clicking on event (:> イベントをクリックして関数内の定義済みアクションのonOpenEventを追加
* Add option to show period in period by startHour and endHour (for day in work who start to 8:00 to 18:00 for example) (:> startHourとendHourで期間を表示するオプションを追加します（たとえば、8：00〜18：00に始まる勤務日）。
* Add bootstrap chevron for event out of period (:> 期間外のイベントにブートストラップシェブロンを追加
* Add move Y position when most event in same cell (:> 同じセル内のほとんどのイベントでY位置の移動を追加
* Add "Category" property on Event (:> イベントに "Category"プロパティを追加

### v2.0.0b2 (July 7, 2019 GMT)

* Added the "firstDayOfWeek" option to define a start day of one week on the timeline.
* Added the "truncateLowers" property in the ruler option to ignore outputting lower ruler scale than global scale.
* Fixed the bug when zooming the scale.
* Changed the default preloading animation to indicator type from strings type.
* Added the "loadingMessage" option for using the custom loader content (by @Guillaume-Bo , [PR#37](/ka215/jquery.timeline/pull/37))
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
