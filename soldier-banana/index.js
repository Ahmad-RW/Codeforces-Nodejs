const readline = require('readline')

const rl = readline.createInterface({
	    input: process.stdin,
	    output: process.stdout,
	terminal : false
});


rl.on("line", main)
let s = "" 
function main(input){
	let arr = input.split(' ')

	let k = arr[0]
	let n = arr[1]
	let w = arr[2]

	let c = 0
	for(var i = 0; i < w; i++){
		if( i == 0 ){
			n = n - k
		}
		else{
			n = n - ((i+1)*k)
		}
	}
	
	if(n >= 0){
		console.log("0")
	}
	else{
		console.log(Math.abs(n))
	}
}
