// selectors
export const searchValue = (state => state.searchString);

//actions
const createActionName = actionName => `app/lists/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');

// action creators 
export const updateSearchstring = searchString => ({ type: UPDATE_SEARCHSTRING, searchString });
const searchStringReducer = (statePart = '', action) => {
  switch(action.type) {
    case UPDATE_SEARCHSTRING:
      return action.searchString;
    default:
      return statePart;
  }
}

export default searchStringReducer;
