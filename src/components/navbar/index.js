import React from "react";
import { Link } from "react-router-dom";
import AutoComplete from "../autocomplete";
import "./index.css";
const Navbar = () => {
  return (
    <div>
      <nav>
        <div style={{ padding: 10 }} className="container header shadow-sm bg-body d-flex justify-content-between">
          <Link to='/home/all' >
            <img style={{ height: 40, objectFit: 'contain' }} src="/logo192.png" alt="logo" />
          </Link>
          <AutoComplete />
          <div>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
