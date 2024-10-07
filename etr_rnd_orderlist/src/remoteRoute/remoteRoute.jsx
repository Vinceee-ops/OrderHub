import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import OrderSection from "../components/OrderListComponent/OrderListComponent"
import TestSection from "../components/TestComponent/TestComponent";

const RemoteRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<OrderSection />} />
            <Route path="/Test" element={<TestSection />} />
        </Routes>
    </BrowserRouter>
  );
  export default RemoteRoutes;
