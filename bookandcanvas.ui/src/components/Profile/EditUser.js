import React from 'react';
import {
  Modal,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

import { Link, withRouter, Redirect } from 'react-router-dom';
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
    moveToUpdate: false,
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

    if (this.state.moveToUpdate) {
      return <Redirect to="/editUser"/>;
    }

    return (
      <div className="EditUser">
            <Form onSubmit={this.editUserToDb} >
              <div className="content">
                <FormGroup>
                  <Label for="fName">First Name</Label>
                  <Input type="text" id="fName" name="fName" value={fName} onChange={this.handleChanges} required />
                </FormGroup>
                <FormGroup>
                  <Label for="lName">Last Name</Label>
                  <Input type="text" id="lName" name="lName" value={lName} onChange={this.handleChanges} required />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="text" id="email" name="email" value={email} onChange={this.handleChanges} required />
                </FormGroup>
                <FormGroup>
                  <Label for="phone">Phone</Label>
                  <Input type="text" id="phone" name="phone" value={phone} onChange={this.handleChanges} required />
                </FormGroup>
                <FormGroup>
                  <Label for="imgUrl">Avatar URL</Label>
                  <Input type="text" id="imgUrl" name="imgUrl" value={imgUrl} onChange={this.handleChanges} required />
                </FormGroup>
                <FormGroup>
                <Label for="bio">Biography</Label>
                <Input type="textarea" id="bio" name="bio" value={bio} onChange={this.handleChanges} required />
              </FormGroup>
              </div>
              <FormGroup>
                <div className="add-btn">
                  <button type="submit" onClick={this.addUserToDb}>Update</button>
                  <Link to='/' className="btn btn-primary">Profile</Link>
                </div>
              </FormGroup>
            </Form>
      </div>
    );
  }
}

export default withRouter(EditUser);
