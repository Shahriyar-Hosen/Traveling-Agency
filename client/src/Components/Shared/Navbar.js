import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import navLogo from "../../Assets/log/logo.png";
import auth from "../../firebase.inite";
import Content from "../theme/Content";
import gravatarUrl from "gravatar-url";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const { email, photoURL } = user || {};

  const logout = () => {
    signOut(auth);
  };

  // Navbar Menu
  const navMenu = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/destinations">Destination</NavLink>
      </li>
      <li>
        <NavLink to="/tours">Tours</NavLink>
      </li>
      <li>
        <NavLink to="/hotels">Hotels</NavLink>
      </li>
    </>
  );

  // Profile Menu
  const profileMenu = (
    <>
      <li>
        <Link to="/" className="justify-between">
          Profile
          <span className="badge badge-primary ">New</span>
        </Link>
      </li>
      <li>
        <Link to="/" className=" w-full flex justify-between items-center ">
          Card
          <span className="indicator mx-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-primary badge-sm indicator-item">
              7
            </span>
          </span>
        </Link>
      </li>
      <li>
        <Link to="/">Dashboard</Link>
      </li>
      <li>
        <Link to="/login" onClick={logout}>
          Logout
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-gradient-to-r from-white via-yellow-200 to-white">
      <Content className="navbar  px-3">
        {/* Logo section */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navMenu}
            </ul>
          </div>
          <Link to="/" className="normal-case text-2xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-warning font-extrabold">
              {/* BD Traveler */}
              <img
                src={navLogo}
                alt=""
                className=" px-2 py-0 rounded-full w-48"
              />
            </span>
          </Link>
        </div>

        {/* Navbar Phone/horizontal Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{navMenu}</ul>
        </div>

        {/* navbar end section*/}
        <div className="navbar-end">
          {/* Search input */}
          <div className="form-control bg-secondary bg-opacity-25 rounded-lg hidden lg:block">
            <input
              type="text"
              placeholder="Search"
              className="input input-ghost w-full h-8 max-w-xs text-xs"
            />
          </div>

          {/* Search button */}
          <button className="btn btn-ghost btn-circle hidden lg:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Notify button */}
          {user && (
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          )}

          {/*  Login/Register */}
          {!user && (
            <Link to="/login" className="btn btn-ghost">
              Login/Register
            </Link>
          )}

          {/* Profile Section */}
          {user && (
            <div className="flex justify-center items-center gap-2">
              <div className="dropdown dropdown-end">
                {/* img */}
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={
                        photoURL
                          ? photoURL
                          : gravatarUrl(email, {
                              size: 80,
                              default: "mm",
                            })
                      }
                      alt=""
                    />
                  </div>
                </label>

                {/* Profile Section Menu*/}
                <ul
                  tabIndex="0"
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {profileMenu}
                </ul>
              </div>
            </div>
          )}
        </div>
      </Content>
    </div>
  );
};

export default Navbar;
