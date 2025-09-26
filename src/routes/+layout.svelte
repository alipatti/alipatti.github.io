<script lang="ts">
  import "../app.css";
  import { isMandelbrot } from "$lib/mandelbrot";
  import { innerWidth } from "svelte/reactivity/window";

  let { children } = $props();

  const maxIters = 100;

  let canvas: HTMLCanvasElement;

  const center = [0.2, -1]; // real, im
  const zoom = 2000;

  $effect(() => {
    innerWidth.current; // reference so effect re-runs when window resizes

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const w = canvas.width;
    const h = canvas.height;

    const context = canvas.getContext("2d")!;
    const imageData = context.createImageData(w, h);

    for (let x = 0; x < w; x += 1) {
      for (let y = 0; y < h; y += 1) {
        let iters = isMandelbrot(
          center[0] + (x - w / 2) / zoom,
          -center[1] + (y - h / 2) / zoom,
          maxIters,
        );

        const i = (x + y * w) * 4;
        imageData.data[i + 3] = iters == maxIters ? 20 : iters * 4; // alpha
      }
    }

    context.putImageData(imageData, 0, 0);
  });
</script>

<div
  class="relative min-h-screen flex flex-col grow text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100"
>
  <nav class="bg-white/50 px-6 py-3 text-lg w-full">
    <ul class="flex items-baseline gap-10 justify-between">
      <div>
        <a href="/" class="text-red-500">
          <li class="font-mono">alipatti.com</li>
        </a>
      </div>
      <div class="space-x-4 text-xl">
        <a href="https://linkedin.com/in/alipatti">
          <span class="fa--linkedin-square text-neutral-300 hover:text-blue"
          ></span>
        </a>
        <a href="https://github.com/alipatti">
          <span class="fa--github text-neutral-300 hover:text-blue"></span>
        </a>
      </div>
    </ul>
  </nav>

  <canvas
    id="background"
    class="absolute blur-[2px] dark:invert w-full h-full pointer-events-none"
    bind:this={canvas}
  ></canvas>

  {@render children()}
</div>

<footer
  class="bg-darkgreen/70 dark:text-lightblue/50 z-50 p-5 text-center text-sm font-light text-white/60"
>
  <div
    class="descendant-span:ml-2 mx-auto descendant-a:hover:underline mb-3 flex w-1/2 flex-wrap justify-center gap-x-3 gap-y-1"
  >
    <a href="https://linkedin.com/in/alipatti">
      <span class="fa--linkedin-square"></span>
      <span>linkedin.com/in/alipatti</span>
    </a>

    <a href="https://github.com/alipatti">
      <span class="fa--github"></span>
      <span>github.com/alipatti</span>
    </a>
  </div>
</footer>
