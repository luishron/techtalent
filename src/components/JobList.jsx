import React, { useContext } from "react";
import { JobsContext } from "../context/JobContext";
import { CardOld } from "./card/Card";
import { NotFound } from "./NotFound";

export const JobList = () => {
  const { state } = useContext(JobsContext);
  return (
    <>
      {state.filteredJobs.length > 0 ? (
        <div className="jobs-list">
          {state.filteredJobs.map((job) => (
            <CardOld job={job} key={job.id} />
          ))}
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};
