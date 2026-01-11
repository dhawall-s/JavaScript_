//event matlab kuch action hua
//event listener ka matlab us event ka reaction

function bod(){
    b.style.backgroundColor='aqua'
}

let h1=document.querySelector("h1")
h1.addEventListener("click",function(){
    h1.style.color="aqua";
})


let p=document.querySelector("p")

p.addEventListener("dblclick",function(){
    p.style.backgroundColor='green'
})

let b=document.querySelector("body")
b.addEventListener("click",bod)



b.removeEventListener("click",bod)