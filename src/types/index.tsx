import type { ReactNode } from "react";

export interface RouteData {
  path: string;
  element: ReactNode;
}

export type Theme = "dark" | "light" | "system";

export type SidebarContextProps = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};
