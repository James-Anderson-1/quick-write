<template>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <RegisterWrite msg="Begin Registration on the App"/>
    </div>
  </template>

<script>
// @ is an alias to /src
import RegisterWrite from '@/components/RegisterWrite.vue';

export default {
  name: 'RegisterView',
  components: {
    RegisterWrite
  }
};
</script>
