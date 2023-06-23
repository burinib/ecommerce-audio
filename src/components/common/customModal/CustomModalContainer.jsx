import CustomModal from "./CustomModal";

const CustomModalContainer = ({ open, handleClose }) => {
  return (
    <div>
      <CustomModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default CustomModalContainer;
