<script setup>
import {ref} from 'vue'
import {useTodoListStore} from '@/stores/useTodoListStore'

import Task from '@/components/Task.vue'
import Header from '@/components/Header.vue'

// const todoArr = reactive([{id: 1, text: 'Learn Vue', dueDate: new Date('2023-02-11')}])

const store = useTodoListStore()


const newTodoTitle = ref('')
const newTodoDueDate = ref(null)
const newTodoCategory = ref('')

const categories = ['Personal', 'Shopping', 'Work', 'Other']

const todoArr = store.todoList




const addTodoAndClear = () => {
  if(newTodoTitle.value === 0) return 
  toggleForm()
  store.addTodo({title: newTodoTitle.value, dueDate: newTodoDueDate.value, category: newTodoCategory.value, completed: false})
  newTodoTitle.value = ''
  newTodoDueDate.value = null
  newTodoCategory.value = ''
  
}

const toggleForm = () => {
  
  document.querySelector('.task-form').classList.toggle('active')
  document.querySelector('.overlay').classList.toggle('active')

  
}





</script>

<template>
  
  <Header />
  <main class="todo-list">
    
    
    <!-- <h1>Simple Task Tracker because no one done it before me</h1> -->



    <div class="overlay" @click="toggleForm"></div>

    <button class="btn btn-open-form"   @click="toggleForm"><span>+</span></button>
    <form class="task-form" @submit.prevent="addTodoAndClear">
      <input class="task-text" type="text" v-model="newTodoTitle" placeholder="Task Name" />
      <!-- <input class="task-date" type="date"  v-model="newTodoDueDate"> -->
      <VueDatePicker class="task-date" v-model="newTodoDueDate" placeholder="Select Date" :min-date="new Date()"></VueDatePicker>
      <div class="input-wrapper">
      <label for="cars">Choose a category:</label>
       <select class="task-category" v-model="newTodoCategory" >

        <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
      </select>
    </div>
      <button class="btn-submit" type="submit">Add Todo</button>
    </form>
    <div>
    <ul v-if="todoArr.length > 0">
      <li  v-for="todo in todoArr" :key="todo.id">
        <Task @toggleCompleted="todo.completed = !todo.completed" :task="todo"/>
      </li>
    </ul>
    <p v-else>You have no tasks</p>
  </div>
  
  </main>
</template>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
 
}




header {
  background-color: aqua;
}

.header-title {
  text-align: start;
}
.todo-list {

  margin: 50px auto;
}

h1 {
  text-align: center;
  margin-bottom: 40px;
}

p {
  text-align: center;
  font-size: 1.6rem;
  
}
.btn-open-form {

  border: none;
  width: 80px;
  height: 80px;
  
  border-radius: 5px;
  box-shadow: 0px 0px 15px 0px black;
  background-color: #444;
  font-size: 50px;
  transition: all ease-in 0.4s;
  position: fixed;
  bottom: 50px;
  right: 50px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

}


.btn-open-form span {
  text-align: center;
  display: inline-block;
  margin-bottom: 10px;
}

.btn-open-form:hover {
  transform:  rotate(90deg) scale(1.1);
  color: #489d46;

}

.overlay {
  position: fixed;
    top: 0;
    left: 0;
    display: none;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.687);
    z-index: 999;
    
}

.task-form  {
  position: absolute;
  display: none;
  flex-direction: column;
  height: 40vh;
  width: 60vw;
  padding: 50px;
  z-index: 1000;
  background-color: white;
  border-radius: 20px;
  align-items: start;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.active {
  display: flex;
  
}






ul {
  list-style: none;
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
}


input[type="text"] {
  padding: 10px;
  border: none;
  background-color: 	#E8E8E8;
  width: 100%;
  margin-bottom: 20px;
}

.task-date {
  margin-bottom: 20px;
  width: 100%;
}

.task-category {
  width: 80px;
  height: 30px;
}

.input-wrapper {
  display: flex;
  margin-bottom: 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

label {
  color: #444;
}

.btn-submit {
  width: 140px;
  height: 40px;
  background-color: #76d275;
  border: none;
  color: white;
  font-size: 1.2rem;
  align-self: center;
}

</style>
