var express = require('express'),
    app = express.Router(),
    axios = require("axios");


//Search Form
app.get("/", (req, res)=>{
    res.render("search");
})

//list of movies 

app.get("/results", async(req, res)=>{
    var url = "http://www.omdbapi.com/?s=" + req.query.name + "&apikey=71ee4da";
    const response = await axios.get(url)
    try{
        if(response.data.Response == 'True'){
            //console.log(response.data)
            res.render("results", {datas: response.data, name: req.query.name})
        }else{
            res.redirect("/")
        }
        
    }catch(e){
        //console.log("dfj")
        res.redirect("/")
    }
    
    
})

// more details

app.get("/title/:id", async(req, res)=>{
    var url = "http://www.omdbapi.com/?i=" + req.params.id + "&apikey=71ee4da";
    const response = await axios.get(url)
    try{
        if(response.data){
            res.render("title", {movie: response.data})
        }else{
            res.redirect("/")
        }
    }catch(e){
        res.redirect("/")
    }
})

module.exports = app;