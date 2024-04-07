//selecting elements
//changing html
//changing css
//event listener



/*var a=document.querySelector("h1")

a.addEventListener("click",function(){
    a.innerHTML="sharma ayush"
    a.style.backgroundColor="#000"
    a.style.color="yellow"

})*/

let a=document.querySelector("button")
let b=document.querySelector("#bulb")
var flag=1;
a.addEventListener("click",function(){
if(flag==1){
    a.style.backgroundColor="green"
    let b=document.querySelector("#bulb")
    b.style.backgroundColor="yellow"
    flag=0;
}
else{
    a.style.backgroundColor="red"
let b=document.querySelector("#bulb")
b.style.backgroundColor="white"
flag=1;
}

})