const path = require('path')

console.log(path.sep);

//new kinda relative path
const filePath = path.join('/subfolder/', '/content/', '/test.txt')
console.log(filePath);
const baseName = path.basename(filePath);
console.log(baseName);

// absolute path
const abs = path.resolve(__dirname, 'subfolder', 'content', 'test.txt');
console.log(abs);
