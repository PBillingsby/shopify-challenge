const filmReducer = (
  state = {
    films: [],
    nominations: []
  },
  action
) => {
  switch (action.type) {
    case "GET_FILMS":
      return { ...state, films: action.payload.Search };
    case "ADD_NOMINATION":
      return {
        ...state,
        nominations: [...state.nominations, action.payload]
      };
    case "REMOVE_NOMINATION":
      return {
        ...state,
        nominations: state.nominations.filter(
          film => film.Title !== action.payload.Title
        )
      };
    case "DELETE_FILM":
      return {
        ...state,
        films: state.films.filter(film => film.id !== action.payload)
      };
    default:
      return state;
  }
};

export default filmReducer;
