import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CampoDeFutebol() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
    <h1>AGENDAFUT</h1>
    <br />
    <br />
    <br />

    <div class='row' id='main'>
     <div class='col-3'>
     <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFYe1jYdhwYDYeDYPsZhiM-tyyPqHjZvcyug&s cap" />
        <Card.Body>
          <Card.Title>Campo 1</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nesciunt qui, delectus dolorum laborum deleniti exercitationem earum fugit et voluptatem ut fugiat, eius quae quam placeat eveniet! Corrupti, sit illo.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>LOCAL</ListGroup.Item>
          <ListGroup.Item>TAMANHO</ListGroup.Item>
          <ListGroup.Item>DISPONIBILIDADE</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          {values.map((v, idx) => (
            <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
              AGENDAR
              {typeof v === 'string' && `below ${v.split('-')[0]}`}
            </Button>
          ))}
          <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>Modal body content</Modal.Body>
          </Modal>
        </Card.Body>
      </Card>
     </div>

     <div class='col-3'>
     <Card>
        <Card.Img variant="top" src="     https://media.istockphoto.com/id/1410656746/pt/foto/digital-football-stadium-view-illuminated-by-blue-spotlights-and-empty-green-grass-field-sport.jpg?s=612x612&w=0&k=20&c=prglCj6yTGX_eT1jiUFc7GHcdQH9vjAW39cHX5avhZY=
" />
        <Card.Body>
          <Card.Title>Campo 2</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nesciunt qui, delectus dolorum laborum deleniti exercitationem earum fugit et voluptatem ut fugiat, eius quae quam placeat eveniet! Corrupti, sit illo.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>LOCAL</ListGroup.Item>
          <ListGroup.Item>TAMANHO</ListGroup.Item>
          <ListGroup.Item>DISPONIBILIDADE</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        {values.map((v, idx) => (
            <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
              AGENDAR
              {typeof v === 'string' && `below ${v.split('-')[0]}`}
            </Button>
          ))}
          <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>Modal body content</Modal.Body>
          </Modal>
        </Card.Body>
      </Card>
     </div>

     <div class='col-3'>
     <Card>
        <Card.Img variant="top" src="https://ardos.com.br/wp-content/uploads/2020/04/Depositphotos_81927078_xl-2015-scaled.jpg.webp" />
        <Card.Body>
          <Card.Title>Campo 3</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nesciunt qui, delectus dolorum laborum deleniti exercitationem earum fugit et voluptatem ut fugiat, eius quae quam placeat eveniet! Corrupti, sit illo.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>LOCAL</ListGroup.Item>
          <ListGroup.Item>TAMANHO</ListGroup.Item>
          <ListGroup.Item>DISPONIBILIDADE</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        {values.map((v, idx) => (
            <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
              AGENDAR
              {typeof v === 'string' && `below ${v.split('-')[0]}`}
            </Button>
          ))}
          <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>Modal body content</Modal.Body>
          </Modal>
        </Card.Body>
      </Card>
     </div>

     <div class='col-3'>
     <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-JnbZC2fm2pUKCmJNayQOS_Wvv5s2Qi1CIy4bdRu86SLqyp2thoxq493M7toWgsHApt8&usqp=CAU" />
        <Card.Body>
          <Card.Title>Campo 4</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nesciunt qui, delectus dolorum laborum deleniti exercitationem earum fugit et voluptatem ut fugiat, eius quae quam placeat eveniet! Corrupti, sit illo.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>LOCAL</ListGroup.Item>
          <ListGroup.Item>TAMANHO</ListGroup.Item>
          <ListGroup.Item>DISPONIBILIDADE</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        {values.map((v, idx) => (
            <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
              AGENDAR
              {typeof v === 'string' && `below ${v.split('-')[0]}`}
            </Button>
          ))}
          <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>Modal body content</Modal.Body>
          </Modal>
        </Card.Body>
      </Card>
     </div>
    </div>
    </>
  )
}

export default CampoDeFutebol;
