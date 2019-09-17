import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from '../components/Header';

class HeaderContainer extends Component {
  render(){
    const to = this.props.to;

    return (
      <Header to={to}/>
    );
  }
}

const mapStateToProps = (state) => ({
  to : state.to.name
})

export default connect(mapStateToProps)(HeaderContainer);