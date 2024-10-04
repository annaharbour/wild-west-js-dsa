/* Divide and Conquer Approach*/
function search(arr, val) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);

		if (arr[mid] < val) {
			left = mid + 1;
		} else if (arr[mid] > val) {
			right = mid - 1;
		} else {
			return mid;
		}
	}
	return null;
}

/*
Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array. Expected runtime of O(log n)
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

// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

function sortedFrequency(arr, n) {
	// If array is empty, return 0 occurrences
	if (!arr.length) return 0;

	// initializing left, right, count
	let left = 0;
	let right = arr.length - 1;
	let count = 0;

	while (left <= right) {
		// resets the middle element every time the loop runs, controlling where the middle element is by the left and right pointers
		let mid = Math.floor((left + right) / 2);
		// if the middle element matches, increment the count,
		if (arr[mid] === n) {
			count++;
			// Check left and increment count so long as the numbers match
			for (let i = mid - 1; i >= 0 && arr[i] === n; i--) {
				count++;
			}
			// Check right and increment so long as the numbers match
			for (let i = mid + 1; i < arr.length && arr[i] === n; i++) {
				count++;
			}
			// break out of the loop
			break;
			// if the middle is too small, set the right pointer to be one less than the mid
		} else if (arr[mid] > n) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}
	// return the number of occurrences
	return count;
}

function findRotatedIndex(arr, n) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		let mid = Math.floor((right + left) / 2);
		// return the target if found
		if (arr[mid] === n) {
			return mid;
		}
		// determine which side is sorted
		// Left side is sorted because the first index is less than the midpoint
		if (arr[left] <= arr[mid]) {
			// Target is located on the sorted left side because the number is between the left and midpoint
			if (n >= arr[left] && n < arr[mid]) {
				right = mid - 1;
				// Otherwise search the right side
			} else {
				left = mid + 1;
			}
			// Right side is sorted because the first index is greater than the midpoint
		} else {
			// Determine if target is on the sorted right side
			if (n <= arr[right]) {
				left = mid + 1;
				// Otherwise search the left side
			} else {
				right = mid - 1;
			}
		}
	}
	// exited loop without finding the target
	return -1;
}

module.exports = { countZeroes, sortedFrequency, findRotatedIndex };
