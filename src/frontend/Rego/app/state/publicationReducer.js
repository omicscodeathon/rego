const INITIAL_STATE = {
  pmid:'',
  webenv: '',
  querykey: '',
  searchWebenv: '',
  searchQuerykey: '',
  referer: '',
  pmc: null
}

export const publicationReducer = (state=INITIAL_STATE, action) => {
  switch (action.type){
    case 'SET_PMID':
      state.pmid = action.payload;
      return {...state}
    case 'SET_WEBENV':
      if (action.screen === 'home'){
        state.webenv = action.payload;
        return {...state}
      }else {
        state.searchWebenv = action.payload;
        return {...state};
      }
    case 'SET_QUERYKEY':
      if (action.screen === 'home'){
        state.querykey = action.payload;
        return {...state}
      } else {
        state.searchQuerykey = action.payload;
        return {...state}
      }
    case 'SET_REFERER':
      state.referer = action.payload
      return {...state}
    case "SET_PMC":
      state.pmc = action.payload
      return {...state}
    default:
      return state
  }
}