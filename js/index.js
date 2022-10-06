const heart = document.querySelector(".card__heart");
const box = document.querySelector(".card__box");

heart.addEventListener('click',()=>{heart.classList.toggle('active')})
box.addEventListener('click',()=>{box.classList.toggle('active')})