export function awaitTimeout(timeout) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true)
		}, timeout)
	})
}
/*The function returns a new Promise. 
Promises are used to handle asynchronous operations 
in JavaScript. The executor function (resolve) => { ... } is called immediately 
when the Promise is created.*/

/*setTimeout is used to create a delay. 
It takes two arguments:
A function to execute after the delay 
(() => { resolve(true); }).
The length of the delay in milliseconds (timeout).
After the specified delay, 
the resolve function is called, which resolves the promise with the value true.
Creating Delays:

You might need to wait for a certain period before executing the next piece of code.
 For example, in animations, polling, 
 or when simulating network latency in tests.*/ 