const {readFile, writeFile} = require('fs')

console.log('Start');
// Read content of file 1
readFile(
	'./subfolder/first.txt', 
	'utf8', 
	(err, result) =>{
		if(err){
			console.log(err);
			return
		}
		const first = result;

		// Read the 2nd file
		readFile(
			'./subfolder/second.txt', 
			'utf8', 
			(err, result) => {
				if(err){
					console.log(err);
				}
				const second = result;

				// Write to file
				writeFile(
					'./subfolder/content/async-result.txt', 
					`Content the second file: ${second}`, 
					(err,result) => {
					if(err){
						console.log(err);
					}
					console.log('Done with this task');
				})
		})
})
console.log('Start the next task');