import React from 'react';
import { connect } from 'react-redux';
import { fetchAlerts } from '../../actions/async';

function loadData(props) {
  // const { alerts } = props;
  props.fetchAlerts();
}

class LogPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    loadData(this.props);
  }

  render() {
    return (
      <div>
        <p>Some logging information</p>
        <div>
          Status: { this.props.async.payload.status ? this.props.async.payload.status : 'fetching...' }
        </div>
        <br/><br/>
        <div>
          { this.props.async.payload.name ? 'Repo name: ' + this.props.async.payload.name : 'Now presenting this repo\'s name' }
        </div>
      </div>);
  }
}


LogPage.propTypes = {
  async: React.PropTypes.object,
};

const mapStateToProps = (state) => ({
  async: state.async,
});

const mapDispatchersToProps = {
  fetchAlerts,
};

export default connect(
  mapStateToProps,
  mapDispatchersToProps
)(LogPage);
