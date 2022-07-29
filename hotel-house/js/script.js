let burger = document.getElementsByClassName("burger")[0];
let containerLinks = document.getElementsByClassName("container-links")[0];
let close = document.getElementsByClassName("close")[0];


burger.addEventListener('click', () => {
    close.classList.toggle('show');
    containerLinks.classList.toggle('hide');
    burger.classList.toggle('hide');
})

close.addEventListener('click', () => {
    close.classList.toggle('show');
    containerLinks.classList.toggle('hide');
    burger.classList.toggle('hide');
})


// COOKIES
// ---------------------------------------
let cookies = document.getElementsByClassName("cookies")[0];
let choice1 = document.getElementsByClassName("choice")[0];
let choice2 = document.getElementsByClassName("choice")[1];

choice1.addEventListener('click', () => {
    choice1.classList.toggle('show');
    cookies.classList.toggle('hide');
})
choice2.addEventListener('click', () => {
  choice2.classList.toggle('show');
  cookies.classList.toggle('hide');
})