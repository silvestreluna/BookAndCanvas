import React from 'react';
import { Modal } from 'reactstrap';

import './NewArtWork.scss';

class NewArtWork extends React.Component {
  state = {
    modalState: false,
  }

  toggleModal = () => {
    this.setState({ modalState: !modalState });
  }

  render() {
    return (
      <div className="NewArtWork">
        <h1>Hi</h1>
        {console.error(this.state.modalState)}
      </div>
    );
  }
}

export default NewArtWork;