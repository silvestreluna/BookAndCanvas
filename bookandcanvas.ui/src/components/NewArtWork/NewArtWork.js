import React from 'react';
import {
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import data from '../../helpers/data/AddProduct'
import Category from '../Category/Category'

import './NewArtWork.scss';

const newProdObj = {
  ProductName: '',
  description: '',
  price: '',
  serviceType: '',
  imgUrl: '',
  qty: ''
};


const blankNewProdFields = {
  ProductName: '',
  description: '',
  price: '',
  serviceType: '',
  imgUrl: '',
  qty: ''
};

class NewArtWork extends React.Component {
  state = {
    showingModal: false,
    newProdObj:newProdObj,
  }

  toggleModal = () => {
    this.setState({ showingModal: !this.state.showingModal });
  }

  handleChanges = (e) => {
    const fieldName = e.target.name;
    const valueEntered = e.target.value;
    const { newProdObj } = { ...this.state };
    newProdObj[fieldName] = valueEntered;
    this.setState({ newProdObj });
  }

  changeServiceType = (selectedType) => {
    const { newProdObj } = { ...this.state };
    newProdObj.serviceType = selectedType;
    this.setState({ newProdObj });
  }

  addProductToDb = (e) => {
    e.preventDefault();
    const prodObjToPostInDb = { ...this.state.newProdObj };
    prodObjToPostInDb.sellerId = 1;
    data.addNewProduct(prodObjToPostInDb)
      .then(() => {
        this.toggleModal();
        this.setState({ newProdObj: blankNewProdFields });
      })
      .catch(err => console.log(err));
  }

  render() {
    const modal = this.state.showingModal;

    const { ProductName,
      description,
      price,
      serviceType,
      qty,
      imgUrl } = this.state.newProdObj;

    return (
      <div className="NewArtWork">
        <button onClick={this.toggleModal}>Add</button>
        <Modal isOpen={modal} centered={true} >
          <ModalBody>
            <Form onSubmit={this.addProductToDb} >
              <div className="content">
                <FormGroup>
                  <Label for="productTitle">Title</Label>
                  <Input type="text" id="productTitle" name="ProductName" value={ProductName} onChange={this.handleChanges} required/>
                </FormGroup>
                <FormGroup>
                  <Label for="productDescription">Description</Label>
                  <Input type="textarea" id="productDescription" name="description" value={description} onChange={this.handleChanges} required/>
                </FormGroup>
                <FormGroup>
                  <Label for="product-qty">Quantity </Label>
                  <Input type="number" name="qty" value={qty} onChange={this.handleChanges} required/>
                </FormGroup>
                <div className="price-category">
                  <FormGroup>
                    <Label for="price">Price</Label>
                    <Input type="number" step="any" id="price" name="price" value={price} onChange={this.handleChanges} required/>
                  </FormGroup>
                  <FormGroup>
                    <Category
                      changeServiceType={this.changeServiceType}
                      serviceType={serviceType}/>
                  </FormGroup>
                </div>
                <FormGroup>
                  <Label for="img-url">Image link</Label>
                  <Input type="text" name="imgUrl" id="img-url" value={imgUrl} onChange={this.handleChanges} required />
                </FormGroup>
                <div className="add-cancel-btns">
                  <button type="submit">Add</button>
                  <button onClick={this.toggleModal}>Cancel</button>
                </div>
              </div>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default NewArtWork;