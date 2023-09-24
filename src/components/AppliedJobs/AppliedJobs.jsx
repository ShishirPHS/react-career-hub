import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const jobs = useLoaderData();

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();

    if (jobs.length > 0) {
      //   const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));

      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }

      setAppliedJobs(jobsApplied);
    }
  }, []);

  return (
    <div className="container mx-auto">
      <h2>Jobs I applied: {appliedJobs.length}</h2>
    </div>
  );
};

export default AppliedJobs;
