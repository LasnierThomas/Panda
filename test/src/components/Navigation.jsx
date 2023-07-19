import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/index.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <section className="price">
        <div id="BAM">Price BAM/WAXP : 0.0198</div>
        <div id="WAX">Price WAXP/DOLLARS : 0.05121</div>
      </section>
      <ul>
        <NavLink to="Heroes" >
          <li>Heroes</li>
        </NavLink>
        <NavLink to="Ressource"> 
          <li>Ressources</li>
        </NavLink>
        <NavLink to="Gem" >
          <li>Gems</li>
        </NavLink>
        <NavLink to="Weapon" >
          <li>Weapons</li>
        </NavLink>
        <NavLink to="Armor" >
          <li>Armors</li>
        </NavLink>
        <NavLink to="Jewelery" >
          <li>Jewelry</li>
        </NavLink>
      </ul>
      <div className="bug">
        <p>
          Hello guys, I hope you will enjoy the website. If you encounter difficulties or find a bug ask me on discord maserakane#8962. For any donation to support my work here is my waxp adress :
          ffnjw.wam
        </p>
      </div>
    </div>
  );
};

export default Navigation;
