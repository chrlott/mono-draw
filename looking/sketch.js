
// 在页面加载时，创建一个画布，其大小为当前窗口的宽度和高度
function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    textAlign(CENTER,CENTER);       
    text('looking?', mouseX, mouseY, 30, 20);   //位置为当前鼠标的坐标 (mouseX, mouseY)，文本的宽度和高度分别为 30 和 20
    fill(random(255),random(255),random(255));
    textSize(14);
    textFont('Arial Narrow');
    // stroke(29, 72, 255);
}