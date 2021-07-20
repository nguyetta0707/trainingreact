import React from 'react';
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <table>
            <tr className="item-studio">Studio</tr>
            <p className="item-studio-under-line"></p>
            <tr className="item-line-height text-left"> 
                <NavLink to="/background" style={{color:"black"}}>Back Ground</NavLink>
            </tr>
            <tr className="item-line-height text-left">
                <NavLink to="/lighting" style={{color:"black"}}>Lighting</NavLink>
            </tr>
            <p></p>
        </table>
        <table>
            <tr className="item-model">Model</tr>
            <p className="item-studio-under-line"></p>
            <tr className="item-line-height text-left">
                <NavLink to="/basic" style={{color:"black"}}>Basic</NavLink>
            </tr>
            <tr className="item-line-height text-left">
                <NavLink to="/face-hair" style={{color:"black"}}>Face &amp; Hair</NavLink>
            </tr>
            <tr className="item-line-height text-left">
                <NavLink to="/pose" style={{color:"black"}}>Pose</NavLink>
            </tr>
            <p></p>
        </table>
        <table>
            <tr className="item-categories">Categories</tr>
            <p className="item-studio-under-line"></p>
            <tr className="item-line-height text-left">
                <NavLink to="/jackets" style={{color:"black"}}>Jackets</NavLink>
            </tr>
            <tr className="item-line-height text-left">
                <NavLink to="/hoodies-pullovers" style={{color:"black"}}>Hoodies &amp; Pullovers</NavLink>
            </tr>
            <tr className="item-line-height text-left">
                <NavLink to="/shirts-jackets" style={{color:"black"}}>Shirts Jackets</NavLink>
            </tr>
            <tr className="item-line-height text-left">
                <NavLink to="/tops-tshirts" style={{color:"black"}}>Tops- &amp; T-shirts</NavLink>
            </tr>
            <tr className="item-line-height text-left">
                <NavLink to="/pants" style={{color:"black"}}>Pants</NavLink>
            </tr>
            <tr className="item-line-height text-left">
                <NavLink to="/shoes" style={{color:"black"}}>Shoes</NavLink>
            </tr>
            <tr className="item-line-height text-left">
                <NavLink to="/accessories" style={{color:"black"}}>Accessories</NavLink>
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