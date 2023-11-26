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
  const weatherApikey = "366377bccab258eb9800cbc672333e05";
  const urlforApi = `http://api.weatherstack.com/current?access_key=${weatherApikey}&query=${input}&units=f`;
  const [weather, setWeather] = useState(null);

  async function getWeather(cityName) {
    const response = await fetch(urlforApi); // Gets the data from the inputted URL
    const data = await response.json(); // Turns the data from a JSON string into a useable JS object
    console.log(data);
    setWeather(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getWeather(input);
  }

  function handleChange(e) {
    e.preventDefault ();
    setInput (e.target.value)

  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>City Name (1 to 100 characters):</label>
        <input type="text" id="cityName" size="25" onChange={handleChange}/>
        <input type="submit"/>
      </form>
    </div>
  );
}


export default App;
