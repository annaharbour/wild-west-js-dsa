const { isSubsequence, averagePair } = require("./index");

describe("Is Subsequence", () => {
	test("isSubsequence is a function", () => {
		expect(typeof isSubsequence).toEqual("function");
	});
	test("Checks whether the characters in the first string form a subsequence of the characters in the second string without their order changing", () => {
		expect(isSubsequence("hello", "hello world")).toEqual(true);
		expect(isSubsequence("sing", "sting")).toEqual(true);
		expect(isSubsequence("abc", "abracadabra")).toEqual(true);
		expect(isSubsequence("abc", "acb")).toEqual(false);
	});
});

describe("Average Pair", () => {
	test("averagePair is a function", () => {
		expect(typeof averagePair).toEqual("function");
	});
	test("Determines if there is a pair of values that averages to the target", () => {
		expect(averagePair([1, 2, 3], 2.5)).toEqual(true);
		expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toEqual(true);
		expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toEqual(false);
		expect(averagePair([], 4)).toEqual(false);
	});
});
