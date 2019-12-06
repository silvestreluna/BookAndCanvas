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
    if (img) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState({ tempLocalImgDisplay: reader.result, imgForImgbb: img });
      };
      reader.readAsDataURL(img);
    }
  };

  uploadImgToImgbb = () => {
    const { imgForImgbb } = this.state;
    const dataForm = new FormData();
    dataForm.append('image', imgForImgbb);
    data.addImgToImgBB(dataForm)
      .then((resp) => {
        const imgUrl = resp.data.data.display_url;
        this.props.setProdImgUrl(imgUrl);
      })
      .catch((error) => console.error(error));
  }

  render() {
    const { tempLocalImgDisplay } = this.state;

    const displayLabel = () => {
      if (tempLocalImgDisplay) {
        return <Label for="img-url">Change your Image</Label>;
      }
      return <Label for="img-url">Select an Image to upload</Label>;
    };

    return (
      <div className="AddImage">
        <div className="diplay-temp-img">
          {
            (tempLocalImgDisplay)
              ? (
                <img src={tempLocalImgDisplay} alt="selected img" />
              )
              : (
                ''
              )
          }
        </div>
        <div className="file-upload-input">
          <Input type="file" name="imgUrl" id="img-url" onChange={this.handleChange} />
          {
            displayLabel()
          }
          {/* <Label for="img-url">Select an Image to upload</Label> */}
        </div>
        {
          (tempLocalImgDisplay)
            ? (
              <Input type="button" className="btn btn-primary" value="I want this image" id="upload" name="btn-to-upload" onClick={this.uploadImgToImgbb} />
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
