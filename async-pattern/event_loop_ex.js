// READFILE
// const {readFile} = require('fs')
// console.log("First task")
// readFile('./toke_git', 'utf8', (err, result) => {
// 	if(err){
// 		console.log("Something is wrong")
// 		return
// 	}
// 	console.log(result)
// 	console.log("Finished reading the file")
// })
// console.log("Second task")
//-----------------------------------------------------------

// SETTIMEOUT
// console.log("first")
// setTimeout(() => {
// 	console.log("second")
// }, 3)
// setTimeout(() => {
// 	console.log("fourth")
// }, 0)
// console.log("third")
//-----------------------------------------------------------

// SETINTERVAL
// setInterval( () => {
// 	console.log("hello world")
// }, 2000)
// console.log("me first") 
//-----------------------------------------------------------

// SERVER
const http = require('http')

const server = http.createServer((req, res) => {
	console.log("request sent")
	res.end('Hello world')
})
server.listen(3000, () => {
	console.log("Listening on port 3000 ...");
})





