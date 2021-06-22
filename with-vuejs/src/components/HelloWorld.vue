<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <p class="subtitle">
      You just visited a secret zone on internet which is password protected 🤯
    </p>

    <p>
      For a guide and recipes on how to password protect any Vue.Js app<br />
      check out the
      <a
        href="https://staticshield.vercel.app/docs/vuejs"
        target="_blank"
        rel="noopener"
        >StaticShield + Vuejs documentation</a
      >.
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 50px;
}
p {
  font-size: 22px;
}
p.subtitle {
  font-size: 18px;
  opacity: 0.8;
}
a {
  color: #42b983;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
