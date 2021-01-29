import React from "react";

import { ReactComponent as HeartLogo } from "assets/icons/heart.svg";

const Footer = () => {
  return (
    <div className="footer__container container">
      <div className="footer__copy">
        <span className="footer__text">Copyright &copy; Developed with</span>
        <HeartLogo className="footer__logo" />
      </div>
    </div>
  );
};

export default Footer;
