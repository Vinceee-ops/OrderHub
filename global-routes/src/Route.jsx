import React, { Suspense } from 'react';
import { Route, Routes, BrowserRouter, useParams } from 'react-router-dom';

const EtrRndCustomerList_CustomerListComponent = React.lazy(() => import('etr_rnd_customerlist/CustomerSection'));
const EtrRndOrderList_OrderSection = React.lazy(() => import('etr_rnd_orderlist/OrderSection'));
const EtrRndOrderList_TestComponent = React.lazy(() => import('etr_rnd_orderlist/TestComponent'));
const EtrRndOrderList_RemoteRoutes = React.lazy(() => import('etr_rnd_orderlist/RemoteRoutes'));

// // Mapping components to keys
// const componentMap = {
//   orders: <EtrRndOrderList_OrderSection />,
//   customers: <EtrRndCustomerList_CustomerListComponent />,
//   test: <EtrRndOrderList_TestComponent />,
// };

// const ComponentLoader = () => {
//   const { componentName } = useParams();
//   const ComponentToRender = componentMap[componentName] || <div>Component not found</div>;

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       {ComponentToRender}
//     </Suspense>
//   );
// };

// export const RouteComponents = () => (
//   <BrowserRouter>
//     <Routes>
//       <Route path="/component/:componentName" element={<ComponentLoader />} />
//     </Routes>
//   </BrowserRouter>
// );

// Export components wrapped in Suspense
export const CustomerSection = () => (
  <Suspense fallback={<div>Loading Customer Section...</div>}>
    <EtrRndCustomerList_CustomerListComponent />
  </Suspense>
);

export const OrderSection = () => (
  <Suspense fallback={<div>Loading Order Section...</div>}>
    <EtrRndOrderList_OrderSection />
  </Suspense>
);

export const TestComponent = () => (
  <Suspense fallback={<div>Loading Test Component...</div>}>
    <EtrRndOrderList_TestComponent />
  </Suspense>
);

export const RemoteRoutes = () => (
  <Suspense fallback={<div>Loading Remote Component...</div>}>
    <EtrRndOrderList_RemoteRoutes />
  </Suspense>
);
