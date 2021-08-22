import React from "react";
// import pepsiSpace from "./../img/pepsiSpace.png"


function Header() {
  const headerStyle = {
    width: '100%',
    size: '400',
    fontFamily: 'spaceFont',
    fontSize: 60,
    color: 'yellow'
  }
  const imgStyle = {
    width: '50%',
    size: '400',
    fontFamily: 'spaceFont',
    fontSize: 60,
    color: 'yellow'
  }
  const headerColor = {
    color: 'red'
  }

  return (
    <div style={headerStyle}>
      <div id="space">
        <div className="stars"></div>
        <div className="stars"></div>
        <div className="stars"></div>
        <div className="stars"></div>
        <div className="stars"> </div>

      </div>


      <div className="row">
        {/* <div className="column"><img style={imgStyle} src={pepsiSpace} alt="pepsi in space" /> */}
          <div className="column"> <span className="header1"> The International</span> <span className="header2">Pepsi Station </span></div>
          </div>
        </div>
      // </div>
  );
}

export default Header
