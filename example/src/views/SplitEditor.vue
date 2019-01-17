<template>
  <div class="split">
    <vue-split-editor
      ref="editor"
      @init="editorInit"
      @onChange="editorChange"
      lang="python"
      theme="eclipse"
      height="330px"
      :splits="2"
      orientation="below"
      :options="{
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
        tabSize: 2
       }"
      :content="content"
    ></vue-split-editor>
  </div>
</template>

<script>
export default {
  name: "split-editor",
  data() {
    return {
      content: ["hello", "world"],
      retContent: []
    };
  },
  methods: {
    editorInit() {
       
    },
    editorChange(obj) {
      this.$refs.editor.setCompleteData([
        {
          name: "test",//名称
          value: "test",//值
          caption: "test",//字幕，展示在列表的内容
          meta: "test",//展示类型
          type: "local",//类型
          score: 1000 // 分数越大排在越上面
        }
      ])
      console.log(obj)
      this.retContent = obj.value;
    }
  },
  watch: {
    retContent(newArr, oldArr) {
      newArr.forEach((item, index) => {
        if (item !== oldArr[index]) {
          console.log(this.$refs.editor.split.getEditor(index))
        }
      });
    }
  }
};
</script>

<style lang="css" scoped>
.split {
}
</style>