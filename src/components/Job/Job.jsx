import PropTypes from "prop-types";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  return (
    <div className="card   shadow-xl">
      <figure>
        <img src={logo} alt={`Logo for '${job_title}' job title`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button>{remote_or_onsite}</button>
          <button>{job_type}</button>
        </div>
        <div className="flex">
          <p className="flex items-center">
            <span>
              <MdOutlineLocationOn></MdOutlineLocationOn>
            </span>
            {location}
          </p>
          <p className="flex items-center">
            <span>
              <AiOutlineDollar></AiOutlineDollar>
            </span>
            {salary}
          </p>
        </div>
        <div className="card-actions ">
          <Link to={`job/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object.isRequired,
};

export default Job;
