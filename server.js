const express = require("express");
var app = express();
const http = require("http").Server(app);
const io = require("./logic").listen(http);

app.set("port", (process.env.PORT || 3001));
app.use(express.static("public"));  

app.get("/", function(req, res) {
});

app.get("*", function(req, res) {
	res.status(404).send("Error 404 - No existe esa página my friend");
});

http.listen(app.get("port"), function() {
	console.log("Servidor en el puerto", app.get("port"));
});
