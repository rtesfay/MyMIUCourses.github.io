function a(){ 
	for (var x = 1; x < 10; x++){ 			console.log(x); 
	} 
	 console.log(x); // 10 
}

function a(){ 
	'use strict';
	for (let x = 1; x < 10; x++){ 			console.log(x); 
	} // different x every loop 
	 console.log(x); // error 
}

var x = 'global'; 
let y = 'global'; 
console.log(this.x); // "global" console.log(this.y); // undefined
console.log(window.y); // undefined
console.log(y); // "global"
