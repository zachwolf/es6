import EventClass from './EventedClass'

export default class extends EventClass {
// class View extends Object {
	constructor(...args) {
		console.log('args', args);
		super(...args)

		this.events = {
			'superfoo': 'superbar'
		}
	}
	subMethod() {
		console.log('view subMethod');
	}
}

// let View = {}

// export { View }