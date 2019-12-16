import React from 'react';
import {
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import data from '../../helpers/data/addProductCalls';
import updateProd from '../../helpers/data/productRequests';
import postImg from '../../helpers/data/imageRequest';
import imgBB from '../../helpers/data/postImg';
import Category from '../Category/Category';
import AddImage from '../AddImage/AddImage';

import './addProduct.scss';

const newProdObj = {
  ProductName: '',
  description: '',
  price: '',
  serviceType: '',
  imgUrl: '',
  qty: '',
};


const blankNewProdFields = {
  ProductName: '',
  description: '',
  price: '',
  serviceType: '',
  imgUrl: '',
  qty: '',
};

class AddProduct extends React.Component {
  state = {
    showingModal: false,
    newProdObj,
    imgFilesRaw: [],
    imgbbURLs: [],
    // prodId: '',
  }

  toggleModal = () => {
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

  updateStateWithRawImgFiles = (imgFiles) => {
    this.setState({ imgFilesRaw: imgFiles });
  }

  uploadImgToImgbb = (prodId) => {
    const { imgFilesRaw } = this.state;
    const imgUrls = [];
    const promises = [];
    for (let i = 0; i < imgFilesRaw.length; i += 1) {
      const dataForm = new FormData();
      dataForm.append('image', imgFilesRaw[i]);
      promises.push(imgBB.addImgToImgBB(dataForm));
    }
    Promise.all(promises)
      .then((resp) => {
        resp.forEach((url) => {
          const imgUrl = url.data.data.display_url;
          imgUrls.push(imgUrl);
        });
      }).then(() => {
        this.setState({ imgbbURLs: imgUrls });
        const updateProductObj = { ...this.state.newProdObj };
        const firstImgForProdTile = this.state.imgbbURLs[0];
        updateProductObj.imgUrl = firstImgForProdTile;
        updateProductObj.sellerId = 1;
        updateProd.editProduct(updateProductObj, prodId)
          .then(() => {
            this.toggleModal();
            this.setState({ newProdObj: blankNewProdFields });
            this.props.getProd();
          });
        this.addImgUrlsToDb(prodId);
      })
      .catch((error) => console.error(error));
  }

  addImgUrlsToDb = (productId) => {
    const imgUrlArray = this.state.imgbbURLs;
    const tempImgObj = {
      UserId: 1,
      ProductId: productId,
    };

    imgUrlArray.forEach((img) => {
      tempImgObj.imageUrl = img;
      postImg.postImgToDb(tempImgObj)
        .catch((error) => console.error(error));
    });
  }

  addProductToDb = (e) => {
    e.preventDefault();
    const prodObjToPostInDb = { ...this.state.newProdObj };
    prodObjToPostInDb.sellerId = 1;
    data.addNewProduct(prodObjToPostInDb)
      .then((resp) => {
        this.uploadImgToImgbb(resp.data.id);
      })
      .catch((err) => console.error(err));
  }

  render() {
    const modal = this.state.showingModal;

    const {
      ProductName,
      description,
      price,
      serviceType,
      qty,
      imgUrl,
    } = this.state.newProdObj;

    return (
      <div className="AddProduct">
        <button onClick={this.toggleModal}>Add</button>
        <Modal isOpen={modal} centered={true} >
          <ModalBody>
            <Form onSubmit={this.addProductToDb} >
              <div className="content">
                <FormGroup>
                  <Label for="productTitle">Title</Label>
                  <Input type="text" id="productTitle" name="ProductName" value={ProductName} onChange={this.handleChanges} required />
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
                  {
                    (imgUrl)
                      ? (
                        <img src={imgUrl} alt="product img" />
                      )
                      : (
                        <AddImage updateStateWithRawImgFiles={this.updateStateWithRawImgFiles} />
                      )
                  }
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

export default AddProduct;
