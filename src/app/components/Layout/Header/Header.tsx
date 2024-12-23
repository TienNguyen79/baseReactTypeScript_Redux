import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { DEFAULT_LANGUAGE } from 'locales/i18n';
import { Epath } from 'app/routes/routesConfig';

function Header() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogOut = () => {
    i18n.changeLanguage(DEFAULT_LANGUAGE);
    history.push(Epath.loginPage);
  };

  return <div className="header-navbar">Header</div>;
}

export default Header;
