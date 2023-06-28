window.onload=function(){
    var user=document.getElementById('user').value
    var pwd=document.getElementById('pwd').value
}

function login(){
    if(user.value=='admin'&& pwd.value=='123456'){
        alert('登录成功！欢迎进入宠物狗官网')
        window.location.href='chongwushouye.html'
    }
    else{
        alert('登录失败，用户名或密码错误！')
        user.value=''
        pwd.value=''
    }

}