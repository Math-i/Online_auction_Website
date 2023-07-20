import React, { useState } from "react";

const   Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const MyModal = () => (
    <div id="Login">
      <h1>The Best Place to Buy and Sell</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nihil.
      </p>
      <button onClick={closeModal} className="btn">
        close modal
      </button>
    </div>
  );

  return (
    <>
      <button onClick={openModal} className="btn">
        show Modal
      </button>
      {showModal && <MyModal />}
    </>
  );
};

export default Modal;
