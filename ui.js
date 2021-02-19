class UI {
    constructor (){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.humidity = document.getElementById('w-humidity');
        this.feels_like = document.getElementById('w-feels_like');
        this.icon = document.getElementById('w-icon');
        this.tempre = document.getElementById('w-tempre');
        this.details = document.getElementById('w-details');
    }

    paint(weather){
        this.location.textContent = weather.sys.country;
        this.desc.textContent = weather.weather.description;
        this.icon.setAttribute('src', weather.weather.icon);
        this.tempre = weather.main.temp +" °c"
        this.feels_like = `Feels_Like: ${weather.main.feels_like}`;
        this.humidity = `Humidity: ${weather.main.humidity}`;
    }
}