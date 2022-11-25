document.write("hello world");
let x=0;
let kak=document.getElementById("kakenore");
   document.body.style.backgroundColor="black";
   rot1();


function rot2(){
    document.body.style.backgroundColor="white";
    tm = setInterval("rot1()",100);
}


function rot1(){
    x+=10;
    document.body.style.backgroundColor="black";
    tm = setInterval("rot2()",100);
    kak.style.transform="rotate("+x+"deg)";
}
