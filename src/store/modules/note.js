import Vue from "vue";
const state = {
  notes : []

}

const getters = {
  getNotes(state){
    return state.notes;
  },
  getNote(state){

  }
}

const mutations = {
  updateNoteList(state, note){
    state.notes.push(note);
  }
}

const actions = {
  initApp({ commit }){
    //Vue resource işlemleri, dış kaynaklardan veri çekme
    Vue.http.get("http://localhost:8080/api/v1/notes")
      .then(response => {
        let data = response.body;
        for(let i in data )
        commit("updateNoteList",data[i])
      });
  },
  saveNote({ dispatch, commit, state }, payload){
    Vue.http.post("http://localhost:8080/api/v1/notes",payload)
      .then((response) => {
        if(response.status === 200){
          commit("updateNoteList",response.body)
        }
        console.log(state.notes)
      });

  },
  removeNote({ commit }, title){
    Vue.http.delete("http://localhost:8080/api/v1/notes",title)
  },

}

export default {
  state,
  getters,
  mutations,
  actions
}
