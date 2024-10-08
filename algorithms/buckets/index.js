//
// RADIX SORT

// function that accepts a positive integer and an index and returns the digit in that number at the given position
function getDigit(n, i) {
	return Math.floor(Math.abs(n) / Math.pow(10, i)) % 10;
}
// function that accepts positive integer and returns the number of digits the integer has
function digitCount(n) {
	if (n === 0) return 1;
	return Math.floor(Math.log10(Math.abs(n))) + 1;
}
// function that accepts an array of integer and returns a count of the number of digits for the number in the array with the most digits (tip: make use of prev function)
function mostDigits(arr) {
	let max = 0;
	for (let i = 0; i < arr.length; i++) {
		max = Math.max(max, digitCount(arr[i]));
	}
	return max;
}

function radixSort(nums) {
	let maxDigitCount = mostDigits(nums);
	for (let k=0; k < maxDigitCount; k++) {
		let digitBuckets = Array.from({ length: 10 }, () => []);
		for (let j = 0; j < nums.length; j++) {
			let digit = getDigit(nums[j], k);
			digitBuckets[digit].push(nums[j]);
		}
		nums = [].concat(...digitBuckets);
	}
	return nums;
}

module.exports = { radixSort };
