<script lang="ts">
  import "../app.css";

  let { children } = $props();
</script>

<div class="min-h-screen flex flex-col">
  <nav class="bg-white/50 px-6 py-3 text-lg absolute w-full">
    <ul class="flex items-baseline gap-10">
      <a href="/" class="text-red-500">
        <li class="font-mono">alipatti.com</li>
      </a>
    </ul>
  </nav>

  <div
    class="grow text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100"
  >
    {@render children()}
  </div>
</div>

<footer
  class="bg-darkgreen/70 dark:text-lightblue/50 z-50 p-5 text-center text-sm font-light text-white/60"
>
  <div
    class="descendant-span:ml-2 mx-auto descendant-a:hover:underline mb-3 flex w-1/2 flex-wrap justify-center gap-x-3 gap-y-1"
  >
    <a href="https://linkedin.com/in/alipatti">
      <span class="fa--linkedin"></span>
      <span>linkedin.com/in/alipatti</span>
    </a>

    <a href="https://github.com/alipatti">
      <span class="fa--github"></span>
      <span>github.com/alipatti</span>
    </a>

    <a href="https://instagram.com/a1ipatti">
      <span class="fa--instagram"></span>
      <span>instagram.com/a1ipatti</span>
    </a>
  </div>

  <hr class="mx-auto mb-3 w-10 opacity-10 dark:opacity-5" />

  <span class="mb-3 block">
    <a
      href="https://github.com/alipatti/alipatti.github.io"
      class="hover:underline"
    >
      website source
    </a>
  </span>
</footer>
