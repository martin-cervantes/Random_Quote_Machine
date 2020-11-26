import React from 'react';
import ReactDOM from 'react-dom';

import Text from '../components/Text';
import Button from '../components/Button';
import Share from '../components/Share';

const App = ()=> (
    <div id="quote-box">
      <Text id="text" />
      <Text id="author" />
      <Button />
      <Share />
    </div>
  );

export default App;
