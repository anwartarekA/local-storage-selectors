
// let res = window.prompt('Print Number From - To','Example: 5-20');
// let string = res.split("-") ;
// let result = string.map(function(ele){
//     return +ele;
// });
// let x = result[0];
// let y = result[result.length - 1];

// if(x<=y)
// {
//     for(let i=x; i<=y; i++)
//     {
//         console.log(i);
//     }
// }
// if(x > y)
// {
//     for(let i=y; i<=x; i++)
//     {
//         console.log(i);
//     }
// }

//////////////////////////////////////////////////////////////////////////////
// let div = document.querySelector('.one');
// let btn =document.querySelector('button');
// btn.onclick=function(){
//     div.remove();
// }
// setTimeout(show,5000);
// function show ()
// {
//     div.style.display='block'
// };

////////////////////////////////////////////////////////////////////////////////

// let div2 = document.querySelector('.two');
// let counter = div2.textContent;
// let startup_counter = setInterval(function(){
//     let res = --counter;
//     div2.innerHTML = res
//     if(counter === 0 )
//     {
//         clearInterval(startup_counter)
//     }
// },1000);

/////////////////////////////////////////////////////////////////////////////////

// let div2 = document.querySelector('.two');
// let counter = div2.textContent;
// let startup_counter = setInterval(function(){
//     div2.innerHTML = --counter;
//     if(counter === 0 )
//     {
//         window.location.replace("https://Elzero.org");
//     }
// },1000);

/////////////////////////////////////////////////////////////////////////////////

// let div2 = document.querySelector('.two');
// let counter = div2.textContent;
// let startup_counter = setInterval(function(){
//     div2.innerHTML = --counter;
//     if(counter === 5 )
//     {
//         window.open('https://Elzero.org','_blank','width=300,height=300,top=100,left=200',true)
//     }
//     if(counter === 0)
//     {
//         clearInterval(startup_counter)
//     }
// },1000);


////////////////////////////////////////////////////////////////////////////////

let sel1 = document.querySelector('.sel1');
let sel2 = document.querySelector('.sel2');
let sel3 = document.querySelector('.sel3');
let p =document.querySelector('p');

if(localStorage.fontFamily != 'undefined')
{
    p.style.fontFamily = localStorage.fontFamily;
    sel1.value = localStorage.fontFamily ;
}
if(localStorage.color != 'undefined')
{
    p.style.color = localStorage.color;
    sel2.value = localStorage.color;
    document.body.style.backgroundColor = localStorage.color;
}

if(localStorage.fontSize != 'undefined')
{
    p.style.fontSize = localStorage.fontSize;
    sel3.value = localStorage.fontSize;
}

sel1.onchange=(ele)=>{
  p.style.fontFamily=ele.target.value;
  localStorage.fontFamily = ele.target.value;
}
sel2.onchange=function(ele){
p.style.color= ele.target.value;
document.body.style.backgroundColor = ele.target.value;
localStorage.backgroundColor = ele.target.value;
localStorage.setItem('color',ele.target.value);
}

sel3.onchange=function(ele){
    p.style.fontSize = ele.target.value;
    localStorage.fontSize = ele.target.value;
}

