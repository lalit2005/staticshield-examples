<template>
  <div class="container min-h-screen max-w-2xl mx-auto text-center">
    <div class="max-w-2xl mx-auto">
      <img src="/banner.png" alt="" class="max-w-md mx-auto mt-32 mb-16" />
      <h1 class="title font-extrabold text-5xl my-10">
        StaticShield + Nuxtjs = 💚
      </h1>
      <p class="text-xl">
        Click the link below to visit a page that has been password protected by
        StaticShield
      </p>
      <nuxt-link
        to="/protected"
        class="
          text-blue-500 text-2xl
          hover:text-blue-700 hover:underline
          my-10
          block
        "
        >Visit password protected page &rarr;</nuxt-link
      >
      <div class="links">
        <a
          href="https://staticshield.vercel.app/docs/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          StaticShield Documentation
        </a>
        <a
          href="https://github.com/lalit2005/staticshield-examples"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          Github
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'StaticShield + Nuxtjs',
    }
  },
}
</script>
