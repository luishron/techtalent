import { useCallback, useContext, useEffect } from "react";
import { GoLocation, GoSearch } from "react-icons/go";
import { JobsContext } from "../../context/JobContext";
import { jobs } from "../../data";
import { Card } from "../card/Card";
import "./filters.scss";
export const Filters = () => {
  const { state, dispatch } = useContext(JobsContext);
  const workingModes = [...new Set(jobs.map((job) => job.work_setting))];
  const jobTypes = [...new Set(jobs.map((job) => job.employment_type))];
  const jobLocation = [...new Set(jobs.map((job) => job.location))];

  const handleFilter = useCallback(() => {
    // Crea una copia de los trabajos
    let filtered = [...jobs];
    // Filtra los trabajos por cada filtro activo
    if (state.searchValue) {
      filtered = filtered.filter(
        (job) =>
          job.position
            .toLowerCase()
            .includes(state.searchValue.toLowerCase()) ||
          job.company.toLowerCase().includes(state.searchValue.toLowerCase())
      );
    }
    if (state.locationValue) {
      filtered = filtered.filter((job) => job.location === state.locationValue);
    }
    if (state.typeValue) {
      filtered = filtered.filter(
        (job) => job.employment_type === state.typeValue
      );
    }
    if (state.workSettingValue) {
      filtered = filtered.filter(
        (job) => job.work_setting === state.workSettingValue
      );
    }
    // Actualiza el estado con los trabajos filtrados
    dispatch({ type: "SET_FILTERED_JOBS", value: filtered });
  }, [
    state.searchValue,
    state.locationValue,
    state.typeValue,
    state.workSettingValue,
    dispatch,
  ]);

  useEffect(() => {
    handleFilter();
  }, [handleFilter]);
  return (
    <div className="jobs-filters">
      <div className="container">
        <div className="filters">
          <div className="search">
            <GoSearch />
            <input
              type="text"
              placeholder="Search for positions or companies"
              value={state.searchValue}
              onChange={(e) => {
                dispatch({ type: "SET_SEARCH_FILTER", value: e.target.value });
                handleFilter();
              }}
            />
          </div>
          <div className="location">
            <GoLocation />
            <select
              value={state.locationValue}
              defaultValue=""
              onChange={(e) => {
                dispatch({
                  type: "SET_LOCATION_FILTER",
                  value: e.target.value,
                });
                handleFilter();
              }}
            >
              <option value="" disabled>
                All locations
              </option>
              {jobLocation.map((location, id) => (
                <option key={id} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
          <div className="employment-type">
            <select
              value={state.typeValue}
              onChange={(e) => {
                dispatch({ type: "SET_TYPE_FILTER", value: e.target.value });
                handleFilter();
              }}
            >
              <option value="" disabled>
                Employment Type
              </option>
              {jobTypes.map((type, id) => (
                <option key={id} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="work-setting">
            <select
              value={state.workSettingValue}
              onChange={(e) => {
                dispatch({
                  type: "SET_WORKSETTING_FILTER",
                  value: e.target.value,
                });
                handleFilter();
              }}
            >
              <option value="" disabled>
                Work Setting
              </option>
              {workingModes.map((mode, id) => (
                <option key={id} value={mode}>
                  {mode}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="jobs-list-details">
          Results: {state.filteredJobs.length} - Fav: {state.favorites.length}
        </div>
        <div className="jobs-list">
          {state.filteredJobs.map((job) => (
            <Card job={job} key={job.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
