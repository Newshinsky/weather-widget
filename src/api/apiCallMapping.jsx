import * as coordinateActions from "../components/coordinates/actions/index"

import { CoordinateService } from "../services/CoordinateService";

const apiCallMapping = (action) => {
  const actionCallMap = {
    [coordinateActions.GET_COORDINATES_REQUEST]: CoordinateService.getCoordinate,
  }


  if (!actionCallMap[action.type]) {
    throw new Error("Not Mapped Action");
  }
  return actionCallMap[action.type]
}

export default apiCallMapping