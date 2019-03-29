"use strict"; 

const gulp = require("gulp");
const connect = require("gulp-connect"); // runs a local dev server
const open = require("gulp-open"); // opens a url in a web browser

const config = {
    "devBaseUrl": "http://127.0.0.1",
    "paths": {
        "dist": "./dist",
        "html": "./src/*.html",
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

gulp.task("watch", (done) => {
    gulp.watch(config.paths.html, gulp.series("html"));
    done();
});

gulp.task("default", gulp.series("html", "open", "watch"));
