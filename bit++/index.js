const readline = require('readline')

const rl = readline.createInterface({
	    input: process.stdin,
	    output: process.stdout,
	terminal : false
});


rl.on("line", main)
let i = 0;
let n = 0;
let x = 0;
function main(input){
	if(n == 0){
		n = input
		return
	}

	if(input[0] === "X"){
		if(input[1] === "-"){
			x--
		}
		else{
			x++
		}
	}
	else{
		if(input[0] === "-"){
			x--
		}
		else{
			x++
		}
	}

	i++
	if(i === parseInt(n)){
		console.log(x)
	}

}
