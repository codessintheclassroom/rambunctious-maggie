import React, { useState, useEffect } from 'react';
import './App.css';
import PetCard from './PetCard';
import { Container, Row, CardColumns, Col } from 'react-bootstrap';
import Pet from './Pet';
import { Jumbotron } from 'react-bootstrap';

const App: React.FC = () => {
  const [pets, setPets] = useState<Array<Pet>>([]);
  const apiUrl = 'https://codess-shelter.azurewebsites.net/api/v1/';

  useEffect(() => {
    const updatePets = async () => {
      const response = await fetch(apiUrl + 'pets');
      const pets = await response.json();
      setPets(pets);
    };

    updatePets();
  }, []);
  

  return (
    <Container>
      <Jumbotron>
        <h1>Welcome!</h1>
        <p>Have a look at the animals that are currently looking for a lovely home! </p>
      </Jumbotron>
      <Row>
        <Col>
          <CardColumns>
            {
              pets.map((pet) => <PetCard key={pet.id} pet={pet} />)
            }
          </CardColumns>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
