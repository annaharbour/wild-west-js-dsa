// Explanation: Graph traversal involves visiting all the vertices or nodes of a graph. This can be done in various ways, such as Breadth-First Search (BFS) or Depth-First Search (DFS).
class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(v) {
		// if vertex is not present in adjacency list, add it
		if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
	}

	removeVertex(v) {
		// while the vertex has edges
		while (this.adjacencyList[v].length) {
			// remove edge
			const v2 = this.adjacencyList[v].pop();
			this.removeEdge(v, v2);
		}
		// delete vertex from list as soon as edges are gone
		delete this.adjacencyList[v];
	}

	addEdge(v1, v2) {
		// push an edge ref to and from vertices
		this.adjacencyList[v1].push(v2);
		this.adjacencyList[v2].push(v1);
	}

	removeEdge(v1, v2) {
		// remove edge from v1 to v2
		this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);

		// remove edge from v2 to v1
		this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
	}

	// breadth first search
	BFS(start) {
		// Initialize a queue with the starting node
		// We'll use this to keep track of nodes to be explored
		const queue = [start];
		// Store order of visited nodes
		const result = [];
		// initialize an empty object to keep track of the nodes we've visited
		const visited = {};
		// current node
		let v;
		//  marks starting node as visited
		visited[start] = true;

		// traverse as long as their are nodes left to explore
		while (queue.length) {
			// deqeue first node and set current indux
			v = queue.shift();
			// push current node to result
			result.push(v);

			// iterate over neighbors
			this.adjacencyList[v].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					queue.push(neighbor);
				}
			});
		}
		// all nodes have been visited, return result
		return result;
	}

	// depth first search
	DFS(start) {
		// array to track order of visited nodes
		const result = [];
		// keep track of visited nodes
		const visited = {};

		// recursive function
		const dfs = (v) => {
			// base case: we're out of vertices
			if (!v) return null;
			// mark current node as visited
			visited[v] = true;
			// push current node into result
			result.push(v);

			// explore neighbors
			this.adjacencyList[v].forEach((neighbor) => {
				if (!visited[neighbor]) {
					// recursive call
					return dfs(neighbor);
				}
			});
		};

		// loop
		dfs(start);

		return result;
	}
}

module.exports = { Graph };

// LeetCode Problems:
// 1. Number of Islands (Problem #200)
// 2. Course Schedule (Problem #207)
// 3. Word Ladder (Problem #127)
// 4. Dijkstra

//Topological Sorting
//Explanation: Topological sorting is used for directed acyclic graphs (DAGs) to find a linear ordering of vertices such that for every directed edge (u, v), vertex u comes before vertex v.

// LeetCode Problems:
// 1. Course Schedule (Problem #207)
// 2. Alien Dictionary (Problem #269)
// 3. Sequence Reconstruction (Problem #444)
