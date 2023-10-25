import React from "react";
import { NavLink } from "react-router-dom";
import styled from "./PageNotFound.module.css";
const PageNotFound = (props) => {
  return (
    <div>
      <header className={styled.topHeader} />
      {/*dust particel*/}
      <div>
        <div className={styled.starsec} />
        <div className={styled.starthird} />
        <div className={styled.starfourth} />
        <div className={styled.starfifth} />
      </div>
      {/*Dust particle end-*/}
      <div className={styled.lampWrap}>
        <div className={styled.lamp}>
          <div className={styled.cable} />
          <div className={styled.cover} />
          <div className={styled.inCover}>
            <div className={styled.bulb} />
          </div>
          <div className={styled.light} />
        </div>
      </div>
      {/* END Lamp */}

      <section className={styled.error}>
        <div className={styled.errorContent}>
          <div className={styled.errorMessage} id={styled.message}>
            <h1 className={styled.messageTitle}>Page Not Found</h1>
            <p className={styled.messageText}>
              We're sorry, the page you were looking for isn't found here. The
              link you followed may either be broken or no longer exists. Please
              try again, or take a look at our.
            </p>
          </div>
          <div className={styled.errorNav}>
            <NavLink className={styled.eNavLink} to="/home"></NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default React.memo(PageNotFound);
