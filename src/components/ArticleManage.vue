<template>
  <div>
    <el-table
      :data="articles"
      border>
      <el-table-column
        prop="title"
        label="标题">
      </el-table-column>
      <el-table-column
        prop="author"
        label="作者"
        width="180">
      </el-table-column>
      <el-table-column
        prop="commentCount"
        label="评论"
        width="180">
      </el-table-column>
      <el-table-column
        prop="viewCount"
        label="浏览"
        width="180">
      </el-table-column>
      <el-table-column
        prop="publishDate"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="todolist"
        label="操作"
        width="180">
        <template slot-scope="scope">
          <i class="el-icon-edit" @click="editArticle(scope.row)"></i>
          <i class="el-icon-delete"></i>
          <i class="el-icon-star-on"></i>
          <i class="el-icon-more-outline"></i>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        layout="prev, pager, next"
        :page-size="15"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    name: 'ArticleManage',
    data() {
      const article = {
        articleId: 10086,
        title: '这是一个文章标题',
        author: '洗澡狂魔',
        commentCount: 10,
        viewCount: 188,
        publishDate: '2017-11-12'
      }
      return {
        articles: Array(25).fill(article)
      }
    },
    methods: {
      editArticle(row) {
        alert('准备修改' + row.articleId + '的内容')
        console.info(row);
      }
    }
  }
</script>
<style scoped>
  .el-table {
    text-align: center;
  }

  .el-pagination {
    text-align: center;
    margin-top: 20px;
  }
</style>
