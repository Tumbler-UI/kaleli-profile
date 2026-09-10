import React from "react";


function Footer() {
  return (
    <footer className="footer">

      <div>
        <strong>kavali.dev</strong>

        <p>
          Full-Stack Developer · AI & Automation
        </p>
      </div>

      <p>
        © {new Date().getFullYear()} Joe Mburu. Built with React.
      </p>

    </footer>
  );
}

export default Footer;