import { REQUEST_POSTFIXES } from "../constants/RequestPostfixes";


const CreateActionsWithPostfix = (action, postfix, response) => {
    const { type: actionType, payload: actionPayload } = action;

    const newActionType = actionType.slice(0, actionType.length - REQUEST_POSTFIXES.REQUEST.length) + postfix

    return {
        type: newActionType,
        payload: {
            actionPayload,
            response: response
        }
    }
}

export default CreateActionsWithPostfix