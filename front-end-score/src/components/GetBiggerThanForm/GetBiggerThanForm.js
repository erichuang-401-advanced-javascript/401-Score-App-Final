import React from 'react';
import { connect } from 'react-redux';
import { getBigger } from '../../store/actions/getbiggerformActions';

class GetBiggerThanForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      number: '',
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.getBigger(this.state.number);
  }

  render() {
    return(
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
            type='number'
            value={this.state.number}
            name='number'
            placeholder='Find scores larger than this'
            onChange={this.handleChange}
          />
          <button type='submit'>Get Score</button>
        </form>
        { this.props.noBiggy ? <p>No scores like that exist</p> : null }
        { this.props.bigList.length
          ? <React.Fragment>
              <h3>Score Results</h3>
              <ul>
                {this.props.bigList.map((record,idx) => {
                  return <li key={idx}>{`${record.name} -- ${record.score}`}</li>
                })}
              </ul>
            </React.Fragment>
          : null
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bigList: state.getBiggerReducer.scorelist,
    noBiggy: state.getBiggerReducer.noBiggy
  }
}

const mapDispatchToProps = (dispatch) => {
  return { getBigger: (number) => {dispatch(getBigger(number))}};
}

export default connect(mapStateToProps, mapDispatchToProps)(GetBiggerThanForm);
// export default CreateScoreForm