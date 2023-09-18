import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";
import { useContext } from "react";
import AuthContext from "../AuthContext/AuthContext";

const MainNavigation = () => {

  const authCtx=useContext(AuthContext);

  const isLoggedIn=authCtx.isLoggedIn;

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          {isLoggedIn &&
          <li>
            <NavLink to="/store">Store</NavLink>
          </li>
          }
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          { !isLoggedIn && <li>
            <NavLink to="/login">Login</NavLink>
          </li>
}
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
