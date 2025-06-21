let toggle = document.querySelector('.toggleSwitch');
let wrap = document.querySelector('.wrap');
let button = document.querySelectorAll('button');
toggle.addEventListener('click',function () {
  wrap.classList.toggle("active");
  button.forEach(el=>{
    el.classList.toggle("active");
  });
});