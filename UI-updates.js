export class todolist {

constructor(){
this.pending=document.querySelector('.pending-count');
this.overdue=document.querySelector('.overdue');
this.progressPrcnt=document.querySelector('.percentage');
this.pendingTasks=[];
this.completedTasks=[];
this.overDueTasks=[];
this.taskList=document.querySelector('.taskList');
}

addTask(task,dateValue){
this.pendingTasks.push({
    taskName:task,
    dueDate:dateValue,
    urgent:false,
    id:this.generateID()
})

}

updateTasks(){


  if(this.pendingTasks.lenght===0){
    this.taskList.innerHTML=`<img class="empty-icon" src="" alt="">`
  }else{
  let listHolder=``;
  
  this.pendingTasks.forEach((task)=>{
    listHolder+=`<div class="task">
      <div class="date-name-container">
        <span class="name ">${task.taskName}</span>
        <span class="date">${task.dueDate}</span>
      </div>
       <button class="options" data-task-id="${task.id}">⋮</button>
     </div>`

  })
 
this.taskList.innerHTML=listHolder;
  }
}

deleteTask(){
this.pendingTasks=this.pendingTasks.filter((task)=>{
  return task.id!==e.target.id;
})
}

updateStats(){
this.pending.innerHTML=this.pendingTasks.length;
//this.overdue.innerHTML=this.overDueTasks.lenght;

const totalTasks=this.completedTasks.length+this.pendingTasks.lenght;
if(totalTasks!==0){
this.progressPrcnt.innerHTML=Number(this.completedTasks.lenght/totalTasks)*100;
}else{
  this.progressPrcnt.innerHTML=0;
}



}

markComplete(){
this.completedTasks.push({
  taskName:e.target.taskName,
  dueDate:e.target.dueDate,
  id:e.target.id
})
}

generateID(){
return crypto.randomUUID();
}

}



