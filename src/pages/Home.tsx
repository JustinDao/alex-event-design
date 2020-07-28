import React from "react";
import { NavBar } from "../common/Navbar";
import "./Home.css";
import { Container } from "react-bootstrap";

export function Home() {
  React.useEffect(() => {
    document.body.className += " home";
  });

  return (
    <div>
      <NavBar />
    </div>
  );
}
