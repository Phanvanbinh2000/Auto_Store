import { Checkbox } from 'antd';
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

function CheckboxField(props) {
  const { field, className, children } = props;
  const { name, value } = field;

  return (
    <Checkbox className={className} name={name} {...field} checked={value}>
      {children}
    </Checkbox>
  );
}

CheckboxField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  className: PropTypes.string,
  checked: PropTypes.bool,
  children: PropTypes.any,
};

export default CheckboxField;
