var i;
var MONTH;
var map=new Map();
var c1=0, c2=0, c3=0,c4=0,c5=0,c6=0;c7=0;c8=0;c9=0,c10=0,c11=0,c12=0;
var n=0;
while (n<50) {
 MONTH=Math.floor(Math.random()*12)+1;
 
	switch (MONTH) {
		case 1:
			c1++;
			map.set('Jan',c1);
			break;
		case 2:
			c2++;
			map.set('Feb',c2);
			break;
		case 3:
			c3++;
			map.set('Mar',c3)
			break;
		case 4:
			c4++;
			map.set('Apr',c4)
			break;
		case 5:
			c5++;
			map.set('May',c5)
			break;
		case 6:
			c6++;
			map.set('Jun',c6)
			break;
		case 7:
			c7++;
			map.set('Jul',c7)
			break;
		case 8:
			c8++;
			map.set('Aug',c8)
			break;
		case 9:
			c9++;
			map.set('Sep',c9)
			break;
		case 10:
			c10++;
			map.set('Oct',c10)
			break;
		case 11:
			c11++;
			map.set('Nov',c11)
			break;
		case 12:
			c12++;
			map.set('Dec',c12)
			break;
		}
		n++;
	}
	console.log("Number of people having birth in same month");
	for (let [key,count] of map.entries()) {
		console.log(`Month ${key}: ${count}`);

	}
	
	
 	


