import React from 'react';

/*show chats between chat bot and user*/
import ChatHistoryContainer from '../containers/ChatHistoryContainer';

/*send message to bot form*/

import SendMessageContainer from '../containers/SendMessageContainer';

import HeaderContainer from '../containers/HeaderContainer';

import '../assets/css/index.css';

const App = (props) => {
    return (
        <div id="main-container">
        	<HeaderContainer/>
        	<div id="chat-window-container">
        		<ChatHistoryContainer/>
        		<div className="message-form">
        			<div className="container">
        				<SendMessageContainer/>
        			</div>
        		</div>
        	</div>
        </div>
    )
}

export default App;