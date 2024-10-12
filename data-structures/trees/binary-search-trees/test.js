const { BinarySearchTree } = require("./index");

describe("BinarySearchTree", () => {
	let bst;

	beforeEach(() => {
		bst = new BinarySearchTree();
	});

	test("should insert nodes correctly", () => {
		bst.insertIteratively(10);
		bst.insertIteratively(5);
		bst.insertIteratively(15);
		bst.insertIteratively(3);
		bst.insertIteratively(7);
		bst.insertIteratively(13);
		bst.insertIteratively(17);

		expect(bst.root.val).toBe(10);
		expect(bst.root.left.val).toBe(5);
		expect(bst.root.right.val).toBe(15);
		expect(bst.root.left.left.val).toBe(3);
		expect(bst.root.left.right.val).toBe(7);
		expect(bst.root.right.left.val).toBe(13);
		expect(bst.root.right.right.val).toBe(17);
	});

	test("should not insert duplicate values", () => {
		bst.insertIteratively(10);
		expect(bst.insertIteratively(10)).toBeUndefined();
	});

	test("find", () => {
		expect(bst.find(120)).toBe(undefined);
		bst
			.insertIteratively(15)
			.insertIteratively(20)
			.insertIteratively(10)
			.insertIteratively(12);
		expect(bst.find(120)).toBe(undefined);
		expect(bst.find(20)).toBe(20);
	});

	test("breadthFirstSearch should return an empty array for an empty tree", () => {
		expect(bst.breadthFirstSearch()).toEqual([]);
	});

	test(" breadth first search should return nodes in BFS order", () => {
		bst.insertIteratively(10);
		bst.insertIteratively(5);
		bst.insertIteratively(15);
		bst.insertIteratively(3);
		bst.insertIteratively(7);

		expect(bst.breadthFirstSearch()).toEqual([10, 5, 15, 3, 7]);
	});

	test("recursiveBFS should return an empty array for an empty tree", () => {
		expect(bst.recursiveBFS()).toEqual([]);
	});

	test("Remove should return nodes in BFS order", () => {
		bst.insertIteratively(10);
		bst.insertIteratively(5);
		bst.insertIteratively(15);
		bst.insertIteratively(3);
		bst.insertIteratively(7);

		expect(bst.recursiveBFS()).toEqual([10, 5, 15, 3, 7]);
	});

	test("Remove should remove leaf nodes correctly", () => {
		bst.insertIteratively(10);
		bst.insertIteratively(5);
		bst.insertIteratively(15);
		bst.insertIteratively(3);
		bst.insertIteratively(7);

		bst.remove(3);
		expect(bst.find(3)).toBeUndefined();
		expect(bst.root.left.left).toBeNull();
	});

	test("Remove should remove nodes with one child correctly", () => {
		bst.insertIteratively(10);
		bst.insertIteratively(5);
		bst.insertIteratively(15);
		bst.insertIteratively(3);
		bst.insertIteratively(7);
		bst.insertIteratively(6);

		bst.remove(7);
		expect(bst.find(7)).toBeUndefined();
		expect(bst.root.left.right.val).toBe(6);
	});

	test("Remove should remove nodes with two children correctly", () => {
		bst.insertIteratively(10);
		bst.insertIteratively(5);
		bst.insertIteratively(15);
		bst.insertIteratively(3);
		bst.insertIteratively(7);
		bst.insertIteratively(12);
		bst.insertIteratively(18);

		bst.remove(15);
		expect(bst.find(15)).toBeUndefined();
		expect(bst.root.right.val).toBe(18);
	});

	test("DFSPreOrder should return nodes in pre-order", () => {
		bst.insertIteratively(10);
		bst.insertIteratively(5);
		bst.insertIteratively(15);
		bst.insertIteratively(3);
		bst.insertIteratively(7);

		expect(bst.DFSPreOrder()).toEqual([10, 5, 3, 7, 15]);
	});

	test("DFSPostOrdershould return nodes in post-order", () => {
		bst.insertIteratively(10);
		bst.insertIteratively(5);
		bst.insertIteratively(15);
		bst.insertIteratively(3);
		bst.insertIteratively(7);

		expect(bst.DFSPostOrder()).toEqual([3, 7, 5, 15, 10]);
	});

	test("DFSInOrder should return nodes in in-order", () => {
		bst.insertIteratively(10);
		bst.insertIteratively(5);
		bst.insertIteratively(15);
		bst.insertIteratively(3);
		bst.insertIteratively(7);

		expect(bst.DFSInOrder()).toEqual([3, 5, 7, 10, 15]);
	});

	it('should return true for balanced trees', () => {
		bst.insertIteratively(10);
		bst.insertIteratively(5);
		bst.insertIteratively(15);
		bst.insertIteratively(3);
		bst.insertIteratively(7);
		bst.insertIteratively(13);
		bst.insertIteratively(17);

		expect(bst.isBalanced()).toBe(true);
	});

	test('isBalanced should return false for unbalanced trees', () => {
		bst.insertIteratively(10);
		bst.insertIteratively(5);
		bst.insertIteratively(3);
		bst.insertIteratively(2);
		bst.insertIteratively(1);

		expect(bst.isBalanced()).toBe(false);
	});
});
