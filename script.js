async function getWeather() {
    const location = document.getElementById("locationInput").value;

    if (location === "") {
        alert("Please enter a city name");
        return;
    }

    const apiKey = "ace9193c8add461ab2d172614262004";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            alert("Location not found!");
            return;
        }

        document.getElementById("city").innerText = data.location.name + ", " + data.location.country;
        document.getElementById("temp").innerText = "Temperature: " + data.current.temp_c + "°C";
        document.getElementById("condition").innerText = "Condition: " + data.current.condition.text;
        document.getElementById("humidity").innerText = "Humidity: " + data.current.humidity + "%";

    } catch (error) {
        alert("Error fetching data");
        console.log(error);
    }
}