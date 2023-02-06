import React from "react";
import { Route } from "react-router-dom";

const Routes = () => {
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/persons" element={<Persons />} />
    <Route path="/recording" element={<Recording />} />
    <Route path="/registration" element={<Registration />} />
    <Route path="/login" element={<Login />} />
  </Routes>;
};

export default Routes;
