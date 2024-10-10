class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert() {
		// create a new node
		let node = new Node();
		// if there's not a root already, the root is the new node
		if (this.root === null) {
			this.root = node;
			return this;
		}
		// if there's a root, set the current node to be the root
		let current = this.root;
		// I hate using an infinite loop like below, I greatly prefer the recursive function instead that calls a function to iterate through the tree until the node is placed.
		while (true) {
			// check if the current root's value is equal to the current
			if (val === current.val) return undefined;
			// if there is a root, check val < node.val
			if (val < current.val) {
				// if so see if there's a node on the left
				if (current.left === null) {
					// if not, insert the node on the left
					current.left = node;
					return this;
				} else {
					current = current.left;
					//loop runs again until finishing condition is met
				}
				// if val is less than current val
			} else {
				// if there's not a right node, insert the node there
				if (current.right === null) {
					current.right = node;
					return this;
				}
				// otherwise set current to the right node
				current = current.right;
				// loop runs again until finishing condition is met
			}
		}
	}
}

class RecursiveBST {
	constructor() {
		this.root = null;
	}

	insert(val) {
		const node = new Node();
		// if there isn't a root, new node becomes the root
		if (this.root === null) {
			this.root = node;
			// return the bst
			return this;
		}
		// call recursive function to find where to insert the node
		this.insertNode(this.root, node);
		// once node is inserted, return the bst
		return this;
	}

	insertNode(current, node) {
		if (node.val === current.val) return undefined;

		if (node.val < current.val) {
			// base case
			if (current.left === null) {
				// insert node at current
				current.left = node;
			} else {
				// otherwise recursively call function, setting the left node as current
				this.insertNode(current.left, node);
			}
		} else {
			// base case
			if (current.right === null) {
				// insert node at current
				current.right == node;
			} else {
				// otherwise recursively call function, setting the right node as the current
				this.insertNode(current.right, node);
			}
		}
	}
}

// Explanation: Tree Depth-First Search (DFS) involves exploring as far as possible along each branch before backtracking.

// LeetCode Problems:
// 1. Maximum Depth of Binary Tree (Problem #104)
// 2. Path Sum (Problem #112)
// 3. Symmetric Tree (Problem #101)

// Explanation: Tree Breadth-First Search (BFS) involves visiting each level of the tree before moving on to the next level.

// LeetCode Problems:
// 1. Binary Tree Level Order Traversal (Problem #102)
// 2. Binary Tree Zigzag Level Order Traversal (Problem #103)
// 3. Minimum Depth of Binary Tree (Problem #111)
