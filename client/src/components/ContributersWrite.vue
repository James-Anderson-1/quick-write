<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
    <img src= "../assets/cat.png" >
    </div>
  </template>
<script>
export default {
  name: 'RegisterWrite',
  props: {
    msg: String,
    imgPath: String
  }
};
</script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  img {
    border-radius: 40px;
    max-width: 100%;
    height: auto;
  }
  </style>
