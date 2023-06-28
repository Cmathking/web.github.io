window.onload=function(){
    // 获取图片
var dd=document.getElementById('dian1').getElementsByTagName('li');
// 获取小圆点
var tt=document.getElementById('tu').getElementsByTagName('li');
// 定义当前
var now=0;
for (var i=0; i<dd.length; i++)
{
    // 获取index
    dd[i].index=i;
    tt[i].index=i;
    dd[i].onmouseover=function () {
        now=this.index;
        
        // 遍历
        for (var f=0; f<dd.length; f++)
        {
            dd[f].innerHTML="<img src='image/dian.gif'>"
        }
            dd[now].innerHTML="<img src='image/landian.gif'>";
        for (var j=0; j<tt.length; j++)
        {
            tt[j].className="";
        }
        tt[now].className="xian";
    }
}


function teke()
{
    if (now<tt.length-1)
    {
        now++;
    }
    else
    {
        now=0;
    }
    for (var r=0; r<dd.length; r++)
    {
        dd[r].innerHTML="<img src='image/dian.gif'>"
    }
    dd[now].innerHTML="<img src='image/landian.gif'>";
    for (var c=0; c<tt.length; c++)
    {
        tt[c].className="";
    }
    tt[now].className="xian";
}
var st=setInterval(teke,1000);
}

function ul(x) {
    document.getElementById(x).style.display="block";
}
function ul2(x) {
    document.getElementById(x).style.display="none";
}

