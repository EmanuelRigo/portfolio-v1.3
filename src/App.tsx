import Aside from "./Aside";
import Header from "./Header";
import Hero from "./Hero";
import Section from "./Section";
import Contact from "./Contact";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <>
      <Container>
        <Aside></Aside>
        <Header></Header>
        <Hero></Hero>
        <Section></Section>
        <Contact></Contact>
      </Container>
    </>
  );
}

export default App;
