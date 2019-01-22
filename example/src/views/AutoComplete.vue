<template>
  <div class="auto-complete">
    <vue-ace-editor
      :fontSize="14"
      height="300px"
      lang="python"
      theme="eclipse"
      :options="{
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
        tabSize: 2
       }"
    >
    </vue-ace-editor>
  </div>
</template>

<script>
export default {
  name: "auto-complete",
  data() {
    return {};
  }
};
</script>