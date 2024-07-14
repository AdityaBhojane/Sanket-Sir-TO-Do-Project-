const userInput = document.getElementById("todo")
const addTodo = document.getElementById('add')
const clearTodo = document.getElementById('clear')
const todoContainer = document.querySelector(".todos_container")


addTodo.addEventListener("click",(e)=>{
    e.preventDefault()
    createTodo(todoContainer)
})

function createTodo(todoContainer){
    const todoWrapper = document.createElement("div")
    const todo = document.createElement("input")
    const deleteTodo = document.createElement('span')
    const EditTodo = document.createElement('span')
    const markTodo = document.createElement('span')
    if(!userInput.value){
        alert("please enter something")
    }else{
        todoWrapper.classList.add("todos")

        todo.setAttribute("type","text")
        todo.readOnly = false;
        todo.value = userInput.value
        userInput.value =""

        deleteTodo.textContent = 'Delete'

        markTodo.textContent = "Mark"

        EditTodo.textContent = "Edit"
        
        todoWrapper.appendChild(todo)
        todoWrapper.appendChild(deleteTodo)
        todoWrapper.appendChild(markTodo)
        todoWrapper.appendChild(EditTodo)
        todoContainer.appendChild(todoWrapper)
    }
    
    // features
    deleteTodo.addEventListener("click",()=>{
        todoWrapper.remove()
    })
    markTodo.addEventListener("click",()=>{
        todo.style.backgroundColor = "pink"
    })
    EditTodo.addEventListener("click",(e)=>{
        if(e.target.textContent == 'Edit'){
            todo.removeAttribute('readOnly');
            e.target.textContent = "Save"
        }else{
            todo.setAttribute("readonly","true")
            e.target.textContent = "Edit"
        }
    })
}

