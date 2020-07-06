<template>
  <header>
    <div class="logo">
      <router-link to="/" class="Logo">Client</router-link>
    </div>
    <div class="main-navigation">
      <router-link to="/login">Login</router-link>
      <a @click.prevent.stop="logout">Logout</a>
      <router-link to="/register">Register</router-link>
    </div>
  </header>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Header-component',
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace('login');
        });
    }
  }
};
</script>
