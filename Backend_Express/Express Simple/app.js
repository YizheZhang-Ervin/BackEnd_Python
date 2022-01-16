const express = require('express');
const app = express();
const http = require('http');

// 中间件
const middlewares = require("./middlewares");
middlewares(app);

// 端口
let tempPort;
// 如果输入了端口号，则提取出来
if (typeof (process.argv[2]) !== 'undefined') {
    // 如果端口号不为数字，提示格式错误
    if (isNaN(process.argv[2])) {
        throw 'Please write a correct port number.';
    } else {
        // 如果端口号输入正确，将其应用到端口
        tempPort = process.argv[2];
    }
} else if (process.env.PORT) {
    tempPort = process.env.PORT
} else {
    // 如果未输入端口号，则使用下面定义的默认端口
    tempPort = 3000;
}
const port = normalizePort(process.env.PORT || '3000');
function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

// server监听和app监听二选一
// app监听
// app.listen(port, () => console.log(`NodeJS Web Server starts at http://127.0.0.1:${port} ...`));

// 使用证书
let httpsServer;
let protocolFlag = "http";
try {
    var privateCrt = fs.readFileSync('./key/5838822_games.nia7.cn.pem');
    var privateKey = fs.readFileSync('./key/5838822_games.nia7.cn.key')
    const HTTPS_OPTOIN = {
        key: privateKey,
        cert: privateCrt
    };
    const https = require('https');
    httpsServer = https.createServer(HTTPS_OPTOIN, app);
    protocolFlag = "https";
} catch (err) {
    const http = require('http');
    httpsServer = http.createServer(app);
    protocolFlag = "http";
}

httpsServer.listen(port);

// server监听
httpsServer.on('error', onError);
httpsServer.on('listening', onListening);

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
function onListening() {
    var addr = httpsServer.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : `NodeJS Web Server starts at http://127.0.0.1:${addr.port} ...`;
    console.log(bind);
}