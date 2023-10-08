interface CanvasKit {
    drawRect(x: number, y: number, width: number, height: number): void;
    drawCircle(x: number, y: number, radius: number): void;
    drawLine(x1: number, y1: number, x2: number, y2: number): void;
    drawText(text: string, x: number, y: number): void;
    drawImage(image: HTMLImageElement, x: number, y: number): void;
    applyFilter(filter: string, element: HTMLCanvasElement): void;
    applyEffect(effect: string, element: HTMLCanvasElement): void;
  
    // Save the canvas as a file.
    saveAsFile(filename: string, format: 'png' | 'jpeg' | 'webp'): void;
  
    // Get the image data in a specific format.
    getImageData(format: 'png' | 'jpeg' | 'webp'): Promise<Uint8Array>;
  }
  