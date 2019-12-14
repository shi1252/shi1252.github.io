const body = document.querySelector("body");

const IMG_NUMBER = 4;

function paintImage(imgNum)
{
    const img = new Image();
    img.src = `images/${imgNum + 1}.jpg`;
    img.classList.add("bgImage");
    body.appendChild(img);
}

function Random()
{
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init()
{
    const rand = Random();
    paintImage(rand);
}

init();