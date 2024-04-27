<template>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <p>
        Enter your username and password to get started,<br>
        or play a a game:
        <a href="https://vim-adventures.com/" target="_blank" rel="noopener">vim-adventures</a>.
      </p>
      <br>
      <form>
        <input type="email" placeholder="user.name@domain" v-model="email"> <br>
        <input type="password" placeholder="super.secret" v-model="password"> <br>
        <button @click="register">Register</button>
      </form>
    </div>
  </template>

<script>
// import { watch } from 'vue';
import AuthenticationService from '@/services/AuthenticationService';
export default {
  data () {
    return  {
      email: 'john.do@email.com',
      password: 'super-secret'
    };
  },
  methods: {
    async register () {
      const  response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
      console.log('Register button was clicked with: ', this.email, ' and ', this.password);
      console.log(`Response from backend: ${response.body.message}`);
    }
  },
  watch: {
    email (value) {
      console.log('Email has changed. New value: ', value);
    }
  }
};
// name: 'RegisterWrite',
// props: {
//   msg: String
// }

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
  </style>
