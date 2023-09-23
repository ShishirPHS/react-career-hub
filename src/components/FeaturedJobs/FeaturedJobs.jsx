import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  // This is not the best way to load show data
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <h2 className="text-4xl text-center">Featured Jobs {jobs.length}</h2>
      <div className="grid grid-cols-2 gap-6">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className="text-center">
        <button
          className={`btn text-2xl ${dataLength === jobs.length && "hidden"}`}
          onClick={() => setDataLength(jobs.length)}
        >
          Show All
        </button>
        <button
          className={`btn text-2xl ${dataLength === jobs.length || "hidden"}`}
          onClick={() => setDataLength(4)}
        >
          See less
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
