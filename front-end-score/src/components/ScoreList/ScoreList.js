import React from 'react';
import { connect } from 'react-redux';
import { fetchScores } from '../../store/actions/scoreActions';
import Score from '../Score/Score';

class ScoreList extends React.Component {

  componentDidMount(){
    this.props.fetchScores();
  }
  
  render() {
    return(
      <React.Fragment>
        <ul>
          {
            this.props.scorelist.map((record, idx) => {
              return <Score id={record._id} name={record.name} score={record.score} key={idx}/>
            })
          }
        </ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    scorelist: state.scoreReducer.scorelist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchScores: () => {dispatch(fetchScores())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreList);