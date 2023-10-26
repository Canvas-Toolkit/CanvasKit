function divideCanvasDiagonal(canvas: HTMLCanvasElement): { x: number; y: number } {
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
  
    const midpointX = canvasWidth / 2;
    const midpointY = canvasHeight / 2;
  
    return { x: midpointX, y: midpointY };
  }
  