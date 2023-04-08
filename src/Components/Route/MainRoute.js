import { Navigate, Route, Routes } from "react-router-dom";
import { data } from "./Routedata";
import Sidebar from "../Commom/Sidebar";
import { authData } from "./Routedata";
import { useSelector } from 'react-redux';
function MainRoute() {
    const { token } = useSelector((state) => state.auth);
    console.log(token)
    return (
        <>
            <Sidebar />
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
                        <Route path='*' element={<Navigate to='/sccimembers' />} />
                    </Routes>
            }
        </>

    );
}

export default MainRoute;


// import { useSelector } from "react-redux";
// import { Navigate, Route, Routes } from "react-router-dom";
// // import { authData, data } from "./RouteData";
// import Sidebar from "../Commom/Sidebar";
// import { authData, data
//  } from "./Routedata";

// function MainRoute() {
//     // const { token } = useSelector((state) => state.adminAuth)
//     // console.log("token",token)
//     return (
//         <>
//             <Sidebar />
//             {

//                 <Routes>

//                     {
//                         data?.map((route) => <Route path={`/${route.routeName}`} element={route.component} />)
//                     }
//                     <Route path='*' element={<Navigate to='/sccimembers' />} />
//                 </Routes>
//             }
//         </>

//     );
// }

// export default MainRoute;





















