// Temperature Conversion
document.getElementById("temperature").onclick = function () {
    let celsius = document.getElementById("celsius").value;
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit;
};

// Weight Conversion
document.getElementById("weight").onclick = function () {
    let kilo = document.getElementById("kilo").value;
    let pounds = kilo * 2.205;
    document.getElementById("pounds").value = pounds;
};

// Distance Conversion
document.getElementById("distance").onclick = function () {
    let km = document.getElementById("km").value;
    let miles = km / 1.609;
    document.getElementById("miles").value = miles;
};