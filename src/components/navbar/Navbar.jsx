// @ts-nocheck
import { useState } from "react";
import logo from "../../assets/logo.svg";
import "./navbar.css";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

//  BEM => Block Element Modifier - a Specific CSS Name Convention

function Menu() {
  return(
    <>
      <p><a href="#home">Home</a></p>
      <p><a href="#wgpt3">What is GPT3</a></p>
      <p><a href="#ossibility">Open AI</a></p>
      <p><a href="#features">Case Studies</a></p>
      <p><a href="#blog">Library</a></p>
    </>
  )
}

function Navbar() {
    const [toggleMenu, setTooggleMenu] = useState(false);

    return (
      <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <img src={logo} alt='logo'/>
          </div>
          <div className="gpt3__navbar-links_container">
            <Menu />
          </div>
        </div>
        <div className="gpt3__navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
        <div className="gpt__navbar-menu">
          {toggleMenu 
          ? <RiCloseLine color='#fff' size={27} onClick={() => setTooggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setTooggleMenu(true)} />
          }
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <Menu />
                <div className="gpt3__navbar-menu_container-links-sign">
                  <p>Sign in</p>
                  <button type="button">Sign up</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default Navbar;