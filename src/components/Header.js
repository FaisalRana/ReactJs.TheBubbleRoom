import React from "react";

function Header() {
  const headerStyle = {
    width: '100%',
    size: '400',
    fontFamily: 'spaceFont',
    fontSize: 60,
    color: 'yellow'
  }

  return (
    <div style={headerStyle}>
      <div className="row">
          <div className="column"> <span className="header1"> The International</span> <span className="header2">Pepsi<sup>®</sup> Station </span></div>
          </div>
        </div>
  );
}

export default Header
