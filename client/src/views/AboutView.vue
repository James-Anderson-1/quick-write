<template>
  <div class="about">
    <img alt="Vue logo" src="../assets/logo.png">
    <AboutWrite msg="This is an About Page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutWrite from '@/components/AboutWrite.vue';

export default {
  name: 'HomeView',
  components: {
    AboutWrite
  }
};
</script>
