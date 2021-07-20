import React from "react";
import '../Main/Main.css';
import LeftMenu from '../LeftMenu/LeftMenu';
import Content from '../Content/Content';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function Main() {
  return (
    <div className= "main-container">
      <div className="item-main-container col-2"><LeftMenu/></div>
      <div className="item-main-container "><Content/></div>
    </div>
  );
}

export default Main;