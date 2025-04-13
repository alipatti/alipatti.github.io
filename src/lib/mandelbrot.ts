// from https://github.com/ColinEberhardt/wasm-mandelbrot/blob/master/js/mandelbrot.js
export const isMandelbrot = (x0: number, y0: number, maxIters: number): number => {
  let a = 0,
    b = 0,
    rx = 0,
    ry = 0;

  let iterations = 0;

  while (iterations < maxIters && rx * rx + ry * ry <= 4) {
    rx = a * a - b * b + x0;
    ry = 2 * a * b + y0;

    a = rx;
    b = ry;

    iterations++;
  }

  return iterations;
};

// main cartioid is parameterized by e^{it} / 2 - e^{2it} / 4
// https://marksmath.org/classes/Spring2017ComplexDynamics/text/subsection-main_cardioid.html
export const randomLocation = (): [number, number] => {
  const t = Math.random() * Math.PI * 2; // [0, 1) -> [0, 2 \pi)

  const x = 0.5 * Math.cos(t) - 0.25 * Math.cos(2 * t);
  const y = 0.5 * Math.sin(t) - 0.25 * Math.sin(2 * t);

  return [x, y];
};
