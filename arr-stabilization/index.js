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

	for(var k = 0; k < arr.length; k++){
		if(k == 0){
			max = parseInt(arr[k])
			min = parseInt(arr[k])
			if(max < min){
				max = arr[k+1]
			}

		}
		
		var e = parseInt(arr[k])

		if(e > max){
			max = e
		}

		if(e < min){
			min = e
		}
	
	}
	arr.splice(arr.indexOf(max.toString()),1)
	
	min, max
	        for(var k = 0; k < arr.length; k++){
			if(k == 0){
				max = parseInt(arr[k])
				min = parseInt(arr[k])
				if(max < min){
					max = arr[k+1]
				}

			}

		var e = parseInt(arr[k])
		if(e > max){
			max = e
		}

		if(e < min){
			min = e
		}

	}

	console.log(max - min)
}
