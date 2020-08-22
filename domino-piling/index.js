const readline = require('readline')

const rl = readline.createInterface({
	    input: process.stdin,
	    output: process.stdout,
	terminal : false
});


rl.on("line", main)
let m = 0
let n = 0
function main(input){
	const mxn = input.split(' ')
	
	m = mxn[0]
	n = mxn[1]
	
	a = m*n
	
	if(a%2 !== 0){
		console.log((a-1)/2)
	}
	else{
		console.log(a/2)
	}
	

}
