var express = require("express"),
    app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"))

var routes = require("./routes/movie");
app.use(routes);


app.listen(process.env.PORT || 3000, function(){
	console.log("Server Started");
})