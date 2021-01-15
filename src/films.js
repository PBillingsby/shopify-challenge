export const fetchFilms = query => {
  return dispatch => {
    return fetch(
      `https://www.omdbapi.com/?s=${query.name
        .split(" ")
        .join("+")}&apikey=a0d2ebb9`
    )
      .then(resp => resp.json())
      .then(films => {
        if (!films.Error) {
          dispatch({ type: "GET_FILMS", payload: films });
        }
      });
  };
};

export const addNomination = film => {
  return { type: "ADD_NOMINATION", payload: film };
};

export const removeNomination = film => {
  return { type: "REMOVE_NOMINATION", payload: film };
};

export const startOver = () => {
  return { type: "START_OVER" };
};
