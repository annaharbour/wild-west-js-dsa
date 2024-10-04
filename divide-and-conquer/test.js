const { countZeroes, sortedFrequency, findRotatedIndex} = require("./index");

describe("Count Zeroes", () => {
	test("countZeroes is a function", () => {
		expect(typeof countZeroes).toEqual("function");
	});
	test("Count Zeroes returns the number of zeroes in an array", () => {
		expect(countZeroes([1, 1, 1, 1, 0, 0])).toEqual(2);
		expect(countZeroes([1, 0, 0, 0, 0])).toEqual(4);
		expect(countZeroes([0, 0, 0])).toEqual(3);
		expect(countZeroes([1, 1, 1, 1])).toEqual(0);
	});
});

describe("Sorted Frequency", () => {
	test("sortedFreq is a function", () => {
		expect(typeof sortedFrequency).toEqual("function");
	});
	test("Counts number of occurences of a given number in an array", () => {
		expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)).toEqual(4);
		expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)).toEqual(1);
		expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)).toEqual(2);
		expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)).toEqual(0);
	});
});

describe("Find Rotated Index", () => {
	test("findRotatedIndex is a function", () => {
		expect(typeof findRotatedIndex).toEqual("function");
	});
	test("Accepts a rotated array of sorted numbers and an integer and returns the index of the integer in the array if found, otherwise returns -1.", () => {
		expect(findRotatedIndex([3, 4, 1, 2], 4)).toEqual(1);
		expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)).toEqual(2);
		expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)).toEqual(6);
		expect(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)).toEqual(-1);
		expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)).toEqual(-1);
		expect(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)).toEqual(
			5
		);
	});
});
