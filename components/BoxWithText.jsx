import React from 'react';

const BoxWithTextComponent = ({text , color}) => {
  return (
    <div className={`bg-[${color}] p-2 rounded-lg shadow-md`} style={{backgroundColor: `${color}`}}>
      <p className="text-lg text-center text-white">{text}</p>
    </div>
  );
};

export default BoxWithTextComponent;
