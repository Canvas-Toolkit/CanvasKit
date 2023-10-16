class Elements {
  constructor(public x: number, public y: number, public cost: number, public parent?: Elements) {}
}

function aStar(start: Elements, end: Elements, grid: Elements[][]): Elements[] {
  const openList: Elements[] = [];
  const closedList: Elements[] = [];

  openList.push(start);

  while (openList.length) {
    const currentNode: Elements = openList.shift()!;

    if (currentNode === end) {
      return retracePath(currentNode);
    }

    closedList.push(currentNode);

    for (const neighbor of getNeighbors(currentNode, grid)) {
      if (closedList.includes(neighbor)) {
        continue;
      }

      const newCost = currentNode.cost + neighbor.cost;

      if (!openList.includes(neighbor) || newCost < neighbor.cost) {
        neighbor.cost = newCost;
        neighbor.parent = currentNode;

        openList.push(neighbor);
      }
    }
  }

  // No path found
  return [];
}

function retracePath(currentNode: Elements): Elements[] {
  const path: Elements[] = [];

  while (currentNode) {
    path.push(currentNode);
    currentNode = currentNode.parent!;
  }

  path.reverse();
  return path;
}

type Elements = { x: number; y: number };

function getNeighbors(currentNode: Elements, grid: Elements[][]): Elements[] {
  const { x, y } = currentNode;
  
  // Define the relative positions for neighbors.
  const relativePositions = [
    { dx: -1, dy: -1 },
    { dx: -1, dy: 0 },
    { dx: -1, dy: 1 },
    { dx: 0, dy: -1 },
    { dx: 0, dy: 1 },
    { dx: 1, dy: -1 },
    { dx: 1, dy: 0 },
    { dx: 1, dy: 1 },
  ];

  const neighbors = relativePositions
    .map(({ dx, dy }) => ({ x: x + dx, y: y + dy }))
    .filter(({ x: neighborX, y: neighborY }) => 
      neighborX >= 0 && neighborX < grid.length && neighborY >= 0 && neighborY < grid[0].length
    )
    .map(({ x: neighborX, y: neighborY }) => grid[neighborX][neighborY]);

  return neighbors;
}
