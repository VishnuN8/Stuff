const Degree = 9/5;
let Celsius;
let Fahrenheit;


document.getElementById("submit").onclick = function(){
    Celsius = document.getElementById("heat2").value;
    Celsius = Number(Celsius);
    Fahrenheit = (Celsius * Degree) + 32;
    document.getElementById("heat3").textContent = Fahrenheit;


}

