var b1=document.getElementById('b1');
var b2=document.getElementById('b2');
var b3=document.getElementById('b3');
var b4=document.getElementById('b4');
var b5=document.getElementById('b5');

function f() {
    document.querySelector('h1').style.color="red";
}
function f1(x) {
    var sel=document.querySelector('select')
     switch (x) { 
         case "A": sel.style.background="red"; break;
         case "B": sel.style.background="green"; break;
         case "C": sel.style.background="blue"; break;
     }
     return;
}



function c(x) {
    return x=='b5'?(b4.click()):(alert(x));
}

b1.onclick=f2;

function f2 () {
    console.log(this);
}

function f3 (event) {
    console.log("Event Objects id="+this.id)
    console.log('X='+event.clientX+'; Y='+event.clientY);
}

b2.addEventListener("click",f3);




//event-псевдоаргумент передающий событие
var a1=document.getElementById('a1');
var a2=document.getElementById('a2');
var a3=document.getElementById('a3');

a1.onclick=f3;
a2.onclick=f3;
a3.onclick=f3;