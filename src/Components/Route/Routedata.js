import Dashboard from "../../Page/Dashboard/Dashboard";
import Memberships from "../../Page/Memberships/Memberships";
import Sccimembers from "../../Page/Sccimembers/Sccimembers";
import Multistep from "../../Page/Sccimembers/formdata";
import Login from "../Login";

export const data = [
  {
    routeName: "dashboard",
    component: <Dashboard />,
  },
  {
    routeName: "sccimembers",
    component: <Memberships />,
  },
  {
    routeName: "memberships",
    component: <Sccimembers />,
  },

];

export const authData = [
  {
    routeName: "login",
    component: <Login />,
  },
];
