import React, { useState } from "react"
import "./App.css"
import WeatherDisplay from "./components/WeatherDisplay.js"
import WeatherInputs from "./components/WeatherInputs.js"
import { BASE_URL, API_KEY } from "./api"

function App() {
	const [loadDisplay, setLoadDisplay] = useState(false)
	const [weatherData, setWeatherData] = useState({})

	const getWeatherInfo = async (city) => {
		const urlCurrentWeather = `${BASE_URL}/current.json?key=${API_KEY}&q=${city}`
		const response = await fetch(urlCurrentWeather)
		const data = await response.json()
		const newWeatherData = {
			city: data.location.name,
			region: data.location.region,
			country: data.location.country,
			tempC: data.current.temp_c,
			tempF: data.current.temp_f,
			conditionIcon: data.current.condition.icon,
		}
		setWeatherData({ ...newWeatherData })
		setLoadDisplay(true)
	}

	return (
		<div className="card">
			<WeatherInputs getWeatherInfo={getWeatherInfo} />
			{loadDisplay ? (
				<WeatherDisplay {...weatherData} />
			) : (
				<h1>No Info</h1>
			)}
		</div>
	)
}

export default App
