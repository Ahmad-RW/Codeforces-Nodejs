const readline = require('readline')

const rl = readline.createInterface({
	    input: process.stdin,
	    output: process.stdout,
	terminal : false
});


rl.on("line", main)
let n = 0
let s = ""
let count = 0
function main(input){
	if(n === 0){
		n = parseInt(input)
		return
	}

	s = input

	for(var j = 0; j < s.length; j++){
		
		/*if(s.charAt(j) === s.charAt(j+1)){
			if(s.charAt(j) === s.charAt(j+2) && s.charAt(j) !== s.charAt(j+3)){
				count++
				j = j + 3
			}
		}*/
		if(s.charAt(j) === s.charAt(j+1)){
			count++
		}
	}
	console.log(count)
}




