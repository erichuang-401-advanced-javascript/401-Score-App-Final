import React from 'react';
import ScoreList from '../ScoreList/ScoreList';
import CreateScoreForm from '../CreateScoreForm/CreateScoreForm';
import GetBiggerThanForm from '../GetBiggerThanForm/GetBiggerThanForm';

class Landing extends React.Component {

  render() {
    return(
      <React.Fragment>
        <h1>HIGH SCORES</h1>
        <ScoreList/>
        <CreateScoreForm/>
        <GetBiggerThanForm/>
      </React.Fragment>
    );
  }
}

export default Landing;
