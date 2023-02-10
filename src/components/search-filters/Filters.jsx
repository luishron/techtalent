import { useCallback, useContext, useEffect, useMemo } from "react";
import { GoLocation, GoSearch } from "react-icons/go";
import NotFound from "../../assets/not-found.svg";
import { JobsContext } from "../../context/JobContext";
import { jobs } from "../../data";
import { Card } from "../card/Card";
import "./filters.scss";
export const Filters = () => {
  const { state, dispatch } = useContext(JobsContext);

  const workingModes = useMemo(
    () => [...new Set(jobs.map((job) => job.work_setting))],
    []
  );
  const jobTypes = useMemo(
    () => [...new Set(jobs.map((job) => job.employment_type))],
    []
  );
  const jobLocation = useMemo(
    () => [...new Set(jobs.map((job) => job.location))],
    []
  );

  const handleFilter = useCallback(() => {
    let filtered = [...jobs];

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
    dispatch({ type: "SET_FILTERED_JOBS", value: filtered });
  }, [
    state.searchValue,
    state.locationValue,
    state.typeValue,
    state.workSettingValue,
    dispatch,
  ]);

  const handleResetSelect = () => {
    dispatch({
      type: "RESET_SELECT",
      payload: { locationValue: "", typeValue: "", workSettingValue: "" },
    });
  };

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
              onChange={(e) => {
                dispatch({
                  type: "SET_LOCATION_FILTER",
                  value: e.target.value,
                });
                dispatch({
                  type: "SET_CANCEL_LOCATION_ICON",
                  value: e.target.value !== "",
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
            {state.locationValue !== "" && (
              <span
                onClick={() => {
                  dispatch({
                    type: "RESET_LOCATION_FILTER",
                    payload: { locationValue: "" },
                  });
                  dispatch({
                    type: "SET_CANCEL_LOCATION_ICON",
                    value: false,
                  });
                  handleFilter();
                }}
              >
                x
              </span>
            )}
          </div>

          <div className="employment-type">
            <select
              value={state.typeValue}
              onChange={(e) => {
                dispatch({
                  type: "SET_TYPE_FILTER",
                  value: e.target.value,
                });
                dispatch({
                  type: "SET_CANCEL_TYPE_ICON",
                  value: e.target.value !== "",
                });
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
            {state.typeValue !== "" && (
              <span
                onClick={() => {
                  dispatch({
                    type: "RESET_TYPE_FILTER",
                    payload: { typeValue: "" },
                  });
                  dispatch({
                    type: "SET_CANCEL_TYPE_ICON",
                    value: false,
                  });
                  handleFilter();
                }}
              >
                x
              </span>
            )}
          </div>
          <div className="work-setting">
            <select
              value={state.workSettingValue}
              onChange={(e) => {
                dispatch({
                  type: "SET_WORKSETTING_FILTER",
                  value: e.target.value,
                });
                dispatch({
                  type: "SET_CANCEL_WORKSETTING_ICON",
                  value: e.target.value !== "",
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
            {state.workSettingValue !== "" && (
              <span
                onClick={() => {
                  dispatch({
                    type: "RESET_WORKSETTING_FILTER",
                    payload: { workSettingValue: "" },
                  });
                  dispatch({
                    type: "SET_CANCEL_WORKSETTING_ICON",
                    value: false,
                  });
                  handleFilter();
                }}
              >
                x
              </span>
            )}
          </div>
        </div>
        <div className="jobs-list-details">
          Results: {state.filteredJobs.length} - Fav: {state.favorites.length}
          <button onClick={handleResetSelect}>Reset Select</button>
        </div>
        {state.filteredJobs.length > 0 ? (
          <div className="jobs-list">
            {state.filteredJobs.map((job) => (
              <Card job={job} key={job.id} />
            ))}
          </div>
        ) : (
          <div className="not-found">
            <span className="not-found-icon">
              <img src={NotFound} alt="No matching jobs found" />
            </span>
            <h3 className="not-found-text">No matching jobs found.</h3>
          </div>
        )}
      </div>
    </div>
  );
};
