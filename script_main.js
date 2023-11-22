let img1 = document.getElementById('looking')
let img2 = document.getElementById('looking-rever')
let x1 = 110, y1 = 390                                    // 元素离页面水平、垂直方向距离
let x2 = 1156, y2 = 390                                    // 元素离页面水平、垂直方向距离  
let x1flag = true, y1flag = true                      // 设置水平、垂直标志位
let x2flag = false, y2flag = false                      // 设置水平、垂直标志位
setInterval(() => {
    // 获取页面宽高
    let w = window.innerWidth//document.body.offsetWidth
    let h = window.innerHeight//document.body.offsetHeight

    // 判断图片碰壁的四种情况
    if (x1 == 0) x1flag = true                        // 碰到左边
    if (y1 == 0) y1flag = true                        // 碰到上边
    if (x1 == w - img1.offsetWidth) x1flag = false     // 碰到右边
    if (y1 == h - img1.offsetHeight) y1flag = false    // 碰到下边

    // 判断图片碰壁的四种情况
    if (x2 == 0) x2flag = true                        // 碰到左边
    if (y2 == 0) y2flag = true                        // 碰到上边
    if (x2 == w - img2.offsetWidth) x2flag = false     // 碰到右边
    if (y2 == h - img2.offsetHeight) y2flag = false    // 碰到下边

    // 根据碰壁情况进行改变x和y的值
    // 方法二
    x1flag ? x1++ : x1--
    y1flag ? y1++ : y1--

    x2flag ? x2=x2+0.5 : x2=x2-0.5
    y2flag ? y2=y2+0.5 : y2=y2-0.5

    // 设置图片的位置
    img1.style.left = x1 + 'px'
    img1.style.top = y1 + 'px'
    console.log(x1, y1);

    img2.style.left = x2 + 'px'
    img2.style.top = y2 + 'px'
    console.log(x2, y2);
}, 10)