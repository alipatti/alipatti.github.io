<script lang="ts">
  import { parse } from "yaml";
  import fileText from "$lib/research.yml?raw";

  const topics = parse(fileText);
</script>

<main class="p-5 sm:p-20 max-w-5xl mx-auto lg:w-4xl">
  <h1>Research</h1>
  <div>
    {#each topics as t}
      <h2 class="pt-3">{t.title}</h2>
      <div class="pl-3">
        <!-- <p class="">{t.summary}</p> -->
        {#each t.pubs as p}
          <div class="flex">
            <span class="ml-[5pt] mr-3 opacity-25">↳</span>
            <div>
              <p>
                <bold>{p.title}</bold>{#if p.with},
                  <em class="opacity-60">with {p.with}.</em>
                {:else}
                  .
                {/if}
                {#if p.notes}
                  <em class="opacity-60">{p.notes}.</em>
                {/if}
                {#if p.arxiv}
                  <a href="https://arxiv.org/pdf/{p.arxiv}" class="text-nowrap">
                    <img
                      class="inline h-4 pl-2 pr-0 invert-100 dark:invert-0"
                      src="https://arxiv.org/static/browse/0.3.4/images/arxiv-logo-one-color-white.svg"
                      alt="arXiv"
                    />
                    <span class="opacity-60">/ {p.arxiv}.</span>
                  </a>
                {/if}
              </p>
            </div>
          </div>
        {/each}
      </div>
    {/each}
  </div>
</main>
