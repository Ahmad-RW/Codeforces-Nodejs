const readline = require('readline')

const rl = readline.createInterface({
	    input: process.stdin,
	    output: process.stdout,
	terminal : false
});


rl.on("line", main)
let i = 1
let n = 0
let k = 0
let w = 0
let score = 0
function main(input){
	if(n == 0 ){
		let arr = input.split(' ')
		n = arr[0]
		k = arr[1]
		return
	}

	
	const arr = input.split(' ')
	


	score = arr[k-1]
	for(var i = 0; i < n; i++){
		let a = arr[i]
		if( parseInt(a) >= parseInt(score) && parseInt(a) > 0){
			w++
		}
	}
	console.log(w)
}
