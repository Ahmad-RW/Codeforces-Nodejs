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
let s1, s2 = ""
const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ,'k', 'l', 'm', 'n', 'o','p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] 

function main(input){
	
	if(i == 0){
		s1 = input
		i++
		return
	}
	if(i == 1){
		s2 = input
		i++
	}

	//let x = 0
	//let y = 0
	
	let r = 0;
	for(var j = 0 ; j < s1.length ; j++){
	
		let v = arr.indexOf(s1[j].toLowerCase())
		let w = arr.indexOf(s2[j].toLowerCase())

		if(v > w){
			r = 1
			break;
		}
		if(v < w){
			r = -1
			break
		}

	}

	
	console.log(r)
}
