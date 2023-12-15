import { Container, Row, Col, Image, Card } from "react-bootstrap";

function Hero() {
  return (
    <Row className="justify-content-center p-4 mx-3 bgd-transparent ">
      <Col
        className="justify-content-center mb-lg-0 mb-4 d-flex order-lg-2 p-0"
        lg={4}
      >
        <Image fluid src="../images/images.jpeg" rounded></Image>
      </Col>
      <Col
        lg={8}
        className="d-flex flex-column justify-content-center order-lg-1 px-0"
      >
        <h2 className="text-light">ABOUT ME</h2>
        <p className="text-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolor
          vero quidem corporis consequuntur odit exercitationem modi nesciunt
          cum molestiae omnis veniam saepe, numquam ratione quae repellat dolore
          maiores quas.
        </p>
      </Col>
    </Row>
  );
}

export default Hero;
