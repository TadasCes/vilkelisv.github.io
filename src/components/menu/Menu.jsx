import React, { Fragment } from 'react';
import './style.css';
export const Menu = () => {
  return (
    <Fragment>
      <div className="h-20 bg-gray-100 grid grid-cols-2">
        <div className="col-span-1 flex items-center justify-start ml-10">
          <div className="flex">
            <div className="mr-5">Logo</div>
            <div>Vainius Vilkelis</div>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-end mr-10">
          <div className="">
            <ul className="flex justify-center content-center">
              <li className="menu-item">Experience</li>
              <li className="menu-item">Projects</li>
              <li className="menu-item">About</li>
              <li className="menu-item">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
