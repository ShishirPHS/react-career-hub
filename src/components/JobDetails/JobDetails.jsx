import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { jobId } = useParams();

  const job = jobs.find((job) => job.id == jobId);
  const { job_title } = job;

  const handleApplyNow = () => {
    saveJobApplication(jobId);
    toast("You have applied successfully");
  };

  return (
    <div className="container mx-auto my-32 grid grid-cols-3 gap-6">
      <div className="col-span-2">
        <p>
          <span className="font-bold">Job Description: </span>A UI/UX (User
          Interface/User Experience) designer is responsible for designing and
          creating engaging and effective interfaces for software and web
          applications. This includes designing the layout, visual design, and
          interactivity of the user interface.
        </p>
      </div>
      <div className="col-span-1">
        <div className="font-bold">
          <h3>Job Details</h3>
          <p>{job_title}</p>
        </div>
        <div>
          <button onClick={handleApplyNow} className="btn btn-primary">
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
