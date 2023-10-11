import { CanvasKit, ImageFormat } from "../canvaskit.model";

export class Context2dRenderer implements CanvasKit {

    drawRect(x: number, y: number, width: number, height: number): void {
        // Create a canvas context (replace 'canvas' with your actual canvas element)
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        if (ctx) {
            // Set the fill color (e.g., red)
            ctx.fillStyle = 'red';

            // Draw the rectangle
            ctx.fillRect(x, y, width, height);
        } else {
            throw new Error('Canvas context is not supported.');
        }
    }
  
   drawCircle(x: number, y: number, radius: number): void {
        // Create a canvas context (replace 'canvas' with your actual canvas element)
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        if (ctx) {
            // Set the fill color (e.g., blue)
            ctx.fillStyle = 'blue';

            // Draw the circle
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2 * Math.PI);
            ctx.fill();
        } else {
            throw new Error('Canvas context is not supported.');
        }
    }

  
    drawLine(x1: number, y1: number, x2: number, y2: number): void {
      throw new Error('Not implemented');
    }
  
    drawText(text: string, x: number, y: number): void {
      throw new Error('Not implemented');
    }
  
    drawImage(image: HTMLImageElement, x: number, y: number): void {
      throw new Error('Not implemented');
    }
  
    applyFilter(filter: string, element: HTMLCanvasElement): void {
      throw new Error('Not implemented');
    }
  
    applyEffect(effect: string, element: HTMLCanvasElement): void {
      throw new Error('Not implemented');
    }
  
    saveAsFile(filename: string, format: ImageFormat): void {
      throw new Error('Not implemented');
    }
  
    getImageData(format: ImageFormat): Promise<Uint8Array> {
      throw new Error('Not implemented');
    }
  }
