import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

/*
App
- input: sets location for user 
-- city

<label for="name">Name (4 to 8 characters):</label>

<input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" />

- button: activate fetch the info that user puts in above
- display: user must be able to see weather from their input
-- e.g. state temp in degrees F
*/

// Current Weather API Endpoint
// http://api.weatherstack.com/current?access_key=366377bccab258eb9800cbc672333e05&query=New%20York
// http://api.weatherstack.com/current
//     ? access_key = YOUR_ACCESS_KEY
//     & query = New York

// // optional parameters:

//     & units = f
//     & language = en
//     & callback = MY_CALLBACK

function App() {
  const [input, setInput] = useState("New York");
  const [weather, setWeather] = useState("New York");

  const weatherApikey = "f3b74265c9f300ffe539eed2a54a02b5";
  // const urlforApi = `http://f3b74265c9f300ffe539eed2a54a02b5api.weatherstack.com/current?access_key=${weatherApikey}&query=${input}&units=f`;
const urlforApi = `https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=${weatherApikey}&units=metric;`

 
  async function getWeather(cityName) {
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  //   const response = await fetch(urlforApi); // Gets the data from the inputted URL
  //   const data = await response.json(); // Turns the data from a JSON string into a useable JS object
  //   console.log(data);
  //   setWeather(data);

  // }

  const url =
    "https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  function handleSubmit(e) {
    e.preventDefault();
    getWeather(input);
  }

  function handleChange(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>City Name (1 to 100 characters):</label>
        <input type="text" id="cityName" size="25" onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
