import { REQUEST_POSTFIXES } from "../constants/RequestPostfixes";

export type CreateActionsWithPostfixType = {
    type: string,
    payload?: {}
}

const CreateActionsWithPostfix = (action: CreateActionsWithPostfixType, postfix: string, response: {}) => {
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