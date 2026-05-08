<svelte:head>
  <meta http-equiv="refresh" content="0; url=/cv/pattison-cv.pdf" />
</svelte:head>

<script>
  import { browser } from "$app/environment";
  if (browser) window.location.replace("/cv/pattison-cv.pdf");
</script>
