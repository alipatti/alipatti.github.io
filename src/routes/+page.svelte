<script lang="ts">
  import { isMandelbrot } from "$lib/mandelbrot";
  import { innerWidth } from "svelte/reactivity/window";

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

<canvas
  class="absolute blur-[2px] dark:invert w-full h-full pointer-events-none animate-fadein delay-300"
  bind:this={canvas}
></canvas>

<main>
  <section id="bio">
    <div
      class="mx-auto flex flex-col items-center justify-start gap-10 text-center xl:min-w-[40rem] xl:max-w-6xl xl:gap-5 2xl:pt-40 xl:pt-20 p-10"
    >
      <h1 class="text-6xl">Alistair Pattison</h1>

      <hr
        class="mx-auto block h-px w-60 border-0 bg-neutral-700 opacity-50 dark:bg-neutral-500"
      />

      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center gap-20 2xl:flex-row">
          <img
            class="aspect-square rounded-full object-cover object-left-top shadow-md"
            src="headshot.jpeg"
            alt="headshot"
            height={280}
            width={280}
          />

          <div class="max-w-md space-y-5 text-center">
            <p>
              I'm a predoctoral fellow at <a
                href="https://opportunityinsights.org">Opportunity Insights</a
              >, a group at Harvard using big data to uncover barriers to class mobility in the U.S. with the goal of reviving the American Dream.
              Previously, I studied math and statistics at
              <a
                target="_blank"
                href="https://www.startribune.com/minnesota-winter-weather-temperature-cold-north-pole/600114153/"
              >
                Carleton College
              </a>
              where I also spent a lot of time
              <a
                target="_blank"
                href="https://athletics.carleton.edu/news/2024/5/10/mens-track-and-field-2024-miac-outdoor-championships-day-1.aspx"
              >
                running in circles
              </a>.
            </p>
            <p>
              If for some reason you'd like to learn more about me, you can find
              more at the links below.
            </p>
          </div>
        </div>

        <div
          id="links"
          class="px-auto mt-10 flex flex-wrap items-center justify-center gap-5 sm:gap-10"
        >
          <a class="button hover:shadow" href="https://github.com/alipatti">
            <span class="fa--github"></span>
            <span class="pl-2">github</span>
          </a>
          <a
            class="button hover:shadow"
            href="https://linkedin.com/in/alipatti"
          >
            <span class="fa--linkedin-square"></span>
            <span class="pl-2">linkedin</span>
          </a>
          <a
            class="button hover:shadow"
            href="https://github.com/alipatti/cv/releases/latest/download/pattison-cv-full.pdf"
          >
            <span class="fa-solid--file-pdf"></span>
            <span class="pl-2">cv</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</main>
