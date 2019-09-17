import React, {Component} from 'react';
import {connect} from 'react-redux';

import MessageList from '../components/message-list';
import ChatHistory from '../services/chathistory';

class ChatHistoryContainer extends Component {
  constructor(){
    super()
    this.chathistoryRef = React.createRef();
  }

  componentDidUpdate(){

  }

  render(){
    const {messages, from, messageList} = this.props;
    return (
      !(Object.keys(messageList).length === 0)
      ?
      <MessageList
          messages = {messages}
          me = {from}
      />
      :
      <div className = "blank">
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  messageList: state.messages,
  messages: ChatHistory(state),
  from: state.from.id
})

export default connect(mapStateToProps)(ChatHistoryContainer);