import React, { useState } from 'react';
import './index.css';
import NavBar from '../../components/NavBar'
import TshirtPreview from '../../components/TshirtPreview';
import CustomizationPanel from '../../components/CustomizationPanel';

const TshirtCustomizationPage = () => {
  const [tshirtColor, setTshirtColor] = useState('#ffffff');
  const [size, setSize] = useState('M');
  const [view, setView] = useState('front');
  const [designFront, setDesignFront] = useState(null);
  const [designBack, setDesignBack] = useState(null);
  const [tshirtType, setTshirtType] = useState('Round Neck');



  const handleDesignUpload = (event, side) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      side === 'front'
        ? setDesignFront(reader.result)
        : setDesignBack(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="customization-page">
      <NavBar />
      <h2 className="title">T-shirt Customization Studio</h2>
      <div className="main-content">
        <TshirtPreview
          tshirtColor={tshirtColor}
          view={view}
          design={view === 'front' ? designFront : designBack}

        />
        <CustomizationPanel
          tshirtColor={tshirtColor}
          setTshirtColor={setTshirtColor}
          size={size}
          setSize={setSize}
          view={view}
          setView={setView}
          handleDesignUpload={handleDesignUpload}
          tshirtType={tshirtType}
          setTshirtType={setTshirtType}

        />
      </div>
    </div>
  );
};

export default TshirtCustomizationPage;
