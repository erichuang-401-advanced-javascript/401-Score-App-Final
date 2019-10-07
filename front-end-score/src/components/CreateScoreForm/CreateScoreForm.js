import React from 'react';
import { connect } from 'react-redux';
import {createScore} from '../../store/actions/scoreActions';

class CreateScoreForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      score: null,
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createScore(this.state);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.name}
          name='name'
          placeholder='name'
          onChange={this.handleChange}
        />
        <input
          type='number'
          value={this.state.score}
          name='score'
          placeholder='score'
          onChange={this.handleChange}
        />
        <button type='submit'>Create Score</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { createScore: (record) => {dispatch(createScore(record))}};
}

export default connect(null, mapDispatchToProps)(CreateScoreForm);
// export default CreateScoreForm