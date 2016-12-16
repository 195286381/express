var express = require('express');

// 设置handlebars 视图引擎

var handlebars = require('express3-handlebars').create({defaultLayout:'main'});


var app = express();

app.engine('handlebars', handlebars.engine);

app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
    // res.type('text/plain');
    // res.send('Meadowlark Travel');
    res.render('home');
});

app.get('/about', function(req, res) {
    // res.type('text/plain');
    // res.send('About Meadowlark Travel');
    res.render('about');
})


// 定制404页面
app.use(function(req, res) {
    res.type('text/plain');
    res.status(404);
    // res.send('404 - Not Found');
    res.render('404');
});

// 定制500页面
app.use(function(err, req, res, next){
    console.log(err.stack);
    res.type('type/plain');
    res.status(500);
    // res.send('500 - Server Error');
    res.render('400');
});

app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' + app.get('port') +'; press Ctrl-C to treminate');
});

// console.log(":" + process.env.PORT);
