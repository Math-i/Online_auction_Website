import React, { useState } from "react";

function Form({ field, handleChange,handleImage }) {
  const [formField, setFormField] = useState(field);

  

  return (
    <>
      {formField?.map((field, id) => {
        const {name,fieldName,type,placeholder} = field
        return (
          <div className="form-group mt-3" key={id}>
            <label>{fieldName}</label>
            <input
              type={type ?? "text"}
              name={name}
              className="form-control mt-2"
              placeholder={field.placeholder}
              onChange={(e) => handleChange(e)}
            />
          </div>
        );
      })}
    </>
  );
}

export default Form;
