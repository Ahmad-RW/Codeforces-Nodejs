const readline = require('readline')

const rl = readline.createInterface({
	    input: process.stdin,
	    output: process.stdout,
	terminal : false
});


rl.on("line", main)
let arr = []
function main(input){
	arr = input.split('+')
	arr.sort(function(a, b){
		return parseInt(a) - parseInt(b)
	})

	
	let r = ""

	for(j = 0; j < arr.length; j++){
		if(arr.length === 1){
			console.log(arr[j])
			continue
		}
		if(arr.length === j+1){
			r = r + arr[j]
			continue
		}

		r = r + arr[j] + "+"
	}
	console.log(r)

}
