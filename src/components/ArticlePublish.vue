<template>
  <div>
    <label>标题:</label>
    <el-input v-model="title" placeholder="请输入内容"></el-input>
    <label>正文:</label>
    <div id="editor">
      <textarea :value="content" @input="updateContent"></textarea>
      <div v-html="compiledContentMarkdown"></div>
    </div>
    <label>标签(使用英文输入状态下的逗号进行分隔):</label>
    <el-input v-model="tag" placeholder="请输入内容"></el-input>
    <label>摘要:</label>
    <div id="subEditor">
      <textarea :value="subTitle" @input="updateSubTitle"></textarea>
      <div v-html="compiledSubTitleMarkdown"></div>
    </div>
    <div class="publish_footer">
      <div class="sign">
        <span>签名档:</span>
        <el-radio-group v-model="radio3" @change="changeSign">
          <el-radio-button label="签名档1"></el-radio-button>
          <el-radio-button label="签名档2"></el-radio-button>
          <el-radio-button label="签名档3"></el-radio-button>
          <el-radio-button label="不使用签名档"></el-radio-button>
        </el-radio-group>
      </div>
      <div class="submit">
        <el-button type="info">保存草稿箱</el-button>
        <el-button type="success">发布</el-button>
      </div>
    </div>
  </div>

</template>

<script>
  /* eslint-disable */
  import marked from "marked"
  import lodash from "lodash"

  export default {
    name: 'ArticlePublish',
    data() {
      return {
        title: '',
        content: '# hello',
        tag: '',
        subTitle: '# 这里写副标题',
        radio3: '不使用签名档',
      }
    },
    computed: {
      compiledContentMarkdown: function () {
        return marked(this.content, {sanitize: true})
      },
      compiledSubTitleMarkdown: function () {
        return marked(this.subTitle, {sanitize: true})
      }
    },
    methods: {
      updateContent: _.debounce(function (e) {
        this.content = e.target.value
      }, 300),
      updateSubTitle: _.debounce(function (e) {
        this.subTitle = e.target.value
      }, 300),
      changeSign: (v) => {
        console.info(v);
      }
    }
  }
</script>
<style scoped>
  label {
    display: inline-block;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  #editor {
    margin: 0;
    height: 100%;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;
  }

  #editor textarea, #editor div {
    display: inline-block;
    width: 49%;
    height: 480px;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 20px;
  }

  #editor textarea {
    border: none;
    border-right: 1px solid #ccc;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;
    padding: 20px;
  }

  #subEditor {
    margin: 0;
    height: 100%;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;
  }

  #subEditor textarea, #subEditor div {
    display: inline-block;
    width: 49%;
    height: 80px;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 20px;
  }

  #subEditor textarea {
    border: none;
    border-right: 1px solid #ccc;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;
    padding: 20px;
  }

  code {
    color: #f66;
  }

  .publish_footer {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .publish_footer .sign {
    float: left;
  }

  .publish_footer .submit {
    float: right;
    margin-bottom: 10px;
    margin-top: 10px;
  }
</style>
