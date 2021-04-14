const year = new Date().getFullYear();
if (year % 4 === 0) {
	if (year % 100 === 0) {
		if (year % 400 === 0) {
			console.log("${year}年はうるう年です");
		} else {
			console.log("${year}年はうるう年ではありません");
		}
	} else {
		console.log("${year}年はうるう年です");
	}
} else {
	console.log("${year}年はうるう年ではありません");
}

const version = "ES6";
switch (version) {
	case "ES5":
		console.log("ECMAScript 5");
		break;
	case "ES6":
		console.log("ECMAScript 2015");
		break;
	default:
		console.log("しらないバージョンです");
		break;
}

let total = 0;

for (let i = 0; i < 10; i++) {
	total += i + 1;
}

function sum(numbers) {
	let total = 0;
	for (let i = 0; i < numbers.length; i++) {
		total += numbers[i];
	}
	return total;
}

function sum(numbers) {
	let total = 0;
	numbers.forEach((num) => {
		total += num;
	});
	return total;
}

sum([1, 2, 3, 4, 5]);

function isEven(num) {
	return num % 2 === 0;
}
function isEvenInclueded(numbers) {
	let isEvenInclueded = false;
	for (let i = 0; i < numbers.length; i++) {
		const num = numbers[i];
		if (isEven(num)) {
			isEvenInclueded = true;
			break;
		}
	}
	return isEvenInclueded;
}
const array = [1, 5, 10, 15, 20];

// function filterEven(numbers) {
// 	const results = [];
// 	for (let i = 0; i < numbers.length; i++) {
// 		const num = numbers[i];
// 		if (!isEven(num)) {
// 			continue;
// 		}
// 		results.push(num);
// 	}
// 	return results;
// }

// console.log(filterEven(array));
console.log(array.filter(isEven));

const obj = {
	a: 1,
	b: 2,
	c: 3,
};

for (const key in obj) {
	const value = obj[key];
	console.log(`key:${key}, value:${value}`);
}

for (const value of array) {
	console.log(value);
}

function sum(numbers) {
	return numbers.reduce((total, num) => {
		return total + num;
	}, 0);
}

const obj1 = new Object();
console.log(obj1);

const languages = {
	ja: "日本語",
	en: "英語",
};

const { ja, en } = languages;
console.log(ja);
console.log(en);

("use strict");
const object = Object.freeze({ key: "value" });
object.key = "value";

const object1 = { key: undefined };

if (object1.hasOwnProperty("key")) {
	console.log("'object1'は'key'プロパティを持っている");
}
