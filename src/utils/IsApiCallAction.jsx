import { REQUEST_POSTFIXES } from "./../constants/RequestPostfixes"


const IsApiCallAction = (action) => {
  return action.type.endsWith(REQUEST_POSTFIXES.REQUEST)
}

export default IsApiCallAction