# SVG Renderer Class Documentation

The `Svg` class is designed to facilitate SVG graphics operations. It implements the `CanvasKit` interface, providing methods for a range of SVG drawing and manipulation tasks. This README offers comprehensive details about each method and its associated parameters.

## Methods

| Method                                              | Description                                      | Parameters                                          |
| --------------------------------------------------- | ------------------------------------------------ | --------------------------------------------------- |
| `drawRect(x, y, width, height)`                    | Draw a rectangle on the SVG canvas.              | `x` - x-coordinate of top-left corner<br> `y` - y-coordinate of top-left corner<br> `width` - width of the rectangle<br> `height` - height of the rectangle |
| `drawCircle(x, y, radius)`                         | Draw a circle on the SVG canvas.                 | `x` - x-coordinate of the center<br> `y` - y-coordinate of the center<br> `radius` - radius of the circle |
| `drawLine(x1, y1, x2, y2)`                        | Draw a line on the SVG canvas.                   | `x1` - x-coordinate of the start point<br> `y1` - y-coordinate of the start point<br> `x2` - x-coordinate of the end point<br> `y2` - y-coordinate of the end point |
| `drawText(text, x, y)`                            | Draw text on the SVG canvas.                    | `text` - the text to be drawn<br> `x` - x-coordinate of the starting point<br> `y` - y-coordinate of the baseline |
| `drawImage(image, x, y)`                          | Draw an image on the SVG canvas.                | `image` - HTMLImageElement to be drawn<br> `x` - x-coordinate of the top-left corner<br> `y` - y-coordinate of the top-left corner |
| `applyFilter(filter, element)`                    | Apply a filter to an HTMLCanvasElement.         | `filter` - name of the filter to apply<br> `element` - HTMLCanvasElement to apply the filter to |
| `applyEffect(effect, element)`                    | Apply an effect to an HTMLCanvasElement.        | `effect` - name of the effect to apply<br> `element` - HTMLCanvasElement to apply the effect to |
| `saveAsFile(filename, format)`                    | Save the SVG content as a file.                 | `filename` - name of the file to save<br> `format` - format to save as ('png', 'jpeg', or 'webp') |
| `getImageData(format)`                            | Retrieve the SVG content as image data.         | `format` - format to retrieve data in ('png', 'jpeg', or 'webp') |

## Usage

You can employ the `Svg` class to perform various SVG drawing and manipulation tasks by utilizing its methods with the appropriate parameters.

Example:

```typescript
const svgRenderer = new Svg();
svgRenderer.drawRect(10, 10, 50, 50);
svgRenderer.drawText("Hello, SVG!", 20, 20);
// ...other SVG operations
```

```typescript
// Drawing a Circle
const svgRenderer = new Svg();
svgRenderer.drawCircle(100, 100, 30);

// Drawing a line
const svgRenderer = new Svg();
svgRenderer.drawLine(20, 30, 60, 90);

// Drawing a text
const svgRenderer = new Svg();
svgRenderer.drawText("Hello, SVG!", 20, 20);

// Drawing an Image
const svgRenderer = new Svg();
const image = new Image();
image.src = "image.png";
svgRenderer.drawImage(image, 50, 50);

// Applying a Filter
const svgRenderer = new Svg();
const canvasElement = document.createElement("canvas");
svgRenderer.applyFilter("blur(5px)", canvasElement);

// Applying an Effect
const svgRenderer = new Svg();
const canvasElement = document.createElement("canvas");
svgRenderer.applyEffect("grayscale(100%)", canvasElement);

// Saving as File
const svgRenderer = new Svg();
svgRenderer.saveAsFile("mySVG", "png");

//Retrieving Image Data
const svgRenderer = new Svg();
const imageData = svgRenderer.getImageData("jpeg");
```


