import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import data from '../../helpers/data/addUser';
import './NewUser.scss';

const newUserObj = {
  fName: '',
  lName: '',
  email: '',
  phone: '',
  imgUrl: '',
  bio: '',
};


const blankNewUserFields = {
  fName: '',
  lName: '',
  email: '',
  phone: '',
  imgUrl: '',
  bio: '',
};

class NewUser extends React.Component {
  state = {
    newUserObj,
  }

  handleChanges = (e) => {
    const fieldName = e.target.name;
    const valueEntered = e.target.value;
    const tempUserObj = { ...this.state.newUserObj };
    tempUserObj[fieldName] = valueEntered;
    this.setState({ newUserObj: tempUserObj });
  }

  addUserToDb = (e) => {
    e.preventDefault();
    const userObjToPostInDb = { ...this.state.newUserObj };
    data.addNewUser(userObjToPostInDb)
      .then(() => {
        this.setState({ newUserObj: blankNewUserFields });
        this.props.getUser();
      })
      .catch((err) => console.error(err));
  }

  render() {

    const {
      fName,
      lName,
      email,
      phone,
      bio,
      imgUrl,
    } = this.state.newUserObj;

    return (
      <div className="AddUser">
            <Form onSubmit={this.addUserToDb} >
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

                <div className="add-cancel-btns">
                  <button type="submit">Add</button>
                  <button onClick={this.toggleModal}>Cancel</button>
                </div>
            </Form>
      </div>
    );
  }
}

export default NewUser;
