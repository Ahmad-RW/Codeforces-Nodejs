const readline = require('readline')

const rl = readline.createInterface({
	    input: process.stdin,
	    output: process.stdout,
	terminal : false
});


var firstLine = 0
var h, n, a
rl.on("line", (w)=>{
	if(firstLine === 0){
		var r = w.split(" ")
		n = r[0]
		h = r[1]
		firstLine++
		return
	}
	
	a = w.split(" ")

	var width = n

	for(var i = 0; i < a.length; i++){
		if(parseInt(a[i]) > parseInt(h)){
			width++
		}
	}



	console.log(width)		
})
