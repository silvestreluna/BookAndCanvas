import React from 'react';
import { Label, Input } from 'reactstrap';
import data from '../../helpers/data/postImg';
import './AddImage.scss';

class AddImage extends React.Component {
  state = {
    imgForImgbb: '',
    tempLocalImgToDisplay: [],
  }

  handleChange = (e) => {
    e.preventDefault();
    const allFiles = e.target.files;
    const allImages = [];
    for (let i = 0; i < allFiles.length; i += 1) {
      const img = URL.createObjectURL(allFiles.item(i));
      allImages.push(img);
    }
    this.setState({ tempLocalImgToDisplay: allImages });
  };

  uploadImgToImgbb = () => {
    const { imgForImgbb } = this.state;
    const dataForm = new FormData();
    dataForm.append('image', imgForImgbb);
    data.addImgToImgBB(dataForm)
      .then((resp) => {
        const imgUrl = resp.data.data.display_url;
        this.setState({ tempLocalImgToDisplay: [] });
        this.props.setProdImgUrl(imgUrl);
      })
      .catch((error) => console.error(error));
  }

  render() {
    const { tempLocalImgToDisplay } = this.state;

    const displayLabel = () => {
      if (tempLocalImgToDisplay.length > 0) {
        return <Label for="img-url">Change your Image</Label>;
      }
      return <Label for="img-url">Select an Image to upload</Label>;
    };

    const displayTempImgs = tempLocalImgToDisplay.map((imgUrl) => <img src={imgUrl} key={imgUrl} alt="product img"/>);

    return (
      <div className="AddImage">
        <div className="diplay-temp-img">
          {
            (tempLocalImgToDisplay)
              ? (
                <div className="temp-img-wrapper">
                  {displayTempImgs}
                </div>
              )
              : (
                ''
              )
          }
        </div>
        <div className="file-upload-input">
          <Input type="file" name="imgUrl" id="img-url" multiple onChange={this.handleChange} />
          {
            displayLabel()
          }
          {/* <Label for="img-url">Select an Image to upload</Label> */}
        </div>
        {
          (tempLocalImgToDisplay)
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
