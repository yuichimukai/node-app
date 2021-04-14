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
console.log(total);

function sum(numbers) {
	let total = 0;
	for (let i = 0; i < numbers.length; i++) {
		total += numbers[i];
	}
	return total;
}

console.log(sum([1, 2, 3, 4, 5]));

const array = [1, 2, 3];

array.forEach((currentValue) => {
	console.log(currentValue);
});

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
console.log(isEvenInclueded(array));
