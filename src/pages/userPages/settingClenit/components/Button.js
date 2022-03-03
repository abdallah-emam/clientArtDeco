import React from "react";
import Button from '@mui/material/Button';


const CustomButton = ({ text, icon }) => {
  return (
    <Button
      className="site_btn"
      endIcon={
        icon ? (
          <div className="icon_container">
              {icon}
          </div>
        ) : null
      }
    >
      <span className="button_text">{text}</span>
    </Button>
  );
};

export default CustomButton;
