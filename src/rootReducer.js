const filmReducer = (
  state = {
    films: [],
    nominated: []
  },
  action
) => {
  switch (action.type) {
    case "GET_FILMS":
      return { ...state, films: [...state.films, action.payload] };
    case "ADD_NOMINATION":
      debugger;
      return { ...state, nominations: [...state.nominations, action.payload] };
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
