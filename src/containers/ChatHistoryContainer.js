import React, {Component} from 'react';
import {connect} from 'react-redux';

import MessagesList from '../components/MessagesList';
import ChatHistory from '../services/chatHistory';

class ChatHistoryContainer extends Component {
  componentDidMount() {
      this.scrollToBottom()
  }

  componentDidUpdate() {
      this.scrollToBottom()
  }

  scrollToBottom(){
      document.scrollingElement.scrollTop = document.getElementById('chat-window-container').scrollHeight;
  }

  render(){
    const {messages, from, messageList} = this.props;

    return (
      !(Object.keys(messageList).length === 0)
      ?
      <MessagesList
          messages = {messages}
          me = {from}
      />
      :
      ""
    )
  }
}

const mapStateToProps = (state) => ({
  messageList: state.messages,
  messages: ChatHistory(state),
  from: state.from.id
})

export default connect(mapStateToProps)(ChatHistoryContainer);