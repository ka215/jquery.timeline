<p align="center">
    <a href="https://ka2.org/">
        <img src="" alt="jQuery.Timeline">
    </a>
    
    <h3 align="center">jQuery.Timeline V2</h3>
    
    <p align="center">
        You are able to easily create two types of horizontal timeline with this jQuery plugin.
        <br>
        <a href="https://ka2.org/jquery.timeline/docs/v2/">Explore jQuery.Timeline docs »</a>
        <br>
        <br>
        <a href="https://github.com/ka215/jquery.timeline/issues/new?template=bug.md">Report bug</a>
        ·
        <a href="https://github.com/ka215/jquery.timeline/issues/new?template=feature.md&labels=feature">Request feature</a>
        ·
        <a href="https://ka2.org/">Blog</a>
    </p>
</p>

<br>

## Table of Contents

- [Quick start](#quick-start)
- [Status](#status)


## Quick start

Several quick start options are available:

- [Download the latest release.](https://github.com/ka215/jquery.timeline/archive/v2.0.0a1.zip)
- Clone the repo: `git clone https://github.com/ka215/jquery.timeline.git`
- Install with [npm](https://www.npmjs.com/): `npm install jquery.timeline`
- [What's included](#whats-included)
- [Documentation](#documentation)

Read the [Getting started page](https://ka2.org/jquery.timeline/docs/v2/getting-started/introduction/) for information on the framework contents, templates and examples, and more.


## Status

[![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)](https://raw.githubusercontent.com/ka215/jquery.timeline/master/LICENSE)


## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
```

We provide compiled CSS and JS (`bootstrap.*`), as well as compiled and minified CSS and JS (`bootstrap.min.*`). [source maps](https://developers.google.com/web/tools/chrome-devtools/debug/readability/source-maps) (`bootstrap.*.map`) are available for use with certain browsers' developer tools. Bundled JS files (`bootstrap.bundle.js` and minified `bootstrap.bundle.min.js`) include [Popper](https://popper.js.org/), but not [jQuery](https://jquery.com/).


## Documentation

Bootstrap's documentation, included in this repo in the root directory, is built with [Jekyll](https://jekyllrb.com/) and publicly hosted on GitHub Pages at <https://getbootstrap.com/>. The docs may also be run locally.

Documentation search is powered by [Algolia's DocSearch](https://community.algolia.com/docsearch/). Working on our search? Be sure to set `debug: true` in `site/docs/4.1/assets/js/src/search.js` file.

### Documentation for previous releases

- For v1.0.x: <https://ka2.org/>

## Creators

**ka2 (Katsuhiko Maeno)**

- <https://ka2.org/>
- <https://twitter.com/ka215>
- <https://github.com/ka215>

## Copyright and license

Code and documentation copyright 2011-2018 the [ka2](https://ka2.org/) Code released under the [MIT License]().

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
