const mix = require('laravel-mix');

const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify the paths to all of the template files in your project
    content: [
      './**/*.html',
      './src/**/*.vue',
    ],

    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  })

mix.js('src/js/app.js', 'assets/js')
    .extract()
    .postCss('src/css/app.css', 'assets/css', [
        require('postcss-import'),
        require('tailwindcss'),
        require('postcss-nested'),
        require('postcss-custom-properties'),
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production'
        ? [purgecss]
        : [],
    ])
    .options({
        extractVueStyles: true,
    });