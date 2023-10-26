function divideCanvasRowsCols(canvas: HTMLCanvasElement, rows: number, cols: number): { x: number; y: number } {
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
  
    const cellWidth = canvasWidth / cols;
    const cellHeight = canvasHeight / rows;
  
    const midpointX = cellWidth * Math.floor(cols / 2);
    const midpointY = cellHeight * Math.floor(rows / 2);
  
    return { x: midpointX, y: midpointY };
  }
  