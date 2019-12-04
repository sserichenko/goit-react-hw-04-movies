import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const NotFoundPage = () => {
  return (
    <>
      <div>
        <h2>ТАКАЯ СТРАНИЦА НЕ НАЙДЕНА</h2>
        <p>
          Єто наша СТРАНИЦА
          <NavLink to={routes.HOME}>ДОМ</NavLink>
        </p>
      </div>
    </>
  );
};

export default NotFoundPage;
