<template>
  <div>
    lalala<br/>
    my name is  {{userMap[userName].userName}},age is  {{userMap[userName].age}}
  </div>
</template>
<script>
  /* eslint-disable */

  export default {

    name: 'demo',
    data() {
      return {
        userMap: {
          'zhangsan': {
            'userName': 'zhangsan',
            'age': 18
          },
          'lisi': {
            'userName': 'lisi',
            'age': 24
          }
        },
        userName: 'zhangsan'
      }
    },
    beforeRouteUpdate(to, from, next) {
      // react to route changes...
      // don't forget to call next()
      this.userName = to.params.userName;
      next();
    },
    beforeRouteEnter(to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
      next((vm) => {
        console.info(vm.$route.params);
        if (vm.userMap[vm.$route.params.userName]) {
          vm.userName = vm.$route.params.userName;
        }
        console.info(vm.userName);
      });
    },
    methods: {}
  }
  /* eslint-disable */
</script>
<style scoped>

</style>
