import { Link } from "react-router";
import { Button } from "../ui/button";
import SectionWrapper from "./wrapper/section-wrapper";
import { ModeToggle } from "./mode-toggler";

const PublicNavigation = () => {
  return (
    <nav>
      <SectionWrapper className="flex-row justify-between my-2">
        <Link to="/">
          <Button variant="outline">Home</Button>
        </Link>
        <ul className="flex gap-x-4">
          <li>
            <Link to="/signin">
              <Button variant="secondary">Sign in</Button>
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
