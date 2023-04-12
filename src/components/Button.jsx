import React from 'react';

const Button = ({ styles }) => (
  <button
    type='button'
    className={`py-4 px-6 font-poppins font-medium text-[26px] text-primary bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 rounded-[10px] outline-none ${styles}`}
  >
    Create your own Mix Boba Bubble
  </button>
);

export default Button;
