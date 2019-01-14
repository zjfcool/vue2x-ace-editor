<template>
  <div>
    <vue-ace-editor
      :fontSize="14"
      height="300px"
      lang="python"
      theme="eclipse"
      @init="editorInit"
      @onChange="editorChange"
      @onInput="editorInput"
      @onFocus="editorFocus"
      @onBlur="editorBlur"
      @onPaste="editorPaste"
    ></vue-ace-editor>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  methods: {
    editorInit() {
      require("brace/ext/language_tools");
      const languages = ["python"];
      const themes = ["eclipse"];
      languages.forEach(lang => {
        require(`brace/mode/${lang}`);
        require(`brace/snippets/${lang}`);
      });

      themes.forEach(theme => {
        require(`brace/theme/${theme}`);
      });
    },
    editorChange(editor) {
      console.log("changed", editor.getValue());
    },
    editorInput(editor) {
      console.log("input", editor.getValue());
    },
    editorFocus(editor) {
      console.log("focus", editor);
    },
    editorBlur(editor) {
      console.log("blur", editor);
    },
    editorPaste(editor) {
      console.log("pase", editor);
    }
  }
};
</script>
