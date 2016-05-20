var express = require('express');
var app = express();
var request = require('request');

app.get('/getWeather/:zipCode',function(req,res){
 
	request('http://api.wunderground.com/api/aa74355f772b5466/conditions/q/CA/'+req.params.zipCode, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        console.log(body) // Print the google web page.
	        res.end(body)
	     }
	})
})
app.get('/getWeatherForecast/:zipCode',function(req,res){
 
	request('http://api.wunderground.com/api/aa74355f772b5466/forecast10day/q/CA/'+req.params.zipCode, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        console.log(body) // Print the google web page.
	        res.end(body)
	     }
	})
})

app.get('/',function(req,res){
  res.sendfile('index.html')
})

app.listen('8000',function(){
  console.log('UI is working on port 8000');
})