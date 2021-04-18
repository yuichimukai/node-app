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

function assertPositiveNumber(num) {
	if (num < 0) {
		throw new Error(`${num} is not positive`);
	}
}

try {
	assertPositiveNumber(-1);
} catch (error) {
	console.log(error instanceof Error);
	console.log(error.message);
}

function reverseString(str) {
	if (typeof str != "string") {
		throw new TypeError(`$(str) is not a string`);
	}
	return Array.from(str).reverse().join("");
}

try {
	reverseString(100);
} catch (error) {
	console.log(error instanceof TypeError);
	console.log(error.name);
	console.log(error.message);
}

setTimeout(() => {
	try {
		throw new Error("エラー");
	} catch (error) {
		console.log("エラーをキャッチできる");
	}
}, 10);
console.log("この行は実行されます");

function errorPromise(message) {
	return new Promise((resolve, reject) => {
		reject(new Error(message));
	});
}

errorPromise("thenでエラーハンドリング").then(undefined, (error) => {
	console.log(error.message);
});
errorPromise("catchでエラーハンドリング").catch((error) => {
	console.log(erro.message);
});

const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve();
		reject(new Error("エラー"));
	}, 16);
});
promise.then(
	() => {
		console.log("fullfilledとなった");
	},
	(error) => {
		//この行はよびだされない
	}
);

function asyncTask() {
	return Math.random() > 0.5
		? Promise.resolve("成功")
		: Promise.reject(new Error("失敗"));
}

asyncTask()
	.then(function onFulfilled(value) {
		console.log(value);
	})
	.catch(function onRejected(error) {
		console.log(error.message);
	});

Promise.resolve(1)
	.then((value) => {
		console.log(value);
		return value * 2;
	})
	.then((value) => {
		console.log(value);
		return value * 2;
	})
	.then((value) => {
		console.log(value);
		return value * 2;
	});

function delay(timeoutMs) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(timeoutMs);
		}, timeoutMs);
	});
}

const racePromise = Promise.race([delay(1), delay(32), delay(64), delay(128)]);

async function doAsync() {
	return "value";
}

doAsync().then((value) => {
	console.log(value);
});

function dummyFetch(path) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (path.startsWith("/resource")) {
				resolve({ body: `Response body of ${path}` });
			} else {
				reject(new Error("NOT FOUND"));
			}
		}, 1000 * Math.random());
	});
}

async function fetchAB() {
	const results = [];
	const responseA = await dummyFetch("/resource/A");
	results.push(responseA.body);
	const responseB = await dummyFetch("/resource/B");
	results.push(responseB.body);
	return results;
}

fetchAB().then((results) => {
	console.log(results);
});

async function fetchResources(resources) {
	const results = [];
	for (let i = 0; i < resources.length; i++) {
		const resource = resources[i];
		const response = await dummyFetch(resource);
		results.push(response.body);
	}
	return results;
}

class ShoppingCart {
	constructor() {
		this.items = new Map();
	}

	//カートに商品を追加する
	addItem(item) {
		const count = this.items.get(item) ?? 0;
		this.items.set(item, count + 1);
	}

	//カート内の合計金額を返す
	getTotalPrice() {
		return Array.from(this.items).reduce((total, [item, count]) => {
			return total + item.price * count;
		}, 0);
	}

	//カートの中身を文字列にして返す
	toString() {
		return Array.from(this.items)
			.map(([item, count]) => {
				return `${item.name}:${item.count}`;
			})
			.join(",");
	}
}

const shoppingCart = new ShoppingCart();

const shopItems = [
	{ name: "みかん", price: 100 },
	{ name: "りんご", price: 200 },
];

// カートに商品を追加
shoppingCart.addItem(shopItems[0]);
shoppingCart.addItem(shopItems[0]);
shoppingCart.addItem(shopItems[1]);

// 合計金額を表示する
console.log(shoppingCart.getTotalPrice());
// カートの中身を表示
console.log(shoppingCart.toString());

const listenersMap = new WeakMap();

class EventEmitter {
	addListener(listener) {
		const listeners = listenersMap.get(this) ?? [];
		const newListeners = listeners.concat(listener);

		listenersMap.set(this, newListeners);
	}
}

let eventEmitter = new EventEmitter();
eventEmitter.addListener(() => {
	console.log("イベントが発火しました");
});

eventEmitter = null;

const set = new Set(["a", "b"]);
const results = [];
for (const value of set) {
	results.push(value);
}

console.log(results);
