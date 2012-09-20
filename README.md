## scrollable.js

JavaScript library that allows you to make your dom to move, fade and rotate when the page is scrolled.

## Quick start

Download scrollable.js from `git clone git://github.com/katsuyan/scrollable/pkg/scrollable.min.js`.

Include the file in your HTML:
`<script type="text/javascript" src="js/scrollable.min.js"></script>`

Then add appropriate class and data attributes to your HTML tag:
`<div class="movable" data-movable-type="right" data-movable-start="30" data-movable-end="60">...</div>`

This div starts moving to right after document is scrolled by 30px. It continues moving until document is scrolled by 60px.

## Dependencies

movable.js expects jQuery to be loaded. It should be compatible with the most of the recent jQuery versions but only v1.7 has been tested so far.

Make sure to include jQuery before movable.js.

## Movable

A DOM with `movable` class moves in direction up, down, left or right when the page is scrolled.

Data attributes:

* `movable-type`  - direction of movement \[up, down, left, right\] (default: up).
* `movable-start` - scrollTop position that makes movable to start moving (default: 0).
* `movable-end`   - scrollTop position that makes movable to end moving (default: document height).

## Fadable

A DOM with `fadable` class fades in or out when page is scrolled.

Data attributes:

* `fadable-type`  - type of fading \[in, out\] (default: out).
* `fadable-start` - scrollTop position that makes fadable to start fading (default: 0).
* `fadable-end`   - scrollTop position that makes fadable to end moving (default: document height).

## Rotatable

A DOM with `rotatable` class rotates left or right when page is scrolled.

Data attributes:

* `rotatable-type`  - direction of rotation \[left, right\] (default: right).
* `rotatable-start` - scrollTop position that makes rotatable to start rotating (defualt: 0).
* `rotatable-end`   - scrollTop position taht makes rotatable to end rotating (default: 0).
* `rotatable-times` - number of rotation to make from start to end (default: 1).

## Including files

If you are only using movable, fadable or rotatable, you can include only the files you need.
There are following files available:

pkg/movable.min.js
pkg/fadable.min.js
pkg/rotatable.min.js

## Reporting Bugs

Please direct bug reports to the [myna issue tracker on GitHub](http://github.com/katsuyan/movable/issues)

## Copyright and License

Copyright 2012 Katsuya Noguchi

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this work except in compliance with the License.
You may obtain a copy of the License in the LICENSE file, or at:

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
