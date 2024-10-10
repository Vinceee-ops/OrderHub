import React from 'react';
import Main from '../components/Pages/Main/Main';
import { HostRouting } from 'global-routes';

const AppRoutes = [
    {
        path: '/',
        element: <Main />
    },
    ...HostRouting()
];

export default AppRoutes;
