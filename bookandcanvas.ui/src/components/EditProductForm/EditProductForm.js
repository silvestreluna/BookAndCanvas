import React from 'react';
import {
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import data from '../../helpers/data/productRequests';
import Category from '../Category/Category';
import AddImage from '../AddImage/AddImage';
import editIcon from '../../assets/images/edit-icon.svg';


import './EditProductForm.scss';


class EditProductForm extends React.Component {
  state = {
    showingModal: false,
    newProdObj: {},
  }

  toggleModal = () => {
    this.setState({ newProdObj: this.props.newProdObj });
    this.setState({ showingModal: !this.state.showingModal });
  }

  handleChanges = (e) => {
    const fieldName = e.target.name;
    const valueEntered = e.target.value;
    const tempProdObj = { ...this.state.newProdObj };
    tempProdObj[fieldName] = valueEntered;
    this.setState({ newProdObj: tempProdObj });
  }

  changeServiceType = (selectedType) => {
    const tempProdObj = { ...this.state.newProdObj };
    tempProdObj.serviceType = selectedType;
    this.setState({ newProdObj: tempProdObj });
  }

  setProdImgUrl = (imgUrl) => {
    const tempProdObj = { ...this.state.newProdObj };
    tempProdObj.imgUrl = imgUrl;
    this.setState({ newProdObj: tempProdObj });
  }

  addProductToDb = (e) => {
    e.preventDefault();
    const prodObjToPostInDb = { ...this.state.newProdObj };
    const productId = this.props.newProdObj.id;
    prodObjToPostInDb.sellerId = 1;
    data.editProduct(prodObjToPostInDb, productId)
      .then(() => {
        this.toggleModal();
        this.props.getProd();
      })
      .catch((err) => console.error(err));
  }

  render() {
    const modal = this.state.showingModal;

    const {
      productName,
      description,
      price,
      serviceType,
      qty,
      imgUrl,
    } = this.state.newProdObj;

    return (
      <div className="AddProduct">
        <img src={editIcon} alt="edit button" className="edit-btn" onClick={this.toggleModal} />

        <Modal isOpen={modal} centered={true} >
          <ModalBody>
            <Form onSubmit={this.addProductToDb} >
              <div className="content">
                <FormGroup>
                  <Label for="productTitle">Title</Label>
                  <Input type="text" id="productTitle" name="productName" value={productName} onChange={this.handleChanges} required />
                </FormGroup>
                <FormGroup>
                  <Label for="productDescription">Description</Label>
                  <Input type="textarea" id="productDescription" name="description" value={description} onChange={this.handleChanges} required />
                </FormGroup>
                <FormGroup>
                  <Label for="product-qty">Quantity </Label>
                  <Input type="number" name="qty" value={qty} onChange={this.handleChanges} required />
                </FormGroup>
                <div className="price-category">
                  <FormGroup>
                    <Label for="price">Price</Label>
                    <Input type="number" step="any" id="price" name="price" value={price} onChange={this.handleChanges} required />
                  </FormGroup>
                  <FormGroup>
                    <Category
                      changeServiceType={this.changeServiceType}
                      serviceType={serviceType} />
                  </FormGroup>
                </div>
                <FormGroup>
                  <img src={imgUrl} alt="product img" />
                  <AddImage setProdImgUrl={this.setProdImgUrl} />
                </FormGroup>
                <div className="add-btn-wrapper">
                  <button id="submit-btm" type="submit">Update</button>
                </div>
              </div>
            </Form>
<<<<<<< HEAD
            <div className="cancel-btn-wrapper">
=======
            <div className = "cancel-btn-wrapper">
>>>>>>> 3371911498fcda3164efcf9529f557264901a145
              <button className="cancel-btn" onClick={this.toggleModal}>Cancel</button>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default EditProductForm;
