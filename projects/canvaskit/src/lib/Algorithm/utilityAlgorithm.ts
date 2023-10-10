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

function getNeighbors(currentNode: Elements, grid: Elements[][]): Elements[] {
  const neighbors: Elements[] = [];

  for (const dx of [-1, 0, 1]) {
    for (const dy of [-1, 0, 1]) {
      if (dx === 0 && dy === 0) {
        continue;
      }

      const neighborX = currentNode.x + dx;
      const neighborY = currentNode.y + dy;

      if (neighborX >= 0 && neighborX < grid.length && neighborY >= 0 && neighborY < grid[0].length) {
        neighbors.push(grid[neighborX][neighborY]);
      }
    }
  }

  return neighbors;
}
