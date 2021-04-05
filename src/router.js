import Vue from "vue";
import VueRouter from "vue-router";
import NoteAdd from "./components/notes/NoteAdd";
import NoteList from "./components/notes/NoteList";
import NoteRemove from "./components/notes/NoteRemove";

Vue.use(VueRouter);

const routes = [
  {path : "/", component : NoteList},
  {path : "/note-add", component : NoteAdd},
  {path : "/note-remove", component : NoteRemove},
  {path : "*", redirect : "/"},

];

export const router = new VueRouter({
  mode : "history",
  routes
});
