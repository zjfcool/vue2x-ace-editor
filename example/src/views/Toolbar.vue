<template>
  <div class="toolbar">
    <vue-ace-editor :fontSize="14" height="300px" lang="python" theme="eclipse" @init="editorInit">
      <ul class="btn-groups">
        <li>btn1</li>
        <li>btn2</li>
      </ul>
    </vue-ace-editor>
  </div>
</template>

<script>
export default {
  name: "toolbar",
  data() {
    return {};
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
    }
  }
};
</script>

<style lang="css" scoped>
.toolbar {
}
.btn-groups {
  position: absolute;
  z-index: 999;
  top: 12px;
  right: 12px;
}
.btn-groups li {
  display: inline-block;
  padding: 8px;
  border: 1px solid #e6e6e6;
  color: #666;
  font-size: 12px;
  border-radius: 2px;
}
.btn-groups li:hover {
  cursor: pointer;
}
.btn-groups li + li {
  margin-left: 8px;
}
</style>