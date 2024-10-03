const L = require("./singlyLinkedList");
const SinglyLinkedList = L.SinglyLinkedList;
const Node = L.Node;

describe("A Node", () => {
	test("Node is a class", () => {
		expect(typeof Node.prototype.constructor).toEqual("function");
	});
	test('has properties "data" and "next', () => {
		const node = new Node("a");
		expect(node.data).toEqual("a");
		expect(node.next).toEqual(null);
	});
});

describe("A SinglyLinkedList", () => {
	test("SinglyLinkedList is a class", () => {
		expect(typeof SinglyLinkedList.prototype.constructor).toEqual("function");
	});
	let list;
	beforeEach(() => {
		list = new SinglyLinkedList();
	});
	test("A SinglyLinkedList has properties of head, tail, and length", () => {
		expect(list.head).toEqual(null);
		expect(list.tail).toEqual(null);
		expect(list.length).toEqual(0);
	});
});

describe("Push", () => {
	let list;
	beforeEach(() => {
		list = new SinglyLinkedList();
	});
	test("Push is a function", () => {
		expect(typeof list.push).toEqual("function");
	});
	test("Push should take in a value and add a node to the end of the SinglyLinkedList. It should return the SinglyLinkedList.", () => {
		list.push(10);
		expect(list.head.data).toEqual(10);
		expect(list.tail.data).toEqual(10);

		list.push(15);
		expect(list.head.data).toEqual(10);
		expect(list.tail.data).toEqual(15);
	});
});

describe("Pop", () => {
	let list;

	beforeEach(() => {
		list = new SinglyLinkedList();
	});
	test("Pop is a function", () => {
		expect(typeof list.pop).toEqual("function");
	});
	test("Pop should remove a node at the end of the SinglyLinkedList. It should return the node removed.", () => {
		list.push(10);
		list.push(15);

		expect(list.pop().data).toEqual(15);
		expect(list.tail.data).toEqual(10);
		expect(list.length).toEqual(1);
	});
});

describe("Get", () => {
	let list;

	beforeEach(() => {
		list = new SinglyLinkedList();
	});
	test("Get is a function", () => {
		expect(typeof list.get).toEqual("function");
	});
	test("This function should find a node at a specified index in a SinglyLinkedList. It should return the found node's value.", () => {
		list.push(10);
		list.push(15);

		expect(list.get(0).data).toEqual(10);
		expect(list.get(1).data).toEqual(15);
		expect(list.get(2)).toEqual(null);
	});
});

describe("Set", () => {
	let list;

	beforeEach(() => {
		list = new SinglyLinkedList();
	});
	test("Set is a function", () => {
		expect(typeof list.set).toEqual("function");
	});
	test("Set should accept an index and a value and update the value of the node at that index in a singly linked list with the provided value. Should return true for successful update to a node and false for an invalid index", () => {
		list.push(10);
		list.push(15);

		expect(list.set(0, 20)).toBe(true);
		expect(list.set(3, 30)).toBe(false);
		expect(list.get(0).data).toEqual(20);
		expect(list.get(3)).toEqual(null);
	});
});

describe("Insert", () => {
	let list;

	beforeEach(() => {
		list = new SinglyLinkedList();
	});

	test("Insert is a function", () => {
		expect(typeof list.insert).toEqual("function");
	});

	test("Insert should insert a node at a specified index and return true if the index is valid or false if the index is invalid ", () => {
		list.push(5);
		list.push(10);
		expect(list.insert(0, 15)).toBe(true);
		expect(list.insert(1, 20)).toBe(true);
		expect(list.insert(100, 25)).toBe(false);
	});
});

describe("Remove", () => {
	let list;

	beforeEach(() => {
		list = new SinglyLinkedList();
	});
	test("Remove is a function", () => {
		expect(typeof list.remove).toEqual("function");
	});
	test("Removes a node at a given index from the list and returns the removed node if the index is valid or undefined if the index is invalid", () => {
		list.push(5);
		list.push(10);
		list.push(15);

		expect(list.remove(0).data).toEqual(5);
		expect(list.remove(1).data).toEqual(15);
		expect(list.remove(2)).toBe(undefined);
	});
});

describe("Rotate", () => {
	let list;

	beforeEach(() => {
		list = new SinglyLinkedList();
	});

	test("Rotate is a function", () => {
		expect(typeof list.rotate).toEqual("function");
	});

	test("Should rotate all the nodes in the list by some number passed in. For instance, 1 -> 2 -> 3 -> 4 -> 5 rotated by 2 becomes 3 -> 4 -> 5 -> 1 -> 2. ", () => {
		list.push(5).push(10).push(15).push(20).push(25);
		list.rotate(3);
		expect(list.get(0).data).toEqual(15);
		expect(list.get(1).data).toEqual(20);
	});
});
