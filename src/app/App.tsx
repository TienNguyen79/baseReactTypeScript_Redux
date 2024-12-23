import moment from 'moment';
import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { getLanguage, saveLanguage } from './helpers/localStorage';
import RenderRoutes, { routes } from './routes/routes';
import './styles/variables.scss';
import './styles/animation.scss';
import './styles/base.scss';
import './styles/elements.scss';
import './styles/typography.scss';
import './styles/dependencies/index.scss';

// Set locate to moment lib
const language = getLanguage();
saveLanguage(language);
moment.locale(language);

export function App() {
  const dispatch = useDispatch();
  // const { authenticated, currentUser, userRegister } = useSelector(
  //   (state: RootState) => state.auth,
  // );

  // const isAuthenticated = !!(authenticated && currentUser && Object.keys(currentUser).length);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     dispatch(loadCommonData());
  //   }
  // }, [authenticated, currentUser, isAuthenticated, dispatch]);

  return (
    <Router basename="">
      <RenderRoutes routes={routes} isAuthenticated={true} />
    </Router>
  );
}
