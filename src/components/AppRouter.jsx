import { Route, Routes,Navigate   } from 'react-router-dom';
import { Error } from '../pages/Error';
import { privateRoutes, publicRoutes} from '../router/Routes';
import { useContext } from 'react';
import { AuthContext } from '../context';
import { Loader } from './UI/Loader/Loader';

export const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader/>;
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route => 
                    <Route  key={route.path} path={route.path} Component={route.component} />
                )}
                {/* <Route path='' element={<Posts/>}/> */}
                <Route path='error' element={<Error/>}/>
                <Route
                    path="*"
                    element={<Navigate to="/posts" replace />}
                />
                {/* {console.log('private route')} */}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route => 
                    <Route  key={route.path} path={route.path} Component={route.component} />
                )}
                {/* <Route path='' element={<Posts/>}/> */}
                <Route
                    path="*"
                    element={<Navigate to="/login" replace />}
                />
                {/* {console.log('public route')} */}
            </Routes>

    );
};
