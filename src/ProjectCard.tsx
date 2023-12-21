import { Card, Col, Row, Badge } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";

interface ProjectCardProps {
  image: string;
  name: string;
  description: string;
  link: string;
  icons: element[];
}

function ProjectCard({
  image,
  name,
  description,
  icons,
  link,
}: ProjectCardProps) {
  return (
    <Card className="bg-light my-3 projectCard">
      <Row className="p-2">
        <Col md={5}>
          <a href="https://www.youtube.com">
            <Card.Img
              src={"../images/" + image}
              alt={name}
              style={{ height: "100%" }}
              className="projectCard__img"
            />
          </a>
        </Col>
        <Col md={7}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>

            {icons.map((icon, index) => (
              <span key={index}>{icon}</span>
            ))}
            <a href={link}>
              <Badge
                bg="dark"
                className="position-absolute bottom-0 start-100 translate-middle"
              >
                <AiFillGithub className="projectCard__gitIcon" />
              </Badge>
            </a>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default ProjectCard;
