const API_KEY = "d358c8cca05a44bff47ca1f25f12370e";
const COORDS = 'coords';

const weather = document.querySelector(".js-weather");

function getWeather(lat, lon)
{
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(
        function(response)
        {
            return response.json();
    }).then(
        function(json)
        {
            const temp = json.main.temp;
            const place = json.name;
            weather.innerText = `${temp} @ ${place}`;
        });
}

function saveCoords(coordsObj)
{
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(getCurrentPosition)
{
    const coordsObj =
    {
        latitude: getCurrentPosition.coords.latitude,
        longitude: getCurrentPosition.coords.longitude
    };
    console.log(coordsObj);
    saveCoords(coordsObj);
    getWeather(coordsObj.latitude, coordsObj.longitude);
}

function handleGeoError()
{
    console.log("Can't access geo location");
}

function askForCoords()
{
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords()
{
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null)
    {
        askForCoords();
    }
    else
    {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init()
{
    loadCoords();
}

init();