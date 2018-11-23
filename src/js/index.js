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

//** init

window.onload = function(){
    UI.showApp();
};