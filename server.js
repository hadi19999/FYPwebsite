const express = require('express')
const app = express()
const path = require('path')
const {spawn, ChildProcess} = require('child_process')
const http = require("http")
const WebSocket = require("ws")
const server = http.createServer(app);
const wss = new WebSocket.Server({server});
app.use(express.static('public'))
var fs = require('fs');
var router = require('express').Router()
const PORT = 8080
const SCRIPT_PATH = path.join(__dirname, 'scripts/script.py')

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Server running on 8080...');
});
// Router(app);


app.get('/', function (req, res) {
  res.render('index')
})
router.get('/call-java-app', function (req, res, next){
  //call you function in here
  //respond with any data you want
  runScript("foobar")
  res.send('Your data here');
  });
app.get('/run-sync', function (req, res) {
  const scriptProcess = runScript("foobar")
  res.set('Content-Type', 'text/plain');
  scriptProcess.stdout.pipe(res)
  scriptProcess.stderr.pipe(res)
})

/**
 * @param param {String}
 * @return {ChildProcess}
 */
function runScript(param) {
  /*
  python -u script.py --foo bar
  */
  return spawn('python', [
    "-u", SCRIPT_PATH,
    "--foo", param,
  ]);
}

// /**
//  * @param id {String}
//  * @param ws {WebSocket}
//  */
// function runScriptInWebsocket(id, ws) {
//   const child = runScript("foobar")
//   child.stdout.on('data', (data) => {
//     ws.send(`${id}:${data}`);
//   });
//   child.stderr.on('data', (data) => {
//     ws.send(`${id}:error:\n${data}`);
//   });
//   child.on('close', () => {
//     ws.send(`${id}:done`);
//   });
// }

// // Init websocket communication
// //////////////////////////////////////////////////////////////////////
// let id = 1
// wss.on('connection', (ws) => {
//   const thisId = id++;
//   ws.on('message', (message) => {
//     ws.send(`You sent -> ${message}`);
//     if ("run" === message) {
//       runScriptInWebsocket(thisId, ws)
//     }
//   });
//   ws.send('Connection with WebSocket server initialized');
// });

// // Start server
// //////////////////////////////////////////////////////////////////////

// server.listen(PORT, () => {
//   console.log('\n');
//   console.log('+--------------------------')
//   console.log(' PID %d', process.pid)
//   console.log(' Listening on port', PORT)
//   console.log('+--------------------------')
// })
