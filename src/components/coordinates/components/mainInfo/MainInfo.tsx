import React from 'react'
import { FIRST_ELEMENT_IN_ARRAY } from '../../../../constants'
import { CurrentDataType, CurrentInfoType } from '../../../../types'
import FirstLetterToUppercase from '../../../../utils/FirstLetterToUppercase'
import RoundNum from '../../../../utils/RoundNum'

import "./MainInfo.css"

type PropsType = {
    name: string
    country: string
    dayInfo: string
    current: CurrentDataType
    mainWeatherInfo: CurrentInfoType | undefined | null
    units: string
    setUnits: (units: string) => void
}

const MainInfo = (props: PropsType) => {
    return (
        <div className="container">
            <h1> {props.name} , {props.country} </h1>
            <h4> {props.dayInfo} • {FirstLetterToUppercase(props.current.weather[FIRST_ELEMENT_IN_ARRAY]?.description)}</h4>
            <div className="temperatureInfo">
                <img src={`http://openweathermap.org/img/wn/${props.mainWeatherInfo!.icon}@2x.png`} alt="" />
                <h1 className="temp">
                    {RoundNum(props.mainWeatherInfo!.temp)}°
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
    )
}

export default MainInfo