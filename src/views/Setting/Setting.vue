<!--
 * @Author: Harry
 * @Date: 2022-07-01 12:38:31
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-07-26 21:16:22
 * @FilePath: \dev\src\views\Setting\Setting.vue
-->
<template>
  <div class="common-container">
    <h1 class="set-tit">⌜全局配置⌟</h1>
    <el-collapse class="img-manage" v-model="activeName" accordion>
      <el-collapse-item title="🗝️ 密钥配置管理" name="1">
        <form-view />
      </el-collapse-item>
      <el-collapse-item title="📷 上传图片设置" name="2">
        <h2>是否开启默认上传Markdown模式</h2>
        <set-default-copy />
        <h2>B2桶图片上传路径（文件夹路径/名称） <span class="red-c">必填</span>（默认根目录下）</h2>
        <set-upload />
        <h2>是否开启压缩</h2>
        <set-compress />
      </el-collapse-item>
      <el-collapse-item title="🎃 页面图片管理" name="3">
        <h2>图片前缀(默认选择 host_url 在密钥配置中可修改)</h2>
        <set-prefix />
        <h2>图片批量复制外链格式 <span class="red-c">%s</span>为外链地址</h2>
        <set-copy />
        <h2>默认检索的图片文件夹</h2>
        <set-default />
      </el-collapse-item>
      <el-collapse-item title="🍥 主题设置" name="4">
        <h2>主题选择</h2>
        <theme-change />
      </el-collapse-item>
    </el-collapse>

  </div>
</template>

<script>
import FormView from '@/views/formview/FormView.vue'
import SetPrefix from './setprefix/SetPrefix.vue'
import ThemeChange from './themeChange/ThemeChange.vue'
import SetDefault from './setDefault/SetDefault.vue'
import SetCompress from './setMain/SetCompress.vue'
import SetUpload from './setUploadFile/SetUpload.vue'
import SetCopy from './setcopy/SetCopy.vue'
import SetDefaultCopy from './setdefaultCopy/SetDefaultCopy.vue'
// import SetWatermark from './setwatermark/SetWatermark.vue'
export default {
  components: {
    FormView,
    SetPrefix,
    ThemeChange,
    SetDefault,
    SetCompress,
    SetUpload,
    SetCopy, // SetWatermark

    SetDefaultCopy
  },
  data() {
    return {
      activeName: ''
    }
  },
  mounted() {
    const { id } = this.$route.query
    if (id) {
      this.activeName = id + ''
    }
  }
}
</script>

<style lang="less" scoped>
@import './setting.module.less';
</style>
