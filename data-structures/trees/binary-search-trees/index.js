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

	findRecursivelyHelper(current, val) {
		if (val < current.val) {
			// base case
			if (current.left === null) {
				return undefined;
			} else {
				// otherwise recursively call function, setting the left node as current
				return this.findRecursivelyHelper(current.left, val);
			}
		} else {
			// base case
			if (current.right === null) {
				return undefined;
			} else {
				// otherwise recursively call function, setting the right node as the current
				return this.findRecursivelyHelper(current.right, val);
			}
		}
	}

	findRecursively(val) {
		if (this.root === null) {
			return undefined;
		}
		// call recursive function to find where to insert the node
		const result = this.findRecursivelyHelper(this.root, val);
		// once node is inserted, return the bst
		return result === undefined ? undefined : this;
	}

	find(val) {
		if (this.root === null) return undefined;
		// Start at the root
		let current = this.root;
		// initialize found to be false
		let found = false;
		// until we run out of nodes or find the node we're looking for
		while (current && !found) {
			// if value we're searching for is less than the current value
			if (val < current.val) {
				// move to the left
				current = current.left;
				// if it's greater
			} else if (val > current.val) {
				// move to the right
				current = current.right;
			} else {
				// if we're on it, change found to true
				found = true;
			}
		}
		// if we run out of nodes and haven't found it, return undefined
		if (!found) return undefined;
		// otherwise return the current (found) node
		return current.val;
	}

	insertHelper(current, node) {
		if (node.val === current.val) return undefined;

		if (node.val < current.val) {
			// base case
			if (current.left === null) {
				// insert node at current
				current.left = node;
			} else {
				// otherwise recursively call function, setting the left node as current
				this.insertHelper(current.left, node);
			}
		} else {
			// base case
			if (current.right === null) {
				// insert node at current
				current.right = node;
			} else {
				// otherwise recursively call function, setting the right node as the current
				this.insertHelper(current.right, node);
			}
		}
	}

	insertRecursively(val) {
		const node = new Node(val);
		// if there isn't a root, new node becomes the root
		if (this.root === null) {
			this.root = node;
			// return the bst
			return this;
		}
		// call recursive function to find where to insert the node
		const result = this.insertHelper(this.root, node);
		// once node is inserted, return the bst
		return result === undefined ? undefined : this;
	}

	insertIteratively(val) {
		// create a new node
		let node = new Node(val);
		// if there's not a root already, the root is the new node
		if (this.root === null) {
			this.root = node;
			return this;
		}
		// if there's a root, set the current node to be the root
		let current = this.root;
		// infinite loop runs until one of the return conditions are met
		while (true) {
			// check if the current root's value is equal to the current
			if (val === current.val) return undefined;
			// if there is a root, check val < node.val
			if (val < current.val) {
				// if so see if there's a node on the left
				if (current.left === null) {
					// if not, insert the node on the left
					current.left = node;
					//loop runs again until finishing condition is met
					return this;
				}
				// move to the left child node
				current = current.left;
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

	recursiveBFS(queue = [this.root], result = []) {
		if (!this.root) return [];

		// Base case: if the queue is empty, return the result
		if (queue.length === 0) return result;

		// Dequeue the first node from the queue
		let current = queue.shift();
		// Push the value of the node into the result array
		result.push(current.val);

		// If there is a left property, add that to the queue
		if (current.left) queue.push(current.left);
		// If there is a right property, add that to the queue
		if (current.right) queue.push(current.right);

		// Recursively call the function with the updated queue and result
		return this.recursiveBFS(queue, result);
	}

	breadthFirstSearch() {
		// If the root doesn't exist, tree is empty
		if (this.root === null) return [];

		// starting point for traversal
		let queue = [this.root];
		let result = [];

		// while there's something in the queue
		while (queue.length) {
			// dequeue from the queue
			let current = queue.shift();
			// push the value of the node into the variable that stores the nodes
			result.push(current.val);

			// if there is a left property, add that to the queue
			if (current.left) queue.push(current.left);
			// if there is a right property, add that to the queue
			if (current.right) queue.push(current.right);
		}
		// return the values
		return result;
	}
	remove(val) {
		// Find the node to be removed
		// use current to track what node we're on and parent to remember the node's parent
		let current = this.root;
		let parent = null;

		// while we haven't explored all the nodes
		while (current) {
			if (val < current.val) {
				parent = current;
				current = current.left;
			} else if (val > current.val) {
				parent = current;
				current = current.right;
			} else {
				// We found the node! Now handle these different cases:
				// handle node with no children
				if (!current.left && !current.right) {
					if (current === this.root) {
						this.root = null;
					} else if (parent.left === current) {
						parent.left = null;
					} else {
						parent.right = null;
					}
				}
				// handle node with one child
				else if (!current.left || !current.right) {
					const child = current.left || current.right;
					if (current === this.root) {
						this.root = child;
					} else if (parent.left === current) {
						parent.left = child;
					} else {
						parent.right = child;
					}
				}
				// handle node with two children
				else {
					let successorParent = current;
					let successor = current.right;

					while (successor.left) {
						successorParent = successor;
						successor = successor.left;
					}
					current.val = successor.val;

					if (successorParent.left === successor) {
						successorParent.left = successor.right;
					} else {
						successorParent.right = successor.right;
					}
				}
				return current;
			}
		}
		return undefined;
	}

	DFSPreOrder() {
		let result = [];
		function traverse(current) {
			//push preorder
			result.push(current.val);
			//traverse left
			if (current.left) traverse(current.left);
			//traverse right
			if (current.right) traverse(current.right);
		}
		//start traversal
		traverse(this.root);
		// traversal is complete, return array in pre-order
		return result;
	}

	DFSPostOrder() {
		let result = [];
		function traverse(current) {
			//check left
			if (current.left) traverse(current.left);
			//check right
			if (current.right) traverse(current.right);
			// push postorder
			result.push(current.val);
		}
		//start traversal
		traverse(this.root);
		// traversal is complete, return array in post-order
		return result;
	}

	DFSInOrder() {
		let result = [];
		function traverse(current) {
			// check left
			if (current.left) traverse(current.left);
			// pushes in order
			result.push(current.val);
			//check right
			if (current.right) traverse(current.right);
		}
		// start traversal
		traverse(this.root);
		// traversal is complete, return array in order
		return result;
	}

	isBalanced() {
		function getHeight(node) {
			if (node === null) return 0;

			const leftHeight = getHeight(node.left);
			const rightHeight = getHeight(node.right);

			//If the subtree is unbalanced, propagate -1 to indicate imbalance
			if (
				leftHeight === -1 ||
				rightHeight === -1 ||
				Math.abs(leftHeight - rightHeight > 1)
			) {
				return 1;
			}

			// Return height of subtree
			return Math.max(leftHeight, rightHeight) + 1;
		}

		//If getHeight returns -1, the tree is unbalanced
		return getHeight(this.root) !== 1;
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

module.exports = { BinarySearchTree };
