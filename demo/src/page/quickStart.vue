<template>
    <div class="fixed_frame">
        <div style="height:60px; background:#000"></div>
        <div class="new_wapper">
            <div class="api_bread">
                <p>新手指南</p>
            </div>
        </div>
        <vue-markdown class="md_content" :content="mdContent">
        </vue-markdown>
    </div>
</template>
<script>
import vueMarkdown from "../components/vueMarkdown.vue";

export default {
  name: "quickStart",
  data() {
    return {
      mdContent: "正在打开..."
      //        "### Markdown support\n- build on top of marked\n- server side rendering!!!\n- `github style` markdown"
    };
  },
  components: {
    vueMarkdown
  },
  created() {
     
  },
  mounted() {
    fetch("/static/LeapAI User Guide.md")
      .then(response => response.text())
      .then(data => {
        this.mdContent = data;
      });
  },
  methods: {
  }
};
</script>
<style>
.fixed_frame {
  width: 100%;
  margin: 0 auto;
}
.api_bread {
  width: 1200px;
  margin: 0 auto;
}

.api_bread p {
  margin-left: 10px;
}

.md_content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 4rem;
  color: black;
}

.md_content h1 {
}

.md_content ol {
  list-style-type: decimal;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  -webkit-padding-start: 40px;
}

.md_content ul {
  list-style-type: circle;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  -webkit-padding-start: 40px;
}

.md_content code {
  color: dodgerblue;
  background-color: blanchedalmond;
}
</style>


