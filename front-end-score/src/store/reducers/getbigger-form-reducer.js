const initState = {
  scorelist:[],
  noBiggy: false,
};

const getBigger = (state = initState, action) => {
  switch(action.type){
    case 'GET_BIGGER':
      return { scorelist: action.payload}
    case 'NO_BIGGY':
      return {...state, noBiggy:true}
    default:
      return state;
  }
}

export default getBigger;