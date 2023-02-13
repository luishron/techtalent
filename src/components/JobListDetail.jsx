import { Button } from "@mui/material";
import React, { useContext } from "react";
import { JobsContext } from "../context/JobContext";

export const JobListDetail = () => {
  const { state, dispatch } = useContext(JobsContext);

  const handleResetSelect = () => {
    dispatch({
      type: "RESET_SELECT",
      payload: { locationValue: "", typeValue: "", workSettingValue: "" },
    });
  };

  return (
    <div className="jobs-list-details">
      Results: {state.filteredJobs.length} - Fav: {state.favorites.length}
      <Button onClick={handleResetSelect}>Reset Select</Button>
    </div>
  );
};
