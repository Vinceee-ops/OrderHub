import React from 'react';
import OrderSection from '../components/OrderListComponent/OrderListComponent';
import { HostRouting } from 'global-routes';

const AppRoutes = [
    {
        path: '/',
        element: <OrderSection />
    },
    ...HostRouting()
];

export default AppRoutes;
