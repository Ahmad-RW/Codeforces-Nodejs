const readline = require('readline')

const rl = readline.createInterface({
	    input: process.stdin,
	    output: process.stdout,
	terminal : false
});


rl.on("line", main)
let i = 0;
let n = 0;
let m = []
function main(input){
	
	m.push(input.split(' '))
	i++
	if(i < 5){
		return
	}

	let x = 0
	let y = 0
	for(var j = 0; j < 5; j++){
		for(var k = 0 ; k < 5; k++){
			if(m[j][k] === "1"){
				y = j
				x = k
			}
		}
	}
	
	console.log(Math.abs((x+1)-3) + Math.abs((y+1)-3))
}
