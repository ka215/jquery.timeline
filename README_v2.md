
## Structure of the DOM element of the timeline container:

```
<{{ Element with selector specified by user }}>
  <div class="jqtl-headline"><!-- ------------- Headline -->
    <div class="jqtl-headline-wrapper">
      <h3 class="jqtl-timeline-title">{{ Title }}</h3>
      <div class="jqtl-range-meta jqtl-align-self-right">{{ Meta }}</div>
  </div>
  <{{ Any element defined default events: .timeline-events }}>
  <div class="jqtl-container"><!-- ------- Timeline Body -->
    <div class="jqtl-side-index">{{ Sidebar Index Contents }}</div>
    <div class="jqtl-main">
      <div class="jqtl-ruler-top">
        <canvas class="jqtl-ruler-bg-top"></canvas>
        <div class="jqtl-ruler-content-top">{{ Ruler }}</div>
      </div>
      <div class="jqtl-event-container">
        <canvas class="jqtl-bg-grid"></canvas>
        <div class="jqtl-events">{{ Events }}</div>
      </div>
      <div class="jqtl-ruler-bottom">
        <canvas class="jqtl-ruler-bg-bottom"></canvas>
        <div class="jqtl-ruler-content-bottom">{{ Ruler }}</div>
      </div>
    </div>
    <div class="jqtl-loader">{{ Loader }}</div>
  </div>
  <div class="jqtl-footer"><!-- ----------------- Footer -->
    <div class="jqtl-range-meta jqtl-align-self-right">{{ Meta }}</div>
    <div class="jqtl-footer-content">{{ Footer Content }}</div>
  </div>
</{{ Element with selector specified by user }}>
```
