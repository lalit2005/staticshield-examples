/** @type {import('@sveltejs/kit').Config} */

// const netlify = require("@sveltejs/adapter-netlify");
import netlify from "@sveltejs/adapter-netlify";

const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    adapter: netlify(),
  },
};

export default config;
