var i,quo;
var result=[];
for (i=1; i<=100; i++) {
	
	if(i%10==Math.floor(i/10)) {
		result.push(i);
	} 
	
}
console.log("Digits repeated twice from 1-100:");
console.log(result);