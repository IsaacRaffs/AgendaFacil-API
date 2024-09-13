import 'bootstrap/dist/css/bootstrap.min.css';
import './style_cabelo.css'

import axios from 'axios';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const api_url = 'http://127.0.0.1:8000/api/agendahair/';

const Cabeleireiro = () => {
  const [data, setData] = useState({
    nome: '',
    email: '',
    telefone: '',
    idade: '',
    data: ''
  });
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.nome === '' || data.email === '' || data.idade === '' || data.telefone === '' || data.data === '') {
      alert("Preencha todos os campos");
      return;
    } else {
      axios.post(api_url, {
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
        idade: data.idade,
        data: data.data,
      }).then(response => alert("Agendamento realizado com sucesso"))
        .catch(err => console.log(err));

      const templateParams = {
        from_name: data.nome,
        email: data.email,
        data_: data.data,
      };

      emailjs.send("service_v8s0vkk", "template_4pclpqf", templateParams, "C2-NcjFrxjW8HG_jI")
        .then((response) => {
          console.log("email enviado", response.status, response.text);
        });
    }
  };

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="#home">AgendaHair</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Serviços</Nav.Link>
            <Nav.Link href="#contact">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="section">
        <h1>Agenda Hair</h1>
        <p id='subtitulo'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus exercitationem doloribus alias commodi, similique veritatis et, amet corrupti est dolore id nulla praesentium? Sint praesentium quibusdam corporis ducimus dolor quaerat!</p>
        <div className="d-flex justify-content-center mb-4">
          <Button className="btn" style={{ backgroundColor: "#007bff", borderColor: "#007bff", maxWidth: "800px" }} onClick={handleShow}>
            Agendar
          </Button>
        </div>
      </div>
      <hr />
      <div className="section" id="services">
        <h2>Tipos de Corte</h2>
        <ul>
          <li>Corte Clássico</li>
          <li>Corte Moderno</li>
          <li>Corte Desconectado</li>
          <li>Corte em Camadas</li>
          <li>Corte de Festa</li>
        </ul>
      </div>
      <hr />
      <div className="section">
        <h2>Nossos produtos</h2>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://619028l.ha.azioncdn.net/img/2024/03/produto/26907/smaak-canela.jpg?ims=400x400"
              alt="Kit Óleo e Balm para Barba Smaak Canela & Rum Embaixador"
            />
            <Carousel.Caption>
              <h3>Kit Óleo e Balm para Barba Smaak Canela & Rum Embaixador</h3>
              <p>Descrição do Produto 1</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://619028l.ha.azioncdn.net/img/2024/03/produto/26908/smaak-lemon.jpg?ims=400x400"
              alt="Kit Óleo e Balm para Barba Smaak Canela & Rum Embaixador"
            />
            <Carousel.Caption>
              <h3>Kit Óleo e Balm para Barba Smaak Canela & Rum Embaixador</h3>
              <p>Descrição do Produto 2</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://619028l.ha.azioncdn.net/img/2024/03/produto/26856/barberpole.jpg?ims=400x400"
              alt="Capa de Corte Barbeiro e Cabeleireiro Estampada 1,82 metros Barbershop Pole"
            />
            <Carousel.Caption>
              <h3>Capa de Corte Barbeiro e Cabeleireiro Estampada 1,82 metros Barbershop Pole</h3>
              <p>Descrição do Produto 3</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://619028l.ha.azioncdn.net/img/2024/05/produto/27063/tj-60capa.jpg?ims=400x400"
              alt="Tesoura Para Cortar Cabelo"
            />
            <Carousel.Caption>
              <h3>Tesoura Para Cortart Cabelo</h3>
              <p>Descrição do Produto 4</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Agendar Cabeleireiro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div id='agendas-body'>
              <label htmlFor="nome">Nome:</label>
              <input onChange={handleInput} name='nome' id='nome' type="text" placeholder='Nome...' />

              <label htmlFor="email">Email:</label>
              <input onChange={handleInput} name='email' id='email' type="email" placeholder='Email...' />

              <label htmlFor="telefone">Telefone:</label>
              <input onChange={handleInput} name='telefone' id='telefone' type="tel" placeholder='(xx) xxxxx-xxxx' />

              <label htmlFor="idade">Idade:</label>
              <input onChange={handleInput} name='idade' id='idade' type="number" placeholder='Idade...' />

              <label htmlFor="data">Data:</label>
              <input onChange={handleInput} name='data' id='data' type="date" placeholder='dd/mm/aaaa' />

              <Button type="submit" className="btn btn-primary">Confirmar</Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      <br />
      <br />
      <br />  
      <div className="section" id="contact">
        <h2>Localização</h2>
        <p>Rua Exemplo, 123 - Centro, Cidade - Estado</p>
        <p>Telefone: (00) 1234-5678</p>
        <p>Email: contato@cabeleireiro.com.br</p>
      </div>
    </>
  );
}

export default Cabeleireiro;
