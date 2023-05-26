import React from 'react';

const Title = ({ text }) => {
  return <h1 className="p-4 text-center" style={{textDecorationLine: 'underline'}}>{text}</h1>;
};

export default Title;