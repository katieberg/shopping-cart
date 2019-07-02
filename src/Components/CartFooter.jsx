import React from "react";

class Footer extends React.Component {
  render() {
    const { year } = this.props;
    return (
      <nav className="navbar navbar-dark bg-dark" id="f">
        <a className="navbar-brand" href="#">
          &copy; {year}
        </a>
      </nav>
    );
  }
}

export default Footer;
