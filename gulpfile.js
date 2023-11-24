"use strict";

const { src, dest, watch } = require("gulp");
var postcss = require("gulp-postcss");
const rename = require("gulp-rename");

function buildStyles(cb) {
  src("./assets/src/main.pcss")
    .pipe(postcss())
    .pipe(
      rename({
        extname: ".css",
      })
    )
    .pipe(dest("./assets/dist"));
  cb();
}

function watchFiles(cb) {
  watch(["./assets/src/**/*.pcss"], buildStyles);
  cb();
}
exports.buildStyles = buildStyles;
exports.default = watchFiles;
