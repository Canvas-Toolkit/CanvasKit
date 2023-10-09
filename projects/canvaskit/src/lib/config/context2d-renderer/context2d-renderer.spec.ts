import { Context2dRenderer } from './context2d-renderer';

describe('Context2dRenderer', () => {
  let canvas: HTMLCanvasElement;
  let renderer: Context2dRenderer;

  let errorMessage = {
    contextNull: 'Context is null',
  };

  beforeEach(() => {
    canvas = document.createElement('canvas');
    renderer = new Context2dRenderer(canvas);
  });

  it('should be created', () => {
    expect(renderer).toBeTruthy();
  });

  it('should draw a rectangle called', () => {
    const rectSpy = spyOn(renderer.context, 'rect' as never);
    renderer.drawRect(0, 0, 100, 100);
    expect(rectSpy).toHaveBeenCalled();
  });

  it('Context is null', () => {
    renderer.context = null;
    // Testing drawRect for error message context null
    expect(() => renderer.drawRect(0, 0, 100, 100)).toThrowError(
      errorMessage.contextNull
    );

    // Testing drawCircle for error message context null
    expect(() => renderer.drawCircle(0, 0, 100)).toThrowError(
      errorMessage.contextNull
    );

    // Testing drawText for error message context null
    expect(() => renderer.drawText('Hello world', 0, 0)).toThrowError(
      errorMessage.contextNull
    );

    // Testing drawImage for error message context null
    expect(() => renderer.drawImage(new Image(), 0, 0)).toThrowError(
      errorMessage.contextNull
    );

    // Testing applyFilter for error message context null
    expect(() => renderer.applyFilter('blur')).toThrowError(
      errorMessage.contextNull
    );

    // Testing applyEffect for error message context null
    expect(() => renderer.applyEffect('blur')).toThrowError(
      errorMessage.contextNull
    );
  });

  it('should draw a rectangle with fill and stroke styles', () => {
    const rectSpy = spyOn(renderer.context!, 'rect');
    const fillStyleSpy = spyOnProperty(renderer.context!, 'fillStyle', 'set');
    const strokeStyleSpy = spyOnProperty(
      renderer.context!,
      'strokeStyle',
      'set'
    );
    const fillSpy = spyOn(renderer.context!, 'fill');
    const strokeSpy = spyOn(renderer.context!, 'stroke');
    renderer.drawRect(10, 10, 100, 100);
    expect(rectSpy).toHaveBeenCalledWith(10, 10, 100, 100);
    expect(fillStyleSpy).not.toHaveBeenCalled();
    expect(strokeStyleSpy).not.toHaveBeenCalled();
    expect(fillSpy).not.toHaveBeenCalled();
    expect(strokeSpy).not.toHaveBeenCalled();
  });

  it('should draw a circle called', () => {
    const beginPathSpy = spyOn(renderer.context!, 'beginPath');
    const arcSpy = spyOn(renderer.context!, 'arc');
    const fillSpy = spyOn(renderer.context!, 'fill');
    renderer.drawCircle(0, 0, 100);
    expect(beginPathSpy).toHaveBeenCalled();
    expect(arcSpy).toHaveBeenCalled();
    expect(fillSpy).toHaveBeenCalled();
  });

  it('should draw a line called', () => {
    const beginPathSpy = spyOn(renderer.context!, 'beginPath');
    const moveToSpy = spyOn(renderer.context!, 'moveTo');
    const lineToSpy = spyOn(renderer.context!, 'lineTo');
    const strokeSpy = spyOn(renderer.context!, 'stroke');
    renderer.drawLine(0, 0, 100, 100);
    expect(beginPathSpy).toHaveBeenCalled();
    expect(moveToSpy).toHaveBeenCalled();
    expect(lineToSpy).toHaveBeenCalled();
    expect(strokeSpy).toHaveBeenCalled();
  });

  it('should draw text called', () => {
    const fillTextSpy = spyOn(renderer.context!, 'fillText');
    renderer.drawText('Hello World', 0, 0);
    expect(fillTextSpy).toHaveBeenCalled();
  });

  it('should apply filter called', () => {
    const filterSpy = spyOnProperty(renderer.context!, 'filter', 'set');
    renderer.applyFilter('blur');
    expect(filterSpy).toHaveBeenCalledWith('blur');
  });

  it('should apply effect called', () => {
    const effectSpy = spyOnProperty(renderer.context!, 'filter', 'set');
    renderer.applyEffect('blur');
    expect(effectSpy).toHaveBeenCalledWith('url(#blur)');
  });

  it('should save as file called', () => {
    const toDataURLSpy = spyOn(renderer.canvas!, 'toDataURL');
    renderer.saveAsFile('test.png', 'png');
    expect(toDataURLSpy).toHaveBeenCalled();
  });
});
