import React, { useState } from "react"

function WeatherInputs({ getWeatherInfo }) {
	const [city, setCity] = useState("")
	const handleSubmit = (e) => {
		e.preventDefault()
		getWeatherInfo(city)
	}

	return (
		<div className="container">
			<div className="row">
				<form onSubmit={handleSubmit} action="">
					<div className="form-group">
						<input
							className="form-control"
							type="text"
							name="city"
							value={city}
							onChange={(e) => setCity(e.target.value)}
							placeholder="Enter city"
						/>
					</div>
					<div className="form-group pt-3">
						<button className="btn btn-primary" type="submit">
							Get Weather
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default WeatherInputs
