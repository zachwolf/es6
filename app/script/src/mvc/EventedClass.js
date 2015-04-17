class Event {
	constructor(...args) {
		console.log('init event class', this, ...args);
	}
	set events(eventList) {
		console.log('eventList', eventList);
	}
	// events: []
}

export default Event