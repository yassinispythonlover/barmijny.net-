const first_btn = document.getElementById('first-btn');
const second_btn = document.getElementById('second-btn');
const third_btn = document.getElementById('third-btn');
const four_btn = document.getElementById('fourth-btn');
second_btn.addEventListener('click',function(){
    second_btn.style.backgroundColor = 'black';
    second_btn.style.color = 'white';
    document.getElementById('f-img').src = '../img/projects/projects/1 post.png';
    document.getElementById('s-img').src = '../img/projects/projects/2 post.png';
    document.getElementById('t-img').src = '../img/projects/projects/3 post.png';
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
    document.getElementById('f-img').src = '../img/projects/projects/1.png';
    document.getElementById('s-img').src = '../img/projects/projects/2.png';
    document.getElementById('t-img').src = '../img/projects/projects/3.png';
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
    document.getElementById('f-img').src = '../img/projects/projects/6.png';
    document.getElementById('s-img').style.display = 'none';
    document.getElementById('t-img').style.display = 'none';
    document.getElementById('fo-img').style.display = 'none';
    document.getElementById('fi-img').style.display = 'none';
    document.getElementById('si-img').style.display = 'none';

});
four_btn.addEventListener('click',function(){
    four_btn.style.backgroundColor = 'black';
    four_btn.style.color = 'white';
    document.getElementById('f-img').src = '../img/projects/projects/1.png';
    document.getElementById('s-img').src = '../img/projects/projects/2.png';
    document.getElementById('t-img').src = '../img/projects/projects/3.png';
    document.getElementById('f-img').style.display = 'block';
    document.getElementById('s-img').style.display = 'block';
    document.getElementById('t-img').style.display = 'block';
    document.getElementById('fo-img').style.display = 'block';
    document.getElementById('fi-img').style.display = 'block';
    document.getElementById('si-img').style.display = 'block';
});