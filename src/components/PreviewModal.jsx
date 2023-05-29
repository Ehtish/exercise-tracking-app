import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const PreviewModal = ({ open, handleClose, formData }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-preview-title"
      aria-describedby="modal-preview-description"
    >
      <Box sx={style}>
        <Typography
          variant="h6"
          component="h2"
          id="modal-preview-title"
          sx={{ my: 2 }}
        >
          Activity Details
        </Typography>
        <Typography id="modal-preview-description" sx={{ my: 2, py: 2 }}>
          Username: {formData.username}
          <br />
          Activity: {formData.activity}
          <br />
          Duration: {formData.duration}
        </Typography>
        <Button onClick={handleClose} variant="outlined">
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default PreviewModal;
