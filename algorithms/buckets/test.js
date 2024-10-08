const { radixSort } = require("./index");

describe("RadixSort", () => {
	test("radixSort should sort an array of numbers correctly", () => {
		expect(radixSort([8, 6, 1, 12])).toEqual([1, 6, 8, 12]);
		expect(radixSort([10, 100, 1, 1000, 10000000])).toEqual([
			1, 10, 100, 1000, 10000000,
		]);
		expect(
			radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593])
		).toEqual([4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]);
	});
});
