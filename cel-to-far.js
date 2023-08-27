
function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}
function convert_temp() {
    let value = document.getElementById("cel").value;
    var fahrenheit = celsiusToFahrenheit(value);
    document.getElementById('fahr').value = fahrenheit;
}
