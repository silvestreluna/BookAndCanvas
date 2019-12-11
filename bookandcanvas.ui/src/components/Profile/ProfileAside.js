import React from 'react';

import { Link, withRouter, Redirect } from 'react-router-dom';
import './ProfileAside.scss';
import axios from 'axios';
import PropTypes from 'prop-types';
import editUser from './EditUser'

import userShape from '../../helpers/Propz/UserShape';


class ProfileAside extends React.Component {
  state = {
    user: {},
    moveToEdit: false,
    show: false,
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  static propTypes = {
    user: userShape.userShape,
  }

  componentDidMount() {
    axios.get('https://localhost:44350/api/users/1')
      .then(res => {
        const user = res.data;
        this.setState({ user: { ...user } });
      });
  }

  render() {
    const { user } = this.state;

    if (this.state.moveToEdit) {
      return <Redirect to="/editUser"/>;
    }

    return (
      // Return user info
      <div className="userinfo">
        <img className="useravatar" src={this.state.user.imgUrl}/>
        <h3 className="userfname">{this.state.user.fName}</h3>
        <h3 className="userlname">{this.state.user.lName}</h3>
        <h6 className="useremail">{this.state.user.email}</h6>
        <h6 className="userphone">{this.state.user.phone}</h6>
        <p className="userbio">{this.state.user.bio}</p>
        <Link to='/editUser' className="btn btn-primary">EDIT</Link>
      </div>
    );
  }
}

export default withRouter(ProfileAside);
