<template>
  <div class="max-w-2xl min-h-screen mx-auto staticshield-div">
    <img src="/banner.png" alt="" class="max-w-md mx-auto mt-32 mb-16" />
    <h1 class="text-3xl font-bold text-center">
      You just visited a secret place in internet which is password protected 🤯
    </h1>

    <div class="mt-10 text-center links">
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
    <nuxt-link
      to="/"
      class="
        block
        my-10
        text-2xl text-blue-500
        hover:text-blue-700 hover:underline
      "
    >
      &larr; Go Back
    </nuxt-link>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'StaticShield + Nuxtjs',
      script: [
        {
          hid: 'staticshield',
          src: 'https://staticshield.vercel.app/script.js',
          'data-site-id': 'fbe1e7da-d79b-4265-8209-a14f099d838e',
          'data-cap': 'The password is 123test123',
        },
      ],
    }
  },
}
</script>

<style>
.staticshield-div {
  display: none;
}
</style>
