import React from "react"

function WeatherForecast({ forecastInfo }) {
	return (
		<div>
			{forecastInfo.map(({ date, day }, index) => {
				const { maxtemp_c } = day
				return <div key={index}>{maxtemp_c}</div>
			})}
		</div>
	)
}

export default WeatherForecast
