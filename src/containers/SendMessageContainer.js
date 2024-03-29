import React, {Component} from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid';
import MessageInput from '../components/MessageInput';
import {asyncSendMessage} from '../actions/sendMessage';

class SendMessageContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) =>{
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      event.preventDefault();
      this.props.sendMessage(this.state, this.props.from, this.props.to);
      this.setState({value: ""})
    }

    render() {
      const {messageList} =this.props;
      return (
        !(Object.keys(messageList).length === 0)
        ?
        <MessageInput
            value = { this.state.value }
            handleChange = { this.handleChange }
            handleSubmit = { this.handleSubmit }
        />
        :
        ""
      );
    }
  }


  const mapStateToProps =(state) =>{
    return {
      to: state.to,
      from: state.from,
      messageList : state.messages
    }
  }

  const mapDispatchToProps = ( dispatch ) => {
    return {
    sendMessage: (state, from, to) => {
                    if(state.value.trim() !== ''){
                        var messageFormat = {
                        messageText : state.value,
                        messageid : uuid(),
                        from : from,
                        to : to,
                        timestamp : new Date().getHours() +":"+new Date().getMinutes()
                        }
                        dispatch(asyncSendMessage(messageFormat))
                    }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendMessageContainer);