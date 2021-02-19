class Weather{
    constructor(city){
        this.apikey = 'c13128fa272bc17ab8ed13912fa4f452';
        this.city = city;
        // this.state = state;
    }

    // fetching weather from api
    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&unit=metric&appid=${this.apikey}`);

        const responseData = await response.json();

        // return responseData.list;
    }

    // change location
    changeLocation(city){
        this.city = city;
    }
}