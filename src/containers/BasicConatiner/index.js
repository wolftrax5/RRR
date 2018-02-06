import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ExampleActions from '../../redux/example/exampleActions';

class BasicConatiner extends Component {

  componentDidMount () {
    // usiing the props actions setted on Example actions and mapDispatchToProps
    this.props.actions.saiHi({hello: 'Hiii', planet:'Mart'});
  }

  render() {
    let { example } = this.props;
    var greetings = `${example.hello}, ${example.planet}`;
    return (
      <div>
        {greetings}
      </div>
    );
  }
}

BasicConatiner.contextTypes = {
  store: PropTypes.object.isRequired,
};

BasicConatiner.propTypes = {
  actions: PropTypes.object.isRequired,
};
//  setting the container with the state as props
function mapStateToProps(state) {
  return {
    example: state.example,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ExampleActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasicConatiner);
