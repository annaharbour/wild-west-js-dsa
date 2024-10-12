/*MAX BINARY HEAP
Each parent has at most two child nodes
The value of each parent node is always greater than its child nodes
In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first*/

class MaxBinaryHeap {
	constructor() {
		this.data = [];
	}
	insert(el) {
		this.data.push(el);
		this.bubbleUp();
	}

	bubbleUp() {
		// To find childrens' parents
		// start at the end of the bottom of the heap
		let idx = this.data.length - 1;
		// for any node at idx
		const el = this.data[idx];
		// check all values in the heap
		while (idx > 0) {
			// parent is at (n-1)/2
			let parentIdx = Math.floor((idx - 1) / 2);
			// parent value
			let parent = this.data[parentIdx];
			// if the current element is less than the parent, the element is in the right place
			if (el <= parent) break;
			// el swaps position with the parent node
			this.data[parentIdx] = el;
			this.data[idx] = parent;
			// update index
			idx = parentIdx;
		}
	}

	sinkDown() {
		// insantiate index to the root
		let idx = 0;
		const length = this.data.length;
		// store the root
		const el = this.data[0];
		while (true) {
			// left child is stored at 2n+1
			let leftChildIdx = Math.floor(2 * idx + 1);
			// right child is stored at 2n+2
			let rightChildIdx = Math.floor(2 * idx + 2);
			let leftChild, rightChild;
			let swap = null;
			// index of left child if child is not out of bounds
			if (leftChild < length) {
				leftChild = this.data[leftChildIdx];
				// if left child is greater, swap
				if (leftChild > el) {
					swap = leftChildIdx;
				}
			}
			// index of right child if child is not out of bounds
			if (rightChild < length) {
				rightChild = this.data[rightChildIdx];
				// if both right and left are larger than element, swap with larger child
				if (
					(swap === null && rightChild > el) ||
					(swap !== null) & (rightChild > leftChild)
				) {
					swap = rightChildIdx;
				}
			}
			// if no swap occurred, exit
			if (swap === null) break;
			// otherwise swap child index becomes parent index
			this.data[idx] = this.data[swap];
			this.data[swap] = el;
			// loop continues until neither child is larger than element
			idx = swap;
		}
		//return former root
		return this.data[idx];
	}
}
/* PRIORITY QUEUE
A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities. */
class Node {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor() {
		this.data = [];
	}

	// Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.
	enqueue() {
		let node = new Node(val, priority);
		this.data.push(node);
		this.bubbleUp();
	}

	bubbleUp() {
		// instantiatze index to be the last node
		let idx = this.data.length - 1;
		// set element for comparison to be the value of the node at that index
		const el = this.data(idx);
		// while we still have nodes to check
		while (idx > 0) {
			// find the parent of the node
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.data[parentIdx];
			// if the element is a higher priority, break out of the loop
			if (el.priority >= parent.priority) break;
			// otherwise swap the index of child and parent nodes
			this.data[parentIdx] = el;
			this.data[idx] = parent;
			idx = parentIdx;
		}
	}

	// Dequeue method removes root element, returns it, and rearranges heap using priority.
	dequeue() {
		// set min to be the root node
		const min = this.data[0];
		const end = this.data.pop();
		// rearrange
		if (this.data.length > 0) {
			this.data[0] = end;
			this.sinkDown();
		}
		return min;
	}

	sinkDown() {
		// insantiate index to the root
		let idx = 0;
		const length = this.data.length;
		// store the root
		const el = this.data[0];
		while (true) {
			// left child is stored at 2n+1
			let leftChildIdx = Math.floor(2 * idx + 1);
			// right child is stored at 2n+2
			let rightChildIdx = Math.floor(2 * idx + 2);
			let leftChild, rightChild;
			let swap = null;
			// index of left child if child is not out of bounds
			if (leftChild < length) {
				leftChild = this.data[leftChildIdx];
				// if left child is greater, swap
				if (leftChild.priority > el.priority) {
					swap = leftChildIdx;
				}
			}
			// index of right child if child is not out of bounds
			if (rightChild < length) {
				rightChild = this.data[rightChildIdx];
				// if both right and left priorities are greater than element, swap with greatest priority
				if (
					(swap === null && rightChild.priority > el.priority) ||
					(swap !== null) & (rightChild.priority > leftChild.priority)
				) {
					swap = rightChildIdx;
				}
			}
			// if no swap occurred, exit
			if (swap === null) break;
			// otherwise swap child index becomes parent index
			this.data[idx] = this.data[swap];
			this.data[swap] = el;
			// loop continues until neither child is larger than element
			idx = swap;
		}
	}
}

module.exports(MaxBinaryHeap);
