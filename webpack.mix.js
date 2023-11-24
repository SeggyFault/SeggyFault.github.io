let mix = require("laravel-mix");

mix.postCss("./assets/src/main.css", "dist", [
  require("postcss-import"),
  require("postcss-nested"),
]);
