const EventEmitter = require('events')
// Create an object of the class EventEmitter
const customEmitter = new EventEmitter()

// Setup an listened event
customEmitter.on('response', (name, id) => {
	console.log(`Data received: ${name} - ${id} `)
})
customEmitter.on('response', () => {
	console.log(`Other logics `)
})
// Provoking the event
customEmitter.emit('response', 'john', '16')

