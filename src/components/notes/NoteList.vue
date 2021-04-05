<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-5 card mt-5 shadow">
        <div class="card-body">
          <table class="table table-hover table-striped table-bordered" v-if="getNotes.length > 0">
            <div v-for="note in getNotes">
              <div class="card">
                <div class="card-header">
                  <strong>Title : </strong>
                  {{ note.title }}
                  <button type="button" class="btn btn-danger" style="float: right; margin: 5px" @click="removeNote(note.title)">Delete</button>
<!--                  <button type="button" class="btn btn-secondary" style="float: right; margin: 5px">Edit</button>-->
                </div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <p>{{ note.content }}</p>
                    <footer class="blockquote-footer">{{ note.dow }} </footer>
                  </blockquote>
                </div>
              </div>
              <br>
            </div>
          </table>
          <div class="alert alert-warning" v-else>
            <strong>There is nothing to show, please add a note!</strong>
            <br>
            <small>To add new Note, please click the button at top</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    computed : mapGetters(["getNotes"]),
    methods :{
      removeNote(title){
        this.$store.dispatch("removeNote", title);
      }
    }
  }
</script>

<style scoped>
</style>
