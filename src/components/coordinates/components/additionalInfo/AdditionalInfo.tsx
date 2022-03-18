import React from 'react'
import { CurrentDataType, CurrentInfoType } from '../../../../types'
import GetAirQuality from '../../../../utils/GetAirQuality'
import GetDirection from '../../../../utils/GetDirection'
import RoundNum from '../../../../utils/RoundNum'

type PropsType = {
    mainWeatherInfo: CurrentInfoType | undefined | null
    current: CurrentDataType
    aqi: number
    units: string
}

const AdditionalInfo = (props: PropsType) => {
    return (
        <div className="AdditionalInfoWrapper">
            <p> Humidity: {props.mainWeatherInfo?.humidity}% </p>
            {props.current.temp === props.mainWeatherInfo?.temp
                ? <p>
                    Air Quality: {GetAirQuality(props.aqi)}
                </p>
                : ""}
            <p> Wind: {RoundNum(props.mainWeatherInfo!.windSpend)} {props.units === "metric" ? "KPH" : "MPH"} {GetDirection(props.mainWeatherInfo!.windDirection)}</p>
        </div>

    )
}

export default AdditionalInfo