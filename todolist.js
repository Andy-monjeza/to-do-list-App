import { todolist } from "./UI-updates.js";
const andy=new todolist();

andy.updateStats();


const menuBtn=document.querySelector('.menu');
const popup=document.querySelector('.popup');
const inputField=`
 <div class="input-field">
        <input class="todo" placeholder="To-do">
        <span class="date-tag">Due on:</span>
        <input type="date" class="date-picker">
        <button class="add-task">Add</button>
    </div>
`;
const optionField=`
<div class="option-field">
      <button class="edit">
                 
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 20h9"/>
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/>
  </svg>

  Edit task</button>

 <button class="mark-complete">
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 13l4 4L19 7"/>
  </svg>
          
     Done</button>
     
     
      <button class="delete">Delete</button>
`
menuBtn.addEventListener("click",()=>{
 if(popup.style.display="none"){
        popup.style.display="block";
    } 
   popup.innerHTML=inputField;

})
   

popup.addEventListener("click",(e)=>{
  if(e.target.classList.contains('add-task')){
    const task=document.querySelector('.todo');
    const date=document.querySelector('.date-picker');
       andy.addTask(task.value,date.value);  
       andy.updateTasks();
       popup.style.display="none";
  }
})




const crntDate=new Date();
console.log(crntDate);