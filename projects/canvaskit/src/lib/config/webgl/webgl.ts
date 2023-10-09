import { CanvasKit } from "../canvaskit.model";

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
