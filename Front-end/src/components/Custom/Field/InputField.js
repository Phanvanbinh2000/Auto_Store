import { Input } from 'antd';
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

InputField.defaultProps = {
  type: 'text',
  placeholder: '',
  size: 'large',
  suffix: null,
  autocomplete: 'on',
  autofocus: false,
  maxLength: 1000,
};

function InputField(props) {
  const {
    field,
    form,
    type,
    placeholder,
    size,
    suffix,
    className,
    autocomplete,
    autofocus,
    ref,
    maxLength,
    ...rest
  } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  //Input or Input.Password
  const InputOption = type === 'password' ? Input.Password : Input;
  return (
    <>
      <InputOption
        ref={ref}
        className={showError ? className + ' error-input' : className}
        name={name}
        {...field}
        {...rest}
        placeholder={placeholder}
        size={size}
        suffix={suffix}
        autoComplete={autocomplete}
        maxLength={maxLength}
        autoFocus={autofocus}
      />
      {showError && <div className="show-error-input">{errors[name]}</div>}
    </>
  );
}

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  suffix: PropTypes.object,
  autocomplete: PropTypes.string,
  autofocus: PropTypes.bool,
  ref: PropTypes.any,
  maxLength: PropTypes.number,
};

export default InputField;
