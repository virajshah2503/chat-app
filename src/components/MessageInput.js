import React from 'react';

const MessageInput = ({handleSubmit, handleChange, value}) => {
    return (
        <form className="form-horizontal" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-sm-10 col-xs-8">
                    <input type="text"
                           className="form-control"
                           placeholder="Type a Message"
                           value={value}
                           onChange={handleChange}
                    />
                </div>
                <div className="col-sm-2 col-xs-4">
                    <button type="submit" className="btn btn-success btn-block">Send</button>
                </div>
            </div>
        </form>
    )
}

export default MessageInput;
