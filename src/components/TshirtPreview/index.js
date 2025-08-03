import React, { useState } from 'react';
import './index.css';

const TshirtPreview = ({ tshirtColor }) => {
  const [isFrontView, setIsFrontView] = useState(true);
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (isFrontView) {
          setFrontImage(reader.result);
        } else {
          setBackImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    } else {
      alert('File must be PNG, JPG, or SVG and under 5MB.');
    }
  };

  const getDisplayImage = () => {
    if (isFrontView) {
      return frontImage || '/images/front view.png';
    } else {
      return backImage || '/images/back view.png';
    }
  };

  return (
    <div className="preview-section">
      {/* View Toggle */}
      <div className="view-toggle">
        <button className={isFrontView ? 'active' : ''} onClick={() => setIsFrontView(true)}>
          Front View
        </button>
        <button className={!isFrontView ? 'active' : ''} onClick={() => setIsFrontView(false)}>
          Back View
        </button>
      </div>

      {/* T-shirt Preview */}
      <div className="tshirt-preview" style={{ backgroundColor: tshirtColor }}>
        <img
          src={getDisplayImage()}
          alt={isFrontView ? 'Front View' : 'Back View'}
          className="tshirt-image"
        />
      </div>

      {/* Upload Section */}
      <div className="upload-section">
        <div className="upload-box">
          <i className="upload-icon">📤</i>
          <p className="upload-title">Upload Your Design</p>
          <p className="upload-hint">Drag and drop your image here, or click to browse</p>

          <label htmlFor="file-upload" className="browse-button">📁 Browse Files</label>
          <input
            id="file-upload"
            type="file"
            accept="image/png, image/jpeg, image/svg+xml"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />

          <p className="file-format">Supported formats: PNG, JPG, SVG. Max size: 5MB</p>
        </div>
      </div>
    </div>
  );
};

export default TshirtPreview;
