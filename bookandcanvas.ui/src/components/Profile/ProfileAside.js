import React from 'react';
import './ProfileAside.scss';

import axios from 'axios';

export default class ProfileAside extends React.Component {
  state = {
    user: [],
  }

  componentDidMount() {
    axios.get(`https://localhost:44350/api/users/1`)
      .then(res => {
        const user = res.data;
        this.setState({ user: { ...user } });
      })
  }

  render() {

    return (
      // Return user info
      <div className="userinfo">
        <img className="useravatar" src={this.state.user.imgUrl}/>
        <h3 className="userfname">{this.state.user.fName}</h3>
        <h3 className="userlname">{this.state.user.lName}</h3>
        <h5 className="useremail">{this.state.user.email}</h5>
        <h5 className="userphone">{this.state.user.phone}</h5>
        <p className="userbio">{this.state.user.bio}</p>
      </div>
    )
  }
}