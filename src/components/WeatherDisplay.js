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

	const getForecastInfo = async () => {
		const urlForecastWeather = `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${forecastDays}`
		const response = await fetch(urlForecastWeather)
		const data = await response.json()
		setForecastInfo(data.forecast.forecastday)
	}

	useEffect(() => {
		getForecastInfo()
	})

	return (
		<div className="pt-3">
			<div className="">
				<h3 className="text-center">
					{city} / {region} / {country}
				</h3>
				<div className="text-center">
					<img src={conditionIcon} alt="" className="text-center" />
				</div>
				<h4 className="text-center">
					{tempC}°C / {tempF}°F
				</h4>
			</div>
			<div className="card">
				<WeatherForecast forecastInfo={forecastInfo} />
			</div>
		</div>
	)
}

export default WeatherDisplay
