$(function() {
    // 当点击了li此时不需要执行页面滚动事件里面的li的背景选择，添加current
    // 节流阀  互斥锁
    var flag = true;
    // 1. 显示隐藏电梯导航
    var toolTop = $(".recommend").offset().top;
    toggleTool();

    function toggleTool() {
        if($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        };
    }
    $(window).scroll(function() {
        toggleTool();
        // 3. 页面滚动到某个内容区域，左侧电梯导航li相应添加和删除current类名
        if(flag) {
            $(".floor .w").each(function(i, ele) {
                if($(document).scrollTop() >= $(ele).offset().top) {
                    console.log(i);
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
                }
            })
        }
    });
    // 2. 点击电梯导航页面可以滚动到相应内容区域
    $(".fixedtool li").click(function() {
        flag = false;
        console.log($(this).index());
        // 当我们每次点击li 就需要计算出页面要去往的位置
        // 选出对应索引号的内容区域的盒子 计算它的.offset().top值
        var current = $(".floor .w").eq($(this).index()).offset().top;
        // 页面动画滚动效果
        $("body, html").stop().animate({
            scrollTop: current
        }, function() {
            flag = true;
        });
        // 点击之后，让当前li添加current类名，兄弟移除current类名
        $(this).addClass("current").siblings().removeClass();
    });
})