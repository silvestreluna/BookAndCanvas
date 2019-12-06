import React from 'react';
import { Label, Input } from 'reactstrap';
import data from '../../helpers/data/postImg';
import './AddImage.scss';

class AddImage extends React.Component {
  state = {
    imgForImgbb: '',
    tempLocalImgDisplay: '',
  }

  handleChange = (e) => {
    const img = e.target.files[0];
    console.error(img);
    if (img) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState({ tempLocalImgDisplay: reader.result, imgForImgbb: img });
      };
      reader.readAsDataURL(img);
    }
  };

  uploadImg = () => {
    console.error('working?');
    const { imgForImgbb } = this.state;
    const dataForm = new FormData();
    dataForm.append('image', imgForImgbb);
    data.addImgToImgBB(dataForm)
      .then((resp) => console.error(resp.data))
      .catch((error) => console.error(error));
  }

  render() {
    const { tempLocalImgDisplay } = this.state;

    return (
      <div className="AddImage">
        <div className="diplay-temp-img">
          {
            (tempLocalImgDisplay)
              ? (
                <img src={this.state.tempLocalImgDisplay} alt="selected img" />
              )
              : (
                ''
              )
          }
        </div>
        <div className="file-upload-input">
          <Input type="file" name="imgUrl" id="img-url" onChange={this.handleChange} />
          <Label for="img-url">Select an Image to upload</Label>
        </div>
        {
          (tempLocalImgDisplay)
            ? (
              <Input type="button" className="btn btn-primary" value="Upload Image" id="upload" name="btn-to-upload" onClick={this.uploadImg} />
            )
            : (
              ''
            )
        }
        <div>
        </div>
      </div>
    );
  }
}

export default AddImage;
