//** MODULE
const UI = (function (){
    let menu = document.querySelector("#menu-container");
    const showApp = () => {
        document.querySelector("#app-loader")
        .classList.add('display-none');
        document.querySelector("main").removeAttribute('hidden');
    };
    
    const loadApp = () => {
        document.querySelector("#app-loader")
        .classList.remove('display-none');
        document.querySelector("main").setAttribute('hidden','true');
    };
    
    const _showMenu =() => menu.style.right= 0;
    
    const _hideMenu =() => menu.style.right= '-65%';
    
    const _toggleHourlyWeather = () => {
        let hourlyWeather = document.querySelector("#hourly-weather-wrapper"),
            arrow = document.querySelector("#toggle-hourly-weather").children[0],
            visible = hourlyWeather.getAttribute("visible"),
            dailyWeather = document.querySelector("#daily-weather-wrapper");
    
    if(visible == 'false'){
        hourlyWeather.setAttribute('visible','true');
        hourlyWeather.style.bottom = 0;
        arrow.style.transform = "rotate(180deg)";
        dailyWeather.style.opacity = 0;
    } else if(visible == 'true'){
        hourlyWeather.setAttribute('visible','false');
        hourlyWeather.style.bottom = '-100%';
        arrow.style.transform = "rotate(0deg)";
        dailyWeather.style.opacity = 1;
    } else console.error("Unknown state of the hourly weather panel and visible attribute");       
    };
    
    
    document.querySelector("#open-menu-btn").addEventListener('click',_showMenu);
    document.querySelector("#close-menu-btn").addEventListener('click',_hideMenu);
    
    document.querySelector("#toggle-hourly-weather").addEventListener('click',_toggleHourlyWeather);
    
    
    return{
        showApp,
        loadApp
    };
})();

//** get location
const GETLOCATION = (function () {

    let location;

    const locationInput = document.querySelector("#location-input"),
        addCityBtn = document.querySelector("#add-city-btn");


    const _addCity = () => {
        location = locationInput.value;
        locationInput.value = "";
        addCityBtn.setAttribute('disabled', 'true');
        addCityBtn.classList.add('disabled');

        // get weather data
        WEATHER.getWeather(location);
    };

    locationInput.addEventListener('input', function () {
        let inputText = this.value.trim();

        if (inputText != '') {
            addCityBtn.removeAttribute('disabled');
            addCityBtn.classList.remove('disabled');
        } else {
            addCityBtn.setAttribute('disabled', 'true');
            addCityBtn.classList.add('disabled');
        }
    });

    addCityBtn.addEventListener('click', _addCity);
})();

//** getting weather data from dark sky api

const WEATHER = (function(){
    const darkSkyKey = '5316e38e0e7585a469d63096fea53517';
    const geocoderKey = 'a73007ade8834599b607f2d044b3006a';
    
    
    const _getGeocodeURL = (location) => `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${geocoderKey}`;
    
    const _getDarkSkyURL = (lat, lng) => `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${darkSkyKey}/${lat},${lng}`;
    
    const _getDarkSkyData = (url) => {
        axios.get(url)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.err(err);
            });
    };
    
    const getWeather = (location) => {
        UI.loadApp();
        
        let geocodeURL = _getGeocodeURL(location);
        
        axios.get(geocodeURL)
            .then( (res) => {
                let lat = res.data.results[0].geometry.lat,
                    lng = res.data.results[0].geometry.lng;
                    
                let darkskyURL = _getDarkSkyURL(lat, lng) ;
                
                _getDarkSkyData(darkskyURL);
            })
            .catch( (err) => {
                console.log(err);
            });
    };
    
    return{
        getWeather
    };
    
})();

//** init

window.onload = function(){
    UI.showApp();
};