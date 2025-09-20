<script lang="ts">
  import "../app.css";
  let { children } = $props();
</script>

<div
  class="min-h-screen flex flex-col grow text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100 relative"
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
          <span class="fa--linkedin-square text-neutral-300 hover:text-blue"></span>
        </a>
        <a href="https://github.com/alipatti">
          <span class="fa--github text-neutral-300 hover:text-blue"></span>
        </a>
      </div>
    </ul>
  </nav>

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
