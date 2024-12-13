import React from "react";
import Header from "../partials/Header";
import Side from "../partials/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="layout" style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <div style={{ display: "flex", flex: 1 }}>
        <Side />
        <div className="content" style={{ flex: 1, padding: "20px" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
