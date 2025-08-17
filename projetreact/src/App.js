
// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import nécessaire du CSS Bootstrap
import { Navbar, Container, Nav } from 'react-bootstrap'; // Navbar & Nav
import Card from 'react-bootstrap/Card'; // Cartes
import Button from 'react-bootstrap/Button'; // Boutons (optionnel dans les cartes)

function App() {
  return (
    <>
      {/* Fragment React */}
      <div className="App">
        {/* Barre de navigation */}
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">MonProjet</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Accueil</Nav.Link>
                <Nav.Link href="#features">Fonctionnalités</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* En-tête */}
        <header className="bg-primary text-white text-center py-5">
          <h1>Bienvenue </h1>
          <p> les cartes de mes voyages</p>
          
        </header>

        {/* Trois cartes */}
        <Container className="mt-5 d-flex justify-content-around"> 


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.planetware.com/wpimages/2020/01/england-in-pictures-beautiful-places-to-photograph-london.jpg"  />
      <Card.Body>
        <Card.Title>England</Card.Title>
        <Card.Text>
          est un pays constitutif du Royaume-Uni, situé sur l'île de Grande-Bretagne, et est la plus grande des quatre nations qui composent le Royaume-Uni.
        
          
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  




          <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShmpg90IC6TSmzZxaALbTE-Ubvfryfei095w&s" />
            <Card.Body>
              <Card.Title>France</Card.Title>
              <Card.Text>
                La France est un pays d'Europe occidentale, connu pour sa riche histoire, sa culture et sa gastronomie.
              </Card.Text>
              <Button variant="primary">Action</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src= "https://media.istockphoto.com/id/1499025854/fr/photo/navires-touristiques-touristiques-dans-la-ville-distanbul-turquie.jpg?s=612x612&w=0&k=20&c=FwKWZvgtDeX-Q0oZ3LUXF7e_Y-IHm4vWLqFZHxmDpto=" />
            <Card.Body>
              <Card.Title>Titre 3</Card.Title>
              <Card.Text>
                Istanbul est la plus grande ville de Turquie et un important centre culturel et économique.
              </Card.Text>
              <Button variant="primary">Action</Button>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default App;
