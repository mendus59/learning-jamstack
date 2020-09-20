function success(pos) {
    const url = `/.netlify/functions/weatherapi?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=imperial`;
    
    fetch(url)
        .then((response) => {
            return response.json();
        })

        .then((data) => {
            document.querySelector('#city').textContent = data.name;
            document.querySelector('#temperature').textContent = data.main.temp;
            document.querySelector('#main').textContent = data.weather[0].main;
            document.querySelector('#description').textContent = data.weather[0].description;

            document.querySelector('#weather').classList.remove('hidden');
            console.log('data: ', data);
        });
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(success, error);
}