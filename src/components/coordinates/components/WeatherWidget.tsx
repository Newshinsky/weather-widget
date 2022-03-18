import React from 'react'
import FirstLetterToUppercase from '../../../utils/FirstLetterToUppercase'
import GetAirQuality from '../../../utils/GetAirQuality'
import GetDirection from '../../../utils/GetDirection'
import RoundNum from '../../../utils/RoundNum'
import "./WeatherWidget.css"


const WeatherWidget = (props: any) => {
    return (
        <div className="weatherContainer">
            <div className="inputWrapper">
                <input
                    type="search"
                    onChange={props.debouncedChangeHandler}
                    placeholder="Enter the city"
                />
            </div >
            {props.name
                ? <div className="weatherInfoWrapper">
                    <div className="upperInfoWrapper">
                        <div className="leftInfoWrapper">
                            <h1> {props.name} , {props.country} </h1>
                            <h4> {props.dayinfo} • {FirstLetterToUppercase(props.current?.weather[0]?.description)}</h4>
                            <div className="temperatureInfo">
                                <img src={`http://openweathermap.org/img/wn/${props.currentInfo.icon}@2x.png`} alt="" />
                                <h1 className="temp">
                                    {RoundNum(props.currentInfo.temp)}°
                                </h1>
                                <button
                                    className={props.units === "metric" ? "active" : ""}
                                    onClick={() => props.setUnits("metric")}> C </button>
                                /
                                <button
                                    className={props.units === "imperial" ? "active" : ""}
                                    onClick={() => props.setUnits("imperial")}> F </button>
                            </div>
                        </div>

                        <div className="rightInfoWrapper">
                            <p> Humidity: {props.currentInfo.humidity}% </p>
                            <p> Air Quality: {GetAirQuality(props.aqi)}</p>
                            <p> Wind: {RoundNum(props.currentInfo.windSpend)} {props.units === "metric" ? "KPH" : "MPH"} {GetDirection(props.currentInfo.windDirection)}</p>
                        </div>
                    </div>

                    {<div className="weekInformation">
                        {
                            props.daily?.map((e: any, i: any) =>
                                <div key={i}
                                    onClick={() => {
                                        props.setCurrentInfo({
                                            icon: e.weather[0]?.icon,
                                            temp: e.temp.max,
                                            humidity: e.humidity,
                                            windSpend: e.wind_speed,
                                            windDirection: e.wind_deg,
                                        })
                                    }}
                                    className="dailyWrapper">
                                    <h2> {props.ConvertTimestamp(e.dt).abbreviateDayofWeek} </h2>
                                    <img src={`http://openweathermap.org/img/wn/${e?.weather[0]?.icon}@2x.png`} alt="" />
                                    <h3> {RoundNum(e.temp.max)} °</h3>
                                    <h5>{RoundNum(e.temp.min)} °</h5>
                                </div>)
                        }
                    </div>}
                </div>

                : ""
            }
        </div>
    )
}

export default WeatherWidget