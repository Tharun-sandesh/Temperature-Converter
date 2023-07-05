/*------------to get access---------*/
let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');
let kelvin = document.getElementById('kelvin');


/*-----------to keep track both values-----*/

celsius.oninput = () => {
    fahrenheit.value = ((parseFloat(celsius.value) * 9) / 5) + 32;
    kelvin.value = (parseFloat(celsius.value) + 273.15);
};



fahrenheit.oninput = () => {
    celsius.value = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
    kelvin.value = (((parseFloat(fahrenheit.value) - 273.15) * 9) / 5) + 32;
};



kelvin.oninput = () => {
    celsius.value = (parseFloat(kelvin.value) - 273.15);
    fahrenheit.value = (((parseFloat(kelvin.value) - 273.14) * 9 / 5) + 32);
};