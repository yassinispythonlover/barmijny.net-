document.getElementById('b-btn').addEventListener('click',function(){
    document.getElementById('br').style.display='block';
    document.getElementById('b-btn').style.display='none';
});
document.getElementById('close').addEventListener("click",function(){
    document.getElementById('br').style.display = 'none';
    document.getElementById('b-btn').style.display='block';
})