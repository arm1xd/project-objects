// let day = 6
// let obj = {
// 1: 'day1',
// 2: 'day2',
// 3: 'day3', 
// 4: 'day4', 
// 5: 'day5',
// 6: 'day6',
// 7: 'day7'
// }
// alert(obj[day])


function getDigits(num) {
	let str = String(num);
	return str.split('');
}


let res = getDigits(123);



for (let index = 0; index < res.length; index++) {
   console.log(res[index] = Number(res[index]));
   console.log(typeof(res[index]));
    
}
