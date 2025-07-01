import { Link } from "react-router";
import { Button } from "../ui/button";

const PublicNavigation = () => {
  return (
    <nav>
      <ul className="flex gap-x-4">
        <li>
          <Link to="/">
            <Button variant="outline">Home</Button>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <Button variant="secondary">Login</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default PublicNavigation;
