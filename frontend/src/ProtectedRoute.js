import  { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { AuthContext } from './Context/AuthContext'
// import EditBook from './Components/EditBook/EditBook';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      return <Navigate to="/login" replace />;
    }

    return (
        <Route
        {...rest}
        render={props => {
          return isAuthenticated ? <Component {...props} /> : <Navigate to="/" />;
        }}
      />
    );
        

};

export default ProtectedRoute;