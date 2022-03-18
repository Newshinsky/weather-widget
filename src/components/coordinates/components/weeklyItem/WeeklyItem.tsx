import { Dispatch, memo, SetStateAction } from "react"
import { FIRST_ELEMENT_IN_ARRAY } from "../../../../constants"
import { CurrentDataType, CurrentInfoType, DailyDataType } from "../../../../types"
import ConvertTimestamp from "../../../../utils/ConvertTimestamp"
import RoundNum from "../../../../utils/RoundNum"
import "./WeeklyItem.css"

type PropsType = {
  elem: DailyDataType,
  setCurrentInfo: Dispatch<SetStateAction<CurrentInfoType | undefined>>
  current: CurrentDataType
  index: number
}

const WeeklyItem = memo((props: PropsType) => {

  return (
    <>
      <div
        onClick={() => {
          props.setCurrentInfo({
            icon: props.elem.weather[FIRST_ELEMENT_IN_ARRAY]?.icon,
            temp: props.index === FIRST_ELEMENT_IN_ARRAY ? props.current.temp : props.elem.temp.max,
            humidity: props.elem.humidity,
            windSpend: props.elem.wind_speed,
            windDirection: props.elem.wind_deg,
          })
        }}
        className="weekItem"
        key={props.elem.dt}
      >
        <h2> {ConvertTimestamp(props.elem.dt).abbreviateDayofWeek} </h2>
        <img src={`http://openweathermap.org/img/wn/${props.elem.weather[FIRST_ELEMENT_IN_ARRAY].icon}@2x.png`} alt="" />
        <h3> {RoundNum(props.elem.temp.max)} °</h3>
        <h5>{RoundNum(props.elem.temp.min)} °</h5>
      </div>
    </>
  )
})

export default WeeklyItem