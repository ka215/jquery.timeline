Change Log
---

### v1.0.6 (2018-09-05)

* Be going to deprecate the "i18n" option. (:> 「i18n」オプションは廃止予定になりました。
* Added the "getLangUrl" option; Enabled when httpLanguage is TRUE, an option to get the value of the Accept-Language header from the specified URL and set it to the plug-in's current language. An example code of returning value from the designated URL is presented separately. (:> getLangUrl オプションを追加 : httpLanguage が TRUE の場合に有効になり、指定のURLから Accept-Language ヘッダの値を取得し、プラグインのカレント言語にセットするためのオプション。指定URLからの戻り値のサンプルコードは別途提示する。
* Added "duration" option; You can set the animation time of the transition effect such as movement of the timeline and adjustment at event selection. The initial value is 150 milliseconds, and it can be specified as a millisecond number or preset string of "fast", "normal", "slow". (:> duration オプションを追加 :  タイムラインの移動や、イベント選択時のアジャスト時等のトランジション効果のアニメーション時間を設定できる。初期値は `150` ミリ秒で、ミリ秒の数値か `fast` `normal` `slow` のプリセット文字列での指定が可能。
* Implemented the debug mode; If you set "debugMode" (currently constant) to TRUE, output of various logs for debugging and wait processing at initialization become effective. (:> デバッグモードを実装 : debugMode （今はまだ定数）を TRUE にするとデバッグ用の各種ログの出力や初期化時のウェイト処理が有効になる。

