import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import axios from 'axios';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const api_url = 'http://127.0.0.1:8000/api/agendafut/'

function CampoDeFutebol() {
  const [data, setData] = useState({
    dnome: '',
    demail: '',
    dtelefone: '',
    didade: '',
    ddata: ''
  });
  const values = [true];
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  };

  function handleSubmit(e) {
    e.preventDefault();
    axios.post(api_url, {
        nome: data.dnome,
        email: data.demail,
        telefone: data.dtelefone,
        idade: data.didade,
        campo: data.dcampo,
        data: data.ddata,
    }).then(response => console.log(response)).catch(err => console.log(err));
  }
  return (
    <>
      <h1>AGENDAFUT</h1>
      <br />
      <br />
      <br />
      
      {values.map((v, idx) => (
        <div key={idx} className="d-flex justify-content-center">
        <Button className="me-2 mb-2 btn" style={{ backgroundColor: "black", color: "white" }}  onClick={handleShow}>
          AGENDAR
        </Button>
        </div>
      ))}

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Agendando campo de futebol</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div id='agendas-body'>
            <label htmlFor="dnome">Nome: </label>
            <input onChange={handleInput} name='dnome' id='dnome' type="text" placeholder='Nome...'/><br />
            
            <label htmlFor="demail">Email: </label>
            <input onChange={handleInput} name='demail' id='demail' type="email" placeholder='Email...'/><br />
            
            <label htmlFor="demail">Telefome: </label>
            <input onChange={handleInput} name='dtelefone' id='dtelefone' type="tel" placeholder='(xx) xxxxx-xxxx'/><br />
            
            <label htmlFor="didade">Idade: </label>
            <input onChange={handleInput} name='didade' id='didade' type="number" placeholder='Idade...'/><br />
            
            <label htmlFor="dcampo">Campo: </label>
            <select onChange={handleInput} name="dcampo" id="dcampo">
              <option value="C1">Campo 1</option>
              <option value="C2">Campo 2</option>
              <option value="C3">Campo 3</option>
              <option value="C4">Campo 4</option>
            </select><br />
            
            <label htmlFor="ddata">Data: </label>
            <input onChange={handleInput} name='ddata' id='ddata' type="date" placeholder='dd/mm/aaaa'/>
            <input type="submit" />
          </div>    
        </form>
        </Modal.Body>
      </Modal>

      <br />
      <br />
      <br />
      <div className='row' id='main'>
        <div className='col-3'>
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
            </ListGroup>
            <Card.Body>
            </Card.Body>
          </Card>
        </div>

        <div className='col-3'>
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
        </ListGroup>
        <Card.Body>
        </Card.Body>
      </Card>
     </div>

     <div className='col-3'>
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
        </ListGroup>
        <Card.Body>
        </Card.Body>
      </Card>
     </div>

     <div className='col-3'>
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
        </ListGroup>
        <Card.Body>
        </Card.Body>
      </Card>
     </div>
    </div>
    </>
    )
  }

export default CampoDeFutebol;
