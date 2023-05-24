import Category from "../../Page/Category/Cateory";
import Dashboard from "../../Page/Dashboard/Dashboard";
import TabsData from "../../Page/Memberships/TabsData";
import Login from "../Login";
import Sccimembers from "../../Page/Memberships/Sccimembers";
import Memberships from "../../Page/Sccimembers/Sccimembers";
import Mail from "../../Page/Mail/Mail";
import PersonalDetails from "../../Page/Memberships/Components/PersonalDetails";
export const data = [
  {
    routeName: "dashboard",
    component: <Dashboard />,
  },
  {
    routeName: "sccimembers",
    component: <Sccimembers />,

  },
  {
    routeName: "members_details/:id",
    component: <TabsData />

  },
  {
    routeName: "memberships",
    component: <Memberships />,
  },

  {
    routeName: "category",
    component: <Category />,
  },
  {
    routeName: "mail",
    component: <Mail />,
  },
  {
    routeName: "personal_details",
    component: <PersonalDetails />
  }

];

export const authData = [
  {
    routeName: "login",
    component: <Login />,
  },
];
