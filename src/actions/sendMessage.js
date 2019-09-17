import * as types from '../constants/actionTypes';

export const sendMessage=(message) =>({
    type: types.SEND_MESSAGE,
    message
})

export const asyncSendMessage =(message) =>{
    return (dispatch, getState, send) =>{
        dispatch(sendMessage(message));
        send(sendMessage(message));
    }
}