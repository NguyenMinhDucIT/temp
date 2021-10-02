const http = require('http')

const server = http.createServer((req,res) => {
	if (req.url === '/'){
		res.end('Home Page')
	}else if (req.url === '/about'){
		for (var i = 0; i < 1000; i++) {
			for (var j = 0; j < 1000; j++) {
				console.log(`${i} ${j}`)
				res.end('hello')
			}
		}
		res.end('About Page')
	}else {
		res.end('Not Found!')
	}
})

server.listen(3000, () => {
	console.log("Server is running  on port 3000 ...")
})