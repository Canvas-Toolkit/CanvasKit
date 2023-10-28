import { CanvasKit, ImageFormat } from '../canvaskit.model';

export class Context2dRenderer implements CanvasKit {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D | null;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
  }

  /**
   * Draws a rectangle at the specified coordinates and with the specified dimensions
   * @param x The x-coordinate of the top-left corner of the rectangle
   * @param y The y-coordinate of the top-left corner of the rectangle
   * @param width The width of the rectangle
   * @param height The height of the rectangle
   */
  drawRect(x: number, y: number, width: number, height: number): void {
    if (!this.context) {
      throw new Error('Context is null');
    }

    this.context.rect(x, y, width, height);
  }

  /**
   * Draws a circle at the specified coordinates and with the specified radius
   * @param x The x-coordinate of the center of the circle
   * @param y The y-coordinate of the center of the circle
   * @param radius The radius of the circle
   */
  drawCircle(x: number, y: number, radius: number): void {
    if (!this.context) {
      throw new Error('Context is null');
    }

    // Starts a new path by emptying the list of sub-paths
    this.context?.beginPath();
    // Adds a circular arc to the current sub-paths
    this.context?.arc(x, y, radius, 0, 2 * Math.PI);
    // Fills the current or given path with the current fill style.
    this.context?.fill();
  }

  /**
   * Draws a line between the specified coordinates
   * @param x1 The x-coordinate of the start of the line
   * @param y1 The y-coordinate of the start of the line
   * @param x2 The x-coordinate of the end of the line
   * @param y2 The y-coordinate of the end of the line
   */
  drawLine(x1: number, y1: number, x2: number, y2: number): void {
    if (!this.context) {
      throw new Error('Context is null');
    }

    // Starts a new path by emptying the list of sub-paths
    this.context?.beginPath();
    // Moves the starting point of a new sub-path to the (x,y) coordinates.
    this.context?.moveTo(x1, y1);
    /**
     * Adds a straight line to the current sub-paths by connecting the sub-path's
     * last point to the specified (x,y) coordinates.
     */
    this.context?.lineTo(x2, y2);
    // Stroke the current or given path with the current stroke style.
    this.context?.stroke();
  }

  /**
   * Draws a text at the specified coordinates
   * @param text Defines the text to be drawn
   * @param x The x-coordinate of the top-left corner.
   * @param y The y-coordinate of the top-left corner.
   */
  drawText(text: string, x: number, y: number): void {
    if (!this.context) {
      throw new Error('Context is null');
    }

    // Fills the urrent or given path with the text input
    this.context?.fillText(text, x, y);
  }

  /**
   * Draws an image at the specified coordinates
   * @param image Defines the image, canvas, or video element to use
   * @param x The x-coordinate of the top-left corner.
   * @param y The y-coordinate of the top-left corner.
   */
  drawImage(image: HTMLImageElement, x: number, y: number): void {
    if (!this.context) {
      throw new Error('Context is null');
    }

    // Draws the specified image
    this.context?.drawImage(image, x, y);
  }

  /**
   * Applies a filter to the specified element
   * @param filter Defines the filter to apply. i.e. blur(5px) or grayscal(100%)
   * @param element Defines an element to apply the filter to
   */
  applyFilter(filter: string, element?: HTMLCanvasElement): void {
    if (element) {
      this.context = element.getContext('2d');
    }

    if (!this.context) {
      throw new Error('Context is null');
    }

    // Set the current transformation matrix to the identity matrix
    this.context.filter = filter;
  }

  /**
   * Applies an effect to the speicified element. Effects are identified in the SVG
   * filter element. i.e. <filter id="grayScale"><feColorMatrix></feColorMatrix></filter>
   * @param effect Defines the effect to apply. i.e. grayscale
   * @param element Defines an element to apply the effect to
   */
  applyEffect(effect: string, element?: HTMLCanvasElement): void {
    if (element) {
      this.context = element.getContext('2d');
    }

    if (!this.context) {
      throw new Error('Context is null');
    }

    // Set the current transformation matrix to the identity matrix
    const filter = `url(#${effect})`;
    this.context.filter = filter;
  }

  /**
   * Save the canvas as file
   * @param filename The name of the file to save
   * @param format THe format of the file
   */
  saveAsFile(filename: string, format: ImageFormat): void {
    const link = document.createElement('a');
    link.download = filename;
    link.href = this.canvas.toDataURL(`image/${format}`);
    link.click();
  }

  /**
   * Method to get the image data in a specific format
   * @param format The format of the file to save.
   */
  getImageData(format: ImageFormat): Promise<Uint8Array> {
    return new Promise((resolve, reject) => {
      try {
        const data = this.canvas.toDataURL(`image/${format}`);
        const base64 = data.replace(/^data:image\/(png|jpg|webp);base64,/, '');
        const binary = atob(base64);
        const array = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) {
          array[i] = binary.charCodeAt(i);
        }
        resolve(array);
      } catch (error) {
        reject(error);
      }
    });
  }
}
