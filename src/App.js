import React, { useState } from "react"
import "./App.css"
import WeatherDisplay from "./components/WeatherDisplay.js"
import WeatherInputs from "./components/WeatherInputs.js"
import { BASE_URL, API_KEY } from "./api"

function App() {
	const [weatherData, setWeatherData] = useState({})

	const getWeatherInfo = async (city) => {
		const url = `${BASE_URL}/current.json?key=${API_KEY}&q=${city}`
		const response = await fetch(url)
		const data = await response.json()
		setWeatherData({
			temp_c: data.current.temp_c,
		})
	}
	console.log(weatherData)

	return (
		<div className="container">
			<WeatherInputs getWeatherInfo={getWeatherInfo} />
			{/* <WeatherDisplay {...data} /> */}
		</div>
	)
}

export default App
