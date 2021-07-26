import './header.css';
export function Header(){
    return(<div class="navbar">
    <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Home</a>
    <a href="#about"><i class="fa fa-fw fa-search"></i> About Us</a>
    <a href="#jobs"><i class="fa fa-fw fa-envelope"></i> Jobs</a>
    <a href="#workshops"><i class="fa fa-fw fa-user"></i> Workshops</a>
    <a href="#newsletter"><i class="fa fa-fw fa-user"></i> News Letter</a>
  </div>)
}