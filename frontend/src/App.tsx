import React, { useEffect, useState } from 'react';
import { CardColumns, Col, Container, Jumbotron, Row } from 'react-bootstrap';
import './App.css';
import Pet from './Pet';
import PetCard from './PetCard';

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
