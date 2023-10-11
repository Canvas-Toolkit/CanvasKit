function divideCanvasCustomPattern(canvas: HTMLCanvasElement, pattern: string): { x: number; y: number } {
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    
    if (pattern === 'four-sections') {
      const midpointX = canvasWidth / 2;
      const midpointY = canvasHeight / 2;
      return { x: midpointX, y: midpointY };
    }
    
   
    return { x: canvasWidth / 2, y: canvasHeight / 2 };
  }
  
  // Example usage:
  const canvasElement = document.getElementById('myCanvas') as HTMLCanvasElement; 
  const customPattern = 'four-sections';
  const midPoint = divideCanvasCustomPattern(canvasElement, customPattern);
  
  console.log(`The midpoint after custom canvas division is at (${midPoint.x}, ${midPoint.y}).`);
  