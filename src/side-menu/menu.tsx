import { NavigationContainer } from '@react-navigation/native';

/**
 * store
 */
import { useAppDispatch, useAppSelector } from "../store/hooks/storeTypeHook.hooks";
import { getToken } from '../store/slices/auth.slice';

/**
 * navigations
 */
import AuthSideMenu from "./auth.side-menu";
import WithoutAuthSideMenu from "./withoutAuth.side-menu";
import { useEffect } from 'react';


const Menu: React.FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const { isAuth } = useAppSelector(state => state.auth);

    useEffect(() => {
        dispatch(getToken())
    },[]);

    return (
        <NavigationContainer>
            {
                isAuth ? <AuthSideMenu /> : <WithoutAuthSideMenu />
            }
        </NavigationContainer>
    );

};
export default Menu;