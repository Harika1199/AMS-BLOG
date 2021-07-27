import './header.css';
export function Header(){
    return(<div id="header" className="header">
    <a href="#home" className="header-item"><i className="fa fa-fw fa-home"></i> Home</a>
    <a href="#about" className="header-item"><i className="fa fa-fw fa-search"></i> About Us</a>
    <a href="#jobs" className="header-item"><i className="fa fa-fw fa-envelope"></i> Jobs</a>
    <a href="#workshops" className="header-item"><i className="fa fa-fw fa-user"></i> Workshops</a>
    <a href="#newsletter" className="header-item"><i className="fa fa-fw fa-user"></i> News Letter</a>
  </div>)
}