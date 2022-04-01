let navbar = document.querySelector('.navbar')
document.querySelector("#menu-btn").onclick = () =>
{
    navbar.classList.toggle('active')
    loginForm.classList.remove('active')
    searchForm.classList.remove('active');

}
let loginForm = document.querySelector('.login-form')
document.querySelector("#login-btn").onclick = () =>
{
    loginForm.classList.toggle('active')
    navbar.classList.remove('active')
    searchForm.classList.remove('active');

}
let searchForm = document.querySelector('.search_form');
document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active')
}
// when we scroll login page and menu hidden
window.onscroll =()=> 
{
  
        loginForm.classList.remove('active')
        navbar.classList.remove('active')
        searchForm.classList.remove('active');
  
}
// dark and light color in body 
let themebtn = document.querySelector('#theme-btn');
themebtn.onclick = () => 
{
    themebtn.classList.toggle('fa-sun');
    if(themebtn.classList.contains('fa-sun'))
    {
        document.body.classList.toggle('active')
        
    }
    else 
{
    document.body.classList.remove('active')
}
}
// function for page loader
function loader()
{
    document.querySelector('.loader-container').classList.add('active');
}
function fadeOut()
{
    setTimeout(loader , 2000);
}
fadeOut();

let showpass = document.querySelector('#showpass');
let pass =document.querySelector('#pass')
showpass.onclick = () => 
{
    if(showpass.className === 'fa fa-eye')
{
    pass.setAttribute('type' , 'text');
    showpass.setAttribute('class' , 'fa fa-eye-slash')
}
else
{
    pass.setAttribute('type' , 'password');
    showpass.setAttribute('class' , 'fa fa-eye')
}
}

console.log(showpass)