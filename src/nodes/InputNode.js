// src/components/InputForm.js
import React from 'react';

const InputForm = ({ inputValue = '', setInputValue }) => {
  const handleChange = (e) => {
    if (setInputValue) {
      setInputValue(e.target.value);
    }
  };

  return (
    <div className="input-node p-4 border rounded shadow-md bg-white">
      <h3 className="text-lg font-semibold">Input</h3>
      <p>Write the input/question you want to ask</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
        className="mt-2 p-2 border rounded w-full"
      />
    </div>
  );
};

export default InputForm;
