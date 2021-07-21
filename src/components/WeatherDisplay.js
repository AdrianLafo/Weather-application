import React, { useState, useEffect } from "react"
import WeatherForecast from "./WeatherForecast"
import { BASE_URL, API_KEY } from "../api"
const forecastDays = 7

function WeatherDisplay({
	city,
	country,
	region,
	tempF,
	tempC,
	conditionIcon,
}) {
	const [forecastInfo, setForecastInfo] = useState([])
	const [showForecast, setShowForecast] = useState(false)

	const getForecastInfo = async () => {
		const urlForecastWeather = `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${forecastDays}`
		const response = await fetch(urlForecastWeather)
		const data = await response.json()
		setForecastInfo(data.forecast.forecastday)
	}

	useEffect(() => {
		getForecastInfo()
	}, [])

	return (
		<section>
			<div>
				<h3>
					{city} / {region} / {country}
				</h3>
				<img src={conditionIcon} alt="" />
				<h4>
					{tempC}°C / {tempF}°F
				</h4>
				<button onClick={() => setShowForecast(true)}>
					Show Forecast
				</button>
			</div>
			<div className="card">
				{showForecast ? (
					<WeatherForecast forecastInfo={forecastInfo} />
				) : (
					<h1>no forecast</h1>
				)}
			</div>
		</section>
	)
}

export default WeatherDisplay
