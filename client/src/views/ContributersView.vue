<template>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <ContributersWrite msg="Best Boy in the World" imgPath="../assets/cat.png"/>
    </div>
  </template>

<script>
// @ is an alias to /src
import ContributersWrite from '../components/ContributersWrite.vue';

export default {
  name: 'HomeView',
  components: {
    ContributersWrite
  }
};
</script>
