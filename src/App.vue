<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/shared/Header";
export default {

  name: 'app',
  components : {
    appHeader : Header
  },
  created() {

    this.$store.dispatch("initApp");
  }
}
</script>

<style>

</style>
