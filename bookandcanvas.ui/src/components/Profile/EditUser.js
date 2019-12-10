import React from 'react';
import {
  Modal,
  Button,
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

import data from '../../helpers/data/addUser';
import './EditUser.scss';

const editUserObj = {
  fName: '',
  lName: '',
  email: '',
  phone: '',
  imgUrl: '',
  bio: '',
};


const blankEditUserFields = {
  fName: '',
  lName: '',
  email: '',
  phone: '',
  imgUrl: '',
  bio: '',
};

class EditUser extends React.Component {
  state = {
    editUserObj,
  }

constructor(props){
  super(props);
  this.state = {snackbaropen: false, snackbarmsg: ''};
  this.handleSubmit = this.handleSubmit.bind(this);
}

snackbarClose = (event) => {
  this.setState({snackbaropen:false})
};

handleSubmit(event){
  event.preventDefault();
  fetch('https://localhost:44350/api/users',{
    method:'PUT',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      UserID:event.target.DepartmentID.value,
      DepartmentName: event.target.DepartmentName.value
    })
  })
  .then(res=> res.json())
  .then((result)=>
  {
      //alert(result);
      this.setState({snackbaropen:true, snackbarmsg:result});
  },
  (error)=>{
    //alert('Failed')
    this.setState({snackbaropen:true, snackbarmsg:'failed'});
  }
  )
}
  handleChanges = (e) => {
    const fieldName = e.target.name;
    const valueEntered = e.target.value;
    const tempUserObj = { ...this.state.editUserObj };
    tempUserObj[fieldName] = valueEntered;
    this.setState({ editUserObj: tempUserObj });
  }

  addUserToDb = (e) => {
    e.preventDefault();
    const userObjToPostInDb = { ...this.state.editUserObj }; console.error(userObjToPostInDb)
    data.editNewUser(userObjToPostInDb)
      .then(() => {
        this.setState({ editUserObj });
        data.get();
      })
      .catch((err) => console.error(err));
  }

  getUser = () => {
    data.editNewUserById().then((user) => {
      const editUser = [...user];
      console.error(editUser)
      // this.setState({ editUserObj: editUser })
    }).catch((error) => {
      console.log('It broke:', error);
    });
  }


  render() {
    const {
      fName,
      lName,
      email,
      phone,
      bio,
      imgUrl,
    } = this.state.editUserObj;

    return (

      <div className="container">
<Snackbar 
anchorOrigin={{vertical:'bottom',horizontal:'center'}}
open = {this.state.snackbaropen}
autoHideDuration = {3000}
onClose={this.snackbarClose}

message = {<span id="message-id">{this.state.snackbarmsg}</span>}
action={[
<IconButton
key="close"
arial-label="Close"
color="inherit"
onClick={this.snackbarClose}
>
  x
</IconButton>
]}
/>

            <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-center">
            Edit User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
          
          <Row>
              <Col sm={6}>
              <Form onSubmit={this.handleSubmit}>


              <Form.Group controlId="id">
              <Form.Label>User ID</Form.Label>
              <Form.Control
                type="text"
                name="USerID"
                required
                disabled
                defaultValue = {this.props.id}
                placeholder="UserID"
               />
              </Form.Group>

              <Form.Group controlId="UserFName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="UserFName"
                required
                defaultValue = {this.props.fName}
                placeholder="First Name"
               />
              </Form.Group>

              
              <Form.Group controlId="UserLName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="UserLName"
                required
                defaultValue = {this.props.lName}
                placeholder="Last Name"
               />
              </Form.Group>

              <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="Phone"
                required
                defaultValue = {this.props.phone}
                placeholder="Phone #"
               />
              </Form.Group>

              <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                required
                defaultValue = {this.props.email}
                placeholder="email"
               />
              </Form.Group>

              <Form.Group controlId="imgUrl">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="imgUrl"
                required
                defaultValue = {this.props.imgUrl}
                placeholder="imgUrl"
               />
              </Form.Group>

              <Form.Group>
                  <Button variant="primary" type="submit">
                  Update User
                  </Button>
              </Form.Group>
              </Form>
              </Col>
          </Row>

         

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>

      </div>
      // <div className="EditUser">
      //       <Form onSubmit={this.editUserToDb} >
      //         <div className="content">
      //         <Modal
      //         {...this.props}
      //         size="lg"
      //         aria-labelledby="contained-modal-title-vcenter"
      //         centered
      //       >
      //         <Modal.Header closeButton>
      //           <Modal.Title id="contained-modal-title-center">
      //             Edit User
      //           </Modal.Title>
      //         </Modal.Header>
      //         <Modal.Body>
      //           <FormGroup>
      //             <Label for="fName">First Name</Label>
      //             <Input type="text" id="fName" name="fName" value={fName} onChange={this.handleChanges} required />
      //           </FormGroup>
      //           <FormGroup>
      //             <Label for="lName">Last Name</Label>
      //             <Input type="text" id="lName" name="lName" value={lName} onChange={this.handleChanges} required />
      //           </FormGroup>
      //           <FormGroup>
      //             <Label for="email">Email</Label>
      //             <Input type="text" id="email" name="email" value={email} onChange={this.handleChanges} required />
      //           </FormGroup>
      //           <FormGroup>
      //             <Label for="phone">Phone</Label>
      //             <Input type="text" id="phone" name="phone" value={phone} onChange={this.handleChanges} required />
      //           </FormGroup>
      //           <FormGroup>
      //             <Label for="imgUrl">Avatar URL</Label>
      //             <Input type="text" id="imgUrl" name="imgUrl" value={imgUrl} onChange={this.handleChanges} required />
      //           </FormGroup>
      //           <FormGroup>
      //           <Label for="bio">Biography</Label>
      //           <Input type="textarea" id="bio" name="bio" value={bio} onChange={this.handleChanges} required />
      //         </FormGroup>
      //         </div>
      //         <FormGroup>
      //           <div className="add--btn">
      //             <button type="submit" onClick={this.addUserToDb}>Update</button>
      //           </div>
      //         </FormGroup>
      //       </Form>
      // </div>
    );
  }
}

export default EditUser;
