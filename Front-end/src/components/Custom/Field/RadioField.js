import { Radio } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPyKZCfws_sflkxLvLZcU7hjN-ATzFmPE",
  authDomain: "mango-25c9a.firebaseapp.com",
  projectId: "mango-25c9a",
  storageBucket: "mango-25c9a.appspot.com",
  messagingSenderId: "564276782786",
  appId: "1:564276782786:web:57be5c718f8a2111dabd5b",
  measurementId: "G-L2S94DPL65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
Radio.defaultProps = {
  options: [],
};

function RadioField(props) {
  const { field, form, className, options } = props;
  const { name, value } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const handleOnChange = (data) => {
    const { value } = data.target;
    form.setFieldValue(name, value);
  };

  return (
    <Radio.Group
      className={showError ? className + ' error-input' : className}
      name={name}
      value={value}
      onChange={handleOnChange}>
      {options &&
        options.map((option, index) => (
          <Radio key={index} value={option.value}>
            {option.label}
          </Radio>
        ))}
    </Radio.Group>
  );
}

RadioField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  className: PropTypes.string,
  options: PropTypes.array,
};

export default RadioField;
