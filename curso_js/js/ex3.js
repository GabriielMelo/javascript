document.getElementById('converter').onclick = 
function fahrenheit() {
    var celsius = document.getElementById("temp_celsius").value;
    var fahrenheit = (9 * celsius / 5) + 32;
    document.getElementById('temp_fahr').innerHTML = fahrenheit;
    
}
