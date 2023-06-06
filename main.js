let box = document.querySelector(".box")
let plus = document.querySelector(".plus")
var modal = document.getElementById("myModal");
let btnAdd = document.querySelector(".btnAdd")
let cancel = document.querySelector(".cancel")
var span = document.getElementsByClassName("close")[0]
let inp1 = document.querySelector(".inp1")
let inp2 = document.querySelector(".inp2")
var modall = document.getElementById("myModall");
let ok = document.querySelector(".ok")
let cancel2 = document.querySelector(".Cancel")
let input1 = document.querySelector(".input1")
let input2 = document.querySelector(".input2")


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  modall.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target == modall) {
    modal.style.display = "none";
    modall.style.display = "none";
  }
}

let data =[
    {
        id:1,
        title:"Go to GYM",
        course:"At 8:00 o'clock"
    },
    {
        id:2,
        title:"Read every day book",
        course:"At 18:00 o'clock"
    }
]

plus.onclick=()=>{
    modal.style.display="block"
}
cancel.onclick=()=>{
    modal.style.display="none"
}
btnAdd.onclick=()=>{
    let newUser={
        id:new Date().getTime(),
        title:inp1.value,
        course:inp2.value
    }
    data.push(newUser)
    getUser()
    modal.style.display="none"
    input1.value=""
    inp2.value=""
}

function deleteFunc(id){
    data = data.filter((e)=>{
        return e.id!=id
    });
    getUser()
}

idx = null
function openModal(id){
    idx = id
    let user = data.find((e)=>{
        return e.id==id
    })
    input1.value = user.title
    input2.value = user.course
    modall.style.display="block"
}

function editUser(){
    data.map((e)=>{
        if(e.id==idx){
            e.title = input1.value
            e.course = input2.value
        }
        return e
    });
    getUser()
    modall.style.display="none"
    
}
ok.onclick=editUser
cancel2.onclick=()=>{
    modall.style.display="none"
}

function getUser(){
    box.innerHTML=""
    data.forEach((elem)=>{
        
        let card = document.createElement("div")
        let inpFlex = document.createElement("div")
        let title = document.createElement("h2")
        title.innerHTML = elem.title
        let course = document.createElement("p")
        course.innerHTML=elem.course
        let imgDelete = document.createElement("img")
        let inpCheckbox = document.createElement("input")
        inpCheckbox.type="checkbox"
        
        let imgEdit = document.createElement("img")
        imgEdit.src="EditFilled.png"

        imgEdit.onclick=()=>{
            openModal(elem.id)
        }

        inpCheckbox.onclick=()=>{
            title.classList.toggle("www")    
        }

        imgDelete.src="DeleteFilled.png"
        imgDelete.onclick=()=>{
            deleteFunc(elem.id)
        }
        


        card.appendChild(title)
        card.appendChild(course)
        inpFlex.appendChild(imgDelete)
        inpFlex.appendChild(imgEdit)
        inpFlex.appendChild(inpCheckbox)
        card.appendChild(inpFlex)
        box.appendChild(card)

        
        card.classList.add("card")
        title.classList.add("title")
        course.classList.add("course")
        btnAdd.classList.add("btnAdd")
        cancel.classList.add("cancel")
        inpCheckbox.classList.add("checkbox")
        imgDelete.classList.add("imgDelete")
        imgEdit.classList.add("imgEdit")
        inpFlex.classList.add("inpFlex")

    })
}
getUser()