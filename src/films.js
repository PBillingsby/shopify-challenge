export const fetchFilms = query => {
  return dispatch => {
    return fetch(
      `http://www.omdbapi.com/?t=${query.name
        .split(" ")
        .join("+")}&apikey=a0d2ebb9`
    )
      .then(resp => resp.json())
      .then(films => {
        dispatch({ type: "GET_FILMS", payload: films });
      });
  };
};

export const addNomination = film => {
  return { type: "ADD_NOMINATION", payload: film };
};

const removeNomination = film => {
  return { type: "REMOVE_NOMINATION", payload: film };
};
