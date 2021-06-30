const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js([
    'resources/js/app.js',
    'submodules/TallAndSassy/Ui/resources/js/app.js', // <-- Import module js.  There is definetly a better way
], 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
    ])
    .postCss('submodules/TallAndSassy/PageGuide/page-guide/resources/public/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
    ])
    .postCss('submodules/TallAndSassy/PageGuide/page-guide-admin/resources/public/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
    ]) // We can probably combine all module .css into one array, like in the mix.js above. But, there is also an probably and automated way, too.
;
