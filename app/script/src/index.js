import { foo } from './foo'
import View from './mvc/View'

class Nav extends View {
	constructor (id) {
		super()

		this.events = {
			'foo': 'bar'
		}
	}
}

let nav = new Nav('#js-nav')
console.log(nav);
nav.subMethod()

// let arr = ['blue', 'green']
// let res = foo(...arr)
// console.log(res, '!!!!');
// console.log('alt', foo(1));

console.log('everything went better than expected :)')