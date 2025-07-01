import PublicNavigation from "@/components/common/public-navigation";
import { Outlet } from "react-router";

const PublicLayout = () => {
  return (
    <>
      <PublicNavigation />
      <Outlet />
    </>
  );
};

export default PublicLayout;
