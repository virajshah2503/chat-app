import React from 'react';

const Message = ({data, from}) => {

    const messageType = (from === data.from.id ) ? "sent" : "receieved";
    const user = (from === data.from.id) ? data.from.name : "Chat Bot";

    return (
        <div className={"message " + messageType}>
            <h3 className="chat-user">{user} <small>{data.timestamp}</small></h3>
            <div className="chat-message">{data.messageText}</div>
        </div>
    )
}

export default Message;