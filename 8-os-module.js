const os = require('os');

//info about current user
const user = os.userInfo();
// console.log(user);

//return the system uptime in secs
// console.log(`The system uptime is ${os.uptime()} secs`);

const currentOS = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
}
console.log(currentOS);