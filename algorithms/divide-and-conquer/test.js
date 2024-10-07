const {
	countZeroes,
	sortedFrequency,
	findRotatedIndex,
	mergeSort,
	merge,
	quickSort,
} = require("./index");

describe("Mergesort", () => {
	test("Merge is a function", () => {});
	test("Expects merge to accept two sorted arrays and return a new merged array with the values from each array sorted", () => {
		expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
		expect(merge([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
		expect(merge([], [1, 2, 3])).toEqual([1, 2, 3]);
		expect(merge([1, 2, 3], [])).toEqual([1, 2, 3]);
	});

	test("Comparator parameter will be used instead of default", () => {
		const comparator = (a, b) => b - a;
		expect(merge([5, 3, 1], [6, 4, 2], comparator)).toEqual([6, 5, 4, 3, 2, 1]);
	});

	test("Expects merge function to run in O(n+m) time and O(n+m) space", () => {
		const largeArray1 = Array.from({ length: 100000 }, (_, i) => i);
		const largeArray2 = Array.from({ length: 100000 }, (_, i) => i + 100000);
		const startTime = performance.now();
		merge(largeArray1, largeArray2);
		const endTime = performance.now();
		expect(endTime - startTime).toBeLessThan(1000); // Should run in less than 1 second
	});

	test("Mergesort is a function", () => {
		expect(typeof mergeSort).toEqual("function");
	});

	test("Mergesort returns a sorted array", () => {
		expect(mergeSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([
			1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9,
		]);
		expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
		expect(mergeSort([])).toEqual([]);
		expect(mergeSort([1])).toEqual([1]);
	});

	test("Mergesort uses comparator parameter instead of default ascending order", () => {
		const comparator = (a, b) => b - a;
		expect(mergeSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], comparator)).toEqual([
			9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1,
		]);
	});
});

describe("QuickSort", () => {
	test("quickSort is a function", () => {
		expect(typeof quickSort).toEqual("function");
	});

	test("quickSort returns a sorted array", () => {
		expect(quickSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([
			1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9,
		]);
		expect(quickSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
		expect(quickSort([])).toEqual([]);
		expect(quickSort([1])).toEqual([1]);
	});

	test("quickSort uses comparator parameter instead of default ascending order", () => {
		const comparator = (a, b) => b - a; // For descending order
		const inputArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
		const expectedOutput = [9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1];

		expect(
			quickSort(inputArray.slice(), 0, inputArray.length - 1, comparator)
		).toEqual(expectedOutput);
	});
});

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
