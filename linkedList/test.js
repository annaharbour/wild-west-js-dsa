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
	let list;

	beforeEach(() => {
		list = new SinglyLinkedList();
	});

	test("SinglyLinkedList is a class", () => {
		expect(typeof list.prototype.constructor).toEqual("function");
	});
	test("A SinglyLinkedList has properties of head, tail, and length", () => {
		expect(list.head).toEqual(null);
		expect(list.tail).toEqual(null);
		expect(list.length).toEqual(0);
	});
});

describe("Push", () => {
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
	test("Pop is a function", () => {
		expect(typeof list.pop).toEqual("function");
	});
	test("Pop should remove a node at the end of the SinglyLinkedList. It should return the node removed.", () => {
		list.push(10);
		list.push(15);

		expect(list.pop()).toEqual(15);
		expect(list.tail.data).toEqual(10);
		expect(list.length).toEqual(1);
	});
});

describe.skip("Get", () => {
	test.skip("Get is a function", () => {
		expect(typeof get).toEqual("function");
	});
	test.skip("This function should find a node at a specified index in a SinglyLinkedList. It should return the found node.", () => {});
});

describe.skip("Set", () => {
	test.skip("Set is a function", () => {
		expect(typeof set).toEqual("function");
	});
});

describe.skip("Insert", () => {
	test.skip("Insert is a function", () => {
		expect(typeof insert).toEqual("function");
	});
});

describe.skip("Remove", () => {
	test.skip("Remove is a function", () => {
		expect(typeof remove).toEqual("function");
	});
});

describe.skip("Rotate", () => {
	test.skip("Rotate is a function", () => {
		expect(typeof rotate).toEqual("function");
	});
});
