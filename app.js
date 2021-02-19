//  initialize weather
const weather = new Weather('Nnewi');
// initialize UI
const ui = new UI();

// get weather on reload
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){
    weather.getWeather()
    .then(results => {
        ui.paint(results);
    })
    .catch(err => console.log(err));
}