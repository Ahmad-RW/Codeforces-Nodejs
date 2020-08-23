const readline = require('readline')

const rl = readline.createInterface({
	    input: process.stdin,
	    output: process.stdout,
	terminal : false
});


rl.on("line", main)
let i = 0;
let n = 0;
function main(input){
	
	if(i == 0){
		n = 3
		i++
		return
	}
	let inputarr = input.split(' ')

	let r = parseInt(inputarr[0])
	let g = parseInt(inputarr[1])
	let b = parseInt(inputarr[2])
	
	let arr = [r, g, b]

	arr.sort(function(a,b) {
		return a-b
	
	})
	if(arr[1]+arr[0] < arr[2] - 1){

		console.log("No")
	}
	else
	{
		console.log("Yes")
	}

}
