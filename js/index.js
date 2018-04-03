//头像部分
{
    let touxiang_img = document.querySelector(".touxiang_img");
    let items = document.querySelectorAll(".item");
    const R = 200;
    let n = 1;
    touxiang_img.onclick = function () {
        n++;
        if (n % 2 === 0) {
            items.forEach(function (ele, index) {
                let angle = index * Math.PI / 3;
                let x = R * Math.cos(angle);
                let y = R * Math.sin(angle);
                ele.style.left = x + "px";
                ele.style.top = y + "px";
                ele.style.display = "block"
                ele.style.transform = "scale(1,1)";


            })
        } else {
            items.forEach(function (ele, index) {
                ele.style.left = 0;
                ele.style.top = 0;
                ele.style.transform = "scale(0.3,0.3)";
                ele.style.display = "none";

            })
        }

    }
}
//技能部分
{
    const prev=document.querySelector(".prev");
    const next=document.querySelector(".next");
    const inner=document.querySelector(".inner");
    let n=0;
    next.onclick=function(){
        n++;
        prev.classList.remove("disable");
        if(n===1){
            this.classList.add("disable");
        }
        if(n===2){
            n=1;
            return;
        }
        inner.style.marginLeft=-1190*n+"px";
    };
    prev.onclick=function(){
        n--;
        next.classList.remove("disable");
        if(n===0){
            prev.classList.add("disable");
        }
        if(n===-1){
            n=0;
            return;
        }
        inner.style.marginLeft=-1190*n+"px";
    };
}
//项目部分
{
    $(".title").click(function() {
        $(this).addClass("active").siblings(".active").removeClass("active");
        var index = $(this).index();
        $(".project_bottom").removeClass("active").eq(index).addClass("active");
    })
}
//topbar
$(window).scroll(function() {
    let st = $(window).scrollTop();//必须是scrollTop方法
    if (st >200) {
        $(".topbar").show();
    } else {
        $(".topbar").hide();
    }
});