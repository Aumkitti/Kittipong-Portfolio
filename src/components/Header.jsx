import cv from "../assets/download/Resume Frontend.pdf";
//ทำหน้านี้ก่อน
const Header = () => {
  const myMenuFunction = () => {
    const menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className === "nav-menu") {
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  };
  return (
    <nav id="header">
      <div className="nav-logo">
        <p className="nav-name">Kittipong</p>
        <span>.</span>
      </div>
      <div className="nav-menu" id="myNavMenu">
        <ul className="nav_menu_list">
          <li className="nav_list">
            <a href="#home" className="nav-link active-link">
              Home
            </a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#about" className="nav-link">
              About
            </a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#contact" className="nav-link">
              Contact
            </a>
            <div className="circle"></div>
          </li>
        </ul>
      </div>
      <div className="nav-button">
        <a href={cv}>
          <button className="btn">
            Download Resume <i className="uil uil-file-alt"></i>
          </button>
        </a>
      </div>
      <div className="nav-menu-btn">
        <i className="uil uil-bars" onClick={myMenuFunction}></i>
      </div>
    </nav>
  );
};

export default Header;
