export class todolist {

constructor(){
this.date= new Date();
this.optionField=`
<div class="option-field">
       <button class="back-btn">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M15 18l-6-6 6-6"/>
  </svg>
</button>

  <button class="edit">
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 20h9"/>
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/>
  </svg>
  Edit task
</button>


 <button class="mark-complete">
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 13l4 4L19 7"/>
  </svg>
          
     Done</button>

     
     
      <button class="delete">Delete</button>
`
this.pending=document.querySelector('.pending-count');
this.overdue=document.querySelector('.overdue');
this.progress=document.querySelector('.progress');
this.progressPrcnt=document.querySelector('.percentage');
this.popup=document.querySelector('.popup');
this.taskContainer=document.querySelector('.taskContainer');
this.pendingTasks=[];
this.completedTasks=[];
this.overDueTasks=[];
this.taskList=document.querySelector('.taskList');

this.toggleTaskOptions();
this.updateStats();

this.months= ["January", "February", "March", "April", "May", "June",
 "July", "August", "September", "October", "November", "December"];

}

addTask(task,dateValue){
 const today=new Date();
      today.setHours(0,0,0,0);
      const due=new Date(dateValue);
      due.setHours(0,0,0,0);
      if(today>due && dateValue!==""){alert("input a valid date")}
      else{

  if(task===""){alert("please add task")} else if(dateValue===""){
    this.pendingTasks.push({
    taskName:task,
    dueDate:"No due date",
    urgent:false,
    id:this.generateID()
})
  }else{
this.pendingTasks.push({
    taskName:task,
    dueDate:dateValue,
    urgent:false,
    id:this.generateID()
})

  }}

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

toggleTaskOptions(){
 
this.taskContainer.addEventListener("click", (e)=>{
  if(e.target.classList.contains('options')){
   const element=e.target;
    const id=element.dataset.taskId;
    this.popup.style.display="block";
    this.popup.innerHTML=this.optionField;

    this.popup.addEventListener("click",(e)=>{
      if(e.target.classList.contains('delete')){
      this.pendingTasks=this.pendingTasks.filter((task)=>{
        return task.id!==id;
      })
      this.popup.style.display="none";
      this.updateTasks();
      this.updateStats();
      }
      else if(e.target.classList.contains('mark-complete')){
        this.pendingTasks.forEach((task)=>{
          if(task.id===id){
            this.completedTasks.push(task);
            this.pendingTasks=this.pendingTasks.filter((task)=>{
              return task.id!==id;
            })
            this.updateTasks();
            this.updateStats();
          }
        })
      }
    })
  }
})


}

updateStats(){
  this.checkIfDue();
this.pending.innerHTML=this.pendingTasks.length;
const totalTasks=this.completedTasks.length+this.pendingTasks.length;
let prntCount=Math.round((this.completedTasks.length/totalTasks)*100);

if(this.completedTasks.length!==0){
this.progressPrcnt.innerHTML=prntCount+"%";
}else{
  this.progressPrcnt.innerHTML=0+"%";
}
this.fillProgress(prntCount);

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

checkIfDue() {
  this.date.setHours(0, 0, 0, 0); 
  
  this.pendingTasks.forEach((task) => {
    const due_Date = new Date(task.dueDate);
    due_Date.setHours(0, 0, 0, 0); 

    if (due_Date < this.date) {
      this.overDueTasks.push(task);
    }
  });

  this.overdue.innerHTML = this.overDueTasks.length;
}

fillProgress(progress){
  let count=progress;
  let start=0;
  
   let interval=setInterval(()=>{
    if(start >= count){clearInterval(interval)}else{
       start++;
       this.progress.style.background=`
   conic-gradient(dodgerblue 0deg ${start * 3.6}deg, white ${start * 3.6}deg 360deg)`;
   
    }
   },10)
   
}

}
