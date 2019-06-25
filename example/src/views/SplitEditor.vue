<template>
  <div class="split">
    <select v-model="orientation">
      <option v-for="item in orientationOptions" :key="item.id" :value="item.id">{{item.label}}</option>
    </select>
    <div class="split-num-controller">
      <input type="button" @click="decrement" value="-">
      {{splits}}
      <input type="button" @click="increment" value="+">
    </div>
    <vue-split-editor
      ref="editor"
      @init="editorInit"
      @onChange="editorChange"
      lang="python"
      theme="eclipse"
      height="330px"
      :splits="splits"
      :orientation="orientation"
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
      content: [],
      retContent: [],
      splits: 2,
      orientation: "beside",
      orientationOptions: [
        {
          id: "below",
          label: "below"
        },
        {
          id: "beside",
          label: "beside"
        }
      ]
    };
  },
  methods: {
    initContent() {
      this.content = new Array(this.splits);
    },
    editorInit() {},
    decrement() {
      if(this.splits===1) return; 
      this.splits--;
    },
    increment() {
      this.splits++;
    },
    editorChange(obj) {
      this.retContent = obj.value;
      console.log(this.retContent)
    }
  },
  watch: {
    retContent(newArr, oldArr) {
      newArr.forEach((item, index) => {
        if (item !== oldArr[index]) {
          // console.log(this.$refs.editor.split.getEditor(index))
        }
      });
    },
    splits: {
      handler: function(num) {
        this.initContent();
        this.retContent.forEach((item, index) => {
          this.content[index] = item;
        });
      },
      immediate: true
    }
  }
};
</script>

<style lang="css" scoped>
.split {
}
.split-num-controller {
  display: inline-block;
}
</style>