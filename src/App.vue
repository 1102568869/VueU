<template>
  <div id="app">
    <el-container>
      <el-header>
        <div class="header-left">
          <img src="./assets/washmore.png">
        </div>
        <div class="header-right">
          <el-button type="primary" round icon="el-icon-message">
            洗澡狂魔
          </el-button>
          <el-button round>登出</el-button>
        </div>
      </el-header>

      <el-container>
        <el-aside width="200px">
          <el-menu :default-openeds="['1']">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>文章</template>
              <router-link to="/ArticlePublish">
                <el-menu-item index="1-1">发布文章</el-menu-item>
              </router-link>
              <router-link to="/ArticleManage">
                <el-menu-item index="1-2">管理文章</el-menu-item>
              </router-link>
              <el-menu-item index="1-3">草稿箱</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-message"></i>评论</template>
              <el-menu-item index="2-1">管理评论</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

</script>
<style>
  .el-header {
    top: 0px;
    left: 0px;
    z-index: 99;
    width: 100%;
    position: fixed;
  }

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    height: 60px;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    position: fixed;
    margin-top: 60px;
    z-index: 98;
    left: 0px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    display: block;
    margin-top: 60px;
    margin-left: 200px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .header-right {
    float: right;
  }

  .header-left {
    float: left;
    margin-top: 10px;
  }
</style>
