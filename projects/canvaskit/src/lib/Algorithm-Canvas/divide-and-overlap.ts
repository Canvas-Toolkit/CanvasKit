function divideAndOverlapCanvas(canvas: HTMLCanvasElement, overlapMargin: number): { x: number; y: number } {
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const part1Width = canvasWidth / 2;
    const part1Height = canvasHeight / 2;
    const part2Width = canvasWidth / 2;
    const part2Height = canvasHeight / 2;
  

    const midpointX = part1Width + overlapMargin / 2;
    const midpointY = part1Height + overlapMargin / 2;
  
    return { x: midpointX, y: midpointY };
  }
  
  // Example usage:
  const canvasElement = document.getElementById('myCanvas') as HTMLCanvasElement; 
  const overlapMargin = 20;
  const midPoint = divideAndOverlapCanvas(canvasElement, overlapMargin);
  
  console.log(`The midpoint after dividing and overlapping the canvas into four parts is at (${midPoint.x}, ${midPoint.y}).`);
  