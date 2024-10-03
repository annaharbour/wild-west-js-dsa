class Node {
	constructor(data = null) {
		// initialize data to be either the value passed in to the new node during creation and the next node to null
		this.data = data;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor(val) {
		// initialize head and tail to null and length to 0
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const node = new Node(val);
		// Checks to see if there's already a head - if not, the list is empty, so it sets the head and tail as the new node.
		if (!this.head) {
			this.head = node;
			this.tail = this.head;
		} else {
			// if not, we set the next node after the current tail to be the new node and set the new node to be the tail of the linked list.
			this.tail.next = node;
			this.tail = node;
		}
		// length property increases by one
		this.length++;
		// return the linked list
		return this;
	}

	pop() {
		// if there's no head to pop off, the list is empty - return undefined
		if (!this.head) {
			return undefined;
		}
		// otherwise set the current value to be the head
		let curr = this.head;
		// and the tail to be the current value
		let tail = curr;
		// while there's a next node
		while (curr.next) {
			// set tail to be the current value, and move our "current" pointer to the next node
			tail = curr;
			curr = curr.next;
		}
		// once there's not a next node, set the list's tail property to the tail
		this.tail = tail;
		// remove the pointer to the next node
		this.tail.next = null;
		// reduce the list's length property by 1
		this.length -= 1;
		// if this action empties the list, set the list's length property to 0 and the head and tail to be null.
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		// return the popped-off node, which was the tail
		return curr;
	}

	get(idx) {
		// set our temporary variable to the head of the list
		let curr = this.head;
		// set count to 0
		let count = 0;
		// check to make sure the list isn't empty
		while (curr !== null) {
			// once we reach the desired index, return the node's value
			if (idx === count) {
				return curr;
			}
			// else, increment count and move to the next node
			count++;
			curr = curr.next;
		}
		// if current is null, return null
		return null;
	}

	set(idx, val) {
		let node = this.get(idx);
		if (node) {
			node.data = val;
			return true;
		} else return false;
	}

	insert(idx, val) {
		// Check to make sure the index parameter is in bounds of the list
		if (idx < 0 || idx > this.length) return false;
		// Create a new node with the value
		let node = new Node(val);
		// if the index is 0
		if (idx === 0) {
			// set the new node to be the head
			node.next = this.head;
			// set the head to be the new node
			this.head = node;
			// if the list is empty, the node is also the new tail
			if (this.length === 0) this.tail = node;
			// increment the length of the list by one
			this.length++;
			return true;
		}
		// if the index is the same as the length of the array
		if (idx === this.length) {
			// then we can just push the value onto the end of the list, and the node becomes the new tail
			this.push(val);
			return true;
		}
		// otherwise set a temporary variable to equal the current node at that index, set the next property of the previous node to the new node, and the new node's next property to the previous node's former next node
		let prev = this.get(idx - 1);
		let temp = prev.next;
		prev.next = node;
		node.next = temp;
		this.length++;
		return true;
	}

	remove(idx) {
		if (!this.head || idx < 0 || idx >= this.length) return undefined;
		if (idx === 0) {
			let head = this.head;
			this.head = head.next;
			this.length--;
			if (this.length === 0) {
				this.tail = null;
			}
			return head;
		}
		let prev = this.get(idx - 1);
		let node = prev.next;
		prev.next = node.next;
		this.length--;
		return node;
	}

	rotate(n) {
		if (this.length === 0 || n <= 0) return;

		n = n % this.length;
		if (n === 0) return;

		let current = this.head;
		let count = 1;
		while (count < this.length - n && current !== null) {
			current = current.next;
			count++;
		}

		let newHead = current.next;
		current.next = null;
		this.tail.next = this.head;
		this.head = newHead;

		let temp = newHead;
		while (temp.next !== null) {
			temp = temp.next;
		}
		this.tail = temp;
	}
}

module.exports = { SinglyLinkedList, Node };
