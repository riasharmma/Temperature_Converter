
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
function myFunction() {
    let value = document.getElementById("fahr").value;
    var celsius = fahrenheitToCelsius(value);
    document.getElementById('cel').value = celsius;
}
