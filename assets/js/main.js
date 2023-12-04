

let todoInputBox = document.querySelectorAll('[name="todo-input"]')
let addTodo = document.querySelector('.add-todo')
let ulWrapper = document.querySelectorAll('.todo-inner-wrapper ul');
let todoPointsPtag;


addTodo.addEventListener('click', printInputs)

// Add input value in li tags 
function printInputs(){
    todoPoints();

}



// Elements inside ulWrapper 
function todoPoints() {
    ulWrapper.forEach((ulElement) => {
    
    let li = document.createElement('li');
    let todoPointsCOntainer = document.createElement('div');
    let checkBoxHolder = document.createElement('div');
    let checkbox = document.createElement('input');
    let checkboxTickImgHolder = document.createElement('span');
    let checkboxTickImg  = document.createElement('img');
    let todoTextHolder = document.createElement('div');
        todoPointsPtag = document.createElement('p');
    let btnHolder = document.createElement('div');
    let delBtn = document.createElement('button');
    let delIndicater = document.createElement('span');
    let delImgHolder = document.createElement('span');
    let delImg = document.createElement('img');
    
    
    let todoInput = document.querySelector('[name="todo-input"]').value;
   


    todoPointsCOntainer.className = 'todo-points-container';
    checkBoxHolder.className = 'checkbox-holder';
    checkbox.type = 'checkbox';
    checkbox.className='checkbox';
    checkbox.name='checkbox';
    checkboxTickImgHolder.className='checkbox-tick-img-holder';
    checkboxTickImg.src='assets/images/checkbox-tick.svg';
    todoTextHolder.className='todo-text-holder';
    todoPointsPtag.className='todo-point';
    todoPointsPtag.textContent= todoInput
    btnHolder.className='btn-holder';
    delBtn.className='delBTn';
    delIndicater.className="del-indicater";
    delIndicater.textContent='Delete';
    delImgHolder.className='del-img';
    delImg.src='assets/images/bin-img.png';
    delImg.alt='Bin';


    ulElement.appendChild(li);
    li.appendChild(todoPointsCOntainer);
    todoPointsCOntainer.appendChild(checkBoxHolder)
    checkBoxHolder.appendChild(checkbox)
    checkBoxHolder.appendChild(checkboxTickImgHolder)
    checkboxTickImgHolder.appendChild(checkboxTickImg);

    todoPointsCOntainer.appendChild(todoTextHolder);
    todoTextHolder.appendChild(todoPointsPtag);
    todoPointsCOntainer.appendChild(btnHolder)
    btnHolder.appendChild(delBtn);
    delBtn.appendChild(delIndicater);
    delBtn.appendChild(delImgHolder);
    delImgHolder.appendChild(delImg)
    
})

}


let allinputs = ['2', '3', '5'];
let p = 5;
for(i=0;i<=p; i++){
    console.log(`${i}`)
}
// allinputs.forEach((t) => {
//     console.log(t)
// })
