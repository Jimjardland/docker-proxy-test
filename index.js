var express = require('express');
var http = require('http')
const app = express();

app.get('/', function (req, res) {
  const arr = ['a', 'b', 'c', 'd', 'e'];
  res.json({message: arr[Math.floor(Math.random()*arr.length)]});
})

const server = http.createServer(app);
const PORT = 4000;

server.listen(PORT, () => {
	console.log(`listening on ${PORT}`, new Date());
})