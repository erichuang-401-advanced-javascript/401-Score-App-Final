import superagent from 'superagent';

const url = 'http://localhost:8080';

function helpSort(array){
  return array.sort((a, b) => {
    return b.score - a.score;
  });
}

const FETCH_SCORES = (scorelist) => {
  return {
    type: 'FETCH_SCORES',
    payload: scorelist
  }
}

const DELETE_SCORE = (scorelist) => {
  return {
    type: 'DELETE_SCORE',
    payload: scorelist
  }
}

const CREATE_SCORE = (scorelist) => {
  return {
    type: 'CREATE_SCORE',
    payload: scorelist
  }
}

export const fetchScores = () => {
  return (dispatch) => {
    return superagent
      .get(`${url}/scores`)
      .then(scores => {
        let sorted = helpSort(scores.body)
        dispatch(FETCH_SCORES(sorted))
      })
  }
}

export const deleteScore = (id) => {
  return (dispatch) => {
    return superagent
      .delete(`${url}/scores`)
      .send({id:id})
      .then(scores => {
        let sorted = helpSort(scores.body)
        dispatch(DELETE_SCORE(sorted))
      })
  }
}

export const createScore = (record) => {
  return (dispatch) => {
    return superagent
      .post(`${url}/scores`)
      .send(record)
      .then(scores => {
        let sorted = helpSort(scores.body)
        dispatch(CREATE_SCORE(sorted));
      })
  }
}
