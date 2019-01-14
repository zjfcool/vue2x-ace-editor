<template>
  <div>
    <vue-ace-editor
      :content="content"
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
  data() {
    return {
      content: `
# importing Magics module
from Magics.macro import *


# Setting of the output file name
output = output(output_formats=['png'],
                output_name_first_page_number='off',
                output_name='odb_step2')
      `
    };
  },
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
