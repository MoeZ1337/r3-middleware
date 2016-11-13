import React from 'react';
import { connect } from 'react-redux';
import { changeName } from '../../actions/alerts';


function loadData() {}

class AlertPage extends React.Component {
  constructor(props) { super(props); }

  componentWillMount() { loadData(this.props); }

  render() {
    let inputID;
    let inputName;
    return (
      <div>
        <table>
          <thead><tr><td>Id</td><td>Name</td></tr></thead>
          <tbody>
            {this.props.alerts.map((alert) =>
              <tr key={alert.id}>
                <td>{alert.id}</td>
                <td>{alert.name}</td>
              </tr>
            )}
          </tbody>
        </table>
        <input ref={node => inputID = node} type="number"/>
        <input ref={node => inputName = node} type="text"/>
        <button
          onClick={() =>
            this.props.changeName(
              parseInt(inputID.value, 10),
              inputName.value
            )
          }
        >Submit</button>
      </div>
    );
  }
}

AlertPage.propTypes = {
  alerts: React.PropTypes.array,
  changeName: React.PropTypes.func,
};

const mapStateToProps = (state) => ({
  alerts: state.alerts,
});

const mapDispatchersToProps = {
  changeName,
};

export default connect(
  mapStateToProps,
  mapDispatchersToProps
)(AlertPage);
