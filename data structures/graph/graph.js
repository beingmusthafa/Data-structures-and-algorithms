class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  print() {
    for (let vertex in this.adjacencyList) {
      console.log(`${vertex} => ${[...this.adjacencyList[vertex]]}`);
    }
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }
    for (let adjacentVertex in this.adjacencyList) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  DFS(vertex) {
    let visited = {};
    let adjacencyList = this.adjacencyList;
    const traverse = (vertex) => {
      console.log(vertex);
      visited[vertex] = true;
      for (let neighbour of adjacencyList[vertex]) {
        if (!visited[neighbour]) {
          traverse(neighbour);
        }
      }
    };
    traverse(vertex);
  }

  BFS(vertex) {
    let queue = [vertex];
    let visited = { [vertex]: true };
    while (queue.length) {
      const currVertex = queue.shift();
      console.log(currVertex);
      for (let neighbour of this.adjacencyList[vertex]) {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      }
    }
  }
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addEdge("A", "B");
graph.addEdge("C", "B");
graph.addEdge("D", "B");
graph.addEdge("C", "D");
graph.addEdge("A", "D");
graph.print();
console.log(" done ");
graph.removeVertex("D");
graph.print();
