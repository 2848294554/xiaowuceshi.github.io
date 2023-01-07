// ******************下面是轮播图布局***********//
var a=0;
var lunbotu=new Array();
lunbotu[0]="images/jiaohutu1.png";
lunbotu[1]="images/23.png";
lunbotu[2]="images/beijingtu.png";
lunbotu[3]="images/logo.png";


setInterval(shijian,2000);

function shijian(){
    var tupian=document.getElementById("lunbotu");
    if(a==lunbotu.length-1){
        a=0;
    }
    else{
        a++;
    }
    tupian.src=lunbotu[a];
}
// ****************************下面是侧边栏---------------//
function dakai(){
    document.getElementById("cebianbuju").style.display="block";
}

function guanbi(){
    document.getElementById("cebianbuju").style.display="none";
}