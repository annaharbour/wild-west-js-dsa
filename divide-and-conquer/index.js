/*
Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.
countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0
Time Complexity - O(log n) 
*/

function countZeroes(arr) {
	let left = 0;
	let right = arr.length;

	while (left <= right) {
		// resets the middle element every time the loop runs, controlling where the middle element is by the left and right pointers
		let mid = Math.floor((left + right) / 2);

		// if the middle element is 0 but the previous element is 1, we know that we've found the first 0, so the middle and right half of the array is comprised of 0s, so we can return the length of the array minus the middle index as the number of 0s.
		if (arr[mid] === 0 && (mid === 0 || arr[mid - 1] === 1)) {
			return arr.length - mid;
			// if the value of the middle element is 1, we know all the preceding elements are 1s, so we move on to search the right half of the array for the first 0 by incrementing the left pointer.
		} else if (arr[mid] === 1) {
			left = mid + 1;
			// Otherwise if the middle lement is 0 but the previous element isn't 1, we haven't found the first 0, so we can move the right pointer to be an index to the left of the current mid
		} else {
			right = mid - 1;
		}
	}
	// if the while loop returns nothing after the left and right pointers meet, there are no 0s in the array, so return 0.
	return 0;
}

module.exports = { countZeroes };
