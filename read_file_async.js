const {readFile, writeFile} = require('fs').promises

// Using util module //
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// Main function
// const getText = (path) => {
// 	return new Promise((resolve, reject) => {
// 		readFile(path, 'utf8', (err, res) => {
// 			if(err){
// 				reject(err)
// 			}else{
// 				resolve(res)
// 			}
// 		})		
// 	})
// }


// Asynchrous way to read file
const start = async() => {
	try{
		const first = await readFile('./subfolder/first.txt', 'utf8')
		const second = await readFile('./subfolder/second.txt', 'utf8')
		await writeFile('./subfolder/result_async_read.txt', `\nNew content: ${first} + ${second}`, {flag:'a'})
		console.log(first, '+', second)
	} catch(error){
		console.log(error)
	}
}
start()

// NORMAL READING FILE
// getText('./subfolder/first.txt')
// 	.then((result) => console.log(result))
// 	.catch((err) => console.log(err)) 