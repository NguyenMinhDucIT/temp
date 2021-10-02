const {writeFileSync} = require('fs')

for (var i = 0; i <= 1000; i++) {
	writeFileSync('./subfolder/content/big.txt', `Hello world for the ${i} time\n`, {flag:'a'})	
}