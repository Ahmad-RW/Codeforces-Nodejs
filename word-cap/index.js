const readline = require('readline')

const rl = readline.createInterface({
	    input: process.stdin,
	    output: process.stdout,
	terminal : false
});


rl.on("line", main)
let s = "" 
function main(input){
	let r = input 
	console.log(r.charAt(0).toUpperCase().concat(r.slice(1)))
}
