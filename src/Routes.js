import React from 'react'
import {Route, Switch} from 'react-router-dom'
import VerifyMobile from './screen/VerifyMobile';
import Login from './screen/login';
import MainScreen from './screen/MainScreen';

const Routes = [
    {
      path: '/',
      exact: true,
      component: MainScreen,
    },
    {
      path: '/login',
      exact: true,
      component: Login,
    },
    {
      path: '/verify-mobile',
      exact: true,
      component: VerifyMobile,
    },
  ];

export default Routes;