
import Dashboard from "../../Page/Dashboard/Dashboard"
import Memberships from "../../Page/Memberships/Memberships"
import Sccimembers from "../../Page/Sccimembers/Sccimembers"
import Login from "../Login"

export const data = [
    {
        routeName:'dashboard',
        component:<Dashboard/>
    },
    {
        routeName:'sccimembers',
        component:<Sccimembers/>
    },
    {
        routeName:'memberships',
        component:<Memberships/>
    }
]

export const authData = [
    {
        routeName: 'login',
        component: <Login />
    },
]

