import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'To Do',
    todos: [
      {
        'title': 'Finish vue ',

      }, 

      {
        'title': 'Finish Memory Game ',

      }
  
    ]
  },
  getters: {
    
    
  },
  mutations: {
    ADD_TODO: (state, todo) => {
      state.todos.push(todo);
    },
  
    REMOVE_TODO: (state, todo) => {
      state.todos.splice(todo, 1)
    },

  },
  actions: {
    removeTodo: (context, todo) => {
      context.commit("REMOVE_TODO", todo)
    },
    
  }
})
