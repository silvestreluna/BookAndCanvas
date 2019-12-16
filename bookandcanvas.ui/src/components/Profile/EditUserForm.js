import React from 'react';
import Edit from '@material-ui/icons/Edit';
import {
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

import {withRouter } from 'react-router-dom';
import data from '../../helpers/data/addUser';
import useGlobalState from '../../GlobalState';
import './EditUser.scss';

const EditUserForm = () => {
  const [globalState, globalActions] = useGlobalState();
  let {user} = globalState;

  const [state, setState] = React.useState({
    showingModal: false,
    moveToUpdate: false,
  });

  let [fName, setFName] = React.useState(user !== null ? user.fName : '');
  let [lName, setLName] = React.useState(user !== null ? user.lName : '');
  let [phone, setPhone] = React.useState(user !== null ? user.phone : '');
  let [email, setEmail] = React.useState(user !== null ? user.email : '');
  let [bio, setBio] = React.useState(user !== null ? user.bio : '');
  let [imgUrl, setImgUrl] = React.useState(user !== null ? user.imgUrl : '');

  if (user === null) {
    return null;
  }

  const { showingModal, moveToUpdate } = state;

  const showModal = () => setState({showingModal: true });
  const hideModal = () => setState({showingModal: false });

  const addUserToDb = e => {
    e.preventDefault();

    let localUser = { fName: fName, lName: lName, phone: phone, email: email, imgUrl: imgUrl, bio: bio };

    data.editNewUser(localUser)
      .then(res => {
        const user = res.data;
        globalActions.setUser(user);
      })
      .catch(err => console.error(err))
      .finally(hideModal);
  };

  return (
    <div className="EditUser">
    <Edit alt="edit button" className="edit-btn" onClick={showModal} />

  <Modal isOpen={showingModal} centered={true} >
    <ModalBody>
      <Form onSubmit={addUserToDb} >
        <div className="content">
      <FormGroup>
        <Label for="fName">First Name</Label>
        <Input type="text" id="fName" name="fName" value={fName} onChange={e => setFName(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label for="lName">Last Name</Label>
        <Input type="text" id="lName" name="lName" value={lName} onChange={e => setLName(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="text" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label for="phone">Phone</Label>
        <Input type="text" id="phone" name="phone" value={phone} onChange={e => setPhone(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label for="imgUrl">Avatar URL</Label>
        <Input type="text" id="imgUrl" name="imgUrl" value={imgUrl} onChange={e => setImgUrl(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label for="bio">Biography</Label>
        <Input type="textarea" id="bio" name="bio" value={bio} onChange={e => setBio(e.target.value)} required />
      </FormGroup>
      </div>
      <FormGroup>
      <div className="btn-wrapper">
        <button className="submit-btn" type="submit-btn" onClick={addUserToDb}>Update</button>
        <button className="cancel-btn" onClick={hideModal}>Cancel</button>
        </div>
        </FormGroup>
      </Form>
      </ModalBody>
    </Modal>
  </div>);
};

export default withRouter(EditUserForm);
