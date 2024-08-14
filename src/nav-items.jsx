import { Home, Users } from "lucide-react";
import UserManagement from "./pages/UserManagement.jsx";
import UserDetails from "./pages/UserDetails.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <UserManagement />,
  },
  {
    title: "User Management",
    to: "/users",
    icon: <Users className="h-4 w-4" />,
    page: <UserManagement />,
  },
];

export const additionalRoutes = [
  {
    to: "/user/:userId",
    page: <UserDetails />,
  },
];
