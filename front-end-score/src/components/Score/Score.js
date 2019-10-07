import React from 'react';
import { connect } from 'react-redux';
import {deleteScore} from '../../store/actions/scoreActions';

class Score extends React.Component {

  handleDelete = (event) => {
    this.props.deleteScore(event.target.name);
  }

  render() {
    return(
      <li>
        {`${this.props.name} ------ ${this.props.score}` }
        <button name={this.props.id} onClick={this.handleDelete}>Delete</button>
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteScore: (id) => {dispatch(deleteScore(id))}
  }
}

export default connect(null, mapDispatchToProps)(Score);