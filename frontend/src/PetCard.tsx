import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import InquiryModal from './InquiryModal';
import Pet from './Pet';

type Props = {
  pet: Pet;
};

class PetCard extends Component<Props> {
  state = {
    modalShow: false
  }

  render() {
    return (
      <>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={"https://source.unsplash.com/collection/212527/200x200/?sig=" + Math.floor(Math.random() * 100)} />
        <Card.Body>
          <Card.Title>{this.props.pet.name}</Card.Title>
          <Card.Text>{this.props.pet.description}</Card.Text>
          <Button variant="primary" onClick={() => this.showModal(true)}>Adopt</Button>
          
        </Card.Body>
      </Card>
      
      <InquiryModal pet={this.props.pet} show={this.state.modalShow} onHide={this.modalClose} />
      </>
    );
  }
  showModal(show: boolean): void {
    this.setState( {modalShow: show});
  }
  
  modalClose(): void {
    this.setState( {modalShow: false});
  }
}

export default PetCard;