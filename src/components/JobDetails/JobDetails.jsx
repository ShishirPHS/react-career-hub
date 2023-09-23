import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { jobId } = useParams();

  const job = jobs.find((job) => job.id == jobId);

  console.log(job);

  return (
    <div>
      <h2>Job Details of: {jobId}</h2>
    </div>
  );
};

export default JobDetails;
