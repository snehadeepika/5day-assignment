console.log("hello");


//question 1:
//==========


let arr=['yellow','green','white','black'];
function changeColor (){
setTimeout(() => {
    document.body.style.backgroundColor=arr.shift();
         document.body.style.color='red';
}, 5000);
}
setInterval(changeColor,5000);


//question 2:
//===========
function printTable(){
    var num;
    num=Number(document.getElementById('txtNumber').value);
    for(var i=1;i<=10;i++){
        var pTag=document.getElementById('pPrint');
        pTag.innerHTML +=(num*i)
    }

}



//question 3: 
//===========

const name=prompt("enter ur name");
title.innerText =`welcome to the web : ${name}`;
 const  ctime=document.getElementById('time');
 function clock(){
     let date= new Date ();
     let Time=date.toLocaleTimeString ();
     ctime.innerText= time;
 }
setInterval(clock,1000);