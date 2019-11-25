import React from 'react';
import { Modal, 
        ModalBody, 
        ModalFooter, 
        Form, 
        FormGroup, 
        Label, 
        Input } from 'reactstrap';

import './NewArtWork.scss';

class NewArtWork extends React.Component {
  state = {
    showingModal: false,
  }

  toggleModal = () => {
    this.setState({ showingModal: !this.state.showingModal});
  }

  render() {
    const modal = this.state.showingModal;
    return (
      <div className="NewArtWork">
        <h1>Hi</h1>
        <button onClick={this.toggleModal}>press</button>
        {console.log(this.state.showingModal)}
        <Modal isOpen={modal} centered={true} >
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="productTitle"></Label>
                <Input placeholder="TITLE"/>
              </FormGroup>
              <FormGroup>
                <Label for="productDescription"></Label>
                <Input type="textarea" id="productDescription" placeholder="DESCRIPTION"/>
              </FormGroup>
              <div>
                <FormGroup>
                  <Label for="price"></Label>
                  <Input placeholder="PRICE"/>
                </FormGroup>
                <FormGroup>
                  <Label for="typeCategory">SERVICE TYPE</Label>
                  <Input type="select" name="type-selection" id="typeCategory"/>
                </FormGroup>
              </div>
            </Form>
          </ModalBody>
          <ModalFooter>
            <button onClick={this.toggleModal}>Close</button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default NewArtWork;