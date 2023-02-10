import { createContext, useReducer } from "react";
import { jobs } from "../data";

export const JobsContext = createContext();

const initialState = {
  searchValue: "",
  locationValue: "",
  typeValue: "",
  workSettingValue: "",
  activeFilters: [],
  filteredJobs: jobs,
  favorites: [],
  cancelLocationIcon: false,
  cancelTypeIcon: false,
  cancelWorkSettingIcon: false,
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
    case "SET_CANCEL_LOCATION_ICON":
      return { ...state, cancelLocationIcon: action.value };
    case "SET_CANCEL_TYPE_ICON":
      return { ...state, cancelTypeIcon: action.value };
    case "SET_CANCEL_WORKSETTING_ICON":
      return { ...state, cancelWorkSettingIcon: action.value };
    case "RESET_LOCATION_FILTER":
      return {
        ...state,
        locationValue: action.payload.locationValue,
      };
    case "RESET_TYPE_FILTER":
      return {
        ...state,
        typeValue: action.payload.typeValue,
      };
    case "RESET_WORKSETTING_FILTER":
      return {
        ...state,
        workSettingValue: action.payload.workSettingValue,
      };
    case "RESET_SELECT":
      return {
        ...state,
        locationValue: action.payload.locationValue,
        typeValue: action.payload.typeValue,
        workSettingValue: action.payload.workSettingValue,
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
