Sdf font generation setup
===
Using [Jam3/msdf-bmfont](https://github.com/Jam3/msdf-bmfont), which uses [Chlumsky/msdfgen](https://github.com/Chlumsky/msdfgen).
Also converts using [Jam3/convert-bmfont](https://github.com/Jam3/convert-bmfont).

Installation
---
See https://github.com/Jam3/msdf-bmfont for prerequisites.

Usage
---
* Clone this repository
* Put .ttf fonts in /input folder
* In root folder, run ```node index.js <fontname>``` where fontname is filename before .ttf
Output files should now be available in /output folder.