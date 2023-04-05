import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { authData, data } from "./Routedata";

function MainRoute() {
    const { token } = useSelector((state) => state.adminAuth)
    console.log("token",token)
    return (
        <>
            {
                !token ? <>  <Routes>
                    {
                        authData?.map((route) => <Route path={`/${route.routeName}`} element={route.component} />)
                    }
                    <Route path='*' element={<Navigate to='/login' />} />
                </Routes>
                </> :
                    <Routes>

                        {
                            data?.map((route) => <Route path={`/${route.routeName}`} element={route.component} />)
                        }
                        <Route path='*' element={<Navigate to='/dashboard' />} />
                    </Routes>
            }
        </>

    );
}

export default MainRoute;










