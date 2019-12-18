import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './ProfileAside.scss';
import EditUserForm from './EditUserForm';
import useGlobalState from '../../GlobalState';

import userShape from '../../helpers/Propz/UserShape';

const ProfileAside = () => {
  const [globalState, globalActions] = useGlobalState();
  const [state, setState] = React.useState(
    {
      moveToEdit: false,
      show: false,
    },
  );

  const showModal = () => {
    setState({ show: true });
  };

  const hideModal = () => {
    setState({ show: false });
  };

  React.useEffect(() => {
    axios.get('https://localhost:44350/api/users/1')
      .then(res => {
        const user = res.data;
        globalActions.setUser(user);
      });
  }, []);

  const EditButton = () => (
    <EditUserForm />);

  const { user } = globalState;

  if (user === null) {
    return null;
  }

  return (
    // Return user info
    <div className="userinfo">
      <img className="useravatar" src={user.imgUrl} alt="UserAvatar"/>
      <h3 className="userfname">{user.fName}</h3>
      <h3 className="userlname">{user.lName}</h3>
      <h6 className="useremail">{user.email}</h6>
      <h6 className="userphone">{user.phone}</h6>
      <p className="userbio">{user.bio}</p>
    <div>
      <p>{EditButton()}</p>
    </div>
    </div>);
};

export default ProfileAside;
