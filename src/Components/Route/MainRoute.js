import { Navigate, Route, Routes } from "react-router-dom";
import { data } from "./Routedata";
import Sidebar from "../Commom/Sidebar";

function MainRoute() {

    return (
        <>
            <Sidebar>


                <Routes>
                    {
                        data?.map((route) => <Route path={`/${route.routeName}`} element={route.component} />)
                    }
                    <Route path='*' element={<Navigate to='/sccimembers' />} />
                </Routes>

            </Sidebar>
        </>

    );
}

export default MainRoute;






















