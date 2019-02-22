<template>
  <div class="todo">
    <div class="container">
      <h1>{{ title }}</h1>
      <form @submit.prevent="addTodo">
        <input class="todo-input" type="text" placeholder="Add here" v-model="newTodo" />
      </form>
<div id='app2'>
 
  <!-- div 1 -->
  <div class='div' v-bind:style='{"background-color" : (isActive? "orange" : "yellow" )}' @click="toggleClass()"></div>

  <!-- div 2 -->
  <div class='div' v-bind:style='{"background-color": (isActive? "yellow" : "orange" )}' @click="isActive = !isActive"></div>

</div>
      <ul>
        <li v-for="(todo, index) in todos" v-bind:key="index">
          {{ todo.title }}
          <button v-on:click="removeTodos(index)" class="remove">X</button>



      </li>
      </ul>
    </div>
    </div>

</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
  data() {
    return {
      newTodo: '',
      isActive: true

    }
  },

  computed: {    
    ...mapState([
      'title', 'todos',
    ]),
  },


  methods: {
    toggleClass: function(){
 
      // Check value
      if(this.isActive){
        this.isActive = false;
      }else{
        this.isActive = true;
      }

    },


      ...mapMutations([
        'ADD_TODO', 'DONE_TODO'
      ]),
      ...mapActions([
        'removeTodo'
      ]),
      addTodo: function() {
        this.ADD_TODO(this.newTodo);
        this.newTodo = ''
      },
      removeTodos: function(todo) {
        this.removeTodo(todo);
      },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html, #app, .home {
    height: 100%;
  }
  body {
    background-color: rgb(133, 133, 133);
    margin: 0;
    height: 100%;
  }

 

</style>
