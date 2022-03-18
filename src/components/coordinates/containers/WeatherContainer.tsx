import { debounce } from 'lodash'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FIRST_ELEMENT_IN_ARRAY } from '../../../constants'
import { CurrentInfoType } from '../../../types'
import ConvertTimestamp from '../../../utils/ConvertTimestamp'
import { GET_COORDINATES_REQUEST } from '../actions'
import WeatherWidget from '../components/weatherWidget/WeatherWidget'
import { weatherDataSelector, weatherErrorSelector } from '../selectors'








const WeatherContainer = () => {

    const dispatch = useDispatch()

    const { country, name, current, daily, aqi } = useSelector(weatherDataSelector)
    const errors = useSelector(weatherErrorSelector)
    const { dayOfWeek, hours, ampm, days, abbreviateDayofWeek } = ConvertTimestamp(current.dt)

    const [mainWeatherInfo, setMainWeatherInfo] = useState<CurrentInfoType>()
    const [countryName, setCountryName] = useState("")
    const [units, setUnits] = useState("metric")
 
    useEffect(() => {
        if (!countryName) {
            return
        }
        dispatch(GET_COORDINATES_REQUEST({ countryName, units }))
    }, [units, dispatch, countryName])

    useEffect(() => {
        setMainWeatherInfo({
            icon: current.weather[FIRST_ELEMENT_IN_ARRAY].icon,
            temp: current.temp,
            humidity: current.humidity,
            windSpend: current.wind_speed,
            windDirection: current.wind_deg,
        })
    }, [current.weather, current.temp, current.humidity, current.wind_speed, current.wind_deg])

    const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setCountryName(e.target.value)
    }, [])

    const debouncedChangeHandler = useCallback(debounce(onChangeHandler, 500), [])

    let dayInfo = `${days[dayOfWeek]} ${hours}${ampm} `

    return (
        <WeatherWidget
            country={country}
            name={name}
            daily={daily}
            setMainWeatherInfo={setMainWeatherInfo}
            mainWeatherInfo={mainWeatherInfo}
            debouncedChangeHandler={debouncedChangeHandler}
            dayInfo={dayInfo}
            current={current}
            abbreviateDayofWeek={abbreviateDayofWeek}
            ConvertTimestamp={ConvertTimestamp}
            aqi={aqi}
            setUnits={setUnits}
            units={units}
            errors={errors}
        />
    )
}

export default WeatherContainer