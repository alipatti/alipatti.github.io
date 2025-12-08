<script lang="ts">
  let repo: {
    name: string;
    full_name: string;
    languages_url: string;
    html_url: string;
    description: string;
    language: string;
  } = $props();

  const get_languages = async () => {
    const res = await fetch(repo.languages_url);

    if (!res.ok) {
      throw res;
    }

    return Object.keys(await res.json()).join(", ");
  };
</script>

<div class="mb-4 w-full group">
  <div class="flex flex-col sm:flex-row justify-between -mb-2">
    <h3 class="group-hover:text-blue opacity-90">
      <span class="fa--github mr-2"></span>
      <a class="font-mono blue" href={repo.html_url}>{repo.full_name}</a>
    </h3>

    <p class="text-light italic opacity-75">
      {#await get_languages()}
        {repo.language}
      {:then languages}
        {languages}
      {:catch}
        {repo.language}
      {/await}
    </p>
  </div>

  {#if repo.description}
    <div class="flex">
      <span class="ml-[5pt] mr-3 opacity-25">↳</span>
      <p class="text-light slant opacity-90">{repo.description}</p>
    </div>
  {/if}
</div>
