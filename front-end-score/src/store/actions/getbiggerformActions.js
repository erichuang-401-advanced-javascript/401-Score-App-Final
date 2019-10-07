import superagent from 'superagent';

const url = 'http://localhost:8080';

function helpSort(array){
  return array.sort((a, b) => {
    return b.score - a.score;
  });
}

const GET_BIGGER = (record) => {
  return {
    type: 'GET_BIGGER',
    payload: record
  }
}

const NO_BIGGY = () => {
  return {
    type: 'NO_BIGGY',
  }
}

export const getBigger = (value) => {
  return (dispatch) => {
    return superagent
      .get(`${url}/scores-bigger-than/${value}`)
      .then(scorelist => {
        if(!scorelist.body.length){
          dispatch(NO_BIGGY())
        } 
        let list = helpSort(scorelist.body);
        console.log(list);
        dispatch(GET_BIGGER(list));
      })
  }
}