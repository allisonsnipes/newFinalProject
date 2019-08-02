import React from "react";
import { Link } from "react-router-dom";
import ModalCreateEvent from "../modals/modalCreateEvent";

function NavbarII() {
  return (
    // creating the second navbar with home button, and creating event
    <nav className="navbar sticky-top navbar-dark bg-dark">
      <Link className="nav-item text-white" to="home">
        {" "}
        Home{" "}
      </Link>
      <Link className="nav-item text-white" to="games">
        {" "}
        Games{" "}
      </Link>
      <Link className="nav-item text-white" to="/">
        {" "}
        <h1>Game Meet! </h1>{" "}
      </Link>
      <ModalCreateAccount />
    </nav>
  );
}
