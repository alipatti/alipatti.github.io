<script lang="ts">
  import Repo from "$lib/github/Repo.svelte";
  import type { ComponentProps } from "svelte";

  const username = "alipatti";
  const categories = {
    Statistics: ["gam-rs", "polars_rng"],
    "Data Science": ["quicklook", "polars_io", "polars_cache", "tidycensus"],
    "Command-line Tools": ["cite", "oeis.rs", "todo.swift"],
    Miscellaneous: ["dotfiles", "cv"],
  };

  type RepoProps = ComponentProps<typeof Repo>[];

  const get_data = async () => {
    const url = `https://api.github.com/users/${username}/repos?per_page=100`;
    const response = await fetch(url);
    const json: RepoProps = await response.json();

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

<main class="p-5 sm:p-20 max-w-5xl mx-auto lg:w-4xl">
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
</main>
