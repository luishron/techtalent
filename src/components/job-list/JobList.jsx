import React from "react";
import { jobs } from "../../data";
import { Card } from "../card/Card";
import "./job-list.scss";

export const JobList = () => {
  return (
    <div className="container">
      <div className="jobs-list">
        {jobs.map((job, i) => (
          <Card job={job} key={job.id} />
        ))}
      </div>
    </div>
  );
};
