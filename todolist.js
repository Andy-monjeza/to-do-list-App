import { todolist } from "./UI-updates.js";
const andy=new todolist();

const menuBtn=document.querySelector('.menu');
const popup=document.querySelector('.popup');
const inputField=`
 <div class="input-field">
  <button class="back-btn">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M15 18l-6-6 6-6"/>
  </svg>
</button>
        <input class="todo" placeholder="To-do">
        <span class="date-tag">Due on:</span>
        <input type="date" class="date-picker">
        <button class="add-task">Add</button>
    </div>
`;
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
       andy.updateStats();
       popup.style.display="none";
  }
  else if(e.target.closest('.back-btn')){
  popup.style.display="none";
  }
  else if(e.target.classList.contains('')){
 popup.innerHTML=inputField;
  }
})

