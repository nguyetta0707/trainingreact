import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../LeftMenu/LeftMenu.css';
import BackgroundPage from "../../page/Studio/BackgroundPage";
import LightingPage from "../../page/Studio/LightingPage"; 
import Navigation from '../Navigation';

class LeftMenu extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/background" component={BackgroundPage}/>
             <Route path="/lighting" component={LightingPage}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

/* function LeftMenu(){
  return(
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/background' component={BackgroundPage}/>
        <Route path='/lighting' component={LightingPage}/>
      </Switch>
    </Router>
    </>
  )
} */

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

export default LeftMenu;