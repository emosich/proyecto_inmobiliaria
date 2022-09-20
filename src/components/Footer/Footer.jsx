import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className="footer" id={classes.foot}>
      <div className="content has-text-centered">
        <p>
          <strong>Bulmaprop</strong> by{" "}
          <a href="https://jgthms.com">Erik Mosich</a>. The source code is
          licensed
          <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. The
          website content is licensed{" "}
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
            CC BY NC SA 4.0
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
