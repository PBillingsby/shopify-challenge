export const fetchFilms = query => {
  console.log("here");
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
