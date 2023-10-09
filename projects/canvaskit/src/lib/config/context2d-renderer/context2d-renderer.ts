import { CanvasKit } from "../canvaskit.model";

export class Context2dRenderer implements CanvasKit {

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
      throw new Error('Not implemented');
    }
  
    applyEffect(effect: string, element: HTMLCanvasElement): void {
      throw new Error('Not implemented');
    }


    async saveAsFile(filename: string, format: 'png' | 'jpeg' | 'webp'): Promise<void> {
        // Create a canvas element (replace 'canvas' with your actual canvas element)
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        if (ctx) {
            // ... Perform drawing operations on the canvas ...

            // Convert the canvas content to a Blob
            canvas.toBlob((blob) => {
                if (blob) {
                    // Create a download link for the Blob
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.download = `${filename}.${format}`;
                    
                    // Trigger a click event to download the file
                    link.click();
                }
            }, `image/${format}`);
        } else {
            throw new Error('Canvas context is not supported.');
        }
    }

    async getImageData(format: 'png' | 'jpeg' | 'webp'): Promise<Uint8Array> {
        // Create a canvas element (replace 'canvas' with your actual canvas element)
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        if (ctx) {
            // ... Perform drawing operations on the canvas ...

            // Convert the canvas content to a data URL
            const dataURL = canvas.toDataURL(`image/${format}`);

            // Convert the data URL to a Uint8Array
            const response = await fetch(dataURL);
            const blob = await response.blob();
            const arrayBuffer = await blob.arrayBuffer();
            return new Uint8Array(arrayBuffer);
        } else {
            throw new Error('Canvas context is not supported.');
        }
    }

    // ... Implementations for other methods
}

  }
