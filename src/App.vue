<template>
  <transition>
    <router-view></router-view>
  </transition>
</template>
<script>
  export default {
    name: 'app',
    components: {}
  }

</script>
<style>
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  form,
  img,
  dl,
  dt,
  dd,
  table,
  th,
  td,
  blockquote,
  fieldset,
  div,
  strong,
  label,
  em,
  a,
  span,
  input,
  textarea,
  button {
    margin: 0;
    padding: 0;
  }
  
  html,
  body {
    min-height: 100%;
    background: #d2d6de;
    font-size: 14px;
    font-weight: 400;
    color: #333;
  }
  
  html {
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
  
  ul li {
    list-style: none;
  }
  
  a {
    color: #3c8dbc;
  }
  
  a:hover,
  a:active,
  a:focus {
    outline: none;
    text-decoration: none;
    color: #72afd2;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 16px;
    font-weight: 400;
  }
  
  em,
  i {
    font-style: normal;
  }
  
  .toolbar {
    background: #fff;
    padding: 10px 10px 0px 10px;
  }
  
  .toolbar .el-form-item {
    margin-bottom: 10px;
  }
  
  .form {
    background: #fff;
    padding: 10px 10px 0px 10px;
  }
  
  .grid {
    width: 100%;
  }
  
  .pager {
    margin: 10px;
    float: right;
  }
  
  .grid_image {
    width: 200px;
    height: auto;
  }
  
  .grid_expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
  }
  
  .grid_expand label {
    width: 90px;
    color: #99a9bf;
  }
  
  .form_upload .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  
  .form_upload .el-upload:hover {
    border-color: #20a0ff;
  }
  
  .form_upload i {
    font-size: 28px;
    color: #8c939d;
    width: 320px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  
  .form_upload img {
    width: 320px;
    height: 100px;
    display: block;
  }

</style>
