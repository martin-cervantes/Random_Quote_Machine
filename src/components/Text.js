import React from 'react';
import ReactDOM from 'react-dom';

const Text = ({ id })=> (
    <div id={id}>
      {id.toUpperCase()}
    </div>
  );

export default Text;
