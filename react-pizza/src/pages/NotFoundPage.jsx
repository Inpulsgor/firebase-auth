import React from "react";

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="notfound__container">
        <div className="notfound__error">
          <h2 className="notfound__title">Oops! Page not found</h2>
          <h3 className="notfound__subtitle">
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h3>
        </div>
        <p className="notfound__description">
          we are sorry, but the page you requested was not found
        </p>
      </div>
    </div>
  );
};

export default NotFound;
