import React from "react";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import decoration from "./../assets/Decoration.svg";

const HomeHeader = () => {
  return (
    <header>
      <section className="backgroundImg"></section>
      <section className="header">
        <nav className="logMenu">
          <ul>
            <NavLink to="/logowanie" className="linkLogin">
              Zaloguj
            </NavLink>
            <NavLink to="/registration" className="linkReg">
              Załóż konto
            </NavLink>
          </ul>
          <section className="menu">
            <ul>
              <ScrollLink className="menuButtons start">Start</ScrollLink>
              <ScrollLink
                className="menuButtons"
                to="ocochodzi"
                spy={true}
                smooth={true}
              >
                O co chodzi?
              </ScrollLink>
              <ScrollLink className="menuButtons">O nas</ScrollLink>
              <ScrollLink className="menuButtons">
                Fundacja i organizacje
              </ScrollLink>
              <ScrollLink className="menuButtons">Kontakt</ScrollLink>
            </ul>
          </section>
        </nav>
        <section className="headerMain">
          <div className="slogan">
            <p>Zacznij pomagać!</p>
            <p> Oddaj niechciane rzeczy w zaufane ręce</p>
            <img src={decoration} alt="Black line decoration" />
          </div>
          <div className="buttonBegin">
            <NavLink to="/logowanie" className="btn give">
              Oddaj rzeczy
            </NavLink>
            <NavLink to="/logowanie" className="btn organise">
              Zorganizuj zbiórkę
            </NavLink>
          </div>
        </section>
      </section>
    </header>
  );
};

export default HomeHeader;
