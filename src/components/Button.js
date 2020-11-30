import React from 'react';
import { Button } from 'react-bootstrap';

const Btn = ({ newQuote }) => (
    <Button
      id="new-quote"
      className="mx-3"
      onClick={() => newQuote()}
    >
      New Quote
    </Button>
  );

export default Btn;
