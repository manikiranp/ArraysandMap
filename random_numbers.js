var numarr=[];
var i;

console.log("Random 10 three-digit numbers:");
for (i=0; i<10; i++) {
	var num=Math.floor(Math.random()*900)+100;
	numarr.push(num);
}
console.log(numarr);
numarr.sort(function(a,b){return a-b});
console.log("2nd largest number:"+numarr[1]);
console.log("2nd smallest number:"+numarr[8]);
