<script>
  console.log("StaticShield + Svelte = ❤️");
</script>

<svelte:head>
  <script
    data-site-id="446659db-e59b-4715-ae6e-668cdd7b143d"
    data-cap="The password is 123test123"
    src="https://staticshield.vercel.app/script.js"></script>
  <style>
    .staticshield {
      display: none;
    }
  </style>
  <noscript>
    <meta
      http-equiv="refresh"
      content="0; url=https://staticshield.vercel.app/errors/noscript"
    /></noscript
  >
</svelte:head>

<main class="staticshield-div">
  <img src="assets/banner.png" alt="" />
  <h1>StaticShield + Svelte = ❤️</h1>
  <p class="blue">You are in a secret zone which is password protected 🤯</p>
  <p>
    Visit the <a href="https://staticshield.vercel.app/docs/svelte"
      >StaticShield docs</a
    > to learn how to password protect Svelte apps.
  </p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  p {
    font-size: 30px;
  }

  img {
    max-width: 400px;
    margin: 20px auto;
    margin-top: 50px;
  }

  p.blue {
    font-size: 18px;
    color: blue;
  }

  h1 {
    color: #ff3e00;
    font-size: 4em;
    font-weight: 800;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
