const prompt = require('prompt-sync')({sigint: true});	

function findPrimeFactors (num) {

    var primeFactors = [];
    while (num % 2 === 0) {
        primeFactors.push(2);
        num = num / 2;
    }
    
    
    for (var i = 3; i <= num/2; i++) {
    	
        while (num % i === 0) {
            primeFactors.push(i);
            num = num / i;
        }
    }

    if (num > 2) {
    	
        primeFactors.push(num);
    }
    return primeFactors;
}

 
var num=prompt("Enter a number to get its prime factors:");
console.log(findPrimeFactors(num));


