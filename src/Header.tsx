import "./header.css";
//import logomg from "../images/alertmgs.svg";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

function Header() {
  return (
    <Row className="vh-100 header">
      <Col md={12} className="d-flex  justify-content-center  flex-column">
        <div>
          <h1 className="text-light typewritter">EMANUEL RIGO</h1>
          <h1 className="text-light">
            <span>&#160;</span>&lt;/DEV&gt; ..
          </h1>
        </div>
      </Col>
    </Row>
  );
}

export default Header;
