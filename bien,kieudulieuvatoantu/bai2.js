function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32 ;
}

let celsius = prompt("Nhập nhiệt độ (°C):");

if (celsius !== null) {
    let fahrenheit = convertCelsiusToFahrenheit(parseFloat(celsius));
    alert(`Nhiệt độ ${celsius}°C tương đương ${fahrenheit.toFixed(2)}°F`);
}