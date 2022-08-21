import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Navbar Menu
  const navMenu = (
    <>
      <li>
        <Link to="/">Menu 1</Link>
      </li>
      <li>
        <Link to="/">Menu 2</Link>
      </li>
      <li>
        <Link to="/">Menu 3</Link>
      </li>
    </>
  );

  // Profile Menu
  const profileMenu = (
    <>
      <li>
        <Link to="/" class="justify-between">
          Profile
          <span class="badge  badge-primary ">New</span>
        </Link>
      </li>
      <li>
        <Link to="/" class=" w-full flex justify-between items-center ">
          Card
          <span className="indicator mx-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span class="badge badge-primary badge-sm indicator-item">7</span>
          </span>
        </Link>
      </li>
      <li>
        <Link to="/">Dashboard</Link>
      </li>
      <li>
        <Link to="/">Logout</Link>
      </li>
    </>
  );

  return (
    <>
      <div class="navbar px-3">
        {/* Logo section */}
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navMenu}
            </ul>
          </div>
          <Link to="/" class="btn btn-ghost normal-case text-xl">
          BD Traveller
          </Link>
        </div>

        {/* Navbar Phone/horizontal Menu */}
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">{navMenu}</ul>
        </div>

        {/* navbar end section*/}
        <div class="navbar-end">
          {/* Search input */}
          <div class="form-control bg-secondary bg-opacity-5 rounded-lg">
            <input
              type="text"
              placeholder="Search"
              class="input input-ghost w-full max-w-xs"
            />
          </div>

          {/* Search button */}
          <button class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Notify button */}
          <button class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span class="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>

          {/* Profile Section */}
          <div class="flex justify-center items-center gap-2">
            <div class="dropdown dropdown-end">
              {/* img */}
              <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                  <img src="https://placeimg.com/192/192/people" alt="" />
                </div>
              </label>

              {/* Profile Section Menu*/}
              <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {profileMenu}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
