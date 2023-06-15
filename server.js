// Load Express//
const express = require('express');
const path = require('path');

//require Videogame 'Database'//
const videogamedb = require('./data/videogame-db');

// Create our express app//
const app = express();

//Configure the app (app.set)//
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//Mount Middleware (app.use)//


//mount routes//

//Define a 'root' route directly on app//
//next practice will use DRY//

app.get('/', function(req, res){
    res.send('<h1>Express Practice Nexus Top 5 Videogames </h1>');
});
app.get('/home', function(req, res){
    res.render('home');
});

app.get('/videogames', function(){
    const videogames = videogamedb.getAll();
    res.render('videogames/index', { videogames });
});

//Port assignment//
app.listen(3000, function() {
    console.log('Listening on port 3000')
});
