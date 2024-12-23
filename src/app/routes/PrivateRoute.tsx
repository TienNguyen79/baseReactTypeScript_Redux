import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'types/RootState';

interface ProtectedRouteProps extends RouteProps {
  redirectPath: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, redirectPath, ...rest }) => {
  // const { authenticated } = useSelector((state: RootState) => state.auth);
  const authenticated = '';

  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated ? (
          <Redirect
            to={{
              pathname: redirectPath,
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
};

export default ProtectedRoute;
