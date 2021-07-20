import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <table>
                <tr className="item-studio-main-menu">Studio</tr>
                <tr>
                    <NavLink className="nav-link" style={{color: 'black' }} to="/background" >Back Ground</NavLink>
                </tr>
                <tr>
                    <NavLink className="nav-link" style={{color: 'black' }} to="/lighting" >Lighting</NavLink>
                </tr>
                <p></p>
                <tr className="item-studio-main-menu">Model</tr>
                <tr>
                    <NavLink to="/basic" className="nav-link" style={{color: 'black' }}>Basic</NavLink>
                </tr>
                <tr>
                    <NavLink to="/face-hair" className="nav-link" style={{color: 'black' }}>Face &amp; Hair</NavLink>
                </tr>
                <tr>
                    <NavLink to="/pose" className="nav-link" style={{color: 'black' }}>Pose</NavLink>
                </tr>
                <p></p>
                <tr className="item-studio-main-menu">Categories</tr>
                <tr>
                    <NavLink to="/jackets" className="nav-link" style={{color: 'black' }}>Jackets</NavLink>
                </tr>
                <tr>
                    <NavLink to="/hoodies-pullovers" className="nav-link" style={{color: 'black' }}>Hoodies &amp; Pullovers</NavLink>
                </tr>
                <tr>
                    <NavLink to="/shirts-jackets" className="nav-link" style={{color: 'black' }}>Shirts Jackets</NavLink>
                </tr>
                <tr>
                    <NavLink to="/tops-tshirts" className="nav-link" style={{color: 'black' }}>Tops- &amp; T-shirts</NavLink>
                </tr>
                <tr>
                    <NavLink to="/pants" className="nav-link" style={{color: 'black' }}>Pants</NavLink>
                </tr>
                <tr>
                    <NavLink to="/shoes" className="nav-link" style={{color: 'black' }}>Shoes</NavLink>
                </tr>
                <tr>
                    <NavLink to="/accessories" className="nav-link" style={{color: 'black' }}>Accessories</NavLink>
                </tr>
                <p></p>
            </table>
        </div>
    );
}

/* function LeftMenu() {
  return (
    <div>
      <table>
        <tr className="item-studio">Studio</tr>
        <p className="item-studio-under-line"></p>
        <tr className="item-line-height text-left">Back Ground</tr>
        <tr className="item-line-height text-left">Lighting</tr>
        <p></p>
      </table>
      <table>
        <tr className="item-model">Model</tr>
        <p className="item-studio-under-line"></p>
        <tr className="item-line-height text-left">Basic</tr>
        <tr className="item-line-height text-left">Face &amp; Hair</tr>
        <tr className="item-line-height text-left">Pose</tr>
        <p></p>
      </table>
      <table>
        <tr className="item-categories">Categories</tr>
        <p className="item-studio-under-line"></p>
        <tr className="item-line-height text-left">Jackets</tr>
        <tr className="item-line-height text-left">Hoodies &amp; Pullovers</tr>
        <tr className="item-line-height text-left">Shirts Jackets</tr>
        <tr className="item-line-height text-left">Tops- &amp; T-shirts</tr>
        <tr className="item-line-height text-left">Pants</tr>
        <tr className="item-line-height text-left">Shoes</tr>
        <tr className="item-line-height text-left">Accessories</tr>
        <p></p>
      </table>
    </div>
  );
}  */

export default Navigation;