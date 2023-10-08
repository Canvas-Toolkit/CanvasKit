# Context2dRenderer Class Documentation

The `Context2dRenderer` class implements the `CanvasKit` interface for rendering operations on a canvas. It provides methods to draw shapes, text, and apply filters/effects to an HTMLCanvasElement. This README provides detailed information about each method and its parameters.

## Methods

### `drawRect(x: number, y: number, width: number, height: number): void`

Draws a rectangle on the canvas.

- `x`: The x-coordinate of the top-left corner of the rectangle.
- `y`: The y-coordinate of the top-left corner of the rectangle.
- `width`: The width of the rectangle.
- `height`: The height of the rectangle.

### `drawCircle(x: number, y: number, radius: number): void`

Draws a circle on the canvas.

- `x`: The x-coordinate of the center of the circle.
- `y`: The y-coordinate of the center of the circle.
- `radius`: The radius of the circle.

### `drawLine(x1: number, y1: number, x2: number, y2: number): void`

Draws a line on the canvas.

- `x1`: The x-coordinate of the starting point of the line.
- `y1`: The y-coordinate of the starting point of the line.
- `x2`: The x-coordinate of the ending point of the line.
- `y2`: The y-coordinate of the ending point of the line.

### `drawText(text: string, x: number, y: number): void`

Draws text on the canvas.

- `text`: The text to be drawn.
- `x`: The x-coordinate of the starting point for the text.
- `y`: The y-coordinate of the baseline for the text.

### `drawImage(image: HTMLImageElement, x: number, y: number): void`

Draws an image on the canvas.

- `image`: The HTMLImageElement to be drawn.
- `x`: The x-coordinate of the top-left corner of the image.
- `y`: The y-coordinate of the top-left corner of the image.

### `applyFilter(filter: string, element: HTMLCanvasElement): void`

Applies a filter to an HTMLCanvasElement.

- `filter`: The name of the filter to apply.
- `element`: The HTMLCanvasElement to which the filter will be applied.

### `applyEffect(effect: string, element: HTMLCanvasElement): void`

Applies an effect to an HTMLCanvasElement.

- `effect`: The name of the effect to apply.
- `element`: The HTMLCanvasElement to which the effect will be applied.

### `saveAsFile(filename: string, format: 'png' | 'jpeg' | 'webp'): void`

Saves the canvas content as a file.

- `filename`: The name of the file to be saved.
- `format`: The format in which to save the file ('png', 'jpeg', or 'webp').

### `getImageData(format: 'png' | 'jpeg' | 'webp'): Promise<Uint8Array>`

Retrieves the canvas content as image data in the specified format.

- `format`: The format in which to retrieve the image data ('png', 'jpeg', or 'webp').

## Usage

You can use the `Context2dRenderer` class to perform various canvas rendering operations by calling its methods with the appropriate parameters.

Example:

```typescript
const renderer = new Context2dRenderer();
renderer.drawRect(10, 10, 50, 50);
renderer.drawText("Hello, World!", 20, 20);
// ...other rendering operations
