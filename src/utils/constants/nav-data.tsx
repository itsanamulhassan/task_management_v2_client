import {
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileWord,
  IconHelp,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
} from "@tabler/icons-react";

export const data = {
  user: {
    name: "Anamul Hassan",
    email: "hassan@mail.com",
    avatar: "../../../public/avatar.jpg",
  },
  navMain: [
    {
      title: "Users",
      url: "/users",
      icon: IconDashboard,
    },
    {
      title: "Tasks",
      url: "/tasks",
      icon: IconListDetails,
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: IconChartBar,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "#",
      icon: IconDatabase,
    },
    {
      name: "Reports",
      url: "#",
      icon: IconReport,
    },
    {
      name: "Word Assistant",
      url: "#",
      icon: IconFileWord,
    },
  ],
};
