import React from 'react';
import Message from './message';

const MessageList = ({from, messages, me}) => {
    return (
        <div className="chat-history">
            {
              messages && messages.map((message) => {
                return <Message key ={message.messageid} data={message} from={me}/>
              })
            }
        </div>
    )
}

export default MessageList;
