import * as actionTypes from "../actions/actionTypes";
import shows from "../../data";

const initialState = {
  shows: shows,
  filteredShows: shows,
  selectedShow: {},
  seasons: [],
  // episodes: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILTER_SHOWS:
      return {
        ...state,
        filteredShows: state.shows.filter(show => {
          return `${show.name}`.toLowerCase().includes(action.payload);
        })
      };
    case actionTypes.GET_SHOW_DETAIL:
      return {
        ...state,
        selectedShow: state.shows.find(show => show.id === +action.payload),
        seasons: state.shows.find(show => show.id === +action.payload).seasons,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;