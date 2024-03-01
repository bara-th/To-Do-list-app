import React from "react";

function Footer() {
  const year = new Date();
  return <div className="footer">Copyright &copy; {year.getFullYear()}</div>;
}

export default Footer;
