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
