/**
 * New node file
 */

var http = require('http');
//EXAMPLE 2
var fs = require('fs');
//var parsedJSON = require('./force.json');

console.log(process.execPath);
console.log(process.version);
console.log(process.platform);

process.stdin.resume();
process.stdin.on('data', function(chunk){
//	var file = chunk;
	process.stdout.write('file: ' + chunk);
});
//var d3 = require('d3');

//function writeNumbers(res){

//	var counter = 0;
//	for (var i = 0; i < 100; i++){
//		counter++;
//		res.write(counter.toString() + '\n');
//	}
//}
//var data = parsedJSON;



//EXAMPLE 1
http.createServer(function(req, res){

	var query = require('url').parse(req.url).query;
	var app = require('querystring').parse(query).file + ".json";
	var parsedJSON = require('./' + app);
	var data = parsedJSON;
	res.writeHead(200, {'content-type': 'text/plain'});
	//writeNumbers(res);

	
	setTimeout(function() {
		for (i = 0; i < data.length; i++){
			res.write("name: " + data[i].name + '\n');
		}
//		console.log('opening ' + app);
//		fs.readFile(app, 'utf8', function(err, data){
//			if(err){
//				res.write('Could not find or open file for reading\n');
//			} else {
//				res.write(data);
//			}
//			res.end();
//		});
		res.end();
	}, 2000);
	
}).listen(8124);

console.log('Server running on 8124');