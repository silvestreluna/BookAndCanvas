import React from 'react';
import { Label, Input, Form } from 'reactstrap';
import data from '../../helpers/data/postImg';
import './AddImage.scss';

class AddImage extends React.Component {
  state = {
    selectedImg: [],
    img: '',
  }

  handleChange = (e) => {
    const img = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({ selectedImg: reader.result, img });
    };
    reader.readAsDataURL(img);
  };

  uploadImg = () => {
    console.error('working?');
    const imgTest = this.state.img;
    const dataForm = new FormData();
    dataForm.append('image', imgTest);
    data.addImgToImgBB(dataForm)
      .then((resp) => console.error(resp.data))
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <img src={this.state.selectedImg} />
        </div>
          <Label for="img-url">Upload Image</Label>
          <Input type="file" name="imgUrl" id="img-url" onChange={this.handleChange} />
          <Input type="button" value="submit" id="upload" name="btn-to-upload" onClick={this.uploadImg} />
      </React.Fragment>
    );
  }
}

export default AddImage;
