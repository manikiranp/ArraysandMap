const prompt = require('prompt-sync')({sigint: true});	

const prime_check= (n) => {
	for (let i=2; i<=n; i++) {
		if (n%i==0) {
			return false;
		} 
			return true; 
	}	
};
const primefact= (inp) => {
	let result=[];
	if(inp%2==0) {
		result.push(2);
	}
	for (let k=3; k<=inp; k++) {
		if (inp%k==0) { 
			if(prime_check(k)) {
				result.push(k); 
				inp=(inp/k);
			}
		}
	}
	console.log(result);
};
var inp=prompt("Enter a number to get its prime factors:");
primefact(inp);

