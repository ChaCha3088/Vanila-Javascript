const API_KEY = 'd7b61c090e813c70c90d8cc01c81e400';

function onGeoOk(position) {
    const lat = position.coords.latitude;
    console.log(lat);
    const long = position.coords.longitude;
    console.log(long);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat={${lat}}&lon={${long}}&appid={c6ff18221a167b9ba981bb72a6797912}&units=metric`;
    const result = fetch(url);
    result.then(response => response.json()).then(data => {
        console.log(data);
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        weather.innerText = `${data.weather[0].main1} / ${data.main.temp}°C`;
        city.innerText = data.name;
    });

}

function onGeoError() {
    alert('Can\'t find your location.');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);