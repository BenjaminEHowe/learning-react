"use strict"; 

const gulp = require("gulp");
const connect = require("gulp-connect"); // runs a local dev server
const open = require("gulp-open"); // opens a url in a web browser
const browserify = require("browserify"); // bundles javascript
const reactify = require("reactify"); // transforms react JSX to JS
const source = require("vinyl-source-stream"); // use conventional text streams with gulp
const concat = require("gulp-concat"); // concatenates files
const lint = require("gulp-eslint"); // lint javascript files, including JSX

const config = {
    devBaseUrl: "http://127.0.0.1",
    paths: {
        css: [
            "node_modules/bootstrap/dist/css/bootstrap.min.css"
        ],
        dist: "./dist",
        src: "./src"
    },
    port: 9005
}
config.paths.html = `${config.paths.src}/*.html`;
config.paths.img = `${config.paths.src}/img/*`;
config.paths.js = `${config.paths.src}/**/*.js`;
config.paths.mainJs = `${config.paths.src}/main.js`;

// start a local development server
gulp.task("connect", (done) => {
    connect.server({
        base: config.devBaseUrl,
        livereload: true,
        port: config.port,
        root: ["dist"],
        fallback: "dist/index.html"
    });
    done();
});

gulp.task("open", gulp.series(["connect"], (done) => {
    gulp.src("dist/index.html")
        .pipe(open({ uri: `${config.devBaseUrl}:${config.port}/` }));
    done();
}));

gulp.task("html", (done) => {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
    done();
});

gulp.task("img", (done) => {
    gulp.src(config.paths.img)
        .pipe(gulp.dest(`${config.paths.dist}/img`))
        .pipe(connect.reload());
    done();

    gulp.src("./src/favicon.ico")
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task("css", (done) => {
    gulp.src(config.paths.css)
        .pipe(concat("bundle.css"))
        .pipe(gulp.dest(`${config.paths.dist}/css`));
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

gulp.task("lint", () => {
    return gulp.src(config.paths.js)
        .pipe(lint({ configFile: "eslint.config.json" }))
        .pipe(lint.format())
        .pipe(lint.failAfterError());
})

gulp.task("watch", (done) => {
    gulp.watch(config.paths.html, gulp.series("html"));
    gulp.watch(config.paths.js, gulp.series("js", "lint"));
    done();
});

gulp.task("default", gulp.series("html", "img", "css", "js", "lint", "open", "watch"));
