<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Note Process</h3>
          <hr>
          <div class="form-group">
            <label>Title</label>
            <input v-model="note.title" type="text" class="form-control" placeholder="Awesome Title...">
          </div>
          <div class="form-group">
            <label>İndex</label>
            <textarea v-model="note.content" cols="30" rows="5" placeholder="Write your notes here..."
                      class="form-control"></textarea>
          </div>
          <hr>
          <button class="btn btn-primary" :disabled="saveActivity" @click="saveNote">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      note : {
        title : "",
        content : "",
        dow : new Date()
      },
      saveButtonClicked : false
    }
  },
  computed :{
    saveActivity(){
      if (this.note.title.length > 0 && this.note.content.length > 0){
        return false;
      } else {
        return true;
      }
    }
  },
  beforeRouteLeave(to,from,next){
    if ((this.note.title.length > 0 || this.note.content.length > 0) && !this.saveButtonClicked){
      if(confirm("There is some unsaved data! Do you still want to quit?")){
        next();
      }else{
        next(false);
      }
    }else {
      next();
    }
  },
  methods : {
    saveNote() {
      this.saveButtonClicked = true;
      this.$store.dispatch("saveNote", this.note)
    }
  }
}
</script>

<style scoped>

</style>
