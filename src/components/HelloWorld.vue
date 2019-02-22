<template>
  <div class="todo">
    <div class="container">
      <h1>{{ title }}</h1>
      <form @submit.prevent="addTodo">
        <input class="todo-input" type="text" placeholder="Add here" v-model="newTodo" />
      </form>

      <ul>
        <li v-for="(todo, index) in todos" v-bind:key="index">
          {{ todo.title }}
          <button v-on:click="removeTodos(index)" class="remove">X</button>

<div>
  <input type="checkbox" name="my-checkbox" id="opt-in">
  <label for="opt-in">This one is done</label>
</div>

          
        

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
      
    }
  },

  computed: {    
    ...mapState([
      'title', 'todos',
    ]),
  },


  methods: {
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

  .todo {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 100%;
    height: 100%;
  }

  .container {
    padding: 50px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  ul li {
    padding: 20px;
    background: white;
  }
  input {
    padding: 20px;
 
    margin-bottom: 40px;
    outline: none;
  }
  .remove {
        float: right;
        color: #ff0076;
        background: #bebebe;  
        cursor:pointer;
  }
  .flex-item {
  margin: 5px;
}

/* Labels for checked inputs */
input:checked + label {
  color: rgb(0, 185, 15);
}

/* Radio element, when checked */
input[type="radio"]:checked {
  box-shadow: 0 0 0 3px orange;
}

/* Option elements, when selected */
option:checked {
  box-shadow: 0 0 0 3px lime;
  color: red;
}

</style>
