const initState = {scorelist:[]};

const scoreReducer = (state = initState, action) => {
  // console.log('type:', action.type, 'payload:', action.payload);
  switch(action.type){
    case 'FETCH_SCORES':
      return {scorelist: [...action.payload]};
    case 'DELETE_SCORES':
      return {scorelist: [...action.payload]};
    case 'CREATE_SCORES':
      return {scorelist: [...action.payload]};;
    default:
      return state;
  }
}

export default scoreReducer;