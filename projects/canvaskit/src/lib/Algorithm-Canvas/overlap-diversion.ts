function divideAndOverlapCanvas(canvas: HTMLCanvasElement, overlapMargin: number): { x: number; y: number } {
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
  
    // Divide the canvas into two parts
    const part1Width = canvasWidth / 2;
    const part2Width = canvasWidth - part1Width;
  
    // Calculate the midpoint of the overlap region
    const midpointX = part1Width + overlapMargin / 2;
    const midpointY = canvasHeight / 2;
  
    return { x: midpointX, y: midpointY };
  }
  
  // Example usage:
  const canvasElement = document.getElementById('myCanvas') as HTMLCanvasElement; 
  const overlapMargin = 20; 
  const midPoint = divideAndOverlapCanvas(canvasElement, overlapMargin);
  
  console.log(`The midpoint after dividing and overlapping the canvas is at (${midPoint.x}, ${midPoint.y}).`);
  