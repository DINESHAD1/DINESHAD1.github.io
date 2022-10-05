<template>
    <div>
        <h1>Todo App</h1>
    </div>
    <div class="main" >
        <div >
            <input type="text"  id="task" v-model="task">
            <button @click="taskenter" id="button" >task</button>
        </div>
        <div class="table">
            <table class="tableone">
                <tr class="tr">
                    <th>Task</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>quantity</th>
                </tr>
                <tr v-for="(taska,index) in tasks" :key="index" >
                    <td>{{taska.tk}}</td>
                    
                    <td>
                        <div class="edit" @click="edit(index)">
                            <span><img src="../assets/editpng.png" id="editimg"></span>
                        </div>
                    </td>
                    <td>
                        <div class="delete" @click="deletes(index)" >
                            <span>Delete</span>
                        </div>
                    </td>
                    <td>{{taska.quantity}}</td>
                </tr>
                
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name:'TodoApp',
        data(){
            return{
                task:'',
                editedTask:null,
                tasks:[
                    {
                        tk:' study fast',
                        quantity:2
                    },
                    {
                        tk:'eat fast',
                        quantity:2
                    },
                    {
                        tk:"learn fast",
                        quantity:2
                    }
                ]
            }
        },
        methods:{
            taskenter(){
                if(this.task.length===0) return;
                if(this.editedTask === null){
                    this.tasks.push(
                   {
                    tk:this.task
                   }
                )
                }else{
                    this.tasks[this.editedTask].tk = this.task;
                    this.editedTask = null;
                }
                console.log("task entared");
                this.task='';
            },
            deletes(index){
                this.tasks.splice(index,1)
            },
            edit(index){
                this.task = this.tasks[index].tk;
                this.editedTask = index;

            }
        }
    };
    
</script>

<style scoped>
.table{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;

}

.tr{
    margin: 10px;
   
}
.tableone{
    background-color: rgb(252, 248, 242);
    width: 400px;
    height: auto;
    border-radius: 2px;
    border: 2px solid rgb(195, 193, 193);
    padding: 10px;
}


#task{
    width: 310px;
    
}
#button{
    width: 80px;
}
#editimg{
    width: 20px;
    height: 20px;
    margin: 10px;
    cursor: pointer;
}

.tr{
    border: 2px solid black;
}
.main{
    display: flex;
    flex-direction: column;
}
</style>