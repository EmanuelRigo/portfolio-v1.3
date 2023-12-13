
//import "../stylesheets/NavBar.css";
import { BsGithub, BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { PiFolderSimpleUserLight } from "react-icons/pi";

function Aside() {
  return (
    <div className="mynavbar">
    <div  className="mynavbar__container h-100   my-3 ">
    <a href="" className="navbar__container">
      <i>
        <BsGithub></BsGithub>
      </i>
      <p>GitHub</p>
    </a>
    <a href="" className="navbar__container">
      <i>
        <BsTelephone></BsTelephone>
      </i>
      <p>11-6269-9719</p>
    </a>
    <a href="" className="navbar__container">
      <i>
        <AiOutlineMail></AiOutlineMail>
      </i>
      <p>emanuel-rigo@outlook.com.ar</p>
    </a>
    <a href="" className="navbar__container">
      <i>
        <PiFolderSimpleUserLight></PiFolderSimpleUserLight>
      </i>
      <p>Projectos</p>
    </a>
  </div></div>
  )
}

export default Aside
