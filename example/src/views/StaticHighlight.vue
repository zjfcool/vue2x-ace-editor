<template>
  <div>
    <vue-static-highlight
      theme="chrome"
      content=".css{color:red;}"
      lang="css"
      width="50%"
      @init="init"
    ></vue-static-highlight>
  </div>
</template>

<script>
export default {
  name: "static-highligh",
  methods: {
    init() {
      require('brace/mode/css');
      require('brace/theme/chrome');
    }
  }
};
</script>

