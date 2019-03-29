"use strict"; 

const gulp = require("gulp");
const connect = require("gulp-connect"); // runs a local dev server
const open = require("gulp-open"); // opens a url in a web browser
const browserify = require("browserify"); // bundles javascript
const reactify = require("reactify"); // transforms react JSX to JS
const source = require("vinyl-source-stream"); // use conventional text streams with gulp

const config = {
    "devBaseUrl": "http://127.0.0.1",
    "paths": {
        "dist": "./dist",
        "html": "./src/*.html",
        "js": "./src/**/*.js",
        "mainJs": "./src/main.js",
    },
    "port": 9005,
}

// start a local development server
gulp.task("connect", (done) => {
    connect.server({
        "base": config.devBaseUrl,
        "livereload": true,
        "port": config.port,
        "root": ["dist"],
    });
    done();
});

gulp.task("open", gulp.series(["connect"], (done) => {
    gulp.src("dist/index.html")
        .pipe(open({ "uri": `${config.devBaseUrl}:${config.port}/` }));
    done();
}));

gulp.task("html", (done) => {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
    done();
});

gulp.task("js", (done) => {
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on("error", console.error.bind(console))
        .pipe(source("bundle.js"))
        .pipe(gulp.dest(`${config.paths.dist}/js`))
        .pipe(connect.reload());
    done();
});

gulp.task("watch", (done) => {
    gulp.watch(config.paths.html, gulp.series("html"));
    gulp.watch(config.paths.js, gulp.series("js"));
    done();
});

gulp.task("default", gulp.series("html", "js", "open", "watch"));
