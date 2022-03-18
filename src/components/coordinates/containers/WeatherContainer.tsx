import { debounce } from 'lodash'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ConvertTimestamp from '../../../utils/ConvertTimestamp'
import { GET_COORDINATES_REQUEST } from '../actions'
import WeatherWidget from '../components/WeatherWidget'
import { coordinatesSelector } from '../selectors'






const CoordinateContainer = () => {

    const dispatch = useDispatch()

    const { country, name, current, isLoading, daily, aqi } = useSelector(coordinatesSelector)
    const { dayOfWeek, hours, ampm, days, abbreviateDayofWeek } = ConvertTimestamp(current.dt)

    const [currentInfo, setCurrentInfo] = useState({})
    const [countryName, setCountryName] = useState("")
    const [units, setUnits] = useState("metric")

    useEffect(() => {
        dispatch(GET_COORDINATES_REQUEST({ countryName, units }))
    }, [units, dispatch, countryName])

    useEffect(() => {
        setCurrentInfo({
            icon: current.weather[0].icon,
            temp: current.temp,
            humidity: current.humidity,
            windSpend: current.wind_speed,
            windDirection: current.wind_deg,
        })
    }, [current.weather, current.temp, current.humidity, current.wind_speed, current.wind_deg])

    const onChangeHandler = useCallback((e: any) => {
        const currentNameCountry = e.target.value
        setCountryName(currentNameCountry)
    }, [])

    const debouncedChangeHandler = useCallback(debounce(onChangeHandler, 500), [])

    let dayinfo = `${days[dayOfWeek]} ${hours}${ampm} `

    return (
        <WeatherWidget
            country={country}
            name={name}
            isLoading={isLoading}
            daily={daily}
            setCurrentInfo={setCurrentInfo}
            currentInfo={currentInfo}
            debouncedChangeHandler={debouncedChangeHandler}
            dayinfo={dayinfo}
            current={current}
            abbreviateDayofWeek={abbreviateDayofWeek}
            ConvertTimestamp={ConvertTimestamp}
            aqi={aqi}
            setUnits={setUnits}
            units={units}
        />
    )
}

export default CoordinateContainer