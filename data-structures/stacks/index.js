//Linked List Implementation of a Stack
// Insertion -   O(1)
// Removal -   O(1)
// Searching -   O(N)
// Access -   O(N)

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class StackList {
	constructor() {
		this.bottom = null;
		this.top = null;
		this.items = [];
		this.length = 0;
	}

	push(val) {
		// else create a new node and push the node onto the top
		let node = new Node(val);
		// if the stack is empty, this becomes the new top and bottom
		if (!this.top) {
			this.top = node;
			this.bottom = node;
			// else it only becomes the new top
		} else {
			// set the next property on the new node to be the previous top
			let temp = this.top;
			this.top = node;
			this.top.next = temp;
		}
		//increment length
		return this.length++;
	}

	pop() {
		// if the stack is empty then stack underflows and we cannot remove any element
		if (!this.top) return null;
		// if the stack only has one node, update top and bottom to null
		if (this.top === this.bottom) {
			let node = this.top;
			this.top = null;
			this.bottom = null;
			this.length--;
			return node.val;
		}
		// otherwise store value at top
		let node = this.top;
		// set the new top to be the removed node's next value
		this.top = node.next;
		//decrement length
		this.length--;
		return node.val;
	}

	peek() {
		// if stack is empty, print stack is empty
		if (!this.top) return null;
		// otherwise return element stored at bottom
		return this.top.val;
	}
}

module.exports = {StackList}