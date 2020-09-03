import React from "react";


const HomeHeader = () => {
  return (
    <div className="header">
      <div className="logMenu">
        <button>Zaloguj</button>
        <button>Załóż konto</button>
      </div>
      <div className="menu">
        <ul className="menuButtons">
          <li>Start</li>
          <li>O co chodzi?</li>
          <li>O nas</li>
          <li>Fundacja i organizacje</li>
          <li>Kontakt</li>
        </ul>
      </div>
    </div>
  );
};

export default HomeHeader;
