import React from 'react';
import { Routes, Route } from "react-router-dom";
import OrderSection from "../components/OrderListComponent/OrderListComponent"
import TestSection from "../components/TestComponent/TestComponent";

const RemoteRoutes = () => (
    <Routes>
        <Route path="/" element={<OrderSection />} />
        <Route path="/TestSection" element={<TestSection />} />
    </Routes>
  );
  export default RemoteRoutes;