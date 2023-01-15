import { useState } from "react";
import { jobs } from "../../data";
import { Card } from "../card/Card";

export const JobSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobs); // jobs es un array con los datos de las tarjetas
  const handleSearch = (event) => {
    setSearchValue(event.target.value);
    const filteredData = jobs.filter((job) => {
      return (
        job.position.toLowerCase().includes(searchValue.toLowerCase()) ||
        job.company.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    setFilteredJobs(filteredData);
  };
  return (
    <div>
      <input type="text" placeholder="Search..." onChange={handleSearch} />
      {filteredJobs.map((job, i) => (
        <Card job={job} key={job.id} />
      ))}
    </div>
  );
};
