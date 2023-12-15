import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Contact() {
  return (
    <>
      <h2 className="text-light text-center mt-5">Contacto</h2>
      <Form className="Row justify-content-center p-4 mx-3 my-4 bgd-transparent">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-light">Nombre y Apellido</Form.Label>
          <Form.Control
            type="email"
            placeholder="
john doe"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-light">Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-light">Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </>
  );
}

export default Contact;
