import React from 'react';
import { Jumbotron } from 'react-bootstrap';

import initialState from './init';
import Text from '../components/Text';
import Author from '../components/Author';
import Button from '../components/Button';
import Share from '../components/Share';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote:[...initialState.quote],
      author:[...initialState.author],
      index:initialState.index
    }

    this.newQuote = this.newQuote.bind(this);
  }

  newQuote() {
    let newIndex = Math.ceil(Math.random() * 30);

    this.setState({ index: newIndex });

    console.log(this.state.index);
  }

  render() {
    const { quote, author, index } = this.state;
    const path = "https://twitter.com/intent/tweet?hashtags=quotes&text=" + quote[index] + " " + author[index];

    return (
      <Jumbotron id="quote-box">
        <Text text={ quote[index] } />
        <Author author={ author[index] } />
        <Button newQuote={this.newQuote} />
        <Share path={path} />
      </Jumbotron>
    );
  }
}
export default App;
