module.exports = app => {
    const express = require('express');
    const cors = require("cors");
    const createError = require('http-errors');
    const path = require("path");
    const router = require('./routes');
    const ejs = require("ejs");
    const cookieParser = require('cookie-parser');

    // templates
    app.set("views",path.join(__dirname,"../","/Frontend"));
    app.engine('html',ejs.__express);
    app.set('view engine', 'html');

    // 解析
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());

    // 路由
    app.use('/', router);

    // 静态文件
    app.use(express.static(path.join(__dirname,"../", '/Frontend')));

    // 跨域
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "*")
        res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
    });
    app.use(cors());

    // // catch 404 and forward to error handler
    // app.use(function (req, res, next) {
    //     next(createError(404));
    // });
    // // error handler
    // app.use((err, req, res, next)=> {
    //     // set locals, only providing error in development
    //     res.locals.message = err.message;
    //     res.locals.error = req.app.get('env') === 'development' ? err : {};

    //     // render the error page
    //     res.status(err.status || 500);
    //     res.render('error');
    // });
}