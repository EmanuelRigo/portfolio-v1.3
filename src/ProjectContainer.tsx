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
import ProjectCard from "./ProjectCard";

function ProjectContainer() {
  return (
    <Col xs={12} className="bgd-transparent px-4">
      <Row className="custom-border p-0 py-4  ">
        <Col lg={6} className="px-md-3 order-md-2 p-0">
          <ProjectCard
            image="cafe 00.png"
            name="Cafe"
            description="Pagina de una cafeteria estilo oriental en Buenos Aires"
            link="https://github.com/EmanuelRigo/cafe"
            icons={[
              <AiFillHtml5 className="project__icon" />,
              <BiLogoCss3 className="project__icon" />,
              <FaBootstrap className="project__icon" />,
            ]}
          ></ProjectCard>
        </Col>
        <Col lg={6} className="px-md-3 order-md-1 p-0">
          <ProjectCard
            image="../images/lab 01.png"
            name="Lab"
            description="Pagina y sistema para un laboratorio clinico"
            link="https://github.com/EmanuelRigo/lab"
            icons={[
              <AiFillHtml5 className="project__icon" />,
              <BiLogoCss3 className="project__icon" />,
              <BiLogoJavascript className="project__icon" />,
              <FaBootstrap className="project__icon" />,
              <BiLogoFirebase className="project__icon" />,
            ]}
          />

          <ProjectCard
            image={"../images/videoteca 03.png"}
            name={"Videoteca"}
            description={"Pagina con informacion de peliculas"}
            link="https://github.com/EmanuelRigo/videoteca"
            icons={[
              <AiFillHtml5 className="project__icon" />,
              <BiLogoCss3 className="project__icon" />,
              <BiLogoJavascript className="project__icon" />,
              <BiLogoFirebase className="project__icon" />,
            ]}
          />
        </Col>
      </Row>
    </Col>
  );
}

export default ProjectContainer;
