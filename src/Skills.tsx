import "./Skills.css";

import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoTailwindCss,
  BiLogoGit,
  BiLogoFirebase,
} from "react-icons/bi";

import { FaBootstrap, FaSass } from "react-icons/fa";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";

function Skills() {
  const [nombreLenguaje, setNombreLenguaje] = useState();

  const handleChangeName = (e) => {
    const nombre = e.currentTarget.getAttribute("data-nombre");
    setNombreLenguaje(nombre);
  };

  return (
    <div className="skills my-5">
      <h2>Trabajo con {nombreLenguaje} </h2>

      <Row className="justify-content-center mb-5">
        <Col xs={"auto"} className="d-flex p-0">
          <AiFillHtml5
            data-nombre="Html"
            onMouseEnter={handleChangeName}
            className="icono html"
          />

          <BiLogoCss3
            data-nombre="Css"
            onMouseEnter={handleChangeName}
            className="icono css"
          />
          <BiLogoJavascript
            data-nombre="JavaScript"
            onMouseEnter={handleChangeName}
            className="icono js"
          />
        </Col>
        <Col xs={"auto"} className="d-flex p-0">
          <BiLogoReact
            className="icono react"
            data-nombre="ReactJs"
            onMouseEnter={handleChangeName}
          />
          <BiLogoNodejs
            className="icono nodejs"
            data-nombre="NodeJs"
            onMouseEnter={handleChangeName}
          />
          <FaBootstrap
            className="icono bootstrap"
            data-nombre="Bootstrap"
            onMouseEnter={handleChangeName}
          />
        </Col>
        <Col xs={"auto"} className="d-flex p-0">
          <BiLogoTailwindCss
            className="icono tailwind"
            data-nombre="Tailwind"
            onMouseEnter={handleChangeName}
          />
          <AiFillGithub
            className="icono github"
            data-nombre="Github"
            onMouseEnter={handleChangeName}
          />

          <BiLogoGit
            className="icono git"
            data-nombre="Git"
            onMouseEnter={handleChangeName}
          />
        </Col>
        <Col xs={"auto"} className="d-flex p-0">
          <BiLogoFirebase
            className="icono firebase"
            data-nombre="Firebase"
            onMouseEnter={handleChangeName}
          />

          <FaSass
            className="icono sass"
            data-nombre="Sass"
            onMouseEnter={handleChangeName}
          />
        </Col>
      </Row>

      {/*       <div className="skills__proyects-container">
        <div className="skills__proyects">
          <div className="skills__proyects-title">
            <h3>proyectos pequeños</h3>
          </div>
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
        </div>
        <div className="skills__proyects">
          <div className="skills__proyects-title">
            <h3>proyectos grandes</h3>
          </div>
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
        </div>
      </div> */}
    </div>
  );
}

export default Skills;
