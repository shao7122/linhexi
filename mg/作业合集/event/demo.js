//获取指定范围的质数
function fn1(m,n){
    //遍历当前需要获取质数的范围：被除数
    for(var i=m;i<=n;i++){
        var m2=0  //表示能被整除的次数
        //内层循环：遍历需要整除的数字
        for(var j=1;j<=i;j++){
            //判断i是否能整除j
            if(i%j==0){
                m2++
            }
        }
        //判断m是否等于2
        if(m2==2){
            document.write(i+' ')
        }
    }
}

//封装获取随机数的范围,如：5-10
function random1(m,n){
    //随机获取m到n的数字
    var num=parseInt(Math.random()*(n-m+1))+m
    return num
}

//使用函数封装随机颜色：如#1a2b3c
function color1(){
    //创建字符串，拼接所有字符
    var c1="#"
    //循环遍历颜色的6个数字
    for(var i=1;i<=6;i++){
        //获取0-15之间的随机数
        var m=random1(0,15)
        //把该数字转为16进制，并拼接起来
        c1+=m.toString(16)
    }
    return c1
}
//封装rgb颜色随机
function color2(){
    var r=random1(0,255)
    var g=random1(0,255)
    var b=random1(0,255)
    //rgb(200, 150, 0)
    return "rgb("+r+","+g+","+b+")"
}