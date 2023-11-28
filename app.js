var  Container = document.querySelector(".container")
var  Form = document.querySelector(".form")
var Input = document.getElementById("input")
var Button = document.getElementById("button")
var ToDoList = document.getElementById("todolist")

Arr = []
Button.onclick=()=>{
   Arr.push(Input.value)
   console.log(Input.value)
   Input.value=""
   EmptyList()
   ShowList()
}

function ShowList (){
    ToDoList.innerHTML = ""
    EmptyList()

    Arr.forEach((el,i)=>{
        console.log(el,"el")
        const NewItem = document.createElement("li")
        const Anchor = document.createElement("a")
         const Anchor1 = document.createElement("a")
         Anchor.innerHTML="edit";
         Anchor1.innerHTML="delete"

        //  console.log(i)
         NewItem.innerHTML=el;
         
         
         Anchor1.onclick=()=>{
              console.log(i,'inside')
             DeleteList(i)
            }
        Anchor.onclick=()=>{
                console.log(i)
                EditList(i)
            }
            
            
            NewItem.appendChild(Anchor)
            NewItem.appendChild(Anchor1)
            Anchor1.style.marginRight="20px"
        ToDoList.appendChild(NewItem)
    })
    

}
function EmptyList (){
    ToDoList.innerHTML=""
}
ShowList()




function EditList(index1){
    var Message = prompt("Update Your Task")
    console.log(index1)
    Arr.splice(index1,1,Message)
    console.log(Arr)
    ShowList()
}

function DeleteList(index){
  
    let newArr = Arr.splice(index,1);
    console.log(Arr,newArr)
    ShowList()
}
