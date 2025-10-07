<script lang="ts">
  import "../app.css";
  import { page } from "$app/state";
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

  const blur_radius = $derived(page.url.pathname == "/" ? "blur-[5px]" : "blur-xl");
</script>

<div
  class="relative min-h-screen flex flex-col grow text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100"
>
  <nav class="bg-white/60 dark:bg-neutral-600/60 px-6 py-3 text-xl w-full z-20">
    <ul class="flex items-baseline gap-5 justify-between">
      <li class="font-mono text-blue dark:text-lightblue">
        <a href="/">Alistair Pattison</a>
      </li>
      <span class="opacity-20 italic font-light">|</span>

      <li>
        <a href="/">home</a>
      </li>
      <li>
        <a href="/code">code</a>
      </li>

      <!--social links on the right-hand side of the nav bar-->
      <li class="ml-auto fa--linkedin-square text-neutral-300 hover:text-blue">
        <a href="https://linkedin.com/in/alipatti"></a>
      </li>
      <li class="fa--github text-neutral-300 hover:text-blue">
        <a href="https://github.com/alipatti"> </a>
      </li>
    </ul>
  </nav>

  <canvas
    id="background"
    class="absolute dark:invert w-full h-full pointer-events-none animate-fadein {blur_radius}"
    bind:this={canvas}
    style:transition="filter .2s"
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
