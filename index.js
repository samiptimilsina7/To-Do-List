// const items=[
//     {name:"Hari",price:100},
//     {name:"Ram",price:90},
//     {name:"Shyam",price:80},
//     {name:"Krishna",price:120},
//     {name:"Balaram",price:50}       
// ]

// items.forEach((item)=>{
//     console.log(item.price)
// }
// ) 

// const ages=[18,20,15,22]
// var b=ages.findIndex((item)=>item>20
// )

// console.log(b)

// let isPostive=(number)=>number>=0
// console.log(isPostive)

// document.addEventListener('click',()=>console.log('Click'))

// function sum(u,v,w,x){
//     return u+v+w+x
// }
// var a=[1,2,5,6]
// console.log(sum(...a))
let task=[]
let titleEL=''
let descriptionEL=''
let tasknumberEl=0

document.querySelectorAll(".button")[0].style.display="block";
document.querySelectorAll(".button")[1].style.display="none";
// document.getElementById("task-number-section").style.display="none";
document.querySelector("#task-number-section").style.display="none";

function addtask(){
    titleEL=document.querySelector(".input-section #title").value;
    descriptionEL=document.querySelector(".input-section #description").value;
    task.push({tasknumber:task.length+1,title:titleEL,description:descriptionEL})
    display();
}

function display(){
    document.querySelector(".boxes").innerHTML=''
    task.forEach((item)=>{
        document.querySelector(".boxes").innerHTML+=
        `<div class="box">
            <h1>Task ${item.tasknumber}</h1>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <div class="buttons">
                <button class="button" onclick="edittask(${item.tasknumber})">Edit</button>
                <button class="button" onclick="deletetask(${item.tasknumber})">Delete</button>
            </div>
        </div>
        `
    })
}

function deletetask(tasknumber){
    task=task.filter(item=>item.tasknumber!==tasknumber) 
    display();
    }

function edittask(tasknumber){
    document.querySelectorAll(".button")[0].style.display="none";
    document.querySelectorAll(".button")[1].style.display="block";
    // document.getElementById("task-number-section").style.display="block";
    document.querySelector("#task-number-section").style.display="block";

    var filtered=task.filter((item)=>{
        if (item.tasknumber==tasknumber){
            console.log(item.title)
            document.querySelector(".input-section #title").value=item.title;
            document.querySelector(".input-section #description").value=item.description;
            document.getElementById("task-number-section").value=item.tasknumber
            document.querySelector(".input-section #task-number").value=item.tasknumber;
        }
    })
}


function savetask(){
    document.querySelectorAll(".button")[0].style.display="block";
    document.querySelectorAll(".button")[1].style.display="none";
    document.querySelector("#task-number-section").style.display="none";

    titleEL=document.querySelector(".input-section #title").value;
    descriptionEL=document.querySelector(".input-section #description").value;
    tasknumberEl=document.querySelector(".input-section #task-number").value;
    console.log(titleEL,descriptionEL,tasknumberEl)


    task.map((item)=>{
        console.log(item)
        task.map((list)=>{
            if (list.tasknumber==tasknumberEl) {
                (list.title=titleEL),(list.description=descriptionEL);                
            }
        })
    })
    display();
}


