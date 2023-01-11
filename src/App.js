import React from "react";
import RegistrationForm from "./component/RegistrationForm ";
import "./App.css";
import Login from "./component/Login";
import Signup from "./component/Signup";
// import add from './add';
import AddItems_Section from "./component/AddItems_Section";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormikData from "./component/FormikData";
import UpdateItems_Data from "./component/UpdateItems_Data";
import Header from "./component/Header";
import JsonfileData from "./component/JsonfileData";
// import ErrorPage from './component/ErrorPage';
// import {BrowserRoute,Routes,Route}

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddItems_Section />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/formikData" element={<FormikData />} />
          <Route path="/updateItems_Data" element={<UpdateItems_Data />} />
          <Route path="/header" element={<Header />} />
          {/* <Route path="/header" element={<Header />} /> */}
          <Route path="/jsonfiledata" element={<JsonfileData />} />
          <Route path="*" element={<AddItems_Section />} />
        </Routes>
      </BrowserRouter>

      {/* <RegistrationForm/> */}

      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <AddItems_Section/> */}
    </>
  );
};

export default App;
