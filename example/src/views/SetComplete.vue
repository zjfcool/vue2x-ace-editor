<template>
  <div class="auto-complete">
    <vue-ace-editor
      ref="editor"
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
      @onChange="editorChange"
    ></vue-ace-editor>
  </div>
</template>

<script>
export default {
  name: "auto-complete",
  data() {
    return {};
  },
  methods: {
    editorChange() {
      this.$refs.editor.setCompleteData([
        {
          name: "test",//名称
          value: "test",//值
          caption: "test",//字幕，展示在列表的内容
          meta: "test",//展示类型
          type: "local",//类型
          score: 1000 // 分数越大排在越上面
        }
      ]);
    }
  }
};
</script>

<style lang="css" scoped>
.auto-complete {
}
</style>