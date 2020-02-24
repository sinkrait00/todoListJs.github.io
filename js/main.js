var AMOUNT_TASKS =0;
var lastChangedName;

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
    closeTask('input');
}


const closeTask = (el)=>{
    const adder = document.getElementById(el+'_task');
    adder.style.display = 'none';
}

function sendTask (){
   const nameTask = document.querySelector('#input_task input').value; 
   newTask(nameTask);
}


const removeTask = (el)=>{
    const take_parent = el.replace('_button-del','');
    document.getElementById(take_parent).remove();
}

const editTask = (el)=>{
    let frame = document.getElementById('edit_task');
    frame.style.display = 'flex';
    const take_parent = el.replace('_button-edit','');
    const parent = document.getElementById(take_parent);
    const changer = document.querySelector('#input_task input').value;
    changer.value = parent.textContent;
    lastChangedName = take_parent;
}