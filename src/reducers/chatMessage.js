import * as types from '../constants/actionTypes';

import {defaultState} from '../constants/defaultState';

import getMessageKey from '../utils/getMessageKey';

const initialState = localStorage.getItem('chat-state') !== null ? JSON.parse(localStorage.getItem('chat-state')) : defaultState;

export const chatMessageReducer = (state = (initialState), action) =>{
    let {from,to} = state;

    switch(action.type){
        case types.SEND_MESSAGE:

            let textMessageKey = getMessageKey(from,to);

            let newMessage = {
                ...state.messages
            }

            newMessage[textMessageKey] = [...state.messages[textMessageKey], action.message];

            localStorage.setItem('chat-state',JSON.stringify({...state,messages : newMessage}));

                return {
                    ...state,
                    messages : newMessage
                }
        default:
            return state;
    }
}