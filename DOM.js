//create element
//append,prepend ->where element is wanted



// let h1=document.createElement("h1")
// h1.textContent="Hello"
// console.dir(h1)
// document.body.append(h1)
// document.body.prepend(h1)
// document.querySelector("body").prepend(h1)



// let h1=document.querySelector("h1")
// console.dir(h1)
// h1.style.color="red"
// h1.style.backgroundColor="pink"

// h1.classList.add("hulu");
// h1.classList.remove("hulu");
// h1.classList.toggle("hulu");


// let head=document.querySelector("#head")
// head.textContent="Welcome To New World"

// let lis=document.querySelectorAll("li")
// lis.forEach(function(val){
//     console.log(val.textContent)
// })

// for(let i=0;i< lis.length;i++){
//     console.log(lis[i].textContent)
// }
// document.querySelector("p").innerHTML="<b>Updated</b> By Js"

// document.querySelector("p").setAttribute("title","Info")
// let ul=document.querySelector("ul")
// let li=document.createElement("li")
// li.textContent="Cherry"
// ul.appendChild(li)

// let img=document.createElement("img")
// img.setAttribute("src","#")
// document.querySelector("div").prepend(img)

let ul=document.querySelector("ul")

let li=document.querySelector("li")

ul.removeChild(li)
