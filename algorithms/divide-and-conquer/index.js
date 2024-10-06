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
MERGE SORT

Implement the merge sort algorithm. Given an array, this algorithm will sort the values in the array. The functions take 2 parameters: an array and an optional comparator function.

The comparator function is a callback that will take two values from the array to be compared. The function returns a negative value if the first value is less than the second, a positive value if the first value is greater than the second, and 0 if both values are equal.

The default comparator you provide should assume that the two parameters are numbers and that we are sorting the values from smallest to largest.
*/

// Implement a merge function that takes in two sorted arrays and a comparator and returns a new sorted array.
function merge(left, right, comparator) {
	let result = [];
	let l = 0,
		r = 0;

	if (typeof comparator !== "function") {
		// defaulting comparator to sort values in ascending order
		comparator = (a, b) => a - b;
	}

	while (l <= left.length && r < right.length) {
		if (comparator(left[l], right[r]) <= 0) {
			result.push(left[l]);
			l++;
		} else {
			result.push(right[r])
			r++;
		}
	}
	// after we break out of the loop, if there are remaining elements in left, add them and return the result
	return result.concat(left.slice(l)).concat(right.slice(r));
}

// Break up the array into halves until you can compare one value with another
function mergeSort(arr, comparator) {
	if (arr.length <= 1) {
		return arr;
	}
	const mid = Math.floor(arr.length / 2);
	const left = mergeSort(arr.slice(0, mid), comparator);
	const right = mergeSort(arr.slice(mid), comparator);
// Once you have smaller sorted arrays, merge those arrays with other sorted pairs until you are back at the full length of the array
// Once the array has been merged back together, return the merged (and sorted!) array
	return merge(left, right, comparator);
}



/*
QUICK SORT
https://www.youtube.com/watch?v=XE4VP_8Y0BU

*/

//Pick an element in the array and designate it as the "pivot"
// Compare every other element in the array to the pivot
// If it's less than the pivot value, move it to the left of the pivot.
// If it's greater, move it to the right.
// Once you have finished comparing, the pivot will be in the right place in the array.
// Recursively call quicksort again with the left and right halves from the pivot until the array is sorted.

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

// Binary Search

/* 
Modified Binary Search involves using binary search in various scenarios, such as finding a target ele)ment, the smallest or largest element satisfying a condition, etc.

LeetCode Problems:
1. Search in Rotated Sorted Array (Problem #33)
2. Find Minimum in Rotated Sorted Array (Problem #153)
3. Peak Index in a Mountain Array (Problem #852
*/

/*
K-Way Merge

K-way merge is an extension of the two-way merge process commonly used in merge sort. Here’s what it entails:
In a k-way merge, instead of merging two sorted lists, you merge k sorted lists (or arrays) into a single sorted list.

1. Use a min-heap (or priority queue) to keep track of the smallest elements from each of the k lists. The algorithm works by:
2. Initializing the min-heap with the first element from each of the k lists.
3. Repeatedly extract the minimum element from the heap and adding it to the result list.
4. Insert the next element from the list that provided the minimum element into the heap.
Time Complexity: The time complexity is O(nlogk), where 𝑛 is the total number of elements across all lists and 𝑘 is the number of lists being merged.

LeetCode Problems:
1. Merge k Sorted Lists (Problem #23)
2. Kth Smallest Element in a Sorted Matrix (Problem #378)
3. Merge Intervals (Problem #56)
*/

module.exports = { countZeroes, sortedFrequency, findRotatedIndex, mergeSort, merge};
