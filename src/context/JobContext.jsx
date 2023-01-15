import { createContext, useReducer } from "react";

export const JobsContext = createContext();

const initialState = {
  searchValue: "",
  locationValue: "",
  typeValue: "",
  workSettingValue: "",
  activeFilters: [],
  filteredJobs: [],
  favorites: [],
};

const filtersReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return { ...state, favorites: [...state.favorites, action.job] };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav.id !== action.job.id),
      };
    case "SET_SEARCH_FILTER":
      return { ...state, searchValue: action.value };
    case "SET_LOCATION_FILTER":
      return { ...state, locationValue: action.value };
    case "SET_TYPE_FILTER":
      return { ...state, typeValue: action.value };
    case "SET_WORKSETTING_FILTER":
      return { ...state, workSettingValue: action.value };
    case "SET_FILTERED_JOBS":
      return { ...state, filteredJobs: action.value };
    case "RESET_FILTERS":
      return {
        searchValue: "",
        locationValue: "",
        typeValue: "",
        workSettingValue: "",
      };
    default:
      return state;
  }
};

export const JobsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filtersReducer, initialState);
  return (
    <JobsContext.Provider value={{ state, dispatch }}>
      {children}
    </JobsContext.Provider>
  );
};
