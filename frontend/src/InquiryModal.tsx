
import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Pet from './Pet';

type Props = {
  pet: Pet;
  show: any;
  onHide: any;
};

class InquiryModal extends Component<Props> {
  render() {
    return (
      <Modal {...this.props} show={this.props.show} centered>
        <Modal.Header closeButton>
          <Modal.Title>I am to adopt {this.props.pet.name}!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            Thanks for your interest in adopting!
            Please leabe your details and we'll contact you shortly!
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onHide}>Close</Button>
          <Button variant="primary">I want to know more</Button>
        </Modal.Footer>

      </Modal>
    );
  }
}

export default InquiryModal;

