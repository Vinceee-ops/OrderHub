
import React, { Suspense } from 'react';
import { Link } from 'react-router-dom'

const EtrRndCustomerList_CustomerListComponent = React.lazy(() => import('etr_rnd_customerlist/CustomerSection'));
const EtrRndOrderList_OrderSection = React.lazy(() => import('etr_rnd_orderlist/OrderSection'));
const EtrRndOrderList_TestComponent = React.lazy(() => import('etr_rnd_orderlist/TestComponent'));

// Export these components wrapped in Suspense
export const CustomerSection = () => (
  <Suspense fallback={<div>Loading Customer Section...</div>}>
    <EtrRndCustomerList_CustomerListComponent />
  </Suspense>
);


export const OrderSection = ({onShowTest}) => (
  <Suspense fallback={<div>Loading Order Section...</div>}>
    <EtrRndOrderList_OrderSection  onShowTest={onShowTest}/>
  </Suspense>
);

export const TestComponent = () => (
  <Suspense fallback={<div>Loading Test Component...</div>}>
    <EtrRndOrderList_TestComponent />
  </Suspense>
);

export const HostRouting = () => {
  return [
    {
      path: '/TestComponent',
      element: (
        <Suspense fallback={<div>Loading Order Section...</div>}>
          <EtrRndOrderList_TestComponent />
        </Suspense>
      )
    },
    {
      path: '/CustomerSection',
      element: (
        <Suspense fallback={<div>Loading Order Section...</div>}>
          <EtrRndCustomerList_CustomerListComponent />
        </Suspense>
      )
    },
    {
      path: '/OrderSection',
      element: (
        <Suspense fallback={<div>Loading Order Section...</div>}>
          <EtrRndOrderList_OrderSection />
        </Suspense>
      )
    }
  ];
};

// export const LinkToTest = () => (
//   <Link to='/TestComponent' className="btn btn-success w-100" style={{ textDecoration: 'none', color: 'white' }}>
//     Button
//   </Link>
// );

