<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #563F7A">
    <router-link
      to="/"
      tag="a"
      class="navbar-brand">
      NotePad
    </router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link
          active-class="active"
          to="/note-add"
          tag="li"
          class="nav-item">
          <a class="nav-link" href="#">Add a Note</a>
        </router-link>
        <router-link
          active-class="active"
          to="/note-list"
          tag="li"
          class="nav-item">
          <a class="nav-link" href="#">My Notes</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
name: "Header"
}
</script>

<style scoped>

</style>
