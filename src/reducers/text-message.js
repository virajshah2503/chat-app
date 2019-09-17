import * as types from '../constants/actionTypes';

const defaultState = {
    messages : {
        'viraj_shah-chat_bot' : []
    },
    from : { id : 'viraj_shah', name : 'Viraj Shah'},
    to : { id : 'chat_bot', name : 'Chat Bot'}
};

export const textMessageReducer = (state = defaultState, action) =>{
    let {from,to} = state;

    switch(action.type){
        case types.SEND_MESSAGE:

            let textMessageKey = from.id + '-' + to.id;

            let newMessage = {
                ...state.messages
            }

            newMessage[textMessageKey] = [...state.messages[textMessageKey], action.message];

                return {
                    ...state,
                    messages : newMessage
                }
        default:
            return state;
    }
}