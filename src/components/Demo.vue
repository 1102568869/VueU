<template>
  <div>
    <div>
      <label>循环:</label>
      <ul>
        <li v-for="u in users">
          姓名:{{u.name}},年龄:{{u.age}}<br/>
        </li>
      </ul>
    </div>
    <div>
      <label>数据绑定:</label>
      <input v-model="i_val" :type="i_type"/>{{i_val}}
      <button @click="change_i_type()">点我改变前面输入框的类型</button>
    </div>
    <div>
      <label @click="getAritles()">获取远程数据:</label>{{articleAbstract}}
    </div>
    <div>
      <label>消息框+提示框:</label>
      <button @click.right="clickMe()">右键快点我!</button>
    </div>
    <div>
      <label>多行文本框:</label>
      <textarea v-model="message" placeholder="add multiple lines"></textarea><br/>
      {{message}}
    </div>
    <div>
      <label>多选下拉框:</label>
      <select v-model="selected" multiple style="width: 50px;">
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <br>
      <span>Selected: {{ selected }}</span>
    </div>
    <div>
      <br/>
      <span v-show="isInput" @click="changeIsInput">点我变输入框:</span>
      <input v-show="!isInput"/>
    </div>
  </div>
</template>
<script>
  /* eslint-disable */
  import axios from "axios";

  export default {
    name: 'demo',
    data() {
      const user = {
        name: '张三',
        age: 18
      }
      return {
        i_val: 'hello world',
        i_type: 'text',
        users: Array(4).fill(user),
        articleAbstract: '',
        message: '这是初始数据',
        selected: [],
        isInput: true
      }
    },
    methods: {
      changeIsInput() {
        this.isInput = !this.isInput;
      },
      change_i_type() {
        this.i_type = this.i_val;
        console.info(this.i_type);
        console.info(this.i_val);
      },
      getAritles() {
        var vm = this
        axios.get('https://blog.washmoretech.com/articles/2')
          .then(function (response) {
            vm.articleAbstract += response.data.rslts.articles[0].articleAbstract;
            console.info(vm.articleAbstract);
          })
          .catch(function (error) {
            console.error("请求API失败!");
          })
      },
      clickMe() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
  /* eslint-disable */
</script>
<style scoped>
  label {
    display: inline-block;
    margin-top: 10px;
  }
</style>
