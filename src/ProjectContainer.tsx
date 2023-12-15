import Project from "./Project";
import { Row, Col } from "react-bootstrap";
import { AiFillHtml5 /*  AiFillGithub  */ } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  /*   BiLogoReact,
  BiLogoNodejs,
  BiLogoTailwindCss,
  BiLogoGit, */
  BiLogoFirebase,
} from "react-icons/bi";

import { FaBootstrap } from "react-icons/fa";
/* import { useState } from "react"; */

function ProjectContainer() {
  return (
    <Col sm={12} className="bgd-transparent px-4">
      <Row className="custom-border p-0 py-4  ">
        <Col lg={6} className=" order-md-2 pb-xs-0">
          <Project
            image={"../images/cafe 00.png"}
            name={"Cafe"}
            description={
              "Pagina de una cafeteria estilo oriental en Buenos Aires"
            }
            icons={[
              <AiFillHtml5 className="project__icon" />,
              <BiLogoCss3 className="project__icon" />,
              <FaBootstrap className="project__icon" />,
            ]}
          ></Project>
        </Col>
        <Col lg={6} className="px-4 order-md-1">
          <Project
            image={"../images/lab 01.png"}
            name={"Lab"}
            description={"Pagina y sistema para un laboratorio clinico"}
            icons={[
              <AiFillHtml5 className="project__icon" />,
              <BiLogoCss3 className="project__icon" />,
              <BiLogoJavascript className="project__icon" />,
              <FaBootstrap className="project__icon" />,
              <BiLogoFirebase className="project__icon" />,
            ]}
          ></Project>
          <Project
            image={"../images/videoteca 03.png"}
            name={"Videoteca"}
            description={"Pagina con informacion de peliculas"}
            icons={[
              <AiFillHtml5 className="project__icon" />,
              <BiLogoCss3 className="project__icon" />,
              <BiLogoJavascript className="project__icon" />,
              <BiLogoFirebase className="project__icon" />,
            ]}
          ></Project>
        </Col>
      </Row>
    </Col>
  );
}

export default ProjectContainer;
