let number = 0
let sticker = true
const stamps = [
  `assets/01.jpg`,
  `assets/02.jpg`,
  `assets/03.jpg`,
  `assets/04.jpg`,
  `assets/05.jpg`,
  `assets/06.jpg`,
  `assets/07.jpg`,
  `assets/08.jpg`,
  `assets/09.jpg`,
  `assets/10.jpg`,
  `assets/11.jpg`,
  `assets/12.jpg`,
  `assets/13.jpg`,
  `assets/14.jpg`,
  `assets/15.jpg`,
  `assets/16.jpg`,
  `assets/17.jpg`,
  `assets/18.jpg`,
  `assets/19.jpg`,
  `assets/20.jpg`,
  `assets/21.jpg`,
  `assets/22.jpg`,
  `assets/23.jpg`,
  `assets/24.jpg`,
  `assets/25.jpg`,
  `assets/26.jpg`,
  `assets/27.jpg`,
  `assets/28.jpg`,
  `assets/29.jpg`,
  `assets/30.jpg`,
  `assets/31.jpg`,
]

const stampsTag = document.querySelector(`div.stamps`)

function addStamps(x, y) {
  const img = document.createElement(`img`)
  img.setAttribute(`src`, stamps[number]);

  //The x, y that the stamps are positioned are relative to the stamps.div container, which starts at 50% of the window width which will cause the stamps to go off the page, unless you adjust by subtracting half of the width of the viewport
  img.style.left = x + `px`
  img.style.top = y + `px`


  stampsTag.appendChild(img)

  number = Math.floor(Math.random() * stamps.length);

}

document.addEventListener(`click`, function (event) {
  if (sticker == true) {
    addStamps(event.pageX, event.pageY)
    console.log(event.pageX + "," + event.pageY)
  }
})
