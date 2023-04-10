import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout/Layout";
import Email from "./pages/Email";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Summary from "./pages/Summary";
import Survey from "./pages/Survey/Survey";
import GlobalStyle from "./styles/Global.style";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigate to="survey/1" />} />
        <Route element={<Layout mode="light" />}>
          <Route path="survey/:id" element={<Survey />} />
          <Route path="email" element={<Email />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route element={<Layout mode="gradient" />}>
          <Route path="summary/:id" element={<Summary />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
