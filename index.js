'use strict';
var through = require('through2');
var es = require('event-stream');

module.exports = function addSrc() {
    var pass = through.obj();
    return es.duplex(pass, es.merge(gulp.src.apply(gulp.src, arguments), pass));
};