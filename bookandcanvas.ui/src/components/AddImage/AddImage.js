import React from 'react';
import { Label, Input } from 'reactstrap';
import './AddImage.scss';

class AddImage extends React.Component {
  state = {
    tempLocalImgToDisplay: [],
  }

  handleChange = (e) => {
    e.preventDefault();
    const allFiles = e.target.files;
    const tempImgs = [];
    const imgFiles = [];
    for (let i = 0; i < allFiles.length; i += 1) {
      const img = URL.createObjectURL(allFiles.item(i));
      tempImgs.push(img);
      imgFiles.push(allFiles[i]);
    }
    this.setState({ tempLocalImgToDisplay: tempImgs });
    this.props.setProdImgUrl(imgFiles);
  };

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
        </div>
      </div>
    );
  }
}

export default AddImage;
