<script>
import { toRefs } from 'vue';
import {useTodoListStore} from '@/stores/useTodoListStore'


export default {
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    setup(props) {
        const task = toRefs(props.task)
        const store = useTodoListStore()


        const isDueSoon = function(dueDate) {
            const now = new Date()
            console.log(new Date(dueDate) > now)
            return new Date(dueDate) > now && new Date(dueDate) < new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000)
        }


        const isOverdue = (dueDate) => {
            return new Date(dueDate) < new Date()
        }


        const deleteTask = (task) => {
            store.deleteTask(task)
            
        }

        const options = {
        
            day: "numeric",
            month: "numeric",
            year: "numeric",
            // weekday: 'long',
        };  
        
        return {
            isDueSoon,
            isOverdue,
            deleteTask,
            options
            
        }

    }
    
}

</script>


<template>
    <div  class="task" :class="{'due-soon': isDueSoon(task.dueDate), 'overdue': isOverdue(task.dueDate), 'done': task.completed}">
        <div class="wrapper">
            <input type="checkbox" @change="$emit('toggleCompleted')"/>
            <h3 v-if="task.title">{{ task.title }}</h3>
            <p>{{ new Intl.DateTimeFormat("en-GB",options).format(task.dueDate) }}</p>
           
        </div>
        <button @click="deleteTask(task)" class="btn-delete"><span class="material-symbols-outlined icon-delete">delete</span></button>
    </div>
</template>


<style scoped>

.task {
    max-width: 600px;
    width: 70vw;
    background-color: #444;
    padding: 5px 20px ;
    color: white;
    border-radius: 5px;
    box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.532);
    transition: transform ease-in 0.3s ;
    display: flex;
    justify-content: space-between;
    align-items: center;
}


.task:hover {
    transform: scale(1.02);
}
.wrapper {
    display: flex;
    align-items: center;
    gap: 20px;



}

.icon-delete {
    color: white;
}
.btn-delete {
    /* background-color: red; */
    /* 
    height: 40px;
    width: 100px;
    color: #fff;
    font-size: 1.1rem; */
    height: 40px;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn-delete:hover {
    background-color: rgba(0, 0, 0, 0.144);
} 
.due-soon {
    border-left: 5px solid yellow;
}


.overdue {
  border-left: 5px solid red; 

 

}


.done {
    background-color: grey;
    
}

.done h3 {
    text-decoration: line-through;
}

</style>