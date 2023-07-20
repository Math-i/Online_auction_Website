import React from "react";
import { Link } from "react-router-dom";
import { routerChanging } from "../../redux/action/SigninAction";
import { useDispatch } from "react-redux";
// import { signOutUser } from "../redux/action/SigninAction";

function ProfileNavbar() {
  const userDetails = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const signOut = () => {
    localStorage.clear();
    dispatch(routerChanging(false));
  };
  return (
    <div className="leftMenu sticky-menu">
      <div className="text-center">
        <img
          className="rounded-circle"
          src="images/user.png"
          alt="Your Name"
          width="150"
          height="150"
        />
        <h4 className="userName">{userDetails?.name}</h4>
        <span>{userDetails.email}</span>
        <ul className="nav flex-column">
          <li className="nav-item d-flex">
            <Link className="nav-link" to="/account">
              <span className="leftmenuIcon">
                <i class="fas fa-gavel"></i>
              </span>{" "}
              My Bids
            </Link>
          </li>
          <li className="nav-item d-flex">
            <Link className="nav-link" to="/order">
              <span className="leftmenuIcon">
                <i class="fas fa-shopping-basket"></i>
              </span>
              My Order
            </Link>
          </li>
          <li className="nav-item d-flex">
            <Link className="nav-link" to="/winninglist">
              <span className="leftmenuIcon">
                <i class="fas fa-shopping-cart"></i>
              </span>{" "}
              Winning Bids
            </Link>
          </li>
          <li className="nav-item d-flex">
            <Link className="nav-link" to="/" onClick={signOut}>
              <span className="leftmenuIcon">
                <i class="fas fa-sign-out-alt"></i>
              </span>{" "}
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileNavbar;
