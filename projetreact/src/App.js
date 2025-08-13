
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
          <h1>Bienvenue sur mon application</h1>
          <p>Un petit sous-titre accrocheur ici</p>
        </header>

        {/* Trois cartes */}
        <Container className="d-flex justify-content-around mt-4">
          <Card style={{ width: '18rem' }}>
            <Card.Header>Carte 1</Card.Header>
            <Card.Body>
              <Card.Title>Titre 1</Card.Title>
              <Card.Text>
                Texte de présentation de la carte 1.
              </Card.Text>
              <Button variant="primary">Action</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Header>Carte 2</Card.Header>
            <Card.Body>
              <Card.Title>Titre 2</Card.Title>
              <Card.Text>
                Une autre description, différente pour la carte 2.
              </Card.Text>
              <Button variant="primary">Action</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Header>Carte 3</Card.Header>
            <Card.Body>
              <Card.Title>Titre 3</Card.Title>
              <Card.Text>
                Quelques mots pour expliquer la carte 3.
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
