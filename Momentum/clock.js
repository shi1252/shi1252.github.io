const clockContainer = document.querySelector(".js-clock"),
    clockTitle = document.querySelector(".js-title");

function getTime()
{
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    clockTitle.innerText = `${hours > 9 ? hours : `0${hours}`}:${minutes > 9 ? minutes : `0${minutes}`}:${seconds > 9 ? seconds : `0${seconds}`}`;
}

function init()
{
    getTime();
    setInterval(getTime, 1000);
}

init();