import React, { Dispatch, SetStateAction } from 'react'
import { CurrentDataType, CurrentInfoType, DailyDataType } from '../../../../types'
import AdditionalInfo from '../additionalInfo/AdditionalInfo'
import MainInfo from '../mainInfo/MainInfo'
import WeeklyItem from '../weeklyItem/WeeklyItem'
import "./WeatherWidget.css"



type PropsType = {
    country: string
    name: string
    daily: DailyDataType[]
    setMainWeatherInfo: Dispatch<SetStateAction<CurrentInfoType | undefined>>
    mainWeatherInfo: CurrentInfoType | undefined | null
    aqi: number
    dayInfo: string
    current: CurrentDataType
    abbreviateDayofWeek: string
    units: string
    errors: null | string
    ConvertTimestamp: (timesFtamp: number) => void
    debouncedChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
    setUnits: (units: string) => void
}


const WeatherWidget = React.memo((props: PropsType) => {
    return (
        <div className="weatherContainer">
            <div className="inputWrapper">
                <input
                    type="search"
                    onChange={props.debouncedChangeHandler}
                    placeholder="Enter the city"
                />
                {props.errors && <p className="errorMessage">City not found</p>}
            </div >
            {props.name && !props.errors
                ? <div className="weatherInfoWrapper">
                    <div className="mainInfoWrapper">
                        <MainInfo
                            name={props.name}
                            country={props.country}
                            dayInfo={props.dayInfo}
                            current={props.current}
                            mainWeatherInfo={props.mainWeatherInfo}
                            units={props.units}
                            setUnits={props.setUnits}
                        />
                        <AdditionalInfo
                            mainWeatherInfo={props.mainWeatherInfo}
                            current={props.current}
                            aqi={props.aqi}
                            units={props.units}
                        />
                    </div>
                    {<div className="weekInformation">
                        {
                            props.daily?.map((elem: DailyDataType, index: number) => {
                                return (
                                    <div key={elem.dt}>
                                        <WeeklyItem
                                            elem={elem}
                                            setCurrentInfo={props.setMainWeatherInfo}
                                            current={props.current}
                                            index={index}
                                        />
                                    </div>
                                )
                            }
                            )
                        }
                    </div>}
                </div>
                : ""
            }
        </div>
    )
})

export default WeatherWidget