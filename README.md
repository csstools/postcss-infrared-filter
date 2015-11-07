# Infrared Filter

<img align="right" width="135" height="95" src="http://postcss.github.io/postcss/logo-leftp.png" title="Philosopher’s stone, logo of PostCSS">

[![NPM Version][npm-img]][npm] [![Build Status][ci-img]][ci]

[Infrared Filter] lets you use an infrared photography filter in CSS. This effect was created and coded by [Una Kravets]’ in her excellent post [Infrared Photography].

```css
/* before */

.creek {
	background: url(https://upload.wikimedia.org/wikipedia/commons/0/06/Cayoosh-creek.jpg);
	filter: infrared(-60);
	height: 426px;
	position: relative;
	width: 568px;
}

/* after */

.creek::after {
	background: url(https://upload.wikimedia.org/wikipedia/commons/0/06/Cayoosh-creek.jpg);
	position: relative;
	filter: invert(1) saturate(.75) hue-rotate(-60deg);
	content: "";
	display: block;
	height: 100%;
	mix-blend-mode: color;
	property: absolute;
	width: 100%;
}

.creek {
	background: url(https://upload.wikimedia.org/wikipedia/commons/0/06/Cayoosh-creek.jpg);
	height: 426px;
	position: relative;
	width: 568px;
}
```

## Usage

Add [Infrared Filter] to your build tool:

```bash
npm install postcss-infrared-filter --save-dev
```

#### Node

```js
require('postcss-infrared-filter').process(YOUR_CSS);
```

#### PostCSS

Add [PostCSS] to your build tool:

```bash
npm install postcss --save-dev
```

Load [Infrared Filter] as a PostCSS plugin:

```js
postcss([
    require('postcss-infrared-filter')()
]);
```

#### Gulp

Add [Gulp PostCSS] to your build tool:

```bash
npm install gulp-postcss --save-dev
```

Enable [Infrared Filter] within your Gulpfile:

```js
var postcss = require('gulp-postcss');

gulp.task('css', function () {
    return gulp.src('./css/src/*.css').pipe(
        postcss([
            require('postcss-infrared-filter')()
        ])
    ).pipe(
        gulp.dest('./css')
    );
});
```

#### Grunt

Add [Grunt PostCSS] to your build tool:

```bash
npm install grunt-postcss --save-dev
```

Enable [Infrared Filter] within your Gruntfile:

```js
grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
    postcss: {
        options: {
            processors: [
                require('postcss-infrared-filter')()
            ]
        },
        dist: {
            src: 'css/*.css'
        }
    }
});
```

[ci]:      https://travis-ci.org/jonathantneal/postcss-infrared-filter
[ci-img]:  https://img.shields.io/travis/jonathantneal/postcss-infrared-filter.svg
[npm]:     https://www.npmjs.com/package/postcss-infrared-filter
[npm-img]: https://img.shields.io/npm/v/postcss-infrared-filter.svg

[Gulp PostCSS]:  https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[PostCSS]:       https://github.com/postcss/postcss

[Infrared Photography]: http://una.im/infrared/#💁
[Una Kravets]:          https://twitter.com/Una

[Infrared Filter]: https://github.com/jonathantneal/postcss-infrared-filter
