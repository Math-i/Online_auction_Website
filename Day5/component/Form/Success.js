import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { openSuccessModal } from "../../redux/action/SigninAction";

function Success({ modal, setModal }) {
  const { isOpen } = useSelector((state) => state?.isSuccessModal);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(openSuccessModal(false));
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    dispatch(openSuccessModal(false));
  };
  return (
    <Modal show={isOpen} onHide={closeModal} className="success-modal">
      <Modal.Header>Login is Successful</Modal.Header>
      <Modal.Body>
        <img src="images/tick.jpg" alt="success_image" width="50px" />
      </Modal.Body>
    </Modal>
  );
}

export default Success;
