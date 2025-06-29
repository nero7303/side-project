window.addEventListener('mousemove',(e)=>{
document.querySelector('.clientX').innerHTML = e.clientX;
document.querySelector('.clientY').innerHTML = e.clientY;
document.querySelector('.offsetX').innerHTML = e.offsetX;
document.querySelector('.offsetY').innerHTML = e.offsetY;
document.querySelector('.pageX').innerHTML = e.pageX;
document.querySelector('.pageY').innerHTML = e.pageY;
document.querySelector('.screenX').innerHTML = e.screenX;
document.querySelector('.screenY').innerHTML = e.screenY;
});

const cursor = document.querySelector(".mouse__cursor");
const mouseinfo = document.querySelectorAll(".mouse__text ul li span");

window.addEventListener("mousemove", function(e){
    cursor.style.left = e.clientX -25 + "px";
    cursor.style.top = e.clientY -25 + "px";
});
// s1
document.querySelector(".s1").addEventListener("mouseover", function(){
    cursor.classList.add("s1");
});
document.querySelector(".s1").addEventListener("mouseout", function(){
    cursor.classList.remove("s1");
});

// s2
document.querySelector(".s2").addEventListener("mouseover", function(){
    cursor.classList.add("s2");
});
document.querySelector(".s2").addEventListener("mouseout", function(){
    cursor.classList.remove("s2");
});

// s3
document.querySelector(".s3").addEventListener("mouseover", function(){
    cursor.classList.add("s3");
});
document.querySelector(".s3").addEventListener("mouseout", function(){
    cursor.classList.remove("s3");
});

// s4
document.querySelector(".s4").addEventListener("mouseover", function(){
    cursor.classList.add("s4");
});
document.querySelector(".s4").addEventListener("mouseout", function(){
    cursor.classList.remove("s4");
});

// s5
document.querySelector(".s5").addEventListener("mouseover", function(){
    cursor.classList.add("s5");
});
document.querySelector(".s5").addEventListener("mouseout", function(){
    cursor.classList.remove("s5");
});

// s6
document.querySelector(".s6").addEventListener("mouseover", function(){
    cursor.classList.add("s6");
});
document.querySelector(".s6").addEventListener("mouseout", function(){
    cursor.classList.remove("s6");
});

// s7
document.querySelector(".s7").addEventListener("mouseover", function(){
    cursor.classList.add("s7");
});
document.querySelector(".s7").addEventListener("mouseout", function(){
    cursor.classList.remove("s7");
});

// s8
document.querySelector(".s8").addEventListener("mouseover", function(){
    cursor.classList.add("s8");
});
document.querySelector(".s8").addEventListener("mouseout", function(){
    cursor.classList.remove("s8");
});