import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MissionsPage from './components/MIssionsPage';
import { connect } from 'react-redux'
import { editMission } from './redux/actions';

function App(props) {

  const onStatusChange = (id, status) => {
    props.dispatch(editMission(id, { status }))
  }

  return (
    <div>
      <MissionsPage missions={props.missions} onStatusChange={onStatusChange} />
    </div>
  );
}

const mapStateToProps = state => ({
  missions: state.missions
})

export default connect(mapStateToProps)(App);
