import React, { useState } from 'react';
import PropTypes from 'prop-types';

InputBox.propTypes = {
  placeholderText: PropTypes.string,
  labelText: PropTypes.node.isRequired,
  descriptionText: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  inputType: PropTypes.string.isRequired,
  inputSize: PropTypes.string
};

function InputBox({
  placeholderText,
  labelText,
  descriptionText,
  defaultValue,
  inputType,
  inputSize
}) {
  const [inputValue, setInputValue] = useState(defaultValue);

  const handleInputChange = (event) => {
    setInputValue(
      inputType === 'checkbox' ? event.target.checked : event.target.value
    );
  };

  const width =
    {
      m: 'w-3/6',
      s: 'w-1/3',
      'xs-1': 'w-1/6',
      'xs-2': 'w-1/12',
      default: 'w-full'
    }[inputSize] || 'w-full';

  return (
    <div className="flex flex-col gap-2.5 mt-2">
      <label className="block text-m font-medium leading-6 text-gray-900">
        {labelText}
      </label>
      <div className="text-sm italic">{descriptionText}</div>
      <div>
        {inputType === 'checkbox' ? (
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              onChange={handleInputChange}
              checked={inputValue}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <span>{placeholderText}</span>
          </div>
        ) : (
          <input
            type={inputType}
            onChange={handleInputChange}
            value={inputValue}
            placeholder={placeholderText}
            className={`${width} block rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
          />
        )}
      </div>
      <hr />
    </div>
  );
}

export default InputBox;
