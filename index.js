const express = require('express');
const app = express();
const topic = require("./scr/topic.json")
const wyr = require("./scr/wyr.json")
const path = require("path")

app.use(express.static("public"));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get("/topic", (req, res) => {
  var item = topic[Math.floor(Math.random() * topic.length)]
  res.json(item)
});

app.get("/wyr", (req, res) => {
  var itemwyr = wyr[Math.floor(Math.random() * wyr.length)]
  res.json(itemwyr)
})

app.get("/radio", function(req, res) {
	res.sendFile(path.join(_dirname, "/radio.html")
	);
});
const listener = app.listen(3000, () => {
  console.log('https://localhost:3000');
});
