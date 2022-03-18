import { REQUEST_POSTFIXES } from "../constants/RequestPostfixes"

type ApiCallActionType = {
  type: string,
}

const IsApiCallAction = (action: ApiCallActionType) => {
  return action.type.endsWith(REQUEST_POSTFIXES.REQUEST)
}

export default IsApiCallAction