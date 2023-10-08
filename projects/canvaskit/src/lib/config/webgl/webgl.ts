import { CanvasKit } from "../canvaskit.model";

interface CanvasKit {
    applyFilter(filter: string, element: HTMLCanvasElement): void;
    applyEffect(effect: string, element: HTMLCanvasElement): void;
}
export class WebGL implements CanvasKit {

    drawRect(x: number, y: number, width: number, height: number): void {
      throw new Error('Not implemented');
    }
  
    drawCircle(x: number, y: number, radius: number): void {
      throw new Error('Not implemented');
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
        // Ensure the canvas element is not null
        if (!element) {
            throw new Error('Canvas element is required.');
        }

        // Get the 2D rendering context
        const ctx = element.getContext('2d');

        if (ctx) {
            // Apply the filter
            ctx.filter = filter;
            // Draw the canvas content to apply the filter
            ctx.drawImage(element, 0, 0);
            // Reset the filter to its default value
            ctx.filter = 'none';
        } else {
            throw new Error('Canvas context is not supported.');
        }
    }

    applyEffect(effect: string, element: HTMLCanvasElement): void {
        // Ensure the canvas element is not null
        if (!element) {
            throw new Error('Canvas element is required.');
        }

        // Get the 2D rendering context
        const ctx = element.getContext('2d');

        if (ctx) {
            // Apply the effect (e.g., grayscale)
            ctx.filter = effect;
            // Draw the canvas content to apply the effect
            ctx.drawImage(element, 0, 0);
            // Reset the effect to its default value
            ctx.filter = 'none';
        } else {
            throw new Error('Canvas context is not supported.');
        }
    }


  
    saveAsFile(filename: string, format: 'png' | 'jpeg' | 'webp'): void {
      throw new Error('Not implemented');
    }
  
    getImageData(format: 'png' | 'jpeg' | 'webp'): Promise<Uint8Array> {
      throw new Error('Not implemented');
    }
  }
