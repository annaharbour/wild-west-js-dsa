/*
Write a function called isSubsequence that check whether the characters in the first string appear somewhere in the second string, without their order changing.Your solution MUST have AT LEAST the following complexities:
Time Complexity - O(N + M)
Space Complexity - O(1)
*/

function isSubsequence(first, second) {
	let i = 0; // Pointer for the first string
	let j = 0; // Pointer for the second string

	// Traverse the second string
	while (j < second.length) {
		// If characters match, move the pointer for the first string
		if (first[i] === second[j]) {
			i++;
		}
		// Always move the pointer for the second string
		j++;

		// If we've matched all characters of the first string
		if (i === first.length) {
			return true;
		}
	}
	// If we exit the loop without matching all characters, return false
	return false;
}

/*
Average Pair Problem
Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:
Time: O(N)
Space: O(1)
*/

function averagePair(arr, n) {
	let left = 0;
	let right = arr.length - 1;
	// traverse the array while left pointer is less than right pointer, loop will continue running until the left and right pointers meet (we've covered the portion of the sorted array that might have possibly contained the average that matched the target)
	while (left < right) {
		// checks if average of two pointers is equal to the target
		let avg = (arr[left] + arr[right]) / 2;
		if (avg === n) return true;
		// if the average is less than the target average, decrement the left pointer
		else if (avg < n) left++;
		// if the average is greater than the target average, decrement the right pointer
		else right--;
	}
	// exited the while loop without finding an average of two values in the array that matches the target average (n), so return false
	return false;
}

module.exports = { averagePair, isSubsequence };
