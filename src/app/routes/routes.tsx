import React, { Suspense, Fragment, lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { IndexedObject } from 'types/common';
import SuspenseFallback from '../components/Common/SuspenseFallback/SuspenseFallback';
import Layout, { PropsLayout } from '../components/Layout/Layout';
import { Epath } from './routesConfig';

export type RoutesProps = {
  exact?: boolean;
  path: string;
  component: React.FC<{ history: IndexedObject; location: IndexedObject; match: IndexedObject }>;
  auth?: boolean;
  routes?: Array<RoutesProps>;
  layout?: React.FC<PropsLayout>;
};

const RenderRoutes = ({
  routes,
  isAuthenticated,
}: {
  routes: Array<RoutesProps>;
  isAuthenticated: boolean;
}) => {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <Switch>
        {routes.map((route, i) => {
          const LayoutRoute = route.layout || Fragment;
          const Component = route.component || <div />;
          if (route.auth && !isAuthenticated) {
            return <Redirect key={i} to={Epath.loginPage} />;
          }
          return (
            <Route
              key={i}
              path={route.path}
              exact={!!route.exact}
              render={(props) => {
                return (
                  <LayoutRoute>
                    {route.routes ? (
                      <RenderRoutes routes={route.routes} isAuthenticated={isAuthenticated} />
                    ) : (
                      <Component {...props} />
                    )}
                  </LayoutRoute>
                );
              }}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
};

export const routes = [
  {
    exact: true,
    path: Epath.notFoundPage,
    component: lazy(() => import('../pages/NotFoundPage/NotFoundPage')),
  },
  {
    exact: true,
    path: Epath.loginPage,
    component: lazy(() => import('../pages/AuthPage/LoginPage/LoginPage')),
  },
  {
    path: '*',
    layout: Layout,
    component: () => <Redirect to={Epath.homePage} />,
    routes: [
      {
        exact: true,
        path: Epath.homePage,
        component: lazy(() => import('../pages/HomePage/HomePage')),
        auth: false,
      },
      {
        exact: true,
        path: Epath.testPage,
        component: lazy(() => import('../pages/TestPage/Test1Page')),
        auth: false,
      },
      {
        exact: true,
        path: '*',
        component: () => <Redirect to={Epath.notFoundPage} />,
      },
    ],
  },
];

export default RenderRoutes;
