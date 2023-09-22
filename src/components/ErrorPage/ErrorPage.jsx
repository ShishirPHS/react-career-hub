import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container mx-auto">
      <h2>Oops!!!</h2>

      <NavLink to="/">
        <button>Go back to home</button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
