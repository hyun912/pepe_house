const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
.vue({
  version: 3, // Vue 버전 명시
})
.postCss('resources/css/app.css', 'public/css', [
    //
]);