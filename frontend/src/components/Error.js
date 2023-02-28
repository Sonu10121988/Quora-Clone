import { Link } from "react-router-dom";
import '../css/Error.css';

const Error = () => {
  return (
    <div div className="error_main">
      <h1>404 Page Not Found</h1>
      <button className="error_button">
        <Link to="/">
          Go to Home
        </Link>
      </button>
    </div>
  );
};

export default Error;