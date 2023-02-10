const searchStringReducer = (statePart = '', action) => {
  switch(action.type) {
    case 'UPDATE_SEARCHSTRING':
      return action.searchString;
    default:
      return statePart;
  }
}

export default searchStringReducer;
