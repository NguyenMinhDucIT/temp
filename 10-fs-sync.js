const {readFileSync, writeFileSync} = require('fs')

// Read content of the file
console.log('Start');
const first = readFileSync('./subfolder/first.txt', 'utf8')
const second = readFileSync('./subfolder/second.txt', 'utf8')
console.log(first, second);

// Write to file
writeFileSync(
	'./subfolder/result.txt', 
	`Data of the first file: ${first}`, 
	{flag: 'a'})

console.log('Done with this task');
console.log("Start the next one");

