var i;
var ROLL;
var map=new Map();
var c1=0, c2=0, c3=0,c4=0,c5=0,c6=0;

while ( (c1<10) && (c2<10) && (c3<10) && (c4<10) && (c5<10) && (c6<10) ) {
 ROLL 	=Math.floor(Math.random()*6)+1;
	

	switch (ROLL) {
		case 1:
			c1++;
			map.set('1',c1);
			break;
		case 2:
			c2++;
			map.set('2',c2);
			break;
		case 3:
			c3++;
			map.set('3',c3)
			break;
		case 4:
			c4++;
			map.set('4',c4)
			break;
		case 5:
			c5++;
			map.set('5',c5)
			break;
		case 6:
			c6++;
			map.set('6',c6)
			break;

		}

	}
	for (let [key,count] of map.entries()) {
		console.log(`Dice ${key}: ${count}`);

	}
	