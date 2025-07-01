import { Link } from "react-router";
import { Button } from "../ui/button";
import SectionWrapper from "./wrapper/section-wrapper";
import { ModeToggle } from "./mode-taggler";

const PublicNavigation = () => {
  return (
    <nav>
      <SectionWrapper className="border flex-row justify-between">
        <Link to="/">
          <Button variant="outline">Home</Button>
        </Link>
        <ul className="flex gap-x-4">
          <li>
            <Link to="/login">
              <Button variant="secondary">Login</Button>
            </Link>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </SectionWrapper>
    </nav>
  );
};

export default PublicNavigation;
