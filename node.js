let loader = document.getElementById('loader');
let upbtn = document.getElementById('up');
let nav  = document.querySelector('nav');
let logo  = document.getElementById('img');
let nav_link = document.querySelector('.nav-link');
let card = document.querySelector('.service-card');
window.onscroll = function(){
    if(scrollY >= 200){
        document.getElementById('up').style.display = 'block';
    }
    else{
        document.getElementById('up').style.display = 'none';
    }
}
upbtn.addEventListener('click',function(){
    scroll({
        top:0,
        left:0,
        behavior:'smooth'
    })
})
setTimeout(function(){
    loader.style.display='none';;
},1000);
document.getElementById('b-btn').addEventListener('click',function(){
    document.getElementById('br').style.display='block';
    document.getElementById('b-btn').style.display='none';
});
document.getElementById('close').addEventListener("click",function(){
    document.getElementById('br').style.display = 'none';
    document.getElementById('b-btn').style.display='block';
})
const first_btn = document.getElementById('first-btn');
const second_btn = document.getElementById('second-btn');
const third_btn = document.getElementById('third-btn');
const four_btn = document.getElementById('fourth-btn')
function darkmode(){
    document.body.classList.toggle('dark-mode');
    nav.classList.toggle('black');
    logo.src = 'icon/logo.png';
    nav_link.classList.toggle('black-font');
    document.getElementById('contact').classList.toggle('black-font');
    document.getElementById('service').classList.toggle('black-font');
    document.getElementById('projects').classList.toggle('black-font');
    document.getElementById('help').classList.toggle('black-font');
    document.getElementById('dark').classList.toggle('black-font');
    card.style.backgroundColor = 'white';
    document.getElementById('first-title').style.color = 'black';
    document.getElementById('second-title').style.color = 'black';
    document.getElementById('third-title').style.color = 'black';
    document.getElementById('fourth-title').style.color = 'black';
    document.getElementById('fifth-title').style.color = 'black';
    document.getElementById('six-title').style.color = 'black';
    document.getElementById('one').style.backgroundColor = 'white';
    document.getElementById('two').style.backgroundColor = 'white';
    document.getElementById('three').style.backgroundColor = 'white';
    document.getElementById('four').style.backgroundColor = 'white';
    document.getElementById('five').style.backgroundColor = 'white';
    document.getElementById('six').style.backgroundColor = 'white';
    document.getElementById('one-p').style.color = 'black';
    document.getElementById('two-p').style.color = 'black';
    document.getElementById('three-p').style.color = 'black';
    first_btn.style.borderColor = 'white';
    third_btn.style.borderColor = 'white';
    four_btn.style.borderColor = 'white';
    second_btn.style.borderColor = 'white';
    first_btn.style.color = 'white';
    third_btn.style.color = 'white';
    four_btn.style.color = 'white';
    upbtn.style.color = 'black';
    upbtn.style.backgroundColor = 'white';
    document.getElementById('contact').style.color = 'black';
    document.getElementById('contact').style.backgroundColor = 'white';
    second_btn.style.color = 'white';
    document.getElementById('four-p').style.color = 'black';
    document.getElementById('five-p').style.color = 'black';
    document.getElementById('six-p').style.color = 'black';
}
if(document.body.style.backgroundColor = 'white'){
    logo.src = 'icon/icon.png';
}
second_btn.addEventListener('click',function(){
    second_btn.style.backgroundColor = 'black';
    second_btn.style.color = 'white';
    document.getElementById('f-img').src = 'img/projects/projects/1 post.png';
    document.getElementById('s-img').src = 'img/projects/projects/2 post.png';
    document.getElementById('t-img').src = 'img/projects/projects/3 post.png';
    document.getElementById('f-img').style.display = 'block';
    document.getElementById('s-img').style.display = 'block';
    document.getElementById('t-img').style.display = 'block';
    document.getElementById('fo-img').style.display = 'none';
    document.getElementById('fi-img').style.display = 'none';
    document.getElementById('si-img').style.display = 'none';
});
first_btn.addEventListener('click',function(){
    first_btn.style.backgroundColor = 'black';
    first_btn.style.color = 'white';
    document.getElementById('f-img').src = 'img/projects/projects/1.png';
    document.getElementById('s-img').src = 'img/projects/projects/2.png';
    document.getElementById('t-img').src = 'img/projects/projects/3.png';
    document.getElementById('f-img').style.display = 'block';
    document.getElementById('s-img').style.display = 'block';
    document.getElementById('t-img').style.display = 'block';
    document.getElementById('fo-img').style.display = 'block';
    document.getElementById('fi-img').style.display = 'block';
    document.getElementById('si-img').style.display = 'block';
});
third_btn.addEventListener('click',function(){
    document.getElementById('third-btn').style.backgroundColor = 'black';
    document.getElementById('third-btn').style.color = 'white';
    document.getElementById('f-img').src = 'img/projects/projects/6.png';
    document.getElementById('s-img').style.display = 'none';
    document.getElementById('t-img').style.display = 'none';
    document.getElementById('fo-img').style.display = 'none';
    document.getElementById('fi-img').style.display = 'none';
    document.getElementById('si-img').style.display = 'none';

});
four_btn.addEventListener('click',function(){
    four_btn.style.backgroundColor = 'black';
    four_btn.style.color = 'white';
    document.getElementById('f-img').src = 'img/projects/projects/1.png';
    document.getElementById('s-img').src = 'img/projects/projects/2.png';
    document.getElementById('t-img').src = 'img/projects/projects/3.png';
    document.getElementById('f-img').style.display = 'block';
    document.getElementById('s-img').style.display = 'block';
    document.getElementById('t-img').style.display = 'block';
    document.getElementById('fo-img').style.display = 'block';
    document.getElementById('fi-img').style.display = 'block';
    document.getElementById('si-img').style.display = 'block';
});
document.getElementById('sorry').onclick =  function(){
    confirm('sorry this account has been closed!');
}