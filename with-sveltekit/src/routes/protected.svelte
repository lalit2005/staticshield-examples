<script>
  console.log("Hello world");
</script>

<svelte:head>
  <script
    data-site-id="a0c90a65-70dd-4414-acde-f1994ec51cfc"
    data-cap="The password is 123test123"
    src="https://staticshield.vercel.app/script.js"></script>
  <noscript>
    <meta
      http-equiv="refresh"
      content="0; url=https://staticshield.vercel.app/errors/noscript"
    /></noscript
  >
</svelte:head>

<main class="staticshield-div">
  <div class="min-h-screen max-w-2xl mx-auto text-center">
    <img
      src="/banner.png"
      alt="StaticShield + SvelteKit"
      class="max-w-xl mx-auto my-20"
    />
    <h1 class="text-5xl font-extrabold text-red-600 mt-20 mb-10">
      StaticShield + SvelteKit = ❤️
    </h1>
    <h2 class="text-3xl font-bold my-10">
      You just visited a secret place on internet which is password protected
    </h2>
    <a class="mb-14 block underline" href="/">&larr; Go back</a>
    <p>
      Visit <a
        class="text-blue-500 hover:text-blue-700 hover:underline"
        href="https://staticshield.vercel.app/docs/sveltekit">StaticShield</a
      > to read the documentation
    </p>
  </div>
</main>

<style>
  .staticshield-div {
    display: none;
  }
</style>
