import React, { useState } from "react"

function WeatherInputs({ getWeatherInfo }) {
	const [city, setCity] = useState("")
	const handleSubmit = (e) => {
		e.preventDefault()
		getWeatherInfo(city)
	}

	return (
		<div className="container">
			<div className="">
				<form onSubmit={handleSubmit} action="">
					<input
						type="text"
						name="city"
						value={city}
						onChange={(e) => setCity(e.target.value)}
						placeholder="Enter your city..."
					/>
					<button type="submit">Get Weather</button>
				</form>
			</div>
		</div>
	)
}

export default WeatherInputs
