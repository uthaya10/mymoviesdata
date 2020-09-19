var express = require('express'),
    app = express.Router(),
    request = require("request");


//Search Form
app.get("/", (req, res)=>{
    res.render("search");
})
app.get("/results", (req, res)=>{
    var url = "http://www.omdbapi.com/?s=" + req.query.name + "&apikey=71ee4da";
    request(url, (error, respond, data)=>{
        if(!error && respond.statusCode == 200){
            var datas = JSON.parse(data)
            res.render("results", {datas: datas, name:req.query.name})
        }
    })
})
app.get("/title/:id", (req, res)=>{
    var url = "http://www.omdbapi.com/?i=" + req.params.id + "&apikey=71ee4da";
    request(url, (error, respond, data)=>{
        if(!error && respond.statusCode == 200){
            var datas = JSON.parse(data)
            res.render("title", {movie: datas, name:req.query.title})
        }
    })
})

module.exports = app;