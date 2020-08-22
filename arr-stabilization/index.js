const readline = require('readline')

const rl = readline.createInterface({
	    input: process.stdin,
	    output: process.stdout,
	terminal : false
});


rl.on("line", main)
let i = 0;
let n = 0;
let arr = []

function main(input){
	
	if(i == 0){
		n = input
		i++
		return
	}
	if(i == 1){
		arr = input.split(' ')
		
	}
	let max, min

	arr.sort(function(a, b){
		return parseInt(a) - parseInt(b) 
	})

	

	console.log( Math.min(arr[n - 2] - arr[0], arr[n - 1] - arr[1]))


}
