const readline = require('readline')

const rl = readline.createInterface({
	    input: process.stdin,
	    output: process.stdout,
	terminal : false
});


rl.on("line", (w)=>{
	if(w == 2){
	       	console.log("NO")
	return
	}
	const r = w%2 ===0 ? "YES" : "NO"
       console.log(r)	
})
