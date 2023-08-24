import { useSelector } from 'react-redux';
import {
    selectUser,
    selectIsLoggedIn,
    selectIsRefreshing,
    selectIsLogging
} from 'redux/auth/selectors';

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const user = useSelector(selectUser);
    const isLogging = useSelector(selectIsLogging)

    return {
        isLoggedIn,
        isRefreshing,
        user,
        isLogging
    };
};
