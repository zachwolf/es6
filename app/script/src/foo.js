export function foo(bar, baz = 17) {
	console.log('foo called')
	return `hello ${bar} and ${baz}`
}
