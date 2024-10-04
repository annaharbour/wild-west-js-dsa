const {countZeroes} = require("./index");

describe("Count Zeroes", () => {
	test("Count Zeroes is a function", () => {
		expect(typeof countZeroes).toEqual("function");
	});
	test("Count Zeroes returns the number of zeroes in an array", () => {
		expect(countZeroes([1, 1, 1, 1, 0, 0])).toEqual(2);
		expect(countZeroes([1, 0, 0, 0, 0])).toEqual(4);
		expect(countZeroes([0, 0, 0])).toEqual(3);
		expect(countZeroes([1, 1, 1, 1])).toEqual(0);
	});
});
