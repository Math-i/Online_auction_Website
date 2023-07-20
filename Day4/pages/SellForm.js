import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sellerProduct } from "../redux/action/ProductListAction";
import { Modal } from "react-bootstrap";
import Form from "../component/Form/Form";

function SellForm({ showModal, setShowModal }) {
  //LOCAL STATE FOR ADDING PRODUCT

  const formField = [
    {
      fieldName: "Product Name",
      name: "name",
      placeholder: "John Doe",
    },
    {
      fieldName: " Product Location",
      name: "location",
      placeholder: "Enter the Location",
    },
    {
      fieldName: "  Product Description",
      name: "description",
      placeholder: "Antique etc",
    },
    {
      fieldName: "Product Photo",
      name: "image",
      type: "file",
    },
    {
      fieldName: " Product Price",
      name: "price",
      type: "number",
      placeholder: "Enter the Amount",
    },
  ];

  const [productDetails, setProductDetails] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  //CONVERT IMAGE INTO BASE 64
  const encodeImage = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  //HANDLE FUCTION TO UPLOAD IMAGE
  const handleImage = (e) => {
    const file = e.target.files[0];
    console.log("based", file);
    const base64 = encodeImage(file);
    console.log("based", base64);
    setProductDetails({ ...productDetails, image: base64 });
  };
  //FUNCTION FOR SELLING PRODUCT
  const onSubmit = () => {
    dispatch(sellerProduct(productDetails));
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <Modal show={showModal} onHide={closeModal}>
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title mb-4">Sell Product</h3>
          <Form
            field={formField}
            handleChange={handleChange}
            handleImage={handleImage}
          />
          <div className="form-text mt-3">
            <p>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our <a href="/">privacy policy.</a>
            </p>
          </div>
          <div className="d-grid mt-3 submitbtn">
            <button type="button" className="btn" onClick={onSubmit}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
}

export default SellForm;
