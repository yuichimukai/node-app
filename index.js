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

const objee = {
	a: {
		b: "objのaプロパティのbプロパティ",
	},
};

console.log(objee?.a?.b);

const shallowClone = (obj) => {
	return Object.assign({}, obj);
};

const obj = { a: "a" };
const cloneObj = shallowClone(obj);
console.log(cloneObj);
console.log(obj === cloneObj);

const array1 = ["A", "B", "C", "D", "E"];
console.log(array1.slice(0, 5));

const array3 = [1, 2, 3];
array3.length = 0;
console.log(array3);

function myFunc() {
	const argumentsArray = Array.from(arguments);
	console.log(Array.isArray(argumentsArray));
	argumentsArray.forEach((arg) => {
		console.log(arg);
	});
}
myFunc("a", "b", "c");

const pattern = /ES(\d+)/g;
const matchesIterator = "ES2015、ES2016、ES2017".matchAll(pattern);
for (const match of matchesIterator) {
	console.log(
		`match:"${match[0]}", capture1: ${match[1]}, index: ${match.index}, input: "${match.input}"`
	);
}
function countOfCodePoints(str, codePoint) {
	let count = 0;
	for (const item of str) {
		if (item === codePoint) {
			count++;
		}
	}
	return count;
}
console.log(countOfCodePoints("🐙🐙🙉 ", "🐙"));

const obj = {
	method1: function () {
		return this;
	},
	method2() {
		return this;
	},
};

console.log(obj.method1());
console.log(obj.method2());

const Prefixer = {
	prefix: "pre",
	prefixArray(strings) {
		const that = this;
		return strings.map(function (str) {
			return that.prefix + "-" + str;
		});
	},
};

function outer() {
	return () => {
		return this;
	};
}

const innerArrowFunction = outer();
console.log(innerArrowFunction());

class Myclass {}

const myClass = new Myclass();

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

//変数名にはキャメルケースを用いる

//コンストラクタ関数
const Point = function PointConstructor(x, y) {
	this.x = x;
	this.y = y;
};

const point = new Point(3, 4);

class ArrayLike {
	constructor(items = []) {
		this._items = items;
	}

	get items() {
		return this._items;
	}

	get length() {
		return this._items.length;
	}

	set length(newLength) {
		const currentItemLength = this.items.length;
		if (newLength < currentItemLength) {
			this._items = this.items.slice(0, newLength);
		} else if (newLength > currentItemLength) {
			this._items = this.items.concat(new Array(newLength - currentItemLength));
		}
	}
}

const arrayLike = new ArrayLike([1, 2, 3, 4, 5]);
arrayLike.length = 2;
console.log(arrayLike.items.join(","));
arrayLike.length = 5;
console.log(arrayLike.items.join(","));

Object.getPrototypeOf(オブジェクト);

class Parent {
	constructor(...args) {
		console.log("#", ...args);
	}
}

class Child extends Parent {
	constructor(...args) {
		super(...args);
		console.log("#", ...args);
	}
}
