<template>
  <div v-html="html" />
</template>

<script>
import marked from "marked";
import { VNode } from "vue";

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

export default {
  name: "VueMarkdown",
  props:['content'],
  data() {
    return {
    };
  },
  computed: {
    html() {
      let text = this.content.replace(/\n /g, "\n") + '\n';
      return marked(text);
    }
  },
  methods: {
  },
  created() {
  },
  beforeMount() {
  }
};
</script>

<style>
</style>
