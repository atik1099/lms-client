import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import PropTypes from 'prop-types';

const AdminRoutes = ({children}) => {

    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className='progress w-56'></progress>
    }

    if(user && isAdmin){
        return children;
    }

    return <Navigate to="/sign-in" state={{from: location}} replace></Navigate>
};

AdminRoutes.propTypes = {
    children: PropTypes.node
  };

export default AdminRoutes;