const readline = require('readline')

const rl = readline.createInterface({
	    input: process.stdin,
	    output: process.stdout,
	terminal : false
});


rl.on("line", main)
let i = 1
let n = 0
let imp = 0
function main(input){
	if(n == 0 ){
		n = input
		return
	}

	let p, v, t

	const arr = input.split(' ')

	p = arr[0]
	v = arr[1]
	t = arr[2]

	let result = parseInt(p) + parseInt(v) + parseInt(t)
	if(result >= 2){
		//they will imp
		imp++
	}
	
	if(n == i){
		console.log(imp)
		return
	}
	i++

}
