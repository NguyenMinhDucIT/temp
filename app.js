const {createReadStream} = require('fs')

const stream = createReadStream('./subfolder/content/big.txt')

stream.on('data', (result) => {
	console.log(result)
})