var express = require('express');
var app = express();
var path = require('path');
var gpio = require('rpi-gpio');

//==============================================================================
// Declare data pins used here.
//==============================================================================

gpio.setup(7, gpio.DIR_OUT);
gpio.setup(15, gpio.DIR_OUT);
gpio.setup(31, gpio.DIR_OUT);
gpio.setup(37, gpio.DIR_OUT);



//==============================================================================
// This block is all thanks to my-electronics-lab, basic idea altered for relays.
// https://github.com/my-electronics-lab/rpi-led-local-server-nodejs
//==============================================================================

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

console.log(path.join(__dirname, 'public'));

app.get('/', function(req, res){
 	res.render('index',{status:"Press Button To change Status of Led !!"});
});

//==============================================================================
// RELAY ON SECTION
//==============================================================================

//RELAY1
app.post('/relay1/on', function(req, res){
gpio.write(7, true, function(err) {
        if (err) throw err;
        console.log('Written True to pin');
	console.log(path.join(__dirname, 'public'));
	return res.render('index', {status: "Relay1 is On"});
    });

});


//RELAY2
app.post('/relay2/on', function(req, res){
gpio.write(15, true, function(err) {
        if (err) throw err;
        console.log('Written True to pin');
	console.log(path.join(__dirname, 'public'));
	return res.render('index', {status: "Relay2 is On"});
    });

});


//RELAY3
app.post('/relay3/on', function(req, res){
gpio.write(31, true, function(err) {
        if (err) throw err;
        console.log('Written True to pin');
	console.log(path.join(__dirname, 'public'));
	return res.render('index', {status: "Relay3 is On"});
    });

});


//RELAY4
app.post('/relay4/on', function(req, res){
gpio.write(37, true, function(err) {
        if (err) throw err;
        console.log('Written True to pin');
	console.log(path.join(__dirname, 'public'));
	return res.render('index', {status: "Relay4 is On"});
    });

});


//==============================================================================
// RELAY OFF SECTION
//==============================================================================

//RELAY1
app.post('/relay1/off', function(req, res){
gpio.write(7, false, function(err) {
        if (err) throw err;
        console.log('Written False to pin');
	console.log(path.join(__dirname, 'public'));
	return res.render('index',{status: "Relay1 is Off"});
    });

});


//RELAY2
app.post('/relay2/off', function(req, res){
gpio.write(15, false, function(err) {
        if (err) throw err;
        console.log('Written False to pin');
	console.log(path.join(__dirname, 'public'));
	return res.render('index',{status: "Relay2 is Off"});
    });

});


//RELAY3
app.post('/relay3/off', function(req, res){
gpio.write(31, false, function(err) {
        if (err) throw err;
        console.log('Written False to pin');
	console.log(path.join(__dirname, 'public'));
	return res.render('index',{status: "Relay3 is Off"});
    });

});


//RELAY4
app.post('/relay4/off', function(req, res){
gpio.write(37, false, function(err) {
        if (err) throw err;
        console.log('Written False to pin');
	console.log(path.join(__dirname, 'public'));
	return res.render('index',{status: "Relay4 is Off"});
    });

});


app.listen(3000, function () {
  console.log('Server Started on Port: 3000!')
})
