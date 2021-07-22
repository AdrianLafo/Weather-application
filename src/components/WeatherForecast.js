import React from "react"

function WeatherForecast({ forecastInfo }) {
	return (
		<div className="container">
			<div className="row">
				{forecastInfo.map(({ date, day }, index) => {
					const { maxtemp_c, mintemp_c, condition } = day
					return (
						<div key={index} className="col-sm">
							<h4>
								{date.split("-")[2]}/{date.split("-")[1]}
							</h4>
							<img src={condition.icon} alt="" />
							<p>
								<span className="text-dark">{maxtemp_c}°C</span>
								/{" "}
								<span className="text-muted">
									{" "}
									{mintemp_c}°C
								</span>
							</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default WeatherForecast
