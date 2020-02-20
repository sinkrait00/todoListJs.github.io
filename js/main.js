var AMOUNT_TASKS =0;

const addTask = ()=>{
    let adder = document.getElementById('input_task');
    adder.style.display = 'flex';   
}


const newTask = (nameTask)=>{
    const newElem = document.createElement('div');
    newElem.className = "task";
    newElem.id = `task-item-${AMOUNT_TASKS}`;
    newElem.innerText = nameTask;


    const child__button_edit = document.createElement('i');
    child__button_edit.className = 'fas fa-pen';
    const child__button_del = document.createElement('i');
    child__button_del.className='fas fa-trash';


    const newElem__span = document.createElement('span');
    newElem__span.className= 'task-buttons';

    const span__button_edit = document.createElement('button');
    span__button_edit.className ='task-button';
    span__button_edit.id = `${AMOUNT_TASKS}-button-edit`;
    span__button_edit.setAttribute('onclick', 'editTask(this.id)');

    const span__button_del = document.createElement('button');
    span__button_del.className = 'task-button';
    span__button_del.id =`${AMOUNT_TASKS}-button-del`;
    span__button_del.setAttribute('onclick', 'removeTask(this.id)');

    span__button_edit.appendChild(child__button_edit);
    span__button_del.appendChild(child__button_del);

    newElem__span.appendChild(span__button_edit);
    newElem__span.appendChild(span__button_del);
    
    newElem.appendChild(newElem__span);
    
    document.getElementById('todoList').appendChild(newElem);
    AMOUNT_TASKS++;
    closeTask();
}


const closeTask = ()=>{
    const adder = document.getElementById('input_task');
    adder.style.display = 'none';
}

const sendTask = ()=>{
   const nameTask = document.querySelector('#input_task input').value; 
    newTask(nameTask);
}

const removeTask = (el)=>{
    console.log(el);
}