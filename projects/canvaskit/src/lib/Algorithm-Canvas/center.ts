function findCanvasCenter(canvas: HTMLCanvasElement): { x: number; y: number } {
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
  
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
  
    return { x: centerX, y: centerY };
  }
  
  const canvasElement = document.getElementById('myCanvas') as HTMLCanvasElement;
  const center = findCanvasCenter(canvasElement);
  
  console.log(`The center of the canvas is at (${center.x}, ${center.y}).`);
  