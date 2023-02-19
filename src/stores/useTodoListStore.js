import {defineStore} from 'pinia'

export const useTodoListStore = defineStore("todoList", {
    state: () => ({
        todoList: [{id: 0, title: 'Learn Vue', dueDate: new Date('2023-02-10'), category: 'Education', completed: false}],
        id: 1,
      
    }),
    actions: {


        // addTodo(todoTitle, todoDueDate, todoCategory) {
        //     this.todoList.push({id: this.id++, title: todoTitle, dueDate: new Date(todoDueDate), category: todoCategory, completed: false})
      
        // }
        addTodo(task) {
            task.id = this.id++
            this.todoList.push(task)
      
        },
        deleteTask(task) {
            const taskIndex = this.todoList.indexOf(task)
            this.todoList.splice(taskIndex, 1)
        }
        
    }
})