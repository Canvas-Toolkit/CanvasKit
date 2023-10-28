import { CanvasKit } from "../canvaskit.model";

export class Svg implements CanvasKit {

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
        // Ensure the image element is not null
        if (!image) {
            throw new Error('Image element is required.');
        }

        // Create a canvas element (replace 'canvas' with your actual canvas element)
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        if (ctx) {
            // Set the canvas dimensions to match the image
            canvas.width = image.width;
            canvas.height = image.height;

            // Draw the image onto the canvas at the specified position
            ctx.drawImage(image, x, y);

            // Append the canvas to the DOM or perform any other desired action
            // For example:
            // document.body.appendChild(canvas);
        } else {
            throw new Error('Canvas context is not supported.');
        }
    }
  
    applyFilter(filter: string, element?: HTMLCanvasElement): void {
      throw new Error('Not implemented');
    }
  
    applyEffect(effect: string, element?: HTMLCanvasElement): void {
      throw new Error('Not implemented');
    }
  
    saveAsFile(filename: string, format: 'png' | 'jpeg' | 'webp'): void {
      throw new Error('Not implemented');
    }
  
    getImageData(format: 'png' | 'jpeg' | 'webp'): Promise<Uint8Array> {
      throw new Error('Not implemented');
    }
  }
