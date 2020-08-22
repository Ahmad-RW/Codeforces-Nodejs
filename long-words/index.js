const readline = require('readline')

const rl = readline.createInterface({
	    input: process.stdin,
	    output: process.stdout,
	terminal : false
});

/*const write = fs.createWriteStream('output.txt', {
	flags : 'a' 
})

const data = fs.readFileSync('input.txt', 'UTF-8');



const lines = data.split(/\r?\n/)

const n = lines[0]



for(var i = 1; i <= n; i++){
	const word = lines[i]
	if(word.length < 10){
		write.write(word)
		write.write("\n")
	}
	else{
		const abbrev = `${word.charAt(0)}${word.length-2}${word.charAt(word.length)}`
		write.write(abbrev)
		write.write("\n")
	}

}
*/


rl.on("line", main)
let i = 0
let n;
function main(input){
	if(i == 0){
		n = input
		i++
		return
	}
	if(input.length <= 10){
		console.log(input)
	}
	else{

		let abbrev =  `${input.charAt(0)}${input.length-2}${input.charAt(input.length-1)}`
		console.log(abbrev)
	}
	i++

}
