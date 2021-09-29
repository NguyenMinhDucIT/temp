const http = require('http');

const server = http.createServer((req, res) => {
	if(req.url === '/'){
		res.end('Welcome to our homepage!')
	}else if(req.url === '/about'){
		res.end('This is the about page!')
	}else{
		res.end(`
			<h1>Oops!</h1>
			<p>Page not found</p>
			<a href='/'>Home</a>`)
	}
	
});
server.listen(1234);