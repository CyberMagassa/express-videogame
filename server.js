// Load Express//
const express = require('express');
const path = require('path');

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
    res.send('<h1>Express Practice Nexus VideoGame Reviews</h1>');
});
app.get('/home', function(req, res){
    res.render('home');
});

//Port assignment//
app.listen(3000, function() {
    console.log('Listening on port 3000')
});
