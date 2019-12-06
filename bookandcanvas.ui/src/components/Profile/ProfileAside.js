import React from 'react';

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

    // const displayName = this.state.user.map(name => <ul><li>{name.name}</li></ul>)
    return (
      // displayName()
      <div><h1>{this.state.user.fName}</h1><h1>{this.state.user.lName}</h1></div>
    )
  }
}