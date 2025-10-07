<script lang="ts">
  import Repo from "$lib/github/Repo.svelte";
  import type { ComponentProps } from "svelte";

  const username = "alipatti";
  const categories = {
    "Data Science": ["polars_rng", "polars_io", "polars_utils"],
    "Command-line Tools": ["cite", "oeis.rs", "todo.swift"],
    Miscellaneous: ["dotfiles", "quicklook"],
  };

  type RepoProps = ComponentProps<typeof Repo>[];

  const get_data = async () => {
    const url = `https://api.github.com/users/${username}/repos`;
    const response = await fetch(url);
    const json: RepoProps = await response.json();

    console.log(json.map(({ name }) => name));

    if (response.status == 403) {
      throw response;
    }

    const x: [string, any[]][] = Object.entries(categories).map(
      ([category, repos]) => [
        category,
        repos.flatMap((name) => json.filter((obj) => obj.name == name)),
      ],
    );

    return x;
  };

  let repo_promise = get_data();
</script>

<div class="p-20 max-w-5xl mx-auto min-w-3xl">
  <h1>Code</h1>
  <!-- <p>Below is a collection of code I've written over the years.</p> -->
  <div>
    {#await repo_promise}
      <p>Loading GitHub repositories...</p>
    {:then categories}
      {#each categories as [title, repos]}
        <h2 class="pt-3">{title}</h2>
        <div class="pl-5">
          {#each repos as github_json}
            <Repo {...github_json} />
          {/each}
        </div>
      {/each}
    {:catch}
      <p>Failed to get GitHub repos.</p>
    {/await}
  </div>
</div>
