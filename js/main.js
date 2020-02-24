let AMOUNT_TASKS =1;
let lastChangedName;


const addTask = ()=>{
    let adder = document.getElementById('input_task');
    adder.style.display = 'flex';   
    adder.children[1].value="";
}
const editTask = (el)=>{
    let editer = document.getElementById('edit_task');
    editer.style.display = 'flex'; 

    const take_parent = el.replace('_button-edit','');
    const parent = document.getElementById(take_parent);
    const changer = document.querySelector('#edit_task input');
    changer.value = parent.textContent;

    lastChangedName = parent;
}

const sendEditTask = ()=>{
    const changer = document.querySelector('#edit_task input');
    const errorPlace = document.getElementById('edit_task');
    if(checkValue(changer.value)){ 
        errorPlace.children[0].textContent = "Строка должна содержать более 2-ух символов *";
        changer.style.boxShadow = "0 0 30px rgb(255,42,59)";
        return;
    }else{
        changer.style.boxShadow = "0 0 30px rgb(92,231,95)";
        errorPlace.children[0].textContent = "";
        lastChangedName.children[0].textContent = changer.value;
        closeTask(errorPlace.children[3].id);
    }
    
}

const newTask = (nameTask)=>{
    const newElem = document.createElement('div');
    newElem.className = "task";
    newElem.id = `task-item-${AMOUNT_TASKS}`;
    const textSpan = document.createElement('span');
    textSpan.innerText = nameTask;
    newElem.appendChild(textSpan);


    const child__button_edit = document.createElement('i');
    child__button_edit.className = 'fas fa-pen';
    const child__button_del = document.createElement('i');
    child__button_del.className='fas fa-trash';


    const newElem__span = document.createElement('span');
    newElem__span.className= 'task-buttons';

    const span__button_edit = document.createElement('button');
    span__button_edit.className ='task-button';
    span__button_edit.id = newElem.id + `_button-edit`;
    span__button_edit.setAttribute('onclick', 'editTask(this.id)');

    const span__button_del = document.createElement('button');
    span__button_del.className = 'task-button';
    span__button_del.id =newElem.id + `_button-del`;
    span__button_del.setAttribute('onclick', 'removeTask(this.id)');

    span__button_edit.appendChild(child__button_edit);
    span__button_del.appendChild(child__button_del);

    newElem__span.appendChild(span__button_edit);
    newElem__span.appendChild(span__button_del);
    
    newElem.appendChild(newElem__span);
    
    document.getElementById('todoList').appendChild(newElem);
    AMOUNT_TASKS++;
}


const closeTask = (el)=>{
    const task = document.getElementById(el);
    task.parentElement.style.display = 'none';
}


function sendAddTask (){
   const inputTask = document.querySelector('#input_task input');
   const errorPlace = document.getElementById('input_task');
   if(checkValue(inputTask.value)){ 
    
    errorPlace.children[0].textContent = "Строка должна содержать более 2-ух символов *";
    inputTask.style.boxShadow = "0 0 30px rgb(255,42,59)";
   }else{
    newTask(inputTask.value);
    inputTask.value="";
    errorPlace.children[0].textContent = "";
    inputTask.style.boxShadow = "0 0 30px rgb(92,231,95)";
   }
}


const removeTask = (el)=>{
    const take_parent = el.replace('_button-del','');
    document.getElementById(take_parent).remove();
}

const checkValue = (text) =>{
    if(text.length<=2){
        return true;
    }else{
        return false;
    }
}
